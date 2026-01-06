//open iccCricketRankings, go to (Men's Batting Rankings)section, write a xpath to find a rating of player(David Warner).
import {test} from "@playwright/test";
test("ICC Cricket",async({page})=>{
    await page.goto("https://www.icc-cricket.com/rankings");
    let a = await page.locator('(//a[@class="si-player-name-wrap"])[6]/ancestor::div[@class="si-table swiper-slide"]/descendant::span[@class="si-text"][2]').textContent()
    console.log(a);
    
})