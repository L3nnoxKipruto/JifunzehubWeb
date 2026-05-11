import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/site/PublicLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/accessibility")({
  component: AccessibilityComponent,
});

function AccessibilityComponent() {
  return (
    <PublicLayout>
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <Badge variant="outline" className="mb-3">
          Accessibility
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">
          Our Commitment to Inclusive Education
        </h1>

        <p className="text-lg text-muted-foreground mb-12">
          At JifunzeHub, we believe that digital learning tools should empower every student,
          regardless of their internet connectivity, device capability, or physical abilities.
        </p>

        <div className="grid gap-8">
          <Card className="border-border/60">
            <CardHeader>
              <CardTitle>Low-Bandwidth & Offline Capabilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Our core accessibility feature is our offline-first architecture. We do not assume
                students have access to high-speed internet or expensive data plans.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-foreground">Progressive Web App (PWA):</strong> Can be
                  installed directly to older Android devices and runs smoothly with limited RAM.
                </li>
                <li>
                  <strong className="text-foreground">Adaptive Media Delivery:</strong> Videos are
                  automatically compressed and formatted to be as small as possible without losing
                  instructional value.
                </li>
                <li>
                  <strong className="text-foreground">LAN/USB Synchronization:</strong> Complete
                  lack of internet is not a barrier; students can sync full courses from the campus
                  local server directly.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/60">
            <CardHeader>
              <CardTitle>Screen Readers & Keyboard Navigation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                JifunzeHub strictly adheres to WCAG 2.1 AA standards for visual and motor
                accessibility.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-foreground">ARIA Landmarks:</strong> All navigation and
                  learning interfaces are tagged properly for screen readers.
                </li>
                <li>
                  <strong className="text-foreground">Full Keyboard Support:</strong> A student can
                  register, login, take a quiz, and submit an assignment without ever using a mouse
                  or touch screen.
                </li>
                <li>
                  <strong className="text-foreground">Focus Management:</strong> Clear visual
                  indicators are present whenever an element receives keyboard focus.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/60">
            <CardHeader>
              <CardTitle>Language & Cognitive Load</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>We design our interfaces to be as clear and intuitive as possible.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-foreground">Kiswahili Support:</strong> Full interface
                  translation for native comprehension across East Africa.
                </li>
                <li>
                  <strong className="text-foreground">High Contrast Modes:</strong> We provide both
                  dark and light modes with strictly verified contrast ratios for text and UI
                  elements.
                </li>
                <li>
                  <strong className="text-foreground">Clear Feedback:</strong> Forms and
                  interactions always provide clear, non-color-reliant error and success messages.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </PublicLayout>
  );
}
