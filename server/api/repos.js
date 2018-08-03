const router = require('express').Router()
const axios = require('axios')
module.exports = router

// oAuth tokens
const id = process.env.GITHUB_CLIENT_ID
const secret = process.env.GITHUB_CLIENT_SECRET

// lists specific repo of a user
router.get('/:owner/:repo', async (req, res, next) => {
  try {
    const {owner, repo} = req.params
    const url = `https://api.github.com/users/${owner}/${repo}?client_id=${id}&client_secret=${secret}`
    const {data} = await axios.get(url)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

// lists contributors to the repository
router.get('/:owner/:repo/contributors', async (req, res, next) => {
  try {
    const {owner, repo} = req.params
    const url = `https://api.github.com/repos/${owner}/${repo}/contributors?client_id=${id}&client_secret=${secret}`
    const {data} = await axios.get(url)
    const contributors = data.map(obj => obj.login)
    res.json(contributors)
  } catch (err) {
    next(err)
  }
})

// lists coding languages in the repository
router.get('/:owner/:repo/languages', async (req, res, next) => {
  try {
    const {owner, repo} = req.params
    const url = `https://api.github.com/repos/${owner}/${repo}/languages?client_id=${id}&client_secret=${secret}`
    const {data} = await axios.get(url)
    res.json(data)
  } catch (err) {
    next(err)
  }
})
