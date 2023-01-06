const express = require('express')
const router = express.Router()
const {getTodo} = require('../controller/todoController')

router.get('/', getTodo)

router.post('/', (req, res) => {
    res.json({message: 'Set todo'})
})

router.put('/:id', (req, res) => {
    res.json({message: `Update todo ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
    res.json({message: `Delete todo ${req.params.id}`})
})

module.exports = router
