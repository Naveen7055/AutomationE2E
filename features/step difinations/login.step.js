import { Given, When, Then, After } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { expect } from '@playwright/test';

let browser, context, page;

// ✅ Increase timeout for Login Step
Given('a Login to Ecommmerce website with {string} and {string}', { timeout: 100000 }, async function (userName, password) {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/client");

    await page.fill("#userEmail", userName);
    await page.fill("#userPassword", password);
    await page.click("[value='Login']");
    await page.waitForLoadState("networkidle"); // ✅ Wait until the page loads completely
});

// ✅ Add to Cart Step
When('Add {string} to cart', async function (productName) {
    await page.waitForSelector(".card-body b", { state: 'visible' });

    const products = await page.locator(".card-body");
    const count = await products.count();

    for (let i = 0; i < count; i++) {
        if (await products.nth(i).locator("b").textContent() === productName) {
            await products.nth(i).locator("text=Add To Cart").click();
            break;
        }
    }
});

// ✅ Verify Product in Cart Step (Fix "displaced" → "displayed")
Then('Verify {string} is displayed in cart', async function (productName) {
    await page.click("[routerlink*='cart']");
    await page.waitForSelector("div li");

    const isProductVisible = await page.locator(`h3:has-text('${productName}')`).isVisible();
    expect(isProductVisible).toBeTruthy();

    await page.click("text=Checkout");
});

// ✅ Enter Details and Place Order Step (Fix "Entre" → "Enter")
When('Enter the valid details and Place the order', async function () {
    await page.fill("[placeholder*='Country']", "ind", { delay: 100 });
    await page.waitForSelector(".ta-results");

    const options = page.locator(".ta-results button");
    const optionCount = await options.count();

    for (let i = 0; i < optionCount; i++) {
        if ((await options.nth(i).textContent()).trim() === "India") {
            await options.nth(i).click();
            break;
        }
    }
    await page.click("text=Place Order");
});

// ✅ Close Browser After Test Execution
After(async function() {
    await browser.close();
});
