import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import 'dotenv/config'
import registerRouter from './routes/register'
import loginRouter from './routes/login'
import changePasswordRouter from './routes/changePassword'
import passport from 'passport'
import session from 'express-session'
import passportLocal from "passport-local";
import '../passportConfig'
import updateContentRouter from './routes/updateContent'
import fetchContentDataLoginRouter from './routes/fetchContentDataLoginRouter'
import getContentRouter from './routes/getContentRouter'

// ! logging in works and lastly, how do we add passport as middleware to check if user has unexpired access token and if expired then refresh if refresh token exists.

// ~ implement jwt and disable sessions


const app = express()
const port = process.env.PORT || 8080;

const defaultValues = { title: 'Hey', message: 'Portfolio CMS' }

app.use(cors())
app.use(express.json());
app.use(session({
  secret: process.env.MONGODB,
  resave: false,
  saveUninitialized: false,
}))
app.use(passport.initialize())
app.use(passport.session())

const LocalStrategy = passportLocal.Strategy;

// ===== Authentication passport strategy

app.use('/', registerRouter, loginRouter, changePasswordRouter,
  updateContentRouter, fetchContentDataLoginRouter, getContentRouter)


// * encrypt password with hash
// * make first time signup possible
// * authenticate password and username && if true, return data, and give access to modify content

mongoose.connect(process.env.MONGO_URI, {
  useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true
})

mongoose.connection
  .once('open', () => console.log('connection successful'))
  .on('error', (error) => console.log(error, 'connection successful'))

app.listen(port, () => console.log('server running', `running on http://localhost:${port}`))
