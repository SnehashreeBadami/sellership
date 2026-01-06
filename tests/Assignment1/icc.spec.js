import {test} from "@playwright/test";
test("ICC",async({page})=>{
    await page.goto("https://www.icc-cricket.com/rankings");
    await page.locator('(//a[@href="#mens-batting-rankings"])[2]').click();
    await page.locator('//a[@href="/rankings/batting/mens/odi"]').click();
    let a = await page.locator('(//span[@class="si-text si-lname"])[1]/ancestor::div[@class="si-table-section"]/descendant::span[@class="si-text"][7]').textContent();
    console.log(a);
    
})