import test, { expect } from "@playwright/test";

test.describe("404 Page", () => {
	test("should display in english", async ({ page }) => {
		await page.goto("/yaaa");

		const pageContent = page.locator("main");
		await expect(pageContent).toContainText("404");
		await expect(pageContent).toContainText("This page does not exist.");
	});

	test("should display in french", async ({ page }) => {
		await page.goto("/fr/pouet");

		const pageContent = page.locator("main");
		await expect(pageContent).toContainText("404");
		await expect(pageContent).toContainText("Cette page n'existe pas.");
	});

	test("should display the @desktop navigation", async ({ page }) => {
		await page.goto("/ouch");

		const navbar = page.getByRole("banner").getByRole("navigation");
		await expect(navbar).toBeVisible();
	});

	test("should display the @mobile navigation", async ({ page }) => {
		await page.goto("/ouch");

		await page.getByRole("button", { name: "Open or close the navigation" }).click();

		expect(await page.getByRole("navigation").count()).toBe(1);
	});
});
