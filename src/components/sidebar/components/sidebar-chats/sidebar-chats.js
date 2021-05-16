
import { Avatar } from '@material-ui/core';
import React from 'react';

import './sidebar-chats.css'

function SidebarChats(){

    return(
        <div class="sidebar-chats" >
            <Avatar/>
            <div class="sidebar-chats-info">
                <h2>Group Name</h2>
                <p>Last message</p>
            </div>
        </div>
    );

}

export default SidebarChats;