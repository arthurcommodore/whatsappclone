import React, {useState, useEffect} from "react"
import  "./App.css"

import ChatListItem from "./components/ChatListItem"
import ChatIntro from "./components/ChatIntro"
import ChatWindow from "./components/ChatWindow"

import MoreVertIcon  from '@mui/icons-material/MoreVert';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';


export default () => {

  const [chatlist, setChatList] = useState([
    {chatId: 1, title: 'Fulano de Tal', avatar: './img/avatar.png'}
  ]);
  const [activeChat, setActiveChat] = useState({});

  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img className="header-avatar" src="./img/avatar.png"></img>
          <div className="header-buttons">
            <div className="header-btn">
              <DonutLargeIcon style={{color: "#919191"}}></DonutLargeIcon>
              <ChatIcon style={{color: "#919191"}}></ChatIcon>
              <MoreVertIcon style={{color: "#919191"}}></MoreVertIcon>
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search-input">
            <SearchIcon style={{color: "#919191"}}></SearchIcon>
            <input type="search" placeholder="Procurar ou comçar uma nova conversa"></input>
          </div>
        </div>

        <div className="chatlist">
          {
            chatlist.map((item, key) => {
              return <ChatListItem 
                key={key}
                data={item}
                active={activeChat.chatId === chatlist[key].chatId}
                onClick={() => setActiveChat(chatlist[key])}
              />
            })
          }
        </div>

      </div>
      <div className="contentarea">
        {activeChat.chatId !== undefined && 
          <ChatWindow></ChatWindow>
        }
        {activeChat.chatId === undefined &&
          <ChatIntro></ChatIntro>
        }
      </div>
    </div>
  )
}