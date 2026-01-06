import {chromium, test, webkit} from "@playwright/test";
//test("browser controls", async({page})=>{
    // await page.goto("https://www.amazon.com")
    // let size = await page.viewportSize()
    // console.log(size);
    // await page.setViewportSize({width:1000,height:500});
    // let size = await page.viewportSize()
    //  console.log(size);
    
    //title
    await page.goto("https://www.google.in")
    console.log(await page.title());
    console.log(await page.url());
//})

test("browsercontrols", async({browser})=>{
    let context = await browser.newContext()
    let page = context.newPage()
    console.log(context.cookies());//return the cookies present in the particular context
    await page.gooto("https://www.google.com")
})

test.only("instance",async()=>{
    let browser = await webkit.launch()
    let context = await browser.newContext()
    let page = await context.newPage()
    await page.goto("https://www.flipkart.com") 
    await browser.close()
})

test("abc",async({page})=>{
    await page.goto("https://www.google.com")
    await page.screenshot({path:"screenshot//abc.png"})
    let time = new Date().getTime()
    await page.screenshot({path:`screenshot-page-${time}.png`})
})
