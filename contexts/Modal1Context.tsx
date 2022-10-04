import React, { createContext, useContext, ReactNode, useState } from "react";

interface IModal1ContextProps {
    size: string,
    position: string,
    textColor: string,
    buttonColor: string,
    placeholderColor: string,
    borderColor: string,
    backgroundColor: string,
    logo: string,

    content: {
      title: string,
      subtitle: string,
      inputPlaceholer: string,
      button1: string,
      button2: string,
    },
    image: string,

    visitorDevice: {
      isActive: boolean,
      desktop: boolean,
      mobile: boolean
    },

    xSeconds: string,
    xScroll: string,
    trafficSource: string,
    browserLanguage: string[],
    exitIntent: boolean,

    webhookUrl: string,
    sendFromSubmission: boolean,
    sendClickData: boolean,

    setSize: (size: string) => void,
    setPosition: (position: string) => void,
    setTextColor: (textColor: string) => void,
    setButtonColor: (buttonColor: string) => void,
    setPlaceholderColor: (placeholderColor: string) => void,
    setBorderColor: (borderColor: string) => void,
    setBackgroundColor: (backgroundColor: string) => void,
    setLogo: (logo: string) => void,

    setContent: {
      setTitle: (title: string) => void,
      setSubtitle: (subtitle: string) => void,
      setInputPlaceholer: (inputPlaceholer: string) => void,
      setButton1: (button1: string) => void,
      setButton2: (button2: string) => void,
    },
    setImage: (image: string) => void,

    setVisitorDevice: {
      setIsActive: (isActive: boolean) => void,
      setDesktop: (desktop: boolean) => void,
      setMobile: (mobile: boolean) => void
    },

    setXSeconds: (xSeconds: string) => void,
    setXScroll: (xScroll: string) => void,
    setTrafficSource: (trafficSource: string) => void,
    setBrowserLanguage: (browserLanguage: string[]) => void,
    setExitIntent: (exitIntent: boolean) => void,

    setWebhookUrl: (webhookUrl: string) => void,
    setSendFromSubmission: (sendFromSubmission: boolean) => void,
    setSendClickData: (sendClickData: boolean) => void,
}

const Modal1Context = React.createContext<IModal1ContextProps>({
    size: "md",
    position: "center",
    textColor: "#000000",
    buttonColor: "#7D4AEA",
    placeholderColor: "#000000",
    borderColor: "#D2DAE3",
    backgroundColor: "#FFFFFF",
    logo: "/assets/security_icon.svg",

    content: {
      title: "Security Code",
      subtitle: "This code expires in 24 hours",
      inputPlaceholer: "Code",
      button1: "Cancel",
      button2: "Continue",
    },
    image: "",

    visitorDevice: {
      isActive: true,
      desktop: false,
      mobile: false
    },

    xSeconds: "12",
    xScroll: "50",
    trafficSource: "",
    browserLanguage: [],
    exitIntent: false,

    webhookUrl: "",
    sendFromSubmission: false,
    sendClickData: false,

    setSize: () => {},
    setPosition: () => {},
    setTextColor: () => {},
    setButtonColor: () => {},
    setPlaceholderColor: () => {},
    setBorderColor: () => {},
    setBackgroundColor: () => {},
    setLogo: () => {},

    setContent: {
      setTitle: () => {},
      setSubtitle: () => {},
      setInputPlaceholer: () => {},
      setButton1: () => {},
      setButton2: () => {},
    },
    setImage: () => {},

    setVisitorDevice: {
      setIsActive: () => {},
      setDesktop: () => {},
      setMobile: () => {},
    },

    setXSeconds: () => {},
    setXScroll: () => {},
    setTrafficSource: () => {},
    setBrowserLanguage: () => [],
    setExitIntent: () => {},

    setWebhookUrl: () => {},
    setSendFromSubmission: () => {},
    setSendClickData: () => {},
});

export function useModal1Context() {
    return useContext(Modal1Context);
}

type Props = {
    children: ReactNode;
};

export const Modal1ContextProvider = ({ children }: Props) => {
    const [modalSize, setModalSize] = useState("md");
    const [modalPosition, setModalPosition] = useState("top-1/2_left-1/2");
    const [modalTextColor, setModalTextColor] = useState("#000000");
    const [modalButtonColor, setModalButtonColor] = useState("#7D4AEA");
    const [modalPlaceholderColor, setModalPlaceholderColor] = useState("#000000");
    const [modalBorderColor, setModalBorderColor] = useState("#D2DAE3");
    const [modalBackgroundColor, setModalBackgroundColor] = useState("#FFFFFF");
    const [modalLogo, setModalLogo] = useState("/assets/security_icon.svg");
    const [modalTitle, setModalTitle] = useState("Security Code");
    const [modalSubtitle, setModalSubtitle] = useState("This code expires in 24 hours");
    const [modalInputPlaceholer, setModalInputPlaceholer] = useState("Code");
    const [modalButton1, setModalButton1] = useState("Cancel");
    const [modalButton2, setModalButton2] = useState("Continue");
    const [modalImage, setModalImage] = useState("");
    const [modalVisitorDeviceIsActive, setModalVisitorDeviceIsActive] = useState(false);
    const [modalVisitorDeviceDesktop, setModalVisitorDeviceDesktop] = useState(false);
    const [modalVisitorDeviceMobile, setModalVisitorDeviceMobile] = useState(false);
    const [modalXSeconds, setModalXSeconds] = useState("12");
    const [modalXScroll, setModalXScroll] = useState("50");
    const [modalTrafficeSource, setModalTrafficeSource] = useState("");
    const [modalBrowserLanguage, setModalBrowserLanguage] = useState<string[]>([]);
    const [modalExitIntent, setModalExitIntent] = useState(false);
    const [modalWebhookUrl, setModalWebhookUrl] = useState("");
    const [modalSendFromSubmission, setSendFromSubmission] = useState(false);
    const [modalSendClickData, setModalSendClickData] = useState(false);
  
    return (
      <Modal1Context.Provider
        value={{
            size: modalSize,
            position: modalPosition,
            textColor: modalTextColor,
            buttonColor: modalButtonColor,
            placeholderColor: modalPlaceholderColor,
            borderColor: modalBorderColor,
            backgroundColor: modalBackgroundColor,
            logo: modalLogo,

            content: {
              title: modalTitle,
              subtitle: modalSubtitle,
              inputPlaceholer: modalInputPlaceholer,
              button1: modalButton1,
              button2: modalButton2,
            },
            image: modalImage,
            
            visitorDevice: {
              isActive: modalVisitorDeviceIsActive,
              desktop: modalVisitorDeviceDesktop,
              mobile: modalVisitorDeviceMobile
            },

            xSeconds: modalXSeconds,
            xScroll: modalXScroll,
            trafficSource: modalTrafficeSource,
            browserLanguage: modalBrowserLanguage,
            exitIntent: modalExitIntent,
        
            webhookUrl: modalWebhookUrl,
            sendFromSubmission: modalSendFromSubmission,
            sendClickData: modalSendClickData,

            setSize: setModalSize,
            setPosition: setModalPosition,
            setTextColor: setModalTextColor,
            setButtonColor: setModalButtonColor,
            setPlaceholderColor: setModalPlaceholderColor,
            setBorderColor: setModalBorderColor,
            setBackgroundColor: setModalBackgroundColor,
            setLogo: setModalLogo,

            setContent: {
              setTitle: setModalTitle,
              setSubtitle: setModalSubtitle,
              setInputPlaceholer: setModalInputPlaceholer,
              setButton1: setModalButton1,
              setButton2: setModalButton2,
            },
            setImage: setModalImage,
        
            setVisitorDevice: {
              setIsActive: setModalVisitorDeviceIsActive,
              setDesktop: setModalVisitorDeviceDesktop,
              setMobile: setModalVisitorDeviceMobile,
            },
            
            setXSeconds: setModalXSeconds,
            setXScroll: setModalXScroll,
            setTrafficSource: setModalTrafficeSource,
            setBrowserLanguage: setModalBrowserLanguage,
            setExitIntent: setModalExitIntent,
        
            setWebhookUrl: setModalWebhookUrl,
            setSendFromSubmission: setSendFromSubmission,
            setSendClickData: setModalSendClickData,
        }}
      >
        {children}
      </Modal1Context.Provider>
    );
};