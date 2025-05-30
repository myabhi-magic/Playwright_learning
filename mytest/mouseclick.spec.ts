import {Browser, expect, Page, test} from '@playwright/test';
import { firefox, chromium } from '@playwright/test';

test ('Mouse click events', async() => {

    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page:Page = await browser.newPage();

    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");

    // Doubel Click
    const button = page.getByText('Double-Click Me To See Alert');
    await button.dblclick();
    await page.waitForTimeout(5000);

    // await page.getByText('Double-Click Me To See Alert').dblclick();  
    // const value = 'You double clicked me.. Thank You..';
    // expect(value).toContain('You double clicked me.. Thank You..'); 

    // Right Click or Context Click

    await page.getByText('right click me').click({button: 'right'});
    await page.waitForTimeout(3000);

    // Shift + Click 

    await page.goto("https://the-internet.herokuapp.com/shifting_content");
    await page.getByText('Example 1: Menu Element').click({modifiers: ['Shift']});


    await page.waitForTimeout(10000);
    browser.close();
});