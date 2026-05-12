import { createFileRoute, Link } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
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
  Monitor,
  Zap,
  HardDrive,
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

const engagementData = [
  { name: "Mon", engagement: 450, offline: 320 },
  { name: "Tue", engagement: 520, offline: 410 },
  { name: "Wed", engagement: 480, offline: 380 },
  { name: "Thu", engagement: 610, offline: 520 },
  { name: "Fri", engagement: 550, offline: 480 },
  { name: "Sat", engagement: 670, offline: 550 },
  { name: "Sun", engagement: 700, offline: 610 },
];

function AdminOverviewComponent() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-10 pb-10">
        {/* Header Action Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-4xl font-black tracking-tight flex items-center gap-3">
              Welcome back, Amina 👋
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-medium">
              Here’s the current operational status of Kisumu Polytechnic.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild className="h-12 px-6 rounded-2xl font-black shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90">
              <Link to="/admin/students"><Plus className="w-5 h-5 mr-2" /> Add Student</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 px-6 rounded-2xl font-black border-border/60 hover:bg-muted">
              <Link to="/admin/lecturers"><Plus className="w-5 h-5 mr-2" /> Add Lecturer</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 px-6 rounded-2xl font-black border-border/60 hover:bg-muted">
              <Link to="/admin/local-server"><RefreshCw className="w-5 h-5 mr-2" /> Sync Institution</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 px-6 rounded-2xl font-black border-border/60 hover:bg-muted">
              <Link to="/admin/analytics"><FileDown className="w-5 h-5 mr-2" /> Generate Reports</Link>
            </Button>
          </div>
        </div>

        {/* 8 Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
           {[
             { label: "Total Students", value: "1,248", icon: GraduationCap, color: "text-blue-500", bg: "bg-blue-500/10" },
             { label: "Total Lecturers", value: "84", icon: Users, color: "text-primary", bg: "bg-primary/10" },
             { label: "Active Courses", value: "42", icon: BookOpen, color: "text-emerald-500", bg: "bg-emerald-500/10" },
             { label: "Connected Devices", value: "312", icon: Laptop, color: "text-purple-500", bg: "bg-purple-500/10" },
             { label: "Offline Rate", value: "68%", icon: WifiOff, color: "text-amber-500", bg: "bg-amber-500/10" },
             { label: "Sync Health", value: "98%", icon: Activity, color: "text-success", bg: "bg-success/10" },
             { label: "Server Storage", value: "42%", icon: HardDrive, color: "text-rose-500", bg: "bg-rose-500/10" },
             { label: "Completion Rate", value: "74%", icon: CheckCircle2, color: "text-cyan-500", bg: "bg-cyan-500/10" },
           ].map((stat, i) => (
             <Card key={i} className="border-border/40 bg-card/50 backdrop-blur-sm rounded-[1.5rem] p-4 shadow-xl hover:-translate-y-1 transition-all">
               <div className={`p-2 rounded-xl w-fit ${stat.bg} ${stat.color} mb-3`}>
                 <stat.icon className="w-5 h-5" />
               </div>
               <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-tight">{stat.label}</p>
               <h3 className="text-xl font-black mt-1">{stat.value}</h3>
             </Card>
           ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Column: Analytics & Status */}
          <div className="lg:col-span-2 space-y-10">
             {/* Institutional Performance Chart */}
             <section className="space-y-6">
                <div className="flex items-center justify-between">
                   <h2 className="text-2xl font-black flex items-center gap-3">
                      <div className="w-2 h-8 bg-primary rounded-full"></div>
                      Institutional Performance
                   </h2>
                   <div className="flex gap-2">
                      <Badge variant="outline" className="rounded-lg font-black border-border/60">Live Analytics</Badge>
                   </div>
                </div>

                <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2rem] md:rounded-[2.5rem] p-4 sm:p-6 md:p-8 shadow-2xl">
                   <div className="h-[350px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                         <AreaChart data={engagementData}>
                            <defs>
                               <linearGradient id="colorEngageAdmin" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3}/>
                                  <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                               </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 'bold'}} />
                            <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 'bold'}} />
                            <Tooltip 
                               contentStyle={{ backgroundColor: 'hsl(var(--card))', borderRadius: '20px', border: '1px solid hsl(var(--border))', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                               itemStyle={{ fontWeight: 'black' }}
                            />
                            <Area type="monotone" dataKey="engagement" stroke="var(--color-primary)" fillOpacity={1} fill="url(#colorEngageAdmin)" strokeWidth={4} />
                            <Area type="monotone" dataKey="offline" stroke="#f59e0b" fillOpacity={0} strokeWidth={4} strokeDasharray="10 10" />
                         </AreaChart>
                      </ResponsiveContainer>
                   </div>
                   <div className="flex justify-center gap-8 mt-6">
                      <div className="flex items-center gap-2">
                         <div className="w-3 h-3 rounded-full bg-primary"></div>
                         <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">Global Engagement</span>
                      </div>
                      <div className="flex items-center gap-2">
                         <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                         <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">Offline Access Rate</span>
                      </div>
                   </div>
                </Card>
             </section>

             {/* System Status & Infrastructure */}
             <section className="space-y-6">
                <h2 className="text-2xl font-black flex items-center gap-3">
                   <div className="w-2 h-8 bg-emerald-500 rounded-full"></div>
                   Infrastructure Status
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                   <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2rem] p-6 shadow-xl">
                      <div className="flex justify-between items-center mb-6">
                         <h4 className="font-black flex items-center gap-2 text-primary">
                            <Server className="w-5 h-5" /> Local Campus Server
                         </h4>
                         <Badge className="bg-success text-white border-none text-[9px] font-black">HEALTHY</Badge>
                      </div>
                      <div className="space-y-4">
                         <div className="space-y-1">
                            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                               <span>CPU Load</span>
                               <span>24%</span>
                            </div>
                            <Progress value={24} className="h-1.5" />
                         </div>
                         <div className="space-y-1">
                            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                               <span>RAM Usage</span>
                               <span>4.2 / 16 GB</span>
                            </div>
                            <Progress value={32} className="h-1.5" />
                         </div>
                         <div className="flex justify-between pt-2">
                            <div className="text-center px-4">
                               <p className="text-xl font-black">99.9%</p>
                               <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Uptime</p>
                            </div>
                            <div className="text-center px-4 border-l border-border/40">
                               <p className="text-xl font-black">1.2ms</p>
                               <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Latency</p>
                            </div>
                         </div>
                      </div>
                   </Card>

                   <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2rem] p-5 md:p-6 shadow-xl">
                      <div className="flex justify-between items-center mb-6">
                         <h4 className="font-black flex items-center gap-2 text-amber-500">
                            <RefreshCw className="w-5 h-5" /> Sync Infrastructure
                         </h4>
                         <Badge className="bg-amber-500 text-white border-none text-[9px] font-black">3 QUEUED</Badge>
                      </div>
                      <div className="space-y-4">
                         <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl border border-border/40">
                            <div className="w-2 h-2 rounded-full bg-success"></div>
                            <span className="text-xs font-bold flex-1">Student Data Sync</span>
                            <span className="text-[10px] font-black text-muted-foreground uppercase">100%</span>
                         </div>
                         <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl border border-border/40">
                            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                            <span className="text-xs font-bold flex-1">Course Media Push</span>
                            <span className="text-[10px] font-black text-muted-foreground uppercase">65%</span>
                         </div>
                         <Button asChild variant="ghost" className="w-full text-[10px] font-black uppercase tracking-widest text-primary h-8"><Link to="/admin/local-server">View Detailed Queue</Link></Button>
                      </div>
                   </Card>
                </div>
             </section>
          </div>

          {/* Right Column: Feed & Alerts */}
          <div className="space-y-10">
             {/* Live Activity Feed */}
             <Card className="border-border/40 bg-card/50 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl">
                <CardHeader className="p-6 md:p-8 pb-4 border-b border-border/40 flex flex-row items-center justify-between">
                   <CardTitle className="text-xl font-black">Live Institutional Feed</CardTitle>
                   <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                   </div>
                </CardHeader>
                <CardContent className="p-0">
                   <div className="divide-y divide-border/40">
                      {[
                        { title: "Student Login", desc: "David Mutua logged into ICT Hub 1", time: "Just now", icon: GraduationCap, color: "text-blue-500" },
                        { title: "Course Published", desc: "Solar Systems Module 4 by Dr. Omondi", time: "12m ago", icon: BookOpen, color: "text-primary" },
                        { title: "Sync Event", desc: "Library Node 2 completed weekly backup", time: "45m ago", icon: Database, color: "text-emerald-500" },
                        { title: "New Device", desc: "Android-Tab-Kisumu detected in Mech Lab", time: "2h ago", icon: Laptop, color: "text-purple-500" },
                      ].map((act, i) => (
                        <div key={i} className="p-4 sm:p-6 flex gap-4 hover:bg-muted/30 transition-all cursor-pointer group">
                           <div className={`mt-1 ${act.color} group-hover:scale-110 transition-transform`}>
                              <act.icon className="w-5 h-5" />
                           </div>
                           <div className="space-y-0.5">
                              <h4 className="font-black text-sm">{act.title}</h4>
                              <p className="text-xs font-medium text-muted-foreground leading-relaxed">{act.desc}</p>
                              <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest pt-1">{act.time}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                   <div className="p-4 bg-muted/20 border-t border-border/40">
                      <Button asChild variant="ghost" className="w-full font-black text-sm text-primary hover:bg-primary/5"><Link to="/admin/analytics">View Full Log</Link></Button>
                   </div>
                </CardContent>
             </Card>

             {/* Recent Alerts */}
             <Card className="border-destructive/20 bg-destructive/5 rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                   <AlertTriangle className="w-32 h-32" />
                </div>
                <h4 className="text-xl font-black text-destructive mb-6 flex items-center gap-2 relative z-10">
                   <Zap className="w-6 h-6" /> Critical System Alerts
                </h4>
                <div className="space-y-4 relative z-10">
                   <div className="p-4 bg-background/80 backdrop-blur rounded-2xl border border-destructive/20 shadow-sm space-y-1">
                      <p className="text-sm font-black text-destructive">Storage Threshold Exceeded</p>
                      <p className="text-xs font-medium text-muted-foreground">Local Server in Library is at 92% capacity. Content cleanup recommended.</p>
                   </div>
                   <div className="p-4 bg-background/80 backdrop-blur rounded-2xl border border-destructive/20 shadow-sm space-y-1">
                      <p className="text-sm font-black text-destructive">Sync Failure: Dept-Mech</p>
                      <p className="text-xs font-medium text-muted-foreground">14 student devices failed to sync assessments this morning.</p>
                   </div>
                </div>
                <Button asChild variant="destructive" className="w-full mt-6 rounded-2xl h-12 font-black shadow-lg"><Link to="/admin/local-server">Open Incident Center</Link></Button>
             </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
