import React, { useState } from 'react';

interface AddScorePopupProps {
  onAddScore: (username: string, time: string) => void;
  onClose: () => void;
}

const AddScorePopup: React.FC<AddScorePopupProps> = ({ onAddScore, onClose }) => {
  const [username, setUsername] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddScore(username, time);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Add Score</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </label>
          <label>
            Time (MM:SS:MS):
            <input type="text" value={time} onChange={(e) => setTime(e.target.value)} required pattern="^\d{2}:\d{2}:\d{3}$" />
          </label>
          <button type="submit">Add</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default AddScorePopup;
