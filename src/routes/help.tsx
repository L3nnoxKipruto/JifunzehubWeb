import { createFileRoute } from "@tanstack/react-router";
import { Search, Usb, Wifi, Smartphone, Server, ShieldCheck } from "lucide-react";
import { PublicLayout } from "@/components/site/PublicLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "Help Center — JifunzeHub" },
      { name: "description", content: "Offline setup guides, sync troubleshooting, and device compatibility help." },
    ],
  }),
  component: HelpPage,
});

const topics = [
  { icon: Usb, title: "Offline setup", desc: "Install and prepare a campus deployment.", tag: "Getting started" },
  { icon: Wifi, title: "Sync troubleshooting", desc: "Fix common sync conflicts and queue issues.", tag: "Sync" },
  { icon: Smartphone, title: "Device compatibility", desc: "Supported devices and minimum specs.", tag: "Devices" },
  { icon: Server, title: "Local server", desc: "Manage your campus mini-server.", tag: "Infrastructure" },
  { icon: ShieldCheck, title: "Security & accounts", desc: "Roles, password policies, recovery.", tag: "Security" },
];

function HelpPage() {
  return (
    <PublicLayout>
      <section className="bg-muted/40 py-16">
        <div className="container mx-auto max-w-2xl px-4 text-center">
          <Badge variant="outline" className="mb-3">Help Center</Badge>
          <h1 className="text-4xl font-bold tracking-tight">How can we help?</h1>
          <div className="relative mt-6">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="h-12 pl-10 text-base" placeholder="Search guides, e.g. 'USB sync'…" />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-6 text-2xl font-bold">Browse topics</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((t) => (
            <Card key={t.title} className="group cursor-pointer border-border/60 transition hover:-translate-y-0.5 hover:shadow-soft">
              <CardContent className="p-5">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <t.icon className="h-5 w-5" />
                </div>
                <p className="text-xs text-muted-foreground">{t.tag}</p>
                <h3 className="mt-1 font-semibold">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold">Common questions</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {[
              ["How do I create a USB content package?", "From the lecturer dashboard, open a course and click 'Export offline package'. Plug in a USB drive and pick it as the destination."],
              ["My device says 'Offline' — is that a problem?", "No. Offline means JifunzeHub is using locally cached data. You can keep learning. Changes will sync next time you connect."],
              ["What happens if two students edit the same answer offline?", "Sync Center detects conflicts and presents them side-by-side. The student or lecturer chooses which version to keep."],
              ["What's the minimum device spec?", "Any Android 7+, Chromebook, or Windows 10 device with 2GB RAM is fully supported."],
            ].map(([q, a]) => (
              <AccordionItem key={q} value={q} className="rounded-xl border border-border/60 bg-card px-4">
                <AccordionTrigger className="text-left">{q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </PublicLayout>
  );
}
