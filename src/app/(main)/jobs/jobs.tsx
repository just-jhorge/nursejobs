import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";
import JobCard from "@/components/custom/job-card";
import { Separator } from "@/components/ui/separator";

export default function Jobs() {
  return (
    <section className="w-full py-6 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <div className="space-y-5">
          <div className="w-full space-y-4">
            <h2 className="font-bold text-lg md:text-2xl">
              Nursing Jobs in Manchester
            </h2>
            <div className="flex overflow-x-auto scrollbar-hide md:grid grid-cols-5 gap-2">
              <Select>
                <SelectTrigger className="min-w-[110px] md:w-full bg-white">
                  <SelectValue placeholder="This is some long placeholder" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="min-w-[110px] md:w-full bg-white">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="min-w-[110px] md:w-full bg-white">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="min-w-[110px] md:w-full bg-white">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="min-w-[110px] md:w-full bg-white">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Separator />
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[...new Array(60)].map((_, idx) => (
              <JobCard key={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
