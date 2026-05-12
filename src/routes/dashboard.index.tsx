import { createFileRoute, Link } from "@tanstack/react-router";
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
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  PlayCircle,
  Download,
  Clock,
  CheckCircle2,
  TrendingUp,
  Flame,
  BookOpen,
  Calendar,
  ChevronRight,
  FileCheck,
  Lightbulb,
  RefreshCw,
  MoreVertical,
  Share2,
  BookmarkPlus,
  Activity,
  ClipboardList,
  Bell,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardComponent,
});

import { useState, useEffect } from "react";
import { DashboardSkeleton } from "@/components/dashboard/DashboardSkeleton";

function DashboardComponent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12 ? "Good morning" : currentHour < 18 ? "Good afternoon" : "Good evening";

  if (isLoading) {
    return (
      <DashboardLayout role="student">
        <DashboardSkeleton />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout role="student">
      <div className="space-y-10 pb-10">
        {/* Header & Quick Actions */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-2xl md:text-4xl font-black tracking-tight flex items-center gap-3">
              Karibu, Amina 👋
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-medium">
              Here’s what’s happening in your learning journey today.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Button asChild className="h-12 px-6 rounded-2xl font-black shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90">
              <Link to="/dashboard/player/CRS-101">
                <PlayCircle className="w-5 h-5 mr-2" /> Resume Learning
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-12 px-6 rounded-2xl font-black border-border/60 hover:bg-muted">
              <Link to="/dashboard/sync">
                <RefreshCw className="w-5 h-5 mr-2" /> Sync Now
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-12 px-6 rounded-2xl font-black border-border/60 hover:bg-muted">
              <Link to="/dashboard/assignments">
                <ClipboardList className="w-5 h-5 mr-2" /> View Assignments
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-12 px-6 rounded-2xl font-black border-border/60 hover:bg-muted">
              <Link to="/dashboard/downloads">
                <Download className="w-5 h-5 mr-2" /> Download Lessons
              </Link>
            </Button>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {[
            { label: "Weekly Progress", value: "78%", icon: TrendingUp, color: "text-primary", bg: "bg-primary/10" },
            { label: "Hours Studied", value: "13.9h", icon: Clock, color: "text-amber-500", bg: "bg-amber-500/10", sub: "/ 15h goal" },
            { label: "Lessons Done", value: "38/52", icon: BookOpen, color: "text-blue-500", bg: "bg-blue-500/10" },
            { label: "Offline Cached", value: "24", icon: Download, color: "text-emerald-500", bg: "bg-emerald-500/10" },
            { label: "Pending Tasks", value: "2", icon: FileCheck, color: "text-rose-500", bg: "bg-rose-500/10" },
            { label: "Sync Health", value: "Good", icon: Activity, color: "text-success", bg: "bg-success/10" },
          ].map((stat, i) => (
            <Card key={i} className="border-border/40 bg-card/50 backdrop-blur-sm rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-6 shadow-xl hover:-translate-y-1 transition-all">
              <div className={`p-3 rounded-2xl w-fit ${stat.bg} ${stat.color} mb-4`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">{stat.label}</p>
              <div className="mt-1 flex items-baseline gap-1">
                <h3 className="text-2xl font-black">{stat.value}</h3>
                {stat.sub && <span className="text-[10px] font-bold text-muted-foreground">{stat.sub}</span>}
              </div>
              {stat.label === "Weekly Progress" && <Progress value={78} className="h-1.5 mt-3" />}
            </Card>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-10">
            {/* Continue Learning Section */}
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black flex items-center gap-3">
                  <div className="w-2 h-8 bg-primary rounded-full"></div>
                  Continue Learning
                </h2>
                <Button asChild variant="link" className="text-primary font-black"><Link to="/dashboard/courses">View All My Courses</Link></Button>
              </div>

              <div className="grid gap-6">
                {[
                  {
                    title: "Solar Installation & Maintenance",
                    lesson: "Lesson 4 — Battery Bank Sizing",
                    progress: 73,
                    thumb: "https://images.unsplash.com/photo-1509391366360-12822a16d8bd?w=800&q=80",
                    badge: "CORE",
                    offline: true
                  },
                  {
                    title: "Plumbing Technology Level 4",
                    lesson: "Lab 3 — Pipe Bending Techniques",
                    progress: 41,
                    thumb: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?w=800&q=80",
                    badge: "Practical",
                    offline: false
                  }
                ].map((course, i) => (
                  <Card key={i} className="group border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto md:h-52 hover:border-primary/40 transition-all duration-500">
                    <div className="relative w-full md:w-56 bg-muted overflow-hidden">
                      <img src={course.thumb} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" alt={course.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <Badge className="absolute top-4 left-4 bg-primary/90 text-white border-none shadow-lg px-3 py-1 rounded-lg">{course.badge}</Badge>
                    </div>
                    <CardContent className="p-8 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-black group-hover:text-primary transition-colors">{course.title}</h3>
                          {course.offline && <Badge variant="outline" className="bg-success/10 text-success border-success/30 font-black text-[10px]">OFFLINE READY</Badge>}
                        </div>
                        <p className="text-sm font-bold text-muted-foreground">{course.lesson}</p>
                        <div className="flex items-center gap-4 mt-4">
                          <Progress value={course.progress} className="h-2 flex-1" />
                          <span className="text-sm font-black text-primary">{course.progress}%</span>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button asChild size="sm" className="bg-primary/10 text-primary hover:bg-primary hover:text-white font-black rounded-xl">
                          <Link to="/dashboard/player/CRS-101">Resume</Link>
                        </Button>
                        <Button asChild size="sm" variant="outline" className="font-bold rounded-xl border-border/60">
                          <Link to="/dashboard/player/CRS-101">Open Notes</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Activity Chart Mock */}
            <section className="space-y-6">
              <h2 className="text-2xl font-black flex items-center gap-3">
                <div className="w-2 h-8 bg-amber-500 rounded-full"></div>
                Learning Activity
              </h2>
              <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-10 shadow-2xl overflow-hidden relative">
                <div className="flex justify-between items-end h-48 gap-4">
                  {[45, 60, 30, 85, 40, 95, 70].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-3">
                      <div className="w-full bg-primary/20 rounded-xl relative group" style={{ height: `${h}%` }}>
                        <div className="absolute inset-x-0 bottom-0 bg-primary rounded-xl transition-all duration-1000" style={{ height: "100%" }}></div>
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-popover border border-border/60 px-2 py-1 rounded-lg text-[10px] font-black opacity-0 group-hover:opacity-100 transition-opacity">
                          {Math.round(h / 10)}h
                        </div>
                      </div>
                      <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute top-10 right-10 flex gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span className="text-xs font-bold text-muted-foreground">Study Time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary/20"></div>
                    <span className="text-xs font-bold text-muted-foreground">Peer Avg</span>
                  </div>
                </div>
              </Card>
            </section>
          </div>

          {/* Right Sidebar Widgets */}
          <div className="space-y-8">
            {/* Sync Status Widget */}
            <Card className="border-primary/20 bg-primary/5 rounded-[2.5rem] overflow-hidden shadow-xl relative group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <RefreshCw className="w-32 h-32 animate-spin-slow" />
              </div>
              <CardHeader className="p-8 pb-4">
                <CardTitle className="text-lg font-black flex items-center justify-between">
                  Sync Center
                  <Badge className="bg-success text-white border-none text-[10px] font-black">ACTIVE</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Pending Uploads</p>
                    <p className="text-sm font-bold text-amber-600">2 Quiz Answers</p>
                  </div>
                  <div className="space-y-1 text-right">
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Failed Syncs</p>
                    <p className="text-sm font-bold">0</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Storage Used</p>
                    <p className="text-sm font-bold">2.4 / 8 GB</p>
                  </div>
                  <div className="space-y-1 text-right">
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Last Sync</p>
                    <p className="text-sm font-bold">32m ago</p>
                  </div>
                </div>
                <Button className="w-full rounded-2xl h-12 font-black shadow-lg shadow-primary/20">Go to Sync Mission Control</Button>
              </CardContent>
            </Card>

            {/* Upcoming Deadlines */}
            <Card className="border-border/40 bg-card/50 rounded-[2.5rem] overflow-hidden shadow-xl">
              <CardHeader className="p-8 pb-4 border-b border-border/40 flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-black">Deadlines</CardTitle>
                <Calendar className="w-5 h-5 text-destructive" />
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border/40">
                  {[
                    { title: "Solar Array Sizing Lab", date: "Tomorrow", color: "text-destructive", bg: "bg-destructive/10" },
                    { title: "Battery Sizing Quiz", date: "In 2 Days", color: "text-amber-600", bg: "bg-amber-500/10" },
                    { title: "Engine Diagnostics Journal", date: "Friday", color: "text-blue-600", bg: "bg-blue-500/10" }
                  ].map((d, i) => (
                    <div key={i} className="p-6 hover:bg-muted/30 transition-all cursor-pointer group">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-black text-sm group-hover:text-primary transition-colors">{d.title}</h4>
                        <Badge className={`${d.bg} ${d.color} border-none text-[10px] font-black`}>{d.date}</Badge>
                      </div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Electrical Department</p>
                    </div>
                  ))}
                </div>
                <div className="p-6 bg-muted/20 flex gap-3">
                  <Button variant="outline" className="flex-1 rounded-xl font-black text-xs border-border/60">View All</Button>
                  <Button variant="outline" className="flex-1 rounded-xl font-black text-xs border-border/60">Open Calendar</Button>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="border-border/40 bg-card/50 rounded-[2.5rem] overflow-hidden shadow-xl">
              <CardHeader className="p-8 pb-4 border-b border-border/40 flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-black">Notifications</CardTitle>
                <Bell className="w-5 h-5 text-primary" />
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border/40">
                  {[
                    { title: "New Material Uploaded", desc: "Dr. Omondi added Module 4: Inverters", type: "course" },
                    { title: "Assignment Graded", desc: "Your Practical 3 submission scored 92%", type: "grade" },
                    { title: "Sync Successful", desc: "All local data pushed to campus server", type: "sync" }
                  ].map((n, i) => (
                    <div key={i} className="p-6 flex gap-4">
                      <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${n.type === "grade" ? "bg-success" : "bg-primary"}`}></div>
                      <div className="space-y-1">
                        <h4 className="font-black text-sm">{n.title}</h4>
                        <p className="text-xs font-medium text-muted-foreground leading-relaxed">{n.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
