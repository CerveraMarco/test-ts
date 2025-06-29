import { test, expect } from '@playwright/test';

test('Busqueda', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.mx/');

  // Buscar
  await page.locator('#cb1-edit').fill('Iphone');
  await page.keyboard.press('Enter');

  // Esperar que aparezcan resultados
  await expect(page.locator('.ui-search-layout')).toBeVisible();

  // Extraer títulos
  const titles = await page.locator('.ui-search-layout h3').allInnerTexts();

  for (let title of titles) {
    console.log(title);
  }

  console.log('Encontramos', titles.length);
});

