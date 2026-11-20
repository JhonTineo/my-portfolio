---
title: 'Asistencia con DNI'
tagline: 'Registro de asistencia a reuniones desde el celular: se lee el DNI con la cámara, se confirman los nombres y el servidor evita duplicados.'
description: 'Aplicación web en Django para registrar asistencia leyendo el DNI peruano con la cámara (códigos + OCR en el navegador), desplegada con Docker y HTTPS en VPS.'
pubDate: '2026-10-28'
heroImage: '../../assets/proyectos/lector-dni-cover.jpg'
heroAlt: 'Pantalla de registro de asistencia con lectura de DNI por cámara'
category: 'web'
status: 'Desplegado en VPS con HTTPS'
role: 'Desarrollo y despliegue en el VPS (Docker, MySQL y Caddy). Trabajo en equipo.'
stack: ['Python', 'Django 5.2', 'MySQL', 'ZXing', 'Tesseract.js', 'Docker', 'Caddy']
order: 7
gallery:
  - { src: '../../assets/proyectos/lector-dni.jpg', alt: 'Vista de registro de asistencia', caption: 'El operador elige la reunión, lee el DNI y confirma los datos antes de guardar.' }
---

## Qué resuelve

Pasar lista con papel es lento y propenso a errores. Aquí, un operador inicia sesión, elige la reunión y **lee el DNI con la cámara trasera del celular**. El sistema propone DNI, nombres y apellidos, el operador confirma y el **servidor registra la hora**. Si la persona ya está registrada en esa reunión, la base de datos lo impide, aunque haya varios operadores a la vez.

## Detalles que importan

- Lectura de códigos con **ZXing** y **OCR en el navegador** con Tesseract.js. **No se guardan fotos** ni se envían imágenes a servicios externos.
- Autocompletado opcional de nombres con un proveedor externo, con el token **cifrado en la base** y configurable sin tocar el servidor.
- Exportación de asistentes a **CSV y Excel**.
- Producción con **Gunicorn + WhiteNoise**, contenedor **Docker**, **MySQL 8.4** y **Caddy** con HTTPS automático en mi VPS.
