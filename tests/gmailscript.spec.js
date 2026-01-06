import {test,expect} from "@playwright/test"
test("Gmail",async({page})=>{
    await page.goto("https://workspace.google.com/intl/en-US/gmail/");
    await page.locator('//a[@class="button button--medium header__aside__button button--desktop button--tablet button--mobile"]').click();
    await page.locator('//input[@id="identifierId"]').fill("snehanagaraj735@gmail.com");
    await page.getByText("Next").click();
    await page.locator('//input[@type="password"]').fill("Skanda@123*!");
    await page.getByText("Next").click();

})