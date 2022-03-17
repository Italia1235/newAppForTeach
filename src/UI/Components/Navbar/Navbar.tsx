import React from 'react';
import {NavLink} from "react-router-dom";
import {HOME_ROUTE, PUPILS_ROUTE, ADD_STUDENT} from "../../../Utils";
import s from './Navbar.module.css'
import people from '../../../Picture/student.png'
import home from '../../../Picture/home.png'
import man from '../../../Picture/man.png'
import theme from '../../../Picture/theme.png'
import notes from '../../../Picture/notes.png'


export const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div className={s.icons}>
                <img className={s.icon} src={home}/>
                <img className={s.icon} src={people}/>
                <img className={s.icon} src={man}/>
                <img className={s.icon} src={theme}/>
                <img className={s.icon} src={notes}/>
            </div>

            <div className={s.links}>
                <NavLink className={s.link} to={HOME_ROUTE}>
                    Главная страница
                </NavLink>

                <NavLink className={s.link} to={PUPILS_ROUTE}>
                    Ученики
                </NavLink>

                <NavLink className={s.link} to={ADD_STUDENT}>
                    Добавить ученика
                </NavLink>

                <NavLink className={s.link} to={ADD_STUDENT}>
                    Темы уроков
                </NavLink>

                <NavLink className={s.link} to={ADD_STUDENT}>
                    Заметки
                </NavLink>
            </div>


        </div>
    );
};

