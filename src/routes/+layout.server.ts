import type { LayoutServerLoad } from './$types';

export const load = (async ({ setHeaders }) => {
	setHeaders({
		'X-Robots-Tag': 'noindex, nofollow'
	});

	return {};
}) satisfies LayoutServerLoad;
