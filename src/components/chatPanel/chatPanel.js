import React from 'react';
import './chatPanel.css'
import ChatBottom from './components/chat-bottom/chat-bottom';
import ChatBox from './components/chat-box/chat-box';
import ChatHeader from './components/chat-header/chat-header';

function ChatPanel(){
    return(
        <div class="chat-container">
            <ChatHeader/>
            <div class="chat-body"><ChatBox/></div>
            <div class="chat-bottom"><ChatBottom/></div>
        </div>
        
    );
}
export default ChatPanel;