const express = require('express')
const app = express()
const port = process.env.PORT || 5000

//middleware
app.use(cors())


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ahmed1514218:<password>@cluster0.mrejoa7.mongodb.net/?retryWrites=true&w=majority";

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})