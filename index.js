import puppeteer from "puppeteer";

async function test() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto("https://example.com");
  const title = await page.title();
  console.log("Page title:", title);
  await browser.close();
}

test();
