import {Browser, Page, test} from '@playwright/test'
import { firefox, chromium } from '@playwright/test'

test ('file Upload cases', async() => {

    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page:Page = await browser.newPage();

    await page.goto("https://practice.expandtesting.com/upload");
    await page.waitForTimeout(10000);

    // Single file upload
    await page.locator("input[name='file']").setInputFiles("C:/Users/abhinav.saxena/Downloads/dummy.pdf");

    await page.waitForTimeout(5000);
    browser.close();

});