import test from '@playwright/test';

test("demo",async({browser})=>
{
const context=await browser.newContext();
const page= await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await page.locator("[name='password']").fill("rahulshettyacademy");
await page.locator("#password").fill("password")
// await page.pause(2000)

const [newPage]= await Promise.all([

 context.waitForEvent('page'),
 page.locator("[href*='documents-request']").click()
])
// await page.pause(2000);

const text=await newPage.locator(".red").textContent();

const email=text.split('@')[1].split(" ")[0]
console.log(email)
await page.locator("#username").fill(email);
await page.pause(2000);

});