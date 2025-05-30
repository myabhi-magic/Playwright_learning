import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'

test('auth test', async() => {
    const browser:Browser = await chromium.launch({headless:false, channel: 'chrome'});
    const context:BrowserContext = await browser.newContext();
    const page:Page = await context.newPage();

    await page.goto('https://the-internet.herokuapp.com');

    const username = 'admin';
    const password = 'admin';
    //const authHeader = 'Basic ' + btoa(username+':'+password);
    //page.setExtraHTTPHeaders({Authorization : authHeader});
    page.setExtraHTTPHeaders({Authorization : createAuthHeader(username, password)});

    const traget:Locator = page.locator('//*[@id="content"]/ul/li[3]/a');
    await traget.click();

    browser.close();

    //await new Promise(() =>{});

    // using function
    // btoa -- Basically it gives the basic auth output into base64 and it is easy to understand and use.

function createAuthHeader(username:any, password:any) {
    return 'Basic ' + btoa(username+':'+password);
}


});