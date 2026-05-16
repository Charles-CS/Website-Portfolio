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
- Mobile number: 09465473544
- Current focus on full-stack development, AI applications, and creative design
- Currently active in hackathons and tech events
- Open for opportunities: freelance, part-time, internships
- I also love playing valorant, league of legends and more.
- I'm the developer of The "Lost Hospital", a 3D horror game made in unreal engine 5.
- I'm also the developer of the "Sonic Path", a game for person with dyslexia.
- I finished elementary from grade 1 - 6 in Saint Matthew Montessori and Science High School.
- I graduated from grade 7 - 10 in Saint Matthew Montessori and Science High School
- I graduated Senior High School (STEM) in Saint Matthew Montessori and Science High School
- I'm a 3rd year college student studying in Pamantasan ng Cabuyao taking bachelor of science in computer science.
- My recent hackathon was the DevKada CodeKada, where I was part of the team Anti-Titis.
- My recent onsite competiton was ACSS The Great Flavor Byte Computer Science Quiz Bee for all Computer,Science Students, where I was part of the team 3CS-A, and we are the champion.
- I love coding in light theme that's why they call me A psychopath? 💀
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
