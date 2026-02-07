import { useState } from 'react'
import { useLanguageContext } from "../../../../contexts/LanguageContext";
import { useModalCustomizationContext } from "../../../../contexts/ModalCustomizationContext";
import { useStepValidation } from "../../../../hooks/useStepValidation";
import { useTranslation } from "../../../../contexts/TranslationContext";

import languages from "./languages.json"

const index = () => {
    const [selectAllLanguages, setSelectAllLanguages] = useState<boolean>(false)

    const { languageToggle, setLanguageToggle } = useLanguageContext()
    const { isTargetingEnabled } = useStepValidation();
    const { browserLanguage, setBrowserLanguage, browserLanguageActive, setBrowserLanguageActive } = useModalCustomizationContext();
    const { t } = useTranslation();

    const handleChange = (e : React.FormEvent<HTMLInputElement>) => {
        e.currentTarget.checked ? setBrowserLanguage([...browserLanguage, e.currentTarget.id]) : (
            setBrowserLanguage(browserLanguage.filter(code => code !== e.currentTarget.id))
        )
    }

    const handleSelectAll = () => {
        setSelectAllLanguages(!selectAllLanguages);
        setBrowserLanguage(languages.map(lang => lang.code));
        if (selectAllLanguages) {
            setBrowserLanguage([]);
        }
    }

    const handleClearAll = () => {
        setBrowserLanguage([])
        setSelectAllLanguages(false)
    }

    return (
        <>
            <div className="targeting-features">
                <h6 className='targeting-feature-title'>{t('generator.browserLanguage')}</h6>
                <div className={`w-12 h-6 flex items-center bg-surface-alt rounded-full p-1 cursor-pointer ${browserLanguageActive ? "bg-primary" : ""}`}
                    onClick={() => {
                        if (!isTargetingEnabled) return;
                        setBrowserLanguageActive(!browserLanguageActive);
                    }}
                    >
                    <div className={`bg-surface w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${browserLanguageActive ? "transform translate-x-6" : ""}`}
                    ></div>
                </div>
            </div>
            <div className="grid grid-cols-1 mb-6">
                <div className="grid grid-cols-1">
                    <button id="dropdownSearchButton" data-dropdown-toggle="dropdownSearch" data-dropdown-placement="bottom" className={`targeting-features-language-dropdown-${browserLanguageActive ? "active" : "disable"}`} onClick={() => { browserLanguageActive && setLanguageToggle(!languageToggle)}} type="button" disabled={!browserLanguageActive}>
                        <span>{t('generator.chooseCountry')}</span> <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>

                    <div id="dropdownSearch" className={`${languageToggle ? "block" : "hidden"} z-10 w-full bg-surface rounded shadow outline outline-border`} onMouseLeave={() => { browserLanguageActive && setLanguageToggle(!languageToggle)}}>
                        <ul className="overflow-y-auto h-48 text-sm text-text-secondary my-1" aria-labelledby="dropdownSearchButton">
                            <div className="relative">
                                <div className="flex items-center px-0 py-3 mx-1 rounded hover:bg-surface-alt border-b-2">
                                    <input id="default-checkbox" type="checkbox" className="ml-3 targeting-visitor-device-content-input accent-primary" onChange={handleSelectAll} checked={selectAllLanguages}/>
                                    <label htmlFor="default-checkbox" className="ml-1 text-sm font-normal text-text">{t('generator.allLanguages')}</label>
                                </div>
                            </div>
                            {
                                languages.map((language, index) => (
                                    <li key={index}>
                                        <div className="flex items-center px-0 py-3 mx-1 rounded hover:bg-surface-alt">
                                            <input key={language.code} id={language.code} type="checkbox" name={language.name} className="ml-3 targeting-visitor-device-content-input accent-primary" onChange={handleChange} checked={browserLanguage.includes(language.code)}/>
                                            <label className="ml-1 text-sm font-normal text-text">{language.name}</label>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="relative">
                            <div className="flex justify-between items-center px-0 py-1 mx-1 rounded">
                                <button className='border-none text-text text-sm font-medium hover:bg-surface-alt border-b-2 py-2 px-4 rounded-lg' onClick={handleClearAll}>{t('generator.clearAll')}</button>
                                <button className="text-sm font-normal text-text hover:bg-surface-alt border-b-2 py-2 px-4 rounded-lg" onClick={() => setLanguageToggle(false)}>{t('generator.close')}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index
