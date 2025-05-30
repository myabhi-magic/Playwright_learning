// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://www.bigbasket.com/');
//   await page.locator('[id="headlessui-menu-button-\\:R5bab6\\:"]').click();
//   await page.getByRole('link', { name: 'Buns, Pavs & Pizza Base' }).click();
// });

         /** Using CodeGen in Playwright -- Recordin the particular feature/module */


// import { test, expect, Browser, Page } from '@playwright/test';
// import { webkit, chromium, firefox } from '@playwright/test'

// test('navigate to Buns, Pavs & Pizza Base via hover menu', async () => {
//   // Step 1: Go to BigBasket homepage

//   const browser:Browser = await firefox.launch({headless: false});
//   const page:Page = await browser.newPage();

//   await page.goto('https://www.bigbasket.com/');

//   await page.locator('[id="headlessui-menu-button-\\:R5bab6\\:"]').click();

//   // Step 2: Hover over the "Bakery, Cakes & Dairy" category
//   const bakeryMenu = page.getByRole('link', { name: 'Bakery, Cakes & Dairy' }).first();
//   console.log('Pass 1');
//   await bakeryMenu.hover();
//   console.log('Pass 2');
//   // Step 3: Click on "Buns, Pavs & Pizza Base" in the submenu
//   const subCategory = page.getByRole('link', { name: 'Buns, Pavs & Pizza Base' });
//   console.log('Pass 3');
//   await subCategory.click();
//   console.log('Pass 4');

//   // Step 4: Assert the navigation was successful
//   await expect(page).toHaveURL(/.*buns-pavs-pizza-base.*/);
//   console.log('cOMPLETED');
// });



import { test, expect, Browser, Page, firefox } from '@playwright/test';

test('navigate to Buns, Pavs & Pizza Base via hover menu', async () => {
  // Step 1: Go to BigBasket homepage

  const browser:Browser = await firefox.launch({headless: false});
  const page:Page = await browser.newPage();
  
  await page.goto('https://www.bigbasket.com/');

  await page.locator('[id="headlessui-menu-button-\\:R5bab6\\:"]').click();
  
  // Step 2: Hover over the main menu item "Shop by Category"
  await page.hover('[id^="headlessui-menu-button"]');

  // Wait for the category panel to show up
  await page.waitForSelector('a:has-text("Bakery, Cakes & Dairy")');

  // Step 3: Hover over "Bakery, Cakes & Dairy"
  const bakeryMenu = page.locator('a:has-text("Bakery, Cakes & Dairy")').first();
  await bakeryMenu.hover();

  // Step 4: Click on "Buns, Pavs & Pizza Base"
  const subCategory = page.locator('a:has-text("Buns, Pavs & Pizza Base")').first();
  await subCategory.click();

  // Step 5: Assert navigation success
  await expect(page).toHaveURL(/.*buns-pavs-pizza-base.*/);
});
