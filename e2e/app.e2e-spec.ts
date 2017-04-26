import { MyMacrosAgainPage } from './app.po';

describe('my-macros-again App', () => {
  let page: MyMacrosAgainPage;

  beforeEach(() => {
    page = new MyMacrosAgainPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
