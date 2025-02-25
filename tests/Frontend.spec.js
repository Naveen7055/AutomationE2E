import test, { expect } from '@playwright/test'
import { promises } from 'dns';

test("UI control",async({browser})=>
{
    const context= await browser.newContext();
    const page= await context.newPage();   
 await page.goto("https://rahulshettyacademy.com/loginpagePractise/")   
//  const frame=page.frame({name:'myframe'});
//  if(!frame)
//  {
//     console.error("frame not found")
//     await page.close();
//     return;
//  }

 const dropdown=page.locator("select.form-control")
 await dropdown.selectOption("teach")
 await page.waitForSelector(".radiotextsty",{timeout:3000});
 await page.locator(".radiotextsty").nth(1).click();
 await page.waitForSelector("#okayBtn",{timeout:2000})
 await page.locator("#okayBtn").click();

 await expect(page.locator(".radiotextsty").nth(1)).toBeChecked();

 await page.locator("#terms").click();
 expect(page.locator("#terms").isChecked());

 
                                         

});

test("Doclink",async({browser})=>
{
    const context= await browser.newContext();
    const page= await context.newPage()
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/") 
    const documentlink= page.locator("[href*='documents-request']") 
    ;

    const [newPage]= await Promise.all([
    context.waitForEvent('page'),
    documentlink.click()
])
// await page.pause();
 
const text= await newPage.locator(".red").textContent()

const email= text.split("@")[1].split(" ")[0]

console.log(email)




});