import React from "react";
import style from "./home.module.css";
import Profile from "./profile/profile";
import {Section} from "../section/section";

export const Home = () => {

  const firstChild = <Profile/>;
  const secondChild = <div className={style.block}/>;

  return <Section firstChild={firstChild} secondChild={secondChild}/>
};