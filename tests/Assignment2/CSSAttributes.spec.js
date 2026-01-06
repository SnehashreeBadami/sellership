import {test,expect} from "@playwright/test";
test("CSS Attributes", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1", {waitUntil: 'domcontentloaded'})
    let registerButton = page.locator("//button[@type='submit']")
    let loginButton = page.locator("//a[@href='/ui/login']")
    await loginButton.waitFor({state:'visible'})
    await registerButton.waitFor({state:'visible'})
    await expect(registerButton).toHaveCSS('color','rgb(255, 255, 255)')
    await expect(registerButton).toHaveCSS('background-color', 'rgb(249 115 22)' )
    await expect(registerButton).toHaveCSS('font-size','13px')
    await expect(registerButton).toHaveCSS('font-weight','700')
    await expect(registerButton).toHaveCSS('border-radius','4px')
    await expect(registerButton).toHaveCSS('cursor','pointer')

    await expect(loginButton).toHaveAccessibleDescription('background-color', 'rgb(59 130 246 / .5)')
   

})