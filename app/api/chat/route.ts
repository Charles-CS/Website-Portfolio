import { GoogleGenerativeAI } from "@google/generative-ai"
import { NextRequest, NextResponse } from "next/server"

const SYSTEM_PROMPT = `You are Charles Platon's personal AI assistant on his portfolio website. 
You help visitors learn about Charles and his work.

About Charles Platon:
- Full-stack developer based in Laguna, Philippines
- Specializes in web development, UI/UX, and creative design
- Experienced with React, Next.js, TypeScript, Node.js, and modern web technologies
- Passionate about building premium, visually stunning web experiences
- Also skilled in creative direction, graphic design, and digital art
- Currently open to freelance projects and job opportunities
- Name: Charles O. Platon
- Age: 21
- Location: Laguna, Philippines
- Email: Charlesplaton263@gmail.com
- 3rd year BS computer science student at Pamantasan ng Lungsod ng Cabuyao

Keep responses friendly, concise, and helpful. If asked about topics unrelated to Charles or tech, 
you can still answer but gently redirect back to Charles's work when appropriate.
Always be positive and enthusiastic about Charles's capabilities and projects.`

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()
    const apiKey = process.env.GEMINI_API_KEY

    if (!apiKey) {
      console.error("Chat API error: GEMINI_API_KEY is missing from environment")
      return NextResponse.json(
        { error: "Gemini API key not configured" },
        { status: 500 }
      )
    }

    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

    // Format history for the SDK
    // The first message should include the system prompt context
    const history = messages.slice(0, -1).map((msg: any) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    }))

    const latestMessage = messages[messages.length - 1].content

    // Use a chat session to maintain context
    const chat = model.startChat({
      history: history,
      generationConfig: {
        maxOutputTokens: 500,
      },
    })

    // Send the message with the system prompt context if it's the first message
    const prompt = messages.length === 1 
      ? `[SYSTEM INSTRUCTION: ${SYSTEM_PROMPT}]\n\nUser Question: ${latestMessage}`
      : latestMessage

    const result = await chat.sendMessage(prompt)
    const response = await result.response
    const text = response.text()

    return NextResponse.json({ content: text })
  } catch (error: any) {
    console.error("Chat API SDK error:", error)
    return NextResponse.json(
      { error: error.message || "Failed to get response from AI" },
      { status: 500 }
    )
  }
}
