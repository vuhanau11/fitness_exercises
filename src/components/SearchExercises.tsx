import React, { useState, useEffect } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

import { getAllBodyParts, getAllExercises } from '../services/ExerciseService'
import { Exercise } from '../types/exercise'
import { useDispatch } from 'react-redux'
import { setExercises } from '../slices/exerciseSlice'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState<string>('')
  const [bodyParts, setBodyParts] = useState<string[]>([])

  const handleSearch = async () => {
    if (search) {
      try {
        const exercisesData = await getAllExercises()
        const searchedExercises = exercisesData.filter(
          (item: Exercise) =>
            item.name.toLowerCase().includes(search) ||
            item.target.toLowerCase().includes(search) ||
            item.equipment.toLowerCase().includes(search) ||
            item.bodyPart.toLowerCase().includes(search)
        )
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
        dispatch(setExercises(searchedExercises))
      } catch (err) {
        console.log(err)
      }
    }
  }

  const fetchBodyParts = async () => {
    try {
      const bodyPartsData = await getAllBodyParts()
      setBodyParts(['all', ...bodyPartsData])
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchBodyParts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb="49px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '1170px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
            height: '76px',
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '173px', xs: '80px' },
            height: '56px',
            position: 'absolute',
            right: '0px',
            fontSize: { lg: '20px', xs: '14px' },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} isBodyPart={true} />
      </Box>
    </Stack>
  )
}

export default SearchExercises
