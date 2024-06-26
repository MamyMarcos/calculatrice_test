const { test, expect } = require('@playwright/test');

test('should calculate correctly', async ({ page }) => {
  // Naviguer vers la page de la calculatrice
  await page.goto('http://localhost:3000');

  // Cliquer sur les nombres et les opérateurs
  await page.click('button:has-text("7")');
  await page.click('button:has-text("+")');
  await page.click('button:has-text("5")');
  await page.click('button:has-text("=")');

  // Vérifier le résultat
  expect(await page.inputValue('#display')).toBe('12');
});

test('should clear the display', async ({ page }) => {
  // Naviguer vers la page de la calculatrice
  await page.goto('http://localhost:3000');

  // Cliquer sur les nombres et le bouton de réinitialisation
  await page.click('button:has-text("9")');
  await page.click('button:has-text("C")');

  // Vérifier que l'affichage est réinitialisé à 0
  expect(await page.inputValue('#display')).toBe('0');
});

test('should subtract two numbers', async ({ page }) => {
  // Naviguer vers la page de la calculatrice
  await page.goto('http://localhost:3000');

  // Cliquer sur les nombres et l'opérateur de soustraction
  await page.click('button:has-text("7")');
  await page.click('button:has-text("-")');
  await page.click('button:has-text("3")');
  await page.click('button:has-text("=")');

  // Vérifier le résultat
  expect(await page.inputValue('#display')).toBe('4');
});

test('should multiply two numbers', async ({ page }) => {
  // Naviguer vers la page de la calculatrice
  await page.goto('http://localhost:3000');

  // Cliquer sur les nombres et l'opérateur de multiplication
  await page.click('button:has-text("4")');
  await page.click('button:has-text("*")');
  await page.click('button:has-text("6")');
  await page.click('button:has-text("=")');

  // Vérifier le résultat
  expect(await page.inputValue('#display')).toBe('24');
});

test('should divide two numbers', async ({ page }) => {
  // Naviguer vers la page de la calculatrice
  await page.goto('http://localhost:3000');

  // Cliquer sur les nombres et l'opérateur de division
  await page.click('button:has-text("1")');
  await page.click('button:has-text("2")');
  await page.click('button:has-text("/")');
  await page.click('button:has-text("3")');
  await page.click('button:has-text("=")');

  // Vérifier le résultat
  expect(await page.inputValue('#display')).toBe('4');
});