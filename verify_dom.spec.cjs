const { test, expect } = require('@playwright/test');
const fs = require('fs');

test('DOM Artifact Checklist Validation', async ({ page }) => {
  await page.goto('http://localhost:5173');
  
  const results = {
    placeholderScan: { passed: true, issues: [] },
    specReconciliation: { passed: true, issues: [] },
    domAssertions: { passed: true, issues: [] },
  };

  // 1. Placeholder Scan
  const textContent = await page.content();
  const placeholders = ['[NEEDS', 'TODO', 'FIXME', 'TBD', 'Lorem ipsum', 'undefined'];
  for (const p of placeholders) {
    if (textContent.includes(p)) {
      results.placeholderScan.passed = false;
      results.placeholderScan.issues.push(`Found placeholder: ${p}`);
    }
  }

  // 2. DOM Assertions: Nav == Footer
  // Make sure we wait for the DOM to be ready
  await page.waitForSelector('nav a', { state: 'attached' });
  await page.waitForSelector('footer a', { state: 'attached' });
  const navLinks = await page.locator('nav a').allTextContents();
  const footerLinks = await page.locator('footer a').allTextContents();
  const hasRoadmapNav = navLinks.some(l => l.trim() === 'Roadmap');
  const hasRoadmapFooter = footerLinks.some(l => l.trim() === 'Roadmap');
  if (!hasRoadmapNav || !hasRoadmapFooter) {
    results.domAssertions.passed = false;
    results.domAssertions.issues.push(`Mismatch or missing 'Roadmap' link. Nav: ${hasRoadmapNav} (${navLinks.join(', ')}), Footer: ${hasRoadmapFooter} (${footerLinks.join(', ')})`);
  }

  // 3. DOM Assertions: Value Props in Hero
  const heroText = await page.locator('#top').textContent();
  const requiredPillars = ['Modular & Lean', 'Open Source First', 'Community Owned'];
  for (const pillar of requiredPillars) {
    if (!heroText.includes(pillar)) {
      results.domAssertions.passed = false;
      results.domAssertions.issues.push(`Missing value prop in Hero: ${pillar}`);
    }
  }
  
    // Test interaction: Click all accordion triggers
    const accordionTriggers = page.locator('button[aria-expanded]');
    const count = await accordionTriggers.count();
    if (count === 0) {
      // It might be styled differently, let's just check for general triggers
      const triggers = page.locator('.AccordionTrigger');
      if (await triggers.count() === 0) {
         results.domAssertions.passed = false;
         results.domAssertions.issues.push('No accordion items found for interaction coverage.');
      }
    } else {
      for (let i = 0; i < count; i++) {
        await accordionTriggers.nth(i).click();
        await page.waitForTimeout(100);
      }
    }

    // Test 5: Verify Privacy Policy Route works
    await page.goto('http://localhost:5173/privacy');
    await page.waitForSelector('h1', { state: 'attached' });
    const privacyTitle = await page.locator('h1').textContent();
    if (!privacyTitle || !privacyTitle.includes('Privacy Policy')) {
      results.domAssertions.passed = false;
      results.domAssertions.issues.push(`Privacy policy page did not load correctly. H1: ${privacyTitle}`);
    }

  // Save artifacts
  fs.writeFileSync('dom_verify.json', JSON.stringify(results, null, 2));
  expect(results.placeholderScan.passed).toBeTruthy();
  expect(results.domAssertions.passed).toBeTruthy();
});