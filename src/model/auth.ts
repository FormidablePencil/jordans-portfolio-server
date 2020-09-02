import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
})

const UserModel = mongoose.model('User', Schema)
export default UserModel