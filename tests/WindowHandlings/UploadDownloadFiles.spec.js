import {test} from "@playwright/test";
import path from "path";
import fs from "fs";

// test("Upload Files", async({page})=>{
   // await page.goto("https://testautomationpractice.blogspot.com/")
   // console.log(__dirname)
   // await page.locator('//input[@id="singleFileInput"]').setInputFiles(path.join(__dirname,"tests/WindowHandlings/hand/hand.txt"))
   // await page.locator('//input[@id="singleFileInput"]').scrollIntoViewIfNeeded()
   // await page.locator('//input[@id="singleFileInput"]').setInputFiles('C:/Users/sneha/OneDrive/Desktop/Playwright/tests/WindowHandlings/hand/hand.txt')
   // await page.getByRole("button",{name:"Upload Single File"}).click()
   // await page.waitForTimeout(3000)
   // await page.locator('//input[@id="multipleFilesInput"]').scrollIntoViewIfNeeded()
   // await page.locator('//input[@id="multipleFilesInput"]').setInputFiles(['C:/Users/sneha/OneDrive/Desktop/Playwright/tests/WindowHandlings/hand/face.txt','C:/Users/sneha/OneDrive/Desktop/Playwright/tests/WindowHandlings/hand/hand.txt'])
   // await page.getByRole("button",{name:"Upload Multiple Files"}).click()
   // await page.waitForTimeout(4000)
//   await page.locator('//input[@id="singleFileInput"]').setInputFiles("c:/Users/sneha/OneDrive/Desktop/New Text Document.txt")
//   await page.locator('//input[@id="singleFileInput"]').setInputFiles([])//remove the files attached
//   await page.getByRole("button",{name:"Upload Single File"}).click()
//   await page.waitForTimeout(4000)
//   await page.locator('//input[@id="multipleFilesInput"]').setInputFiles(["c:/Users/sneha/OneDrive/Desktop/New Text Document.txt","c:/Users/sneha/OneDrive/Desktop/New Microsoft Word Document.docx"])
//   await page.locator('//input[@id="multipleFilesInput"]').setInputFiles([])//remove the attached files
//   await page.getByRole("button",{name:"Upload Multiple Files"}).click()
//   await page.waitForTimeout(4000)
// })

//--------Download Files-------------
test.only("Download Files", async({page})=>{
   await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
   await page.getByRole("textbox",{name:"Enter text here"}).fill("I am downloading a file")
   await page.locator("#fileName").fill("filesneha.text")
   // let [downloadfile]=await Promise.all([
   // page.waitForEvent("download"),
   // page.locator('//button[@id="downloadButton"]').click()])
   //OR without using promise.all()
   let a = page.waitForEvent("download")
   await page.locator('//button[@id="downloadButton"]').click()
   let downloadfile = await a
   let downloadfolder = "c:/Users/sneha/OneDrive/Desktop/Snehapw"
   // let downloadfolder="C:/Users/sneha/OneDrive/Desktop/Playwright/downloadedfile"
   let filename = downloadfile.suggestedFilename()
   let fullpath = path.join(downloadfolder,filename)
   // await downloadfile.saveAs(path.join(__dirname,"../../downloadedfile",filename))
   await downloadfile.saveAs(path.join(downloadfolder,filename))
   // console.log(await downloadfile.path());
   await page.waitForTimeout(3000)

   //verify if saved
   if(fs.existsSync(fullpath)){
        console.log(`file exists : ${fullpath}`);
   }
   else {
      console.log(`no such file exists`);
      }
})