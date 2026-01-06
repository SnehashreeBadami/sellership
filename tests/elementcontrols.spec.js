import {test} from "@playwright/test"
import { log } from "node:console"
test("element controls",async({page})=>{
//  await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
//  await page.locator("#name").fill("Sneha")
 //inputValue
//  let text = await page.locator("#name").inputValue()
//  console.log(text);
//  await page.locator("#password").type("abcdefgh")
//  console.log(await page.locator("#password").inputValue());
 
//  await page.locator('//button[.="Register"]').click()//we can use "." instead of text() OR
//  await page.locator('//button[@type="submit"]').click()//we can use "." instead of text()
//  await page.pause(3000)
// let a = await page.locator('//section[@class="poppins text-[14px]" and text()="Radio Button"]').innerText()
// console.log(a);//Radio Button
// let b = await page.locator('//section[@class="poppins text-[14px]" and text()="Radio Button"]').textContent()
// console.log(b);//Radio Button
//allTextContent()
// let m = await page.locator('//section[@class="poppins text-[14px]"]').allTextContents()
// console.log(m);
//element.getAttribute("Attribute_name")
//page.locator('selector').getAttribute("attribute_name")
//  await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
//  let a = await page.locator('//input[@id="male"]').getAttribute('value')
//  console.log(a);
 //element.all() -  //all() is returning the array of elements handles
//  await page.goto("https://www.flipkart.com/")
//  let x = await page.locator('//div[@class="_3ETuFY"]').all()
//  console.log(x);
//let x = await page.locator('//div[@class="_3ETuFY"]') //without .all() o/p is locator('//div[@class="_3ETuFY"]'
//  let y = await page.locator('//div[@class="_3ETuFY"]').first() //return the address of first element out of all multiple
 //matching elements. //o/p is locator('//div[@class="_3ETuFY"]').first()
//  console.log(y);
//  let g  = await page.locator('//div[@class="_3ETuFY"]').nth(index) //o/p is locator('//div[@class="_3ETuFY"]').nth(1)
// console.log(g);
// await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
// //waitFor()
// await page.locator('//section[@class="poppins text-[14px]"]').first().waitFor()
// let m = await page.locator('//section[@class="poppins text-[14px]"]').all() 
// console.log(m);
//isVisible()
//page.locator("selector").isVisible()
// await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
// await page.locator('//input[@id="phone"]').fill("abc")
// await page.locator('//input[@id="phone"]').waitFor()
// let d = await page.locator('//input[@id="phone"]').isVisible()//false even it is visible coz it doesnt support auto-wait
//so we can use waitFor() or fill() as shown above.
// console.log(d);
//isEnabled()
// await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
// await page.locator('//input[@id="phone"]').waitFor() - if it takes long time we can use waitFor()
// let e = await page.locator('//input[@id="phone"]').isEnabled()//true
// console.log(e);
// let f = await page.locator('//input[@id="phone"]').isDisabled()//false since it is enabled
// console.log(f);
// let l = await page.locator('//input[@id="phone"]').isEditable()//true since it is a textfield
// console.log(l);
// await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
// await page.locator('//button[text()="Yes"]').waitFor()// - if it takes long time we can use waitFor()
// let n = await page.locator('//button[text()="Yes"]').isEditable()//throws error by default since it is a radiobutton
// console.log(n);
//isCheckeD()
await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
// await page.locator('//input[@id="domain_a"]').click()
await page.locator('//input[@id="domain_a"]').waitFor()
let n = await page.locator('//input[@id="domain_a"]').isChecked()
console.log(n);//true

})