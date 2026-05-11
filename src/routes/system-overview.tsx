import { createFileRoute } from '@tanstack/react-router'
import { PublicLayout } from "@/components/site/PublicLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Server, WifiOff, Usb, Laptop, ArrowRight } from "lucide-react"

export const Route = createFileRoute('/system-overview')({
  component: SystemOverviewComponent,
})

function SystemOverviewComponent() {
  return (
    <PublicLayout>
      <div className="container mx-auto py-16 px-4 max-w-6xl">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20" variant="secondary">Architecture</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            How JifunzeHub Works Offline
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A resilient, offline-first learning ecosystem designed specifically for TVET institutions operating in low-bandwidth environments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-border/60 shadow-md hover:shadow-xl transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Server className="w-6 h-6" />
              </div>
              <CardTitle>1. Local Server</CardTitle>
              <CardDescription>The core of the institution</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>A low-cost mini-PC (like a Raspberry Pi or Intel NUC) acts as the central hub for the entire campus.</p>
              <ul className="space-y-1 list-disc pl-4 mt-4">
                <li>Hosts the full web application locally</li>
                <li>Stores heavy video files and PDFs</li>
                <li>Aggregates student analytics</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/60 shadow-md hover:shadow-xl transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <WifiOff className="w-6 h-6" />
              </div>
              <CardTitle>2. Campus Intranet</CardTitle>
              <CardDescription>Zero internet required</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>Students connect to a standard Wi-Fi router that points to the local server instead of the outside internet.</p>
              <ul className="space-y-1 list-disc pl-4 mt-4">
                <li>High-speed local video streaming</li>
                <li>Instant assignment submissions</li>
                <li>Zero data costs for students</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/60 shadow-md hover:shadow-xl transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Usb className="w-6 h-6" />
              </div>
              <CardTitle>3. Device Syncing</CardTitle>
              <CardDescription>Learning taken home</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>Students can sync courses to their devices or via USB to continue learning at home.</p>
              <ul className="space-y-1 list-disc pl-4 mt-4">
                <li>Progress saved locally using IndexedDB</li>
                <li>Offline quizzes and interactive content</li>
                <li>Auto-syncs upon return to campus</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-primary/5 via-accent/5 to-background border border-border shadow-inner flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-bold">Ready to deploy?</h3>
            <p className="text-muted-foreground">Download the offline package and create your institution's local hub in less than 10 minutes.</p>
          </div>
          <div className="flex items-center gap-4">
            <Laptop className="w-16 h-16 text-muted/20" />
            <ArrowRight className="text-primary animate-pulse" />
            <Server className="w-16 h-16 text-accent" />
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
