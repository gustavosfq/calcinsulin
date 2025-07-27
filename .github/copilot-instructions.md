# Copilot Instructions for Calculadora de Insulina

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
Esta es una aplicación web React responsiva para calcular dosis de insulina basada en:
- Sensibilidad (factor de corrección)
- Ratio (carbohidratos por unidad de insulina)
- Glicemia esperada (objetivo en mg/dL)
- Carbohidratos a consumir (gramos)
- Glicemia actual (mg/dL)

## Technical Guidelines
- Utiliza React con hooks (useState, useEffect)
- Almacena datos persistentes en localStorage
- Diseño responsivo optimizado para móviles
- Unidades: glicemia en mg/dL, carbohidratos en gramos, insulina en UI
- Validación solo para campos obligatorios faltantes
- Sin historial ni botón de reset

## Code Style
- Componentes funcionales con hooks
- CSS modules o styled-components para estilos
- Nombres de variables en español cuando sea apropiado
- Comentarios en español para lógica médica
