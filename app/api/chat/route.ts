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
- Mobile number: 09465473544
- Current focus on full-stack development, AI applications, and creative design
- Currently active in hackathons and tech events
- Open for opportunities: freelance, part-time, internships, or full-time roles


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

    // Format history for the direct API call (v1 stable)
    // Filter out initial welcome message
    let contents = messages
      .filter((msg: any) => msg.id !== "welcome")
      .map((msg: { role: string; content: string }) => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content }],
      }))

    // Prepend system prompt to the first user message for persona
    if (contents.length > 0) {
      const firstMsg = contents[0]
      if (firstMsg.role === "user") {
        firstMsg.parts[0].text = `[SYSTEM INSTRUCTION: ${SYSTEM_PROMPT}]\n\nUser: ${firstMsg.parts[0].text}`
      }
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: contents,
        }),
      }
    )

    if (!response.ok) {
      const errorData = await response.json()
      console.error("Direct API error:", errorData)
      throw new Error(errorData.error?.message || "Failed to fetch from Gemini API")
    }

    const data = await response.json()
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI."

    return NextResponse.json({ content: text })
  } catch (error: any) {
    console.error("Chat API error details:", error)
    return NextResponse.json(
      { error: error.message || "Failed to get response from AI" },
      { status: 500 }
    )
  }
}
