import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { WifiOff, Home, RefreshCw } from "lucide-react";

export const Route = createFileRoute("/offline-error")({
  component: OfflineErrorComponent,
});

function OfflineErrorComponent() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-24 h-24 rounded-full bg-amber-500/10 text-amber-500 mx-auto flex items-center justify-center mb-6">
          <WifiOff className="w-12 h-12" />
        </div>

        <h1 className="text-3xl font-bold tracking-tight">No Connection Available</h1>

        <p className="text-muted-foreground">
          You are currently offline and the page you are trying to access has not been cached on
          your device.
        </p>

        <div className="bg-muted/50 p-4 rounded-xl border border-border/50 text-sm text-left">
          <p className="font-semibold mb-2">To access this content:</p>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>Connect to your campus local Wi-Fi hotspot.</li>
            <li>Plug in your institution's synced USB drive.</li>
            <li>Connect to the internet to download it from the cloud.</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button asChild className="flex-1 shadow-md shadow-primary/20">
            <Link to="/dashboard">
              <Home className="w-4 h-4 mr-2" /> Go to Dashboard
            </Link>
          </Button>
          <Button variant="outline" className="flex-1" onClick={() => window.location.reload()}>
            <RefreshCw className="w-4 h-4 mr-2" /> Try Again
          </Button>
        </div>
      </div>
    </div>
  );
}
