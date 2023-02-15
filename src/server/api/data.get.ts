import { Data } from "~/models/Data";

export default defineEventHandler((): Promise<Data> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				datetime: new Date().toISOString()
			});
		}, 2000);
	});
});
