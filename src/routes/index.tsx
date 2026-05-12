import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/site/Logo";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  CloudOff,
  GraduationCap,
  RadioTower,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 shadow-header backdrop-blur-xl">
        <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#platform" className="transition-colors hover:text-foreground">
              Platform
            </a>
            <a href="#offline" className="transition-colors hover:text-foreground">
              Offline-first
            </a>
            <a href="#roles" className="transition-colors hover:text-foreground">
              Workspaces
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
              <Link to="/login">Sign in</Link>
            </Button>
            <Button size="sm" className="rounded-xl shadow-md" asChild>
              <Link to="/dashboard">
                Open learner app
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-border/60 bg-gradient-hero text-primary-foreground">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,color-mix(in_oklab,white_22%,transparent),transparent_45%),radial-gradient(circle_at_80%_0%,color-mix(in_oklab,var(--accent)_35%,transparent),transparent_40%)]" />
          <div className="container relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
            <div className="animate-jh-fade space-y-6">
              <span className="jh-kicker border-white/25 bg-white/10 text-white/90 shadow-none backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-amber-200" />
                TVET-grade learning OS
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                Institutional learning that stays sharp —{" "}
                <span className="text-white/95">even when the network doesn&apos;t.</span>
              </h1>
              <p className="max-w-xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
                JifunzeHub unifies learners, lecturers, and administrators on one calm, premium
                surface. Sync over campus LAN, device mesh, or the cloud — your pedagogy keeps
                moving.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-2xl border-0 bg-white text-foreground shadow-lg shadow-black/15 hover:bg-white/95"
                  asChild
                >
                  <Link to="/dashboard">
                    Explore student workspace
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-2xl border-white/35 bg-white/5 text-white shadow-none backdrop-blur-md hover:bg-white/10"
                  asChild
                >
                  <Link to="/login">Request a pilot</Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-4 pt-2 text-[13px] font-medium text-white/70">
                <span className="inline-flex items-center gap-2">
                  <CloudOff className="h-4 w-4 text-amber-200" /> Offline lesson packs
                </span>
                <span className="hidden h-4 w-px bg-white/25 sm:inline" aria-hidden />
                <span className="inline-flex items-center gap-2">
                  <RadioTower className="h-4 w-4 text-emerald-200" /> Campus hub aware
                </span>
              </div>
            </div>

            <div
              className="animate-jh-fade relative rounded-3xl border border-white/15 bg-white/10 p-6 shadow-elegant backdrop-blur-2xl sm:p-8"
              style={{ animationDelay: "80ms" }}
            >
              <div
                className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-accent/30 blur-3xl"
                aria-hidden
              />
              <div className="relative space-y-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-white">Live campus snapshot</p>
                  <span className="rounded-full border border-emerald-400/40 bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-50">
                    Hub online
                  </span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { label: "Active learners", value: "1,284", icon: Users },
                    { label: "Courses synced", value: "186", icon: BookOpen },
                    { label: "Assessments queued", value: "42", icon: ShieldCheck },
                    { label: "Departments", value: "12", icon: GraduationCap },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="rounded-2xl border border-white/10 bg-black/15 p-4 shadow-inner transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      <m.icon className="mb-2 h-4 w-4 text-white/70" />
                      <p className="text-2xl font-semibold tabular-nums tracking-tight text-white">
                        {m.value}
                      </p>
                      <p className="text-[12px] font-medium text-white/65">{m.label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[12px] leading-relaxed text-white/65">
                  Designed for polytechnics and TVET centers — dense when administrators need
                  signal, soft when learners need focus.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="platform"
          className="border-b border-border/60 bg-surface-raised py-16 sm:py-20"
        >
          <div className="container mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="jh-section-label">Design language</p>
              <h2 className="jh-display mt-2">One surface. Three professional workspaces.</h2>
              <p className="jh-body mt-3">
                Shared components, typography, and motion so every role feels like part of the same
                institution — not three different products bolted together.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Learner portal",
                  body: "Distraction-aware layouts, offline badges, and progress you can trust on low-end devices.",
                  to: "/dashboard",
                  cta: "Enter as student",
                },
                {
                  title: "Lecturer studio",
                  body: "Course builder, sync queues, and assessment flows tuned for competency-based TVET.",
                  to: "/lecturer",
                  cta: "Enter as lecturer",
                },
                {
                  title: "Admin command",
                  body: "Devices, finance signals, and analytics with the density of an operations cockpit.",
                  to: "/admin",
                  cta: "Enter as admin",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="flex flex-col rounded-2xl border border-border/70 bg-card p-6 shadow-soft transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-elegant"
                >
                  <h3 className="text-lg font-semibold tracking-tight">{c.title}</h3>
                  <p className="jh-body mt-2 flex-1">{c.body}</p>
                  <Button variant="outline" className="mt-6 w-full rounded-xl" asChild>
                    <Link to={c.to}>
                      {c.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="offline" className="py-16 sm:py-20">
          <div className="container mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="jh-section-label">Offline-first identity</p>
              <h2 className="jh-display mt-2">Connectivity is optional. Continuity is not.</h2>
              <p className="jh-body mt-3">
                Visual language for LAN hubs, cached lessons, and sync health makes the
                infrastructure legible to students and procurement teams alike — without shouting
                sci-fi clichés.
              </p>
              <ul className="mt-6 space-y-3 text-sm font-medium text-foreground/90">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[color:var(--lan)]" />
                  Campus hub and mesh sync states are always one glance away.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[color:var(--offline)]" />
                  Warm amber cues for offline cache — never alarmist, always informative.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  Primary actions stay calm and educational, not neon arcade buttons.
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border/70 bg-card/80 p-6 shadow-elegant backdrop-blur-sm sm:p-8">
              <p className="text-sm font-semibold">What institutions feel on day one</p>
              <p className="jh-body mt-2">
                A product that could sit next to Canvas or Udemy Business in a procurement deck —
                with an unmistakably African, TVET-practical soul.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-border/80 bg-muted/40 px-3 py-1 text-[11px] font-medium text-muted-foreground">
                  Notion-like calm
                </span>
                <span className="rounded-full border border-border/80 bg-muted/40 px-3 py-1 text-[11px] font-medium text-muted-foreground">
                  Linear-like density
                </span>
                <span className="rounded-full border border-border/80 bg-muted/40 px-3 py-1 text-[11px] font-medium text-muted-foreground">
                  Canvas-ready structure
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="roles" className="border-t border-border/60 bg-muted/25 py-14">
          <div className="container mx-auto max-w-6xl px-4 text-center sm:px-6">
            <p className="jh-section-label">Ready when you are</p>
            <h2 className="jh-display mt-2">Ship the pilot with confidence.</h2>
            <p className="jh-body mx-auto mt-3 max-w-2xl">
              Use the live workspaces to stress-test navigation, sync affordances, and institutional
              tone — then iterate with your campus stakeholders.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button size="lg" className="rounded-2xl px-8" asChild>
                <Link to="/dashboard">
                  Launch demo workspace
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl px-8" asChild>
                <Link to="/login">Authenticate</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
