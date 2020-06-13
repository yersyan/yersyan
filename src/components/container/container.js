import React from "react";
import style from "./container.module.css";
import {Header} from "./header/header";
import {Aside} from "./aside/aside";
import {Mask} from "./smallComponents/smallComponents";
import {Main} from "./main/main";

export const Container = () => {

    return <div className={style.container}>
        <Header/>
        <Aside/>
        <Main/>
        <Mask/>
    </div>
};
