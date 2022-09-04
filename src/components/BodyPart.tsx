import React from 'react'
import { Stack, Typography } from '@mui/material'

import Icon from '../assets/icons/gym.png'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedBodyPart } from '../slices/exerciseSlice'

interface BodyPartProps {
  item: string
}
const BodyPart = ({ item }: BodyPartProps) => {
  const dispatch = useDispatch()
  const selectedBodyPart = useSelector(
    (state: any) => state.exercise.selectedBodyPart
  )

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
        selectedBodyPart === item
          ? {
              borderTop: '4px solid #FF2625',
              background: '#fff',
              borderBottomLeftRadius: '20px',
              width: '270px',
              height: '282px',
              cursor: 'pointer',
              gap: '47px',
            }
          : {
              background: '#fff',
              borderBottomLeftRadius: '20px',
              width: '270px',
              height: '282px',
              cursor: 'pointer',
              gap: '47px',
            }
      }
      onClick={() => {
        dispatch(setSelectedBodyPart(item))
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
      }}
    >
      <img
        src={Icon}
        alt="dumbbell"
        style={{ width: '40px', height: '40px' }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  )
}

export default BodyPart
