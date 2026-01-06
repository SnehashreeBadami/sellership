import {test} from "@playwright/test"
import fs from "fs"
let datafile = fs.readFileSync("C:/Users/sneha/OneDrive/Desktop/Playwright/testData/singlesetdata.json")
let data = JSON.parse(datafile)
test ("get data from data",async({page})=>{
//    console.log(data.greet);
   data.forEach(d => {
    console.log(d.greet);
    });
})

