import React from "react";
import "./box.css";
import cn from "classnames";
import {Img, Text} from "../../../smallComponents/smallComponents";

export const Box = ({boxImg = null, boxDate = null, boxTitle, boxText, rightBoxRow}) => {
  return <div className={cn("box", boxDate && "boxColumn")}>
      <div className="boxImgBlock">
          {boxImg ? <Img src={boxImg} alt="" className="boxImg"/> : <span className="boxDate">{boxDate}</span>}
      </div>

      <div className={rightBoxRow} style={boxDate && {borderLeft: "none"}}>
          <h5 className="boxTitle">
              <Text tid={boxTitle}/>
          </h5>
          <p className="boxText">
              <Text tid={boxText}/>
          </p>
      </div>
  </div>
};
