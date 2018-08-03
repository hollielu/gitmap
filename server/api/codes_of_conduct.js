const router = require('express').Router()
const axios = require('axios')
module.exports = router

// lists all codes of conduct
router.get('/', async (req, res, next) => {
  try {
    const url = `https://api.github.com/codes_of_conduct`
    const {data} = await axios.get(url, {
      headers: {Accept: 'application/vnd.github.scarlet-witch-preview+json'}
    })
    res.json(data)
  } catch (err) {
    next(err)
  }
})
