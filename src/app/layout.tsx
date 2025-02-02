'use client'

import { useState } from "react"
import Header from "@/components/header"
import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode"))

  const onChangeDarkMode = () => {
    console.log("Testing")
    setDarkMode((currentState) => currentState === "dark" ? "light" : "dark")
    localStorage.setItem("darkMode", darkMode === "dark" ? "light" : "dark")
  }

  return (
    <html lang="en" className={darkMode ? darkMode : "dark"}>
      <body>
        <Header onChangeDarkMode={onChangeDarkMode}/>
        {children}
      </body>
    </html>
  )
}
