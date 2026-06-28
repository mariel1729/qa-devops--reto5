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

## Pruebas de performance, accesibilidad e IA
Para completar el reto de calidad avanzada, puedes usar estos recursos prácticos:
- [performance.md](performance.md): guía para evaluar rendimiento con Lighthouse y WebPageTest.
- [accessibility.md](accessibility.md): checklist básica de accesibilidad y herramientas recomendadas.
- [ai-analysis.md](ai-analysis.md): matriz de pruebas para un asistente de IA y sección de uso responsable de IA.
- [index.html](index.html): ejemplo simple de la tienda QA Store para probar accesibilidad y rendimiento.
- [docs/test-plan.md](docs/test-plan.md): quality gates, criterios de aceptación y evidencia requerida.
- [performance/k6-api-smoke.js](performance/k6-api-smoke.js): script básico de K6 para validar una API pública.
- [performance/jmeter/qa-store-load-test.jmx](performance/jmeter/qa-store-load-test.jmx): escenario de JMeter con usuarios virtuales y aserciones básicas.

### Sugerencia de ejecución
1. Abrir [index.html](index.html) en un navegador.
2. Ejecutar Lighthouse para obtener métricas de rendimiento y accesibilidad.
3. Ejecutar `k6 run performance/k6-api-smoke.js` para validar la carga y los thresholds.
4. Guardar los resultados y resumirlos con la guía de [ai-analysis.md](ai-analysis.md).

## Resumen para portafolio QA
Puedes usar [portfolio-summary.md](portfolio-summary.md) como texto base para presentar el reto en tu portafolio o en una entrevista técnica.
