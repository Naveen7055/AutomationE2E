import { context } from '@cucumber/cucumber';
import {test} from '@playwright/test'


test.only("amazon",async({browser})=>
{
const context=await browser.newContext();
const page= await context.newPage();
await page.goto("https://www.amazon.in/")

const rows= page.locator("div ul li");
const ProductName="Best Sellers";
for(let i=0;i<await rows.count;i++)
    { 
        
    const cr=await rows.nth(i).locator("a").textContent()
   if(cr=ProductName)
    console.log(await rows.nth(i).locator("a").textContent())
}



});