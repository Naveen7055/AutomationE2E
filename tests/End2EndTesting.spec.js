import { expect, test } from '@playwright/test'


test("end 2 end ", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/client")
      const userName = "sharmanaveen7055@gmail.com";
      const password = "Asdf@7055";
    //   const ProductName = "IPHONE 13 PRO"
    const userNameL=page.locator("#userEmail")
    const passL= page.locator("#userPassword")
    const sigin=page.locator("[value='Login']")

    await userNameL.fill(userName)
    await passL.fill(password)
    await page.waitForSelector("[value='Login']",{state:'visible'})
    await sigin.click();
    // await page.pause()
    // await page.locator("//div[@class='card-body']:nth-child(3)").click()
    await page.locator(".card-body b").first().waitFor();
    await page.locator(".card-body b").allTextContents();
    
    
   const Product= page.locator(".card-body");
   const ProductName="IPHONE 13 PRO"
   
   const count=await Product.count();

   for(let i=0; i<count; i++)
   {
     if(await Product.nth(i).locator("b").textContent() === ProductName)
     {
        // await page.pause();
       await Product.nth(i).locator("text= Add To Cart").click();
        break;
     }

   }

   await page.locator("[routerlink*='cart']").click();
   await page.locator("div li").first().waitFor()
   const bool=await page.locator("h3:has-text('IPHONE 13 PRO')").isVisible()
   console.log(bool)
   expect(bool).toBeTruthy();
   await page.locator("text=Checkout").click();

   await page.locator("[placeholder*='Country']").type("ind",{delay:100});
   const dropdown= page.locator(".ta-results")
   await dropdown.waitFor()
   const optioncount = await dropdown.locator("button").count()

   for(let i=0;i<optioncount;i++)

    {

        if(await dropdown.locator("button").nth(i).textContent()===" India")
        {
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }


//     const dropdown = page.locator(".ta-results");
//    await dropdown.waitFor();
//    const optionsCount = await dropdown.locator("button").count();
//    for (let i = 0; i < optionsCount; ++i) {
//       const text = await dropdown.locator("button").nth(i).textContent();
//       if (text === " India") {
//          await dropdown.locator("button").nth(i).click();
//          break;
//       }
//    }

  
  expect(await page.locator(".hero-primary")).toHaveText()

   await page.locator(".action__submit").click();

    await page.pause()






});

test("client app",async({page})=>
{

    await page.goto("https://rahulshettyacademy.com/client")
    
    await page.locator("#userEmail").fill("sharmanaveen7055@gamil.com")
    await page.locator("#userPassword").fill("Asdf@7055")
    const sigin=page.locator("[value='Login']")
    await sigin.click();
    // await page.locator("[value=Login']").click();
    await page.locator(".card-body b").allTextContents();
    
   const Product= page.locator(".card-body");
   const ProductName="IPHONE 13 PRO"
   
   const count=await Product.count()

   for(let i=0;i<count;i++)
   {
     if(Product.nth(i).locator("b")===ProductName)
     {
        Product.nth(i).locator(text=" Add To Cart").click();
     }

   }

await page.pause(2000)
   
})