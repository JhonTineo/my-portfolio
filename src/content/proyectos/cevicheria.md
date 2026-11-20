---
title: 'Cevichería SaaS'
tagline: 'Sistema de gestión para restaurantes con seis roles (master, administrador, gerente, cajero, mozo y cocinero), app móvil y despliegue propio en VPS.'
description: 'Cevichería: plataforma SaaS de gestión de restaurantes con API Spring Boot, paneles web por rol y app Flutter, desplegada en un VPS propio.'
pubDate: '2026-06-29'
updatedDate: '2026-09-19'
heroImage: '../../assets/proyectos/cevicheria.jpeg'
heroAlt: 'Panel de gestión de empresas y sucursales de la Cevichería'
category: 'web'
status: 'Desplegado en VPS'
role: 'Paneles web por rol, aportes al backend y a la app, y despliegue en el VPS. Trabajo en equipo.'
stack: ['Java 17', 'Spring Boot', 'JWT', 'MySQL', 'PHP', 'Flutter', 'Linux', 'VPS']
order: 6
metrics:
  - { value: '6', label: 'roles con permisos configurables' }
  - { value: '3', label: 'capas: API, web y móvil' }
---

## Qué es

Una plataforma **multiempresa (SaaS)** para cevicherías y restaurantes: empresas, sucursales, usuarios, carta, pedidos, cocina y caja. El rol **MASTER** opera la plataforma y cada **Administrador** decide qué acciones habilita a su gerente, cajero, mozo y cocinero.

## Cómo está construido

- **API REST en Spring Boot (Java 17)** con un modelo de autorización en capas: *rol fijo → acciones permitidas → acciones marcadas al usuario → permisos técnicos → `@PreAuthorize`*. Cada petición lleva el JWT del usuario y un token del cliente técnico.
- **Paneles web por rol** (administrador, gerente, cajero, mozo, cocinero y master).
- **App móvil en Flutter** para la operación en sala.
- **Despliegue en mi VPS**: compilación del `.jar`, servicio en Linux, base MySQL y *frontend* servido por el mismo servidor.
