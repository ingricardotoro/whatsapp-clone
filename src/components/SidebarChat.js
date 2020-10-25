import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/sidebarChat.css'
import db from '../firebase'

function SidebarChat({id,name,addNewchat}) {

    const [seed, setSeed] = useState('')
    const [messages, setMessages] = useState("")

    useEffect(() => {
      if (id){
          db.collection('rooms').doc(id)
          .collection('messages')
          .orderBy('timestamp','desc')
          .onSnapshot( (snapshot) => 
            setMessages(snapshot.docs.map((doc) =>
                doc.data() ))
          );
      }
    }, [id]);

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
    }, []);

    const createChat = () =>{
        const roomName = prompt("Ingrese el nombre del chat")

        if(roomName){
            db.collection('rooms').add({
                name:roomName
            });
        }
    }

    return !addNewchat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
                <div className="sidebarChat__info">
                    <h2>{name} </h2>
                    <p>{messages[0]?.message} </p>
                </div>
            </div>
        </Link>
    ):(
        <div onClick={createChat} className="sidebarChat">
            <h2>Crear Nuevo Chat</h2>
        </div>
    )

}

export default SidebarChat
