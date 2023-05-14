const { chromium } = require("playwright");
const { expect } = require('@playwright/test');
const { email, password } = require("./user.js");

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 5000,
    devtools: true
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.fill('input[name="email"]', email);
  await page.fill('input[name="password"]', password);
  await page.click("text=Войти"), {timeout:20000};
  await expect(page).toHaveURL("https://netology.ru/profile");
  expect(await page.title()).toContain('Мои программы обучения');
  expect(await page.innerText('h2')).toContain('Мои курсы и профессии');

  //assertion
  await browser.close();
})();