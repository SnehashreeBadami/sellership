import {test} from "@playwright/test"
// test.only("test annotations", async({page})=>{ //to run only this test block
// console.log("test 1");

// })
// test.skip("test 2", async()=>{ //to skip this test block
// console.log("test 2");

// })
test("test 3", async()=>{
console.log("test 3");

})

// test("test 4", async({browserName})=>{ //conditional skipping
//    test.skip(browserName==="firefox")
// })

// test.fail("test 5", async({page})=>{ //expected to fail but passed
// //console.log("test 5");
// await page.goto("fgjskdfkjsdf")
// })

// test.fixme("test 6", async()=>{//skipped until it is fixed.
// console.log("test 6");

// })

test("test 7", async()=>{
test.slow();//slow has to be marked inside the test
console.log("its running");

})

test.describe("login", async()=>{//declare the group of tests
test("valid", async()=>{
console.log("test 8");

})
test("invalid", async()=>{
console.log("test 9");

})
})