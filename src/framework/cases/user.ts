const wrongCredentials = {
  email: 'wrong@email.com',
  password: '123',
};
const credentials = {
    email: 'right@email.com',
    password: '321',
  };

export interface UserCredentials {
  email: string;
  password: string;
}
class User {
  static login({ email, password }: UserCredentials) {
    email = email || credentials.email;
    password = password || credentials.password;

    cy.intercept({
        method: 'POST',
        url: '/api/login',
      }).as('postLogin');
  
    cy.get('.form').should('be.visible');
    cy.get('.form button[type="submit"]').click();
    cy.wait('@postLogin').its('response.statusCode').should('eq', 200);
  }
  static loginFailure({ email, password }: UserCredentials) {
    email = email || wrongCredentials.email;
    password = password || wrongCredentials.password;
    cy.intercept({
        method: 'POST',
        url: '/api/login',
      }).as('postLogin');
  
    cy.get('.form').should('be.visible');
    cy.get('.form button[type="submit"]').click();
    cy.wait('@postLogin').its('response.statusCode').should('eq', 401);
    cy.get('.message--error').contains(
      'Invalid Email address/password combination.',
    );
  }
}

export { User };
