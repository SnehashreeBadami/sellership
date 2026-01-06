import {test} from "@playwright/test"
test("get by methods",async({page})=>{
    // await page.goto("https://demo.nopcommerce.com/login")
    //label
    // await page.getByLabel("Email:",{exact:true}).fill("abc@gmail.com")
    // //Placeholder
    // await page.getByPlaceholder("Search store",{exact:true}).fill("mobiles")
    // //text
    // await page.getByText("Register").first().click()
    // //AltText
    // await page.getByAltText("nopCommerce demo store",{exact:true}).click()
    //getBytitle
    await page.goto("https://demo.nopcommerce.com/electronics")
    await page.getByTitle("Show products in category Cell phones").first().click()
//     //getByRole
//    //await page.getByRole("link",{name:'Cell phones' }).first().click()
//     await page.getByRole("button",{name:'Search'}).click()
//     //getByTestID
//     await page.goto("https://www.saucedemo.com/")
//     await page.getByTestId("password").fill("abcdefgh")
})