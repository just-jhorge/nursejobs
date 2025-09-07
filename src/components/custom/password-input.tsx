import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function PasswordInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        {...props}
        type={showPassword ? "text" : "password"}
        className={cn("pr-10 [&::-ms-reveal]:hidden", className)}
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        title={showPassword ? "Hide password" : "Show password"}
        className="text-muted-foreground hover:text-foreground absolute top-1/2 right-1 -translate-1/2 transform"
      >
        {showPassword ? (
          <EyeOffIcon className="size-5" />
        ) : (
          <EyeIcon className="size-5" />
        )}
      </button>
    </div>
  );
}
