import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
  crystalParallaxBg: {
    type: Object,
    required: true
  },
  crystals: {
    type: Array,
    required: true
  }
})


const CrystalParallaxModel = mongoose.model('CrystalParallaxProps', Schema)
export default CrystalParallaxModel