import React from 'react';
import './chat.css';

export default function ChatWindow() {
  const [chatmsg, setChatMsg] = React.useState('');

  const openForm = () => {
    document.getElementById('myForm').style.display = 'block';
  };

  const closeForm = () => {
    document.getElementById('myForm').style.display = 'none';
  };

  const submitData = () => {
    console.log(chatmsg);
    setChatMsg('');
  };

  return (
    <React.Fragment>
      <button className="open-button" onClick={openForm}>
        Chat
      </button>

      <div className="chat-popup" id="myForm">
        <form className="form-container">
          <h1>Chat</h1>

          <label htmlFor="msg">
            <b>Message</b>
          </label>
          <textarea
            placeholder="Type message.."
            name="msg"
            required
            value={chatmsg}
            onChange={(e) => setChatMsg(e.target.value)}
          ></textarea>

          <button
            type="button"
            className="btn"
            onClick={submitData}
            disabled={chatmsg === ''}
          >
            Send
          </button>
          <button type="button" className="btn cancel" onClick={closeForm}>
            Close
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
