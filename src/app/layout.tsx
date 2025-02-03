'use client'

import { useState } from "react"
import Header from "@/components/header"
import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [themeMode, setDarkMode] = useState(localStorage.getItem("darkMode"))

  const onChangeDarkMode = () => {
    console.log("Testing")
    setDarkMode((currentState) => currentState === "dark" ? "light" : "dark")
    localStorage.setItem("darkMode", themeMode === "dark" ? "light" : "dark")
  }

  return (
    <html lang="en" className={themeMode ? themeMode : "dark"}>
      <body>
        <Header themeMode={themeMode ?? ""} onChangeDarkMode={onChangeDarkMode}/>
        {children}
      </body>
    </html>
  )
}
