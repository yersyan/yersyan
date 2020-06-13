import React from "react";
import Article from "../article/article";
import Message from "./message/message";
import {Section} from "../section/section";

const About = () => {
    const education = {
        title: "secondaryTitleEducation",
        box: [
            {boxDate: "2019 - 2020", boxTitle: "beeTitle", boxText: "beeText"},
            {boxDate: "2011 - 2012", boxTitle: "cTitle", boxText: "cText"},
            {boxDate: "2008 - 2010", boxTitle: "universityMTitle", boxText: "universityText"},
            {boxDate: "2004 - 2008", boxTitle: "universityTitle", boxText: "universityText"}
        ],
    };

    const firstChild = <Article state={education}/>;
    const secondChild =  <Message/>;

    return <Section firstChild={firstChild} secondChild={secondChild}/>
};

export default About;