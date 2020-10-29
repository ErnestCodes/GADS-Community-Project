import React, { createContext, useContext, useReducer } from "react";

// This prepare the data layer
export const StateContext = createContext();

// This will wrap our app and provide the data layer to every component of our application
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// This pulls information from the data layer
export const useStateValue = () => useContext(StateContext);
