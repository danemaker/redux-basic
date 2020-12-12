import { Action } from "../ngrx-fake/ngrx";

export const contadorReducer = (state = 10, action: Action) => {
    const reducerResponse = {
      INCREMENTAR: () => {
        return (state += 1);
      },
      DECREMENTAR: () => {
        return (state -= 1);
      },
      MULTIPLICAR: () => {
        return state * action.payload;
      },
      DIVIDIR: () => {
        return state / action.payload;
      },
      RESET: () => {
        return state = 0;
      },
      DEFAULT: () => {
        return state;
      },
    };
    return (reducerResponse[action.type] || reducerResponse.DEFAULT)();
  };