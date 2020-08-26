import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
const app = express()
const port = 8080

const defaultValues = { title: 'Hey', message: 'Portfolio CMS' }

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  console.log(req.body)

})

app.post("/authenticate", (req, res) => {
  // if authenticated then modify database, else return 404
  const { username, password } = req.body
  console.log(req.body)
})

app.post("/changepassword", (req, res) => {
  // if authenticated then modify database, else return 404
  const { username, password } = req.body
  console.log(req.body)
})

// * connect to mongodb
// * encrypt password with hash
// * make first time signup possible
// * authenticate password and username && if true, return data, and give access to modify content

mongoose.connect(process.env.MONGODB, {
  useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true
})

mongoose.connection
  .once('open', () => console.log('connection successful'))
  .on('error', (error) => console.log(error, 'connection successful'))


app.listen(port, () => console.log('server running', `running on localhost:${port}`))
