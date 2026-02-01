import React, { useState } from 'react';
import './App.css';

function App() {
  const [noButtonPosition, setNoButtonPosition] = useState({ top: '55%', left: '55%' });
  const [yesClicked, setYesClicked] = useState(false);

  const handleNoButtonMouseOver = () => {
    const newTop = Math.random() * 80 + 10 + '%';
    const newLeft = Math.random() * 80 + 10 + '%';
    setNoButtonPosition({ top: newTop, left: newLeft });
  };

  const handleYesButtonClick = () => {
    setYesClicked(true);
  };

  return (
    <div className="App">
      {yesClicked ? (
        <div className="success-message">
          <h1>Yayyy! I knew it ❤️</h1>
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDB6d2Q3a3J5Y293cHN6c3ZtZzB6ZzZqenY2c3d0c3d0c3d0YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7T dimerization/giphy.gif"
            alt="Romantic GIF"
          />
        </div>
      ) : (
        <div className="proposal-container">
          <h1>Will you be my girlfriend? 💖</h1>
          <div className="buttons">
            <button className="yes-button" onClick={handleYesButtonClick}>
              Yes 💕
            </button>
            <button
              className="no-button"
              style={{ top: noButtonPosition.top, left: noButtonPosition.left }}
              onMouseOver={handleNoButtonMouseOver}
              onClick={handleNoButtonMouseOver}
            >
              No 😜
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;