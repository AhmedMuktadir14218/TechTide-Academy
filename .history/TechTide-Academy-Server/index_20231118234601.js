const express = require('express')
const app = express()
const port = <process className="env local"></process>

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})