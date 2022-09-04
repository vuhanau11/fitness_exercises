import React, { useContext } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { Box, Typography } from '@mui/material'

import RightArrowIcon from '../assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/icons/left-arrow.png'
import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard'
import { Exercise } from '../types/exercise'

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext)

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  )
}

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext)

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  )
}

interface HorizontalScrollbarProps {
  data: Exercise[] | string[]
  isBodyPart: boolean
}

const HorizontalScrollbar = ({
  data,
  isBodyPart,
}: HorizontalScrollbarProps) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item: any, index: number) => (
        <Box key={index} title={item} m="0 40px">
          {isBodyPart ? (
            <BodyPart item={item} />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar
