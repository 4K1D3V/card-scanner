import { QrCode } from "lucide-react"
import { useCard } from "./card-provider"

export function Header() {
  const { theme } = useCard()

  return (
    <header className="border-b border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <QrCode className="w-6 h-6 text-primary" />
          <span className="text-xl font-semibold text-white">CardCrafters</span>
        </div>
        {theme && <span className="text-sm text-white">Theme: {theme}</span>}
      </div>
    </header>
  )
}

