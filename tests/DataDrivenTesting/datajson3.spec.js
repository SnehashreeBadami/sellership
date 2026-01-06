import {test} from "@playwright/test"
import fs from "fs"
let datafile = fs.readFileSync("C:/Users/sneha/OneDrive/Desktop/Playwright/testData/testdata1.json")
let data = JSON.parse(datafile)
test ("multiple set of data",async({page})=>{
    //  data.forEach(d => {
    //     let url = d.url
    //     let username = d.username
    //     let password = d.password
    //     await page.goto()
    //  });
    for (let testdata of data){
        let url = testdata.url
        let u = testdata.username
        let p = testdata.password
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
  }
})

