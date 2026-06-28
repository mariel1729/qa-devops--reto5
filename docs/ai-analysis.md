# Matriz de pruebas para sistema de IA

## Escenario probado
Una tienda en línea ofrece un asistente virtual para responder preguntas de clientes sobre productos, envíos y devoluciones.

## Matriz de pruebas

| Caso | Prompt probado | Inputs utilizados | Respuesta obtenida | Relevancia | Coherencia | Posibles alucinaciones | Recomendaciones de mejora |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | "¿Cuánto cuesta el producto X y está disponible hoy?" | Nombre del producto, stock, precio base | El asistente respondió con precio aproximado y señaló que la disponibilidad dependía del inventario. | Alta | Alta | Se podría confundir el precio con una promoción pasada si no hay fuente actualizada. | Añadir contexto en tiempo real y referencia a la fuente de inventario. |
| 2 | "¿Cuánto tarda el envío a Madrid?" | Código postal, país, método de envío | Respondió con un rango de tiempo razonable y mencionó excepciones por festivos. | Alta | Alta | Podría no reflejar gastos de importación si el pedido es internacional. | Incorporar reglas de cobertura y tiempos reales por zona. |
| 3 | "¿Cuál es la política de devoluciones para un producto usado?" | Tipo de producto, estado del artículo, plazo de devolución | La respuesta fue coherente, pero generalizó la política sin aclarar condiciones específicas. | Media | Media | Puede omitir excepciones de productos sanitarios o personalizados. | Incluir una ruta de escalado a soporte humano para casos especiales. |
| 4 | "Compara el producto A con el producto B en precio y características" | Dos productos, ficha técnica, precio | El asistente resumió diferencias clave, aunque algunas comparaciones fueron incompletas. | Alta | Media | Pudo inferir características no confirmadas por la base de datos. | Validar la comparación contra una fuente estructurada y no solo el texto libre. |
| 5 | "Quiero saber si puedo devolver un pedido ya abierto y si me cobran gastos" | Estado del pedido, fecha de compra, método de pago | La respuesta fue útil pero no ofreció un enlace directo a la política exacta. | Alta | Alta | Puede confundir devoluciones parciales con devoluciones totales. | Añadir enlaces a la política y mensajes de seguimiento claros. |

## Observaciones de calidad

- El asistente responde con lenguaje claro y útil para preguntas frecuentes.
- La mayor fuente de riesgo es la respuesta cuando la consulta requiere información dinámica o específica del pedido.
- Se recomienda combinar el modelo con reglas de negocio y una base de conocimiento controlada.

## Uso responsable de IA

- Qué se generó con IA: se usaron propuestas iniciales para redactar la matriz, resumir hallazgos y estructurar la documentación.
- Qué fue revisado manualmente: todos los criterios, métricas y recomendaciones fueron revisados para que coincidieran con el contexto del reto y con las buenas prácticas de QA.
- Qué ajustes se realizaron: se normalizaron los ejemplos a un escenario realista de tienda online, se añadieron criterios de evaluación y se adaptó el lenguaje al tono del proyecto.
- Qué limitaciones se encontraron: la IA puede generar respuestas plausibles pero no siempre verificadas; por eso se recomienda revisar toda propuesta antes de integrarla en un proceso de calidad o en un PR.
