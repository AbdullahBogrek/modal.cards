import { useModalContext } from "../../../contexts/ModalContext";
import { useModalCustomizationContext } from "../../../contexts/ModalCustomizationContext";
import { useTranslation } from '../../../contexts/TranslationContext';
import { StaggerContainer, StaggerItem } from '../../animations/StaggerContainer';

const TEMPLATE_COUNT = 12;

const index = () => {
  const { id, setId } = useModalContext();
  const { loadTemplateDefaults } = useModalCustomizationContext();
  const { t } = useTranslation();

  const handleSelect = (templateId: number) => {
    setId(templateId);
    loadTemplateDefaults(templateId);
    setTimeout(() => {
      document.getElementById('appearance-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <div className='px-5 xl:px-0'>
      <div className="flex items-center">
        <span className='enerator-title'><p className='generator-title-number'>1</p></span>
        <h5 className='generator-title-text'>{t('generator.step1Title')}</h5>
      </div>

      <div className="mt-6 flex justify-center">
        <StaggerContainer className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: TEMPLATE_COUNT }, (_, i) => i + 1).map((num) => (
            <StaggerItem key={num}>
              <div
                className={`templates cursor-pointer transition-all duration-200 ${id === num ? 'ring-2 ring-primary ring-offset-2' : ''}`}
                onClick={() => handleSelect(num)}
              >
                <img src={`/assets/${String(num).padStart(2, '0')}.png`} className='absolute z-0' />
                <div className='templates-container group'>
                  <button className='templates-container-button group-hover:block' tabIndex={-1}>{t('generator.selectTemplate')}</button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  )
}

export default index
