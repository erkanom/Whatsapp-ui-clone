import { SearchOutlined } from '@material-ui/icons';
import React from 'react';

import './sidebar-searchbar.css'

function SidebarSearchbar(){

    return(
        <div class="sidebar-searchbar" >
            <div class="sidebar-searchbar-container">
                <SearchOutlined/>
                <input placeholder='Search' type='text'/>
            </div>
        </div>
    );

}

export default SidebarSearchbar;