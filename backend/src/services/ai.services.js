import {GoogleGenAI} from "@google/genai"

const ai = new GoogleGenAI({
    apiKey:process.env.GOOGLE_GENAI_API_KEY
})


export const invokeGemeniAi = async()=>{
    const response = await ai.models.generateContent({
        model:"gemini-2.5-flash",
        contents:"Hello Gemeni ! Explain what is interview ?"
    })

    console.log(response.text)
}