export interface TemplateFeatures {
  hasLogo: boolean;
  hasImage: boolean;
  hasInput1: boolean;
  hasInput2: boolean;
  hasButton1: boolean;
  hasButton2: boolean;
  hasBodyText: boolean;
  hasPrivacyText: boolean;
  hasLinkText1: boolean;
  hasLinkText2: boolean;
}

export const TEMPLATE_FEATURES: Record<number, TemplateFeatures> = {
  1:  { hasLogo: true,  hasImage: false, hasInput1: true,  hasInput2: false, hasButton1: true,  hasButton2: true,  hasBodyText: false, hasPrivacyText: false, hasLinkText1: false, hasLinkText2: false },
  2:  { hasLogo: false, hasImage: true,  hasInput1: false, hasInput2: false, hasButton1: true,  hasButton2: true,  hasBodyText: false, hasPrivacyText: false, hasLinkText1: false, hasLinkText2: false },
  3:  { hasLogo: false, hasImage: false, hasInput1: false, hasInput2: false, hasButton1: true,  hasButton2: true,  hasBodyText: true,  hasPrivacyText: false, hasLinkText1: false, hasLinkText2: false },
  4:  { hasLogo: true,  hasImage: false, hasInput1: false, hasInput2: false, hasButton1: true,  hasButton2: true,  hasBodyText: true,  hasPrivacyText: false, hasLinkText1: false, hasLinkText2: false },
  5:  { hasLogo: false, hasImage: false, hasInput1: false, hasInput2: false, hasButton1: false, hasButton2: true,  hasBodyText: false, hasPrivacyText: false, hasLinkText1: false, hasLinkText2: false },
  6:  { hasLogo: true,  hasImage: false, hasInput1: true,  hasInput2: false, hasButton1: true,  hasButton2: true,  hasBodyText: false, hasPrivacyText: false, hasLinkText1: false, hasLinkText2: false },
  7:  { hasLogo: false, hasImage: false, hasInput1: false, hasInput2: false, hasButton1: true,  hasButton2: true,  hasBodyText: false, hasPrivacyText: false, hasLinkText1: false, hasLinkText2: false },
  8:  { hasLogo: false, hasImage: false, hasInput1: true,  hasInput2: false, hasButton1: false, hasButton2: true,  hasBodyText: false, hasPrivacyText: true,  hasLinkText1: false, hasLinkText2: false },
  9:  { hasLogo: false, hasImage: true,  hasInput1: true,  hasInput2: true,  hasButton1: false, hasButton2: true,  hasBodyText: false, hasPrivacyText: false, hasLinkText1: false, hasLinkText2: true  },
  10: { hasLogo: false, hasImage: true,  hasInput1: true,  hasInput2: true,  hasButton1: false, hasButton2: true,  hasBodyText: false, hasPrivacyText: false, hasLinkText1: true,  hasLinkText2: true  },
  11: { hasLogo: false, hasImage: true,  hasInput1: true,  hasInput2: true,  hasButton1: false, hasButton2: true,  hasBodyText: false, hasPrivacyText: false, hasLinkText1: true,  hasLinkText2: true  },
  12: { hasLogo: false, hasImage: false, hasInput1: true,  hasInput2: false, hasButton1: false, hasButton2: true,  hasBodyText: false, hasPrivacyText: false, hasLinkText1: false, hasLinkText2: true  },
  13: { hasLogo: false, hasImage: false, hasInput1: false, hasInput2: false, hasButton1: false, hasButton2: true,  hasBodyText: false, hasPrivacyText: false, hasLinkText1: false, hasLinkText2: false },
};
