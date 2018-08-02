const router = require('express').Router()
const triggerSendEmail = require('./triggers/send-email')
module.exports = router

router.use('/users', require('./users'))

router.get('/test', (req, res, next) => {
  triggerSendEmail('test_event', 'please', 'work', 'hello')
  res.json({test: 'test'})
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
