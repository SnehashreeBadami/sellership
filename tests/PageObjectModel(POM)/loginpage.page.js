class loginpage{
    constructor(page){ //parameterized constructor
        this.usernameTextfield = page.locator("input#username")//to fetch it from another file,we have to store it in the variable
        this.passwordTextfield = page.locator("input#password")
        this.submitButton = page.getByRole("button",{name : "Submit"})

    }
}
export default loginpage