import { Link } from '@remix-run/react'
import React from 'react'
import Logo from '~/components/logo.tsx'
import { ModeToggle } from '~/components/mode-toggle.tsx'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '~/components/ui/navigation-menu.tsx'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex max-w-screen-2xl items-center">
        <div className="mr-4 hidden w-full items-center justify-between md:flex">
          <Logo />
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/blog">
                  <NavigationMenuLink
                    active
                    className={navigationMenuTriggerStyle()}
                  >
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/media">
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                  >
                    Media
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
