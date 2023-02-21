import { RequestCookies } from "@edge-runtime/cookies";

export const config = {
	matcher: "/"
};

export default function middleware(request: Request) {
	const browserLanguage = request.headers.get("accept-language")?.split("-")?.[0];
	const cookieLocale = new RequestCookies(request.headers).get("i18n_redirected")?.value;
	const preferredLocale = cookieLocale || browserLanguage;

	if (preferredLocale === "fr") {
		return Response.redirect(new URL("/fr", request.url));
	}
}
