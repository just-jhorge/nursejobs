import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-black/15">
      <div className="w-full h-full flex items-center justify-center text-sm">
        <Loader className="size-4 animate-spin mr-2" /> Loading...
      </div>
    </div>
  );
}
