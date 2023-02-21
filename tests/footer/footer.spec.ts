import test, { expect } from "@playwright/test";

test.describe("Footer", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/");
	});

	test("should have a link to Twitter profile", async ({ page }) => {
		const twitterLink = page
			.getByRole("contentinfo")
			.getByRole("link", { name: "@jsulpis" });

		await expect(twitterLink).toHaveAttribute("href", "https://twitter.com/jsulpis");
	});
});
