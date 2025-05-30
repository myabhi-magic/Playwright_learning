import {Browser, expect, Page, test} from '@playwright/test';
import { firefox, chromium } from '@playwright/test';

test ('Drag and Drop Test', async() => {

    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page:Page = await browser.newPage();

    // Drag and Drop from element to element (One element to another element)

    await page.goto("https://jqueryui.com/resources/demos/droppable/default.html");

    // Single Line Method (Not a best approaches)

    // await page.locator("#draggable").dragTo(page.locator("#droppable"));

    // Multiple Commanda/Actions (Best Practice)

    await page.locator("#draggable").hover();
    await page.mouse.down();
    await page.locator("#droppable").hover();
    await page.mouse.up();


    await page.waitForTimeout(10000);
    browser.close();

});