import { createContext, useContext, useEffect, useState } from "react"
import {themeParams, useSignal} from "@telegram-apps/sdk-react";

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export default function ThemeProvider({
                                children,
                                defaultTheme = "system",
                                storageKey = "vite-ui-theme",
                                ...props
                              }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  themeParams.mountSync()
  const tp = useSignal(themeParams.isDark)
  const tgBackground = useSignal(themeParams.backgroundColor)


  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark")

    const systemTheme = tp?"dark" : "light";
    setTheme(systemTheme);
    root.classList.add(systemTheme)
    if(tgBackground) root.style.setProperty("--background", tgBackground);
    return

  }, [theme, tp, tgBackground]);



  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
