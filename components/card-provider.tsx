"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface Message {
  id: string
  content: string
  location: string
  imageUrl: string | null
  createdAt: string
}

interface CardContextType {
  cardId: string
  theme: string
  messages: Message[]
  addMessage: (message: Message) => void
}

const CardContext = createContext<CardContextType | null>(null)

export function CardProvider({ children, cardId }: { children: React.ReactNode; cardId: string }) {
  const [theme, setTheme] = useState<string>("")
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await fetch(`/api/cards/${cardId}`)
        if (!response.ok) throw new Error("Failed to fetch card data")
        const data = await response.json()
        setTheme(data.theme)
        setMessages(data.messages)
      } catch (error) {
        console.error("Error fetching card data:", error)
      }
    }

    fetchCardData()
  }, [cardId])

  const addMessage = (message: Message) => {
    setMessages((prevMessages) => [...prevMessages, message])
  }

  return <CardContext.Provider value={{ cardId, theme, messages, addMessage }}>{children}</CardContext.Provider>
}

export const useCard = () => {
  const context = useContext(CardContext)
  if (!context) {
    throw new Error("useCard must be used within a CardProvider")
  }
  return context
}

