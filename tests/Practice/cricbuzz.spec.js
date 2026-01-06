// Open cricbuzz application, click on live match,click on scoreCard, write a xpath to find Runs scored by a perticular batsman.
import {test} from "@playwright/test";
test("Cricbuzz",async({page})=>{
    await page.goto("https://www.cricbuzz.com/live-cricket-scorecard/134557/limpo-vs-bor-11th-match-csa-four-day-series-division-two-2025-26")
    let a = await page.locator('(//a[text()="Tylor Trenoweth"])[1]/ancestor::div[@class="mb-2 wb:mb-4 tb:mb-4"]/descendant::div[@class="flex justify-center items-center font-bold text-sm  wb:text-sm"][1]').textContent()
    console.log(a);
    
})