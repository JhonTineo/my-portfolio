---
title: 'Blockcerts API'
tagline: 'Servicio que emite certificados académicos verificables con blockchain para SIFC: un certificado por alumno, una raíz de Merkle por lote y una sola transacción.'
description: 'API de certificados Blockcerts para SIFC (UNSM): JSON-LD verificable, árboles de Merkle y anclaje en Bitcoin Testnet.'
pubDate: '2026-10-22'
updatedDate: '2026-11-19'
heroImage: '../../assets/proyectos/blockcerts-cover.jpg'
heroAlt: 'Diagrama del flujo completo SIFC + Blockcerts: preparación con cert-tools y emisión con cert-issuer'
category: 'web'
org: 'Unidad de Formación Continua · UNSM'
status: 'En desarrollo · integración con SIFC'
role: 'Autor: diseño de la API, cola de emisión y adaptadores blockchain.'
stack: ['Python', 'FastAPI', 'Blockcerts', 'Bitcoin Testnet', 'SQLite', 'Docker']
order: 3
metrics:
  - { value: '1 tx', label: 'por lote de certificados' }
  - { value: '3', label: 'modos: prepare · mockchain · testnet' }
gallery:
  - { src: '../../assets/proyectos/blockcerts-flujo.jpg', alt: 'Flujo completo de emisión de certificados', caption: 'Flujo completo: SIFC solicita, cert-tools prepara y cert-issuer firma y ancla la raíz de Merkle.' }
---

## Por qué blockchain

Un PDF se puede falsificar. Un certificado **Blockcerts** es un documento JSON-LD cuyo *hash* queda anclado en una blockchain pública: cualquiera puede comprobar que lo emitió la UNSM y que no fue alterado, sin depender de que la universidad mantenga un servidor en línea.

## Qué hace

- **SIFC** valida que el alumno aprobó y envía los datos. La API **no consulta** la base académica.
- Prepara cada certificado con `cert-tools` y lo normaliza. Después calcula los *hashes* y construye un **árbol de Merkle** por sección.
- Emite **un certificado por alumno** con **una sola transacción** para todo el lote.
- Tiene un **worker con cola persistente**, idempotencia por `request_id` y recuperación tras reinicios.
- Ofrece tres modos: `prepare` (sin emitir), `mockchain` (flujo completo sin gastar fondos) y `bitcoin_testnet` (espera confirmaciones reales).
- Endpoints autenticados con `X-API-Key`, migraciones SQL automáticas y despliegue con **Docker**.
