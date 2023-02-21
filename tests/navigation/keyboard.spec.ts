import test, { expect } from "@playwright/test";

test.describe("Keyboard navigation on @desktop", () => {
	test.beforeEach(async ({ page }) => {
		await Promise.all([page.waitForLoadState("networkidle"), page.goto("/")]); // must wait hydration
	});

	test("should have a skip navigation link at the top", async ({ page }) => {
		const skipNavigationLink = page.getByRole("link", { name: "Skip navigation" });

		// Playwright wants element with empty bounding box to be considered hidden
		// Safari does not give focus to elements with empty bounding box
		// So... skipping this check 🤦‍♂️
		// await expect(skipNavigationLink).toBeHidden();

		await page.keyboard.press("Tab");

		await expect(skipNavigationLink).toBeVisible();
		await expect(skipNavigationLink).toBeFocused();

		await page.keyboard.press("Enter");

		await expect(page.getByRole("main")).toBeFocused();
	});

	test("should focus the skip navigation link when navigating", async ({ page }) => {
		await page.keyboard.press("Tab");
		await page.keyboard.press("Tab");
		await page.keyboard.press("Tab");

		const header = page.getByRole("banner");
		await expect(header.getByRole("link", { name: "Get started" })).toBeFocused();

		await page.keyboard.press("Enter");

		const skipNavigationLink = page.getByRole("link", { name: "Skip navigation" });
		await expect(skipNavigationLink).toBeFocused();
	});
});
