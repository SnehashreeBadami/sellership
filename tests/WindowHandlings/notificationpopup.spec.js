import {test,expect} from "@playwright/test"
test("Notification pop-up", async({browser})=>{
    let context = await browser.newContext({permissions:["notifications"]})
    let page = await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
    await page.locator('//button[@id="browNotButton"]').click()
    //validation of permission status
    let result = await page.evaluate(()=>{return Notification.requestPermission()})
    console.log(`permissions:${result}`);
    //revoke all permissions----------------
    await context.clearPermissions() //to deny all the notifications which all are granted
    let result2 = await page.evaluate(()=>{return Notification.requestPermission()})
    console.log(`permissions:${result2}`);

})