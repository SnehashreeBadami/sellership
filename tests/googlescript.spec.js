import {test,expect} from "@playwright/test"
test("Google",async({page})=>{
    await page.goto("https://www.google.com/")
    await page.locator('//textarea[@id="APjFqb"]').fill("Playwright Automation")
    await page.locator('//textarea[@id="APjFqb"]').press('Enter');
    await page.locator('//span[@class="R1QWuf"]').nth(3).click()
    await page.locator('//div[@class="kSFuOd rkqHyd"]').nth(3).click()
})