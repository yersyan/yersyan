import React, {useState} from "react";
import style from "./menu.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import cn from "classnames";
import {Overlay, Text} from "../../smallComponents/smallComponents";

const Menu = () => {
    const [isOpen, open] = useState(false);


    let menuState = [
        {to: "home", title: "menuHome"},
        {to: "skills", title: "menuSkills"},
        {to: "about", title: "menuAbout"}
    ];

    const menu = menuState.map(m => {
        return <li key={m} onClick={() => open(false)}>
            <NavLink to={m.to} className={style.menuLink} activeClassName={style.active}><Text tid={m.title}/></NavLink>
        </li>
    });

    return <div className={style.menu}>
        <div className={style.menuIcon}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} onClick={isOpen ? () => open(false) : () => open(true)}/>
        </div>
        <nav className={style.menuBody}>
            <ul className={style.menuList}>
                {menu}
            </ul>
        </nav>
        {isOpen && <nav className={style.dropDownMenuBody}>
            <ul className={cn(style.menuList, style.dropDownMenuList)}>
                <Overlay/>
                {menu}
            </ul>
        </nav>}
    </div>
};

export default Menu;
