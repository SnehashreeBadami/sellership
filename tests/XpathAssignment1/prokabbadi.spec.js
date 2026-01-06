import {test} from "@playwright/test";
test("Prokabbadi",async({page})=>{
    await page.goto("https://www.prokabaddi.com/");
    let a = await page.locator('//div[@class="table-responsive"]/descendant::div[@class="team-name"]|//div[@class="table-data matches-play"]/descendant::p[@class="count"]').allTextContents();
    console.log(a);
    
})