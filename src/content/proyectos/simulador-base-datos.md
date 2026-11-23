---
title: 'Simulador de BD en 3D / VR'
tagline: 'Una oficina en 3D (y en realidad virtual) donde ves —o haces tú mismo— cómo un motor de base de datos ejecuta una consulta SQL.'
description: 'Simulador educativo 3D/VR con React Three Fiber y WebXR que explica cómo un motor de base de datos ejecuta SELECT, JOIN, GROUP BY, DML, DDL, DCL y TCL.'
pubDate: '2026-11-19'
heroImage: '../../assets/proyectos/dbsim-cover.jpg'
heroAlt: 'Ilustración de una consulta SQL junto a archivadores que representan tablas'
category: 'web'
status: 'Fase 1 · en desarrollo'
role: 'Autor.'
stack: ['React', 'Three.js', 'React Three Fiber', 'WebXR', 'Zustand', 'GSAP']
order: 8
demo: 'https://database-simulator-nu.vercel.app/'
---

## La metáfora

Aprender bases de datos suele quedarse en la teoría. Aquí cada concepto es un objeto físico: el **disco** son los archivadores del fondo, una **tabla** es un archivador, una **página** es un cajón (el motor siempre lee el cajón completo) y una **fila** es una hoja. La **clave foránea** es un post-it con un hilo de color y el **resultado** son fotocopias, porque los originales nunca se modifican.

## Dos modos

- **Ver**: el motor ejecuta la consulta solo y avanzas paso a paso, como un `EXPLAIN` animado.
- **Practicar**: **tú eres el motor**. Caminas al archivador, abres el cajón, llevas las hojas a la mesa y ejecutas la consulta con clics. Cada acción se valida y, si te equivocas, te explica por qué. Además cuenta las páginas leídas del disco.

Cubre los cinco sublenguajes de SQL —**DQL, DML, DDL, DCL y TCL**— más casos prácticos, y funciona en PC, celular y visores **VR** (Meta Quest) gracias a WebXR.
