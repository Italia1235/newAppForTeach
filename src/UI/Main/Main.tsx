import React from 'react';
import {AppRoutes} from "../Routes";
import s from './Main.module.css'
import {Navbar} from "../Components/Navbar";
import {Header} from "../Components/Header";


export const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.header}><Header/></div>
            <div className={s.navbar}><Navbar/></div>
            <div className={s.content}><AppRoutes/> </div>
        </div>
    );
};

