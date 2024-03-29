import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Detail from '../components/Detail'
import { Exercise } from '../types/exercise'
import ExerciseVideos from '../components/ExerciseVideos'
import {
  getEquipmentExercises,
  getExerciseDetail,
  getExerciseTargetMuscle,
  getExerciseVideoData,
} from '../services/ExerciseService'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState<Exercise | null>(null)
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState<
    Exercise[]
  >([])
  const [equipmentExercises, setEquipmentExercises] = useState<Exercise[]>([])
  const { id } = useParams()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })

    const fetchExercisesData = async () => {
      const exerciseDetailData = await getExerciseDetail(id as string)
      setExerciseDetail(exerciseDetailData)

      const exerciseVideosData = await getExerciseVideoData(
        exerciseDetailData.name
      )
      setExerciseVideos(exerciseVideosData.contents)

      const targetMuscleExercisesData = await getExerciseTargetMuscle(
        exerciseDetailData.target
      )
      setTargetMuscleExercises(targetMuscleExercisesData)

      const equipmentExercisesData = await getEquipmentExercises(
        exerciseDetailData.equipment
      )
      setEquipmentExercises(equipmentExercisesData)
    }

    fetchExercisesData()
  }, [id])

  if (!exerciseDetail) return <div>No Data</div>

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  )
}

export default ExerciseDetail
