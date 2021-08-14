import React from "react";
import '../../style/chatContent.scss';
let storage = localStorage;

export function ChatContentFl(props: any) {

    let addMessage = (val: any, user: any) => {
        let valArr = JSON.parse(val);
        let userArr = JSON.parse(user);
        let returnElement = [];

        for(let i = 0; i < valArr.length; i++){
            returnElement.push(
                <div className="chat__message-user" >
                    <div className="chat__wrapper-user" >
                        <div className="user">{userArr !== null && userArr !== undefined && userArr[2]}</div>
                        <div className="corr-message">
                            <div className="eddit" ></div>
                            <div className="del"></div>
                        </div>
                    </div>
                    <div className="message">{valArr[i]['message']}</div>
                </div>
            )
        }
        return returnElement;
    }

    return(
        <div className="chat__content">
            <div className="chat__message-welcome">
                <div className="user">System:</div>
                <div className="message">Добро пожаловать в общий чат!</div>
            </div>
            {storage.getItem('floodChat') !== null && storage.getItem('floodChat') !== undefined && addMessage(storage.getItem('floodChat'), storage.getItem('userLogin'))} 
        </div>
    )
}
