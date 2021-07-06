const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5000/flights/flights-search');
  await page.screenshot({ path: 'example.png' });
  let html = await page.evaluate(() => document.body.innerHTML);
  console.log(html)
  await browser.close();
})();
