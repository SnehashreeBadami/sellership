import {test} from "@playwright/test";
import data from "../../testData/testdata2.json"
test ("test data from json", async({page})=>{
    for(let d of data.valid){
        await page.goto(d.url)
        await page.locator('//input[@id="username"]').fill(d.username)
        await page.locator('//input[@id="password"]').fill(d.password)
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
    for(let d of data.invalid){
      await page.goto(d.url)
        await page.locator('//input[@id="username"]').fill(d.username)
        await page.locator('//input[@id="password"]').fill(d.password)
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
//------------------OR----------------
test.only(" ", async({page})=>{
    for(let key in data){
        console.log(key);
        //to iterate over the array present inside the keys
        for(let d of data[key]){
            await page.goto(d.url)
            await page.locator('//input[@id="username"]').fill(d.username)
        await page.locator('//input[@id="password"]').fill(d.password)
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
  }
})