import React, { Dispatch } from "react";
import { Header } from "./blocks/Header";
import { ConnectAuthForm } from './blocks/AuthForm';
import { connect } from 'react-redux';
import { useState } from "react";

export function AuthSection() {

    let [auth, setAuth] = useState('auth');

    let setAuthFunc = (value: string):any => {
        setAuth(value);
    }
    
    return (
        <section className="authSection forWrapper">
            <div className="wrapper">
                {auth === 'auth' ? < Header  text="Регистрация" setAuthFunc={setAuthFunc}/> : < Header  text="Вход" setAuthFunc={setAuthFunc}/> }
                {auth === 'auth' ? < ConnectAuthForm title="Войти" /> : < ConnectAuthForm title="Регистрация" /> }
                <span className="star"></span>
            </div>
        </section>
    )
}

export const ConnectAuthSection = connect(
    null,
    null
)(AuthSection);