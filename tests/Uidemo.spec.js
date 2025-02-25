import {test} from '@playwright/test'

test('uidemo',async({page})=>
{

  
  
//    const productName = 'zara coat 3';
//    const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   const email = "sharmanaveen7055@gmail.com";
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Asdf@7055");
   await page.locator("[value='Login']").click();
   await page.locator(".card-body b").first().waitFor();
   const allTitles=await page.locator(".card-body b").allTextContents()
   console.log(allTitles)

});