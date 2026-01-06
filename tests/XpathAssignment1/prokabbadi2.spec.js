import {test} from "@playwright/test";
test("Prokabbadi",async({page})=>{
    await page.goto("https://www.prokabaddi.com/teams/bengaluru-bulls-profile-1");
    // let a = await page.locator('(//div[@class="information-head"])[1]/ancestor::div[@class="card-section teams-card-section"]/descendant::p[@class="name"]|(//div[@class="card-section teams-card-section"])[2]/descendant::p[@class="stats-count"]').allTextContents();
    // console.log(a);
    //.....................................................OR............................
    // let a = await page.locator('//div[@class="stats-wrap"]').allTextContents();
    // console.log(a);
    let abc = "Overall"
    let a = await page.locator(`(//div[@class='waf-body'])[5]/descendant::div[@class='card-list']/descendant::div[@class='card-head']/p[.=\'${abc}\']/../following-sibling::div/descendant::div[@class='stats-listing']`).allTextContents()
    console.log(a);
    await page.pause()
})