const { chromium } = require("playwright");
const { test, expect } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 5000,
    devtools: true
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.fill('[name="email"]', 'dsjfhdsj@mail.ru');
  await page.fill('[name="password"]', 'jdfkhgdjf');
  await page.click("text=Войти");
  await expect(page.innerText('[data-testid="login-error-hint"]')).toContain('Вы ввели неправильно логин или пароль');

  //assertion
  await browser.close();
})();