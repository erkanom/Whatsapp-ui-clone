import React from "react";
import SidebarChats from "./components/sidebar-chats/sidebar-chats";
import SidebarHeader from "./components/sidebar-header/sidebar-header";
import SidebarSearchbar from "./components/sidebar-searchbar/sidebar-searchbar";
import "./sidebar.css";

function Sidebar() {
  return (
    <div class="sidebar">
      <SidebarHeader />
      <div class="sidebar-chats-container">
        <SidebarSearchbar />
        <SidebarChats />
        <SidebarChats />
      </div>
    </div>
  );
}

export default Sidebar;
