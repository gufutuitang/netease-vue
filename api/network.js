import axios from 'axios'


axios.defaults.baseURL = 'http://127.0.0.1:3000/'
axios.defaults.tomeout = 5000

//封装get方法
export default {
  get: function (path = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios.get(path, {
        params: data
      }).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  post: function (path = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios.post(path, data).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  }
}