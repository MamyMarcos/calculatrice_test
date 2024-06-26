const { test, expect } = require('@playwright/test');

test('should calculate correctly', async ({ page }) => {
  // Navigate to the calculator page
  await page.goto('http://localhost:3000');

  // Click the numbers and operators
  await page.click('button:has-text("7")');
  await page.click('button:has-text("+")');
  await page.click('button:has-text("5")');
  await page.click('button:has-text("=")');

  // Verify the result
  expect(await page.inputValue('#display')).toBe('12');
});

test('should clear the display', async ({ page }) => {
  // Navigate to the calculator page
  await page.goto('http://localhost:3000');

  // Click the numbers and the clear button
  await page.click('button:has-text("9")');
  await page.click('button:has-text("C")');

  // Verify the display is reset to 0
  expect(await page.inputValue('#display')).toBe('0');
});