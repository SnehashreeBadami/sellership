import {test} from "@playwright/test";
test("DropDowns",async({page})=>{
    // await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    // await page.locator('//select[@id="select3"]')
    //selectOption()
    // await page.waitForTimeout(3000)
    // await page.locator('//select[@id="select3"]').selectOption({value:'India'})//selecting through value
    // await page.locator('//select[@id="select3"]').selectOption({label:'India'})//selecting through label(label is nothing but visible text)
    // await page.locator('//select[@id="select3"]').selectOption({index:7})//selecting through index
    // await page.locator('//select[@id="select3"]').selectOption('India')//directly passing the visible text
    // await page.waitForTimeout(2000)

    //multiple selection
    // await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
    // await page.waitForTimeout(2000)
    // // await page.locator('#select-multiple-native').selectOption([{value:'Mens Casual Premium Slim Fit T-Shirts'},{value:'Mens Cotton Jacket'}])
    // await page.locator('#select-multiple-native').selectOption([{index:1},{index:3}])
    // await page.locator('//button[@class="bg-orange-500 p-2 text-white rounded w-[150px]"]').click()
    // await page.waitForTimeout(2000)

    //custom Dropdown
    await page.goto("https://www.amazon.in/s?k=shoes&crid=31OU80BE6K3YZ&sprefix=shoes%2Caps%2C700&ref=nb_sb_noss_2")
    await page.locator('//select[@id="s-result-sort-select"]').click({force:true})
    await page.locator('//a[@class="a-dropdown-link"]').first().waitFor()
    let a = await page.locator('//a[@class="a-dropdown-link"]').all()
    // for(let options of a){
    //     let text = await options.textContent()
    //     if(text.includes('Best Sellers')){//we can pass partial text
    //         await options.click()
    //     }
    // }
    // await page.waitForTimeout(3000)

    //Xpath
    await page.locator('#s-result-sort-select_1').click()
    await page.waitForTimeout(3000)
})