import React from "react";
import style from "./skills.module.css";
import react from "../../../../images/react.png";
import js from "../../../../images/js.png";
import css from "../../../../images/css.png";
import bootstrap from "../../../../images/bootstrap.png";
import git from "../../../../images/git.png";
import ps from "../../../../images/ps.png";
import php from "../../../../images/php.png";
import int from "../../../../images/int.png";
import en from "../../../../images/en.png";
import ru from "../../../../images/ru.png";
import am from "../../../../images/am.png";
import Article from "../article/article";
import {Section} from "../section/section";

const Skills = () => {

    const skills = {
        title: "secondaryTitleSkills",
        box: [
            {
                boxImg: react,
                boxTitle: "reactTitle",
                boxText: "reactText"
            },
            {
                boxImg: js,
                boxTitle: "jsTitle",
                boxText: "jsText"
            },
            {
                boxImg: css,
                boxTitle: "cssTitle",
                boxText: "cssText",
            },
            {boxImg: bootstrap, boxTitle: "bootstrapTitle", boxText: "bootstrapText"}
        ],
    };
    const another = {
        title: "secondaryTitleAnother",
        box: [
            {boxImg: git, boxTitle: "gitTitle", boxText: "gitText"},
            {boxImg: ps, boxTitle: "psTitle", boxText: "psText"},
            {boxImg: php, boxTitle: "phpTitle", boxText: "phpText"},
            {boxImg: int, boxTitle: "intTitle", boxText: "intText"}
        ],
    };
    const languages = {
        title: "secondaryTitleLanguages",
        box: [
            {boxImg: en, boxTitle: "enTitle", boxText: "enText"},
            {boxImg: ru, boxTitle: "ruTitle", boxText: "ruText"},
            {boxImg: am, boxTitle: "amTitle", boxText: "amText"}
        ],
    };

    const firstChild = <Article state={skills}/>;
    const secondChild = <Article state={another} rightArticle={style.rightArticle} rightBlock={style.rightBlock}/>;
    const thirdChild = <Article state={languages} rightArticle={style.rightArticle} blockRow={style.blockRow}/>;

    return <Section firstChild={firstChild} secondChild={secondChild} thirdChild={thirdChild}/>
};

export default Skills;