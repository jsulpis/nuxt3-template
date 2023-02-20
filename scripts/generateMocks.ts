import * as fs from "fs";
import { $fetch } from "ofetch";
import { Data } from "~/models/Data";

fetchData().then(writeToDisk);

function fetchData() {
	return $fetch<Data>("http://localhost:3000/api/data");
}

function writeToDisk(data: Data) {
	fs.writeFile(`./__mocks__/data/data.json`, JSON.stringify(data), (err) => {
		if (err) console.error(err);
		else {
			logSuccess("API response for /api/data stored in data.json");
		}
	});
}

function logSuccess(message: string) {
	console.log("\x1b[32m%s\x1b[0m", "✔ " + message);
}
