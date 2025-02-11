import "./globals.css"
import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"

const sans = Open_Sans({ subsets: ["latin"] })

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
      <body className={sans.className}>{children}</body>
    </html>
  )
}
