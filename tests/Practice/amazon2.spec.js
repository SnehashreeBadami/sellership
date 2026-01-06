// 2. open Amazon.in application,search for phones,in the left side of the page you can operating system,write a xpath to click on a checkBox for 
// (Android 13.0)
import {test} from "@playwright/test";
test("Amazon 2",async({page})=>{
   await page.goto("https://www.amazon.in/s?k=phones&ref=nb_sb_noss")
   await page.locator('//span[text()="Android 13.0"]/ancestor::li[@id="p_n_g-1003517064111/51258698031"]/descendant::i[@class="a-icon a-icon-checkbox"]').check()
})