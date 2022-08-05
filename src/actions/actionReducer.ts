import { DataAction, DataActionKind, DataState } from "./actions";

const calculate = (state: DataState) => {
  const { ratio, sensibility, perfectGlucose, glucose, carbs } = state;
  if (ratio && sensibility && perfectGlucose && glucose && carbs) {
    return Math.abs(perfectGlucose - glucose) / sensibility + carbs / ratio;
  }
  return undefined;
};

export const ActionReducer = (
  state: DataState,
  action: DataAction
): DataState => {
  switch (action.type) {
    case DataActionKind.SET_RATIO:
      if (action.payload) {
        localStorage.setItem("ratio", action.payload.toString());
      }
      return {
        ...state,
        ratio: action.payload,
      };
    case DataActionKind.SET_SENSITIVITY:
      if (action.payload) {
        localStorage.setItem("sensibility", action.payload.toString());
      }
      return {
        ...state,
        sensibility: action.payload,
      };
    case DataActionKind.SET_PERFECT_GLUCOSE:
      if (action.payload) {
        localStorage.setItem("perfectGlucose", action.payload.toString());
      }
      return {
        ...state,
        perfectGlucose: action.payload,
      };
    case DataActionKind.SET_GLUCOSE:
      return {
        ...state,
        glucose: action.payload,
      };
    case DataActionKind.SET_CARBS:
      return {
        ...state,
        carbs: action.payload,
      };
    case DataActionKind.CALCULATE:
      return {
        ...state,
        result: calculate(state),
      };
    default:
      return state;
  }
};
