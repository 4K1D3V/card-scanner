"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "birthday" | "valentine" | "luck" | "health" | "christmas" | "newyear"

const ThemeContext = createContext<{
  theme: Theme | null
  setTheme: (theme: Theme) => void
}>({
  theme: null,
  setTheme: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    // Apply theme-specific styles here
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme)
    }
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)

