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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  XAxis,
  YAxis,
  Area,
  AreaChart,
  PieChart,
  Pie,
  Cell,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Activity,
  Users,
  BookOpen,
  BarChart3,
  Download,
  FileDown,
  Calendar,
  Filter,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  WifiOff,
  Database,
  ShieldCheck,
  PieChart as LucidePie,
  Target,
  Award,
  Briefcase,
  GraduationCap,
  Laptop,
  Monitor,
} from "lucide-react";

export const Route = createFileRoute("/admin/analytics")({
  head: () => ({ meta: [{ title: "Institution Intelligence — JifunzeHub" }] }),
  component: AdminAnalyticsComponent,
});

const offlineUsageData = [
  { month: "Jan", cache: 4500, usb: 1200, sync: 3200 },
  { month: "Feb", cache: 5200, usb: 1500, sync: 3800 },
  { month: "Mar", cache: 6800, usb: 2100, sync: 4200 },
  { month: "Apr", cache: 7400, usb: 2800, sync: 4900 },
  { month: "May", cache: 8900, usb: 3400, sync: 5600 },
  { month: "Jun", cache: 9200, usb: 3100, sync: 6100 },
];

const deptPerformanceData = [
  { dept: "ICT", enrollment: 450, engagement: 88, completion: 82 },
  { dept: "Electrical", enrollment: 320, engagement: 75, completion: 64 },
  { dept: "Mechanical", enrollment: 210, engagement: 62, completion: 42 },
  { dept: "Hospitality", enrollment: 180, engagement: 91, completion: 75 },
  { dept: "Plumbing", enrollment: 120, engagement: 58, completion: 58 },
];

const institutionalHealthData = [
  { subject: "Pedagogy", A: 120, B: 110, fullMark: 150 },
  { subject: "Sync Health", A: 98, B: 130, fullMark: 150 },
  { subject: "Satisfaction", A: 86, B: 130, fullMark: 150 },
  { subject: "Completion", A: 99, B: 100, fullMark: 150 },
  { subject: "Resources", A: 85, B: 90, fullMark: 150 },
  { subject: "Security", A: 65, B: 85, fullMark: 150 },
];

const COLORS = [
  "var(--color-primary)",
  "var(--color-accent)",
  "var(--color-emerald-500)",
  "var(--color-amber-500)",
  "var(--color-indigo-500)",
];

function AdminAnalyticsComponent() {
  return (
    <DashboardLayout
      role="admin"
      title="Institution Intelligence"
      subtitle="Deep institutional analytics on offline usage patterns, curriculum engagement, and departmental productivity."
    >
      <div className="space-y-8 pb-20">
        {/* Analytics Control Bar */}
        <div className="bg-background border border-border/60 rounded-2xl p-4 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <Select defaultValue="this-semester">
                <SelectTrigger className="w-[180px] h-9 border-border/60 font-bold bg-muted/30">
                  <SelectValue placeholder="Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last-30">Last 30 Days</SelectItem>
                  <SelectItem value="this-semester">Current Semester</SelectItem>
                  <SelectItem value="academic-year">Academic Year 2024</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="h-6 w-px bg-border/60 mx-1 hidden md:block"></div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px] h-9 border-border/60 font-bold bg-muted/30">
                  <SelectValue placeholder="All Departments" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="ict">ICT Department</SelectItem>
                  <SelectItem value="eng">Engineering</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <Button
              variant="outline"
              size="sm"
              className="h-9 font-black uppercase tracking-widest text-[10px] border-border/60"
            >
              <Download className="w-3.5 h-3.5 mr-2" /> Export PDF
            </Button>
            <Button className="h-9 bg-primary text-primary-foreground font-black uppercase tracking-widest text-[10px] shadow-lg shadow-primary/20">
              <FileDown className="w-3.5 h-3.5 mr-2" /> Data Export (CSV)
            </Button>
          </div>
        </div>

        {/* Top-Level KPI Summary */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <KPICard
            title="Institutional Growth"
            value="+24.8%"
            trend="12.4% vs last term"
            up={true}
            icon={TrendingUp}
            color="text-primary"
          />
          <KPICard
            title="Average Satisfaction"
            value="4.8/5"
            trend="Based on 842 surveys"
            up={true}
            icon={Award}
            color="text-emerald-500"
          />
          <KPICard
            title="Infrastructure Health"
            value="98.2%"
            trend="Live sync reliability"
            up={true}
            icon={ShieldCheck}
            color="text-accent"
          />
          <KPICard
            title="Sync Latency"
            value="12.4s"
            trend="-2.1s improvement"
            up={true}
            icon={Zap}
            color="text-amber-500"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Offline Distribution Main Chart */}
          <Card className="lg:col-span-2 border-border/60 shadow-elegant">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg font-black uppercase tracking-tight">
                  Offline Ecosystem Usage
                </CardTitle>
                <CardDescription>
                  Engagement metrics via Local LAN, USB, and Peer-to-Peer Sync.
                </CardDescription>
              </div>
              <div className="hidden sm:flex gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    Local LAN
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent"></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    USB Distribution
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="h-80 pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={offlineUsageData}>
                  <defs>
                    <linearGradient id="colorCacheAdmin" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorSyncAdmin" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-accent)" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="var(--color-accent)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="rgba(255,255,255,0.05)"
                  />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                  <RechartsTooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      borderRadius: "12px",
                      border: "1px solid hsl(var(--border))",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="cache"
                    stroke="var(--color-primary)"
                    fillOpacity={1}
                    fill="url(#colorCacheAdmin)"
                    strokeWidth={3}
                  />
                  <Area
                    type="monotone"
                    dataKey="sync"
                    stroke="var(--color-accent)"
                    fillOpacity={1}
                    fill="url(#colorSyncAdmin)"
                    strokeWidth={3}
                    strokeDasharray="5 5"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Institutional Health Radar */}
          <Card className="border-border/60 shadow-elegant">
            <CardHeader>
              <CardTitle className="text-lg font-black uppercase tracking-tight text-center">
                Institutional Health Radar
              </CardTitle>
              <CardDescription className="text-center">
                Balanced scorecard across institutional KPIs.
              </CardDescription>
            </CardHeader>
            <CardContent className="h-72 flex items-center justify-center pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={institutionalHealthData}>
                  <PolarGrid stroke="rgba(255,255,255,0.1)" />
                  <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fontWeight: "bold" }} />
                  <Radar
                    name="Institution"
                    dataKey="A"
                    stroke="var(--color-primary)"
                    fill="var(--color-primary)"
                    fillOpacity={0.5}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
            <CardFooter className="flex flex-col gap-2 pt-0">
              <div className="flex justify-between w-full text-[10px] font-black uppercase tracking-widest text-muted-foreground border-t border-border/50 pt-4">
                <span>Performance Target</span>
                <span className="text-primary">ACHIEVED</span>
              </div>
            </CardFooter>
          </Card>

          {/* Department Comparison Bar */}
          <Card className="lg:col-span-2 border-border/60 shadow-elegant">
            <CardHeader>
              <CardTitle className="text-lg font-black uppercase tracking-tight">
                Departmental Productivity Matrix
              </CardTitle>
              <CardDescription>
                Correlation between enrollment, engagement, and completion.
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80 pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={deptPerformanceData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="rgba(255,255,255,0.05)"
                  />
                  <XAxis dataKey="dept" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                  <RechartsTooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      borderRadius: "12px",
                      border: "1px solid hsl(var(--border))",
                    }}
                  />
                  <Bar
                    dataKey="engagement"
                    fill="var(--color-primary)"
                    radius={[4, 4, 0, 0]}
                    name="Engagement %"
                  />
                  <Bar
                    dataKey="completion"
                    fill="var(--color-accent)"
                    radius={[4, 4, 0, 0]}
                    name="Completion %"
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Efficiency & Insight Cards */}
          <div className="space-y-6">
            <Card className="border-border/60 bg-primary/5">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" /> Intelligence Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-background rounded-xl border border-border/50 shadow-sm space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary">
                    Content Impact
                  </p>
                  <p className="text-xs font-bold leading-relaxed">
                    Video lessons are driving 2.4x higher completion in the ICT department compared
                    to text-only.
                  </p>
                </div>
                <div className="p-3 bg-background rounded-xl border border-border/50 shadow-sm space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-accent">
                    Sync Pattern
                  </p>
                  <p className="text-xs font-bold leading-relaxed">
                    Peak sync activity occurs on Tuesdays at 10AM (Campus Hotspot).
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-black uppercase tracking-widest">
                  Top Resource Efficiency
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <EfficiencyItem label="Local Cache Efficiency" value={92} icon={Database} />
                <EfficiencyItem label="Lecturer Response Time" value={78} icon={Activity} />
                <EfficiencyItem label="Device Connectivity" value={85} icon={Laptop} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function KPICard({ title, value, trend, up, icon: Icon, color }: any) {
  return (
    <Card className="border-border/60 hover:shadow-elegant transition-all bg-background overflow-hidden relative group">
      <div
        className={`absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform ${color}`}
      >
        <Icon className="w-16 h-16" />
      </div>
      <CardContent className="p-6 relative z-10">
        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">
          {title}
        </p>
        <div className="flex items-end gap-3">
          <h3 className="text-3xl font-black tracking-tighter">{value}</h3>
          <div
            className={`flex items-center gap-1 text-[10px] font-bold mb-1 ${up ? "text-success" : "text-destructive"}`}
          >
            {up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
            {trend}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function EfficiencyItem({ label, value, icon: Icon }: any) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
        <span className="text-muted-foreground flex items-center gap-2">
          <Icon className="w-3 h-3" /> {label}
        </span>
        <span className="text-foreground">{value}%</span>
      </div>
      <Progress value={value} className="h-1 bg-muted" indicatorClassName="bg-primary" />
    </div>
  );
}
