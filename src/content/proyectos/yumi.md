---
title: 'Yumi'
tagline: 'Asistente de IA que investiga, fundamenta con la normativa SUNASS y redacta la atención de reclamos comerciales de EMAPA San Martín. Hoy integrado en SYSCO.'
description: 'Yumi: asistente de inteligencia artificial para la atención de reclamos de EMAPA San Martín, con RAG sobre normativa SUNASS, integrado en el sistema comercial SYSCO.'
pubDate: '2026-06-05'
updatedDate: '2026-11-19'
heroImage: '../../assets/proyectos/yumi-flyer.png'
heroAlt: 'Flyer de Yumi con su identidad visual y un caso de ejemplo de análisis de un cargo duplicado'
heroFit: 'contain'
category: 'ia'
org: 'EMAPA San Martín · SYSCO'
status: 'En producción dentro de SYSCO'
role: 'Desarrollador principal (frontend, backend de agentes y RAG) e integración con SYSCO. Equipo con Darick Herrera.'
stack: ['Python', 'FastAPI', 'LLM', 'RAG', 'Qdrant', 'Ollama', 'React', 'Angular', 'Docker']
featured: true
order: 1
demo: 'https://asistente-reclamos-emapa.vercel.app/'
metrics:
  - { value: '1.º', label: 'Datathon SUNASS 2026 · macrorregión Oriente' }
  - { value: '7', label: 'pasos del flujo de agentes' }
  - { value: '6', label: 'fuentes de SYSCO analizadas' }
  - { value: '160+', label: 'commits entre front y back' }
gallery:
  - { src: '../../assets/proyectos/yumi-atencion.jpg', alt: 'Interfaz de atención de reclamos de Yumi', caption: 'Vista de trabajo: evidencias de facturación e informe de atención asistido por IA.' }
  - { src: '../../assets/proyectos/yumi-tarjeta-lectura.jpg', alt: 'Análisis de la tarjeta de lecturas del medidor', caption: 'Análisis de un medio probatorio: datos de la tarjeta de lecturas, problemas detectados e interpretación de la IA.' }
  - { src: '../../assets/proyectos/yumi-lista.jpg', alt: 'Bandeja de reclamos con inspecciones realizadas', caption: 'Bandeja de reclamos con inspección realizada, lista para que Yumi los analice.' }
  - { src: '../../assets/proyectos/yumi-informe.jpg', alt: 'Borrador del informe de atención generado por Yumi', caption: 'Borrador del informe de atención: editable y exportable a Word.' }
  - { src: '../../assets/proyectos/yumi-normativa.jpg', alt: 'Consulta de artículos de la normativa SUNASS', caption: 'Fundamentación normativa: búsqueda semántica sobre el reglamento SUNASS.' }
  - { src: '../../assets/logros/yumi-implementacion-emapa.jpg', alt: 'Jhon Dalton explicando Yumi a un especialista de EMAPA San Martín', caption: 'Implementación con el personal de atención de reclamos de EMAPA San Martín.' }
  - { src: '../../assets/proyectos/yumi-arquitectura.jpg', alt: 'Diagrama de arquitectura de agentes para atención de reclamos', caption: 'Arquitectura de referencia: agentes, base vectorial normativa y modelos locales.' }
---

## El problema

EMAPA San Martín atiende a más de **215 mil habitantes en once localidades**. Para resolver un reclamo por consumo, un especialista debía saltar entre varias pantallas de **SYSCO** —el sistema comercial—: lecturas del medidor, récord de facturación, cortes y reaperturas, inspecciones internas y externas y saldos. Luego interpretar todo, buscar el artículo de la normativa SUNASS que aplica y redactar el informe, la propuesta de conciliación y la resolución. Trabajo repetitivo, lento y con riesgo de error.

## La solución

**Yumi** reúne los medios probatorios de cada caso y automatiza el procesamiento, el análisis y la redacción, **dejando siempre la decisión final al especialista**. Su flujo tiene siete pasos:

1. **Clasificación rápida** del reclamo por reglas (sin LLM).
2. **Objetivos de investigación** generados a partir del motivo.
3. **Análisis de cada medio probatorio**: preprocesamiento por reglas que detecta consumos atípicos, problemas de lectura o inconsistencias, más la interpretación del LLM.
4. **Fundamentación normativa** con RAG: recupera artículos del reglamento SUNASS desde **Qdrant** (embeddings `qwen3-embedding`).
5. **Conclusión** propuesta: evalúa objetivos frente a hallazgos (FUNDADO / INFUNDADO).
6. **Propuesta de conciliación**.
7. **Resolución** de primera instancia, editable y exportable a Word.

## Arquitectura

- **Backend de agentes** en Python + **FastAPI** con arquitectura hexagonal (puertos y adaptadores), respuestas síncronas y en *streaming* NDJSON.
- **Inferencia intercambiable por petición**: proveedores en la nube compatibles con la API de OpenAI (OpenRouter, Groq, Cerebras, Cloudflare) o modelos **locales con Ollama**.
- **Frontend** en React; luego reescrito como componente **Angular** dentro del microfrontend `mf-reclamos` de SYSCO.
- Servicios en **Docker** (Qdrant, Ollama y API) para instalación y mantenimiento sencillos.

## Impacto

- Nació en la **Datathon SUNASS 2026**, donde obtuvimos el **primer lugar macrorregional** y pasamos a la pasantía técnica con EMAPA San Martín.
- Gracias a la colaboración con **ZMC**, la empresa propietaria de SYSCO, Yumi quedó **integrado en el sistema comercial**. Con eso, el especialista lo usa desde su propio entorno de trabajo. SYSCO da soporte a empresas prestadoras de distintas provincias, lo que abre la puerta a llevar Yumi a otras EPS.
- **SEDAPAL** y **SEDAPAR** contactaron al equipo para evaluar implementarlo.
- Se entregó la documentación completa: análisis, requerimientos, casos de uso, arquitectura, despliegue, integración y manual de usuario.
