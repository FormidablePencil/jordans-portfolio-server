import express from 'express'
import bcrypt from "bcrypt";
import UserModel from '../model/auth';

const registerRouter = express.Router()

registerRouter.post('/register', async (req, res) => {
  const { username, password } = req.body
  const encryptedPassword = await bcrypt.hash(password, 10)
  const userExists = await UserModel.find()
  if (userExists.length !== 0) return res.status(400).send('userExists')
  const newUser = new UserModel({ username, password: encryptedPassword })
  try {
    await newUser.save()
    res.status(200).send()
  } catch (err) {
    res.status(404).send(err)
  }
})

export default registerRouter