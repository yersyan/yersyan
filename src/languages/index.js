import en from "./en";
import ru from "./ru";
import am from "./am";
import enImg from "../images/en.png"
import ruImg from "../images/ru.png"
import amImg from "../images/am.png"

export const dictionaryList = {
    en,
    ru,
    am
};

export const languageOptions =  [
    {id: 'en', image: enImg, text: "English"},
    {id: 'ru', image: ruImg, text: "Russian"},
    {id: 'am', image: amImg, text: "Armenian"}
];
