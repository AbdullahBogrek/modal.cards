import { useModalContext } from '../../../contexts/ModalContext';
import { useStepValidation } from '../../../hooks/useStepValidation';
import { useTranslation } from '../../../contexts/TranslationContext';

const steps = [
  { titleKey: 'generator.step1Title', descKey: 'generator.step1Desc' },
  { titleKey: 'generator.step2Title', descKey: 'generator.step2Desc' },
  { titleKey: 'generator.step3Title', descKey: 'generator.step3Desc' },
  { titleKey: 'generator.step4Title', descKey: 'generator.step4Desc' },
  { titleKey: 'generator.step5Title', descKey: 'generator.step5Desc' },
];

const WizardProgress = () => {
  const { id } = useModalContext();
  const { isAppearanceEnabled, isContentEnabled, isTargetingEnabled, isSettingsEnabled } = useStepValidation();
  const { t } = useTranslation();

  const stepEnabled = [
    true,
    isAppearanceEnabled,
    isContentEnabled,
    isTargetingEnabled,
    isSettingsEnabled,
  ];

  const getCurrentStep = () => {
    if (!isAppearanceEnabled) return 0;
    if (!isContentEnabled) return 1;
    if (!isTargetingEnabled) return 2;
    if (!isSettingsEnabled) return 3;
    return 4;
  };

  const currentStep = getCurrentStep();

  return (
    <div className="flex items-center gap-1 mb-8 overflow-x-auto pb-2">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep && stepEnabled[index];
        const isActive = index === currentStep;
        const isEnabled = stepEnabled[index];

        return (
          <div key={index} className="flex items-center">
            {index > 0 && (
              <div className={`w-6 h-px mx-1 ${isCompleted ? 'bg-primary' : 'bg-border'}`} />
            )}
            <div className="flex items-center gap-2 min-w-0">
              <div
                className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-colors duration-200 ${
                  isCompleted
                    ? 'bg-primary text-white'
                    : isActive
                    ? 'bg-primary/20 text-primary border-2 border-primary'
                    : isEnabled
                    ? 'bg-surface-alt text-text-muted'
                    : 'bg-surface-alt text-text-disabled'
                }`}
              >
                {isCompleted ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  index + 1
                )}
              </div>
              <div className="hidden sm:block min-w-0">
                <p className={`text-xs font-medium truncate ${
                  isActive ? 'text-primary' : isCompleted ? 'text-text' : 'text-text-muted'
                }`}>
                  {t(step.titleKey)}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WizardProgress;
