import {test} from "@playwright/test";
import path from "path";
import excel from "exceljs";
test ("read single data", async({page})=>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testData/exceldata.xlsx")) 
    let sheet = await book.getWorksheet("Sheet1")
    let data = await sheet.getRow(1).getCell(1).toString()//to get the data and converting into string only and returns or value
    // let data = await sheet.getRow(1).getCell(1).value
    console.log(data);//return the exceljs cell object before mentioning "toString()"
})
test("To read multiple data", async({page})=>{
    let book1 = new excel.Workbook()
    await book1.xlsx.readFile(path.join(__dirname,"../../testData/exceldata.xlsx")) 
    let sheet = await book1.getWorksheet("Sheet2")
    ////--------row wise------------------
    for(let row=1;row<=sheet.actualRowCount;row++){ 
       for(let column=1;column<=sheet.actualColumnCount;column++){
          let data = sheet.getRow(row).getCell(column).toString()
          console.log(data);
       }
    }
    ////--------column wise----------------
    for(let column=1;column<=sheet.actualColumnCount;column++){ 
       for(let row=1;row<=sheet.actualRowCount;row++){
          let data = sheet.getRow(row).getCell(column).toString()
          console.log(data);
       }
    }
})

//http://49.249.28.218:8081/
test.only("Pass test data to the application", async({page})=>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testData/exceldata.xlsx"))
    let sheet = book.getWorksheet("Sheet3")
    let alldata = []
    for(let r =1; r<=sheet.actualRowCount;r++){
       let row = sheet.getRow(r)
       let url = row.getCell(1).toString()
       let username = row.getCell(2).toString() 
       let password = row.getCell(3).toString()
       alldata.push({url:url,username:username,password:password})
    }
   console.log(alldata);
   for(let d of alldata){
   await page.goto(d.url)
   await page.waitForTimeout(3000)
   let p2 = page.waitForEvent("popup")
   await page.getByRole("link",{name:"Small CRM"}).click()
   let page2 = await p2
   await page2.getByRole("link",{name:"Admin"}).click()
   await page2.locator("#txtusername").fill(d.username)
   await page2.locator("#txtpassword").fill(d.password)
   await page2.getByRole("button",{name:"Login"}).click()
   await page2.close()
   await page.waitForTimeout(3000)
}
})