import {test, expect} from "@playwright/test"
test("hardcoded wait",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login-/")
    await page.waitForTimeout(4000)
    await page.getByText("Username",{exact:true}).fill("student")
    await page.waitForTimeout(4000)
    await page.getByText("Password",{exact:true}).fill("Password123")
    await page.waitForTimeout(4000)
    await page.locator('button#submit').click()
    await page.waitForTimeout(4000)
})
test.only("auto suggestions",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
    // await page.waitForTimeout(5000)
    let a = await page.locator('//div[@role="row"]').allTextContents()
    console.log(a);
    
})
