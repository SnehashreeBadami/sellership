import {test} from "@playwright/test";
test("MakeMyTrip",async({page})=>{
    await page.goto("https://www.makemytrip.com/flights/?cmp=SEM|M|DF|B|Brand|B_M_Makemytrip_Search_Exact|Brand_Top_5_Exact|Expanded|&s_kwcid=AL!1631!3!!e!!o!!makemytrip;com&ef_id=:G:s")
    await page.locator('(//p[@class="blackText font20 code lineHeight36"])[1]').click();
    // await page.locator('(//div[@class="DayPicker-Body"])[1]/div[@class="DayPicker-Week"][2]/div[@aria-label="Wed Dec 10 2025"]/div/p[.="10"]').click()
})