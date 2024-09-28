import React from 'react'
import Logo from '~/components/logo.tsx'
import { ModeToggle } from '~/components/mode-toggle.tsx'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex max-w-screen-2xl items-center">
        <div className="mr-4 hidden items-center md:flex">
          <Logo /> <ModeToggle />
        </div>
      </div>
    </header>
  )
}
