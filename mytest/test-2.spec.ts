import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.bigbasket.com/');
  await page.locator('[id="headlessui-menu-button-\\:R5bab6\\:"]').click();
  await page.getByRole('link', { name: 'Herbs & Seasoning' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Regency Cassia Taj - Cigarette Roll 100 g' }).click();
  const page1 = await page1Promise;
});