import { Exercise } from '../types/exercise'
import { http, youtubeHttp } from './BaseServise'

export const getAllExercises = async (): Promise<Exercise[]> => {
  return await http.get('/exercises')
}

export const getAllBodyParts = async (): Promise<string[]> => {
  return await http.get('/exercises/bodyPartList')
}

export const getExercisesForBodyPart = async (
  bodyPart: string
): Promise<Exercise[]> => {
  return await http.get(`/exercises/bodyPart/${bodyPart}`)
}

export const getExerciseDetail = async (id: string): Promise<any> => {
  return await http.get(`/exercises/exercise/${id}`)
}

export const getExerciseVideoData = async (name: string): Promise<any> => {
  return await youtubeHttp.get(`/search?query=${name}`)
}

export const getExerciseTargetMuscle = async (target: string): Promise<any> => {
  return await http.get(`/exercises/target/${target}`)
}

export const getEquimentExercises = async (equipment: string): Promise<any> => {
  return await http.get(`/exercises/equipment/${equipment}`)
}
