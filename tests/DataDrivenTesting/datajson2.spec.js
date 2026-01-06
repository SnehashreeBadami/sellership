import {test} from "@playwright/test"
import fs from "fs"
let datafile = fs.readFileSync("C:/Users/sneha/OneDrive/Desktop/Playwright/testData/testdata.json")
let data = JSON.parse(datafile)
test ("get data from test data",async({page})=>{
   await page.goto(data.url)
   await page.locator('//input[@id="username"]').fill(data.username)
   await page.locator('//input[@id="password"]').fill(data.password)
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

