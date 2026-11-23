import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const link = z.object({ label: z.string(), url: z.string().url() });

const proyectos = defineCollection({
	loader: glob({ base: './src/content/proyectos', pattern: '**/[^_]*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			tagline: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image(),
			heroAlt: z.string().default(''),
			heroFit: z.enum(['cover', 'contain']).default('cover'),
			gallery: z
				.array(z.object({ src: image(), alt: z.string(), caption: z.string().optional() }))
				.default([]),
			category: z.enum(['ia', 'web', 'datos', 'movil', 'infra']),
			stack: z.array(z.string()).default([]),
			role: z.string().optional(),
			org: z.string().optional(),
			status: z.string(),
			metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
			links: z.array(link).default([]),
			demo: z.string().url().optional(),
			featured: z.boolean().default(false),
			order: z.number().default(99),
			draft: z.boolean().default(false),
		}),
});

const logros = defineCollection({
	loader: glob({ base: './src/content/logros', pattern: '**/[^_]*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.coerce.date(),
			dateLabel: z.string(),
			heroImage: image(),
			heroAlt: z.string().default(''),
			gallery: z
				.array(z.object({ src: image(), alt: z.string(), caption: z.string().optional() }))
				.default([]),
			kind: z.enum(['concurso', 'reconocimiento', 'feria', 'formacion', 'servicio', 'comunidad']),
			organizer: z.string().optional(),
			result: z.string().optional(),
			links: z.array(link).default([]),
			featured: z.boolean().default(false),
			draft: z.boolean().default(false),
		}),
});

export const collections = { proyectos, logros };
