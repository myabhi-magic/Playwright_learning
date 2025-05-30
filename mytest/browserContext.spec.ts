import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('login test', async()=>{
    const browser:Browser = await firefox.launch({headless:false});
    //const page:Page = await browser.newPage();


    // BrowserContext 1
    const browserContext_1:BrowserContext = await browser.newContext();
    const page_1:Page = await browserContext_1.newPage();

    // BrowserContext 2
    const browserContext_2:BrowserContext = await browser.newContext();
    const page_2:Page = await browserContext_2.newPage();

    // Browser 1 target Location
    await page_1.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

    // Input Values for Email & Password

    const emailId1:Locator= page_1.locator("#input-email");
    const password1:Locator = page_1.locator("#input-password");
    const loginButton1:Locator = page_1.locator("[value='Login']");

    // Entering the Input Vlaues

    await emailId1.fill("testg@yopmail.com");
    await password1.fill("Test@123");
    await loginButton1.click();

    // Capturing the Page title 
    // const title = await page.title();
    // console.log("Home Page Title: ", title);
    // // Capturing & Storing the Screenshot
    // await page.screenshot({path: 'homepage.png'});
    // //Adding the assertion 
    // expect(title).toEqual('My Account');


    // Browser 2 target Location
    await page_2.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

    // Input Values for Email & Password

    const emailId2:Locator= page_2.locator("#input-email");
    const password2:Locator = page_2.locator("#input-password");
    const loginButton2:Locator = page_2.locator("[value='Login']");

    // Entering the Input Vlaues

    await emailId2.fill("testg2@yopmail.com");
    await password2.fill("Test@123");
    await loginButton2.click();



    //closing the browserCOntext

    // await browserContext_1.close();
    // await browserContext_2.close();

    // browser.close();

    // Prevents the scripts from starting.
    await new Promise (() => {});

});