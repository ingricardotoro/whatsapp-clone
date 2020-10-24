import React from 'react'
import { Avatar , IconButton} from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { SearchOutlined } from '@material-ui/icons'

import '../css/sidebar.css'

import SidebarChat from './SidebarChat'

function Sidebar() {

    return (
        <div className="sidebar">

            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>

                    <IconButton>
                        <ChatIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder="Search or start new chat" />
                </div>
            </div> 

            <div className="sidebar__chats">
                <SidebarChat addNewchat/>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat /> 
              
            </div>

        </div>

    )
}

export default Sidebar
