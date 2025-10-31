"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

interface NavbarProps {
  activeSection: string
}

export function Navbar({ activeSection }: NavbarProps) {
  const { t } = useLanguage()
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light")

    setTheme(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 64
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })

      setMobileMenuOpen(false)
    }
  }

  const navLinks = [
    { id: "home", label: t.nav.home },
    { id: "clients", label: t.nav.clients },
    { id: "services", label: t.nav.services },
    { id: "contact", label: t.nav.contact },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:grid md:grid-cols-[1fr_auto_1fr]">
        {/* Logo Section - Left */}
        <Link href="/" className="flex items-center gap-3 text-xl font-bold">
          <Image
            src={theme === "light" ? "/logo-light.png" : "/logo-dark.png"}
            alt="Cybersoft Logo"
            width={36}
            height={36}
            className="rounded-lg transition-all duration-300"
            priority
          />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Cybersoft</span>
        </Link>

        <ul className="hidden items-center justify-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={cn(
                  "relative min-w-fit text-sm font-medium transition-colors hover:text-foreground",
                  activeSection === link.id ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute -bottom-[17px] left-0 h-0.5 w-full bg-gradient-to-r from-blue-500 to-purple-600" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center justify-end gap-2 md:ml-0">
          <LanguageSwitcher />

          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>

          <Button
            onClick={() => scrollToSection("contact")}
            className="hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 md:flex"
          >
            {t.hero.getStarted}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-b border-border/40 bg-background transition-all duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="container mx-auto flex flex-col gap-4 px-4 py-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={cn(
                "text-center text-lg font-medium transition-colors hover:text-foreground",
                activeSection === link.id ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {link.label}
            </button>
          ))}

          <Button
            onClick={() => scrollToSection("contact")}
            className="mt-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
          >
            {t.hero.getStarted}
          </Button>
        </div>
      </div>
    </nav>
  )
}
