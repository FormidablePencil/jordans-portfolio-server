import mongoose from 'mongoose'
import { crystalParallaxT } from '../types'

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


// crystalParallaxBg: {
//   backgroundColor: String,
//   backgroundImage: String,
//   bgImgX: String || Number,
//   bgImgY: String || Number,
// },
// crystals: {
//   mediaQueryWidth: String || Number,
//   key?: Number,
//   shardIndex: Number,
//   zIndex: Number,
//   crystalProps: {
//     feColorMatrixDx: String || Number,
//     feColorMatrixDy: String || Number,
//     feColorMatrixStdDeviation: String || Number,
//     edgesColor: String,
//     middleColor: String,
//     feColorMatrixBackdropColor: String || Number,
//     imageProps: {
//       image: String,
//       x: Number,
//       y: Number,
//       height: Number,
//       width: Number,
//     }
//   },
//   positionInParallaxCanvas: {
//     transform: {
//       scale: String || Number,
//       translateZ: String || Number,
//       rotateY: Boolean,
//       rotate: String
//     },
//     xYPosition: {
//       top: String || Number,
//       bottom: String || Number,
//       left: String || Number,
//       right: String || Number,
//     },
//   },
//   mediaQueries: [
//     {
//       mediaQueryWidth?: Number,
//       shardIndex?: Number,
//       zIndex?: Number,
//       crystalProps?: {
//         feColorMatrixDx?: String,
//         feColorMatrixDy?: String,
//         feColorMatrixStdDeviation?: String,
//         edgesColor?: String,
//         middleColor?: String,
//         feColorMatrixBackdropColor?: String,
//         imageProps?: {
//           image?: String,
//           x?: Number,
//           y?: Number,
//           height?: Number,
//           width?: Number,
//         }
//       },
//       positionInParallaxCanvas?: {
//         transform?: {
//           scale?: String || Number,
//           translateZ?: String || Number,
//           rotateY?: Boolean,
//           rotate?: String
//         },
//           xYPosition?: {
//             top?: String || Number,
//             bottom?: String || Number,
//             left?: String || Number,
//             right?: String || Number,
//           }
//       }
//     }
//   ]