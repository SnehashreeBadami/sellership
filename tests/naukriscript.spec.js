import {test,expect} from "@playwright/test"
test("Naukri", async({page})=>{
    await page.goto("https://www.naukri.com/")
    await page.locator('//a[@id="login_Layer"]').click();
    await page.getByPlaceholder("Enter your active Email ID / Username").fill("abc@gmaicom");
    await page.getByPlaceholder("Enter your password").fill("Sneha@123*!");
    await page.locator('//button[@class="btn-primary loginButton"]').click();
})