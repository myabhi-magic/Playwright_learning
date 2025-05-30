import {test, expect, Browser, Page, Locator} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('Registration Form', async()=>{
    const browser:Browser = await chromium.launch({headless:false, channel: 'chrome'});
    const page:Page = await browser.newPage();

    // target Location
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

    // Basic Locators -: Id, Class, Text Selectors, Css Selectors, Xpath

    // Class Locators

    const logo:Locator = page.locator('.img-responsive');
    const logoExist = await logo.isEnabled();
    console.log(logoExist);


    // ID Locators

    const firstName:Locator = page.locator('#input-firstname');
    const lastName:Locator = page.locator('#input-lastname');

    await firstName.fill('Abhinav');
    await lastName.fill('Saxena');

    // Xpath Locators
    const email:Locator = page.locator("//input[contains(@name, 'email')]");
    await email.fill('my@abc1.com');

    const phone_no:Locator = page.locator('#input-telephone');
    await phone_no.fill('9876543210');

    // Text Selectors

    const header:Locator = page.locator('text=Register Account');
    const headerExist = await header.isEnabled();
    console.log(headerExist);

    const button:Locator = page.locator('text=Continue');
    const buttonExist = await button.isEnabled();
    console.log(buttonExist);

    // CSS Selectors

    const password:Locator = page.locator('css=input[name="password"]');
    const confirm_password:Locator = page.locator('css=input#input-confirm'); // with css mention
    // const confirm_password:Locator = page.locator('input#input-confirm'); // without mentioning css  both will work.

    await password.fill('Test@123');
    await confirm_password.fill('Test@123');

    const privacy_check = page.locator('css=[type="checkbox"]');
    await privacy_check.click();

    // Final Submit using Xpath

    const submit:Locator = page.locator('//input[@type="submit"]');
    await submit.click();

    // Multiple Route Handling(Dynamic Request)
    // Assertion for Success request.

    // await page.locator('a').click(); // Action that triggers navigation
    // await page.waitForURL('**/success'); // Wait for URL to contain '/new-page'

    // await Promise.all([
    // page.waitForNavigation(), // Wait for navigation to complete
    // page.locator('a').click(), // Trigger navigation
    // ]);

    // await page.locator('a').click();
    // await page.waitForURL('**/success');


    // await Promise.all([
    // page.waitForNavigation(),
    // page.locator('a').click(),
    // ]);
    // expect(page.url()).toContain('/new-page');

    await page.waitForURL('**/success'); // if it navigates

    // OR wait for a message to appear
    const title = await page.title();
    console.log("Home Page Title: ", title);
    //await expect(page.locator('.success-message')).toHaveText('Your Account Has Been Created!');
    expect(title).toEqual('Your Account Has Been Created!');

    // 5. (Optional) Assert page URL
    expect(page.url()).toContain('/success');

    await new Promise (() => {});
    //browser.close();
    
});