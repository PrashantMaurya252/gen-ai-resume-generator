import express from 'express'
import { authUser } from '../middlewares/auth.js'
import upload from '../middlewares/file.middleware.js'
import { generateInterviewReportController } from '../controllers/interview.controller.js'

const interviewRouter = express.Router()


interviewRouter.post("/",authUser,upload.single('resume'),generateInterviewReportController)

export default interviewRouter