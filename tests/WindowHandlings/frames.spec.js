import {test,expect} from "@playwright/test";
test("frames", async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    //---------total frames-----------
    // let frames = await page.frames()
    // console.log(frames.length);//number of frames 
    // for(let frame of frames){
    //     console.log(await frame.title());//name of all frames
    // }
    // console.log(await page.title());//main frame name
    //
    //--------A1-------frame()-------name,url----------
    let frame1 = await page.frame({url :'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame1.locator('//input[@name="mytext1"]').fill("abc")
    // console.log(await frame1.locator('//input[@name="mytext1"]').inputValue()) - to check what inputValue() does
    await expect(await frame1.locator('//input[@name="mytext1"]').inputValue()).toContain("abc")
    //
    //---------A2------FrameLocator------------
    let a = await page.frameLocator('//frame[@src="frame_2.html"]').locator('//input[@name="mytext2"]')
    await a.fill('abcdef')
    await page.waitForTimeout(2000)
    //
    //-----------------A3----------
    let frame2 = await page.locator('//frame[@src="frame_2.html"]').contentFrame()
    frame2.locator('//input[@name="mytext2"]').fill("skanda")
    await page.waitForTimeout(2000)
    //
    //------------
    // await page.locator('//div[@class="ulDsOb" and .="I am a human"]').fill("Sneha")
    let frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    let button = await frame3.frameLocator('//iframe').locator('//div[@class="ulDsOb" and .="I am a human"]').click();
    await button.click()
})