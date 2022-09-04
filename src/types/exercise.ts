export interface Exercise {
  bodyPart: string
  equipment: string
  gifUrl: string
  id: string
  name: string
  target: string
}

export interface ExerciseVideo {
  video: ExerciseVideoDetail
}

export interface ExerciseVideoDetail {
  channelId: string
  channelName: string
  description: string
  lengthText: string
  publishedTimeText: string
  thumbnails: Thumbnail[]
  title: string
  videoId: string
  viewCountText: string
}

export interface Thumbnail {
  height: number
  url: string
  width: number
}
