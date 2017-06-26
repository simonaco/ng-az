import { AngularAzPage } from './app.po';

describe('angular-az App', () => {
  let page: AngularAzPage;

  beforeEach(() => {
    page = new AngularAzPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
