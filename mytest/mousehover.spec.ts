import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'

test ('Mouse Hover test', async () => {

    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page:Page = await browser.newPage();

    await page.goto("https://www.spicejet.com/");

    page.getByText('Add-ons').first().hover();
    page.getByText('Taxi').first().click();
    await page.waitForTimeout(5000);

    // using browserContext.


    // page.getByText('SpiceClub').first().hover();

    await page.waitForTimeout(10000);

});