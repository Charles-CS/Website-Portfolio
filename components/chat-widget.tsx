"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Sparkles, Bot, ArrowRight } from "lucide-react"
import Image from "next/image"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  role: "assistant",
  content: "Hi there! 👋 I'm Charles's AI assistant. Feel free to ask me anything about his work, skills, or projects!",
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [hasNewMessage, setHasNewMessage] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
      setHasNewMessage(false)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen, messages])

  const sendMessage = async () => {
    const trimmed = input.trim()
    if (!trimmed || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: trimmed,
    }

    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      })

      if (!response.ok) throw new Error("API error")

      const data = await response.json()

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.content,
      }

      setMessages((prev) => [...prev, assistantMessage])
      if (!isOpen) setHasNewMessage(true)
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Sorry, I had trouble connecting. Please try again!",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Chat Panel */}
      <div
        className={`chat-widget-panel ${isOpen ? "chat-widget-panel--open" : ""}`}
        aria-hidden={!isOpen}
        role="dialog"
        aria-label="Chat with Charles's AI assistant"
      >
        {/* Header */}
        <div className="chat-widget-header">
          <div className="chat-widget-header-info">
            <div className="chat-widget-avatar-main">
              <Image 
                src="/img/profile/fb-pfp.jpg" 
                alt="Charles" 
                width={56} 
                height={56}
                className="object-cover"
              />
            </div>
            <div>
              <p className="chat-widget-name">Chat with Charles</p>
              <div className="chat-widget-status">
                <span className="chat-widget-status-dot" />
                <span>Online</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="chat-widget-close"
            aria-label="Close chat"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="chat-widget-messages" role="log" aria-live="polite">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`chat-widget-message-row ${msg.role === "user" ? "chat-widget-message-row--user" : ""}`}
            >
              <div className="chat-widget-bubble-container">
                {msg.role === "assistant" && (
                  <div className="chat-widget-sender-info">
                    <div className="chat-widget-bot-profile">
                      <Image 
                        src="/img/profile/fb-pfp.jpg" 
                        alt="AI" 
                        width={24} 
                        height={24}
                        className="object-cover"
                      />
                    </div>
                    <span className="chat-widget-sender-name">Charles Platon</span>
                  </div>
                )}
                <div
                  className={`chat-widget-bubble ${
                    msg.role === "user" ? "chat-widget-bubble--user" : "chat-widget-bubble--bot"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="chat-widget-message-row">
              <div className="chat-widget-bubble-container">
                <div className="chat-widget-sender-info">
                  <div className="chat-widget-bot-profile">
                    <Image 
                      src="/img/profile/fb-pfp.jpg" 
                      alt="AI" 
                      width={24} 
                      height={24}
                      className="object-cover"
                    />
                  </div>
                  <span className="chat-widget-sender-name">Charles Platon</span>
                </div>
                <div className="chat-widget-bubble chat-widget-bubble--bot chat-widget-typing">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="chat-widget-input-area">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything..."
            maxLength={1000}
            rows={1}
            className="chat-widget-input"
            aria-label="Chat message input"
            disabled={isLoading}
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || isLoading}
            className="chat-widget-send"
            aria-label="Send message"
          >
            <Send size={20} />
          </button>
        </div>
        <div className="chat-widget-footer">
          <span className="chat-widget-hint">Ask me about programming, web dev, or tech!</span>
          <span className="chat-widget-counter">{input.length}/1000</span>
        </div>
      </div>

      {/* FAB Trigger */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`chat-widget-fab ${isOpen ? "chat-widget-fab--open" : ""}`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
        {hasNewMessage && !isOpen && <span className="chat-widget-badge" />}
      </button>
    </>
  )
}
