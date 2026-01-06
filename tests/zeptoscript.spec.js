import {test} from "@playwright/test"
test("Zepto",async({page})=>{
    await page.goto("https://www.zepto.com/")
    await page.locator('//span[@data-testid="searchBar"]').click()
    // await page.locator('//input[@id="«rh»--input"]')
    await page.locator('//input[@placeholder="Search for over 5000 products"]').fill("Kurkure")
    await page.getByText("e shezwan").first().click()
    await page.getByAltText("Kurkure Schezwan Chutney").click()
    await page.locator('//button[@class="WJXJe"]').nth(1).click()
    // await page.locator('//div[@data-hide-appsflyer-cls-element="true"]').click()
    await page.locator('(//button[@aria-label="Cart"])[2]',{state:'visible',timeout:30000}).click();

})