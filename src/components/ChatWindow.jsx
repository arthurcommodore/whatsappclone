import React from "react"
import "./ChatWindow.css"

import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';

export default () => {
    return (
        <div className="chatWindow">
            <div className="chatWindow-header">
                <div className="chatWindow-headerinfo">
                    <img className="chatWindow-avatar" src="./img/avatar.png" alt="" />
                    <div className="chatWindow-name">Fulano de Tal</div>
                </div>

                <div className="chatWindow-headerbuttons">
                    <div className="chatWindow-btn">
                        <SearchIcon style={{color: "#919191"}}/>
                    </div>
                    <div className="chatWindow-btn">
                        <AttachFileIcon style={{color: "#919191"}}/>
                    </div>    
                    <div className="chatWindow-btn">
                        <MoreVertIcon style={{color: "#919191"}}/>
                    </div> 
                </div>
            </div>

            
            <div className="chatWindow-body">

            </div>
            <div className="chatWindow-footer">
                <div className="chatWindow-pre">
                    <div className="chatWindow-btn">
                        <InsertEmoticonIcon style={{color: "#919191"}}/>
                    </div>
                </div>

                <div className="chatWindow-inputarea">
                    <input 
                    placeholder="Digite uma mensagem"
                    className="chatWindow-input" 
                    type="text" name="" id="" />
                </div>

                <div className="chatWindow-pos">
                    <div className="chatWindow-btn">
                        <SendIcon style={{color: "#919191"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}