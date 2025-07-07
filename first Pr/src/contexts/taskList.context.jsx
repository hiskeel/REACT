import { createContext, useState } from "react";

const initialState = {
    toDoList: [],
    setList: () => { }
};

export const CounterContext = createContext(initialState);

export const CounterProvider = ({ children }) => {
    const [toDoList, setList] = useState(initialState.toDoList);

    return (
        <CounterContext.Provider toDoList={{ toDoList, setList }}>
            {children}
        </CounterContext.Provider>
    );
}