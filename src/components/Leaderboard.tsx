import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { FaTrophy } from 'react-icons/fa';
import { AiOutlineClockCircle } from 'react-icons/ai'; // Icon for time

const Leaderboard: React.FC<{ highlightedScore: number | null }> = ({ highlightedScore }) => {
  const scores = useSelector((state: RootState) => state.leaderboard.scores);
  const highlightedRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    if (highlightedRef.current) {
      highlightedRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [highlightedScore]);

  return (
    <div className="leaderboard">
      {/* <h1>Leaderboard</h1> */}
      <div className="leaderboard-header">
        <div className="header-item">
          <FaTrophy />
          <span>Name</span>
        </div>
        <div className="header-item">
          <AiOutlineClockCircle />
          <span>Time</span>
        </div>
      </div>
      <ul>
        {scores.map((score, index) => (
          <li
            key={index}
            ref={highlightedScore === score.id ? highlightedRef : null}
            className={`leaderboard-item ${highlightedScore === score.id ? 'highlight' : ''}`}
          >
            <div className="item-name">
              <FaTrophy /> {score.username}
            </div>
            <div className="item-time">
              <AiOutlineClockCircle /> {score.time}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
