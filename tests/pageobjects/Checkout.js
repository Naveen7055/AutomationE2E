export class Checkout
{


    constructor(page)
    {
        this.li = page.locator("div li");
        this.Checkout = page.locator("text=Checkout");
        this.plac = page.locator("[placeholder*='Country']")
        this.dropdown = page.locator(".ta-results")

    }

     async myCart()
    {
        await this.li.first().waitFor()
        const bool = await page.locator("h3:has-text('IPHONE 13 PRO')").isVisible()
        console.log(bool)
        //expect(bool).toBeTruthy();
        await this.Checkout.click();
    
        await this.plac.type("ind", { delay: 100 });
        //   const dropdown = page.locator(".ta-results")
        await this.dropdown.waitFor()
        const optioncount = await this.dropdown.locator("button").count()
    
        for (let i = 0; i < optioncount; i++) {
    
            if (await this.dropdown.locator("button").nth(i).textContent() === " India") {
                await this.dropdown.locator("button").nth(i).click();
                break;
            }
        }
    
    
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


// expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ")

// await page.locator(".action__submit").click();

// await page.pause()






// });