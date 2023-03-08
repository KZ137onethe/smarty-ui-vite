const axios = require('axios')
exports.getData = () => {
  return axios.get('/abc/bcd')
}
