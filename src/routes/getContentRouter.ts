import express from 'express'
import ContentModel from '../model/content'
const getContentRouter = express.Router()

getContentRouter.get('/getcontentdata', async (req, res, next) => {
  res.status(200).send({ message: 'fuck yea' })
  // const data = await ContentModel.find()
  // if (data[0])
  //   res.status(200).send(data[0])
  // else
  //   res.sendStatus(500)
})

export default getContentRouter