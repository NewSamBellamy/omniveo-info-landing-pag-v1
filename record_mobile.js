import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    recordVideo: {
      dir: './videos/',
      size: { width: 375, height: 812 }
    }
  });
  
  const page = await context.newPage();
  console.log('Navigating to http://localhost:5173 on 375px mobile viewport...');
  
  try {
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  } catch (e) {
    console.error('Failed to load page.');
    await browser.close();
    process.exit(1);
  }

  await page.waitForTimeout(3000);

  // Take mobile full-page screenshot
  await page.screenshot({ path: 'landing_mobile.jpg', type: 'jpeg', quality: 90, fullPage: true });
  console.log('Full-page mobile screenshot saved: landing_mobile.jpg');
  
  // Interactive coverage: Check hover/focus state
  console.log('Testing hover states...');
  await page.hover('a[href="#waitlist"]');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'hover_state.jpg', type: 'jpeg', quality: 90 });

  // Test FAQ interaction
  console.log('Opening FAQ accordions...');
  const triggers = await page.locator('button[aria-expanded]');
  if (await triggers.count() > 0) {
    await triggers.nth(0).scrollIntoViewIfNeeded();
    await triggers.nth(0).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'faq_open.jpg', type: 'jpeg', quality: 90 });
  }

  // Record a fast scroll for mobile video
  console.log('Scrolling for video recording...');
  for (let i = 0; i < 30; i++) {
    await page.mouse.wheel(0, 300);
    await page.waitForTimeout(800);
  }

  const videoPath = await page.video().path();
  console.log(`__VIDEO_PATH__:${videoPath}`);

  await context.close();
  await browser.close();
})();
