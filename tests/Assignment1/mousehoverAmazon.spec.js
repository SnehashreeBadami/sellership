import {test} from "@playwright/test";
test("Amazon", async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.getByText("Account & Lists").hover();
    await page.locator()
})