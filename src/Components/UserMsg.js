import React from 'react';
import './chatui.css';

export default function UserMsg({ ...props }) {
  const formatDate = (date) => {
    const h = '0' + date.getHours();
    const m = '0' + date.getMinutes();

    return `${h.slice(-2)}:${m.slice(-2)}`;
  };

  return (
    <React.Fragment>
      <div className={`msg ${props.side}-msg`}>
        <div
          className="msg-img"
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>

        <div className="msg-bubble">
          <div className="msg-info">
            <div className="msg-info-name">{props.name}</div>
            <div className="msg-info-time">{formatDate(new Date())}</div>
          </div>

          <div className="msg-text">{props.text}</div>
        </div>
      </div>
    </React.Fragment>
  );
}
