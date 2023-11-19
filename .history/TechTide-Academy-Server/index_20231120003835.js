const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 8000

//middleware
app.use(cors());
app.use(express.json())

console.log(process.env.DB_USER)

// const uri = "mongodb+srv://<techTide>:<ATf9TgARhWydOm9A>@cluster0.mrejoa7.mongodb.net/?retryWrites=true&w=majority"
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mrejoa7.mongodb.net/?retryWrites=true&w=majority`
console.log(uri)

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
    const courseCollection = client.db('Courses').collection('courses');        
    
  
        // Use Aggregate to query multiple collection and then merge data
        app.get('/course', async (req, res) => {
          const date = req.query.date;
          const query = {};
          const options = await courseCollection.find(query).toArray();

         
          res.send(options);
      });
    

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})