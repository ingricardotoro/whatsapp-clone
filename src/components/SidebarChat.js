import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import '../css/sidebarChat.css'

function SidebarChat({addNewchat}) {

    const [seed, setSeed] = useState('')

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
    }, [])

    const createChat = () =>{
        const roomName = prompt("Ingrese el nombre del chat")

        if(roomName){
            
        }
    }

    return !addNewchat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>Last message...</p>
            </div>
        </div>
    ):(
        <div onClick={createChat} className="sidebarChat">
            <h2>Crear Nuevo Chat</h2>
        </div>
    )

}

export default SidebarChat
