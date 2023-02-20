import { defineEventHandler } from "h3";
import mockDataHandler from "./handlers/data.mock";

export default defineEventHandler((event) => {
	switch (event.node.req.url?.split("?")[0]) {
		case "/api/data":
			return mockDataHandler(event);
	}
});
