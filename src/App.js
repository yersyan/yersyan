import React from "react";
import style from "./App.module.css";
import {Container} from "./components/container/container";
import {LanguageProvider} from "./context/language";

const App = () => {
    return <div className={style.App}>
        <LanguageProvider>
            <Container/>
        </LanguageProvider>
    </div>
};

export default App;
