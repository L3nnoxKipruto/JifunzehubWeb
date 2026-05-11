import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Search,
  Plus,
  BookOpen,
  Users,
  WifiOff,
  MoreVertical,
  ChevronRight,
  TrendingUp,
  Filter,
  ArrowUpRight,
  Package,
  Globe,
  HardDrive,
  BarChart3,
  Clock,
  ArrowLeft,
  FileText,
  Video,
  DownloadCloud,
  CheckCircle2,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export const Route = createFileRoute("/admin/courses")({
  component: AdminCoursesComponent,
});

const courseEngagementData = [
  { name: "Week 1", active: 210, offline: 180 },
  { name: "Week 2", active: 280, offline: 240 },
  { name: "Week 3", active: 250, offline: 210 },
  { name: "Week 4", active: 340, offline: 290 },
  { name: "Week 5", active: 310, offline: 260 },
  { name: "Week 6", active: 420, offline: 380 },
];

function AdminCoursesComponent() {
  const [view, setView] = useState<"list" | "detail">("list");
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  const courses = [
    {
      id: "CRS-101",
      title: "Networking Essentials (CCNA Foundations)",
      dept: "ICT",
      lecturer: "James M. Macharia",
      students: 412,
      progress: 82,
      status: "Published",
      offline: "Compatible",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80"
    },
    {
      id: "CRS-102",
      title: "Solar Power Systems & Maintenance",
      dept: "Electrical",
      lecturer: "Dr. Sarah Omondi",
      students: 215,
      progress: 64,
      status: "Published",
      offline: "Compatible",
      image: "https://images.unsplash.com/photo-1509391366360-12822a16d8bd?w=800&q=80"
    },
    {
      id: "CRS-103",
      title: "Automotive Engine Diagnostics",
      dept: "Mechanical",
      lecturer: "Eng. David Kamau",
      students: 184,
      progress: 42,
      status: "Update Required",
      offline: "Partially",
      image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&q=80"
    },
    {
      id: "CRS-104",
      title: "Intro to Python for Engineering",
      dept: "ICT",
      lecturer: "Prof. Amina Wanjiku",
      students: 520,
      progress: 92,
      status: "Published",
      offline: "Compatible",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80"
    }
  ];

  const handleOpenCourse = (course: any) => {
    setSelectedCourse(course);
    setView("detail");
  };

  if (view === "detail" && selectedCourse) {
    return (
      <DashboardLayout role="admin" title={selectedCourse.title} subtitle={`Course Management • ${selectedCourse.id}`}>
        <div className="space-y-8 pb-20">
          <Button variant="ghost" onClick={() => setView("list")} className="font-black gap-2 hover:bg-muted rounded-xl">
             <ArrowLeft className="w-4 h-4" /> Back to Course Registry
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
             {/* Course Profile */}
             <div className="space-y-8">
                <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                   <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 shadow-2xl">
                      <img src={selectedCourse.image} className="w-full h-full object-cover" alt="" />
                   </div>
                   <div className="space-y-4">
                      <div className="flex items-center gap-3">
                         <Badge className="bg-primary text-white border-none font-black px-3 py-1 rounded-lg uppercase tracking-widest text-[10px]">
                            {selectedCourse.status}
                         </Badge>
                         <Badge variant="outline" className="border-border/60 font-black px-3 py-1 rounded-lg uppercase tracking-widest text-[10px]">
                            {selectedCourse.dept}
                         </Badge>
                      </div>
                      <h2 className="text-2xl font-black">{selectedCourse.title}</h2>
                      
                      <div className="flex items-center gap-3 pt-2">
                         <Avatar className="h-10 w-10 border border-border/40">
                            <AvatarFallback>{selectedCourse.lecturer[0]}</AvatarFallback>
                         </Avatar>
                         <div>
                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-none mb-1">Primary Lecturer</p>
                            <p className="text-sm font-black">{selectedCourse.lecturer}</p>
                         </div>
                      </div>
                   </div>

                   <div className="mt-8 space-y-4 border-t border-border/40 pt-8">
                      <div className="grid grid-cols-2 gap-4">
                         <div className="p-4 bg-muted/30 rounded-2xl border border-border/40">
                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Enrolled</p>
                            <p className="text-xl font-black">{selectedCourse.students}</p>
                         </div>
                         <div className="p-4 bg-muted/30 rounded-2xl border border-border/40">
                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Modules</p>
                            <p className="text-xl font-black">12</p>
                         </div>
                      </div>
                      <div className="p-4 bg-primary/5 rounded-2xl border border-primary/20 space-y-2">
                         <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                            <span>Avg Course Progress</span>
                            <span className="text-primary">{selectedCourse.progress}%</span>
                         </div>
                         <Progress value={selectedCourse.progress} className="h-2" />
                      </div>
                   </div>
                </Card>

                <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                   <h4 className="text-lg font-black mb-6">Institutional Compliance</h4>
                   <div className="space-y-4">
                      <div className="flex items-center gap-3 p-4 bg-success/5 border border-success/20 rounded-2xl">
                         <WifiOff className="w-5 h-5 text-success" />
                         <span className="text-xs font-bold text-success/80 uppercase tracking-widest">Offline Certified Hub-Ready</span>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-primary/5 border border-primary/20 rounded-2xl">
                         <Package className="w-5 h-5 text-primary" />
                         <span className="text-xs font-bold text-primary/80 uppercase tracking-widest">Curriculum v2026 Compatible</span>
                      </div>
                      <Button className="w-full h-12 rounded-xl font-black bg-primary text-white shadow-lg shadow-primary/20">Audit Course Content</Button>
                   </div>
                </Card>
             </div>

             {/* Content & Activity Column */}
             <div className="lg:col-span-2 space-y-8">
                <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                   <div className="flex justify-between items-center mb-8">
                      <h3 className="text-2xl font-black">Enrollment & Access Trends</h3>
                      <div className="flex gap-4">
                         <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-primary"></div>
                            <span className="text-xs font-black text-muted-foreground uppercase tracking-widest">Active Learners</span>
                         </div>
                         <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                            <span className="text-xs font-black text-muted-foreground uppercase tracking-widest">Offline Access</span>
                         </div>
                      </div>
                   </div>
                   
                   <div className="h-[350px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                         <AreaChart data={courseEngagementData}>
                            <defs>
                               <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
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
                            <Area type="monotone" dataKey="active" stroke="var(--color-primary)" fillOpacity={1} fill="url(#colorActive)" strokeWidth={4} />
                            <Area type="monotone" dataKey="offline" stroke="#f59e0b" fillOpacity={0} strokeWidth={4} strokeDasharray="10 10" />
                         </AreaChart>
                      </ResponsiveContainer>
                   </div>
                </Card>

                <div className="grid md:grid-cols-2 gap-8">
                   <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                      <h4 className="text-lg font-black mb-6">Course Modules Overview</h4>
                      <div className="space-y-3">
                         {[1, 2, 3, 4].map(i => (
                           <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 border border-border/40 hover:bg-background/50 transition-colors cursor-pointer group">
                              <div className="flex items-center gap-3">
                                 <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-black text-xs">{i}</div>
                                 <p className="font-black text-sm group-hover:text-primary transition-colors">Module {i}: System Core</p>
                              </div>
                              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                           </div>
                         ))}
                      </div>
                      <Button variant="ghost" className="w-full mt-4 font-black text-xs text-primary">View Full Curriculum</Button>
                   </Card>

                   <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                      <h4 className="text-lg font-black mb-6">Resource Allocation</h4>
                      <div className="space-y-4">
                         <div className="p-4 bg-muted/30 rounded-2xl border border-border/40 space-y-2">
                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Total Storage Used</p>
                            <p className="text-2xl font-black">1.2 GB / 5 GB</p>
                            <Progress value={24} className="h-1.5" />
                         </div>
                         <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 bg-muted/20 rounded-xl border border-border/40 text-center">
                               <p className="text-lg font-black">45</p>
                               <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Lessons</p>
                            </div>
                            <div className="p-3 bg-muted/20 rounded-xl border border-border/40 text-center">
                               <p className="text-lg font-black">12</p>
                               <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Assessments</p>
                            </div>
                         </div>
                         <Button variant="outline" className="w-full rounded-xl font-black text-xs border-border/60">Generate Offline Package</Button>
                      </div>
                   </Card>
                </div>
             </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout role="admin" title="Institution Course Registry" subtitle="Institution-wide course management, faculty assignment, and offline publishing.">
      <div className="space-y-8 pb-20">
        {/* Advanced Filters */}
        <div className="bg-card/40 backdrop-blur-sm border border-border/40 rounded-[2rem] p-6 shadow-xl space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="relative flex-1 max-w-xl w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search courses by title, department, or lecturer..."
                className="pl-12 h-14 rounded-2xl bg-background/50 border-border/60 focus-visible:ring-primary/50 text-lg font-medium"
              />
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <Button variant="outline" className="h-14 px-6 rounded-2xl font-black border-border/60 hover:bg-muted">
                <Filter className="w-5 h-5 mr-2" /> Filters
              </Button>
              <Button className="h-14 px-8 rounded-2xl font-black bg-primary text-white shadow-lg shadow-primary/20">
                <Plus className="w-5 h-5 mr-2" /> Create New Course
              </Button>
            </div>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-1 hide-scrollbar">
            {["All Courses", "Published", "Drafts", "ICT Dept", "Engineering", "Electrical", "Mechanical", "Offline Ready"].map((cat, i) => (
              <Badge key={i} variant={i === 0 ? "default" : "outline"} className="px-6 py-2 rounded-xl font-black cursor-pointer whitespace-nowrap">
                {cat}
              </Badge>
            ))}
          </div>
        </div>

        {/* Course Registry Table */}
        <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] shadow-xl overflow-hidden">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow className="border-border/40 hover:bg-transparent">
                <TableHead className="font-black uppercase tracking-widest text-[10px] py-6 px-8">Course</TableHead>
                <TableHead className="font-black uppercase tracking-widest text-[10px]">Department</TableHead>
                <TableHead className="font-black uppercase tracking-widest text-[10px]">Primary Lecturer</TableHead>
                <TableHead className="font-black uppercase tracking-widest text-[10px]">Learners</TableHead>
                <TableHead className="font-black uppercase tracking-widest text-[10px]">Completion</TableHead>
                <TableHead className="font-black uppercase tracking-widest text-[10px]">Offline</TableHead>
                <TableHead className="font-black uppercase tracking-widest text-[10px] text-right pr-8">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course.id} className="border-border/40 hover:bg-muted/20 transition-colors group cursor-pointer" onClick={() => handleOpenCourse(course)}>
                  <TableCell className="py-6 px-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg shrink-0">
                         <img src={course.image} className="w-full h-full object-cover" alt="" />
                      </div>
                      <div>
                        <p className="font-black text-sm group-hover:text-primary transition-colors">{course.title}</p>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{course.id}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="rounded-lg font-bold border-border/60">{course.dept}</Badge>
                  </TableCell>
                  <TableCell>
                    <p className="text-xs font-bold">{course.lecturer}</p>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                       <Users className="w-4 h-4 text-primary" />
                       <span className="text-xs font-black">{course.students}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3 w-28">
                       <Progress value={course.progress} className="h-1.5" />
                       <span className="text-xs font-black">{course.progress}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {course.offline === 'Compatible' ? (
                      <Badge className="bg-success/10 text-success border-none text-[9px] font-black uppercase tracking-widest">HUB-READY</Badge>
                    ) : (
                      <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-none text-[9px] font-black uppercase tracking-widest">PARTIAL</Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right pr-8">
                    <div className="flex flex-col items-end">
                       <Badge variant={course.status === 'Published' ? 'default' : 'secondary'} className="text-[9px] font-black uppercase px-2 mb-1">
                          {course.status}
                       </Badge>
                       <Button size="icon" variant="ghost" className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors"><ChevronRight className="w-4 h-4" /></Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </DashboardLayout>
  );
}
