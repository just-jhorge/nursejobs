import Link from "next/link";
import { Button } from "@/components/ui/button";
import RecruiterSearchInput from "./recruiter-search-input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Recruiters() {
  return (
    <div className="pt-[72px] sm:pt-[80px] pb-4 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="font-bold text-lg">
              Nursing and Healthcare Recruiters
            </h3>
            <p className="text-muted-foreground text-sm">
              A directory of available healthcare recruiters. Choose your next
              employer.
            </p>
          </div>
          <RecruiterSearchInput />
        </div>
        <div>
          <section className="mb-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
              {[...new Array(16)].map((_, idx) => (
                <div key={idx} className="rounded-lg shadow overflow-hidden">
                  <div className="flex flex-col">
                    <div className="w-full relative aspect-video bg-gray-100">
                      <div className="absolute top-1 right-1">
                        <Badge className="rounded-sm">
                          Hiring now - 5 Jobs
                        </Badge>
                      </div>
                    </div>
                    <div className="w-full p-2 md:p-4 text-sm md:text-base">
                      <div className="mb-4">
                        <div className="mb-3">
                          <h3 className="font-semibold text-xs md:text-sm">
                            Rivia Co. Clinics
                          </h3>
                          <p className="text-xs md:text-sm text-muted-foreground">
                            Private Healthcare
                          </p>
                        </div>
                        <table className="w-full">
                          <tbody className="text-xs md:text-sm text-muted-foreground">
                            <tr>
                              <td>Facilities</td>
                              <td className="text-end">3</td>
                            </tr>
                            <tr>
                              <td>Employees</td>
                              <td className="text-end">28</td>
                            </tr>
                            <tr>
                              <td>Bed Capacity</td>
                              <td className="text-end">257</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="w-full text-end">
                        <Link
                          href={`/recruiters/rivia-clinics`}
                          className="inline-flex items-center text-primary text-xs md:text-sm font-semibold"
                        >
                          View Recruiter <ArrowRight className="ml-1 size-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <Table>
            <TableBody>
              {[...new Array(6)].map((_, idx) => (
                <TableRow key={idx}>
                  <TableCell className="font-medium">
                    <Link
                      href={`/recruiters/alpha-clinic/jobs`}
                      className="text-primary font-medium"
                    >
                      Komfo Anokye Teaching Hospital
                    </Link>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    Public Healthcare
                  </TableCell>
                  <TableCell className="text-right text-muted-foreground">
                    Jobs <span className="font-semibold text-black">14</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
