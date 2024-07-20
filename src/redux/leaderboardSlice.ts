import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Score {
  username: string;
  time: string; // MM:SS:MS format
}

interface LeaderboardState {
  scores: Score[];
}

const initialState: LeaderboardState = {
  scores: [],
};

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    addScore(state, action: PayloadAction<Score>) {
      state.scores.push(action.payload);
      state.scores.sort((a, b) => a.time.localeCompare(b.time));
    },
    setInitialScores(state, action: PayloadAction<Score[]>) {
      state.scores = action.payload.sort((a, b) => a.time.localeCompare(b.time));
    }
  },
});

export const { addScore, setInitialScores } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
