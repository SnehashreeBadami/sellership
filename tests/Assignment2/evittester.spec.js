import{test,expect}from "@playwright/test"
test("dilogss",async({page})=>{
    await page.goto("https://testpages.eviltester.com/pages/basics/alerts-javascript/")
    
    page.once("dialog",(dialog)=>{dialog.accept()})
    await page.locator('//button[@id="alertexamples"]').click()
    await expect (page.locator('//p[text()="You triggered and handled the alert dialog"]')).toContainText("dialog")
    await page.waitForTimeout(2000)

    page.once("dialog",(dialog)=>{dialog.accept()})
    await page.locator('//button[@id="confirmexample"]').click()
    await expect (page.locator('//p[@id="confirmexplanation"]')).toContainText("confirm ")
    await page.waitForTimeout(2000)
    
    page.once("dialog",(dialog)=>{dialog.accept("Skanda")})
    await page.locator('//button[@id="promptexample"]').click()
    await expect (page.locator('//p[@id="promptexplanation"]')).toContainText("hey sahana")
    await page.waitForTimeout(2000)
    
})