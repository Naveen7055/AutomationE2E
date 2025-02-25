import test from '@playwright/test'
import { promises } from 'dns';

test("ui control",async({browser})=>
{
const context= await browser.newContext();
const page= await context.newPage();
const link=page.locator("[href*='documents-request']")

await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

await page.locator("#username").fill("rahulshettyacademy")
await page.locator("input[name*='password']").fill("learning")

const [newPage]= await Promise.all([
context.waitForEvent('page'),
link.click()

]);
const str=await newPage.locator(".red").textContent()
console.log(str)
const email=str.split("@")[1].split(" ")[0]
console.log(email)


// await page.locator("//input[@id='signInBtn']").click()
await page.pause();

});