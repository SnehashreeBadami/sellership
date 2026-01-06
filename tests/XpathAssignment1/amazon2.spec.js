//open Amazon.in application,search for phones,in the left side of the page you can operating system,write a xpath to click on a checkBox for 
//(Android 13.0)
import {test} from "@playwright/test"
test('mobile price',async({page})=>{
      await page.goto('https://www.amazon.in/')
      await page.locator("#twotabsearchtextbox").fill('phones')
      await page.click('#nav-search-submit-button')
      await page.locator("//span[text()='Android 13.0']/ancestor::li[@id='p_n_g-1003517064111/51258698031']/descendant::i[@class='a-icon a-icon-checkbox']").check()
     
})