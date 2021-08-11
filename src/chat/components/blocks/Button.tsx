import React from "react";
import '../../style/button.scss';
import { connect } from 'react-redux';
import { logOut } from '../../../actions';

type typeText = {
    text: string,
    setAuthFunc: any,
    logOut: any,
}


export function Button (props: typeText){

    let setForm = ( val: string) => (event: any) => {
        if(val === 'Регистрация'){
            props.setAuthFunc('reg')
        } else if ( val === "Вход"){
            props.setAuthFunc('auth')
        } else if (val === "Выйти") {
            props.logOut();
        }
        
    }

    return(
        <button className="button" onClick={setForm(props.text)} >{props.text}</button>
    )
}

export const ConnectButton = connect(
    (state: {isLoggedIn: any}) => ({isLoggedIn: state.isLoggedIn}),
    { logOut }
  )(Button);