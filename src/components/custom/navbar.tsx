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
import Link from "next/link";
import NavbarLinks from "./navbar-links";
import UserDropdown from "./user-dropdown";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 h-14 w-full backdrop-blur-md md:h-16">
      <div className="flex h-full items-center justify-center">
        <div className="flex w-full max-w-6xl items-center justify-between px-4 lg:px-0">
          <MobileNavSheet />
          <Link href="/">NurseJobs</Link>
          <div className="hidden sm:block">
            <NavbarLinks />
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-foreground rounded-full"
            >
              <Link href="/signin">Get Hired</Link>
            </Button>
            <UserDropdown />
          </div>
          <MobileAccountSheet />
        </div>
      </div>
    </nav>
  );
}

function MobileNavSheet() {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <Menu className="text-foreground size-5" />
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
            <User2 className="text-foreground size-5" />
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
