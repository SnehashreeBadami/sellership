import {test,expect} from "@playwright/test"
//wait for text
// test("Explicit Waits", async({page})=>{
//     await page.goto("https://www.amazon.in/");
//     await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
//     await page.locator('//div[@role="row"]',{hasText: " for woman"}).waitFor({timeout:5000})
//     let a = await page.locator('//div[@role="row"]').allTextContents()//returns array of strings or 
//     // //empty array if it takes long time to load elements
//     console.log(a);
    
// })
// //wait for Timeout - not completed fully - dont refer this
// test("Explicit Waits", async({page})=>{
//     await page.goto("https://www.amazon.in/");
//     await page.locator('//input[@id="twotabsearchtextbox"]').waitFor({timeout:3000})
//     await page.locator('//div[@role="row"]',{hasText: " for woman"}).waitFor()
//     let a = await page.locator('//div[@role="row"]').allTextContents()//returns array of strings or 
//     // //empty array if it takes long time to load elements
//     console.log(a);
//     })

// wait for element state
// test("Explicit Waits", async({page})=>{
//     await page.goto("https://www.amazon.in/");
//     await page.locator('//input[@id="twotabsearchtextbox"]').waitFor({state:'visible',timeout:4000})
//     await page.locator('//div[@role="row"]',{hasText: " for woman"}).waitFor()
//     let a = await page.locator('//div[@role="row"]').allTextContents()//returns array of strings or 
//     // //empty array if it takes long time to load elements
//     console.log(a);
//     })

//wait for selector
// test("Explicit Waits", async({page})=>{
//     await page.goto("https://www.amazon.in/");
//     // await page.locator('//input[@id="twotabsearchtextbox"]').waitFor({state:'visible',timeout:4000})
//     await page.waitForSelector('//input[@id="twotabsearchtextbox"]',{state:'attached'})
//     await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
//     await page.locator('//div[@role="row"]',{hasText: " for woman"}).waitFor()
//     let a = await page.locator('//div[@role="row"]').allTextContents()//returns array of strings or 
//     // //empty array if it takes long time to load elements
//     console.log(a);
//     })

//wait for Navigation
// test("Wait For Navigation", async({page})=>{
//    await page.goto("https://www.amazon.in/");
//    await Promise.all([
//    page.waitForNavigation(),
//    page.click("#nav-cart")])
// })

//wait for loadstate
// test("Wait For Navigation", async({page})=>{
//    await page.goto("https://www.amazon.in/");
//    await Promise.all([
//    page.waitForNavigation({waitUntil:"domcontentloaded"}),//by default it is going to wait for load
//    await page.click("#nav-cart")])
//    await page.waitForLoadState('networkidle',{timeout:2000})//by default it is going to wait for load itself

// })

//wait for event
// test("Wait for event", async({page})=>{
//    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
//    await page.fill('#writeArea',"Skanda")
//    let [downloadfile]=await Promise.all([
//          page.waitForEvent('download'),
//          page.click('#downloadButton')])
//          console.log(await downloadfile.path());//going to return the downloaded file pathl
         
// })

//wait for function
// test("Custom waits", async({page})=>{
//    await page.goto("https://www.amazon.in/")
//    await page.locator('input#twotabsearchtextbox').fill('  HP Laptop')
//    await page.waitForFunction(()=>{let e = document.querySelectorAll('.s-suggestion-container')
//    return e.length>1
//    })
//    let a = await page.locator('//div[@class="s-suggestion s-suggestion-ellipsis-direction"]').allTextContents()
//    console.log(a);
// })
//2nd scenario - all html,css, image has to be loaded
// test1("Custom waits", async({page})=>{
//    await page.goto("https://www.amazon.in/")
//    await page.waitForFunction(()=>{return document.readyState==='complete'})
//    await page.locator('input#twotabsearchtextbox').fill('  HP Laptop')
// })