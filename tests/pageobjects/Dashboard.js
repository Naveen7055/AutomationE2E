export class Dashboard {

    constructor(page) {
      
        this.Product = page.locator(".card-body b")
        this.Products = page.locator(".card-body");
        this.cart = page.locator("[routerlink*='cart']");







    }

    async Search(ProductName) {
        await this.Product.first().waitFor();
        await this.Product.allTextContents();

       // const Product = page.locator(".card-body");
        

        const count = await this.Products.count();

        for (let i = 0; i < count; i++) {
            if (await this.Products.nth(i).locator("b").textContent() === ProductName) {
                // await page.pause();
                await this.Products.nth(i).locator("text= Add To Cart").click();
                break;
            }

        }

    }

    async navigatetocart()
    {

        
        await this.cart.click();
    }


}



