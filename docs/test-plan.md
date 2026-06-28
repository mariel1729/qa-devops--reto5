# Plan de pruebas y quality gates

## Quality Gates definidos

Los cambios entrantes solo se consideran aptos para integrar cuando cumplen los siguientes criterios mínimos:

- Todas las pruebas automatizadas deben pasar en local y en CI.
- El porcentaje de errores en pruebas de performance debe ser menor al 1%.
- El tiempo de respuesta promedio debe estar dentro del umbral definido de 600 ms para la prueba base de K6.
- No deben existir secretos expuestos en el repositorio ni en los artefactos generados.
- El Pull Request debe incluir evidencia adjunta, como reportes de pruebas y artefactos de ejecución.

## Criterios de aceptación

1. Validación funcional
   - `npm test` debe completarse con 0 fallos.
   - La cobertura mínima para la lógica base se considera aceptable si no hay regresiones en los escenarios principales.

2. Validación de performance
   - La prueba de K6 debe completar la ejecución sin errores críticos.
   - El umbral de `http_req_failed` debe ser inferior al 1%.
   - El percentil 95 de duración debe mantenerse por debajo de 600 ms.

3. Validación de seguridad
   - No se deben incluir tokens, claves ni secretos en archivos de código o reportes.
   - Se recomienda revisar el historial y el contenido del repositorio antes de abrir el PR.

4. Evidencia y trazabilidad
   - Deben guardarse artefactos en la carpeta `reports/`.
   - Se debe adjuntar el comando ejecutado, el resultado de consola y una conclusión final al PR.

## Evidencia recomendada

- `reports/test-report.txt`: resultado de pruebas automatizadas.
- `reports/k6-report.txt`: resultado resumido de la prueba de K6.
- `performance/jmeter/qa-store-load-test.jmx`: escenario base para JMeter.
