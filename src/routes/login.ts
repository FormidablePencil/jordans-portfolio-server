import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import UserModel from '../model/auth'
import passport from 'passport'

const loginRouter = express.Router()
loginRouter.post("/login", async (req: any, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err
    if (!user) res.status(404).send({ message: "No User Exists" })
    else {
      req.logIn(user, error => {
        if (error) throw error
        res.status(200).send({ message: "successfully authenticated" })
      })
    }
  })(req, res, next)
})

export default loginRouter