// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  timeout: 60000,
  use: {
    browserName: 'chromium',
    headless: true,
    baseURL: 'http://localhost:3000',
    viewport: { width: 1280, height: 720 },
  },
  webServer: {
    command: 'npm run dev',
    port:3000,
    timeout: 120000, 
    reuseExistingServer: !process.env.CI,
  },
});