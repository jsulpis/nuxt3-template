import { test, expect } from "@playwright/test";

test.describe("Navigation @mobile", () => {
	const pages = [
		{ path: "/get-started", label: "Get started" },
		{ path: "/dynamic-page", label: "Dynamic page" },
		{ path: "/", label: "Home" }
	];

	test.beforeEach(async ({ page }) => {
		await page.goto("/");
	});

	test("page should have one navbar in the overlay panel", async ({ page }) => {
		expect(await page.getByRole("navigation").count()).toBe(0);

		await page.getByRole("button", { name: "Open or close the navigation" }).click();

		expect(await page.getByRole("navigation").count()).toBe(1);
	});

	test("in the panel, the navbar should have links to all pages", async ({ page }) => {
		expect(page.url()).toBe("http://localhost:3000/");
		expect(await page.getByRole("navigation").count()).toBe(0);

		await page.getByRole("button", { name: "Open or close the navigation" }).click();

		for (const { path, label } of pages) {
			await page.getByRole("navigation").getByRole("link", { name: label }).click();

			await expect(page.getByRole("navigation")).toBeHidden();

			await page.getByRole("button", { name: "Open or close the navigation" }).click();

			const activeLink = page.locator(`a[href$="${path}"][aria-current=page]`);
			expect(await activeLink.count()).toBeGreaterThanOrEqual(1);
		}
	});
});
