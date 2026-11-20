---
title: 'BI · Balance hídrico EMAPA'
tagline: 'Plataforma de inteligencia de negocios para saber cuánta agua no se factura, dónde se pierde y qué atacar primero. Tres servicios: simulador, ETL y tablero.'
description: 'Proyecto de BI del balance hídrico (IWA/AWWA) de EMAPA San Martín: simulador de fuentes de datos, servicio ETL con dbt y tablero en Next.js.'
pubDate: '2026-10-07'
updatedDate: '2026-11-18'
heroImage: '../../assets/proyectos/bi-perdidas.jpg'
heroAlt: 'Tablero del balance hídrico: diagrama del recorrido del agua producida, facturada, pérdida comercial y fugas'
category: 'datos'
org: 'EMAPA San Martín'
status: 'Prototipo funcional · conectado a SYSCO'
role: 'Desarrollo del simulador y del tablero, y aportes al servicio ETL. Trabajo en equipo.'
stack: ['Python', 'FastAPI', 'PostgreSQL', 'dbt', 'Next.js', 'React', 'Recharts', 'SSE']
featured: true
order: 5
demo: 'https://balance.hidrico.169.58.71.78.nip.io/'
metrics:
  - { value: '35.2%', label: 'agua no facturada (2025) que hace visible' }
  - { value: '3', label: 'servicios integrados' }
  - { value: '15 min', label: 'resolución de lecturas simuladas' }
gallery:
  - { src: '../../assets/proyectos/bi-resumen.jpg', alt: 'Resumen del tablero con agua no facturada', caption: 'Resumen: reparto de cada 100 litros producidos, agua no facturada mes a mes y focos de pérdida.' }
  - { src: '../../assets/proyectos/bi-captacion.jpg', alt: 'Vista de captación de Tarapoto', caption: 'Captación: caudal frente a capacidad, por fuente y por línea de conducción.' }
  - { src: '../../assets/proyectos/bh-simulador.jpg', alt: 'Animación en vivo de la captación Cachiyacu del simulador', caption: 'bh-simulator: la captación Cachiyacu animada en vivo con lluvia real, eventos y lecturas de sensores.' }
---

## El reto

El **balance hídrico** (metodología IWA/AWWA) responde a una pregunta clave para una empresa de agua: de todo lo que se produce, **¿cuánto se factura y cuánto se pierde?** En EMAPA San Martín vivía en un Excel. Además, varias fuentes de datos (sensores de caudal, presión y turbiedad) todavía no existen en campo.

## Tres piezas

**1. `bh-simulator` · el dato que falta.** Simula en vivo la captación **Cachiyacu** (Tarapoto). Parte de la **lluvia real** de Open-Meteo y modela el caudal, el nivel y la turbiedad del río; después, la reja, la cámara y la línea de conducción, con eventos programados y aleatorios. Emite lecturas cada 15 minutos con **error de medición** y las transmite por *Server-Sent Events* a una animación web. Cada parámetro indica si es dato documentado (`DOC`) o supuesto por validar (`SUP`).

**2. `bi_agua` · el servicio ETL.** FastAPI + PostgreSQL. Su motor de cargas planifica, extrae (API de SYSCO y Excel) y guarda en `raw`; luego **dbt** transforma `raw → stg → dw` en un **modelo estrella** y publica. Usa migraciones con Alembic, pruebas de calidad y autenticación con el token de SYSCO.

**3. `dashboard-emapa` · el tablero.** Next.js 16 + React 19 + Recharts. Tiene vistas de resumen, captación, producción, distribución, pérdidas (recorrido del agua, índice de fugas ILI y simulador de meta) y facturación. Las tarjetas marcadas **SYSCO** leen datos en vivo del servicio ETL.

## Un hallazgo

Al replicar las fórmulas del Excel apareció un error en la hoja de producción de enero. Con la corrección, el **agua no facturada pasa de 29.5 % a 35.2 %**, un dato que cambia las prioridades.
