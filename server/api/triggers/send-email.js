const http = require('http')
const url = require('url')

const triggerSendEmail = (event, value1, value2, value3) => {
  const iftttUrl = `https://maker.ifttt.com/trigger/${event}/with/key/${
    process.env.MAKER_WEBHOOK_KEY
  }`
  const emailData = JSON.stringify({value1, value2, value3})

  const parsedUrl = url.parse(iftttUrl)
  const postOptions = {
    hostname: parsedUrl.hostname,
    port: parsedUrl.port,
    path: parsedUrl.path,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': emailData.length
    }
  }

  // set up the request
  const postReq = http.request(postOptions, res => {
    res.setEncoding('utf8')
    res.on('data', chunk => {
      console.log('Response: ' + chunk)
    })
  })

  // trigger a POST to the url with the body.
  postReq.write(emailData)
  postReq.end()
}

module.exports = triggerSendEmail
