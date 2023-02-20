import type { Data } from "~/models/Data";
import data from "../data/data.json";

const mockDataHandler: typeof import("~/server/api/data.get").default =
	defineEventHandler((): Promise<Data> => {
		return new Promise((resolve) => setTimeout(() => resolve(data), 500));
	});

export default mockDataHandler;
