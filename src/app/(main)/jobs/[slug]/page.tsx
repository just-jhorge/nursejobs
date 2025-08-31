import { Separator } from "@/components/ui/separator";
import JobDetails from "./job-details";
import SimilarJobs from "./similar-jobs";

export default function Page() {
  return (
    <>
      <JobDetails />
      <SimilarJobs />
    </>
  );
}
