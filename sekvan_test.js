
Feature('Sekvan');

Scenario('Test Case-1', (I) => {
  I.amOnPage('https://codecept.io/')
  I.waitForElement("//a[text()='API']",10);
  I.click("//a[text()='API']");
  I.waitForElement("//a[text()='WebDriver']",10);
  I.click("//a[text()='WebDriver']");
  I.waitForElement('//a[text()="dontSee"]',10);
  I.click('//a[text()="dontSee"]')
  I.wait(2)
  I.seeElement("//*[text()[contains(.,'text is not present')]]");
});

Scenario('Test Case-2', (I) => {
  I.amOnPage('https://codecept.io/')
  I.waitForElement("//a[text()='GitHub']",10);
  I.click("//a[text()='GitHub']");
  I.waitForElement('//input[@aria-label="Search"]',10);
  I.fillField('//input[@aria-label="Search"]','1.2.1 release');
  I.pressKey('Enter');
  I.wait(2)
  I.see('Codeception/CodeceptJS',locate('.repo-list .repo-list-item'.second));
});