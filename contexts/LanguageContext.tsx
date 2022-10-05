import React, { createContext, useContext, ReactNode, useState } from "react";

interface ILanguageContextProps {
    languageToggle: boolean,
    setLanguageToggle: (languageToggle: boolean) => void
    languageSwitch: boolean,
    setLanguageSwitch: (languageSwitch: boolean) => void
}

const LanguageContext = createContext<ILanguageContextProps>({
    languageToggle: false,
    setLanguageToggle: () => {},
    languageSwitch: false,
    setLanguageSwitch: () => {},
});

export function useLanguageContext() {
    return useContext(LanguageContext);
}

type Props = {
    children: ReactNode;
};

export const ModalLanguageContextProvider = ({ children }: Props) => {
    const [modalLanguage, setModalLanguage] = useState(false);
    const [modalLanguageSwitch, setModalLanguageSwitch] = useState(false);

    const value = {
        languageToggle: modalLanguage,
        setLanguageToggle: setModalLanguage,
        languageSwitch: modalLanguageSwitch,
        setLanguageSwitch: setModalLanguageSwitch,
    }

    return (
      <LanguageContext.Provider value={value}>
        {children}
      </LanguageContext.Provider>
    );
};