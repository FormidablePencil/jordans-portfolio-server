import express from 'express'
import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
  userame: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  }
})

const authModal = mongoose.model('auth', Schema)
export default authModal