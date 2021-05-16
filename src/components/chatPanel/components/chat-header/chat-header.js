import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import React from "react";
import "./chat-header.css";

function ChatHeader() {
  return (
    <div class="chat-header">
    <div class="chat-header-container">
      <Avatar />
      <div class="chat-header-info">
          <h3>Room name</h3>
          <p>Last seen 18.45</p>
      </div>
      <div class="chat-header-right">
          <IconButton><SearchOutlined/></IconButton>
          <IconButton><AttachFile/></IconButton>
          <IconButton><MoreVert/></IconButton>
      </div>
    </div>
    </div>
  );
}
export default ChatHeader;
