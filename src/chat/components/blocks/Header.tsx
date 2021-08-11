import React from "react";
import logo from '../../img/logo.svg';
import { ConnectButton } from './Button';
import '../../style/header.scss';

type typeProps = {
    text: string,
    setAuthFunc?: any,
}

export function Header(props: typeProps){
    return(
        <header className="header">
            <div className="header__wrapper">
                <img src={logo} className="logotype" alt="Logotype" />
                <div className="desc">Chat</div>
            </div>
            < ConnectButton text={props.text} setAuthFunc={props.setAuthFunc}/>
        </header>
    )
}