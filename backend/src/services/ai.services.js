import {GoogleGenAI} from "@google/genai"
import {z} from "zod"
import {zodToJsonSchema} from "zod-to-json-schema"

const ai = new GoogleGenAI({
    apiKey:process.env.GOOGLE_GENAI_API_KEY
})

const interviewReportSchema = z.object({
    matchScore:z.number().description("A score between 0 to 100 indicating how well candidate profile matching the job description"),
    technicalQuestions:z.array(z.object({
        question:z.string().description("Question can be asked in interview"),
        intention:z.string().description("Intention behind the question"),
        answer:z.string().description("How to answer this question,What should be approach, what points should be cover")
    })).description("Technical questions tha can be asked in the interview along with their intention and answer"),
    behavioralQuestions:z.array(z.object({
        question:z.string().description("Question can be asked in interview"),
        intention:z.string().description("Intention behind the question"),
        answer:z.string().description("How to answer this question,What should be approach, what points should be cover")
    })).description("Behaviral questions tha can be asked in the interview along with their intention and answer"),
    skillGaps:z.array(z.object({
        skill:z.string().description("Skill in which candidate is lacking"),
        severity:z.string().description("The severity of skill gap i.e low,medium,high")
    })).description("List of skills gap of candidate along with their severity"),
    preparationPlan:z.array(z.object({
        day:z.number().description("The day number in preparation plan, starting from 1"),
        focus:z.string().description("the main focus of the day in the preparation plan"),
        task:z.string().description("List of tasks to be done on this day")
    })).description("A day wise preparation plan to follow by candidate")
})
const generateInterviewReport = async({resume,selfDescription,jobDescription})=>{

    const prompt = `Generate an interview report for a candidate with following details:
    Resume:${resume}
    SelfDescription:${selfDescription}
    JobDescription:${jobDescription}
    `
    try {
        const response = await ai.models.generateContent({
        model:"gemini-3-flash-preview",
        contents:prompt,
        config:{
            responseMimeType:"application/json",
            responseSchema:zodToJsonSchema(interviewReportSchema)
        }
    })
    return JSON.parse(response.text)
    } catch (error) {
        console.log("generate Interview Report function error",error)
    }
}

export const invokeGemeniAi = async()=>{
    const response = await ai.models.generateContent({
        model:"gemini-2.5-flash",
        contents:"Hello Gemeni ! Explain what is interview ?"
    })

    console.log(response.text)
}