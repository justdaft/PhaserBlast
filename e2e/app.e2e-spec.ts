import { PhaserBlastPage } from './app.po';

describe('phaser-blast App', function() {
  let page: PhaserBlastPage;

  beforeEach(() => {
    page = new PhaserBlastPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
