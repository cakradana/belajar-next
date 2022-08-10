const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  
  const server = express()

  server.use(express.json())

  server.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    // console.log(email, password)
    res.json({
      email,
      password,
      succsess: true
    })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})