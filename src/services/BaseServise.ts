import axios from 'axios'

const http = axios.create({
  baseURL: `${process.env.REACT_APP_API_END_POINT}`,
})
const youtubeHttp = axios.create({
  baseURL: `${process.env.REACT_APP_API_YOUTUBE_END_POINT}`,
})

http.interceptors.request.use(
  (config) => {
    config.headers = config.headers || {}
    config.headers = {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY as string,
    }
    return config
  },
  (error) => Promise.reject(error)
)

http.interceptors.response.use(
  (response) => {
    if (response.data) {
      return response.data.results ? response.data.results : response.data
    }
    return response
  },
  (error) => {
    const err = error?.response?.data || error
    return Promise.reject(err)
  }
)

youtubeHttp.interceptors.request.use(
  (config) => {
    config.headers = config.headers || {}
    config.headers = {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY as string,
    }
    return config
  },
  (error) => Promise.reject(error)
)

youtubeHttp.interceptors.response.use(
  (response) => {
    if (response.data) {
      return response.data.results ? response.data.results : response.data
    }
    return response
  },
  (error) => {
    const err = error?.response?.data || error
    return Promise.reject(err)
  }
)

export { http, youtubeHttp }
