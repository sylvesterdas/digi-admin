import { test, expect } from '@playwright/test'

test.describe('Frontend', () => {
  test('can go on homepage', async ({ page }) => {
    await page.goto('/')

    await expect(page).toHaveTitle(/Government Services Portal/)

    const heading = page.locator('h2').first()

    await expect(heading).toHaveText('Life situations')
  })
})
