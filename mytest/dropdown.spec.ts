import {Browser, Page, test} from '@playwright/test'
import { webkit, firefox, chromium } from '@playwright/test'

test ('dorpdown handling', async() => {

    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page:Page = await browser.newPage();

    await page.goto("https://www.magupdate.co.uk/magazine-subscription/phrr");

    const countryDropdown = 'select#Contact_CountryCode';

    // await page.selectOption(countryDropdown, { value: 'AD' }); // select the dropdown value by using value intital
    // await page.selectOption(countryDropdown, { label: 'Australia' }); // select the dropdown value by using label
        await page.selectOption(countryDropdown, { index: 7 }); // select the dropdown value by using index

        const all_option = await page.$$(countryDropdown + ' > option'); // get multi records 
        console.log(all_option.length);

        for (const e of all_option) {
            const text = await e.textContent();
            console.log(text);
            if (text === 'India' ) {
                await page.selectOption(countryDropdown, { label: text });
                break;
            }
        }

    await page.waitForTimeout(10000);
});
