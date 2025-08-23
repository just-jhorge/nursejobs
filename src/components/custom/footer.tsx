import { Separator } from "../ui/separator";
import Image from "next/image";
import facebook from "../../../public/images/facebook.png";
import youtube from "../../../public/images/youtube.png";
import twitter from "../../../public/images/twitter.png";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-900 text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 md:px-0 pt-10 pb-3">
        <div className="w-full flex flex-col items-center gap-10">
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-7 md:gap-10">
            <div>
              <h4 className="mb-1 font-bold text-muted-foreground">
                STAFF / STUDENTS
              </h4>
              <Separator className="mb-3 bg-muted-foreground" />
              <ul className="text-sm md:text-base *:not-last:mb-2">
                <li>Jobs</li>
                <li>Mentorship</li>
                <li>Employers</li>
                <li>Community</li>
                <li>My Account</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-1 font-bold text-muted-foreground">EMPLOYER</h4>
              <Separator className="mb-3 bg-muted-foreground" />
              <ul className="text-sm md:text-base *:not-last:mb-2">
                <li>Recruiter Log In</li>
                <li>Hiring</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-1 font-bold text-muted-foreground">COMPANY</h4>
              <Separator className="mb-3 bg-muted-foreground" />
              <ul className="text-sm md:text-base *:not-last:mb-2">
                <li>About Nursejobs.com</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>Sitemap</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-1 font-bold text-muted-foreground">
                CONNECT WITH US
              </h4>
              <Separator className="mb-3 bg-muted-foreground" />
              <div className="space-y-4">
                <div className="inline-flex items-center gap-4">
                  <Image src={facebook} alt="youtube" height={27} width={27} />
                  <Image src={youtube} alt="youtube" height={35} width={35} />
                  <div className="relative size-[33px] rounded-sm bg-white overflow-hidden">
                    <Image
                      src={twitter}
                      fill
                      alt="youtube"
                      className="object-cover"
                    />
                  </div>
                </div>
                <p>support@nursejobs.com</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; All rights reserved. {new Date().getFullYear()} EsaTech
            Solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}
