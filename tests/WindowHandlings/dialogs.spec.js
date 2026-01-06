import {test,expect} from "@playwright/test"
test("Dialogs", async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/")
//   await page.locator('//button[@id="alertBtn"]').click()
//   await page.locator('//button[@id="confirmBtn"]').click()
//   await expect(page.locator("#demo")).toContainText("Cancel")
//   await page.waitForTimeout(3000)
//   await page.locator('//button[@id="promptBtn"]').click()
//   await expect(page.locator("#demo")).toContainText("cancelled")
//   await page.waitForTimeout(3000)
    //  page.on("dialog",(dialog)=>{dialog.accept()})//We can also pass the input in dialog.accept("abcd") inside the prompt message
    //  await page.locator('//button[@id="alertBtn"]').click()
    //  await page.locator('//button[@id="confirmBtn"]').click()
    //  await page.locator('//button[@id="promptBtn"]').click()
    page.on("dialog",async(dialog)=>{
        if(dialog.type()=="alert"){
            console.log(await dialog.message());
            await dialog.accept();
        }
        else if(dialog.type()=="confirm"){
            await dialog.accept()
        }
        else if(dialog.type()=="prompt"){
            if(dialog.defaultValue=="tom"){
            console.log(await dialog.defaultValue())}
            else{
            await dialog.accept("tom")
        }}
    })
    await page.locator('//button[@id="alertBtn"]').click()
    await page.waitForTimeout(3000)
    await page.locator('//button[@id="confirmBtn"]').click()
    await page.waitForTimeout(3000)
    await expect(page.locator("#demo")).toContainText("OK")
    await page.locator('//button[@id="promptBtn"]').click()
    await expect(await page.locator("#demo").textContent()).toBe("Hello tom! How are you today?")
    await page.waitForTimeout(3000)

})

//page.once------------
test.only("dialogs using page.once", async({page})=>{
      await page.goto("https://testautomationpractice.blogspot.com/")
      await page.locator('//button[@id="alertBtn"]').click()
      await page.locator('//button[@id="confirmBtn"]').click()
      page.once("dialog",async(dialog)=>{dialog.accept("snehaskanda")})
      await page.locator('//button[@id="promptBtn"]').click()
      await page.waitForTimeout(3000)
      await page.reload()
      await page.locator('//button[@id="promptBtn"]').click()
      await page.waitForTimeout(3000)

})