import { useModalContext } from "../contexts/ModalContext";
import { useModalCustomizationContext } from "../contexts/ModalCustomizationContext";
import { TEMPLATE_FEATURES } from "../contexts/templateFeatures";

export interface StepValidation {
  isAppearanceEnabled: boolean;
  isContentEnabled: boolean;
  isTargetingEnabled: boolean;
  isSettingsEnabled: boolean;
}

export function useStepValidation(): StepValidation {
  const { id } = useModalContext();
  const ctx = useModalCustomizationContext();
  const features = TEMPLATE_FEATURES[id];

  const isAppearanceEnabled = id > 0;

  const isContentEnabled =
    isAppearanceEnabled && (!features?.hasLogo || ctx.logo.trim() !== "");

  const isTargetingEnabled =
    isContentEnabled &&
    ctx.title.trim() !== "" &&
    ctx.subtitle.trim() !== "" &&
    (!features?.hasBodyText || ctx.bodyText.trim() !== "") &&
    (!features?.hasInput1 || ctx.inputPlaceholder1.trim() !== "") &&
    (!features?.hasInput2 || ctx.inputPlaceholder2.trim() !== "") &&
    (!features?.hasButton1 || ctx.button1.trim() !== "") &&
    (!features?.hasButton2 || ctx.button2.trim() !== "") &&
    (!features?.hasImage || ctx.image.trim() !== "") &&
    (!features?.hasLinkText1 || ctx.linkText1.trim() !== "") &&
    (!features?.hasLinkText2 || ctx.linkText2.trim() !== "") &&
    (!features?.hasPrivacyText || ctx.privacyText.trim() !== "");

  const isSettingsEnabled = isTargetingEnabled;

  return {
    isAppearanceEnabled,
    isContentEnabled,
    isTargetingEnabled,
    isSettingsEnabled,
  };
}
