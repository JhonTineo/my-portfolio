import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const proyectos = await getCollection('proyectos', ({ data }) => !data.draft);
	const logros = await getCollection('logros', ({ data }) => !data.draft);
	const items = [
		...proyectos.map((p) => ({
			title: p.data.title,
			description: p.data.tagline,
			pubDate: p.data.pubDate,
			link: `/proyectos/${p.id}/`,
		})),
		...logros.map((l) => ({
			title: l.data.title,
			description: l.data.description,
			pubDate: l.data.date,
			link: `/logros/${l.id}/`,
		})),
	].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

	return rss({ title: SITE_TITLE, description: SITE_DESCRIPTION, site: context.site, items });
}
