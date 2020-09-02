import express from 'express'
import UserModel from './src/model/auth'
import bcrypt from 'bcrypt'
import passport from 'passport'
import passportLocal from "passport-local";

const LocalStrategy = passportLocal.Strategy;

passport.use(new LocalStrategy((username, password, done) => {
  UserModel.findOne({ username }, (err, user: { username, password }) => {
    if (err) throw err
    if (!user) return done(null, false)
    bcrypt.compare(password, user.password, (error, result) => {
      if (error) throw error
      if (result === true) {
        return done(null, user)
      } else return done(null, false)
    })
  })
}))

passport.serializeUser((user, cb) => {
  cb(null, user.id)
}); // ~ creates cookie with user id and gives it to client

passport.deserializeUser((id, cb) => {
  console.log('id', id)
  UserModel.findOne({ _id: id }, (err, user: any) => {
    // const usernameInfo = {
    //   username: user.username
    // }
    // cb(err, usernameInfo)
    cb(err, user)
  })
}); // ~ takes cookie from client and tries to find info of the user assocaited to the cookie and sends "user" to client
// appearently cookies are taken care of in passport.
// in theory, the cookie is saved in the browser oppose to the application (react) itself.

export default passport
