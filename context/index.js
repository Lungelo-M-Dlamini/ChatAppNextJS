import React, { useState, createContext } from "react"; //import useState to update state, createContext to make context

export const Context = createContext(); // initializes the Context

export const ContextProvider = (props) =>{ // stores components, components can be accessed from the provider
    const [username, setUsername] = useState("");// state data that will be shared between components
    const [secret, setSecret] = useState("");

    const value = { // values that will be passed to the provider as a prop
        username,
        setUsername,
        secret,
        setSecret,
    };

    return <Context.Provider value={value}>{props.children}</Context.Provider>
};