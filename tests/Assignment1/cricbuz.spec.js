import {test,expect} from "@playwright/test";
test("Cricbuz",async({page})=>{
   await page.goto("https://www.cricbuzz.com/")
   await page.getByText("Live Scores").click();
   await page.locator('//a[@title="Live"]').click();
   await page.getByText("Scorecard").click();
   let a = await page.locator('//a[contains(text(),"Pathum")])[3]/ancestor::div[@class="mb-2 wb:mb-4 tb:mb-4"]/descendant::div[@class="flex justify-center items-center font-bold text-sm  wb:text-sm"][1]').allTextContents();
   console.log(a);
})