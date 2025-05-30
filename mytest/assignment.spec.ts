import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'

test ('Mouse Hover Practice test', async () => {

    const browser:Browser = await firefox.launch({headless: false});
    const page:Page = await browser.newPage();

    await page.goto("https://www.bigbasket.com/");

    //page.getByRole('button').click();
    // page.getByText('Shop by Category').first().click();
    // //page.getByText('Taxi').first().click();
    // await page.waitForTimeout(5000);
    // using browserContext.

    await page.locator('//*[@id="headlessui-menu-button-:R5bab6:"]').click();
    //await page.getByRole('button', { name: 'Shop by Category' }).click();
    page.getByText('Bakery, Cakes & Dairy').first().click();
    //page.getByText('Indian Mithai').first().click();


    await page.waitForTimeout(15000);

});