import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-4">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-xs text-sm text-muted-foreground">
            Learning Without Internet Barriers. An offline-first TVET learning platform built for inclusive transformation.
          </p>
        </div>
        <FooterCol title="Platform" links={[
          ["/dashboard", "Student Dashboard"],
          ["/lecturer", "Lecturer Studio"],
          ["/admin", "Institution Admin"],
          ["/dashboard/sync", "Sync Center"],
        ]} />
        <FooterCol title="Company" links={[
          ["/about", "About"],
          ["/contact", "Contact"],
          ["/help", "Help Center"],
        ]} />
        <FooterCol title="For Institutions" links={[
          ["/contact", "Request a demo"],
          ["/contact", "Partnership inquiry"],
          ["/help", "Deployment guide"],
        ]} />
      </div>
      <div className="border-t border-border/60">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} JifunzeHub — Inclusive Transformation and Empowerment.</p>
          <p>Made for TVET institutions across Africa.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold">{title}</h4>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {links.map(([to, label]) => (
          <li key={label}>
            <Link to={to} className="hover:text-foreground">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
