import { InsertEmoticon, Mic } from "@material-ui/icons";
import React from "react";

import "./chat-bottom.css";

function ChatBottom() {
  return (
    <div class="chat-bottom">
      <InsertEmoticon />
      <form>
        <input placeholder="Type a message" type="text" />
        <button  type="submit"> Send</button>
      </form>
      <Mic/>
    </div>
  );
}

export default ChatBottom;
