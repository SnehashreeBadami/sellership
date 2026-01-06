import {test, expect} from "@playwright/test"
test("assertions",async({page})=>{
    //toBeAttached
    await page.goto("https://www.amazon.in/")
    let header = await page.locator('//header[@id="navbar-main"]')
    await expect(header).toBeAttached();
    // await expect(header).toBeVisible();
    // await page.pause()
    // toBeChecked()-checkbox
    // await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
    // let checkbox = await page.locator('//input[@id="domain_a"]')
    // await checkbox.click()
    // await expect(checkbox).toBeChecked()
    //toBeChecked() -radiobutton
    // await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
    // let radio = await page.locator('//input[@id="attended"]')
    // await radio.click()
    // await expect(radio).toBeChecked()
    //toBeDisabled()
    // await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    // await page.locator('//input[@id="phone"]').waitFor() //- if it takes long time we can use waitFor()
    // let f = await page.locator('//input[@id="phone"]')
    // await expect(f).toBeDisabled();
    //toBeEnabled()
    // await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    // await page.locator('//input[@id="phone"]').waitFor() //- if it takes long time we can use waitFor()
    // let g = await page.locator('//input[@id="phone"]')
    // await expect(g).toBeEnabled();
    //toBeEditable()
    // await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    // let l = await page.locator('//input[@id="phone"]')
    // await expect(l).toBeEditable();
    //toBeVisible()
    // await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    // let w = await page.locator('//input[@id="phone"]')
    // await expect(w).toBeVisible();
    //toHaveCount()
    // await page.goto("https://www.flipkart.com/")
    // let x = await page.locator('//div[@class="_3ETuFY"]')
    // await expect(x).toHaveCount(3)
    //toHaveCSS()
    // await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
    // let w  = page.getByRole('button');
    // await expect(w).toHaveCSS('display', 'flex');
    //toHaveAttribute()
    // await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
    // let a = page.locator('//input[@id="name"]');
    // await expect(a).toHaveAttribute('id','name')
    //toHaveClass()
    
})