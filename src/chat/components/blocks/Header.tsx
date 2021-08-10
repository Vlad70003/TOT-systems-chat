import React from "react";
import logo from '../../img/logo.svg';
import { Button } from './Button';

type typeProps = {
    text: string,
    setAuthFunc: any,
}

export function Header(props: typeProps){
    return(
        <header className="header">
            <img src={logo} alt="Logotype" />
            < Button text={props.text} setAuthFunc={props.setAuthFunc}/>
        </header>
    )
}