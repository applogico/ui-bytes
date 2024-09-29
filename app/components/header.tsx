import { NavLink } from '@remix-run/react'
import React from 'react'

import Logo from '~/components/logo.tsx'
import { ModeToggle } from '~/components/mode-toggle.tsx'
import * as Nav from '~/components/ui/navigation-menu.tsx'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex max-w-screen-2xl items-center">
        <div className="mx-4 flex w-full items-center justify-between">
          <Logo />
          <Nav.NavigationMenu className="hidden">
            <Nav.NavigationMenuList>
              <Nav.NavigationMenuItem>
                <Nav.NavigationMenuLink
                  asChild
                  className={Nav.navigationMenuTriggerStyle()}
                >
                  <NavLink to="/">Home</NavLink>
                </Nav.NavigationMenuLink>
              </Nav.NavigationMenuItem>
              <Nav.NavigationMenuItem>
                <Nav.NavigationMenuLink
                  asChild
                  className={Nav.navigationMenuTriggerStyle()}
                >
                  <NavLink to="/blog">
                    Blog
                  </NavLink>
                </Nav.NavigationMenuLink>
              </Nav.NavigationMenuItem>
              <Nav.NavigationMenuItem>
                <Nav.NavigationMenuLink
                  asChild
                  className={Nav.navigationMenuTriggerStyle()}
                >
                  <NavLink to="/media">
                    Media
                  </NavLink>
                </Nav.NavigationMenuLink>
              </Nav.NavigationMenuItem>
            </Nav.NavigationMenuList>
          </Nav.NavigationMenu>

          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
