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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  RefreshCw,
  Download,
  Upload,
  WifiOff,
  Server,
  HardDrive,
  Activity,
  Zap,
  Database,
  AlertCircle,
  CheckCircle2,
  Usb,
  History,
  Smartphone,
  Laptop,
  Globe,
  CloudOff,
  ExternalLink,
  MoreVertical,
  Search,
  Filter,
  ArrowUpRight,
} from "lucide-react";

export const Route = createFileRoute("/lecturer/sync")({
  component: LecturerSyncComponent,
});

function LecturerSyncComponent() {
  const syncLogs = [
    {
      id: 1,
      type: "push",
      item: "Module 2: OSPF Config (Course Update)",
      destination: "Local Server (LAN)",
      status: "Synced",
      time: "10 mins ago",
      size: "210 MB",
      retries: 0,
    },
    {
      id: 2,
      type: "pull",
      item: "Student Submissions (12 Assignments)",
      source: "USB Drive (Class A)",
      status: "Synced",
      time: "2 hours ago",
      size: "15 MB",
      retries: 0,
    },
    {
      id: 3,
      type: "push",
      item: "Subnetting Quiz (New)",
      destination: "Central Cloud",
      status: "Failed",
      time: "5 hours ago",
      size: "120 KB",
      retries: 3,
      reason: "No Internet Connection",
    },
    {
      id: 4,
      type: "pull",
      item: "Institution News & Updates",
      source: "Campus Server",
      status: "Pending",
      time: "Queueing...",
      size: "1.2 MB",
      retries: 0,
    },
  ];

  return (
    <DashboardLayout
      role="lecturer"
      title="Sync Mission Control"
      subtitle="The heart of JifunzeHub's offline-first engine. Manage content distribution across LAN, USB, and Cloud."
    >
      <div className="space-y-8 pb-20">
        {/* Real-time Status Header */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-border/60 bg-gradient-to-br from-success/10 to-background border-l-4 border-l-success shadow-soft">
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
                Latency: 8ms • Speed: 24MB/s
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-gradient-to-br from-amber-500/10 to-background border-l-4 border-l-amber-500 shadow-soft">
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
                <Activity className="w-3 h-3" /> Queued for bridge sync
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-gradient-to-br from-primary/10 to-background border-l-4 border-l-primary shadow-soft">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-primary/20 text-primary rounded-lg">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-muted-foreground">99.4% Health</div>
              </div>
              <h3 className="text-xl font-bold tracking-tight">Sync Engine</h3>
              <p className="text-xs text-muted-foreground mt-1">Delta-sync optimization active.</p>
              <div className="mt-4">
                <Progress
                  value={99}
                  className="h-1.5 bg-muted"
                  indicatorClassName="bg-primary shadow-glow shadow-primary/50"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Action Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Active Sync Queue */}
            <Card className="border-border/60 shadow-soft overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between pb-4 border-b border-border/40">
                <div>
                  <CardTitle className="text-lg">Active Sync Queue</CardTitle>
                  <CardDescription>Items pending transfer across networks.</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="h-9">
                    <RefreshCw className="w-4 h-4 mr-2" /> Retry Failed
                  </Button>
                  <Button
                    size="sm"
                    className="h-9 bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  >
                    Sync Now
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader className="bg-muted/30">
                      <TableRow className="border-b border-border/50">
                        <TableHead className="w-[40px]"></TableHead>
                        <TableHead>Resource / Item</TableHead>
                        <TableHead>Target</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Size / Time</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {syncLogs.map((log) => (
                        <TableRow
                          key={log.id}
                          className="hover:bg-muted/20 border-b border-border/50 group"
                        >
                          <TableCell>
                            <div
                              className={`p-1.5 rounded-lg ${log.type === "push" ? "text-primary bg-primary/10" : "text-success bg-success/10"}`}
                            >
                              {log.type === "push" ? (
                                <Upload className="w-3 h-3" />
                              ) : (
                                <Download className="w-3 h-3" />
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-0.5">
                              <p className="font-bold text-sm leading-tight">{log.item}</p>
                              {log.reason && (
                                <p className="text-[10px] text-destructive font-medium flex items-center gap-1">
                                  <AlertCircle className="w-2.5 h-2.5" /> {log.reason}
                                </p>
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="text-xs font-medium text-muted-foreground">
                            {log.destination || log.source}
                          </TableCell>
                          <TableCell>
                            <Badge
                              className={`text-[10px] font-bold ${
                                log.status === "Synced"
                                  ? "bg-success/10 text-success border-success/20"
                                  : log.status === "Failed"
                                    ? "bg-destructive/10 text-destructive border-destructive/20"
                                    : "bg-amber-500/10 text-amber-600 border-amber-200"
                              }`}
                            >
                              {log.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="text-xs font-bold">{log.size}</div>
                            <div className="text-[10px] text-muted-foreground">{log.time}</div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/10 p-4 border-t border-border/40 justify-center">
                <Button variant="ghost" size="sm" className="text-xs text-primary font-bold">
                  View Full Sync History
                </Button>
              </CardFooter>
            </Card>

            {/* Offline Distribution Hub */}
            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="border-border/60 bg-background shadow-soft hover:border-primary/50 transition-all cursor-pointer group">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-muted/50 rounded-2xl flex items-center justify-center mx-auto text-primary group-hover:scale-110 transition-transform shadow-sm border border-border/40">
                    <Usb className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold">Export via USB</h4>
                    <p className="text-xs text-muted-foreground px-4">
                      Bundle learner data and course updates for physical distribution in low-LAN
                      areas.
                    </p>
                  </div>
                  <Button className="w-full h-10 shadow-md">Prepare USB Bundle</Button>
                </CardContent>
              </Card>
              <Card className="border-border/60 bg-background shadow-soft hover:border-accent/50 transition-all cursor-pointer group">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-muted/50 rounded-2xl flex items-center justify-center mx-auto text-accent group-hover:scale-110 transition-transform shadow-sm border border-border/40">
                    <Database className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold">Import Student Data</h4>
                    <p className="text-xs text-muted-foreground px-4">
                      Load offline learner submissions collected via USB or local LAN hubs.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full h-10 border-accent/20 text-accent hover:bg-accent/5"
                  >
                    Start Data Import
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sync Engine Configuration */}
          <div className="space-y-8">
            <Card className="border-border/60 shadow-soft">
              <CardHeader className="pb-4 border-b border-border/40">
                <CardTitle className="text-lg">Sync Configurations</CardTitle>
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
                    <Label className="text-sm font-bold">Delta Optimization</Label>
                    <p className="text-[10px] text-muted-foreground">
                      Sync only changed data (Fastest)
                    </p>
                  </div>
                  <Badge variant="outline" className="bg-success/5 text-success border-success/20">
                    Active
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-sm font-bold">LAN Priority Mode</Label>
                    <p className="text-[10px] text-muted-foreground">
                      Prefer campus server over Cloud
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-sm font-bold">Compression Engine</Label>
                    <p className="text-[10px] text-muted-foreground">
                      Brotli compression for assets
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent text-accent-foreground border-none shadow-lg overflow-hidden relative">
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none transform translate-x-4 -translate-y-4">
                <Globe className="w-24 h-24" />
              </div>
              <CardContent className="p-6 space-y-4 relative z-10">
                <h3 className="font-bold text-lg leading-tight">Sync Conflict Detected?</h3>
                <p className="text-xs text-accent-foreground/80 leading-relaxed">
                  JifunzeHub detected a difference between local materials and the campus server
                  version.
                </p>
                <Button
                  variant="secondary"
                  className="w-full text-xs font-bold shadow-md bg-white text-accent hover:bg-white/90"
                >
                  Resolve Conflicts
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardHeader className="pb-3 border-b border-border/40">
                <CardTitle className="text-base">Device Connections</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-muted rounded-lg">
                    <Laptop className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold">Main Teaching Laptop</p>
                    <p className="text-[10px] text-muted-foreground">This Device • Synced Now</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 opacity-60">
                  <div className="p-2 bg-muted rounded-lg">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold">Teaching Tablet</p>
                    <p className="text-[10px] text-muted-foreground">Offline • Last sync: Aug 12</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
