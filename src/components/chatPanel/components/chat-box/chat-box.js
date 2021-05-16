import React from 'react';
import './chat-box.css'


function ChatBox(){
    return(
        <div class="chat-Box">
           <p class="chat-message">
               <span class="chat-name">Omer</span>

               This is a message
               <span class="chat-timestamp">{new Date().toUTCString()} </span>
            </p>
            <p class="chat-message">
               <span class="chat-name">Omer</span>

               This is a another Message
               <span class="chat-timestamp">{new Date().toUTCString()} </span>
            </p>
            <p class="chat-message chat-reciever">
               <span class="chat-name">Omer</span>

               This is a message
               <span class="chat-timestamp">{new Date().toUTCString()} </span>
            </p>
        </div>
        
    );
}
export default ChatBox;