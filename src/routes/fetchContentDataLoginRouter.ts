import express from 'express'
import verifyCredentials from '../middleware/verifyCredentials'
import ContentModel from '../model/content'

const fetchContentDataLoginRouter = express.Router()

fetchContentDataLoginRouter.post('/contentdatalogin', verifyCredentials, async (req, res, next) => {
  const username = req.body.credentials.username
  ContentModel.findOne({ username }, (err, data) => {
    if (err)
      res.status(200).send({ message: 'No content under username' })
    else if (data)
      res.status(200).send(data)
  })
})

export default fetchContentDataLoginRouter