const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const file = process.argv[2] || 'card.html';
  const out = process.argv[3] || 'out.png';
  const scale = Number(process.argv[4] || 2);

  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  const page = await browser.newPage({
    viewport: { width: 1080, height: 1920 },
    deviceScaleFactor: scale,
  });
  await page.goto('file://' + path.resolve(file));
  await page.evaluate(async () => {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }
  });
  await page.waitForTimeout(300);
  await page.screenshot({ path: out });
  await browser.close();
  console.log('rendered', out);
})();
