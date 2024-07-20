import React, { useEffect, useState } from 'react';
import Leaderboard from './components/Leaderboard';
import AddScorePopup from './components/AddScorePopup';
import { useDispatch, useSelector } from 'react-redux';
import { setInitialScores, addScore } from './redux/leaderboardSlice';
import { RootState } from './redux/store';
import scores from './assets/scores.json';
import Logo from '../Logo.svg';

const App: React.FC = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [highlightedScore, setHighlightedScore] = useState<number | null>(null);
  const dispatch = useDispatch();
  const scoresList = useSelector((state: RootState) => state.leaderboard.scores);

  useEffect(() => {
    dispatch(setInitialScores(scores));
  }, [dispatch]);

  const handleAddScore = (username: string, time: string) => {
    const newScore = { id: Date.now(), username, time };
    dispatch(addScore(newScore));
    setPopupOpen(false);
    setHighlightedScore(newScore.id);
    setTimeout(() => setHighlightedScore(null), 3000); // Remove highlight after 3 seconds
  };

  return (
    <div className="App">
      <div className="navbar">
        <div>
          <h3>GILLY'S</h3>
          <h4>Koramangala</h4>
        </div>
        <img src={Logo} alt="Logo" />
      </div>
      <div className="heading">
        <div className="orangediv">
          <div className="line orange"></div>
          <div className="line orange"></div>
          <div className="line orange"></div>
        </div>
        <h1>Fastest Of Today</h1>
        <div className="bluediv">
          <div className="line blue"></div>
          <div className="line blue"></div>
          <div className="line blue"></div>
        </div>
      </div>
      <Leaderboard highlightedScore={highlightedScore} />
      <button onClick={() => setPopupOpen(true)}>Add Score</button>
      {isPopupOpen && <AddScorePopup onAddScore={handleAddScore} onClose={() => setPopupOpen(false)} />}

      <footer>
        <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad laudantium iusto quasi incidunt excepturi labore dolorum. Magni nam aliquid autem exercitationem repellendus unde, doloribus esse aliquam, iure similique dolores corrupti!</h4>
      </footer>
    </div>
  );
};

export default App;
