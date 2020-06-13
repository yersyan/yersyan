import React from "react";
import style from "./section.module.css";

export const Section = ({firstChild, secondChild = null, thirdChild = null}) => {
    return <section className={style.sectionPage}>
        <div className={style.sectionRowBlock}>
            {firstChild}
            {secondChild}
        </div>
        {thirdChild}
    </section>
};
