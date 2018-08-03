const router = require('express').Router()
const axios = require('axios')
module.exports = router

// lists user information
router.get('/:username', async (req, res, next) => {
  try {
    const {username} = req.params
    const url = `https://api.github.com/users/${username}`
    const {data} = await axios.get(url)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

// lists repositories for a user
router.get('/:username/repos', async (req, res, next) => {
  try {
    const {username} = req.params
    const url = `https://api.github.com/users/${username}/repos`
    const {data} = await axios.get(url)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

// lists a user's followers
router.get('/:username/followers', async (req, res, next) => {
  try {
    const {username} = req.params
    const url = `https://api.github.com/users/${username}/followers`
    const {data} = await axios.get(url)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

// list who a user is following
router.get('/:username/following', async (req, res, next) => {
  try {
    const {username} = req.params
    const url = `https://api.github.com/users/${username}/following`
    const {data} = await axios.get(url)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

// list of repositories being starred by a user
router.get('/:username/starred', async (req, res, next) => {
  try {
    const {username} = req.params
    const url = `https://api.github.com/users/${username}/starred`
    const {data} = await axios.get(url)
    res.json(data)
  } catch (err) {
    next(err)
  }
})
