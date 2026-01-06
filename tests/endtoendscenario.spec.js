import {test} from "@playwright/test";
import landing from "./PageObjectModel(POM)/landing.page"; 
import signup from "./PageObjectModel(POM)/signup.page";
import signin from "./PageObjectModel(POM)/signin.page";
import homepage from "./PageObjectModel(POM)/homepage.page";
import createticket from "./PageObjectModel(POM)/createticket.page";
import testData from "../testData/endtoendscenario.json"
//POM
test ("",async({page})=>{
    page.on("dialog",async (dialog)=>{
        console.log(await dialog.message())
        await dialog.accept()
     })
    let landingpage = new landing(page)
    let signuppage = new signup(page)
    let signinpage = new signin(page)
    let homepageG = new homepage(page)
    let createticketpage = new createticket(page)
    //launch the url
    await page.goto("http://49.249.28.218:8081/TestServer/Build/Small_CRM/")
    await landingpage.signupLink.click()
    //pass name for nameTF
    await signuppage.nameTF.fill("Sneha")
    //pass email for emailTF
    await signuppage.emailTF.fill("snehashreebn1@gmail.com")
    //pass password for passwordTF
    await signuppage.password.fill("Skanda@123*!")
    //re-enter password TF
    await signuppage.repasswordTF.fill("Skanda@123*!")
    //contact number TF
    await signuppage.contactTF.fill("9986881328")
    //gender radiobutton
    await signuppage.maleRadio.click()
    //submit button
    await signuppage.submit.click()

    //alert popup - get the message

    //e-mail TF
    await signinpage.emailTF.fill("snehashreebn1@gmail.com")
    //pass Password
    await signinpage.passwordTF.fill("Skanda@123*!")
    //login button
    await signinpage.loginButton.click()
    //create ticket - click
    await homepageG.createTicketLink.click()
    //add subject to subject TF
    await createticketpage.subjectTF.fill("Colour Mismatch")
    //select an option from task type dropdown
    await createticketpage.tasktypeDDown.selectOption({value : "billing"})
    //priority dropdown
    await createticketpage.priorityDDown.selectOption({value : "important"})
    //description TF
    await createticketpage.descriptionTArea.fill("Font colour is mismatch in logo and website")
    //send button
    await createticketpage.sendButton.click()

    //alert - message - accept

    //click on view ticket
    await homepageG.viewTicketLink.click()
    //take screenshot
    await page.screenshot({path:"/screenshot/ticketss.png"})
})

//json file
test.only(" ",async({page})=>{
    let url = testData.url
    let name = testData.Name
    let email = testData.Emailid
    let password1 = testData.Password
    let repassword = testData.RePassword
    let contact = testData.Contactno
    let subject = testData.subject
    let description = testData.description
    page.on("dialog",async (dialog)=>{
        console.log(await dialog.message())
        await dialog.accept()
     })
    let landingpage = new landing(page)
    let signuppage = new signup(page)
    let signinpage = new signin(page)
    let homepageG = new homepage(page)
    let createticketpage = new createticket(page)
    //launch the url
    await page.goto(url)
    await landingpage.signupLink.click()
    //pass name for nameTF
    await signuppage.nameTF.fill(name)
    //pass email for emailTF
    await signuppage.emailTF.fill(email)
    //pass password for passwordTF
    await signuppage.password.fill(password1)
    //re-enter password TF
    await signuppage.repasswordTF.fill(repassword)
    //contact number TF
    await signuppage.contactTF.fill(contact)
    //gender radiobutton
    await signuppage.maleRadio.click()
    //submit button
    await signuppage.submit.click()

    //alert popup - get the message

    //e-mail TF
    await signinpage.emailTF.fill(email)
    //pass Password
    await signinpage.passwordTF.fill(password1)
    //login button
    await signinpage.loginButton.click()
    //create ticket - click
    await homepageG.createTicketLink.click()
    //add subject to subject TF
    await createticketpage.subjectTF.fill(subject)
    //select an option from task type dropdown
    await createticketpage.tasktypeDDown.selectOption({value : "billing"})
    //priority dropdown
    await createticketpage.priorityDDown.selectOption({value : "important"})
    //description TF
    await createticketpage.descriptionTArea.fill(description)
    //send button
    await createticketpage.sendButton.click()

    //alert - message - accept

    //click on view ticket
    await homepageG.viewTicketLink.click()
    //take screenshot
    await page.screenshot({path:"screenshot/ticketss.png"})
})