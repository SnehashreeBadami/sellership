import {test,expect} from "@playwright/test";
test("Radio Button and Checkbox", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
    await page.locator('//input[@value="Upi"]').click()//or check()
    await page.waitForTimeout(2000)
    //asserting -to check whether the radio buttion is checked or not we are asserting here or it will throw error
    // console.log(await page.locator('//input[@value="Upi"]').isChecked())//it will just return true or false but its not proper assertion so, we
    //have to use below assertion
  
    // await expect(await page.locator('//input[@value="Upi"]')).toBeChecked()
    await expect(await page.locator('//input[@value="Upi"]').isChecked()).toBeFalsy()//or toBeTruthy()//to check that radio button is not selected
})
test.only("CheckBox", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
    await page.locator('//input[@id="domain_b"]').check()//or click()//to check
    await page.waitForTimeout(2000)
    //to assert or to verify whether it is checked or not
    await expect(await page.locator('//input[@id="domain_b"]')).toBeChecked()
    await page.locator('//input[@id="domain_b"]').uncheck()//or click() again to uncheck
    //to verify unchecked
    await expect(page.locator('//input[@id="domain_b"]').isChecked()).toBeFalsy()
    await page.waitForTimeout(2000)

})