import {test,expect} from "@playwright/test";
// test("New Tab",async({browser})=>{
//     //creating multi-tabs manually
//     let context = await browser.newContext()
//     let page1= await context.newPage()
//     await page1.goto("https://www.amazon.in/");
//     let page2 = await context.newPage()
//     await page2.goto("https://www.flipkart.com/")

    //new tabs via user actions
//     await page.goto("https://www.flipkart.com/mobiles/pr?sid=tyy,4io&otracker=categorytree")
//     await page.click('//div[text()="realme P4x 5G (Matte Silver, 128 GB)"]')
//     await page.waitForTimeout(3000)
//     console.log(await page1.url()); //to check whether the control is in newly opened tab or previous tab we have passed
    

//     await page.goto("https://www.redbus.in/")
//     await page.click('//a[text()="Contact us"]')
//     await page.waitForTimeout(3000)
//     await page.getByText("Account").click();//throw error coz the control will be in page that we have passed not in the new tab it opened
// })
//Handling multiple tabs
test("Handling multiple tabs",async({browser})=>{
   let context = await browser.newContext()
   let page = await context.newPage()
   await page.goto("https://www.amazon.in/s?k=toys")
   let [a] = await Promise.all([
   page.waitForEvent('popup'),
   page.click('//span[contains(text(),"Mirana C-Type")]')])
   await page.waitForTimeout(3000)
   console.log(await a.url());
   await expect(a.url()).not.toBe("https://www.amazon.in/s?k=toys")

})
//Handling multiple windows
test.only("Handling multiple windows",async({browser})=>{
    let context = await browser.newContext()
    let page = await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/browser/multipleWindow?sublist=2")
    let [b] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('//button[text()="Shop Now"]').click()])
    await b.locator('//button[text()="Add to Cart"]').click()
    let title1 = await page.title()
    await expect(await b.title()).not.toBe(title1)
})