import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  goals: [
        {
            id: 1,
            title : 'Implement goals feature',
            description : 'Used redux for state managment',
            anchor : 'explore replishment',
            status: 'pending',
        },
        {
            id: 2,
            title : 'Implement goals feature',
            description : 'Used redux for state managment',
            anchor : 'explore replishment',
            status: 'pending',
        },
        {
            id: 3,
            title : 'Implement goals feature',
            description : 'Used redux for state managment',
            anchor : 'explore replishment',
            status: 'pending',
        },
        {
            id: 4,
            title : 'Implement goals feature',
            description : 'Used redux for state managment',
            anchor : 'explore replishment',
            status: 'pending',
        },
        {
            id: 5,
            title : 'Implement goals feature',
            description : 'Used redux for state managment',
            anchor : 'explore replishment',
            status: 'pending',
        },
        {
            id: 6,
            title : 'Implement goals feature',
            description : 'Used redux for state managment',
            anchor : 'explore replishment',
            status: 'pending',
        },
        {
            id: 7,
            title : 'Implement goals feature',
            description : 'Used redux for state managment',
            anchor : 'explore replishment',
            status: 'pending',
        },
        {
            id: 8,
            title : 'Implement goals feature',
            description : 'Used redux for state managment',
            anchor : 'explore replishment',
            status: 'pending',
        },
        {
            id: 9,
            title : 'Implement goals feature',
            description : 'Used redux for state managment',
            anchor : 'explore replishment',
            status: 'pending',
       },

    // Add more goals as needed
  ]
};

const goalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    toggleGoalStatus: (state, action) => {
      const { id , val } = action.payload;
      const goal = state.goals.find(goal => goal.id === id);
      if (goal) {
        goal.status = val; 
      }
    }
  }
});

export const { toggleGoalStatus } = goalsSlice.actions;
export default goalsSlice.reducer;
