"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 flex items-center justify-center"
          aria-label="Switch language"
        >
          <span className="text-xl leading-none">{language === "en" ? "🇬🇧" : "🇦🇿"}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="min-w-[160px]">
        <DropdownMenuItem onClick={() => setLanguage("en")} className={language === "en" ? "bg-accent" : ""}>
          <span className="mr-2 text-xl leading-none">🇬🇧</span>
          English
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setLanguage("az")} className={language === "az" ? "bg-accent" : ""}>
          <span className="mr-2 text-xl leading-none">🇦🇿</span>
          Azərbaycan
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
