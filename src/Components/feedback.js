import React from 'react';
import Review from './review';


function Feedback() {
    const [feedback, SetFeedback] = React.useState('');
    const [username, SetUsername] = React.useState('');
    
    const handlefeedback = (event) => {
        SetFeedback((feedback) => event.target.value);
    }
    
    const handleusername = (event) => {
        SetUsername((username) => event.target.value);
    }
  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea value={feedback} onChange=
          {handlefeedback}/>
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" value={username} onChange={handleusername} />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback = {feedback} student = {username}/>

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default Feedback;