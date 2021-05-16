import React from "react";
import "./sidebar-header.css";
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from "@material-ui/core";
function SidebarHeader() {
  return (
    <div class="sidebar-header">
      <Avatar/>
      <div class="sidebar-header-icons">
          <IconButton><DonutLargeIcon/></IconButton>
          <IconButton><ChatIcon/></IconButton>
          <IconButton><MoreVertIcon/></IconButton>
          
      </div>
    </div>
  );
}

export default SidebarHeader;
