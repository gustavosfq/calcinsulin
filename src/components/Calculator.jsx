import React, { useState } from 'react';
import ResultModal from './ResultModal';
import './Calculator.css';

const Calculator = ({ config, onConfigClick }) => {
  const [carbohidratos, setCarbohidratos] = useState('');
  const [glicemiaActual, setGlicemiaActual] = useState('');
  const [resultado, setResultado] = useState(null);
  const [showResultModal, setShowResultModal] = useState(false);

  const calcularInsulina = () => {
    if (!carbohidratos || !glicemiaActual) {
      alert('Por favor, completa todos los campos');
      return;
    }

    const carbs = parseFloat(carbohidratos);
    const glicemia = parseFloat(glicemiaActual);

    // Insulina por carbohidratos = carbohidratos / ratio
    const insulinaPorCarbs = carbs / config.ratio;

    // Insulina de corrección = (glicemia actual - glicemia objetivo) / sensibilidad
    const insulinaCorreccion = (glicemia - config.glicemiaObjetivo) / config.sensibilidad;

    // Total de insulina
    const insulinaTotal = insulinaPorCarbs + insulinaCorreccion;

    // Redondear a 0.5 unidades (típico en plumas de insulina)
    const insulinaRedondeada = Math.round(insulinaTotal * 2) / 2;

    setResultado({
      insulinaPorCarbs: Math.round(insulinaPorCarbs * 2) / 2,
      insulinaCorreccion: Math.round(insulinaCorreccion * 2) / 2,
      insulinaTotal: insulinaRedondeada,
      carbohidratos: carbs,
      glicemiaActual: glicemia
    });
    
    setShowResultModal(true);
  };

  const limpiarFormulario = () => {
    setCarbohidratos('');
    setGlicemiaActual('');
    setResultado(null);
    setShowResultModal(false);
  };

  const cerrarResultado = () => {
    setShowResultModal(false);
  };

  return (
    <div className="calculator">
      <div className="calculator-header">
        <h1>Calculadora de Insulina</h1>
        <button 
          className="config-button"
          onClick={onConfigClick}
          title="Configuración"
        >
          ⚙️
        </button>
      </div>

      <div className="config-summary">
        <div className="config-item">
          <span className="label">Sensibilidad:</span>
          <span className="value">{config.sensibilidad} mg/dL/UI</span>
        </div>
        <div className="config-item">
          <span className="label">Ratio:</span>
          <span className="value">{config.ratio} g CHO/UI</span>
        </div>
        <div className="config-item">
          <span className="label">Objetivo:</span>
          <span className="value">{config.glicemiaObjetivo} mg/dL</span>
        </div>
      </div>

      <div className="input-section">
        <div className="input-group">
          <label htmlFor="carbohidratos">
            Carbohidratos a consumir (gramos):
          </label>
          <input
            type="number"
            id="carbohidratos"
            value={carbohidratos}
            onChange={(e) => setCarbohidratos(e.target.value)}
            min="0"
            max="500"
            step="1"
            placeholder="Ej: 45"
          />
        </div>

        <div className="input-group">
          <label htmlFor="glicemia">
            Glicemia actual (mg/dL):
          </label>
          <input
            type="number"
            id="glicemia"
            value={glicemiaActual}
            onChange={(e) => setGlicemiaActual(e.target.value)}
            min="40"
            max="500"
            step="1"
            placeholder="Ej: 180"
          />
        </div>

        <div className="button-group">
          <button 
            className="btn-calculate"
            onClick={calcularInsulina}
            disabled={!carbohidratos || !glicemiaActual}
          >
            Calcular Insulina
          </button>
        </div>
      </div>

      {showResultModal && resultado && (
        <ResultModal
          resultado={resultado}
          config={config}
          onClose={cerrarResultado}
          onNewCalculation={limpiarFormulario}
        />
      )}
    </div>
  );
};

export default Calculator;
