"use client"
import { createContext, useContext } from "react";

type Theme = {
    colors: {
        primary: string,
        secondary: string
    }
}

const defaultTheme: Theme = {
    colors: {
        primary: "#0d6efd",
        secondary: "#6610f2"
    }
}
const ThemeContext = createContext<Theme>(defaultTheme)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeContext.Provider value={defaultTheme}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)