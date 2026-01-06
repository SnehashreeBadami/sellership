import {test} from "@playwright/test";
// test("Keyboard Actions", async({page})=>{
    // await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    // await page.locator('//input[@id="name"]').fill("Sneha")

    // //type()
    // await page.locator('#name"]').type("Sneha")
    // await page.type("#name","Sneha")
    // await page.locator("#name").click();
    // await page.keyboard.type("Sneha")
    // await page.waitForTimeout(2000)

    //insertText()
//     await page.locator("#name").click();//control should already be present in the textfield to perform insertText()
//     await page.keyboard.insertText("Sneha")
//     await page.waitForTimeout(2000)

//     //down() and up()
//     await page.keyboard.down("Space")
//     await page.keyboard.up("Space")
//     await page.keyboard.down("S")
//     await page.keyboard.up("S")
//     await page.waitForTimeout(2000)

//     //press()
//     await page.keyboard.press('Tab')
//     await page.keyboard.type("abc@gmail.com")
//     await page.keyboard.press("Control+A")
//     await page.keyboard.press("Control+C")
//     await page.keyboard.press("Tab")
//     await page.keyboard.press("Control+V")
//     await page.waitForTimeout(2000)
// })

test("Scrolling using Keyboard Actions",async({page})=>{
    await page.goto("https://www.amazon.in/")
    for(let i=1;i<10;i++){
          await page.keyboard.press("ArrowDown")
    }
    await page.waitForTimeout(2000)
    for(let i=1;i<6;i++){
    await page.keyboard.press("ArrowUp")
   }
})

//type("string")
//insertText("")
