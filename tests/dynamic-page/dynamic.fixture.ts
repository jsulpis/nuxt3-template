import { test } from "@playwright/test";
import mockData from "../../__mocks__/data/data.json";
import type { Data } from "~/models/Data";

type Fixtures = {
	data: Data;
};

export default test.extend<Fixtures>({
	data: mockData
});
