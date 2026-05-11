import { createFileRoute } from "@tanstack/react-router";
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
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";
import {
  Download,
  Calendar,
  Filter,
  ArrowUpRight,
  TrendingUp,
  Activity,
  Users,
  BookOpen,
  WifiOff,
  Zap,
  BarChart3,
  PieChart as PieChartIcon,
  FileText,
  Clock,
  Globe,
  Database,
} from "lucide-react";

export const Route = createFileRoute("/admin/analytics")({
  component: AdminAnalyticsComponent,
});

const deptPerformance = [
  { subject: 'ICT', A: 120, B: 110, fullMark: 150 },
  { subject: 'Electrical', A: 98, B: 130, fullMark: 150 },
  { subject: 'Mechanical', A: 86, B: 130, fullMark: 150 },
  { subject: 'Hospitality', A: 99, B: 100, fullMark: 150 },
  { subject: 'Automotive', A: 85, B: 90, fullMark: 150 },
];

const usageTrend = [
  { name: "Jan", students: 400, lecturers: 240, offline: 380 },
  { name: "Feb", students: 520, lecturers: 260, offline: 490 },
  { name: "Mar", students: 480, lecturers: 280, offline: 420 },
  { name: "Apr", students: 780, lecturers: 350, offline: 710 },
  { name: "May", students: 820, lecturers: 380, offline: 780 },
  { name: "Jun", students: 950, lecturers: 420, offline: 890 },
];

function AdminAnalyticsComponent() {
  return (
    <DashboardLayout role="admin" title="Advanced Institution Intelligence" subtitle="Deep-dive analytics, predictive modeling, and institutional reporting.">
      <div className="space-y-10 pb-20">
        {/* Top Control Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
           <div className="flex items-center gap-2">
              <Badge variant="outline" className="h-10 px-4 rounded-xl font-black border-border/60 bg-card/40 backdrop-blur-sm">
                 <Calendar className="w-4 h-4 mr-2 text-primary" /> Term 2, 2026
              </Badge>
              <Badge variant="outline" className="h-10 px-4 rounded-xl font-black border-border/60 bg-card/40 backdrop-blur-sm">
                 <Globe className="w-4 h-4 mr-2 text-primary" /> Global Institution
              </Badge>
           </div>
           
           <div className="flex gap-3">
              <Button variant="outline" className="h-12 px-6 rounded-2xl font-black border-border/60 hover:bg-muted">
                 <Filter className="w-4 h-4 mr-2" /> Adjust Parameters
              </Button>
              <Button className="h-12 px-8 rounded-2xl font-black bg-primary text-white shadow-lg shadow-primary/20">
                 <Download className="w-4 h-4 mr-2" /> Export Strategic Report
              </Button>
           </div>
        </div>

        {/* Intelligence Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
           {[
             { label: "Active Learners", value: "1,248", trend: "+12%", up: true, icon: Users },
             { label: "Sync Integrity", value: "98.4%", trend: "+2%", up: true, icon: Activity },
             { label: "Course Completion", value: "74.2%", trend: "-5%", up: false, icon: BookOpen },
             { label: "Offline Engagement", value: "88%", trend: "+15%", up: true, icon: WifiOff },
             { label: "Assessment Avg", value: "76%", trend: "+3%", up: true, icon: Zap },
             { label: "Infrastructure Hubs", value: "12/12", trend: "Stable", up: true, icon: Database },
           ].map((stat, i) => (
             <Card key={i} className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2rem] p-6 shadow-xl relative overflow-hidden group">
                <div className="space-y-3 relative z-10">
                   <div className="flex justify-between items-start">
                      <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest leading-tight">{stat.label}</p>
                      <stat.icon className="w-4 h-4 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                   </div>
                   <h3 className="text-2xl font-black">{stat.value}</h3>
                   <div className={`flex items-center gap-1 text-[10px] font-black ${stat.up ? 'text-success' : 'text-destructive'}`}>
                      {stat.up ? <ArrowUpRight className="w-3 h-3" /> : <TrendingUp className="w-3 h-3 rotate-180" />}
                      {stat.trend}
                   </div>
                </div>
             </Card>
           ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
           {/* Global Usage Trends */}
           <Card className="lg:col-span-2 border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
              <div className="flex justify-between items-center mb-10">
                 <div>
                    <h3 className="text-3xl font-black tracking-tighter uppercase">Platform Growth & Usage</h3>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Multi-dimensional tracking of institutional adoption</p>
                 </div>
                 <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                       <div className="w-3 h-3 rounded-full bg-primary"></div>
                       <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Learners</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                       <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Offline Only</span>
                    </div>
                 </div>
              </div>
              
              <div className="h-[400px] w-full">
                 <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={usageTrend}>
                       <defs>
                          <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3}/>
                             <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                          </linearGradient>
                       </defs>
                       <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                       <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 'bold'}} />
                       <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 'bold'}} />
                       <Tooltip 
                          contentStyle={{ backgroundColor: 'hsl(var(--card))', borderRadius: '20px', border: '1px solid hsl(var(--border))', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                       />
                       <Area type="monotone" dataKey="students" stroke="var(--color-primary)" fillOpacity={1} fill="url(#colorStudents)" strokeWidth={4} />
                       <Area type="monotone" dataKey="offline" stroke="#f59e0b" fillOpacity={0} strokeWidth={4} strokeDasharray="10 10" />
                    </AreaChart>
                 </ResponsiveContainer>
              </div>
           </Card>

           {/* Department Competency Radar */}
           <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
              <h3 className="text-xl font-black mb-10 text-center uppercase tracking-widest">Competency Benchmarking</h3>
              <div className="h-[400px] w-full">
                 <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={deptPerformance}>
                       <PolarGrid stroke="rgba(255,255,255,0.1)" />
                       <PolarAngleAxis dataKey="subject" tick={{fontSize: 10, fontWeight: 'bold', fill: 'hsl(var(--muted-foreground))'}} />
                       <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                       <Radar name="Institutional Avg" dataKey="A" stroke="var(--color-primary)" fill="var(--color-primary)" fillOpacity={0.3} />
                       <Radar name="Target Bench" dataKey="B" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.1} />
                       <Tooltip contentStyle={{ borderRadius: '12px' }} />
                       <Legend wrapperStyle={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }} />
                    </RadarChart>
                 </ResponsiveContainer>
              </div>
           </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           {/* Offline Engagement Stats */}
           <Card className="lg:col-span-2 border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
              <h4 className="text-xl font-black mb-8 flex items-center gap-2">
                 <WifiOff className="w-6 h-6 text-primary" /> Offline Engagement Metrics
              </h4>
              <div className="space-y-6">
                 <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                       <div className="p-6 bg-muted/20 rounded-[2rem] border border-border/40 text-center space-y-1">
                          <p className="text-4xl font-black text-primary">88%</p>
                          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Autonomy Rate</p>
                       </div>
                       <div className="p-4 bg-background rounded-2xl border border-border/40">
                          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 text-center">Top Downloaded Lesson</p>
                          <p className="text-xs font-black text-center truncate">IP Subnetting Foundations</p>
                       </div>
                    </div>
                    <div className="space-y-4">
                       <div className="p-6 bg-muted/20 rounded-[2rem] border border-border/40 text-center space-y-1">
                          <p className="text-4xl font-black text-success">1.2 TB</p>
                          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Local Data Served</p>
                       </div>
                       <div className="p-4 bg-background rounded-2xl border border-border/40">
                          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 text-center">Most Active Hub</p>
                          <p className="text-xs font-black text-center truncate">ICT Lab Hub 01</p>
                       </div>
                    </div>
                 </div>
                 
                 <div className="bg-primary/5 p-6 rounded-[2rem] border border-primary/20 space-y-4">
                    <p className="text-xs font-black uppercase tracking-widest text-primary text-center">Predictive Offline Performance</p>
                    <div className="flex justify-between items-center px-4">
                       <div className="text-center">
                          <p className="text-xl font-black text-primary">94%</p>
                          <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest">Reliability</p>
                       </div>
                       <div className="w-16 h-px bg-primary/20"></div>
                       <div className="text-center">
                          <p className="text-xl font-black text-primary">12ms</p>
                          <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest">Sync Speed</p>
                       </div>
                       <div className="w-16 h-px bg-primary/20"></div>
                       <div className="text-center">
                          <p className="text-xl font-black text-primary">Zero</p>
                          <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest">Data Loss</p>
                       </div>
                    </div>
                 </div>
              </div>
           </Card>

           {/* Report Generation Quick Access */}
           <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl flex flex-col justify-between">
              <div>
                 <h4 className="text-xl font-black mb-2 flex items-center gap-2">
                    <FileText className="w-6 h-6 text-primary" /> Reports Hub
                 </h4>
                 <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-8">Generate strategic documents</p>
                 
                 <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start h-12 rounded-xl font-black text-xs border-border/40 hover:bg-muted group">
                       <Download className="w-4 h-4 mr-3 text-muted-foreground group-hover:text-primary transition-colors" /> Annual Faculty Audit
                    </Button>
                    <Button variant="outline" className="w-full justify-start h-12 rounded-xl font-black text-xs border-border/40 hover:bg-muted group">
                       <Download className="w-4 h-4 mr-3 text-muted-foreground group-hover:text-primary transition-colors" /> Enrollment Demographics
                    </Button>
                    <Button variant="outline" className="w-full justify-start h-12 rounded-xl font-black text-xs border-border/40 hover:bg-muted group">
                       <Download className="w-4 h-4 mr-3 text-muted-foreground group-hover:text-primary transition-colors" /> Infrastructure ROI
                    </Button>
                 </div>
              </div>
              <Button className="w-full mt-6 rounded-2xl h-14 font-black shadow-lg shadow-primary/20">Schedule Auto-Reports</Button>
           </Card>

           {/* Real-time Insights Feed Mini */}
           <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl overflow-hidden">
              <h4 className="text-xl font-black mb-6 flex items-center gap-2">
                 <Zap className="w-6 h-6 text-amber-500 animate-pulse" /> Live Pulse
              </h4>
              <div className="space-y-6">
                 {[
                   { title: "Engagement Spike", desc: "Mechanical Dept activity up 240% since 8AM.", up: true },
                   { title: "Sync Bottleneck", desc: "Library Hub Node experiencing 1.2s latency.", up: false },
                   { title: "Module Milestone", desc: "Networking Foundations reached 80% completion.", up: true }
                 ].map((insight, i) => (
                   <div key={i} className="space-y-1 relative pl-4 border-l-2 border-border/40">
                      <div className="absolute top-0 left-0 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--color-primary),0.5)]"></div>
                      <h5 className="font-black text-xs uppercase tracking-widest">{insight.title}</h5>
                      <p className="text-[10px] font-medium text-muted-foreground leading-relaxed">{insight.desc}</p>
                   </div>
                 ))}
              </div>
              <Button variant="ghost" className="w-full mt-6 font-black text-[10px] uppercase tracking-widest text-primary">View Full Pulse Dashboard</Button>
           </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
