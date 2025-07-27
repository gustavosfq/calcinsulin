import { useState, useEffect } from 'react'
import Calculator from './components/Calculator'
import ConfigForm from './components/ConfigForm'
import { useLocalStorage } from './hooks/useLocalStorage'
import './App.css'

function App() {
  const [config, setConfig] = useLocalStorage('insulinConfig', {
    sensibilidad: null,
    ratio: null,
    glicemiaObjetivo: null
  });
  
  const [showConfig, setShowConfig] = useState(false);

  // Verificar si falta configuración al cargar
  useEffect(() => {
    const isConfigIncomplete = !config.sensibilidad || !config.ratio || !config.glicemiaObjetivo;
    if (isConfigIncomplete) {
      setShowConfig(true);
    }
  }, [config]);

  const handleConfigChange = (newConfig) => {
    setConfig(newConfig);
  };

  const handleConfigClose = () => {
    // Solo cerrar si la configuración está completa
    const isConfigComplete = config.sensibilidad && config.ratio && config.glicemiaObjetivo;
    if (isConfigComplete) {
      setShowConfig(false);
    } else {
      alert('Por favor, completa todos los campos de configuración');
    }
  };

  const handleConfigClick = () => {
    setShowConfig(true);
  };

  return (
    <div className="app">
      {showConfig && (
        <ConfigForm
          config={config}
          onConfigChange={handleConfigChange}
          onClose={handleConfigClose}
        />
      )}
      
      {!showConfig && (
        <Calculator
          config={config}
          onConfigClick={handleConfigClick}
        />
      )}
    </div>
  )
}

export default App
