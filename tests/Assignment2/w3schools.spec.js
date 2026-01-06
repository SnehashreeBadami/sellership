import{test}from "@playwright/test"
test("school",async({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage()
    await page.goto("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_open")
    let a=await page.title()
    console.log(a)
    let [window]=await Promise.all( [
    page.waitForEvent('popup'),
    page.frameLocator('//iframe[@id="iframeResult"]').locator('//button[text()="Try it"]').click(),
   ])
    let b=await window.title()
    console.log(b);
    await window.close()
})