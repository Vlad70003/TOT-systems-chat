import React from "react";
import { useState } from "react";
import '../../style/authForm.scss';
import '../../style/button.scss';
import { connect } from 'react-redux';
import { authenticate } from '../../../actions';

type typeProps = {
    title: string,
    authenticate: any,
}

export function AuthForm (props: typeProps) {

    let [email, setEmail] = useState('');
    let [pass, setPass] = useState('');
    let [nick, setNick] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(email !== '' && pass !== ''){
            props.authenticate( email, pass, nick);
        }
    }
    const changeEmail = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        let value = event.target.value;
        setEmail(email = value);
    }
    const changePass = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        let value = event.target.value;
        setPass(pass = value);
    }
    const changeNick = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        let value = event.target.value;
        setNick(nick = value);
    }
    

    return(
        props.title === "Войти" ? 
            <div className="auth-form" >
                <div className="title" >{props.title}</div>
                <form action="form" className="form" onSubmit={handleSubmit}>
                    <div className="form__wrapper">
                        <input type="email" name="email" id="input" placeholder="Введите электронную почту" onChange={changeEmail} value={email} />
                    </div>
                    <div className="form__wrapper">
                        <input type="password" name="password" id="input" placeholder="Введите пароль" onChange={changePass} value={pass} />
                    </div>
                    <div className="form__wrapper">
                        <input type="text" name="nickname" id="input" placeholder="Введите ник" onChange={changeNick} value={nick} />
                    </div>
                    <input type="submit" value="Войти" className="button" />
                </form>
            </div>
         : 
         <div className="auth-form" >
                <div className="title">{props.title}</div>
                <form action="form" className="form" onSubmit={handleSubmit}>
                    <div className="form__wrapper">
                        <input type="email" name="email" id="input" placeholder="Введите электронную почту" />
                    </div>
                    <div className="form__wrapper">
                        <input type="password" name="password" id="input" placeholder="Введите пароль" />
                    </div>
                    <div className="form__wrapper">
                        <input type="text" name="name" id="input" placeholder="Введите имя" />
                    </div>
                    <div className="form__wrapper">
                        <input type="text" name="lastName" id="input" placeholder="Введите фамилию" />
                    </div>
                    <input type="submit" value="Регистрация" className="button" />
                </form>
            </div>
    )
}

export const ConnectAuthForm = connect(
    null ,
    { authenticate }
)(AuthForm);