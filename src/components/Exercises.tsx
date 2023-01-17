import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'

import ExerciseCard from './ExerciseCard'
import Loader from './Loader'
import { useDispatch, useSelector } from 'react-redux'
import { Exercise } from '../types/exercise'
import {
  getAllExercises,
  getExercisesForBodyPart,
} from '../services/ExerciseService'
import { setExercises } from '../slices/exerciseSlice'

const Exercises = () => {
  const dispatch = useDispatch()
  const selectedBodyPart = useSelector(
    (state: any) => state.exercise.selectedBodyPart
  )
  const exercises = useSelector((state: any) => state.exercise.exercises)

  const [currentPage, setCurrentPage] = useState(1)
  const [exercisesPerPage] = useState(6)

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData: Exercise[] = []

      if (selectedBodyPart === 'all') {
        exercisesData = await getAllExercises()
      } else {
        exercisesData = await getExercisesForBodyPart(selectedBodyPart)
      }

      dispatch(setExercises(exercisesData))
      setCurrentPage(1)
    }

    fetchExercisesData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBodyPart])

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  )

  const paginate = (_event: any, value: number) => {
    setCurrentPage(value)

    window.scrollTo({ top: 1800, behavior: 'smooth' })
  }

  if (!currentExercises.length) return <Loader />

  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb="46px"
      >
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: '107px', xs: '50px' } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise: Exercise, idx: number) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 6 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="medium"
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises
