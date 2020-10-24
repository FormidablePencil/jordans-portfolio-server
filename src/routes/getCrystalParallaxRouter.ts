import express from 'express'
import CrystalParallaxModel from '../model/crystalParallaxModel'
import verifyCredentials from '../middleware/verifyCredentials'

const getCrystalParallaxRouter = express.Router()

getCrystalParallaxRouter.get('/crystal-parallax', async (req, res, next) => {

  try {
    res.status(200).send(await CrystalParallaxModel.findOne())
  } catch (error) {
    res.status(404).send({ message: error })
  }
})

export default getCrystalParallaxRouter