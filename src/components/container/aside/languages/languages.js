import React from "react";
import "./languages.css"

import { languageOptions } from '../../../../languages/index';

import { LanguageContext } from '../../../../context/language';
import {useContext} from "react";

export default function Languages() {
    const languageContext = useContext(LanguageContext);

    const handleLanguageClick = (event) => {
        const selectedLanguage = languageOptions.find(item => item.id === event.target.name);
        languageContext.setLanguage(selectedLanguage);
    };

    return (
        <ul
            className="languagesMenu"
        >
            {languageOptions.map(item => (
                <li
                    key={item.id}
                    value={languageContext.language.id}
                >
                <img
                    onClick={handleLanguageClick}
                    src={item.image}
                    alt={item.text}
                    name={item.id}
                    className="langImg"
                />
                </li>
            ))}
        </ul>
    );
};