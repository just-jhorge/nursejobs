"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import Link from "next/link";

export default function NavbarLinks() {
  return (
    <NavigationMenu viewport>
      <NavigationMenuList className="space-x-2">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/jobs">Browse Jobs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/recruiters">Recruiters</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>More</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[400px] grid-cols-1 divide-x p-3 *:not-first:pl-3 md:w-[500px] md:grid-cols-3 lg:w-[600px]">
              <div>
                <h3 className="mb-3 text-sm font-semibold">PROFESSIONALS</h3>
                <ul className="text-muted-foreground space-y-1 *:hover:text-black">
                  <li>Articles</li>
                  <li>Saved Jobs</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-sm font-semibold">RECRUITERS</h3>
                <ul className="text-muted-foreground space-y-1 *:hover:text-black">
                  <li>Hiring?</li>
                  <li>Recruiters Sign In</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-sm font-semibold">
                  HEALTHJOBS.COM.GH
                </h3>
                <ul className="text-muted-foreground space-y-1 *:hover:text-black">
                  <li>About healthjobs.com.gh</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/#pricing">Pricing</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
