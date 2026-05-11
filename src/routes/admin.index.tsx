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
import {
  Users,
  GraduationCap,
  Server,
  BookOpen,
  WifiOff,
  Laptop,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Activity,
  Database,
  RefreshCw,
  Plus,
  FileDown,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  ShieldCheck,
  Megaphone,
  BarChart3,
  LayoutDashboard,
  Settings,
  Monitor,
  Briefcase,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  BarChart,
  Cell,
} from "recharts";

export const Route = createFileRoute("/admin/")({
  head: () => ({ meta: [{ title: "Institution Command Center — JifunzeHub" }] }),
  component: AdminOverviewComponent,
});

const performanceData = [
  { name: "Mon", engagement: 45, completion: 32 },
  { name: "Tue", engagement: 52, completion: 41 },
  { name: "Wed", engagement: 48, completion: 38 },
  { name: "Thu", engagement: 61, completion: 52 },
  { name: "Fri", engagement: 55, completion: 48 },
  { name: "Sat", engagement: 67, completion: 55 },
  { name: "Sun", engagement: 70, completion: 61 },
];

function AdminOverviewComponent() {
  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12 ? "Good morning" : currentHour < 18 ? "Good afternoon" : "Good evening";

  return (
    <DashboardLayout role="admin">
      <div className="space-y-8 pb-20">
        {/* Mission Control Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 bg-gradient-to-br from-primary/10 via-background to-accent/5 p-8 rounded-3xl border border-primary/10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

          <div className="z-10 space-y-2">
            <div className="flex items-center gap-2">
              <Badge className="bg-primary text-primary-foreground font-black px-2 py-0.5 rounded-full text-[10px] uppercase tracking-widest">
                Admin Control
              </Badge>
              <span className="text-xs text-muted-foreground font-bold flex items-center gap-1">
                <Clock className="w-3 h-3" /> System Live: Kisumu Poly
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-foreground uppercase">
              {greeting}, <span className="text-primary">Amina</span> 👋
            </h1>
            <p className="text-muted-foreground max-w-xl font-medium">
              Institution infrastructure is performing optimally. 18 devices are currently synced to
              the local network.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 z-10 w-full md:w-auto">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 flex-1 md:flex-none font-bold">
              <Plus className="w-4 h-4 mr-2" /> Add Student
            </Button>
            <Button
              variant="outline"
              className="bg-background/50 backdrop-blur border-border/60 hover:bg-muted flex-1 md:flex-none shadow-sm font-bold"
            >
              <FileDown className="w-4 h-4 mr-2 text-accent" /> Gen. Report
            </Button>
          </div>
        </div>

        {/* Global Stats Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <AdminStatCard
            title="Total Students"
            value="1,248"
            trend="+12.5%"
            trendUp={true}
            icon={GraduationCap}
            color="text-blue-500"
          />
          <AdminStatCard
            title="Active Courses"
            value="42"
            trend="+3"
            trendUp={true}
            icon={BookOpen}
            color="text-emerald-500"
          />
          <AdminStatCard
            title="Offline Syncs"
            value="284"
            trend="68%"
            trendUp={true}
            icon={WifiOff}
            color="text-amber-500"
          />
          <AdminStatCard
            title="Server Uptime"
            value="99.9%"
            trend="Stable"
            trendUp={true}
            icon={Server}
            color="text-primary"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Column: Analytics & Health */}
          <div className="lg:col-span-2 space-y-6">
            {/* System Health Monitor */}
            <Card className="border-border/60 shadow-elegant overflow-hidden">
              <CardHeader className="bg-muted/30 border-b border-border/50 pb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Activity className="w-5 h-5 text-primary" /> Infrastructure Health
                    </CardTitle>
                    <CardDescription>Live status of the campus offline ecosystem.</CardDescription>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-success/10 text-success border-success/30 font-black px-3 py-1"
                  >
                    OPERATIONAL
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid sm:grid-cols-3 gap-6">
                  <HealthMeter label="Local Server" value={98} status="Online" color="bg-primary" />
                  <HealthMeter
                    label="Sync Engine"
                    value={94}
                    status="Healthy"
                    color="bg-emerald-500"
                  />
                  <HealthMeter
                    label="Storage (2TB)"
                    value={42}
                    status="42% Used"
                    color="bg-amber-500"
                  />
                </div>

                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-muted/20 border border-border/50 flex items-center gap-4">
                    <div className="p-3 bg-background rounded-xl shadow-sm text-primary">
                      <Laptop className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                        Connected Devices
                      </p>
                      <p className="text-xl font-black">
                        18 <span className="text-xs text-success ml-1">Live</span>
                      </p>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-muted/20 border border-border/50 flex items-center gap-4">
                    <div className="p-3 bg-background rounded-xl shadow-sm text-accent">
                      <Database className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                        Sync Queue
                      </p>
                      <p className="text-xl font-black">
                        3 <span className="text-xs text-amber-500 ml-1">Pending</span>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Institutional Analytics */}
            <Card className="border-border/60 shadow-elegant">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Institutional Engagement</CardTitle>
                    <CardDescription>
                      Learning activity across all departments (last 7 days).
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="h-8 text-primary font-bold">
                      Details
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="h-80 pt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData}>
                    <defs>
                      <linearGradient id="colorEngageAdmin" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="rgba(255,255,255,0.05)"
                    />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        borderRadius: "12px",
                        border: "1px solid hsl(var(--border))",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="engagement"
                      stroke="var(--color-primary)"
                      fillOpacity={1}
                      fill="url(#colorEngageAdmin)"
                      strokeWidth={3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Recent Ecosystem Activity */}
            <Card className="border-border/60 shadow-elegant overflow-hidden">
              <CardHeader>
                <CardTitle>Ecosystem Activity Feed</CardTitle>
                <CardDescription>
                  Latest events from local hubs and student devices.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border/50">
                  <AdminActivityItem
                    icon={GraduationCap}
                    label="New Student Registered"
                    target="David Mutua (ICT)"
                    time="12 mins ago"
                    status="Local"
                  />
                  <AdminActivityItem
                    icon={BookOpen}
                    label="Course Content Published"
                    target="Networking Essentials"
                    time="45 mins ago"
                    status="Synced"
                  />
                  <AdminActivityItem
                    icon={AlertTriangle}
                    label="Sync Conflict Detected"
                    target="Device: SAMSUNG-TAB-02"
                    time="2 hours ago"
                    status="Attention"
                    warning
                  />
                  <AdminActivityItem
                    icon={RefreshCw}
                    label="Institution Backup Complete"
                    target="Central Storage Hub"
                    time="3 hours ago"
                    status="Success"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Alerts, Announcements, Control */}
          <div className="space-y-6">
            {/* Quick Actions Panel */}
            <Card className="border-border/60 bg-muted/10">
              <CardHeader className="pb-3 border-b border-border/40">
                <CardTitle className="text-base">System Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="p-4 grid grid-cols-2 gap-2">
                <ActionBtn icon={RefreshCw} label="Force Sync" />
                <ActionBtn icon={Database} label="Backup Now" />
                <ActionBtn icon={ShieldCheck} label="Security Scan" />
                <ActionBtn icon={Settings} label="System Config" />
              </CardContent>
            </Card>

            {/* Smart Alerts */}
            <Card className="border-destructive/20 bg-destructive/5 shadow-sm overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <AlertTriangle className="w-16 h-16" />
              </div>
              <CardHeader className="pb-2 relative z-10">
                <CardTitle className="text-base flex items-center gap-2 text-destructive">
                  <AlertTriangle className="w-4 h-4" /> System Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 relative z-10">
                <div className="p-2.5 bg-background rounded-lg border border-destructive/20 text-xs font-medium space-y-1">
                  <p className="font-bold">Offline Sync Gap</p>
                  <p className="text-muted-foreground opacity-80 leading-relaxed">
                    12 students in Mechanical Dept haven't synced in &gt; 14 days.
                  </p>
                </div>
                <Button
                  variant="destructive"
                  className="w-full h-8 text-[10px] font-black uppercase tracking-widest"
                >
                  Open Alert Center
                </Button>
              </CardContent>
            </Card>

            {/* Announcements */}
            <Card className="border-accent/20 bg-accent/5">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2 text-accent-foreground">
                  <Megaphone className="w-4 h-4 text-accent" /> Institutional Notices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-background rounded-xl p-3 border border-border/60 shadow-sm space-y-1">
                  <p className="text-xs font-black uppercase tracking-widest text-accent">
                    Server Maintenance
                  </p>
                  <p className="text-xs font-bold">Planned Downtime: Saturday 2AM</p>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">
                    Local LAN hub will be unavailable for 1 hour due to memory upgrade.
                  </p>
                </div>
                <div className="bg-background rounded-xl p-3 border border-border/60 shadow-sm space-y-1 opacity-70">
                  <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                    Term Schedule
                  </p>
                  <p className="text-xs font-bold">Exam Week Starts Aug 15</p>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">
                    Ensure all assessment packages are deployed to local servers before Monday.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Department Performance Mini */}
            <Card className="border-border/60">
              <CardHeader className="pb-3 border-b border-border/40">
                <CardTitle className="text-base">Dept. Completion Rates</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                <DeptMiniStat label="ICT Department" value={82} color="bg-primary" />
                <DeptMiniStat label="Electrical" value={64} color="bg-emerald-500" />
                <DeptMiniStat label="Mechanical" value={42} color="bg-amber-500" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function AdminStatCard({ title, value, trend, trendUp, icon: Icon, color }: any) {
  return (
    <Card className="border-border/60 hover:shadow-elegant transition-all group">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div
            className={`p-3 rounded-2xl bg-muted/50 ${color} group-hover:scale-110 transition-transform`}
          >
            <Icon className="w-6 h-6" />
          </div>
          <Badge
            variant="outline"
            className={`flex items-center gap-0.5 border-none font-bold text-[10px] ${trendUp ? "text-success bg-success/5" : "text-destructive bg-destructive/5"}`}
          >
            {trendUp ? (
              <ArrowUpRight className="w-3 h-3" />
            ) : (
              <ArrowDownRight className="w-3 h-3" />
            )}
            {trend}
          </Badge>
        </div>
        <div>
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
            {title}
          </p>
          <h3 className="text-3xl font-black mt-1">{value}</h3>
        </div>
      </CardContent>
    </Card>
  );
}

function HealthMeter({ label, value, status, color }: any) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-end">
        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
        <span className="text-[10px] font-bold">{status}</span>
      </div>
      <Progress value={value} className="h-2 bg-muted" indicatorClassName={color} />
      <div className="flex justify-between text-[9px] font-bold text-muted-foreground">
        <span>0%</span>
        <span>100%</span>
      </div>
    </div>
  );
}

function AdminActivityItem({ icon: Icon, label, target, time, status, warning }: any) {
  return (
    <div className="p-4 flex items-center gap-4 hover:bg-muted/20 transition-colors">
      <div
        className={`p-2 rounded-xl shrink-0 ${warning ? "bg-destructive/10 text-destructive" : "bg-muted text-muted-foreground"}`}
      >
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold truncate">{label}</p>
        <p className="text-[10px] text-muted-foreground font-medium truncate uppercase tracking-wider">
          {target} • {time}
        </p>
      </div>
      <Badge
        variant="outline"
        className={`text-[10px] font-bold shrink-0 ${warning ? "text-destructive border-destructive/20" : ""}`}
      >
        {status}
      </Badge>
    </div>
  );
}

function ActionBtn({ icon: Icon, label }: any) {
  return (
    <Button
      variant="outline"
      className="h-auto flex-col items-center justify-center p-3 gap-2 border-border/60 hover:bg-muted transition-all rounded-xl bg-background"
    >
      <Icon className="w-4 h-4 text-primary" />
      <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
    </Button>
  );
}

function DeptMiniStat({ label, value, color }: any) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
        <span className="text-muted-foreground">{label}</span>
        <span className="text-foreground">{value}%</span>
      </div>
      <Progress value={value} className="h-1 bg-muted" indicatorClassName={color} />
    </div>
  );
}
