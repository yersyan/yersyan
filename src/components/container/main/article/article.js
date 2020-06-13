import React from "react";
import style from "./article.module.css";
import cn from "classnames";
import {Box} from "./box/box";
import {SecondaryTitle} from "../../smallComponents/smallComponents";

const Article = ({state, rightArticle = null, rightBlock = null, blockRow = null}) => {

    const box = state.box.map(b => {
        return <Box key={b.boxTitle} boxImg={b.boxImg} boxDate={b.boxDate} boxTitle={b.boxTitle}
                    boxText={b.boxText} rightBoxRow={rightArticle ? "rightBoxRow" : "boxRow"}/>
    });

    return <article className={cn(rightArticle ? rightArticle : style.article)}>
        <SecondaryTitle secondaryTitle={state.title}/>
        <div className={cn(blockRow ? blockRow : (rightBlock ? rightBlock : style.block))}>
            {box}
        </div>
    </article>
};

export default Article;