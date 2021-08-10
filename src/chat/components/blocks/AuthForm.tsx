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

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(email !== '' && pass !== ''){
            props.authenticate( email, pass);
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
                    <input type="submit" value="Войти" className="button" />
                </form>
            </div>
    )
}

export const ConnectAuthForm = connect(
    null ,
    { authenticate }
)(AuthForm);