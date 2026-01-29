import {test,expect} from "@playwright/test";
test("Amazon2",async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("phones");
    await page.locator('//input[@id="nav-search-submit-button"]').click();
    await page.locator('//span[contains(text(),"Android 13.0")]/ancestor::div[@class="a-section"]/descendant::input[@type="checkbox"][72]').check();
    await page.locator("cat")
})