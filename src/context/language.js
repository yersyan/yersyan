import React from "react";
import { languageOptions, dictionaryList } from '../languages';
import {createContext, useContext, useState} from "react";

export const LanguageContext = createContext({
    language: languageOptions[0],
    dictionary: dictionaryList[languageOptions[0].id]
});

export function LanguageProvider(props) {
    const languageContext = useContext(LanguageContext);
    const [language, setLanguage] = useState(languageContext.language);
    const [dictionary, setDictionary] = useState(languageContext.dictionary);

    const provider = {
        language,
        dictionary,
        setLanguage: (selectedLanguage) => {
            setLanguage(selectedLanguage);
            setDictionary(dictionaryList[selectedLanguage.id]);
        }
    };

    return (
        <LanguageContext.Provider value={provider}>
            {props.children}
        </LanguageContext.Provider>
    );
};