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
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
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
  { name: "Mon", engagement: 45 },
  { name: "Tue", engagement: 52 },
  { name: "Wed", engagement: 48 },
  { name: "Thu", engagement: 61 },
  { name: "Fri", engagement: 55 },
  { name: "Sat", engagement: 67 },
  { name: "Sun", engagement: 70 },
];

function LecturerOverview() {
  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12 ? "Good morning" : currentHour < 18 ? "Good afternoon" : "Good evening";

  return (
    <DashboardLayout role="lecturer">
      <div className="space-y-8">
        {/* Mission Control Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 bg-gradient-to-br from-primary/10 via-background to-accent/5 p-8 rounded-3xl border border-primary/10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

          <div className="z-10 space-y-2">
            <div className="flex items-center gap-2">
              <Badge className="bg-primary text-primary-foreground font-bold px-2 py-0.5 rounded-full">
                Lecturer Studio
              </Badge>
              <span className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                <Clock className="w-3 h-3" /> Last synced: 12 mins ago
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              {greeting}, <span className="text-primary">James</span> 👋
            </h1>
            <p className="text-muted-foreground max-w-xl">
              Your teaching engine is running smoothly. 3 new learner submissions are waiting for
              your review.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 z-10 w-full md:w-auto">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 flex-1 md:flex-none">
              <Plus className="w-4 h-4 mr-2" /> Create Course
            </Button>
            <Button
              variant="outline"
              className="bg-background/50 backdrop-blur border-border/60 hover:bg-muted flex-1 md:flex-none shadow-sm"
            >
              <RefreshCw className="w-4 h-4 mr-2 text-accent" /> Sync Now
            </Button>
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
          <QuickAction icon={Plus} label="New Course" color="bg-blue-500" />
          <QuickAction icon={FileUp} label="Upload Mats" color="bg-primary" />
          <QuickAction icon={Package} label="Offline Pkg" color="bg-accent" />
          <QuickAction icon={FileCheck} label="Create Exam" color="bg-purple-500" />
          <QuickAction
            icon={History}
            label="View Reports"
            color="bg-emerald-500"
            className="hidden lg:flex"
          />
        </div>

        {/* Dynamic Stat Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <StatCard
            title="Total Learners"
            value="412"
            trend="+12%"
            trendUp={true}
            icon={Users}
            description="Active across all courses"
          />
          <StatCard
            title="Teaching Progress"
            value="78%"
            trend="+5%"
            trendUp={true}
            icon={TrendingUp}
            description="Curriculum completion avg"
          />
          <StatCard
            title="Pending Reviews"
            value="38"
            trend="-8%"
            trendUp={false}
            icon={ClipboardList}
            description="Submissions to grade"
          />
          <StatCard
            title="Sync Health"
            value="98.2%"
            trend="Stable"
            trendUp={true}
            icon={Activity}
            description="Offline data integrity"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Column: Active Courses & Performance */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Courses */}
            <Card className="border-border/60 shadow-soft">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>My Active Courses</CardTitle>
                  <CardDescription>Real-time performance of your curriculum.</CardDescription>
                </div>
                <Button variant="ghost" size="sm" className="text-primary font-bold">
                  View All
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <CourseRow
                  title="Networking Essentials (CCNA)"
                  dept="ICT"
                  learners={184}
                  progress={68}
                  status="Synced"
                />
                <CourseRow
                  title="Solar Power Installation"
                  dept="Electrical"
                  learners={132}
                  progress={41}
                  status="Needs Sync"
                />
                <CourseRow
                  title="Automotive Engine Diagnostics"
                  dept="Mech"
                  learners={96}
                  progress={22}
                  status="Synced"
                />
              </CardContent>
            </Card>

            {/* Performance Analytics */}
            <Card className="border-border/60 shadow-soft">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Learner Engagement</CardTitle>
                    <CardDescription>
                      Lessons watched per day across the institution.
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="bg-accent/5 text-accent border-accent/20">
                      7-Day Trend
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="h-80 pt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={engagementData}>
                    <defs>
                      <linearGradient id="colorEngage" x1="0" y1="0" x2="0" y2="1">
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
                      fill="url(#colorEngage)"
                      strokeWidth={3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Recent Course Activity */}
            <Card className="border-border/60 shadow-soft">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest teaching events and learner interactions.</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border/50">
                  <ActivityItem
                    icon={FileUp}
                    label="Uploaded: Module 4 Video"
                    course="Networking Essentials"
                    time="2 hours ago"
                    status="Synced"
                  />
                  <ActivityItem
                    icon={Users}
                    label="New Submission: Lab 2"
                    course="Amina Hussein"
                    time="4 hours ago"
                    status="Pending Review"
                  />
                  <ActivityItem
                    icon={Package}
                    label="Offline Package Generated"
                    course="Solar Power Systems"
                    time="Yesterday"
                    status="Ready"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Tasks, Announcements, & Sync */}
          <div className="space-y-6">
            {/* Sync Command Center Mini */}
            <Card className="bg-primary text-primary-foreground border-none shadow-lg overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
                <RefreshCw className="w-24 h-24" />
              </div>
              <CardContent className="p-6 space-y-4 relative z-10">
                <div className="flex items-center gap-2">
                  <Wifi className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Local Server Active
                  </span>
                </div>
                <h3 className="text-xl font-bold">Sync Mission Center</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-primary-foreground/80">
                    <span>Sync Integrity</span>
                    <span>98.2%</span>
                  </div>
                  <Progress
                    value={98}
                    className="h-1.5 bg-white/20"
                    indicatorClassName="bg-white"
                  />
                </div>
                <Button variant="secondary" className="w-full font-bold shadow-md" asChild>
                  <Link to="/lecturer/sync">Open Sync Reports</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Tasks */}
            <Card className="border-border/60">
              <CardHeader className="pb-3 border-b border-border/40">
                <CardTitle className="text-lg flex items-center gap-2">
                  <ClipboardList className="w-4 h-4 text-primary" /> Upcoming Tasks
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border/50">
                  <TaskItem
                    title="Review CAT 1 Submissions"
                    deadline="Today"
                    course="Networking"
                    count="12 pending"
                  />
                  <TaskItem
                    title="Finalize Python Exam"
                    deadline="Tomorrow"
                    course="Python Basics"
                    count="Draft saved"
                  />
                  <TaskItem
                    title="Generate USB Packages"
                    deadline="Friday"
                    course="Solar Power"
                    count="Weekly export"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Announcements */}
            <Card className="border-accent/20 bg-accent/5">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2 text-accent-foreground">
                  <Megaphone className="w-4 h-4 text-accent" /> Announcements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-background rounded-lg p-3 border border-border/60 shadow-sm space-y-1">
                  <p className="text-xs font-bold">Campus Server Upgrade</p>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">
                    Local LAN sync will be faster starting Monday morning. Please re-index your
                    courses.
                  </p>
                </div>
                <div className="bg-background rounded-lg p-3 border border-border/60 shadow-sm space-y-1 opacity-70">
                  <p className="text-xs font-bold">New TVET Competency Standards</p>
                  <p className="text-[10px] text-muted-foreground">
                    Updated grading rubrics for Engineering departments now available.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function QuickAction({
  icon: Icon,
  label,
  color,
  className,
}: {
  icon: any;
  label: string;
  color: string;
  className?: string;
}) {
  return (
    <Button
      variant="outline"
      className={`h-auto flex-col items-center justify-center p-4 gap-2 border-border/60 hover:border-primary/50 hover:bg-muted transition-all rounded-2xl bg-background ${className}`}
    >
      <div className={`p-2 rounded-xl ${color} text-white shadow-sm`}>
        <Icon className="w-5 h-5" />
      </div>
      <span className="text-xs font-bold">{label}</span>
    </Button>
  );
}

function StatCard({ title, value, trend, trendUp, icon: Icon, description }: any) {
  return (
    <Card className="border-border/60 hover:shadow-soft transition-all">
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="p-2 bg-muted rounded-lg">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <Badge
            variant="outline"
            className={`flex items-center gap-0.5 border-none ${trendUp ? "text-success bg-success/5" : "text-destructive bg-destructive/5"}`}
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
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-3xl font-bold mt-1">{value}</h3>
          <p className="text-[10px] text-muted-foreground mt-2 font-medium uppercase tracking-wider">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

function CourseRow({ title, dept, learners, progress, status }: any) {
  return (
    <div className="p-4 rounded-2xl border border-border/50 hover:bg-muted/30 transition-colors flex flex-col sm:flex-row items-center gap-4">
      <div className="h-10 w-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
        <BookOpen className="w-5 h-5" />
      </div>
      <div className="flex-1 space-y-1 text-center sm:text-left">
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2">
          <h4 className="font-bold text-sm">{title}</h4>
          <Badge variant="outline" className="text-[10px] font-bold py-0">
            {dept}
          </Badge>
        </div>
        <p className="text-xs text-muted-foreground">{learners} Learners Enrolled</p>
      </div>
      <div className="flex flex-col items-center sm:items-end gap-1.5 w-full sm:w-48">
        <div className="flex justify-between w-full text-[10px] font-bold">
          <span className="text-muted-foreground uppercase tracking-widest">Avg Progress</span>
          <span className="text-primary">{progress}%</span>
        </div>
        <Progress
          value={progress}
          className="h-1.5 bg-muted w-full"
          indicatorClassName="bg-primary"
        />
      </div>
      <Badge
        className={`shrink-0 ${status === "Synced" ? "bg-success/10 text-success border-success/20" : "bg-amber-500/10 text-amber-600 border-amber-200/50"}`}
      >
        {status}
      </Badge>
    </div>
  );
}

function ActivityItem({ icon: Icon, label, course, time, status }: any) {
  return (
    <div className="p-4 flex items-center gap-4 hover:bg-muted/20 transition-colors">
      <div className="p-2 bg-muted rounded-lg shrink-0">
        <Icon className="w-4 h-4 text-muted-foreground" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold truncate">{label}</p>
        <p className="text-xs text-muted-foreground truncate">
          {course} • {time}
        </p>
      </div>
      <Badge variant="outline" className="text-[10px] font-bold shrink-0">
        {status}
      </Badge>
    </div>
  );
}

function TaskItem({ title, deadline, course, count }: any) {
  return (
    <div className="p-4 hover:bg-muted/20 transition-colors cursor-pointer group">
      <div className="flex justify-between items-start mb-1">
        <h4 className="text-sm font-bold group-hover:text-primary transition-colors">{title}</h4>
        <Badge variant="outline" className="text-[10px] font-bold bg-background">
          {deadline}
        </Badge>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
          {course}
        </p>
        <p className="text-[10px] text-primary font-bold">{count}</p>
      </div>
    </div>
  );
}
