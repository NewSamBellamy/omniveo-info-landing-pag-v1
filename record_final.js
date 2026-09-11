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
  console.log('Navigating to http://localhost:5173 for final full-screen validation video...');
  
  try {
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  } catch (e) {
    console.error('Failed to load page. Is dev server running?');
    await browser.close();
    process.exit(1);
  }

  // Wait a bit for entrance animations
  await page.waitForTimeout(3000);
  
  // 1. Demonstrate hover state on the Waitlist button in Hero
  console.log('Testing hover states...');
  await page.hover('a[href="#waitlist"]');
  await page.waitForTimeout(1000);

  // 2. Scroll through the page slowly
  console.log('Scrolling slowly through the page...');
  for (let i = 0; i < 30; i++) {
    await page.mouse.wheel(0, 300);
    await page.waitForTimeout(800);
  }

  // 3. Open every FAQ accordion when we reach the bottom
  console.log('Opening all FAQ items...');
  const triggers = await page.locator('button[aria-expanded]');
  const count = await triggers.count();
  for (let i = 0; i < count; i++) {
    await triggers.nth(i).click();
    await page.waitForTimeout(600); // Wait for the animation to expand
  }

  // Wait so the open FAQs can be read on video
  await page.waitForTimeout(3000);

  // 4. Click the Privacy Policy link to prove it resolves
  console.log('Navigating to Privacy Policy...');
  await page.click('text="Privacy Policy"');
  await page.waitForTimeout(3000); // Wait for the page to load and be visible

  const videoPath = await page.video().path();
  console.log(`__VIDEO_PATH__:${videoPath}`);

  await context.close();
  await browser.close();
})();
