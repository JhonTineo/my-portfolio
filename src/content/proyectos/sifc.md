---
title: 'SIFC · Aula virtual UNSM'
tagline: 'Sistema Integrado de Formación Continua: portal, inscripciones, aula virtual, evaluaciones y certificados para la Unidad de Formación Continua de la UNSM.'
description: 'SIFC: plataforma académica y aula virtual de la Unidad de Formación Continua de la Universidad Nacional de San Martín, en fase de pruebas y despliegue en servidores de la UNSM.'
pubDate: '2026-04-22'
updatedDate: '2026-11-17'
heroImage: '../../assets/proyectos/sifc-portada.jpg'
heroAlt: 'Estudiantes y docente trabajando juntos frente a una laptop'
category: 'web'
org: 'Unidad de Formación Continua · UNSM'
status: 'En pruebas · desplegándose en servidores UNSM'
role: 'Desarrollador del equipo: autenticación, perfiles, aula virtual y certificados.'
stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind', 'shadcn/ui', 'Docker']
featured: true
order: 2
demo: 'https://sifc.solanoafk.com'
metrics:
  - { value: '11', label: 'módulos funcionales' }
  - { value: 'MVC', label: 'arquitectura por módulo' }
  - { value: 'QR', label: 'verificación pública de certificados' }
gallery:
  - { src: '../../assets/proyectos/sifc-certificado.jpg', alt: 'Vista previa de un certificado generado por SIFC con código QR', caption: 'Certificado generado por SIFC (datos de ejemplo), con código QR para verificación pública.' }
---

## Contexto

La Unidad de Formación Continua de la **Universidad Nacional de San Martín** gestionaba cursos, inscripciones y certificados con procesos manuales y herramientas separadas. **SIFC** los reúne en una sola plataforma. Ya está **en fase de pruebas y en despliegue dentro de los servidores de la UNSM**.

## Qué incluye

- **Portal institucional** y **oferta académica**: cursos, programas, categorías y secciones.
- **Solicitudes e inscripciones**, con exportación a Excel.
- **Aula virtual**: contenido, tareas, exámenes, horarios y calificaciones.
- **Certificados**: catálogo, emisión y **verificación pública por QR**.
- **Usuarios y permisos**: autorregistro, acceso con correo o Google, selección de perfil por sesión y paneles por rol.
- Docencia, eventos y métricas.

## Cómo está construido

Next.js App Router con React y TypeScript; Supabase para autenticación, Postgres y Storage; Resend para los correos. El código sigue una **organización MVC por módulo**: los repositorios encapsulan la persistencia, los controladores validan y coordinan, y las vistas no tocan la base de datos. Hay verificaciones automáticas de tipos, *lint*, límites de arquitectura y pruebas.

## Lo que viene

SIFC usará **[Blockcerts API](/proyectos/blockcerts-api/)** para emitir certificados anclados en blockchain y verificables por cualquiera.
