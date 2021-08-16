import React from "react";
import { useState } from "react";
import '../../style/authForm.scss';
import '../../style/button.scss';
import { connect, useStore } from 'react-redux';
import { authenticate } from '../../../actions';
import { registration } from '../../../actions';

type typeProps = {
    title: string,
    authenticate: any,
    registration: any,
}

export function AuthForm (props: typeProps) {

    let [email, setEmail] = useState('');
    let [pass, setPass] = useState('');
    let [nick, setNick] = useState('');
    let [lastName, setLastName] = useState('');
    let [error, setError] = useState(false);

    const handleSubmitAuth = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(email !== '' && pass !== ''&&  nick !== ''){
            props.authenticate( email, pass, nick);
        } else{
            setError(error = true);
        }
    }
    const handleSubmitReg = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(email !== '' && pass !== ''&&  nick !== '' && lastName !== ''){
            props.registration( email, pass, nick, lastName);
        } else{
            setError(error = true);
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
    const changeLastName = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        let value = event.target.value;
        setLastName(lastName = value);
    }

    

    return(
        props.title === "Войти" ? 
            <div className="auth-form" >
                <div className="title" >{props.title}</div>
                <form action="form" className="form" onSubmit={handleSubmitAuth}>
                    <div className="form__wrapper">
                        {error ? 
                            <input type="email" name="email"  placeholder="Введите электронную почту" onChange={changeEmail} value={email} className="input error"/> : 
                            <input type="email" name="email" className="input" placeholder="Введите электронную почту" onChange={changeEmail} value={email} />
                        }
                    </div>
                    <div className="form__wrapper">
                        {error ? 
                            <input type="password" name="password" className="input error" placeholder="Введите пароль" onChange={changePass} value={pass} /> : 
                            <input type="password" name="password" className="input " placeholder="Введите пароль" onChange={changePass} value={pass} />
                        }
                        
                    </div>
                    <div className="form__wrapper">
                        {error ?
                            <input type="text" name="nickname" className="input error" placeholder="Введите ник" onChange={changeNick} value={nick} /> :
                            <input type="text" name="nickname" className="input" placeholder="Введите ник" onChange={changeNick} value={nick} />
                        }
                    </div>
                    <input type="submit" value="Войти" className="button" />
                </form>
            </div>
         : 
         <div className="auth-form" >
                <div className="title">{props.title}</div>
                <form action="form" className="form" onSubmit={handleSubmitReg}>
                    <div className="form__wrapper">
                        {error ? 
                            <input type="email" name="email" className="input error" placeholder="Введите электронную почту" onChange={changeEmail} value={email} /> :
                            <input type="email" name="email" className="input" placeholder="Введите электронную почту" onChange={changeEmail} value={email} />
                        }
                    </div>
                    <div className="form__wrapper">
                        {error ? 
                        <input type="password" name="password" className="input error" placeholder="Введите пароль" onChange={changePass} value={pass} /> :
                        <input type="password" name="password" className="input" placeholder="Введите пароль" onChange={changePass} value={pass} />
                        }
                        
                    </div>
                    <div className="form__wrapper">
                        {error ? 
                            <input type="text" name="name" className="input error" placeholder="Введите имя" onChange={changeNick} value={nick} /> :
                            <input type="text" name="name" className="input" placeholder="Введите имя" onChange={changeNick} value={nick} />
                        }
                    </div>
                    <div className="form__wrapper">
                        {error ? 
                        <input type="text" name="lastName" className="input error" placeholder="Введите фамилию" onChange={changeLastName} value={lastName} /> : 
                        <input type="text" name="lastName" className="input" placeholder="Введите фамилию" onChange={changeLastName} value={lastName} />
                        }
                        
                    </div>
                    <input type="submit" value="Регистрация" className="button" />
                </form>
            </div>
    )
}

export const ConnectAuthForm = connect(
    null ,
    { authenticate, registration }
)(AuthForm);