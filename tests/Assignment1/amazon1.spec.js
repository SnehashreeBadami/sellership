import {test, expect} from "@playwright/test"
test("Amazon1",async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.getByPlaceholder("Search Amazon.in").fill("samsung phones"); 
    await page.locator('//input[@id="nav-search-submit-button"]').click();
    let a = await page.locator('(//div[@data-cy="title-recipe"])[1]/ancestor::div[@class="a-section"]/descendant::span[@class="a-price-whole"]').textContent();
    console.log(a);
    
})



