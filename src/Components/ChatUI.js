import React from "react";
import "./chatui.css";
import UserMsg from "./UserMsg";
import { v4 as uuidv4 } from "uuid";

export default function ChatUI() {
  const BOT_MSGS = [
    "Hi, how are you?",
    "Ohh... I can't understand what you trying to say. Sorry!",
    "I like to play games... But I don't know how to play!",
    "Sorry if my answers are not relevant. :))",
    "I feel sleepy! :(",
  ];

  // Icons made by Freepik from www.flaticon.com
  const BOT_IMG =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Logo_wikibot.svg/400px-Logo_wikibot.svg.png";
  const PERSON_IMG = "https://www.svgrepo.com/show/192244/man-user.svg";
  const BOT_NAME = "BOT";
  const PERSON_NAME = "User";

  const [usermsg, setUserMsg] = React.useState("");
  const [Conversations, setConversations] = React.useState([
    {
      id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
      name: BOT_NAME,
      img: BOT_IMG,
      position: "left",
      msg: "Hi, welcome to SimpleChat! Go ahead and send me a message. ðŸ˜„",
    },
    {
      id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
      name: PERSON_NAME,
      img: PERSON_IMG,
      position: "right",
      msg: "You can change your name in JS section!",
    },
  ]);
  const msgerChatRef = React.useRef(null);

  React.useEffect(() => {
    if (msgerChatRef.current) {
      msgerChatRef.current.scrollTop = msgerChatRef.current.scrollHeight;
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (!usermsg) return;
    setConversations((prevConversations) => [
      ...prevConversations,
      {
        id: uuidv4(),
        name: PERSON_NAME,
        img: PERSON_IMG,
        position: "right",
        msg: usermsg,
      },
    ]);

    setUserMsg("");

    botResponse();
  };

  const botResponse = () => {
    const r = random(0, BOT_MSGS.length - 1);
    const msgText = BOT_MSGS[r];
    const delay = msgText.split(" ").length * 100;

    setTimeout(() => {
      setConversations((prevConversations) => [
        ...prevConversations,
        {
          id: uuidv4(),
          name: BOT_NAME,
          img: BOT_IMG,
          position: "left",
          msg: msgText,
        },
      ]);
    }, delay);
  };

  // Utils

  function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

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
        {Conversations.map((t) => (
          <UserMsg
            key={t.id}
            side={t.position}
            name={t.name}
            image={t.img}
            text={t.msg}
          />
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
