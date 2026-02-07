export interface ModalCustomizationValues {
  size: string;
  position: string;
  textColor: string;
  buttonColor: string;
  placeholderColor: string;
  borderColor: string;
  backgroundColor: string;
  logo: string;

  title: string;
  subtitle: string;
  bodyText: string;
  inputPlaceholder1: string;
  inputPlaceholder2: string;
  button1: string;
  button2: string;
  image: string;
  linkText1: string;
  linkText2: string;
  privacyText: string;

  visitorDevice: {
    isActive: boolean;
    desktop: boolean;
    mobile: boolean;
  };
  xSeconds: string;
  xSecondsActive: boolean;
  xScroll: string;
  xScrollActive: boolean;
  trafficSource: string;
  trafficSourceActive: boolean;
  browserLanguage: string[];
  browserLanguageActive: boolean;
  exitIntent: boolean;

  webhookUrl: string;
  sendFormSubmission: boolean;
  sendClickData: boolean;
}

export const BASE_DEFAULTS: ModalCustomizationValues = {
  size: "md",
  position: "center",
  textColor: "#000000",
  buttonColor: "#000000",
  placeholderColor: "#000000",
  borderColor: "#D2DAE3",
  backgroundColor: "#FFFFFF",
  logo: "",

  title: "",
  subtitle: "",
  bodyText: "",
  inputPlaceholder1: "",
  inputPlaceholder2: "",
  button1: "",
  button2: "",
  image: "",
  linkText1: "",
  linkText2: "",
  privacyText: "",

  visitorDevice: { isActive: false, desktop: false, mobile: false },
  xSeconds: "12",
  xSecondsActive: false,
  xScroll: "50",
  xScrollActive: false,
  trafficSource: "",
  trafficSourceActive: false,
  browserLanguage: [],
  browserLanguageActive: false,
  exitIntent: false,

  webhookUrl: "",
  sendFormSubmission: false,
  sendClickData: false,
};

const TEMPLATE_OVERRIDES: Record<number, Partial<ModalCustomizationValues>> = {
  1: {
    logo: "/assets/security_icon.svg",
    title: "Security Code",
    subtitle: "This code expires in 24 hours",
    inputPlaceholder1: "Code",
    button1: "Cancel",
    button2: "Continue",
  },
  2: {
    image: "/assets/modal2_cover.png",
    title: "Install local now",
    subtitle: "We\u2019ve gone native, try it!",
    button1: "Not now",
    button2: "Continue",
    borderColor: "#EAEAEA",
  },
  3: {
    title: "Choose best for you",
    subtitle: "Only pay for the capacity that you use.",
    bodyText: "PLANS",
    button1: "Cancel",
    button2: "Continue",
    borderColor: "#EAEAEA",
  },
  4: {
    logo: "/assets/trash_icon.svg",
    title: "Delete your profile",
    subtitle: "Your profile will be automatically deleted after 1 month.",
    bodyText: "You won\u2019t be able to access to your profile after 30.08.2021.",
    button1: "Cancel",
    button2: "Delete my profile",
    borderColor: "#EAEAEA",
  },
  5: {
    title: "The file is on it\u2019s way",
    subtitle: "You\u2019ll get an notified when the receiver has opened the email.",
    button2: "Go to dashboard",
    borderColor: "#EAEAEA",
  },
  6: {
    logo: "/assets/percent_icon.svg",
    title: "Join our mail list",
    subtitle: "Save up to 30% of your next order",
    inputPlaceholder1: "Enter your email",
    button1: "Later",
    button2: "Join now",
    borderColor: "#EAEAEA",
  },
  7: {
    backgroundColor: "#FFFFFF",
    textColor: "#000000",
    buttonColor: "#000000",
    title: "Hi, stranger",
    subtitle: "Sign up now, and get a 30% discount",
    button1: "Login",
    button2: "Sign up now",
    borderColor: "#E5E7EB",
  },
  8: {
    backgroundColor: "#FFFFFF",
    textColor: "#000000",
    buttonColor: "#000000",
    title: "Subscribe to our newsletter",
    subtitle: "Receive the flash news in your inbox.",
    inputPlaceholder1: "Enter your email",
    button2: "Sign up now",
    privacyText: "By subscribe this form I agree to Privacy Policy.",
    borderColor: "#E5E7EB",
  },
  9: {
    image: "/assets/modal8_cover.png",
    title: "Hello stranger",
    subtitle: "Sign up now and get 30% discount",
    inputPlaceholder1: "Enter full name",
    inputPlaceholder2: "Enter your name",
    button2: "Sign up",
    linkText2: "have an account?",
    borderColor: "#EAEAEA",
  },
  10: {
    image: "/assets/modal9_cover.png",
    title: "Sign up",
    subtitle: "Join new adventure",
    inputPlaceholder1: "Enter full name",
    inputPlaceholder2: "Enter your name",
    button2: "Sign up",
    linkText1: "Forgot password",
    linkText2: "Log in",
    borderColor: "#EAEAEA",
  },
  11: {
    image: "/assets/modal11_cover.png",
    title: "Sign up",
    subtitle: "Join new adventure",
    inputPlaceholder1: "Enter full name",
    inputPlaceholder2: "Enter your name",
    button2: "Sign up",
    linkText1: "Forgot password",
    linkText2: "Log in",
    borderColor: "#EAEAEA",
  },
  12: {
    title: "Check your email",
    subtitle: "Once you deletet your account, you\u2019ll lose all data associatted with it.",
    inputPlaceholder1: "Enter your name",
    button2: "Sign up",
    linkText2: "have an account?",
    borderColor: "#EAEAEA",
  },
  13: {
    backgroundColor: "#FFFFFF",
    textColor: "#000000",
    buttonColor: "#000000",
    title: "Welcome to talk",
    subtitle: "Send friends photos, videos, locations, songs, voice messages, and more.",
    button2: "Let\u2019s get started",
    borderColor: "#EAEAEA",
  },
};

export function getTemplateDefaults(templateId: number): ModalCustomizationValues {
  return {
    ...BASE_DEFAULTS,
    ...(TEMPLATE_OVERRIDES[templateId] || {}),
  };
}
