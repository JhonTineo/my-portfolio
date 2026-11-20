// Datos globales del sitio.

export const SITE_TITLE = 'Jhon Dalton Huaman · Portafolio';
export const SITE_DESCRIPTION =
	'Ingeniero de Sistemas en formación (UNSM, Tarapoto). Construyo software con IA aplicada a problemas reales: Yumi, SIFC, MeryApp y BI del balance hídrico de EMAPA San Martín.';

export const AUTHOR = {
	name: 'Jhon Dalton Huaman Quintana',
	shortName: 'Jhon Dalton',
	role: 'Ingeniería de Sistemas e Informática · UNSM',
	location: 'Tarapoto, San Martín · Perú',
	email: 'jd.huaman@unsm.edu.pe',
	github: 'https://github.com/JhonTineo',
	orcid: 'https://orcid.org/0009-0003-3062-1692',
};

export const NAV = [
	{ href: '/', label: 'Inicio' },
	{ href: '/proyectos', label: 'Proyectos' },
	{ href: '/logros', label: 'Logros' },
	{ href: '/sobre-mi', label: 'Sobre mí' },
];

export const CATEGORIES: Record<string, string> = {
	ia: 'Inteligencia artificial',
	web: 'Plataformas web',
	datos: 'Datos y BI',
	movil: 'Móvil',
	infra: 'Infraestructura',
};

export const KINDS: Record<string, string> = {
	concurso: 'Concurso',
	reconocimiento: 'Reconocimiento',
	feria: 'Feria / exposición',
	formacion: 'Formación',
	servicio: 'Experiencia técnica',
	comunidad: 'Más allá del código',
};
