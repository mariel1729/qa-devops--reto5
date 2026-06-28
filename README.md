# QA DevOps AI Challenge

## Objetivo del proyecto
Este repositorio acompaña el reto de calidad avanzada para una tienda en línea sencilla llamada QA Store. El objetivo es demostrar un flujo profesional de control de versiones, automatización de validaciones y documentación de evidencia para QA.

## Herramientas utilizadas
- Git y GitHub para control de versiones y colaboración
- GitHub Actions para automatización de CI
- Node.js con pruebas automatizadas con node:test
- Markdown para documentación y evidencia

## Estructura del proyecto
- `src/`: lógica de negocio básica del catálogo y carrito de compra
- `tests/`: pruebas automatizadas
- `.github/workflows/`: flujos de CI

## Cómo ejecutar las pruebas
1. Instala dependencias: `npm install`
2. Ejecuta las pruebas: `npm test`

## Calidad esperada
El flujo de CI valida que los cambios cumplan reglas mínimas de calidad antes de integrarse a la rama principal.

## GitHub Actions y evidencias
El workflow QA CI Pipeline se ejecuta en cada Pull Request hacia main y también puede lanzarse manualmente. Incluye:
- checkout del repositorio
- instalación de dependencias
- ejecución de pruebas automatizadas
- generación de un reporte de ejecución en la carpeta reports
- publicación de artefactos para revisión posterior
