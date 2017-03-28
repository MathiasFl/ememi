import { MmiOvingPage } from './app.po';

describe('mmi-oving App', () => {
  let page: MmiOvingPage;

  beforeEach(() => {
    page = new MmiOvingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
