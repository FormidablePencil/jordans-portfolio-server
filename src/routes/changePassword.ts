import express from 'express'
import UserModel from '../model/auth'
import bcrypt from 'bcrypt'

const changePasswordRouter = express.Router()

changePasswordRouter.post("/forgotpassword", async (req, res) => {
  // if authenticated then modify database, else return 404
  const { username, password } = req.body
  const user: any = await UserModel.findOne({ username })
  if (!await bcrypt.compare(user.password, password)) return res.status(404).send("incorrect password")
  const encryptedPw = bcrypt.hash(password, 10)
  try {
    user.password = encryptedPw
    user.save()
  } catch (err) {
    res.status(404).send(err)
  }
})

export default changePasswordRouter