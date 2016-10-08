import { browser, element, by } from 'protractor';

export class FemrFrontendPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('femr-root h1')).getText();
  }
}
