"use client"

import { useState } from "react"
import { QrReader } from "react-qr-reader"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function QRScanner() {
  const [isScanning, setIsScanning] = useState(false)
  const router = useRouter()

  const handleScan = async (result: any) => {
    if (result) {
      setIsScanning(false)
      router.push(`/card/${result?.text}`)
    }
  }

  const handleError = (err: any) => {
    console.error(err)
    // You might want to show an error message to the user here
  }

  return (
    <Card className="w-full max-w-md">
      <CardContent className="p-6">
        {isScanning ? (
          <QrReader delay={300} onError={handleError} onResult={handleScan} style={{ width: "100%" }} />
        ) : (
          <div className="aspect-video bg-black/80 rounded-lg flex items-center justify-center text-white">
            Scan a CardCrafters QR code
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

