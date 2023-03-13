import React from "react";
import { contacts } from "../data";

function Nav() {
    const contactList = contacts.map(contact => {
        return (
            <li key={contact.id} className="contact">
                <div className="icon">{ contact.name[0] }</div>
                { contact.name }
            </li>
        )
    })
    return (
        <nav>
            <h2>Contacts</h2>
            <ul className="contacts">
             {contactList}
            </ul>
        </nav>
    )
}

export default Nav;