//open flipkart and locate CART without using visible Text().
import {test} from "@playwright/test"
test('flipkart',async({page})=>{
      await page.goto('https://www.flipkart.com/')
      await page.locator('//*[local-name()="img" and @alt="Cart"]').click()
    })