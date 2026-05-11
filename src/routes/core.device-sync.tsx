import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/site/PublicLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Laptop,
  Smartphone,
  Search,
  Wifi,
  WifiOff,
  RefreshCw,
  Activity,
  ShieldCheck,
  Zap,
  HardDrive,
  History,
  MoreHorizontal,
  ChevronRight,
  Monitor,
  ArrowUpRight,
  Database,
  Share2,
  Globe,
  Clock,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/core/device-sync")({
  head: () => ({ meta: [{ title: "Device Ecosystem — Real-time Sync Monitor" }] }),
  component: CoreDeviceSyncComponent,
});

function CoreDeviceSyncComponent() {
  const devices = [
    {
      id: "DEV-104",
      type: "laptop",
      user: "Amina Hussein",
      status: "online",
      lastSync: "2 mins ago",
      syncHealth: 100,
      battery: 84,
      avatar: "AH",
    },
    {
      id: "DEV-089",
      type: "mobile",
      user: "John Ochieng",
      status: "offline",
      lastSync: "4 hours ago",
      syncHealth: 98,
      battery: 42,
      avatar: "JO",
    },
    {
      id: "DEV-211",
      type: "laptop",
      user: "Library PC 4",
      status: "online",
      lastSync: "Just now",
      syncHealth: 100,
      battery: 100,
      avatar: "L4",
    },
    {
      id: "DEV-156",
      type: "mobile",
      user: "Sarah W.",
      status: "offline",
      lastSync: "2 days ago",
      syncHealth: 85,
      battery: 12,
      avatar: "SW",
    },
    {
      id: "DEV-402",
      type: "laptop",
      user: "Guest User",
      status: "syncing",
      lastSync: "Syncing...",
      syncHealth: 45,
      battery: 65,
      avatar: "GU",
    },
  ];

  return (
    <PublicLayout>
      <div className="min-h-screen bg-muted/30">
        <div className="container mx-auto py-16 px-4 max-w-7xl">
          {/* Header & Global Radar */}
          <div className="grid lg:grid-cols-3 gap-8 items-start mb-12">
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2">
                  <Badge className="bg-primary/10 text-primary border-primary/20 text-[10px] font-black uppercase tracking-widest px-3 py-1">
                    Infrastructure
                  </Badge>
                  <span className="text-xs text-muted-foreground font-bold flex items-center gap-1">
                    <History className="w-3 h-3" /> Updated 2s ago
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
                  Device <br />
                  <span className="text-primary italic">Ecosystem</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl font-medium leading-relaxed">
                  Monitor and manage the real-time synchronization state of every device across the
                  institution's local and peer networks.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                <MetricCard label="Active Nodes" value="42" icon={Wifi} color="text-success" />
                <MetricCard
                  label="Sync Health"
                  value="98.2%"
                  icon={Activity}
                  color="text-primary"
                />
                <MetricCard
                  label="Data Mirror"
                  value="240 GB"
                  icon={Database}
                  color="text-accent"
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative bg-background border border-border/60 rounded-[40px] p-8 shadow-2xl overflow-hidden aspect-square flex flex-col items-center justify-center text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 -z-10"></div>

              {/* Visual Radar Simulation */}
              <div className="relative w-48 h-48 mb-6">
                <div className="absolute inset-0 border border-primary/20 rounded-full"></div>
                <div className="absolute inset-4 border border-primary/10 rounded-full"></div>
                <div className="absolute inset-10 border border-primary/5 rounded-full"></div>

                {/* Scanning Beam */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 w-24 h-24 -mt-24 -ml-24 origin-bottom-right bg-gradient-to-tr from-primary/20 to-transparent rounded-tl-full blur-sm"
                ></motion.div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <RefreshCw className="w-10 h-10 text-primary animate-spin-slow" />
                </div>

                {/* Dot Indicators */}
                <SyncDot className="top-10 right-10" color="bg-success" delay={0} />
                <SyncDot className="bottom-12 left-14" color="bg-primary" delay={1} />
                <SyncDot className="top-20 left-4" color="bg-accent" delay={2} />
              </div>

              <h3 className="font-black uppercase tracking-tight text-lg leading-tight">
                Sync Radar <br />
                <span className="text-primary">Scanning...</span>
              </h3>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-2">
                12 devices nearby
              </p>
            </motion.div>
          </div>

          {/* Device Table Card */}
          <Card className="border-border/60 shadow-elegant rounded-[32px] overflow-hidden bg-background/50 backdrop-blur-md">
            <CardHeader className="p-8 border-b border-border/40 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <CardTitle className="text-2xl font-black uppercase tracking-tight">
                  Active Ecosystem Registry
                </CardTitle>
                <CardDescription className="font-medium">
                  Managing hardware identities and sync integrity.
                </CardDescription>
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <div className="relative flex-1 md:w-80">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search Device ID, User, or Location..."
                    className="pl-10 h-11 bg-muted/40 border-border/60 focus-visible:ring-primary/50 rounded-2xl"
                  />
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-11 w-11 rounded-2xl border-border/60 shrink-0"
                >
                  <RefreshCw className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-muted/30">
                    <TableRow className="hover:bg-transparent border-b border-border/50">
                      <TableHead className="text-[10px] font-black uppercase tracking-widest px-8 py-5">
                        Device Identity
                      </TableHead>
                      <TableHead className="text-[10px] font-black uppercase tracking-widest px-8 py-5">
                        Assigned User
                      </TableHead>
                      <TableHead className="text-[10px] font-black uppercase tracking-widest px-8 py-5">
                        Connection Status
                      </TableHead>
                      <TableHead className="text-[10px] font-black uppercase tracking-widest px-8 py-5">
                        Sync Integrity
                      </TableHead>
                      <TableHead className="text-right text-[10px] font-black uppercase tracking-widest px-8 py-5">
                        Last Activity
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {devices.map((device, i) => (
                      <motion.tr
                        key={device.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="group hover:bg-muted/10 transition-colors border-b border-border/40 last:border-0"
                      >
                        <TableCell className="px-8 py-5">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-muted/50 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                              {device.type === "laptop" ? (
                                <Monitor className="w-5 h-5 text-muted-foreground" />
                              ) : (
                                <Smartphone className="w-5 h-5 text-muted-foreground" />
                              )}
                            </div>
                            <div>
                              <p className="font-black uppercase tracking-tight text-sm">
                                {device.id}
                              </p>
                              <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">
                                {device.type}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="px-8 py-5">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8 border-2 border-border/50">
                              <AvatarFallback className="text-[10px] font-black bg-primary/10 text-primary uppercase">
                                {device.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <span className="font-bold text-sm">{device.user}</span>
                          </div>
                        </TableCell>
                        <TableCell className="px-8 py-5">
                          <Badge
                            variant="outline"
                            className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 ${
                              device.status === "online"
                                ? "bg-success/5 text-success border-success/30"
                                : device.status === "syncing"
                                  ? "bg-primary/10 text-primary border-primary/30 animate-pulse"
                                  : "bg-muted text-muted-foreground border-border"
                            }`}
                          >
                            <div
                              className={`w-1.5 h-1.5 rounded-full mr-2 ${
                                device.status === "online"
                                  ? "bg-success shadow-[0_0_8px_rgba(var(--success),0.5)]"
                                  : device.status === "syncing"
                                    ? "bg-primary"
                                    : "bg-muted-foreground"
                              }`}
                            ></div>
                            {device.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="px-8 py-5">
                          <div className="space-y-2 w-32">
                            <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest">
                              <span className="text-muted-foreground">Health</span>
                              <span
                                className={
                                  device.syncHealth < 90 ? "text-amber-600" : "text-primary"
                                }
                              >
                                {device.syncHealth}%
                              </span>
                            </div>
                            <Progress
                              value={device.syncHealth}
                              className="h-1 bg-muted"
                              indicatorClassName={
                                device.syncHealth < 90 ? "bg-amber-500" : "bg-primary"
                              }
                            />
                          </div>
                        </TableCell>
                        <TableCell className="px-8 py-5 text-right">
                          <div className="flex flex-col items-end gap-1">
                            <span className="text-xs font-black uppercase tracking-tight">
                              {device.lastSync}
                            </span>
                            <span className="text-[9px] text-muted-foreground font-bold flex items-center gap-1 uppercase tracking-widest">
                              <Globe className="w-3 h-3" /> LAN Gateway
                            </span>
                          </div>
                        </TableCell>
                      </motion.tr>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/10 border-t border-border/50 py-4 px-8 flex items-center justify-between">
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                Ecosystem Health: <span className="text-success">Optimal</span>
              </p>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-[10px] font-black uppercase tracking-widest hover:bg-muted"
              >
                View Historical Logs <ChevronRight className="ml-1 w-3 h-3" />
              </Button>
            </CardFooter>
          </Card>

          {/* Peer-to-Peer Sync Visualization Row */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card className="border-border/60 bg-primary/5 shadow-soft border-dashed">
              <CardHeader>
                <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2 text-primary">
                  <Share2 className="w-4 h-4" /> Peer-to-Peer Relay
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-background border border-border shadow-2xl flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping"></div>
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold">Active P2P Nodes</h4>
                  <p className="text-xs text-muted-foreground font-medium max-w-xs">
                    8 devices are currently sharing data via Peer-to-Peer Wi-Fi Direct sync.
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="text-[10px] font-black uppercase tracking-widest h-9 px-6 border-border/60"
                >
                  Manage Relay Settings
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-accent/5 shadow-soft">
              <CardHeader>
                <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2 text-accent-foreground">
                  <Zap className="w-4 h-4 text-accent" /> High-Throughput Sync
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-2">
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span className="text-muted-foreground">Bandwidth Utilization</span>
                    <span className="text-accent">450 Mbps</span>
                  </div>
                  <Progress
                    value={45}
                    className="h-1.5 bg-muted"
                    indicatorClassName="bg-accent shadow-[0_0_8px_rgba(var(--accent),0.5)]"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span className="text-muted-foreground">Mirror Success Rate</span>
                    <span className="text-success">99.9%</span>
                  </div>
                  <Progress value={99} className="h-1.5 bg-muted" indicatorClassName="bg-success" />
                </div>
                <div className="flex justify-center pt-2">
                  <Badge
                    variant="outline"
                    className="bg-background text-[9px] font-black uppercase px-3 py-1"
                  >
                    Infrastructure: Optimal
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}

function MetricCard({ label, value, icon: Icon, color }: any) {
  return (
    <Card className="border-border/60 shadow-elegant bg-background/80 backdrop-blur-md group hover:border-primary/40 transition-all duration-300">
      <CardContent className="p-6 flex items-center gap-4">
        <div
          className={`p-3 rounded-2xl bg-muted/50 ${color} group-hover:scale-110 transition-transform duration-500`}
        >
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground leading-none mb-1">
            {label}
          </p>
          <h3 className="text-2xl font-black tracking-tight">{value}</h3>
        </div>
      </CardContent>
    </Card>
  );
}

function SyncDot({ className, color, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
      transition={{ delay, duration: 2, repeat: Infinity }}
      className={`absolute w-3 h-3 rounded-full border-2 border-background shadow-lg ${color} ${className}`}
    ></motion.div>
  );
}
