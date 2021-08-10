import React from "react";
import { isPropertySignature } from "typescript";
import '../../style/button.scss';

type typeText = {
    text: string,
    setAuthFunc: any,
}


export function Button (props: typeText){

    let setForm = ( val: string) => (event: any) => {
        if(val === 'Регистрация'){
            props.setAuthFunc('reg')
        } else if ( val === "Вход"){
            props.setAuthFunc('auth')
        }
        
    }

    return(
        <button className="button" onClick={setForm(props.text)} >{props.text}</button>
    )
}