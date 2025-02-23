import { QrCode, Smartphone, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Instructions() {
  return (
    <Card className="w-full max-w-md bg-black/50 border-white/10">
      <CardContent className="p-6">
        <h2 className="text-lg font-semibold text-white mb-4">How to scan your card</h2>
        <div className="grid gap-4">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <QrCode className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-sm text-white">Find the QR code on your card</p>
              <p className="text-xs text-muted-foreground mt-1">
                Look for a square barcode pattern on your CardCrafters card
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Smartphone className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-sm text-white">Position your device</p>
              <p className="text-xs text-muted-foreground mt-1">Center the QR code within the scanning frame</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-sm text-white">Access your content</p>
              <p className="text-xs text-muted-foreground mt-1">
                Once scanned, you'll be redirected to your card's content
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

