import React from 'react';
import './ResultModal.css';

const ResultModal = ({ resultado, config, onClose, onNewCalculation }) => {
  return (
    <div className="result-modal-overlay">
      <div className="result-modal">
        <div className="result-header">
          <h2>Resultado del Cálculo</h2>
          <button className="close-button" onClick={onClose} aria-label="Cerrar">
            ✕
          </button>
        </div>

        <div className="result-content">
          <div className="total-result-main">
            <span className="total-label">Total a inyectar:</span>
            <span className="total-value">{resultado.insulinaTotal} UI</span>
          </div>

          <div className="result-breakdown">
            <h3>Desglose del cálculo:</h3>
            <div className="breakdown-item">
              <span className="breakdown-label">Por carbohidratos:</span>
              <span className="breakdown-value">{resultado.insulinaPorCarbs} UI</span>
            </div>
            <div className="breakdown-item">
              <span className="breakdown-label">Por corrección:</span>
              <span className="breakdown-value">{resultado.insulinaCorreccion} UI</span>
            </div>
          </div>

          <div className="calculation-details">
            <h3>📊 Detalles del cálculo:</h3>
            <div className="detail-item">
              <span className="detail-formula">Carbohidratos:</span>
              <span className="detail-calculation">
                {resultado.carbohidratos}g / {config.ratio} = {resultado.insulinaPorCarbs} UI
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-formula">Corrección:</span>
              <span className="detail-calculation">
                ({resultado.glicemiaActual} - {config.glicemiaObjetivo}) / {config.sensibilidad} = {resultado.insulinaCorreccion} UI
              </span>
            </div>
          </div>

          {resultado.insulinaTotal <= 0 && (
            <div className="warning">
              ⚠️ No se requiere insulina adicional
            </div>
          )}

          <div className="input-summary">
            <h3>Datos ingresados:</h3>
            <div className="summary-grid">
              <div className="summary-item">
                <span className="summary-label">Carbohidratos:</span>
                <span className="summary-value">{resultado.carbohidratos}g</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Glicemia actual:</span>
                <span className="summary-value">{resultado.glicemiaActual} mg/dL</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Objetivo:</span>
                <span className="summary-value">{config.glicemiaObjetivo} mg/dL</span>
              </div>
            </div>
          </div>
        </div>

        <div className="result-actions">
          <button className="btn-new-calculation" onClick={onNewCalculation}>
            Nuevo Cálculo
          </button>
          <button className="btn-close-result" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;
