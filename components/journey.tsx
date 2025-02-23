"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import Image from "next/image"
import { useCard } from "./card-provider"

export function Journey() {
  const { messages } = useCard()

  return (
    <div className="w-full max-w-3xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Card Journey</h2>
      <div className="relative">
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-primary/20" />
        <div className="space-y-8">
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center gap-8`}
            >
              <div className="flex-1">
                <Card>
                  <CardContent className="p-4">
                    {message.imageUrl && (
                      <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                        <Image
                          src={message.imageUrl || "/placeholder.svg"}
                          alt={message.location}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">{message.location}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{message.content}</p>
                        <p className="text-xs text-muted-foreground mt-2">
                          {new Date(message.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="w-4 h-4 rounded-full bg-primary relative z-10" />
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

