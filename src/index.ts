import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import 'dotenv/config'
import registerRouter from './routes/register'
import loginRouter from './routes/login'
import changePasswordRouter from './routes/changePassword'
import passport from 'passport'
import session from 'express-session'
import '../passportConfig'
import updateContentRouter from './routes/updateContent'
import fetchContentDataLoginRouter from './routes/fetchContentDataLoginRouter'
import getContentRouter from './routes/getContentRouter'
import postCrystalParallaxRouter from './routes/postCrystalParallaxRouter'
import getCrystalParallaxRouter from './routes/getCrystalParallaxRouter'

const app = express()
const port = process.env.PORT || 8080;

app.use(cors())
app.use(express.json());
app.use(session({
  secret: process.env.MONGO_URI,
  resave: false,
  saveUninitialized: false,
}))
app.use(passport.initialize())
app.use(passport.session())
app.use('/',
  registerRouter,
  loginRouter,
  changePasswordRouter,
  updateContentRouter,
  fetchContentDataLoginRouter,
  getContentRouter,
  postCrystalParallaxRouter,
  getCrystalParallaxRouter,
)

mongoose.connect(process.env.MONGO_URI, {
  useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true
})

mongoose.connection
  .once('open', () => console.log('connection successful'))
  .on('error', (error) => console.log(error, 'connection successful'))

app.listen(port, () => console.log('server running', `running on http://localhost:${port}`))
