import { combineReducers } from '@reduxjs/toolkit'
import { enableMapSet } from 'immer'
import exerciseReducer from './exerciseSlice'

const rootReducer = combineReducers({
  exercise: exerciseReducer,
})

enableMapSet()

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
