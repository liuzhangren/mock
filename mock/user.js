const Mock = require('mockjs');
const userData = require('./userData.json')
module.exports = {
  [`GET /api/users`](req,res){
    setTimeout(() => {
      res.json(userData)
    }, 5000);
  }
}