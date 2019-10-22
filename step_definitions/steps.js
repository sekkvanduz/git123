const assert = require('assert');

const I = actor();
// Add in your custom step files

Given('URL açılır.', () => {

  I.amOnPage('https://codecept.io/')
  I.waitForElement("//a[text()='API']",10);
});
//Helper menüsü bulunmadığından ilgili senaryo için IPA menüsüne tıkladım
When('Menüden, Helpers/WebDriverIO  tıklanır.', () => {

  I.click("//a[text()='API']");
  I.waitForElement("//a[text()='WebDriver']",10);
});

And('Sol navigasyondan “dontSee” ekranı açılır.', () => {

  I.click("//a[text()='WebDriver']");
  I.waitForElement('//a[text()="dontSee"]',10);
});

Then('Parameters section altında, “text is not present” texti olduğu doğrulanır.', () => {
  I.click('//a[text()="dontSee"]')
  I.waitForElement('//a[text()="dontSee"]',2);
  I.seeElement("//*[text()[contains(.,'text is not present')]]");
});

When('GitHub linkine tıklanır.', () => {
  I.click("//a[text()='GitHub']");
  I.waitForElement('//input[@aria-label="Search"]',10);
});

And('GitHub Search alanına “1.2.1 release” yazılır ve search edilir.', () => {

  I.fillField('//input[@aria-label="Search"]','1.2.1 release');
  I.pressKey('Enter');
  I.wait(2)
});

Then('Arama sonuçlarından, ikinci sırada olana ait link açılır.', () => {
  I.see('Codeception/CodeceptJS',locate('.repo-list .repo-list-item'.second));
});


