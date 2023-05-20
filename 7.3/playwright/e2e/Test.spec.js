const { test, expect } = require("@playwright/test");
const { email, password } = require('@playwright/test/user');
test("test", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");

  await page.getByPlaceholder('Email').fill(email)
  // вводим пароль
  await page.getByPlaceholder('Пароль').fill(password);
  // нажимаем на кнопку Войти
  await page.getByTestId('login-submit-btn').click();

  
  await expect(page).toHaveURL("https://netology.ru/profile");
  await page.waitForTimeout(10000);
  expect(await page.title()).toContain('Мои программы обучения');
  expect(await page.innerText('h2')).toContain('Мои курсы и профессии');
  

}
)
test("test2", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");

  await page.getByPlaceholder('Email').fill('email@mail.ru')
  // вводим пароль
  await page.getByPlaceholder('Пароль').fill('password123');
  // нажимаем на кнопку Войти
  await page.getByTestId('login-submit-btn').click();

  
  await page.getByTestId('login-error-hint').isVisible();

}
)
