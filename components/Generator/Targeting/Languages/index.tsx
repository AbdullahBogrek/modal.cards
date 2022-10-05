import { useEffect, useState } from 'react'
import { useLanguageContext } from "../../../../contexts/LanguageContext";
import { useModalContext } from "../../../../contexts/ModalContext";
import { useModal1Context } from "../../../../contexts/Modal1Context";

import languages from "./languages.json"

const index = () => {
    const [selectAllLanguages, setSelectAllLanguages] = useState<boolean>(false)

    const { languageToggle, setLanguageToggle, languageSwitch, setLanguageSwitch } = useLanguageContext()
    const { targeting } = useModalContext()
    const { browserLanguage, setBrowserLanguage } = useModal1Context();

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
 
    useEffect(() => {console.log(browserLanguage)}, [browserLanguage])

    return (
        <>
            <div className="targeting-features">
                <h6 className='targeting-feature-title'>Browser Language</h6>
                <div className={`w-12 h-6 flex items-center bg-[#F5F5F5] rounded-full p-1 cursor-pointer ${languageSwitch ? "bg-[#7D4AEA]" : ""}`}
                    onClick={() => { targeting && setLanguageSwitch(!languageSwitch)}}
                    >
                    {/* Switch */}
                    <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${languageSwitch ? "transform translate-x-6" : ""}`}
                    ></div>
                </div>
            </div>
            <div className="grid grid-cols-1 mb-6">
                <div className="grid grid-cols-1">                    
                    <button id="dropdownSearchButton" data-dropdown-toggle="dropdownSearch" data-dropdown-placement="bottom" className={`targeting-features-language-dropdown-${languageSwitch ? "active" : "disable"}`} onClick={() => { languageSwitch && setLanguageToggle(!languageToggle)}} type="button" disabled={!languageSwitch}>
                        <span>Choose a country</span> <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>

                    <div id="dropdownSearch" className={`${languageToggle ? "block" : "hidden"} z-10 w-full bg-white rounded shadow outline outline-[#DDDDDD]`} onMouseLeave={() => { languageSwitch && setLanguageToggle(!languageToggle)}}>
                        <ul className="overflow-y-auto h-48 text-sm text-gray-700 my-1" aria-labelledby="dropdownSearchButton">
                            <div className="relative">
                                <div className="flex items-center px-0 py-3 mx-1 rounded hover:bg-[#e9e8e8] border-b-2">
                                    <input id="default-checkbox" type="checkbox" className="ml-3 targeting-visitor-device-content-input accent-[#b99df3]" onChange={handleSelectAll} checked={selectAllLanguages}/>
                                    <label htmlFor="default-checkbox" className="ml-1 text-sm font-normal text-black ">All Languages</label>
                                </div>
                            </div>
                            {
                                languages.map((language, index) => (
                                    <li key={index}>
                                        <div className="flex items-center px-0 py-3 mx-1 rounded hover:bg-[#e9e8e8]">
                                            <input key={language.code} id={language.code} type="checkbox" name={language.name} className="ml-3 targeting-visitor-device-content-input accent-[#7D4AEA]" onChange={handleChange} checked={browserLanguage.includes(language.code)}/>
                                            <label className="ml-1 text-sm font-normal text-black ">{language.name}</label>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="relative">
                            <div className="flex justify-between items-center px-0 py-1 mx-1 rounded">
                                <button className='border-none text-black text-sm font-medium hover:bg-[#e9e8e8] border-b-2 py-2 px-4 rounded-lg' onClick={handleClearAll}>Clear All</button>
                                <button className="text-sm font-normal text-black hover:bg-[#e9e8e8] border-b-2 py-2 px-4 rounded-lg" onClick={() => setLanguageToggle(false)}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index