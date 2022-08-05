import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ActionReducer } from "./actions/actionReducer";
import { DataActionKind, DataState } from "./actions/actions";

const initialState: DataState = {
  ratio: parseInt(localStorage.getItem("ratio") || "1"),
  sensibility: parseInt(localStorage.getItem("sensibility") || "1"),
  perfectGlucose: parseInt(localStorage.getItem("perfectGlucose") || "100"),
  glucose: undefined,
  carbs: undefined,
  result: 0,
};

function App() {
  const [state, dispatch] = useReducer(ActionReducer, initialState);

  const handleChange = (type: DataActionKind, value: string) => {
    dispatch({
      type: type,
      payload: parseInt(value) || undefined,
    });
  };

  return (
    <div className="App">
      <label>
        Ratio:{" "}
        <input
          type="number"
          value={state.ratio}
          onChange={(e) =>
            handleChange(DataActionKind.SET_RATIO, e.target.value)
          }
        />
      </label>
      <label>
        Sensibilidad:{" "}
        <input
          type="number"
          value={state.sensibility}
          onChange={(e) =>
            handleChange(DataActionKind.SET_SENSITIVITY, e.target.value)
          }
        />
      </label>
      <label>
        Glicemia Ideal:{" "}
        <input
          type="number"
          value={state.perfectGlucose}
          onChange={(e) =>
            handleChange(DataActionKind.SET_PERFECT_GLUCOSE, e.target.value)
          }
        />
      </label>
      <hr></hr>
      <label>
        Glicemia actual:{" "}
        <input
          type="number"
          value={state.glucose}
          onChange={(e) =>
            handleChange(DataActionKind.SET_GLUCOSE, e.target.value)
          }
        />
      </label>
      <label>
        H de C:{" "}
        <input
          type="number"
          value={state.carbs}
          onChange={(e) =>
            handleChange(DataActionKind.SET_CARBS, e.target.value)
          }
        />
      </label>
      <hr></hr>
      <button onClick={() => handleChange(DataActionKind.CALCULATE, '')}>
        calcular
      </button>
      <label>debes inyectarte: {state.result}</label>
    </div>
  );
}

export default App;
