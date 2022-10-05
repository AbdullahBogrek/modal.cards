import React, { createContext, useContext, ReactNode, useState } from "react";

interface IModalContextProps {
    id: number,
    setId: (id: number) => void,
    appearance: boolean,
    setAppearance: (appearance: boolean) => void,
    contentArea: boolean,
    setContentArea: (contentArea: boolean) => void,
    targeting: boolean,
    setTargeting: (targeting: boolean) => void,
    settings: boolean,
    setSettings: (settings: boolean) => void,
}

const ModalContext = createContext<IModalContextProps>({
    id: 0,
    setId: () => {},
    appearance: false,
    setAppearance: () => {},
    contentArea: false,
    setContentArea: () => {},
    targeting: false,
    setTargeting: () => {},
    settings: false,
    setSettings: () => {},
});

export function useModalContext() {
    return useContext(ModalContext);
}

type Props = {
    children: ReactNode;
};

export const ModalContextProvider = ({ children }: Props) => {
    const [modalId, setModalId] = useState(0);
    const [modalAppearance, setModalAppearance] = useState(false);
    const [modalContentArea, setModalContentArea] = useState(false);
    const [modalTargeting, setModalTargeting] = useState(false);
    const [modalSettings, setModalSettings] = useState(false);

    const value = {
      id: modalId,
      setId: setModalId,
      appearance: modalAppearance,
      setAppearance: setModalAppearance,
      contentArea: modalContentArea,
      setContentArea: setModalContentArea,
      targeting: modalTargeting,
      setTargeting: setModalTargeting,
      settings: modalSettings,
      setSettings: setModalSettings,
    }

    return (
      <ModalContext.Provider value={value}>
        {children}
      </ModalContext.Provider>
    );
};