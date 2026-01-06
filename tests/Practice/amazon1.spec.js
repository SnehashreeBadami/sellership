import {test} from "@playwright/test";
test("Amazon",async({page})=>{
    await page.goto("https://www.amazon.in/s?k=samsung+phones&crid=1C7UTANZGJ432&sprefix=%2Caps%2C3401&ref=nb_sb_noss_2")
    let a = await page.locator('(//span[contains(text(),"Samsung Galaxy A55 5G")])[1]/ancestor::div[@class="a-section"]/descendant::span[@class="a-price-whole"]').textContent();
    console.log(a);
    
})