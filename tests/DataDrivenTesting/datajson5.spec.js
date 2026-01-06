import {test} from "@playwright/test"
import fs from "fs"
let datafile = fs.readFileSync("C:/Users/sneha/OneDrive/Desktop/Playwright/testData/testdata.json")
let data = JSON.parse(datafile)
test.describe("Grouping test", async()=>{
    let url = data.url
    let u = data.username
    let p = data.password
    test("",async({page})=>{
        await page.goto(url)
        await page.locator('//input[@id="username"]').fill(u)
        await page.locator('//input[@id="password"]').fill(p)
        await page.getByRole("button",{name:"Submit"}).click()
        let title = await page.title()
        console.log(title);
        if(title=="Logged In Successfully | Practice Test Automation"){
        console.log("Valid Credentials");
        }
        else {
        console.log("Invalid Credentials");
       }  
    })
test("  ",async({page})=>{
        await page.goto(url)
        await page.locator('//input[@id="username"]').fill(u)
        await page.locator('//input[@id="password"]').fill(p)
        await page.getByRole("button",{name:"Submit"}).click()
        let title = await page.title()
        console.log(title);
        if(title=="Logged In Successfully | Practice Test Automation"){
        console.log("Valid Credentials");
        }
        else {
        console.log("Invalid Credentials");
       }  
})
})