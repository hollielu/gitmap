const router = require('express').Router()
const axios = require('axios')
module.exports = router

// oAuth tokens
const id = process.env.GITHUB_CLIENT_ID
const secret = process.env.GITHUB_CLIENT_SECRET

// lists all user information
router.get('/:username', async (req, res, next) => {
  try {
    const {username} = req.params
    const url = `https://api.github.com/users/${username}?client_id=${id}&client_secret=${secret}`
    const {data} = await axios.get(url)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

// lists user location
router.get('/:username/location', async (req, res, next) => {
  try {
    const {username} = req.params
    const url = `https://api.github.com/users/${username}?client_id=${id}&client_secret=${secret}`
    const {data} = await axios.get(url)
    const location = data.location
    res.json(location)
  } catch (err) {
    next(err)
  }
})

// lists repositories for a user
router.get('/:username/repos', async (req, res, next) => {
  try {
    const {username} = req.params
    const url = `https://api.github.com/users/${username}/repos?client_id=${id}&client_secret=${secret}`
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
    const url = `https://api.github.com/users/${username}/followers?client_id=${id}&client_secret=${secret}`
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
    const url = `https://api.github.com/users/${username}/following?client_id=${id}&client_secret=${secret}`
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
    const url = `https://api.github.com/users/${username}/starred?client_id=${id}&client_secret=${secret}`
    const {data} = await axios.get(url)
    res.json(data)
  } catch (err) {
    next(err)
  }
})
