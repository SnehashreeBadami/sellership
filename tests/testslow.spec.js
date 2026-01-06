import {test} from "@playwright/test"
test("test 3", async({page})=>{
console.log("test 3");
//await page.goto("www.amazon.com")
})
test.slow();
test("test 4", async()=>{
    //test.slow();

console.log("test 4");

})
