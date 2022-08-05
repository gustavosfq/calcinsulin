export interface DataState {
  ratio: number | undefined;
  sensibility: number | undefined;
  perfectGlucose: number | undefined;
  glucose: number | undefined;
  carbs: number | undefined;
  result: number | undefined;
}

export interface DataAction {
  type: DataActionKind;
  payload: number | undefined;
}

export enum DataActionKind {
  SET_RATIO = "SET_RATIO",
  SET_SENSITIVITY = "SET_SENSITIVITY",
  SET_PERFECT_GLUCOSE = "SET_PERFECT_GLUCOSE",
  SET_GLUCOSE = "SET_GLUCOSE",
  SET_CARBS = "SET_CARBS",
  CALCULATE = "CALCULATE",
}
