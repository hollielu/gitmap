const router = require('express').Router()
const axios = require('axios')
module.exports = router

// oAuth tokens
const id = process.env.GITHUB_CLIENT_ID
const secret = process.env.GITHUB_CLIENT_SECRET

// lists all codes of conduct
router.get('/', async (req, res, next) => {
  try {
    const url = `https://api.github.com/codes_of_conduct?client_id=${id}&client_secret=${secret}`
    const {data} = await axios.get(url, {
      headers: {Accept: 'application/vnd.github.scarlet-witch-preview+json'}
    })
    res.json(data)
  } catch (err) {
    next(err)
  }
})
