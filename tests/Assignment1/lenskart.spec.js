import {test} from "@playwright/test";
test("Lenskart",async({page})=>{
    await page.goto("https://www.lenskart.com/");
    await page.getByText("StoreLocator").click();
    await page.locator('//input[@placeholder="Search by State/Pincode/Locality"]').fill("Ban");
    // await page.getByText("Bangalore, Karnataka, India").click();
    let a = await page.locator('//input[@placeholder="Search by State/Pincode/Locality"]/ancestor::div[@class="StoreSearch_storeSearchInner__IOy_g"]/descendant::img[@src="/stores/images/map-marker.svg"][1]').allTextContents();
    console.log(a);
    
})