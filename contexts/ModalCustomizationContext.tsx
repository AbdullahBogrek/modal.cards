import React, { createContext, useContext, ReactNode, useState, useCallback } from "react";
import { ModalCustomizationValues, getTemplateDefaults, BASE_DEFAULTS } from "./templateDefaults";

interface IModalCustomizationContext extends ModalCustomizationValues {
  setSize: (v: string) => void;
  setPosition: (v: string) => void;
  setTextColor: (v: string) => void;
  setButtonColor: (v: string) => void;
  setPlaceholderColor: (v: string) => void;
  setBorderColor: (v: string) => void;
  setBackgroundColor: (v: string) => void;
  setLogo: (v: string) => void;

  setTitle: (v: string) => void;
  setSubtitle: (v: string) => void;
  setBodyText: (v: string) => void;
  setInputPlaceholder1: (v: string) => void;
  setInputPlaceholder2: (v: string) => void;
  setButton1: (v: string) => void;
  setButton2: (v: string) => void;
  setImage: (v: string) => void;
  setLinkText1: (v: string) => void;
  setLinkText2: (v: string) => void;
  setPrivacyText: (v: string) => void;

  setVisitorDevice: {
    setIsActive: (v: boolean) => void;
    setDesktop: (v: boolean) => void;
    setMobile: (v: boolean) => void;
  };
  setXSeconds: (v: string) => void;
  setXSecondsActive: (v: boolean) => void;
  setXScroll: (v: string) => void;
  setXScrollActive: (v: boolean) => void;
  setTrafficSource: (v: string) => void;
  setTrafficSourceActive: (v: boolean) => void;
  setBrowserLanguage: (v: string[]) => void;
  setBrowserLanguageActive: (v: boolean) => void;
  setExitIntent: (v: boolean) => void;

  setWebhookUrl: (v: string) => void;
  setSendFormSubmission: (v: boolean) => void;
  setSendClickData: (v: boolean) => void;

  loadTemplateDefaults: (templateId: number) => void;
}

const noop = () => {};

const ModalCustomizationContext = createContext<IModalCustomizationContext>({
  ...BASE_DEFAULTS,
  setSize: noop, setPosition: noop, setTextColor: noop, setButtonColor: noop,
  setPlaceholderColor: noop, setBorderColor: noop, setBackgroundColor: noop, setLogo: noop,
  setTitle: noop, setSubtitle: noop, setBodyText: noop,
  setInputPlaceholder1: noop, setInputPlaceholder2: noop,
  setButton1: noop, setButton2: noop, setImage: noop,
  setLinkText1: noop, setLinkText2: noop, setPrivacyText: noop,
  setVisitorDevice: { setIsActive: noop, setDesktop: noop, setMobile: noop },
  setXSeconds: noop, setXSecondsActive: noop, setXScroll: noop, setXScrollActive: noop,
  setTrafficSource: noop, setTrafficSourceActive: noop,
  setBrowserLanguage: noop, setBrowserLanguageActive: noop, setExitIntent: noop,
  setWebhookUrl: noop, setSendFormSubmission: noop, setSendClickData: noop,
  loadTemplateDefaults: noop,
});

export function useModalCustomizationContext() {
  return useContext(ModalCustomizationContext);
}

type Props = { children: ReactNode };

export const ModalCustomizationContextProvider = ({ children }: Props) => {
  const [size, setSize] = useState(BASE_DEFAULTS.size);
  const [position, setPosition] = useState(BASE_DEFAULTS.position);
  const [textColor, setTextColor] = useState(BASE_DEFAULTS.textColor);
  const [buttonColor, setButtonColor] = useState(BASE_DEFAULTS.buttonColor);
  const [placeholderColor, setPlaceholderColor] = useState(BASE_DEFAULTS.placeholderColor);
  const [borderColor, setBorderColor] = useState(BASE_DEFAULTS.borderColor);
  const [backgroundColor, setBackgroundColor] = useState(BASE_DEFAULTS.backgroundColor);
  const [logo, setLogo] = useState(BASE_DEFAULTS.logo);

  const [title, setTitle] = useState(BASE_DEFAULTS.title);
  const [subtitle, setSubtitle] = useState(BASE_DEFAULTS.subtitle);
  const [bodyText, setBodyText] = useState(BASE_DEFAULTS.bodyText);
  const [inputPlaceholder1, setInputPlaceholder1] = useState(BASE_DEFAULTS.inputPlaceholder1);
  const [inputPlaceholder2, setInputPlaceholder2] = useState(BASE_DEFAULTS.inputPlaceholder2);
  const [button1, setButton1] = useState(BASE_DEFAULTS.button1);
  const [button2, setButton2] = useState(BASE_DEFAULTS.button2);
  const [image, setImage] = useState(BASE_DEFAULTS.image);
  const [linkText1, setLinkText1] = useState(BASE_DEFAULTS.linkText1);
  const [linkText2, setLinkText2] = useState(BASE_DEFAULTS.linkText2);
  const [privacyText, setPrivacyText] = useState(BASE_DEFAULTS.privacyText);

  const [visitorDeviceIsActive, setVisitorDeviceIsActive] = useState(false);
  const [visitorDeviceDesktop, setVisitorDeviceDesktop] = useState(false);
  const [visitorDeviceMobile, setVisitorDeviceMobile] = useState(false);
  const [xSeconds, setXSeconds] = useState(BASE_DEFAULTS.xSeconds);
  const [xSecondsActive, setXSecondsActive] = useState(BASE_DEFAULTS.xSecondsActive);
  const [xScroll, setXScroll] = useState(BASE_DEFAULTS.xScroll);
  const [xScrollActive, setXScrollActive] = useState(BASE_DEFAULTS.xScrollActive);
  const [trafficSource, setTrafficSource] = useState(BASE_DEFAULTS.trafficSource);
  const [trafficSourceActive, setTrafficSourceActive] = useState(BASE_DEFAULTS.trafficSourceActive);
  const [browserLanguage, setBrowserLanguage] = useState<string[]>(BASE_DEFAULTS.browserLanguage);
  const [browserLanguageActive, setBrowserLanguageActive] = useState(BASE_DEFAULTS.browserLanguageActive);
  const [exitIntent, setExitIntent] = useState(BASE_DEFAULTS.exitIntent);

  const [webhookUrl, setWebhookUrl] = useState(BASE_DEFAULTS.webhookUrl);
  const [sendFormSubmission, setSendFormSubmission] = useState(BASE_DEFAULTS.sendFormSubmission);
  const [sendClickData, setSendClickData] = useState(BASE_DEFAULTS.sendClickData);

  const loadTemplateDefaults = useCallback((templateId: number) => {
    const d = getTemplateDefaults(templateId);
    setSize(d.size);
    setPosition(d.position);
    setTextColor(d.textColor);
    setButtonColor(d.buttonColor);
    setPlaceholderColor(d.placeholderColor);
    setBorderColor(d.borderColor);
    setBackgroundColor(d.backgroundColor);
    setLogo(d.logo);
    setTitle(d.title);
    setSubtitle(d.subtitle);
    setBodyText(d.bodyText);
    setInputPlaceholder1(d.inputPlaceholder1);
    setInputPlaceholder2(d.inputPlaceholder2);
    setButton1(d.button1);
    setButton2(d.button2);
    setImage(d.image);
    setLinkText1(d.linkText1);
    setLinkText2(d.linkText2);
    setPrivacyText(d.privacyText);
    setVisitorDeviceIsActive(d.visitorDevice.isActive);
    setVisitorDeviceDesktop(d.visitorDevice.desktop);
    setVisitorDeviceMobile(d.visitorDevice.mobile);
    setXSeconds(d.xSeconds);
    setXSecondsActive(d.xSecondsActive);
    setXScroll(d.xScroll);
    setXScrollActive(d.xScrollActive);
    setTrafficSource(d.trafficSource);
    setTrafficSourceActive(d.trafficSourceActive);
    setBrowserLanguage(d.browserLanguage);
    setBrowserLanguageActive(d.browserLanguageActive);
    setExitIntent(d.exitIntent);
    setWebhookUrl(d.webhookUrl);
    setSendFormSubmission(d.sendFormSubmission);
    setSendClickData(d.sendClickData);
  }, []);

  const value: IModalCustomizationContext = {
    size, position, textColor, buttonColor, placeholderColor, borderColor, backgroundColor, logo,
    title, subtitle, bodyText, inputPlaceholder1, inputPlaceholder2, button1, button2, image,
    linkText1, linkText2, privacyText,
    visitorDevice: { isActive: visitorDeviceIsActive, desktop: visitorDeviceDesktop, mobile: visitorDeviceMobile },
    xSeconds, xSecondsActive, xScroll, xScrollActive, trafficSource, trafficSourceActive,
    browserLanguage, browserLanguageActive, exitIntent,
    webhookUrl, sendFormSubmission, sendClickData,

    setSize, setPosition, setTextColor, setButtonColor, setPlaceholderColor, setBorderColor, setBackgroundColor, setLogo,
    setTitle, setSubtitle, setBodyText, setInputPlaceholder1, setInputPlaceholder2, setButton1, setButton2, setImage,
    setLinkText1, setLinkText2, setPrivacyText,
    setVisitorDevice: { setIsActive: setVisitorDeviceIsActive, setDesktop: setVisitorDeviceDesktop, setMobile: setVisitorDeviceMobile },
    setXSeconds, setXSecondsActive, setXScroll, setXScrollActive,
    setTrafficSource, setTrafficSourceActive,
    setBrowserLanguage, setBrowserLanguageActive, setExitIntent,
    setWebhookUrl, setSendFormSubmission, setSendClickData,
    loadTemplateDefaults,
  };

  return (
    <ModalCustomizationContext.Provider value={value}>
      {children}
    </ModalCustomizationContext.Provider>
  );
};
