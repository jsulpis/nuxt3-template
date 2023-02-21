import { test, expect } from "@playwright/test";

test.describe("Navigation @desktop", () => {
	const pages = [
		{ path: "/get-started", label: "Get started" },
		{ path: "/dynamic-page", label: "Dynamic page" },
		{ path: "/", label: "Home" }
	];

	test.beforeEach(async ({ page }) => {
		await page.goto("/");
	});

	test("page should one navbar in the header", async ({ page }) => {
		const navbars = page.getByRole("navigation");
		expect(await navbars.count()).toBe(1);

		const headerNavbar = page.getByRole("banner").getByRole("navigation");
		await expect(headerNavbar).toBeVisible();
	});

	test("navbar should have links to all pages", async ({ page }) => {
		expect(page.url()).toBe("http://localhost:3000/");
		const navbar = page.getByRole("banner").getByRole("navigation");

		for (const { path, label } of pages) {
			await Promise.all([
				page.waitForURL(`http://localhost:3000${path}`),
				navbar.getByRole("link", { name: label }).click()
			]);

			const activeLink = page.locator(`a[href$="${path}"][aria-current=page]`);
			expect(await activeLink.count()).toBeGreaterThanOrEqual(1);
		}
	});
});
