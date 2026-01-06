import {test} from "@playwright/test";
test ("Auto-Suggest Edit Box",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes");
    // await page.waitForTimeout(2000)
    await page.waitForSelector('(//div[@class="s-suggestion-container"])[1]')
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("Enter")
    await page.waitForTimeout(3000)
    // let a = await page.locator('//div[@class="s-suggestion-container"]').all()
    // for(let option of a){
    //     let b = await option.textContent()
    //     if(b.includes(" for woman")){
    //         await option.click()
    //         break;
    //     }
    // }
    // await page.waitForTimeout(3000)
})