import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import React from "react";
import { User } from "lucide-react";
import { Button } from "../ui/button";

const isLoggedIn = true;

export default function UserDropdown() {
  return (
    <>
      {isLoggedIn ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <TriggerButton isLoggedIn={isLoggedIn} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>Job Seeking</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem>My CV</DropdownMenuItem>
              <DropdownMenuItem>CV Visibility</DropdownMenuItem>
              <DropdownMenuItem>Saved Jobs</DropdownMenuItem>
              <DropdownMenuItem>Applied Jobs</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Account &amp; Settings</DropdownMenuLabel>
            <DropdownMenuItem>Account Settings</DropdownMenuItem>
            <DropdownMenuItem>Emails</DropdownMenuItem>
            <DropdownMenuItem>Articles</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <TriggerButton isLoggedIn={isLoggedIn} />
      )}
    </>
  );
}

interface TriggerButtonProps extends React.ComponentProps<typeof Button> {
  isLoggedIn: boolean;
}

function TriggerButton({ isLoggedIn, ...props }: TriggerButtonProps) {
  return (
    <Button
      {...props}
      size="icon"
      variant="outline"
      className="text-foreground rounded-full"
    >
      <User />
    </Button>
  );
}
