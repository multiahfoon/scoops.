const express = require('express')

const db = require('../db/db')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  db.getOrders()
    .then((result) => {
      res.json(result)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

router.post('/', (req, res) => {
  db.postOrder()
    .then((result) => {
      res.json(result)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})
