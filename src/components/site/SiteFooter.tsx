import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-sidebar-border bg-sidebar py-16 text-sidebar-foreground/70 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 grid gap-12 md:grid-cols-4">
          <div className="col-span-2 space-y-5 md:col-span-1">
            <Logo variant="inverse" className="text-sidebar-foreground" />
            <p className="max-w-xs text-sm leading-relaxed text-sidebar-foreground/75">
              Empowering TVET institutions with resilient, offline-first digital infrastructure
              designed for African campuses and low-connectivity learning.
            </p>
            <div className="flex gap-3">
              {["tw", "li", "fb"].map((s) => (
                <div
                  key={s}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[10px] font-semibold uppercase text-sidebar-foreground transition-colors hover:border-primary/40 hover:bg-primary/15 hover:text-primary-foreground"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h5 className="jh-section-label mb-4 text-sidebar-foreground/55">Platform</h5>
            <ul className="space-y-3 text-sm font-medium text-sidebar-foreground/85">
              <li>
                <Link
                  to="/dashboard/courses"
                  className="transition-colors hover:text-sidebar-accent-foreground"
                >
                  Course library
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/offline-library"
                  className="transition-colors hover:text-sidebar-accent-foreground"
                >
                  Offline tools
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/sync"
                  className="transition-colors hover:text-sidebar-accent-foreground"
                >
                  Sync engine
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="transition-colors hover:text-sidebar-accent-foreground"
                >
                  System status
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="jh-section-label mb-4 text-sidebar-foreground/55">Institution</h5>
            <ul className="space-y-3 text-sm font-medium text-sidebar-foreground/85">
              <li>
                <Link
                  to="/admin"
                  className="transition-colors hover:text-sidebar-accent-foreground"
                >
                  Admin portal
                </Link>
              </li>
              <li>
                <Link
                  to="/lecturer"
                  className="transition-colors hover:text-sidebar-accent-foreground"
                >
                  Lecturer hub
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="transition-colors hover:text-sidebar-accent-foreground"
                >
                  Demo requests
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="transition-colors hover:text-sidebar-accent-foreground"
                >
                  Case studies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="jh-section-label mb-4 text-sidebar-foreground/55">Support</h5>
            <ul className="space-y-3 text-sm font-medium text-sidebar-foreground/85">
              <li>
                <Link
                  to="/contact"
                  className="transition-colors hover:text-sidebar-accent-foreground"
                >
                  Help center
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="transition-colors hover:text-sidebar-accent-foreground"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="transition-colors hover:text-sidebar-accent-foreground"
                >
                  API access
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="transition-colors hover:text-sidebar-accent-foreground"
                >
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-sidebar-border pt-8 text-[11px] font-medium uppercase tracking-[0.16em] text-sidebar-foreground/45 md:flex-row">
          <p>© {new Date().getFullYear()} JifunzeHub Technology. All rights reserved.</p>
          <p>Built for TVET institutions across East Africa</p>
        </div>
      </div>
    </footer>
  );
}
