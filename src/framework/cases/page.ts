class Page {
  static open(url = '/') {
    cy.visit(Cypress.env('url') + url, {
      auth: {
        username: Cypress.env('username'),
        password: Cypress.env('password'),
      },
    });
  }
  static openAdmin(url: string) {
    cy.visit(Cypress.env('admin') + url, {
      auth: {
        username: Cypress.env('username'),
        password: Cypress.env('password'),
      },
    });
  }
}

export { Page };
