import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell } from "@/components/site/AuthShell";
import { Button } from "@/components/ui/button";
import { WifiOff, Download, PlayCircle, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/onboarding")({
  component: OnboardingComponent,
});

function OnboardingComponent() {
  return (
    <AuthShell
      title="Welcome to Offline Learning"
      subtitle="Let's get your device ready for the JifunzeHub experience."
    >
      <div className="space-y-8">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <Download className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground">1. Initial Cache Sync</h4>
            <p className="text-sm text-muted-foreground mt-1">
              We are downloading the foundational framework to your device so the app loads
              instantly, even without Wi-Fi.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
            <WifiOff className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground">2. Offline Mode Ready</h4>
            <p className="text-sm text-muted-foreground mt-1">
              You can disconnect at any time. When you complete lessons offline, they are saved
              locally until you reconnect to the campus network.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-success/10 text-success flex items-center justify-center shrink-0">
            <PlayCircle className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground">3. Start Learning</h4>
            <p className="text-sm text-muted-foreground mt-1">
              Browse your enrolled courses, download videos while on campus, and learn from home.
            </p>
          </div>
        </div>

        <div className="pt-4">
          <Button asChild className="w-full shadow-md shadow-primary/20">
            <Link to="/dashboard">
              Go to Dashboard <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </AuthShell>
  );
}
