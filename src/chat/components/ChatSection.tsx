import React from "react";
import { Header } from "./blocks/Header";
import '../style/chatSection.scss';

export function ChatSection(){

    return(
        <section className="chat-section forWrapper">
            <div className="wrapper">
                < Header text="Выйти" />
                <span className="star"></span>
                <div className="chat">
                    <div className="chat__tab">
                        <div className="chat__disc button">Флуд</div>
                        <div className="chat__disc button">Рабочий чат</div>
                    </div>
                    <div className="chat__wrapper">
                        <div className="chat__content">
                        
                        </div>
                        <form action="" className="form__message">
                            <textarea name="message" id="message" />
                            <input type="submit" value="" className="send" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
       
    )
}