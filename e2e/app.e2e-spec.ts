import { EdittutorialPage } from './app.po';

describe('edittutorial App', () => {
  let page: EdittutorialPage;

  beforeEach(() => {
    page = new EdittutorialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
