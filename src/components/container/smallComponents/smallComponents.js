import React, {useContext} from "react";
import style from "./smallComponents.module.css";
import {LanguageContext} from "../../../context/language";

export function Text(props) {
    const languageContext = useContext(LanguageContext);

    return languageContext.dictionary[props.tid];
}

export const Logo = () => {
    return <div className={style.logo}>
        <span>YS</span>
    </div>
};

export const Overlay = () => <div className={style.overlay}/>;

export const Img = ({src, name = null, className, alt}) => <img
    src={src}
    name={name}
    className={className}
    alt={alt}
/>;

export const Mask = () => <div className={style.mask}/>;

export const Title = ({firstChild, secondChild}) => <h1 className={style.title}>
    <Text tid={firstChild}/>
    <br/>
    <Text tid={secondChild}/>
</h1>;

export const SecondaryTitle = ({secondaryTitle}) => <h4 className={style.secondaryTitle}>
    <Text tid={secondaryTitle}/>
</h4>;
