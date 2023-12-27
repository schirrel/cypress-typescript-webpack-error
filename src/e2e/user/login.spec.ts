import { Page } from '@/framework/cases/page';
import { User } from '@/framework/cases/user';
describe('User', () => {
  it('Login - success', () => {
    Page.open();
    User.login();
  });
  it('Login - error', () => {
    Page.open();
    User.loginFailure();
  });
});
