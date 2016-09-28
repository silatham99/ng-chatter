import { NgChatterPage } from './app.po';

describe('ng-chatter App', function() {
  let page: NgChatterPage;

  beforeEach(() => {
    page = new NgChatterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
