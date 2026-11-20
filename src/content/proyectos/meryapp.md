---
title: 'MeryApp'
tagline: 'Agente de voz para Android pensado para personas ciegas: hablas en lenguaje natural y Mery usa las funciones del teléfono para cumplir la tarea.'
description: 'MeryApp: agente móvil de voz basado en LLM con invocación de funciones, para mejorar la usabilidad de Android en personas ciegas. Proyecto de tesis.'
pubDate: '2026-08-31'
updatedDate: '2026-11-18'
heroImage: '../../assets/proyectos/mery-arquitectura.jpg'
heroAlt: 'Arquitectura de Mery: entrada de voz, memoria de contexto, bucle del agente, conexión LLM y registro de herramientas'
category: 'movil'
org: 'Proyecto de tesis · UNSM'
status: 'En desarrollo · proyecto de tesis'
role: 'Autor e investigador principal. Asesor: Ing. Dr. Miguel Ángel Valles Coral.'
stack: ['Flutter', 'Dart', 'Android', 'LLM', 'Function calling', 'STT / TTS', 'Python']
featured: true
order: 4
metrics:
  - { value: '30', label: 'participantes ciegos en la evaluación' }
  - { value: '2', label: 'condiciones: TalkBack vs TalkBack + Mery' }
gallery:
  - { src: '../../assets/proyectos/mery-tools.jpg', alt: 'Selección y composición de herramientas en Mery', caption: 'Pocas herramientas reutilizables se combinan para cumplir tareas diversas: «Llama a Ana» = buscar contacto + iniciar llamada.' }
---

## La idea

Los lectores de pantalla como **TalkBack** obligan a recorrer la interfaz elemento por elemento. Hay botones que no reciben foco, estados que solo se comunican con color y apps que organizan sus menús de forma distinta. Cada tarea cuesta más pasos, más tiempo y más esfuerzo mental.

**Mery** busca acercarse a lo que hacen agentes como Manus, pero en el celular y para personas ciegas. El usuario dice lo que quiere («llama a Ana», «léeme el último mensaje de WhatsApp») y el agente **traduce la petición a invocaciones de funciones** del dispositivo, sin navegar la interfaz paso a paso.

## Cómo funciona

- **Entrada y salida de voz** (STT / TTS) con un estado de conversación compartido.
- **Bucle del agente** (`MobileAgent`) con **memoria de contexto**.
- **Cliente LLM** configurable desde la app: proveedor y clave se eligen en ajustes.
- **Registro de herramientas** (`ToolRegistry`) con funciones del sistema y de WhatsApp. El modelo elige la herramienta y sus argumentos, y la app la ejecuta.

## Investigación

Es mi **proyecto de tesis**: *Usabilidad de aplicaciones móviles Android para personas ciegas mediante un agente de voz basado en LLM con invocación de funciones*. La evaluación tiene dos etapas:

1. **Prueba funcional controlada**: selección correcta de funciones, generación de argumentos, ejecución de la tarea y latencia.
2. **Diseño de medidas repetidas** con **30 personas ciegas** usuarias de Android y TalkBack, vinculadas a la OMAPED de Moyobamba. Se mide la tasa de tareas completadas, el tiempo y la carga percibida con **SEQ** y **Raw NASA-TLX**.
