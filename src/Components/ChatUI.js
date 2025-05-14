import React, { useState, useEffect, useRef } from 'react';
import './chatui.css';
import UserMsg from './UserMsg';
import { v4 as uuidv4 } from 'uuid';
import userchatimg from "../assets/images/man-user.svg";
import botimg from "../assets/images/Logo_wikibot.svg.png";

const BOT_MSGS = [
  'Hi, how are you?',
  "Ohh... I can't understand what you're trying to say. Sorry!",
  "I like to play games... But I don't know how to play!",
  'Sorry if my answers are not relevant. :))',
  'I feel sleepy! :(',
];

const BOT_IMG = botimg;
const PERSON_IMG = userchatimg;
const BOT_NAME = 'BOT';
const PERSON_NAME = 'User';

const initialChat = [
  {
    id: uuidv4(),
    name: BOT_NAME,
    img: BOT_IMG,
    position: 'left',
    msg: 'Hi, welcome to SimpleChat! Go ahead and send me a message. 😊',
  },
  {
    id: uuidv4(),
    name: PERSON_NAME,
    img: PERSON_IMG,
    position: 'right',
    msg: 'You can change your name in the JS section!',
  },
];

export default function ChatUI() {
  const [usermsg, setUserMsg] = useState('');
  const [conversations, setConversations] = useState(() => {
    const savedChats = localStorage.getItem('chat-conv');
    return savedChats ? JSON.parse(savedChats) : initialChat;
  });

  const msgerChatRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('chat-conv', JSON.stringify(conversations));
    if (msgerChatRef.current) {
      msgerChatRef.current.scrollTop = msgerChatRef.current.scrollHeight;
    }
  }, [conversations]); // Sync local storage when conversations update

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!usermsg.trim()) return;

    const newUserMsg = {
      id: uuidv4(),
      name: PERSON_NAME,
      img: PERSON_IMG,
      position: 'right',
      msg: usermsg,
    };

    setConversations((prev) => [...prev, newUserMsg]);
    setUserMsg('');

    botResponse();
  };

  const botResponse = () => {
    const randomMsg = BOT_MSGS[Math.floor(Math.random() * BOT_MSGS.length)];
    const delay = randomMsg.split(' ').length * 100;

    setTimeout(() => {
      setConversations((prev) => [
        ...prev,
        { id: uuidv4(), name: BOT_NAME, img: BOT_IMG, position: 'left', msg: randomMsg },
      ]);
    }, delay);
  };

  return (
    <section className="msger">
      <header className="msger-header">
        <div className="msger-header-title">
          <i className="fas fa-comment-alt"></i> SimpleChat
        </div>
        <div className="msger-header-options">
          <span>
            <i className="fas fa-cog"></i>
          </span>
        </div>
      </header>

      <main className="msger-chat" ref={msgerChatRef}>
        {conversations.map((msg) => (
          <UserMsg key={msg.id} side={msg.position} name={msg.name} image={msg.img} text={msg.msg} />
        ))}
      </main>

      <form className="msger-inputarea" onSubmit={handleSubmit}>
        <input
          type="text"
          className="msger-input"
          placeholder="Enter your message..."
          value={usermsg}
          onChange={(e) => setUserMsg(e.target.value)}
        />
        <button type="submit" className="msger-send-btn">
          Send
        </button>
      </form>
    </section>
  );
}