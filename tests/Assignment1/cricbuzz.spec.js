import {test} from "@playwright/test";
test("Cricbuzz",async({page})=>{
    await page.goto("https://www.cricbuzz.com/cricket-series/10878/csa-four-day-series-division-one-2025-26/points-table")
    let a = await page.locator('//div[@class="bg-cbGrpHdrBkg uppercase text-xs text-cbTxtSec dark:bg-cbGrpHdrBkgDark dark:text-cbTxtSec"]/ancestor::div[@class="wb:p-3"]/descendant::div[@class="text-xs"]|//div[@class="flex justify-center items-center"]').allTextContents();    
    console.log(a);
    
})

//div[@class="bg-cbGrpHdrBkg uppercase text-xs text-cbTxtSec dark:bg-cbGrpHdrBkgDark dark:text-cbTxtSec"]/ancestor::div[@class="wb:p-3"]/descendant::div[@class="text-xs"]