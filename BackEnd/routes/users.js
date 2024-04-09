const express = require('express')
const { networkInterfaces } = require('os')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("User List")
})

router.get("/new", (req, res) => {
    res.send("User New Form")
})

router.post('/', (req, res) => {
    res.send('Create User')
})

router.route('/:id').get((req,res)=>{
    res.send(`get user ${req.params.id}`)
}).put((req,res)=>{
    res.send(`change user ${req.params.id}`)
}).delete((req,res)=>{
    res.send(`delete user ${req.params.id}`)
})

router.param("id", (req,res,next,id)=>{
    console.log(id);
    next()
})

module.exports = router