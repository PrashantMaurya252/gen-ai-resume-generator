import  * as pdfParse from 'pdf-parse'
import { generateInterviewReport } from '../services/ai.services.js'
import interviewReportModal from '../models/interviewReport.model.js'

export const generateInterviewReportController = async(req,res)=>{
    try {
        const resumeFile = req.file
        const resumeContent = await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText()
        const {jobDescription,selfDescription} = req.body
        const interviewReportByAi = await generateInterviewReport({resume:resumeContent.text,selfDescription,jobDescription})
        const interviewReport = await interviewReportModal.create({
            user:req.user.id,
            resume:resumeContent.text,
            jobDescription,
            selfDescription,
            ...interviewReportByAi
        })
        return res.status(200).json({
            success:true,
            message:"Interview Report Generated Successfully",
            data:interviewReport,
            interviewReportByAi
        })
    } catch (error) {
        console.log("Generate Interview Report Controller Error",error)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}