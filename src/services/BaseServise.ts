import axios from 'axios'

const http = axios.create({
  baseURL: `${process.env.REACT_APP_API_END_POINT}`,
})

http.interceptors.request.use(
  (config) => {
    config.headers = config.headers || {}
    config.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
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

export { http }
