"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RecruiterSearchInput() {
  const router = useRouter();

  function submitSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const q = (form.q as HTMLInputElement).value.trim().toLowerCase();

    if (!q) return;

    form.blur();
    router.push(`/recruiters?q=${encodeURIComponent(q)}`);
  }

  return (
    <form
      role="search"
      aria-label="Site Search"
      onSubmit={submitSearch}
      className="bg-muted relative h-10 w-full md:w-[25rem] mt-3 overflow-hidden rounded-md border"
    >
      <Input
        name="q"
        className="me-10 h-full border-none pr-12 focus:border-none active:border-none"
        placeholder="Search healthcare recruiters..."
      />
      <Button
        size="icon"
        variant="ghost"
        className="text-muted-foreground absolute top-1/2 right-0.5 -translate-y-1/2"
      >
        <Search className="size-5" />
      </Button>
    </form>
  );
}
