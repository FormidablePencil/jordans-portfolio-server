import express from 'express'
const logout = express.Router()

logout.get('/logout', (req: any, res, next) => {
  req.logout()
})