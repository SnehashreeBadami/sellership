import {test, expect} from "@playwright/test"
//test.use({actionTimeout:5000})
test("check 1",async({page})=>{
    // await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
    // await page.locator('//input[@id="attended"]').check()
    // page.setDefaultTimeout(3000)
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.locator('//input[@id="name"]').fill("Snehashree")
    // await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
    // await page.locator('//button[@id="btn"]').click()
    await page.locator('//button[@type="submit"]').click({timeout:1000})
})
test("check 2",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.locator('//input[@id="name"]').fill("Snehashree")
})