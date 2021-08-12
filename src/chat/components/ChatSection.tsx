import React from "react";
import { Header } from "./blocks/Header";
import { ChatContentFl } from './blocks/ChatContentFl';
import { ChatContentWr } from './blocks/ChatContentWr';
import '../style/chatSection.scss';
import { useState } from "react";
import { connect } from 'react-redux';

let storage = localStorage;
let floodChat: string[] = [];
let workChat: string[] = [];

export function ChatSection(){


    let [chat, setChat] = useState('fl');
    let [message, setMessage] = useState('');

    let setChatFn = (event:any, val:string): any => {
        setChat(val);
    }
    let setMessageFn = (event: React.ChangeEvent <HTMLTextAreaElement>) => {
        let value = event.target.value;
        setMessage(value);
    }
    let submitMessageFn = (event: React.FormEvent <HTMLFormElement>) => {
        event.preventDefault();
        if(chat === 'fl' && message.length > 0){
            floodChat.push(message);
            setMessage('');
            storage['floodChat'] = JSON.stringify(floodChat);
        } else if(chat === 'wr' && message.length > 0){
            workChat.push(message);
            setMessage('');
            storage['workChat'] = JSON.stringify(workChat);
        }
        
    }


    return(
        <section className="chat-section forWrapper">
            <div className="wrapper">
                < Header text="Выйти" />
                <span className="star"></span>
                <div className="chat">
                    <div className="chat__tab">
                        <div className="chat__disc button" onClick={(event:any) => { setChatFn(event, 'fl')}} >Флуд</div>
                        <div className="chat__disc button" onClick={(event:any) => { setChatFn(event, 'wr')}} >Рабочий чат</div>
                    </div>
                    <div className="chat__wrapper">
                        {chat === 'fl' && < ChatContentFl /> }
                        {chat === 'wr' && < ChatContentWr /> }
                        <form action="" className="form__message" onSubmit={submitMessageFn}>
                            <textarea name="message" id="message" value={message} onChange={setMessageFn}/>
                            <input type="submit" value="" className="send" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
       
    )
}

export const ConnectChatSection = connect(
    null,
    null
  )(ChatSection);