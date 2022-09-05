import React, { useContext } from 'react'
import { Typography, Box, Stack } from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import Loader from './Loader'
import { ExerciseVideo } from '../types/exercise'
import RightArrowIcon from '../assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/icons/left-arrow.png'

interface ExerciseVideosProps {
  exerciseVideos: ExerciseVideo[]
  name: string
}

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

const ExerciseVideos = ({ exerciseVideos, name }: ExerciseVideosProps) => {
  if (!exerciseVideos.length) return <Loader />

  return (
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: '44px', xs: '25px' } }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Watch{' '}
        <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
          {name}
        </span>{' '}
        exercise videos
      </Typography>
      <Stack
        direction="row"
        sx={{
          flexDirection: { lg: 'row' },
          gap: { lg: '110px', xs: '0px' },
          p: 2,
          position: 'relative',
        }}
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
      >
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {exerciseVideos?.map((item: ExerciseVideo, index: number) => (
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <Box m="0 40px">
                <img
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                />
                <Typography
                  sx={{ fontSize: { lg: '20px', xs: '15px' } }}
                  fontWeight={600}
                  color="#000"
                >
                  {item.video.title}
                </Typography>
                <Typography fontSize="14px" color="#000">
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          ))}
        </ScrollMenu>
      </Stack>
    </Box>
  )
}

export default ExerciseVideos
