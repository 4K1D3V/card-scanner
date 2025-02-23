"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Gift, Heart, Clover, HeartPulse, TreePine, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"

const themes = [
  { id: "birthday", name: "Birthday", icon: Gift, color: "bg-pink-500" },
  { id: "valentine", name: "Valentine's Day", icon: Heart, color: "bg-red-500" },
  { id: "luck", name: "Good Luck", icon: Clover, color: "bg-green-500" },
  { id: "health", name: "Get Well Soon", icon: HeartPulse, color: "bg-blue-500" },
  { id: "christmas", name: "Christmas", icon: TreePine, color: "bg-emerald-500" },
  { id: "newyear", name: "New Year", icon: Sparkles, color: "bg-purple-500" },
]

export function ThemeWheel() {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null)
  const [isSpinning, setIsSpinning] = useState(false)
  const [isCreating, setIsCreating] = useState(false)
  const router = useRouter()

  const handleThemeSelect = (themeId: string) => {
    setIsSpinning(true)
    setTimeout(() => {
      setSelectedTheme(themeId)
      setIsSpinning(false)
    }, 2000)
  }

  const handleCreateCard = async () => {
    if (!selectedTheme) return

    setIsCreating(true)
    try {
      const response = await fetch("/api/cards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ theme: selectedTheme }),
      })

      if (!response.ok) throw new Error("Failed to create card")

      const card = await response.json()
      router.push(`/card/${card.id}`)
    } catch (error) {
      console.error("Error creating card:", error)
      // You might want to show an error message to the user here
    } finally {
      setIsCreating(false)
    }
  }

  return (
    <Card className="w-full max-w-md p-6 bg-background/95 backdrop-blur">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Choose Your Theme</h2>
        <p className="text-muted-foreground">Select a theme for your card experience</p>
      </div>

      <div className="relative aspect-square mb-6">
        <motion.div
          className="grid grid-cols-2 gap-4"
          animate={{ rotate: isSpinning ? 360 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          {themes.map((theme) => {
            const Icon = theme.icon
            return (
              <Button
                key={theme.id}
                variant={selectedTheme === theme.id ? "default" : "outline"}
                className={`h-24 ${selectedTheme === theme.id ? theme.color : ""}`}
                onClick={() => handleThemeSelect(theme.id)}
              >
                <div className="flex flex-col items-center gap-2">
                  <Icon className="w-6 h-6" />
                  <span className="text-sm">{theme.name}</span>
                </div>
              </Button>
            )
          })}
        </motion.div>
      </div>

      {selectedTheme && (
        <Button onClick={handleCreateCard} className="w-full" disabled={isCreating}>
          {isCreating ? "Creating..." : "Create Card"}
        </Button>
      )}
    </Card>
  )
}

