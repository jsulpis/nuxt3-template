/**
 * - Scroll to the top when clicking on a link
 * - Keep the default behaviour (restore the scroll position) when navigating backward or forward
 */
export function useScrollRestoration() {
	if (!process.client) return;

	const { afterEach } = useRouter();
	const skipNavLink = document.querySelector<HTMLElement>("#skip-navigation-link");

	afterEach((from, to) => {
		const clickedOnALink = history.state.forward == undefined;
		if (to.path !== from.path && clickedOnALink) {
			skipNavLink?.focus();
		}
	});
}
