import loginpage from "../PageObjectModel(POM)/loginpage.page.js"
import logindata from "../../testData/logindata.json"
import {test} from "@playwright/test";
test("", async({page})=>{
    let logpage = new loginpage(page)//created instance of a class
    let url = logindata.url
    let username = logindata.username
    let password = logindata.password
    //launch url
    await page.goto(url)
    //pass Username
    await logpage.usernameTextfield.fill(username)
    //pass Password
    await logpage.passwordTextfield.fill(password)
    //click submit button
    await logpage.submitButton.click()
    await page.waitForTimeout(3000)

})