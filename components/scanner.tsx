"use client"

import { useState } from "react"
import { Camera, CameraIcon as FlipCamera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export function Scanner() {
  const [isScanning, setIsScanning] = useState(false)

  return (
    <Card className="w-full max-w-md bg-black/50 border-white/10">
      <CardContent className="p-6">
        {isScanning ? (
          <div className="aspect-video bg-black rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 border-2 border-primary rounded-lg" />
            </div>
            {/* Camera feed would be implemented here */}
            <div className="absolute bottom-4 right-4">
              <Button size="icon" variant="secondary">
                <FlipCamera className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="aspect-video bg-black/80 rounded-lg flex items-center justify-center">
            <Camera className="w-12 h-12 text-muted-foreground" />
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-center p-6 pt-0">
        <Button size="lg" className="w-full" onClick={() => setIsScanning(!isScanning)}>
          {isScanning ? "Stop Scanning" : "Start Scanning"}
        </Button>
      </CardFooter>
    </Card>
  )
}

