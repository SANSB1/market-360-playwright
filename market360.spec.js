const { test, expect } = require('@playwright/test');

const baseURL = 'https://market-360-frontend-zeta.vercel.app/';

test.describe('Market 360 Website Tests', () => {

  // Test Case 1: Home Page Loads
  test('Home Page should load', async ({ page }) => {
    await page.goto(baseURL);
    await expect(page).toHaveTitle(/Market360/i); 
    await expect(page.locator('text=Shop Now')).toBeVisible();
  });

  // Test Case 2: Shop Now Navigation
  test('Click on Shop Now button', async ({ page }) => {
    await page.goto(baseURL);
    await page.click('text=Shop Now');  // Navigates to shop page
    await expect(page).toHaveURL(/auth/);
  });

  // Test Case 3: Sign Up with Valid Email & Password
  test('Sign Up functionality', async ({ page }) => {
  await page.goto(baseURL + 'auth');  // Navigate to Sign Up page

  // Fill email and password
  await page.fill('input[type="email"]', 'tolin75172@cosdas.com');
  await page.fill('input[type="password"]', 'ABC123');

  // Click the Sign Up / Submit button
  await page.click('button[type="submit"]');

  // Wait for the Sign In heading to appear (after successful sign up or redirect)
  const signInHeading = page.getByRole('heading', { name: 'Sign In' });
  await expect(signInHeading).toBeVisible();

  // Click the Sign In button if needed
  const signInBtn = page.getByRole('button', { name: 'Sign In' });
  await signInBtn.click();
  });
});
