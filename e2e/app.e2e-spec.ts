import { SierraWebsitePage } from './app.po';

describe('sierra-website App', () => {
  let page: SierraWebsitePage;

  beforeEach(() => {
    page = new SierraWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
