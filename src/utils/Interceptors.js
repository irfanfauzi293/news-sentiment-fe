import axios from 'axios'
import { errorMessage } from '@/components/Message'

export default function setup() {
  axios.interceptors.request.use(
    function (config) {
      try {
        if (localStorage.getItem('user') !== null) {
          const token = JSON.parse(localStorage.getItem('user'))
          config.headers.token = token.tokenid
        }
        return config
      } catch (error) {
        console.log(error)
      }
    },
    function (err) {
      return Promise.reject(err)
    }
  )

  axios.interceptors.response.use(
    function (response) {
      return response
    },
    async function (error) {
      if (error && error.response && error.response.status === 401) {
        localStorage.removeItem('user')
        await errorMessage('Unauthorized', error.response.data.message)
        window.location.href = '/'
      } else {
        throw error
      }
    }
  )
}
