import "./globals.css"
import type { Metadata } from "next"
import { Raleway } from "next/font/google"

const raleway = Raleway({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Frontend Portfolio",
  description: "Frontend Portfolio Made by Muhammad Rifqi",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        {children}
      </body>
    </html>
  )
}
