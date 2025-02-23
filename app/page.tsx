import { Header } from "@/components/header"
import { QRScanner } from "@/components/qr-scanner"
import FirstTimeGuide from "@/components/first-time-guide"
import { Footer } from "@/components/footer"
import { ThemeWheel } from "@/components/theme-wheel"

export default function Page() {
  return (
    <div className="min-h-full flex flex-col bg-gradient-to-b from-background to-background/50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 flex flex-col items-center justify-center gap-8">
        <QRScanner />
        <FirstTimeGuide />
        <ThemeWheel />
      </main>
      <Footer />
    </div>
  )
}