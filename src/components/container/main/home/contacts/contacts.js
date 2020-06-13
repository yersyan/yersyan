import React from "react";
import "./contacts.css";
import {Text} from "../../../smallComponents/smallComponents";
import cn from "classnames";

const Contacts = () => {

    const contacts = [
        {name: "contactTelephone", address: "telephone"},
        {name: "contactEMail", address: "eMail"},
        {name: "contactTelegram", address: "telegram"},
        {name: "contactFacebook", address: "facebook"}
    ];

    return <div className="contacts">
        {contacts.map(c => {
            return <div className={cn("contact", c.address)}>
                <span>
                    <Text tid={c.name}/>
                </span>
            </div>
        })}
    </div>
};

export default Contacts;