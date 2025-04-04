import * as React from "react"
import { FaMountain } from "react-icons/fa6"
import { Link } from '@inertiajs/react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { Separator } from "@/components/ui/separator"
import type { User } from "@/lib/types/User"

type LayoutProps = React.PropsWithChildren<{user?: User}>

function UserLinks({ user }: { user?: User }) {
  if (!user) return null

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/docs">
            < NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default function Layout({ children, user }: LayoutProps) {
  return (
    <main className="max-w-dvw">
      <header>
        <div className="mt-4 mb-4 flex flex-row items-center">
          <div className="logo flex flex-row items-center">
            <FaMountain />&nbsp;
            <h1>Ratsamy Dev</h1>
          </div>
          <UserLinks user={user} />
        </div>
        <Separator />
      </header>
      <article>{children}</article>
    </main>
  )
}
