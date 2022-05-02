import { createContext } from "react";

export const InitialState = {
  mode: false,
};

export const SiteContext = createContext(InitialState);

export const SiteReducer = (state: any = InitialState, action: any) => {
  switch (action.type) {
    case "TOGGLE_MODE":
      return {
        ...state,
        mode: !state.mode,
      };
    default:
      return state;
  }
};
