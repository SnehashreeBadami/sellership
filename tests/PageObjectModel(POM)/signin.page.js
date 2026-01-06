class signin{
    constructor(page){
        this.emailTF = page.locator('//input[@id="txtusername"]')
        this.passwordTF = page.locator('//input[@id="txtpassword"]')
        this.loginButton = page.locator('//button[@name="login"]')
    }
}
export default signin