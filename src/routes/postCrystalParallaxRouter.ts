import express from 'express'
import CrystalParallaxModel from '../model/crystalParallaxModel'
import verifyCredentials from '../middleware/verifyCredentials'

const postCrystalParallaxRouter = express.Router()

postCrystalParallaxRouter.post('/crystal-parallax', verifyCredentials, async (req, res, next) => {
  const { rawCrystalData } = req.body

  if (!rawCrystalData)
    return res.status(400).send({ message: 'data not provided' })


  // if crystalData exists then replace with new else create new
  let crystalParallax: any = await CrystalParallaxModel.findOne()
  let newCrystalParallax
  
  if (!crystalParallax) {
    // create new data
    try {
      newCrystalParallax = new CrystalParallaxModel(rawCrystalData)
      newCrystalParallax.save()
      res.status(201).send({ message: 'crystalDataCreated' })
    } catch (error) {
      res.status(404).send({ message: error })
    }
  } else {
    try {
      //replace with new data
      crystalParallax.crystalParallaxBg = rawCrystalData.crystalParallaxBg
      crystalParallax.crystals = rawCrystalData.crystals
      crystalParallax.save()
      res.status(201).send({ message: 'saved' })
    } catch (error) {
      res.status(404).send({ message: error, sd: 'sd' })
    }
  }
  //   await crystalParallax.save()
  //   res.status(201).send({ message: 'crystalDataCreated' })
  // } catch (err) {
  //   res.status(404).send({ message: err })


  // try {
  //   await crystalParallax.save()
  //   res.status(201).send({ message: 'crystalDataCreated' })
  // } catch (err) {
  //   res.status(404).send({ message: err })
  // }
})

export default postCrystalParallaxRouter