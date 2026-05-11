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
import {
  Server,
  Wifi,
  Play,
  Square,
  Activity,
  Database,
  CloudOff,
  RefreshCw,
  HardDrive,
  Cpu,
  Zap,
  WifiOff,
  Globe,
  Lock,
  ShieldCheck,
  Terminal,
  History,
  Settings,
  ExternalLink,
  AlertTriangle,
  Network,
  Monitor,
  Usb,
  Package,
  Search,
  Users,
  CheckCircle2,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Line,
  LineChart,
} from "recharts";

export const Route = createFileRoute("/admin/local-server")({
  head: () => ({ meta: [{ title: "Server Control Center — JifunzeHub" }] }),
  component: LocalServerComponent,
});

const performanceData = [
  { time: "09:00", cpu: 12, ram: 45, network: 240 },
  { time: "10:00", cpu: 34, ram: 52, network: 450 },
  { time: "11:00", cpu: 67, ram: 65, network: 890 },
  { time: "12:00", cpu: 42, ram: 58, network: 600 },
  { time: "13:00", cpu: 28, ram: 50, network: 340 },
  { time: "14:00", cpu: 55, ram: 72, network: 780 },
  { time: "15:00", cpu: 45, ram: 68, network: 520 },
];

function LocalServerComponent() {
  return (
    <DashboardLayout
      role="admin"
      title="Infrastructure Control"
      subtitle="Institutional mission control for the campus local server, offline sync engine, and content delivery network."
    >
      <div className="space-y-8 pb-20">
        {/* Status Area */}
        <div className="grid gap-4 md:grid-cols-4">
          <StatusCard label="Server Status" value="Online" status="Success" icon={Server} />
          <StatusCard label="Active Users" value="184" status="High Load" icon={Users} warning />
          <StatusCard label="Bandwidth" value="1.2 Gbps" status="Optimal" icon={Zap} />
          <StatusCard label="Storage" value="2.4 TB" status="45% Used" icon={HardDrive} />
        </div>

        {/* Core Actions Bar */}
        <div className="bg-background border border-border/60 rounded-2xl p-4 shadow-sm flex flex-wrap gap-2 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              className="bg-primary text-primary-foreground font-black uppercase tracking-widest px-4"
            >
              <RefreshCw className="w-3 h-3 mr-2" /> Refresh Engine
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-[10px] font-black uppercase tracking-widest px-4 border-border/60"
            >
              <Database className="w-3 h-3 mr-2 text-accent" /> Run Backup
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-[10px] font-black uppercase tracking-widest px-4 border-border/60"
            >
              <Usb className="w-3 h-3 mr-2" /> USB Export
            </Button>
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              className="text-[10px] font-black uppercase tracking-widest px-4 border-border/60 text-destructive hover:bg-destructive/10"
            >
              <Square className="w-3 h-3 mr-2" /> Stop Node
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-[10px] font-black uppercase tracking-widest px-4 border-border/60 bg-muted/50"
            >
              <Terminal className="w-3 h-3 mr-2" /> SSH Console
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Live Monitoring Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Performance Visualization */}
            <Card className="border-border/60 shadow-elegant overflow-hidden">
              <CardHeader className="bg-muted/30 border-b border-border/50 flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                    <Activity className="w-4 h-4 text-primary" /> Live Performance Monitor
                  </CardTitle>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline" className="bg-background text-[10px] font-bold">
                    REAL-TIME
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="h-64 pt-6">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData}>
                    <defs>
                      <linearGradient id="colorCPU" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="rgba(255,255,255,0.05)"
                    />
                    <XAxis
                      dataKey="time"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 10 }}
                    />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        borderRadius: "8px",
                        border: "1px solid hsl(var(--border))",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="cpu"
                      stroke="var(--color-primary)"
                      fillOpacity={1}
                      fill="url(#colorCPU)"
                      strokeWidth={2}
                    />
                    <Area
                      type="monotone"
                      dataKey="ram"
                      stroke="var(--color-accent)"
                      fillOpacity={0}
                      strokeWidth={2}
                      strokeDasharray="5 5"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
              <CardFooter className="bg-muted/10 border-t border-border/50 py-3 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground mb-1">
                    CPU Load
                  </p>
                  <p className="text-sm font-black">45.2%</p>
                </div>
                <div className="text-center border-x border-border/50">
                  <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground mb-1">
                    Memory (RAM)
                  </p>
                  <p className="text-sm font-black text-accent">12.8 GB / 16 GB</p>
                </div>
                <div className="text-center">
                  <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground mb-1">
                    Temp
                  </p>
                  <p className="text-sm font-black text-emerald-500">42°C</p>
                </div>
              </CardFooter>
            </Card>

            {/* Sync Jobs & Logs */}
            <Card className="border-border/60 shadow-elegant">
              <CardHeader className="pb-4 border-b border-border/40">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm font-black uppercase tracking-widest">
                    Active Sync Pipelines
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 text-[10px] font-black uppercase tracking-widest"
                  >
                    <History className="w-3 h-3 mr-2" /> View All Logs
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border/50">
                  <SyncLogItem
                    label="Main Campus Hub &gt; Cloud"
                    status="Syncing"
                    progress={68}
                    details="Uploading 428 MB of student submissions..."
                    icon={RefreshCw}
                    active
                  />
                  <SyncLogItem
                    label="Library LAN &gt; Main Hub"
                    status="Completed"
                    progress={100}
                    details="Successfully mirrored 12 new course modules."
                    icon={CheckCircle2}
                  />
                  <SyncLogItem
                    label="Backup Schedule &gt; External Drive"
                    status="Failed"
                    progress={12}
                    details="Write error detected on USB-DRIVE-C."
                    icon={AlertTriangle}
                    warning
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Infrastructure Details */}
          <div className="space-y-6">
            {/* Hotspot & Network Control */}
            <Card className="border-border/60 bg-muted/5">
              <CardHeader className="pb-3 border-b border-border/40">
                <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-primary" /> Campus Hotspot
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold">Network Name (SSID)</span>
                  <Badge variant="outline" className="font-black">
                    JIFUNZE_HUB_MAIN
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold">Active Clients</span>
                  <span className="text-sm font-black">156 Devices</span>
                </div>
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span className="text-muted-foreground">Range Signal</span>
                    <span className="text-success">Excellent</span>
                  </div>
                  <Progress value={92} className="h-1 bg-muted" indicatorClassName="bg-success" />
                </div>
                <Button
                  variant="outline"
                  className="w-full h-8 text-[10px] font-black uppercase tracking-widest border-border/60"
                >
                  Manage Access Points
                </Button>
              </CardContent>
            </Card>

            {/* Local Content Distribution */}
            <Card className="border-border/60">
              <CardHeader className="pb-3 border-b border-border/40">
                <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                  <Package className="w-4 h-4 text-accent" /> Local Distribution
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                <div className="flex flex-col gap-3">
                  <DistItem label="Core Curriculum" size="1.2 TB" count="42 Courses" />
                  <DistItem label="Student Repos" size="420 GB" count="1,248 Repos" />
                  <DistItem label="Staff Cache" size="84 GB" count="45 Folders" />
                </div>
                <Button
                  variant="ghost"
                  className="w-full h-8 text-[10px] font-black uppercase tracking-widest border border-border/50 mt-2"
                >
                  Browse Local File System
                </Button>
              </CardContent>
            </Card>

            {/* Server Terminal Mini */}
            <Card className="bg-slate-950 text-slate-50 border-none shadow-xl font-mono overflow-hidden">
              <div className="bg-slate-900 px-3 py-1.5 flex items-center justify-between border-b border-slate-800">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50"></div>
                </div>
                <span className="text-[9px] font-black uppercase opacity-50">
                  jifunze-hub-os ~ console
                </span>
              </div>
              <CardContent className="p-3 text-[10px] space-y-1">
                <p className="text-emerald-400">$ jifunze-sync --status</p>
                <p className="opacity-70">Node: MAIN_CAMPUS_HUB_01</p>
                <p className="opacity-70">Mode: OFFLINE_RESILIENT</p>
                <p className="opacity-70">Sync Engine: v4.2.1-stable</p>
                <p className="text-emerald-400">$ uptime</p>
                <p className="opacity-70">up 14 days, 12:45, 184 users</p>
                <div className="animate-pulse inline-block h-3 w-1.5 bg-slate-50 ml-1 translate-y-0.5"></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function StatusCard({ label, value, status, icon: Icon, warning }: any) {
  return (
    <Card className="border-border/60 hover:shadow-soft transition-all group overflow-hidden">
      <div
        className={`absolute left-0 top-0 bottom-0 w-1 ${warning ? "bg-amber-500" : "bg-primary"}`}
      ></div>
      <CardContent className="p-5 flex items-center gap-4">
        <div
          className={`p-3 rounded-xl ${warning ? "bg-amber-500/10 text-amber-600" : "bg-primary/10 text-primary"}`}
        >
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground leading-none mb-1">
            {label}
          </p>
          <p className="text-xl font-black">{value}</p>
          <p
            className={`text-[9px] font-bold mt-1 uppercase ${warning ? "text-amber-600" : "text-success"}`}
          >
            {status}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

function SyncLogItem({ label, status, progress, details, icon: Icon, active, warning }: any) {
  return (
    <div className="p-4 space-y-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div
            className={`p-2 rounded-lg ${active ? "bg-primary/10 text-primary animate-pulse" : warning ? "bg-destructive/10 text-destructive" : "bg-muted text-muted-foreground"}`}
          >
            <Icon className="w-4 h-4" />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-tight">{label}</p>
            <p className="text-[10px] font-bold text-muted-foreground uppercase">{status}</p>
          </div>
        </div>
        <span className="text-xs font-black">{progress}%</span>
      </div>
      <div className="space-y-1.5">
        <Progress
          value={progress}
          className="h-1 bg-muted"
          indicatorClassName={warning ? "bg-destructive" : active ? "bg-primary" : "bg-success"}
        />
        <p className="text-[10px] text-muted-foreground italic">{details}</p>
      </div>
    </div>
  );
}

function DistItem({ label, size, count }: any) {
  return (
    <div className="flex justify-between items-center p-3 rounded-xl bg-background border border-border/50">
      <div>
        <p className="text-xs font-black uppercase tracking-tight">{label}</p>
        <p className="text-[10px] text-muted-foreground font-bold">{count}</p>
      </div>
      <Badge variant="outline" className="bg-muted text-[10px] font-bold">
        {size}
      </Badge>
    </div>
  );
}
