import {test,expect} from "@playwright/test";
test("Youtube",async({page})=>{
    await page.goto("https://www.youtube.com/")
    await page.locator('//input[@placeholder="Search"]').fill("modala maleyanthe")
    await page.locator('//button[@class="ytSearchboxComponentSearchButton"]').click();
    await page.locator('//a[@aria-label="Modala Maleyanthe Video Song | Mynaa | Chetan Kumar | Nithya Menen | Sonu Nigam | Kaviraj 3 minutes"]').click()
    // await page.waitForTimeout(500000)
},{timeout:60000});
