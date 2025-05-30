import {test, expect, Browser, Page, Locator} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('login test', async()=>{
    const browser:Browser = await firefox.launch({headless:false});
    const page:Page = await browser.newPage();

    // target Location
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

    // Input Values for Email & Password

    const emailId:Locator= page.locator("#input-email");
    const password:Locator = page.locator("#input-password");
    const loginButton:Locator = page.locator("[value='Login']");

    // Entering the Input Vlaues

    await emailId.fill("testg@yopmail.com");
    await password.fill("Test@123");
    await loginButton.click();

    // Capturing the Page title 

    const title = await page.title();
    console.log("Home Page Title: ", title);

    // Capturing & Storing the Screenshot

    await page.screenshot({path: 'homepage.png'});

    //Adding the assertion 

    expect(title).toEqual('My Account');

    //closing the browser
    browser.close();

});