import React from "react";
import { messages } from "../data";

function Messages() {
    const messageList = messages.map(message => {
        return (
            <li key={message.id} className={ `message ${message.type}` }>
                <div className="icon">{ message.name[0] }</div>
                <span className="content">{ message.content }</span>
            </li>
        )
    })
    return (
        <>
           <h2>Messages</h2>
            <section className="messages">
                <ul>
                    {messageList}
                </ul>
            </section>
        </>
    )
}

export default Messages;