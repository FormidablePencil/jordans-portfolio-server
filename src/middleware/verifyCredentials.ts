import { resInternalError } from "../constants"
import UserModel from "../model/auth"
import { incorrectCredentials } from "../constants"
import bcrypt from 'bcrypt'

const verifyCredentials = async (req, res, next) => {
  const { credentials } = req.body
  if (!credentials)
    return resInternalError(res)
  else if (!credentials.password || !credentials.username)
    return resInternalError(res, "Make sure you've entered in credentials")
  const user: any = await UserModel.findOne({ username: credentials.username })
  if (!user)
    return incorrectCredentials(res)
  await bcrypt.compare(credentials.password, user.password, (err, same) => {
    if (err)
      res.status(400).send(err)
    else if (!same)
      incorrectCredentials(res)
    else if (same)
      next()
  })
}

export default verifyCredentials