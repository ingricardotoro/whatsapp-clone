import { Avatar, Button, IconButton } from '@material-ui/core'
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons'
import  MicIcon  from '@material-ui/icons/Mic'
import  InsertEmoticonIcon  from '@material-ui/icons/InsertEmoticon'
import React, { useEffect, useState } from 'react'

import '../css/chat.css'

function Chat() {

    const [seed, setSeed] = useState("")
    const [input, setInput] = useState("")

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
    }, [])

    const sendMessage = (e) =>{
        e.preventDefault()
        console.log("You typed >>> " , input)
        setInput("")
    }

    return (
        <div className="chat">

            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last Seen at ....</p>
                </div>

                <div className="chat__heraderRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <div className={`chat__message ${ true &&  "chat__reciever"} `}>
                    <span className="chat__name">
                        Rick
                    </span>
                    Hello Wolrd
                    <span className="chat__timestamp">
                        3:30 pm
                    </span>
                </div>
                <div className="chat__message">
                    Hello Wolrd
                </div>
                <div className="chat__message">
                    Hello Wolrd
                </div>
                <div className="chat__message">
                    Hello Wolrd
                </div>
                <div className="chat__message">
                    Hello Wolrd
                </div>
                
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Escribe un mensaje" /> 
                    <Button type="submit" onClick={sendMessage} >Send</Button>
                </form>
                <MicIcon />
            </div>

        </div>
    )
}

export default Chat 
