import React from 'react';
import './ConfigForm.css';

const ConfigForm = ({ config, onConfigChange, onClose }) => {
  const handleChange = (field, value) => {
    onConfigChange({
      ...config,
      [field]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="config-overlay">
      <div className="config-form">
        <h2>Configuración</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="sensibilidad">
              Sensibilidad (mg/dL por UI):
              <span className="help-text">¿Cuánto baja tu glicemia por cada unidad de insulina?</span>
            </label>
            <input
              type="number"
              id="sensibilidad"
              value={config.sensibilidad || ''}
              onChange={(e) => handleChange('sensibilidad', parseFloat(e.target.value) || 0)}
              min="1"
              max="200"
              step="1"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="ratio">
              Ratio (gramos CHO por UI):
              <span className="help-text">¿Cuántos gramos de carbohidratos cubre 1 unidad de insulina?</span>
            </label>
            <input
              type="number"
              id="ratio"
              value={config.ratio || ''}
              onChange={(e) => handleChange('ratio', parseFloat(e.target.value) || 0)}
              min="1"
              max="50"
              step="0.5"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="glicemiaObjetivo">
              Glicemia Objetivo (mg/dL):
              <span className="help-text">Tu meta de glicemia deseada</span>
            </label>
            <input
              type="number"
              id="glicemiaObjetivo"
              value={config.glicemiaObjetivo || ''}
              onChange={(e) => handleChange('glicemiaObjetivo', parseFloat(e.target.value) || 0)}
              min="70"
              max="250"
              step="1"
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary">
              Guardar Configuración
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfigForm;
