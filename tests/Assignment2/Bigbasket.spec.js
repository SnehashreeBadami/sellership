import {test} from "@playwright/test";
test ("Bigbasket", async({page}) =>{
    await page.goto("https://www.bigbasket.com/",{waitUntil:"domcontentloaded"}  )
    await page.locator('//button[@id="headlessui-menu-button-:Ramkj6:"]').click()
    await page.waitForTimeout(2000)
    const categories = await page.locator("//div[contains(@class,'CategoryMenu')]//a")
     let count = await categories.count()
     console.log(count);
      for(let i=0;i<count;i++){
        const categoryName = await categories.nth(i).innerText()
        console.log(categoryName);
        
      }

})