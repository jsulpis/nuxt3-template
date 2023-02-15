const ONE_DAY = 60 * 60 * 24;
const ONE_MONTH = 30 * ONE_DAY;

const STATIC_CACHE = `max-age=${ONE_DAY}, s-maxage=${ONE_MONTH}`;
const DYNAMIC_CACHE = `s-maxage=${ONE_DAY}, stale-while-revalidate=${ONE_MONTH}`;

function isDynamicRoute(url?: string) {
	return ["/api", "/dynamic-page", "/page-dynamique"].some((path) => url?.includes(path));
}

export default defineEventHandler((event) => {
	const cacheStrategy = isDynamicRoute(event.node.req.url) ? DYNAMIC_CACHE : STATIC_CACHE;
	setHeader(event, "Cache-Control", cacheStrategy);
});
