import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  WifiOff,
  Usb,
  Radio,
  Smartphone,
  Gauge,
  Globe2,
  Search,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Building2,
  Users,
  BookOpen,
  Sparkles,
  Wrench,
  Plug,
  Hammer,
  Car,
  UtensilsCrossed,
  Scissors,
  HardHat,
} from "lucide-react";
import splashImg from "@/assets/splash.png";
import { PublicLayout } from "@/components/site/PublicLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JifunzeHub — Learning Without Internet Barriers" },
      {
        name: "description",
        content:
          "Offline-first TVET learning platform for institutions in low-connectivity regions. Sync over USB, local hotspot, or the cloud.",
      },
      { property: "og:title", content: "JifunzeHub — Offline-first TVET Learning" },
      {
        property: "og:description",
        content:
          "Inclusive transformation and empowerment through offline-capable digital education for TVET colleges.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <PublicLayout>
      <Hero />
      <TrustBar />
      <Features />
      <Categories />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <CTA />
    </PublicLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_20%_20%,oklch(1_0_0/0.25),transparent_50%),radial-gradient(circle_at_80%_60%,oklch(0.7_0.16_160/0.35),transparent_50%)]" />
      <div className="container relative mx-auto grid gap-10 px-4 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge
            variant="secondary"
            className="mb-5 gap-1.5 bg-white/15 text-primary-foreground hover:bg-white/20"
          >
            <Sparkles className="h-3.5 w-3.5" /> Inclusive Transformation & Empowerment
          </Badge>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Access quality TVET education{" "}
            <span className="bg-gradient-to-r from-accent-glow to-white bg-clip-text text-transparent">
              anytime, anywhere
            </span>{" "}
            — even offline.
          </h1>
          <p className="mt-5 max-w-xl text-base text-primary-foreground/85 md:text-lg">
            JifunzeHub is the offline-synchronized e-learning platform built for TVET colleges in
            low-bandwidth and rural environments. Learn, teach, and assess — internet optional.
          </p>

          <div className="mt-7 flex max-w-xl items-center gap-2 rounded-xl border border-white/20 bg-white/10 p-2 backdrop-blur">
            <Search className="ml-2 h-4 w-4 text-primary-foreground/70" />
            <Input
              placeholder="Search ICT, Electrical, Plumbing, Hospitality…"
              className="border-0 bg-transparent text-primary-foreground placeholder:text-primary-foreground/60 focus-visible:ring-0"
            />
            <Button className="bg-accent text-accent-foreground hover:bg-accent-glow">
              Search
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/register">
                Start learning <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent text-primary-foreground hover:bg-white/10"
            >
              <Link to="/contact">Request institutional demo</Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
            {["No internet required", "Works on low-end devices", "Kiswahili & English"].map(
              (t) => (
                <div key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-accent-glow" /> {t}
                </div>
              ),
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-3xl bg-accent/30 opacity-40 blur-3xl" />
          <img
            src={splashImg}
            alt="Space Theme Moodle Splash"
            width={1536}
            height={1024}
            className="relative w-full rounded-2xl border border-white/15 shadow-elegant"
          />
          <div className="absolute -bottom-4 -left-4 hidden gap-2 rounded-xl border border-white/20 bg-background/90 p-3 text-foreground shadow-elegant backdrop-blur sm:flex">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-success/15 text-success">
              <WifiOff className="h-4 w-4" />
            </div>
            <div className="text-xs">
              <p className="font-semibold">Synced 12 lessons</p>
              <p className="text-muted-foreground">via local hotspot</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  const logos = [
    "Nairobi TVET",
    "Kisumu Polytechnic",
    "Arusha Tech",
    "Kigali Skills",
    "Mombasa Vocational",
    "Dodoma TI",
  ];
  return (
    <div className="border-y border-border/60 bg-muted/40">
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 py-6 text-xs uppercase tracking-widest text-muted-foreground">
        <span className="text-[11px]">Trusted by institutions</span>
        {logos.map((l) => (
          <span key={l} className="font-semibold">
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}

const features = [
  {
    icon: WifiOff,
    title: "Offline-first learning",
    desc: "Lessons, videos and quizzes work without an internet connection. Progress is saved locally.",
  },
  {
    icon: Usb,
    title: "USB synchronization",
    desc: "Move entire course packages between campuses and devices using a simple USB drive.",
  },
  {
    icon: Radio,
    title: "Local hotspot learning",
    desc: "A campus mini-server distributes content to dozens of devices over LAN or Wi-Fi hotspot.",
  },
  {
    icon: Smartphone,
    title: "Cross-device compatibility",
    desc: "Optimized for low-end Android phones, tablets, Chromebooks and shared lab computers.",
  },
  {
    icon: Gauge,
    title: "Low-bandwidth optimized",
    desc: "Adaptive media, delta sync and aggressive caching keep data costs near zero.",
  },
  {
    icon: Globe2,
    title: "TVET accessibility",
    desc: "Built-in Kiswahili UI, screen-reader labels, large text and high contrast modes.",
  },
];

function Features() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <Badge variant="outline" className="mb-3">
          Platform
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          A learning platform that meets students where they are
        </h2>
        <p className="mt-3 text-muted-foreground">
          Every feature is designed for environments where internet is intermittent, devices are
          shared, and reliability matters more than novelty.
        </p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Card className="group h-full border-border/60 bg-card transition hover:-translate-y-0.5 hover:shadow-elegant">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-1.5 text-lg font-semibold">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const categories = [
  { icon: Wrench, name: "ICT" },
  { icon: Plug, name: "Electrical" },
  { icon: Hammer, name: "Plumbing" },
  { icon: Car, name: "Automotive" },
  { icon: UtensilsCrossed, name: "Hospitality" },
  { icon: Scissors, name: "Hairdressing" },
  { icon: HardHat, name: "Building & Construction" },
  { icon: BookOpen, name: "Foundational Skills" },
];

function Categories() {
  return (
    <section className="bg-muted/40 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-3">
          <div>
            <Badge variant="outline" className="mb-3">
              TVET tracks
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Competency-based learning across trades
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Practical workshops, lab sessions and assessments mapped to national TVET frameworks.
            </p>
          </div>
          <Button asChild variant="ghost">
            <Link to="/dashboard/courses">
              Browse all courses <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((c) => (
            <Card
              key={c.name}
              className="group cursor-pointer border-border/60 bg-background transition hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-soft"
            >
              <CardContent className="flex items-center gap-3 p-5">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-accent-foreground">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">{c.name}</p>
                  <p className="text-xs text-muted-foreground">12+ courses</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    n: "01",
    title: "Deploy",
    desc: "Install the JifunzeHub local server at your institution — a single small box per campus.",
  },
  {
    n: "02",
    title: "Distribute",
    desc: "Students connect over LAN, Wi-Fi hotspot, or carry content home via USB packages.",
  },
  {
    n: "03",
    title: "Sync",
    desc: "Whenever any device touches internet, JifunzeHub silently syncs progress and new content.",
  },
];

function HowItWorks() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <Badge variant="outline" className="mb-3">
          How it works
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Three layers of resilience
        </h2>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {steps.map((s) => (
          <Card key={s.n} className="border-border/60">
            <CardContent className="p-6">
              <div className="text-sm font-mono font-semibold text-accent">{s.n}</div>
              <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

const stats = [
  { v: "120+", l: "TVET institutions", icon: Building2 },
  { v: "48,000", l: "Active learners", icon: GraduationCap },
  { v: "92%", l: "Lessons cached locally", icon: WifiOff },
  { v: "37", l: "Counties reached", icon: Globe2 },
];

function Stats() {
  return (
    <section className="bg-gradient-primary py-16 text-primary-foreground">
      <div className="container mx-auto grid grid-cols-2 gap-6 px-4 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <s.icon className="mx-auto mb-2 h-6 w-6 text-accent-glow" />
            <div className="text-3xl font-bold md:text-4xl">{s.v}</div>
            <div className="mt-1 text-sm text-primary-foreground/80">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const quotes = [
  {
    name: "Amina K.",
    role: "ICT Student, Kisumu Polytechnic",
    quote:
      "I finally completed my full networking module without ever buying mobile data. Everything just… works.",
  },
  {
    name: "Mr. Otieno",
    role: "Lecturer, Electrical Engineering",
    quote:
      "I record once, package once, and 240 students across two campuses get the lesson the same week.",
  },
  {
    name: "Dr. Wanjiru",
    role: "Principal, Nairobi TVET",
    quote:
      "JifunzeHub gave us a real digital strategy that actually fits our infrastructure reality.",
  },
];

function Testimonials() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <Badge variant="outline" className="mb-3">
          Voices
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Educators and learners are seeing the difference
        </h2>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {quotes.map((q) => (
          <Card key={q.name} className="border-border/60">
            <CardContent className="p-6">
              <p className="text-sm leading-relaxed">"{q.quote}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-accent text-accent-foreground font-semibold">
                  {q.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{q.name}</p>
                  <p className="text-xs text-muted-foreground">{q.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="container mx-auto px-4 pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 text-primary-foreground shadow-elegant md:p-16">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
        <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Ready to bring your institution online — and offline?
            </h2>
            <p className="mt-3 max-w-2xl text-primary-foreground/85">
              Talk to our team about deploying JifunzeHub at your TVET college. Pilots typically run
              in under two weeks.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">Book a demo</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent text-primary-foreground hover:bg-white/10"
            >
              <Link to="/register">Create free account</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
