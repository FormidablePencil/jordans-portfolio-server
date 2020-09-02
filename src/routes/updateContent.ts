import express from 'express'
import ensureAuthenticated from '../middleware/authMiddleware';
import ContentModel from '../model/content';
import { resInternalError } from '../constants';
import verifyCredentials from '../middleware/verifyCredentials';

const updateContentRouter = express.Router()

// route is now protected
updateContentRouter.post("/updatecontent", verifyCredentials,
  async (req: any, res, next) => {
    const { data, credentials: { username } } = req.body
    if (!data)
      return resInternalError(res, 'Internal err. No data to change to')
    let content: any = await ContentModel.findOne({ username })
    if (content)
      content.data = data
    else
      content = new ContentModel({ username, data })
    try {
      await content.save()
      res.status(200).send({ message: 'Successfully updated' })
    } catch (err) {
      if (err)
        res.status(404).send(err)
    }
  })


export default updateContentRouter