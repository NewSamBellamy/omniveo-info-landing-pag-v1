import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    recordVideo: {
      dir: './videos/',
      size: { width: 1280, height: 720 }
    }
  });
  
  const page = await context.newPage();
  console.log('Navigating to http://localhost:5173...');
  
  try {
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  } catch (e) {
    console.error('Failed to load page.');
    await browser.close();
    process.exit(1);
  }

  // Wait a moment for intro animations to finish
  await page.waitForTimeout(3000);

  // Take a full-page high-quality screenshot so you can read all copy
  await page.screenshot({ path: 'landing_full_page.jpg', type: 'jpeg', quality: 90, fullPage: true });
  console.log('Full-page screenshot saved: landing_full_page.jpg');

  // Also take sectional screenshots just in case full-page cuts anything off
  await page.screenshot({ path: 'landing_top.jpg', type: 'jpeg', quality: 90 });
  
  console.log('Scrolling slowly for video recording...');
  // Scroll down very slowly (300px per second) so you can read everything
  for (let i = 0; i < 20; i++) {
    await page.mouse.wheel(0, 300);
    await page.waitForTimeout(1000);
  }
  
  await page.screenshot({ path: 'landing_middle.jpg', type: 'jpeg', quality: 90 });

  for (let i = 0; i < 20; i++) {
    await page.mouse.wheel(0, 300);
    await page.waitForTimeout(1000);
  }

  // Wait a bit at the bottom
  await page.screenshot({ path: 'landing_bottom.jpg', type: 'jpeg', quality: 90 });
  await page.waitForTimeout(2000);
  
  // Scroll back up slightly faster
  for (let i = 0; i < 20; i++) {
    await page.mouse.wheel(0, -600);
    await page.waitForTimeout(500);
  }

  await page.waitForTimeout(1000);

  const videoPath = await page.video().path();
  console.log(`__VIDEO_PATH__:${videoPath}`);

  await context.close();
  await browser.close();
})();
