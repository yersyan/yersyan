import React from "react";
import style from "./main.module.css";
import {Home} from "./home/home";
import {Redirect, Route, Switch} from "react-router";
import Skills from "./skills/skills";
import About from "./about/about";

export const Main = () => {
    return <main className={style.main}>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="home"/>}/>
            <Route path="/home" render={() => <Home/>}/>
            <Route path="/skills" render={() => <Skills/>}/>
            <Route path="/about" render={() => <About/>}/>
        </Switch>
    </main>
};
