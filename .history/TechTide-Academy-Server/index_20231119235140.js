const express = require('express')
const cors=require('cors')
const app = express()
const port = process.env.PORT || 5000

//middleware
app.use(cors());
app.use(express.json())



const uri = "mongodb+srv://ahmed1514218:<password>@cluster0.mrejoa7.mongodb.net/?retryWrites=true&w=majority";

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})