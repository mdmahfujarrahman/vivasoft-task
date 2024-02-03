import { createContext, useState } from "react";

export const AppStore = createContext();

const AppProvider = ({ children }) => {
    const [inputsData, setInputsData] = useState({});

    return (
        <AppStore.Provider value={(inputsData, setInputsData)}>
            {children}
        </AppStore.Provider>
    );
};

export default AppProvider;
