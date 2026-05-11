import { createFileRoute } from "@tanstack/react-router";
import { Heart, Target, Eye, Users } from "lucide-react";
import { PublicLayout } from "@/components/site/PublicLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About JifunzeHub — Inclusive Transformation in TVET" },
      { name: "description", content: "Our mission, vision, and the values driving offline-first TVET education across Africa." },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  { icon: Target, title: "Mission", text: "To make quality TVET education accessible to every learner, regardless of internet availability or device limitations." },
  { icon: Eye, title: "Vision", text: "An Africa where every TVET institution can confidently deliver digital, competency-based learning at scale." },
  { icon: Heart, title: "Values", text: "Inclusion. Resilience. Respect for local context. Open knowledge. Sustainable digital infrastructure." },
  { icon: Users, title: "Community", text: "Built with lecturers, students and IT teams from rural and peri-urban TVET colleges across the region." },
];

function AboutPage() {
  return (
    <PublicLayout>
      <section className="bg-gradient-hero py-20 text-primary-foreground">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/15 text-primary-foreground">About us</Badge>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Inclusive transformation through digital education</h1>
          <p className="mt-4 text-primary-foreground/85">
            JifunzeHub exists because connectivity should never be the gatekeeper of opportunity. We build learning infrastructure for the world that actually exists — patchy networks, shared devices, and brilliant students.
          </p>
        </div>
      </section>

      <section className="container mx-auto grid gap-5 px-4 py-20 md:grid-cols-2">
        {pillars.map((p) => (
          <Card key={p.title} className="border-border/60">
            <CardContent className="p-6">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="bg-muted/40 py-20">
        <div className="container mx-auto grid gap-10 px-4 md:grid-cols-2 md:items-center">
          <div>
            <Badge variant="outline" className="mb-3">The story</Badge>
            <h2 className="text-3xl font-bold tracking-tight">Built in TVET classrooms, for TVET classrooms</h2>
            <p className="mt-4 text-muted-foreground">
              JifunzeHub started as a partnership between vocational instructors and engineers who were tired of beautifully-built learning platforms that simply didn't work in real campuses. We rebuilt the model from the ground up: local-first storage, sync queues, USB packages, and a UX that respects bandwidth.
            </p>
            <p className="mt-3 text-muted-foreground">
              Today we serve dozens of institutions across East Africa with a platform that feels like modern SaaS — but performs like a tool built for the field.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[
              ["2019", "First pilot in Kisumu"],
              ["2021", "USB sync v1 released"],
              ["2023", "Local-server deployments"],
              ["2025", "120+ institutions onboard"],
            ].map(([y, t]) => (
              <div key={y} className="rounded-xl border border-border/60 bg-background p-5">
                <div className="text-2xl font-bold text-accent">{y}</div>
                <div className="text-muted-foreground">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
