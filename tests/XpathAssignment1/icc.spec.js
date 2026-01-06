//. open iccCricketRankings, go to (Men's Batting Rankings)section, write a xpath to find a rating of  player(David Warner).
import {test} from "@playwright/test"
test('icci_rankings',async({page})=>{
      await page.goto('https://www.icc-cricket.com/rankings')
      await page.locator('//a[@aria-label="mens-batting-rankings"]').click()
      await page.locator('//a[@href="/rankings/batting/mens/odi"]').click()
      let a=await page.locator("//span[@class='si-text si-fname' and text()='David']/ancestor::div[@class='si-table-row']/descendant::div[@class='si-table-data si-rating']").textContent()
      console.log(a);
})