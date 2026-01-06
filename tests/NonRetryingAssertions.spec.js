import {test,expect} from "@playwright/test"
test("Non-Retrying Assertions", async({page})=>{
    // await page.goto("https://practicetestautomation.com/practice-test-login-/")
    // await page.locator('//input[@id="username"]').fill("student")
    // await page.locator('//input[@id="password"]').fill("Password123")
    // await page.locator('//button[@id="submit"]').click()
    // let LoggedIn = false;
    // LoggedIn = true;
    // expect(LoggedIn).toBe(true)
    // let a = "Welcome Home";
    // expect(a).toContain("Home");
    // await expect("Snehashree").toContain("snehashree")//assertion fails since it is case-sensitive
    // await expect([10,20,30]).toContain(20);//assertion passes
    // let name = null
    // await expect(name).toBeTruthy() //assertion fails coz it is null. It wont accept null,0,false,"",undefined,Nan
    // let b = "sneha"
    // await expect(b).toBeTruthy()//assertion passes 
    // let c = null
    // await expect(c).toBeFalsy()//assertion passes coz toBeFalsy works only for 0,null,false,"",undefined,NaN
    // await expect("Skanda").toBeFalsy()//assertion fails coz it accepts only 0,null,false,"",undefined,NaN
    // await expect(null).toBeNull()//assertion passes
    // await expect(0.0/0.0).toBeNaN()
    // await expect(undefined).toBeUndefined()//undefined in expect lowercase('u')
    // let b
    // await expect(b).toBeUndefined()
    // let arr = [10,20,30]
    // expect(arr).toContainEqual(20)
    // await expect([20,30,40,50]).toContainEqual(50)
    // let a = [20,30,40]
    // let b = [20,30,40]
    // await expect(a).toEqual(b)
    // await expect([10,20,30]).toHaveLength(3)
    // await expect(75).toBeGreaterThan(60)
    // await expect(56).toBeGreaterThanOrEqual(56)
    // await expect(32).toBeLessThan(40)
    // await expect(35).toBeLessThanOrEqual(42)
    // await expect({a:1,b:2,c:3}).toHaveProperty('c')
    // await expect("aeiou").toMatch(/[aeiouAEIOU]/g)
    // await expect("Sahana and Manoj").toMatch("Sahana")
    // await expect("aaaa").toMatch(/[aeiouAEIOU]/g)
    // await expect({a:2,b:3,c:4}).toMatchObject({a:2})
})