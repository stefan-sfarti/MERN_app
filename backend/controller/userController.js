const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const loginUser = (req, res) => {
    res.json({message: 'Login user'})
}

const registerUser = (req, res) => {
    res.json({message: 'Register user'})
}

const getMe = (req, res) => {
    res.json({message: 'User data'})
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}