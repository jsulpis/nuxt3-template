import test from "./dynamic.fixture";
import { expect } from "@playwright/test";

test.describe("Dynamic page", () => {
	test("should display data from the API", async ({ page, data }) => {
		await page.goto("/dynamic-page");

		await expect(page.getByRole("main")).toContainText(data.datetime); // <- this is why we have mocks
	});
});
