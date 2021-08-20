// importing context API stuff, use ontext and useReducer
import React, { createContext, useContext, useReducer } from "react";

// preparing the datalayer
export const StateContext = createContext();

// high order component
// we wrap our app inside the StateProvider which now gives us that data layer functionality
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// when we want to pull something from the data layer we use the useStateValue hook
export const useStateValue = () => useContext(StateContext)
