import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Jobs() {
  return (
    <section className="w-full py-6 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <div className="space-y-5">
          <div className="w-full space-y-4">
            <div>heading</div>
            <div>Filters</div>
          </div>
          <Separator />
          <div className="w-full flex items-start gap-8">
            <div className="flex-1 bg-red-500">jobs</div>
            <div className="w-[30%] space-y-3">
              <div>
                <h2 className="font-semibold text-xl">
                  Get alerts for jobs like this via email
                </h2>
                <p className="text-muted-foreground text-base">
                  We&apos;ll send job notifications that match this search to
                  you.
                </p>
              </div>
              <div className="space-y-2">
                <Input
                  className="w-full"
                  placeholder="Enter your email address"
                />
                <Button>Send jobs</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
