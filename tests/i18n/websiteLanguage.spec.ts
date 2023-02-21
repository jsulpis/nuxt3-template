import test, { expect } from "@playwright/test";

test.describe("Website language", () => {
	test("should be English by default", async ({ page }) => {
		await page.goto("/");
		await expect(page.getByRole("heading", { level: 1 })).toContainText(
			"Nuxt 3 template for public websites"
		);
	});

	test("should be French under the url /en", async ({ page }) => {
		await page.goto("/fr");
		await expect(page.getByRole("heading", { level: 1 })).toContainText(
			"Template Nuxt 3 pour sites publics"
		);
	});

	test("can be changed with a language switch in the footer", async ({ page }) => {
		await page.goto("/");
		const footer = page.getByRole("contentinfo");
		const title = page.getByRole("heading", { level: 1 });

		await expect(title).toContainText("Nuxt 3 template");

		await footer.getByRole("link", { name: "Français" }).click();
		await expect(title).toContainText("Template Nuxt 3");

		await footer.getByRole("link", { name: "English" }).click();
		await expect(title).toContainText("Nuxt 3 template");
	});
});
