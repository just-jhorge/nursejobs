import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu, User2 } from "lucide-react";
import NavbarClient from "./navbar-client";
import Link from "next/link";

export default function Navbar() {
  return (
    <NavbarClient>
      <div className="flex h-full items-center justify-center">
        <div className="max-w-6xl px-4 lg:px-0 flex w-full items-center justify-between">
          <MobileNavSheet />
          <Link href="/">NurseJobs</Link>
          <div className="hidden sm:block">
            <ul className="flex items-center gap-3 md:gap-6">
              <li>
                <Link href="/jobs">Jobs</Link>
              </li>
              <li>Employees</li>
              <li>Mentorship</li>
              <li>My Account</li>
              <li>
                <Link href="/#pricing">Pricing</Link>
              </li>
              <li>More</li>
            </ul>
          </div>
          <div className="hidden sm:block">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full text-foreground"
            >
              Get Hired
            </Button>
          </div>
          <MobileAccountSheet />
        </div>
      </div>
    </NavbarClient>
  );
}

function MobileNavSheet() {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <Menu className="size-5 text-foreground" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full">
          <SheetHeader className="border-b">
            <SheetTitle>nursejobs.com</SheetTitle>
          </SheetHeader>
          <div className="px-4">content</div>
          <SheetFooter>
            <SheetClose asChild>
              <Button size="lg" className="rounded-full">
                Get Hired
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function MobileAccountSheet() {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <User2 className="size-5 text-foreground" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full">
          <SheetHeader className="border-b">
            <SheetTitle>nursejobs.com</SheetTitle>
          </SheetHeader>
          <div className="px-4">content</div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
