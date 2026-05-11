import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { PublicLayout } from "@/components/site/PublicLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact JifunzeHub" },
      {
        name: "description",
        content:
          "Get in touch with the JifunzeHub team. Institution inquiries, partnerships and support.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PublicLayout>
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Let's bring TVET online</h1>
          <p className="mt-3 text-muted-foreground">
            Whether you're a college, a learner, or a partner — we'd love to hear from you.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_2fr]">
          <div className="space-y-4">
            {[
              { icon: Mail, t: "Email", v: "hello@jifunzehub.africa" },
              { icon: Phone, t: "Phone", v: "+254 700 000 000" },
              { icon: MapPin, t: "HQ", v: "Nairobi, Kenya" },
            ].map((i) => (
              <Card key={i.t} className="border-border/60">
                <CardContent className="flex items-center gap-3 p-5">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
                    <i.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{i.t}</p>
                    <p className="font-medium">{i.v}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border/60">
            <CardContent className="p-6">
              <Tabs defaultValue="general">
                <TabsList className="mb-6">
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="institution">Institution Inquiry</TabsTrigger>
                </TabsList>
                <TabsContent value="general">
                  <ContactForm kind="general" />
                </TabsContent>
                <TabsContent value="institution">
                  <ContactForm kind="institution" />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="mx-auto mt-20 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold">Frequently asked</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {[
              [
                "Does JifunzeHub work without internet?",
                "Yes. The platform is offline-first. Lessons, assessments and progress all work locally. Sync happens silently when connectivity is available.",
              ],
              [
                "What devices are supported?",
                "Low-end Android phones, tablets, Chromebooks, Windows lab computers and shared kiosks.",
              ],
              [
                "How do you deliver content to remote campuses?",
                "Three ways: local campus server over LAN/Wi-Fi hotspot, USB content packages, or direct internet sync.",
              ],
              [
                "Is JifunzeHub aligned with TVET frameworks?",
                "Yes. Courses are organised around competencies, practicals, and assessments matching national TVET standards.",
              ],
            ].map(([q, a]) => (
              <AccordionItem
                key={q}
                value={q}
                className="rounded-xl border border-border/60 bg-card px-4"
              >
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

function ContactForm({ kind }: { kind: "general" | "institution" }) {
  const [loading, setLoading] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          toast.success("Message received. We'll be in touch shortly.");
          (e.target as HTMLFormElement).reset();
        }, 700);
      }}
      className="grid gap-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" id="name" required />
        <Field label="Email" id="email" type="email" required />
      </div>
      {kind === "institution" && (
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Institution" id="institution" required />
          <Field label="Approx. learners" id="learners" type="number" />
        </div>
      )}
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" rows={5} required />
      </div>
      <Button
        type="submit"
        disabled={loading}
        className="bg-gradient-primary text-primary-foreground hover:opacity-95"
      >
        {loading ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}

function Field({
  label,
  id,
  ...rest
}: { label: string; id: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...rest} />
    </div>
  );
}
