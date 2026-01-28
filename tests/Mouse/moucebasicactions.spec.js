import {test, expect} from "@playwright/test"
test ("Mouse", async({page})=>{
    await page.locator("cat").click();
    await page.locator("dog").click();
})