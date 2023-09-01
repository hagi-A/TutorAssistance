const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  }, 
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['Admin', 'Parent', 'Student', 'Tutor', 'Supervisor'],
    required: true,
  },
})

// static signup method
userSchema.statics.signup = async function(username, email, birthdate, password, role) {

    // validation
  if  (!username || !email || !birthdate || !password) {
    throw Error('All fields must be filled')
  }

  if (!validator.isEmail(email)) {
    throw Error('Email is not valid')
  }

  if (!validator.isStrongPassword(password)) {
    throw Error('password not strong enough')
  }
  const exist = await this.findOne({ username })

  if (exist) {
    throw Error('username already in use')
  }
  const exists = await this.findOne({ email })

  if (exists) {
    throw Error('Email already in use')
  }

  const birthYear = new Date(birthdate).getFullYear();
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  if (age < 12) {
    throw Error('User is too young to register');
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({username, email, birthdate, age, password: hash })

  return user
}

//static login method

userSchema.statics.login = async function(username, email, password) {
    if  (!username || !email || !password) {
        throw Error('All fields must be filled')
      }
  
  const user = await this.findOne({ email })

  if (!user) {
    throw Error('Incorrect username and email')
  }

  const match = await bcrypt.compare(password, user.password)

  if (!match) {
    throw Error('incorect password')
  }

  return user
}

module.exports = mongoose.model('User', userSchema)