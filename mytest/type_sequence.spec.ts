import {Browser, expect, Page, test} from '@playwright/test';
import { firefox, chromium } from '@playwright/test';

test ('Type Characters Sequentially', async() => {

    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page:Page = await browser.newPage();

    await page.goto("https://www.flipkart.com/");

    // Without delay
    // await page.getByPlaceholder("Search for Products, Brands and More").pressSequentially('mackbook');

    // With Dealy 
    await page.getByPlaceholder("Search for Products, Brands and More").pressSequentially('mackbook', { delay: 500 });


    await page.waitForTimeout(5000);
    browser.close();

});