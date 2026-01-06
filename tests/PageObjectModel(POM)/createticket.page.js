class createticket{
    constructor(page){
        this.subjectTF = page.locator('//input[@id="subject"]')
        this.tasktypeDDown = page.locator('//select[@name="tasktype"]')
        this.priorityDDown = page.locator('//select[@name="priority"]')
        this.descriptionTArea = page.locator('//textarea[@name="description"]')
        this.sendButton = page.locator('//input[@name="send"]')
        
     }
}
export default createticket