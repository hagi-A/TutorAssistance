// const Webinar = require('../models/webinarModel')
// const mongoose = require('mongoose')

// // get all workouts
// const getWebinars = async (req, res) => {
//   const webinars = await Webinar.find({}).sort({createdAt: -1})

//   res.status(200).json(webinars)
// }

// // get a single workout
// const getWebinar = async (req, res) => {
//   const { id } = req.params

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({error: 'No such workout'})
//   }

//   const webinar = await Webinar.findById(id)

//   if (!webinar) {
//     return res.status(404).json({error: 'No such workout'})
//   }

//   res.status(200).json(webinar)
// }

// // create a new workout
// const createWebinar = async (req, res) => {
//   const {title, image, description, video} = req.body

//   // add to the database
//   try {
//     const webinar = await Webinar.create({ title, image, description, video})
//     res.status(200).json(webinar)
//   } catch (error) {
//     res.status(400).json({ error: error.message })
//   }
// }

// // delete a workout
// const deleteWebinar = async (req, res) => {
//   const { id } = req.params

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).json({error: 'No such workout'})
//   }

//   const webinar = await Webinar.findOneAndDelete({_id: id})

//   if(!webinar) {
//     return res.status(400).json({error: 'No such workout'})
//   }

//   res.status(200).json(webinar)
// }

// // update a workout
// const updateWebinar = async (req, res) => {
//   const { id } = req.params

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).json({error: 'No such workout'})
//   }

//   const webinar = await Webinar.findOneAndUpdate({_id: id}, {
//     ...req.body
//   })

//   if (!webinar) {
//     return res.status(400).json({error: 'No such workout'})
//   }

//   res.status(200).json(webinar)
// }


// module.exports = {
//   getWebinar,
//   getWebinars,
//   createWebinar,
//   deleteWebinar,
//   updateWebinar
// }