"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useCard } from "./card-provider"

export function MessageForm() {
  const [content, setContent] = useState("")
  const [location, setLocation] = useState("")
  const [image, setImage] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { cardId, addMessage } = useCard()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      let imageUrl = null
      if (image) {
        const formData = new FormData()
        formData.append("file", image)
        const uploadRes = await fetch("/api/upload", { method: "POST", body: formData })
        if (!uploadRes.ok) throw new Error("Failed to upload image")
        const uploadData = await uploadRes.json()
        imageUrl = uploadData.url
      }

      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content, location, imageUrl, cardId }),
      })

      if (!res.ok) throw new Error("Failed to create message")

      const newMessage = await res.json()
      addMessage(newMessage)

      setContent("")
      setLocation("")
      setImage(null)
    } catch (error) {
      console.error("Error creating message:", error)
      // You might want to show an error message to the user here
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-md">
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4 p-6">
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <Textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Image
            </label>
            <Input id="image" type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Adding Message..." : "Add Message"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

