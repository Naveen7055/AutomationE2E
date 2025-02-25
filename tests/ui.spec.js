import { expect, test } from '@playwright/test';
import exp from 'constants';
import { promises, TIMEOUT } from 'dns';
test('demo', async ({ page }) => {
  //   const context=await browser.newContext();
  //   const page=await context.newPage();

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
  const userName = page.locator("#username")
  
  const pass = page.locator("#password")
  const sigin = page.locator("[name='signin']")
  const cardTitle = page.locator('.card-body a')
  console.log(await page.title());

  await expect(page).toHaveURL("https://rahulshettyacademy.com/loginpagePractise/")
  await userName.fill("rahulshettyacademy")
  await pass.fill("learning");
  await sigin.click();
  // console.log(await page.locator("[style*='block']").textContent())
  // await expect(page.locator("[style*='block']")).toContainText("Incorrect")

  //  console.log(await cardTitle.nth(1).textContent())
  //  expect(cardTitle.nth(1).textContent('Samsung Note 8'))

  const allTitles = await cardTitle.allTextContents()
  console.log(allTitles)

  // await page.pause(2000)

});





test('ui control', async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
  const dropdown = page.locator("select.form-control")
  await dropdown.selectOption("consult");



  await page.locator(".radiotextsty").nth(1).click();
  await expect(page.locator(".radiotextsty").nth(1)).toBeChecked();
  await page.locator("#okayBtn").click();

  await page.locator("#terms").check();
  await expect(page.locator("#terms")).toBeChecked();

  await page.locator("#terms").uncheck();

  expect(await page.locator("#terms").isChecked()).toBeFalsy();



});

test('chid window', async ({ browser }) => {

  const context = await browser.newContext();
  const page = await context.newPage();
  const documentlink = page.locator("[href*='documents-request']")
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");


  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    documentlink.click(),
  ])

  const text = await newPage.locator("p.red").textContent();
  console.log(text)
  const domain = text.split("@")[1].split(" ")[0]
  console.log(domain)
  await page.locator("#username").fill(domain);


});


