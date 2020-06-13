import React, {useState} from "react";
import style from "./message.module.css";
import cn from "classnames";
import {Overlay, SecondaryTitle, Text} from "../../../smallComponents/smallComponents";

const Message = () => {
    const [isOpen, open] = useState(false);

    return <div className={style.messageBlock}>
        <div className={cn(style.message, isOpen && style.messageIsEmpty)} onClick={() => open(true)}>
            <span className={cn(style.messageText, style.openText)}>
                <Text tid={"messageOpen"}/>
            </span>
            <span className={cn(style.messageText, style.readText)}>
                <Text tid={"messageRead"}/>
            </span>
            <div className={cn(style.letter, isOpen && style.letterIsActive)}/>
        </div>
        <SecondaryTitle secondaryTitle={"secondaryTitleMessage"}/>
        {isOpen && <div className={style.modal}>
            <Overlay/>
            <div className={style.openLetter}>
                <Text tid={"message"}/>
            </div>
            <button className={style.btn} onClick={() => open(false)}>
                <Text tid={"messageClose"}/>
            </button>
        </div>}
    </div>
};

export default Message;