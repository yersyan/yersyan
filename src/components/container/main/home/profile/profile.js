import React from "react";
import style from "./profile.module.css";
import {SecondaryTitle, Text, Title} from "../../../smallComponents/smallComponents";
import Contacts from "../contacts/contacts";

const Profile = () => {

    return <div className={style.profile}>
        <div>
            <div className={style.description}>
                <SecondaryTitle secondaryTitle={"profileProfessionTitle"}/>
                <Text tid={"profileProfessionText"}/>
            </div>
            <Title firstChild={"profileFirstName"} secondChild={"profileLastName"}/>
        </div>
        <Contacts/>
    </div>
};

export default Profile;