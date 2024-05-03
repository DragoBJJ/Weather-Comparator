import test, { expect } from '@playwright/test';

test('search for Weather in City', async ({ page }) => {
  await page.goto('/');
  const input = page.getByPlaceholder('Select a city');
  const button = page.getByText('Check weather');

  await input.fill('Poznań');
  await button.click();

  const weatherCard = page.getByRole('contentinfo');

  await expect(weatherCard).toBeInViewport({ timeout: 10000 });
  await expect(weatherCard).toHaveCount(1);
});

test('Check if the error about not finding weather for the specified city is displayed correctly', async ({
  page,
}) => {
  await page.goto('/');
  const input = page.getByPlaceholder('Select a city');
  const button = page.getByText('Check weather');

  await input.fill('AAAAAA');
  await button.click();

  const errorTitle = page.getByRole('heading', { name: 'Your Location doesnt exist' });
  await expect(errorTitle).toBeInViewport({ timeout: 10000 });
});
