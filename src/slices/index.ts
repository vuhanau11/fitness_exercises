import { combineReducers } from '@reduxjs/toolkit'
import { enableMapSet } from 'immer'
// import mapReducer from './mapSlice'

const rootReducer = combineReducers({
  // map: mapReducer,
})

enableMapSet()

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
