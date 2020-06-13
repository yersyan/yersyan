import React from "react";
import style from "./header.module.css";
import {Logo} from "../smallComponents/smallComponents";
import Menu from "./menu/menu";

export const Header = () => {
    return <header className={style.header}>
            <Logo/>
            <Menu/>
        </header>
};