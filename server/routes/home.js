const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
  console.log('homepage')
  res.send('Books Homepage')
})

module.exports = router