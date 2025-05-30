import {BrowserContext, Page, test} from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'

test ('No Incognito Window', async () => {

    const browser:BrowserContext = await chromium
    .launchPersistentContext('', {headless:false, channel: 'chrome'});

    const pages = browser.pages();
    const page:Page = pages[0];

    // const page:Page = await browser.newPage();
    await page.setViewportSize({ width: 1280, height: 672 })
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

    await page.waitForTimeout(10000);

});