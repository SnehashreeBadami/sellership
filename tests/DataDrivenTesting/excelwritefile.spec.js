import {test} from "@playwright/test";
import path from "path";
import excel from "exceljs";
test ("Write Data", async({page})=>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testData/exceldata.xlsx"))
    let sheet = book.getWorksheet("Sheet5")
    if(!sheet){
       sheet = book.addWorksheet("Sheet5")
    }
    sheet.getRow(1).getCell(1).value="Hi! Skanda"
    await book.xlsx.writeFile(path.join(__dirname,"../../testData/exceldata.xlsx"))
})

test.only("read data from an application and store it in the excel", async({page})=>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testData/exceldata.xlsx"))
    let sheet = book.getWorksheet("Sheet6")
    if(!sheet){
       sheet = book.addWorksheet("Sheet6")
    }
    await page.goto("https://www.amazon.in/")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("toys")
    await page.locator('//div[@class="s-suggestion-container"]').first().waitFor()
    let alloptions = await page.locator('//div[@class="s-suggestion-container"]').allTextContents()
    console.log(alloptions);
    for(let text of alloptions){
        let a = alloptions.indexOf(text)
        sheet.getRow(1).getCell(a+1).value=text
    }
    await book.xlsx.writeFile(path.join(__dirname,"../../testData/exceldata.xlsx"))
})