import {test} from "@playwright/test";
// test("Scrolling",async({page})=>{
//    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
//    await page.waitForTimeout(2000)
//    await page.mouse.wheel(1000,1000);//to move vertically(down)
//    await page.waitForTimeout(2000)
//    await page.mouse.wheel(0,-1000);//to move vertically(up)
//    await page.waitForTimeout(2000)
//    await page.goto("https://demoapps.qspiders.com/ui/scroll/newHorizontal?scenario=1")
//    await page.mouse.wheel(1000,0);//to move horizontally(right)
//    await page.waitForTimeout(2000)
//    await page.mouse.wheel(-1000,0);//to move horizontally(Left)
//    await page.waitForTimeout(2000)
//    await page.mouse.wheel(500,500);//to move right+down
//    await page.waitForTimeout(2000)
   //to scroll to an element
//    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
//    await page.locator('//input[@type="checkbox"]').scrollIntoViewIfNeeded()
//    await page.waitForTimeout(2000)
// })
test.only("Drag&Drop",async({page})=>{
    //moving or drag&drop the element by using mouse actions
   //  await page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0")
   //  await page.locator('//div[text()="Drag Me"]').hover();
   //  await page.waitForTimeout(2000)
   //  await page.mouse.down()
   //  await page.mouse.move(200,500)
   //  await page.waitForTimeout(2000)
   //  await page.mouse.up()
   //  //drag and drop to the target
   //  await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
   //  await page.locator('//div[text()="Mobile Charger"]').hover()
   //  await page.mouse.down()
   //  await page.locator('//div[text()="Mobile Accessories"]/parent::div').hover()
   //  await page.mouse.up()
    //drag and drop by taking an element location
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    await page.locator('//div[text()="Drag Me"]').hover()
    await page.mouse.down()
    await page.waitForTimeout(2000)
    let a = await page.locator('//div[text()="Mobile Accessories"]/parent::div').boundingBox();
    await page.mouse.move(a.x,a.y)
    await page.mouse.up()
    await page.waitForTimeout(2000)

    //dragto
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    let source = page.locator('//div[text()="Mobile Charger"]')
    let target = page.locator('//div[text()="Mobile Accessories"]/parent::div')
    await page.waitForTimeout(3000)
    await source.dragTo(target)
    await page.waitForTimeout(3000)
 })
