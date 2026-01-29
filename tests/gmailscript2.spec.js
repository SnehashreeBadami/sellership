import {test} from "@playwright/test";
test("Gmail 01",async({page})=>{
    await page.goto("https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&dsh=S756237396%3A1765283507530372&ifkv=Ac2yZaUcvjBXDcDMhMpoF3XENS2FT24ntPqKwNaBgQ8DrLnmZMRbWb_UVpLyF-MKjmGuy1DCNWRHMA&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin");
    await page.locator('//input[@type="email"]').fill("snehanagaraj735@gmail.com");
    await page.getByText("Next").click()
    await page.locator('//input[@type="password"]').fill("Skanda@123*!");
    await page.getByText("Next").click();
}) 

