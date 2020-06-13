import React from "react";
import style from "./aside.module.css";
import Languages from "./languages/languages";

export const Aside = () => {
    return <aside className={style.aside}>
            <Languages/>
        </aside>
};