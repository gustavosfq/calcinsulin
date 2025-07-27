# Calculadora de Insulina

Una aplicación web responsiva para calcular dosis de insulina, optimizada para dispositivos móviles.

## Características

- **Cálculo preciso**: Calcula insulina basada en carbohidratos y corrección de glicemia
- **Responsive**: Optimizada para móviles y tablets
- **Datos persistentes**: Guarda configuración en localStorage
- **Fácil de usar**: Interfaz intuitiva y rápida

## Parámetros de Configuración

- **Sensibilidad**: Cuánto baja la glicemia por cada unidad de insulina (mg/dL por UI)
- **Ratio**: Cuántos gramos de carbohidratos cubre 1 unidad de insulina
- **Glicemia Objetivo**: Meta de glicemia deseada (mg/dL)

## Uso

1. **Primera vez**: Configura tus parámetros personales
2. **Cálculo diario**: 
   - Ingresa carbohidratos a consumir (gramos)
   - Ingresa glicemia actual (mg/dL)
   - Obtén la dosis recomendada

## Fórmula

```
Insulina Total = (Carbohidratos ÷ Ratio) + ((Glicemia Actual - Objetivo) ÷ Sensibilidad)
```

## Instalación

```bash
npm install
npm run dev
```

## Construcción

```bash
npm run build
```

## Importante

⚠️ **Esta aplicación es solo para fines informativos y educativos. Siempre consulta con tu médico antes de realizar cambios en tu tratamiento de diabetes.**+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
