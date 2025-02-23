import type React from "react"
import "@/styles/globals.css"
import { GeistSans } from "geist/font/sans"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "CardCrafters - Interactive Greeting Cards",
  description: "Transform your greeting cards into digital memories",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(GeistSans.className, "h-full")}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'