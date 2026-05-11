import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  RefreshCw,
  Wifi,
  WifiOff,
  Server,
  HardDrive,
  Upload,
  Download,
  AlertCircle,
  CheckCircle2,
  ArrowUpCircle,
  ArrowDownCircle,
  History,
  Activity,
  Zap,
  Database,
  ExternalLink,
  Settings,
  MoreVertical,
  CloudOff,
  Globe,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/sync")({
  component: SyncCenterComponent,
});

function SyncCenterComponent() {
  const syncLogs = [
    {
      id: 1,
      type: "upload",
      item: "Packet Tracer Lab 2 Submission",
      status: "queued",
      progress: 0,
      size: "12 MB",
    },
    {
      id: 2,
      type: "download",
      item: "Module 5: Routing (Video)",
      status: "syncing",
      progress: 45,
      size: "210 MB",
    },
    {
      id: 3,
      type: "upload",
      item: "Subnetting Quiz Results",
      status: "failed",
      progress: 0,
      size: "120 KB",
      error: "Connection Timeout",
    },
  ];

  return (
    <DashboardLayout
      role="student"
      title="Sync Mission Control"
      subtitle="The heart of JifunzeHub's offline-first engine. Manage your connection to the cloud and local campus server."
    >
      <div className="space-y-8">
        {/* Real-time Health Monitor */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-border/60 bg-gradient-to-br from-success/10 to-background border-l-4 border-l-success">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-success/20 text-success rounded-lg">
                  <Server className="w-5 h-5" />
                </div>
                <Badge className="bg-success text-success-foreground">Active</Badge>
              </div>
              <h3 className="text-xl font-bold tracking-tight">Campus Server</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Connected via Local Hotspot (LAN)
              </p>
              <div className="flex items-center gap-2 mt-4 text-[10px] font-bold uppercase tracking-widest text-success">
                <div className="h-2 w-2 rounded-full bg-success animate-pulse"></div>
                Latency: 12ms • Speed: 15MB/s
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-gradient-to-br from-amber-500/10 to-background border-l-4 border-l-amber-500">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-amber-500/20 text-amber-600 rounded-lg">
                  <CloudOff className="w-5 h-5" />
                </div>
                <Badge variant="outline" className="text-amber-600 border-amber-200 bg-amber-500/5">
                  Offline
                </Badge>
              </div>
              <h3 className="text-xl font-bold tracking-tight">Global Cloud</h3>
              <p className="text-xs text-muted-foreground mt-1">
                No direct internet connection found.
              </p>
              <div className="flex items-center gap-2 mt-4 text-[10px] font-bold uppercase tracking-widest text-amber-600">
                <Activity className="w-3 h-3" /> Waiting for sync bridge
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-gradient-to-br from-primary/10 to-background border-l-4 border-l-primary">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-primary/20 text-primary rounded-lg">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-muted-foreground">92% Health</div>
              </div>
              <h3 className="text-xl font-bold tracking-tight">Sync Engine</h3>
              <p className="text-xs text-muted-foreground mt-1">Delta-sync optimization active.</p>
              <div className="mt-4">
                <Progress value={92} className="h-1.5 bg-muted" indicatorClassName="bg-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Action Area */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-border/60">
              <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-border/40">
                <div>
                  <CardTitle className="text-lg">Active Sync Queue</CardTitle>
                  <CardDescription>
                    Items pending transfer between device and server.
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <RefreshCw className="w-4 h-4 mr-2" /> Retry Failed
                  </Button>
                  <Button size="sm" className="bg-primary text-primary-foreground shadow-sm">
                    Sync Now
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border/50">
                  {syncLogs.map((log) => (
                    <div
                      key={log.id}
                      className="p-4 flex items-center gap-4 hover:bg-muted/30 transition-colors"
                    >
                      <div
                        className={`p-2 rounded-full ${
                          log.type === "upload"
                            ? "bg-primary/10 text-primary"
                            : "bg-accent/10 text-accent"
                        }`}
                      >
                        {log.type === "upload" ? (
                          <ArrowUpCircle className="w-5 h-5" />
                        ) : (
                          <ArrowDownCircle className="w-5 h-5" />
                        )}
                      </div>
                      <div className="flex-1 space-y-1.5">
                        <div className="flex justify-between items-start">
                          <p className="text-sm font-bold leading-tight">{log.item}</p>
                          <Badge
                            variant="outline"
                            className={`text-[10px] font-bold uppercase ${
                              log.status === "syncing"
                                ? "bg-primary/5 text-primary border-primary/20"
                                : log.status === "failed"
                                  ? "bg-destructive/5 text-destructive border-destructive/20"
                                  : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {log.status}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex-1">
                            <Progress
                              value={log.progress}
                              className="h-1.5 bg-muted"
                              indicatorClassName={
                                log.status === "failed" ? "bg-destructive" : "bg-primary"
                              }
                            />
                          </div>
                          <span className="text-[10px] font-bold text-muted-foreground whitespace-nowrap">
                            {log.size}
                          </span>
                        </div>
                        {log.error && (
                          <p className="text-[10px] text-destructive font-semibold flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> Error: {log.error}
                          </p>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full text-muted-foreground"
                      >
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="border-border/60 bg-muted/20 border-dashed hover:border-primary/40 transition-colors cursor-pointer group">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-background border rounded-full flex items-center justify-center mx-auto text-muted-foreground group-hover:text-primary transition-colors">
                    <HardDrive className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm">Export via USB</h4>
                  <p className="text-xs text-muted-foreground">
                    Bundle submissions for manual physical transfer.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/60 bg-muted/20 border-dashed hover:border-accent/40 transition-colors cursor-pointer group">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-background border rounded-full flex items-center justify-center mx-auto text-muted-foreground group-hover:text-accent transition-colors">
                    <Database className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm">Import Updates</h4>
                  <p className="text-xs text-muted-foreground">
                    Load new course content from a synced USB drive.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sync Configuration Area */}
          <div className="space-y-6">
            <Card className="border-border/60">
              <CardHeader className="pb-3 border-b border-border/40">
                <CardTitle className="text-lg">Sync Engine Settings</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-sm font-bold">Auto Background Sync</Label>
                    <p className="text-[10px] text-muted-foreground">
                      Sync silently when server is found
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-sm font-bold">Smart Conflict Resolve</Label>
                    <p className="text-[10px] text-muted-foreground">
                      Always keep local device version
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-sm font-bold">Battery Saver Mode</Label>
                    <p className="text-[10px] text-muted-foreground">
                      Pause sync when battery is below 20%
                    </p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-sm font-bold">Delta Sync Compression</Label>
                    <p className="text-[10px] text-muted-foreground">
                      Sync only changed data (Fastest)
                    </p>
                  </div>
                  <Badge variant="outline" className="bg-success/10 text-success border-success/30">
                    Active
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground border-none overflow-hidden relative">
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none transform translate-x-4 -translate-y-4">
                <Globe className="w-24 h-24" />
              </div>
              <CardContent className="p-6 space-y-4 z-10 relative">
                <h3 className="font-bold text-lg leading-tight">Ready for Campus Access?</h3>
                <p className="text-xs text-primary-foreground/80 leading-relaxed">
                  Connecting to the JifunzeHub campus hotspot allows you to sync large video files
                  and assignments without using any mobile data.
                </p>
                <Button variant="secondary" className="w-full text-xs font-bold shadow-lg">
                  View Hotspot Map
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
