import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface exerciseState {
  exercises: Record<string, unknown>
}

const initialState: exerciseState = {
  exercises: {},
}

export const exercise = createSlice({
  name: 'exercise',
  initialState,
  reducers: {
    setExercises: (state, action: PayloadAction<any>) => {
      state.exercises = action.payload
    },
  },
})

export const { setExercises } = exercise.actions

export default exercise.reducer
