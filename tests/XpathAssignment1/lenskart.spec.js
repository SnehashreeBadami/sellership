// open LensKart application, mouseOverOn StoreLocator, write a xpath to locate (Bangalore)
import {test} from "@playwright/test"
test('lenskart',async({page})=>{
      await page.goto('https://www.lenskart.com/')
      await page.getByLabel("Store Locator").hover()
      await page.locator("//div[@class='sc-b934bf65-10 jLvUqo' and text()='Bangalore']").click()
})
//div[@class="table-head"]/ancestor::div[@class="table-section"]