import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

const macbookPro14Viewport = { width: 1512, height: 982 };

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
	testDir: "./tests",
	/* Maximum time one test can run for. */
	timeout: 15 * 1000,
	expect: {
		/**
		 * Maximum time expect() should wait for the condition to be met.
		 * For example in `await expect(locator).toHaveText();`
		 */
		timeout: 5000
	},
	/* Run tests in files in parallel */
	fullyParallel: true,
	/* Fail the build on CI if you accidentally left test.only in the source code. */
	forbidOnly: !!process.env.CI,
	retries: 2,
	/* Opt out of parallel tests on CI. */
	workers: process.env.CI ? 1 : undefined,
	/* Fail fast on CI to save time and resources */
	maxFailures: process.env.CI ? 6 : undefined,
	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: "html",
	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	use: {
		/* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
		actionTimeout: 0,
		/* Base URL to use in actions like `await page.goto('/')`. */
		baseURL: "http://localhost:3000",

		/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
		trace: "on-first-retry"
	},

	/* Configure projects for major browsers */
	projects: [
		{
			name: "chrome",
			grepInvert: /@mobile/,
			use: { ...devices["Desktop Chrome"], viewport: macbookPro14Viewport }
		},
		{
			name: "firefox",
			grepInvert: /@mobile/,
			use: { ...devices["Desktop Firefox"], viewport: macbookPro14Viewport }
		},
		{
			name: "safari",
			grepInvert: /@mobile/,
			use: { ...devices["Desktop Safari"], viewport: macbookPro14Viewport }
		},
		{
			name: "android",
			grepInvert: /@desktop/,
			use: { ...devices["Galaxy S5"] }
		},
		{
			name: "iphone",
			grepInvert: /@desktop/,
			use: { ...devices["iPhone 12"] }
		}
	],
	/* Run your local dev server before starting the tests */
	webServer: {
		command: "pnpm preview",
		port: 3000,
		reuseExistingServer: !process.env.CI
	}
};

export default config;
