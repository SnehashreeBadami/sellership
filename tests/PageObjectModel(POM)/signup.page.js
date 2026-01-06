class signup{
    constructor(page){
        this.nameTF = page.locator('//input[@id="name"]')
        this.emailTF = page.locator('//input[@id="email"]')
        this.password = page.locator('//input[@id="password"]')
        this.repasswordTF = page.locator('//input[@id="cpassword"]')
        this.contactTF = page.locator('//input[@id="txtpassword"]')
        this.maleRadio = page.locator('//input[@type="radio" and @value="m"]')
        this.femaleRadio = page.locator('//input[@type="radio" and @value="f"]')
        this.submit = page.locator('//input[@name="submit"]')
    }
}
export default signup