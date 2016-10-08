import { FemrFrontendPage } from './app.po';

describe('femr-frontend App', function() {
  let page: FemrFrontendPage;

  beforeEach(() => {
    page = new FemrFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('femr works!');
  });
});
