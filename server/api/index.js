const router = require('express').Router()
const axios = require('axios')
module.exports = router

router.use('/users', require('./users'))
router.use('/repos', require('./repos'))

// oAuth tokens
const id = process.env.GITHUB_CLIENT_ID
const secret = process.env.GITHUB_CLIENT_SECRET

// every public repository, in the order that they were created
router.get('/repositories', async (req, res, next) => {
  try {
    const url = `https://api.github.com/repositories?client_id=${id}&client_secret=${secret}`
    const {data} = await axios.get(url)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
