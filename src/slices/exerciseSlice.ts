import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Exercise } from '../types/exercise'

interface exerciseState {
  exercises: Exercise[]
  selectedBodyPart: string
}

const initialState: exerciseState = {
  exercises: [],
  selectedBodyPart: 'all',
}

export const exercise = createSlice({
  name: 'exercise',
  initialState,
  reducers: {
    setExercises: (state, action: PayloadAction<Exercise[]>) => {
      state.exercises = action.payload
    },
    setSelectedBodyPart: (state, action: PayloadAction<string>) => {
      state.selectedBodyPart = action.payload
    },
  },
})

export const { setExercises, setSelectedBodyPart } = exercise.actions

export default exercise.reducer
