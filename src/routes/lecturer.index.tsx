import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Download,
  FileCheck,
  FolderKanban,
  Plus,
  TrendingUp,
  Upload,
  Users,
  Video,
  RefreshCw,
  Package,
  History,
  AlertCircle,
  CheckCircle2,
  MoreVertical,
  Share2,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  MessageSquare,
  Megaphone,
  LayoutDashboard,
  ClipboardList,
  FileUp,
  Zap,
  Wifi,
  HardDrive,
  CheckCircle,
  PlayCircle,
  AlertTriangle,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Route = createFileRoute("/lecturer/")({
  head: () => ({ meta: [{ title: "Lecturer Studio — JifunzeHub" }] }),
  component: LecturerOverview,
});

const engagementData = [
  { name: "Mon", engagement: 45, completion: 32 },
  { name: "Tue", engagement: 52, completion: 41 },
  { name: "Wed", engagement: 48, completion: 38 },
  { name: "Thu", engagement: 61, completion: 52 },
  { name: "Fri", engagement: 55, completion: 48 },
  { name: "Sat", engagement: 67, completion: 55 },
  { name: "Sun", engagement: 70, completion: 61 },
];

function LecturerOverview() {
  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12 ? "Good morning" : currentHour < 18 ? "Good afternoon" : "Good evening";

  return (
    <DashboardLayout role="lecturer">
      <div className="space-y-10 pb-10">
        {/* Mission Control Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-black tracking-tight flex items-center gap-3">
              Karibu back, Dr. Omondi 👋
            </h1>
            <p className="text-lg text-muted-foreground font-medium">
              Here’s an overview of your teaching activities today.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild className="h-12 px-6 rounded-2xl font-black shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90">
              <Link to="/lecturer/builder"><Upload className="w-5 h-5 mr-2" /> Upload Lesson</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 px-6 rounded-2xl font-black border-border/60 hover:bg-muted">
              <Link to="/lecturer/assessments"><FileCheck className="w-5 h-5 mr-2" /> Create Assessment</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 px-6 rounded-2xl font-black border-border/60 hover:bg-muted">
              <Link to="/lecturer/sync"><RefreshCw className="w-5 h-5 mr-2" /> Sync Content</Link>
            </Button>
            <Button variant="outline" className="h-12 px-6 rounded-2xl font-black border-border/60 hover:bg-muted" asChild>
              <Link to="/lecturer/builder">
                <FolderKanban className="w-5 h-5 mr-2" /> Open Course Builder
              </Link>
            </Button>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {[
            { label: "Active Courses", value: "8", icon: BookOpen, color: "text-blue-500", bg: "bg-blue-500/10" },
            { label: "Total Learners", value: "412", icon: Users, color: "text-primary", bg: "bg-primary/10" },
            { label: "Pending Grades", value: "38", icon: ClipboardList, color: "text-amber-500", bg: "bg-amber-500/10" },
            { label: "Offline Queue", value: "4", icon: HardDrive, color: "text-emerald-500", bg: "bg-emerald-500/10", sub: "will sync soon" },
            { label: "Completion Rate", value: "72%", icon: CheckCircle, color: "text-purple-500", bg: "bg-purple-500/10" },
            { label: "Sync Health", value: "Optimal", icon: Activity, color: "text-success", bg: "bg-success/10" },
          ].map((stat, i) => (
            <Card key={i} className="border-border/40 bg-card/50 backdrop-blur-sm rounded-[2rem] p-6 shadow-xl hover:-translate-y-1 transition-all">
              <div className={`p-3 rounded-2xl w-fit ${stat.bg} ${stat.color} mb-4`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <p className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-tight">{stat.label}</p>
              <div className="mt-1 flex items-baseline gap-1">
                <h3 className="text-2xl font-black">{stat.value}</h3>
                {stat.sub && <span className="text-[10px] font-bold text-muted-foreground">{stat.sub}</span>}
              </div>
            </Card>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Column: Activity & Performance */}
          <div className="lg:col-span-2 space-y-10">
            {/* Performance Chart Section */}
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black flex items-center gap-3">
                  <div className="w-2 h-8 bg-primary rounded-full"></div>
                  Teaching Performance
                </h2>
                <div className="flex gap-2">
                   <Badge variant="outline" className="rounded-lg font-bold border-border/60">Last 7 Days</Badge>
                   <Badge variant="outline" className="rounded-lg font-bold border-border/60 bg-primary/10 text-primary">Live Data</Badge>
                </div>
              </div>

              <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-2xl">
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={engagementData}>
                      <defs>
                        <linearGradient id="colorEngage" x1="0" y1="0" x2="0" y2="1">
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
                      <Area type="monotone" dataKey="engagement" stroke="var(--color-primary)" fillOpacity={1} fill="url(#colorEngage)" strokeWidth={4} />
                      <Area type="monotone" dataKey="completion" stroke="#10b981" fillOpacity={0} strokeWidth={4} strokeDasharray="10 10" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center gap-8 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">Learner Engagement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">Completion Trend</span>
                  </div>
                </div>
              </Card>
            </section>

            {/* Recent Activity Feed */}
            <section className="space-y-6">
              <h2 className="text-2xl font-black flex items-center gap-3">
                <div className="w-2 h-8 bg-amber-500 rounded-full"></div>
                Recent Activity
              </h2>
              <div className="grid gap-4">
                {[
                  { title: "Lesson Uploaded: Module 4.2", course: "Solar PV Installation", time: "12 mins ago", icon: Video, color: "text-blue-500", bg: "bg-blue-500/10" },
                  { title: "New Submission: Lab Practical 3", student: "David Mutua", course: "Solar Systems", time: "45 mins ago", icon: FileUp, color: "text-primary", bg: "bg-primary/10" },
                  { title: "Course Updated: Practical 1", course: "Automotive Diagnostics", time: "2 hours ago", icon: RefreshCw, color: "text-emerald-500", bg: "bg-emerald-500/10" },
                ].map((act, i) => (
                  <Card key={i} className="border-border/40 bg-card/40 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:border-primary/40 transition-all group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-2xl ${act.bg} ${act.color} group-hover:scale-110 transition-transform`}>
                        <act.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-black text-lg group-hover:text-primary transition-colors">{act.title}</h4>
                          <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{act.time}</span>
                        </div>
                        <p className="text-sm font-bold text-muted-foreground">
                          {act.course} {act.student && `• Submitted by ${act.student}`}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar Widgets */}
          <div className="space-y-8">
            {/* Sync Command Center */}
            <Card className="border-primary/20 bg-primary/5 rounded-[2.5rem] overflow-hidden shadow-xl relative group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <RefreshCw className="w-32 h-32 animate-spin-slow" />
              </div>
              <CardHeader className="p-8 pb-4">
                <CardTitle className="text-xl font-black flex items-center justify-between">
                  Sync Control
                  <Badge className="bg-success text-white border-none text-[10px] font-black">STABLE</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Pending Uploads</p>
                    <p className="text-sm font-bold text-amber-600">4 Local Files</p>
                  </div>
                  <div className="space-y-1 text-right">
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Storage Used</p>
                    <p className="text-sm font-bold">1.2 / 5 GB</p>
                  </div>
                </div>
                <div className="space-y-2">
                   <div className="flex justify-between text-xs font-black uppercase tracking-widest text-muted-foreground">
                      <span>Sync Integrity</span>
                      <span>98%</span>
                   </div>
                   <Progress value={98} className="h-2" />
                </div>
                <Button asChild className="w-full rounded-2xl h-12 font-black shadow-lg shadow-primary/20"><Link to="/lecturer/sync">Open Sync Center</Link></Button>
              </CardContent>
            </Card>

            {/* Upcoming Tasks */}
            <Card className="border-border/40 bg-card/50 rounded-[2.5rem] overflow-hidden shadow-xl">
              <CardHeader className="p-8 pb-4 border-b border-border/40 flex flex-row items-center justify-between">
                <CardTitle className="text-xl font-black">Action Required</CardTitle>
                <Badge variant="destructive" className="h-6 w-6 rounded-full p-0 flex items-center justify-center font-black">2</Badge>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border/40">
                  {[
                    { title: "Grade CAT 1 Submissions", deadline: "Today", course: "Solar PV Installation", count: "12 pending", type: "grade" },
                    { title: "Resolve Sync Conflict", deadline: "ASAP", course: "Solar Lab 3", count: "1 device error", type: "alert" },
                    { title: "Upload Module 5 PDF", deadline: "In 2 Days", course: "Automotive Diag", count: "Missing resource", type: "upload" }
                  ].map((task, i) => (
                    <div key={i} className="p-6 hover:bg-muted/30 transition-all cursor-pointer group">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-black text-sm group-hover:text-primary transition-colors">{task.title}</h4>
                        <Badge variant="outline" className={`${task.type === 'alert' ? 'bg-destructive/10 text-destructive border-destructive/20' : 'bg-muted/50 border-border/60'} text-[10px] font-black`}>{task.deadline}</Badge>
                      </div>
                      <div className="flex justify-between mt-2">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{task.course}</p>
                        <p className="text-[10px] font-black text-primary">{task.count}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Messages & Notices */}
            <Card className="border-border/40 bg-card/50 rounded-[2.5rem] overflow-hidden shadow-xl">
              <CardHeader className="p-8 pb-4 border-b border-border/40 flex flex-row items-center justify-between">
                <CardTitle className="text-xl font-black">Communications</CardTitle>
                <MessageSquare className="w-5 h-5 text-primary" />
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border/40">
                  {[
                    { title: "Amina Hussein", desc: "Question about Lesson 4.2 Battery Sizing", type: "student" },
                    { title: "Dept Head Office", desc: "Staff meeting tomorrow in Lab 2 @ 10AM", type: "office" },
                    { title: "JifunzeHub System", desc: "Weekly sync summary for your 8 courses", type: "system" }
                  ].map((msg, i) => (
                    <div key={i} className="p-6 flex gap-4 hover:bg-muted/30 transition-all cursor-pointer">
                      <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${msg.type === "student" ? "bg-primary" : msg.type === "office" ? "bg-amber-500" : "bg-success"}`}></div>
                      <div className="space-y-1">
                        <h4 className="font-black text-sm">{msg.title}</h4>
                        <p className="text-xs font-medium text-muted-foreground leading-relaxed line-clamp-2">{msg.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-muted/20 border-t border-border/40">
                  <Button asChild variant="ghost" className="w-full font-black text-sm text-primary hover:bg-primary/5"><Link to="/lecturer/learners">View All Messages</Link></Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
