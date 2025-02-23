"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Camera, Share2, Link } from "lucide-react"

const steps = [
  {
    title: "Upload Your Message",
    description: "Share your thoughts and upload a photo to create a lasting memory.",
    icon: Camera,
  },
  {
    title: "Pass It On",
    description: "Share the card with others so they can add their own messages and photos.",
    icon: Share2,
  },
  {
    title: "Save For Later",
    description: "Store the QR code or link to revisit these memories anytime.",
    icon: Link,
  },
]

export default function FirstTimeGuide() {
  const [open, setOpen] = useState(true)
  const [currentStep, setCurrentStep] = useState(0)

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setOpen(false)
    }
  }

  const CurrentIcon = steps[currentStep]?.icon

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Welcome to CardCrafters!</DialogTitle>
          <DialogDescription>Let's walk through how to use your interactive greeting card</DialogDescription>
        </DialogHeader>

        <div className="py-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              {CurrentIcon && <CurrentIcon className="w-6 h-6 text-primary" />}
            </div>
            <div>
              <h3 className="font-semibold">{steps[currentStep]?.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{steps[currentStep]?.description}</p>
            </div>
          </div>
        </div>

        <DialogFooter>
          <div className="w-full flex flex-col gap-4">
            <div className="flex justify-center gap-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === currentStep ? "bg-primary" : "bg-muted"}`}
                />
              ))}
            </div>
            <Button onClick={handleNext} className="w-full">
              {currentStep < steps.length - 1 ? "Next" : "Get Started"}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

