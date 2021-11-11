const express = require('express')
const router= express.Router()
const {ensureAuth, ensureGuest } = require('../middleware/auth')

//@desc Login/landing page
//@route GET /
router.get('/',ensureGuest,(req,res) => {
    res.render('login',{
        layout: 'login',
    })
})

//@desc Dashboard
//@route GET / dashboard
router.get('/dashboard',ensureAuth,(req,res) => {
    try{
        const stories= await.Story.find({user:req.user.id}).lean()
        res.render('dashboard',{
            name: req.user.firstName,
        })
    }catch (err){
        console.error(err)
        res.render('error/500')
    }
  //  console.log(req.user)
   
})
module.exports = router 