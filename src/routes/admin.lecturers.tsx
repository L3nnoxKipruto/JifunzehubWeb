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
  UserPlus,
  MoreVertical,
  BookOpen,
  Users,
  Activity,
  CheckCircle2,
  Clock,
  RefreshCw,
  Mail,
  Phone,
  Briefcase,
  ArrowLeft,
  ChevronRight,
  TrendingUp,
  BarChart3,
  Calendar,
  ShieldCheck,
  FileText,
  Filter,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export const Route = createFileRoute("/admin/lecturers")({
  component: AdminLecturersComponent,
});

const performanceData = [
  { name: "Networking", completion: 85, satisfaction: 92 },
  { name: "Solar Power", completion: 64, satisfaction: 88 },
  { name: "Python Eng", completion: 92, satisfaction: 95 },
  { name: "Automotive", completion: 42, satisfaction: 78 },
];

function AdminLecturersComponent() {
  const [view, setView] = useState<"list" | "detail">("list");
  const [selectedLecturer, setSelectedLecturer] = useState<any>(null);

  const lecturers = [
    {
      id: "LEC-001",
      name: "James M. Macharia",
      dept: "ICT",
      courses: 4,
      students: 412,
      syncHealth: 98,
      performance: 82,
      lastUpload: "2h ago",
      avatar: "https://i.pravatar.cc/150?u=james"
    },
    {
      id: "LEC-002",
      name: "Dr. Sarah Omondi",
      dept: "Electrical",
      courses: 3,
      students: 215,
      syncHealth: 92,
      performance: 75,
      lastUpload: "Yesterday",
      avatar: "https://i.pravatar.cc/150?u=sarah_o"
    },
    {
      id: "LEC-003",
      name: "Eng. David Kamau",
      dept: "Mechanical",
      courses: 2,
      students: 184,
      syncHealth: 45,
      performance: 42,
      lastUpload: "3 days ago",
      avatar: "https://i.pravatar.cc/150?u=david_k"
    },
    {
      id: "LEC-004",
      name: "Prof. Amina Wanjiku",
      dept: "ICT",
      courses: 5,
      students: 520,
      syncHealth: 100,
      performance: 94,
      lastUpload: "1 hour ago",
      avatar: "https://i.pravatar.cc/150?u=amina_w"
    }
  ];

  const handleOpenLecturer = (lec: any) => {
    setSelectedLecturer(lec);
    setView("detail");
  };

  if (view === "detail" && selectedLecturer) {
    return (
      <DashboardLayout role="admin" title={selectedLecturer.name} subtitle={`Lecturer Profile • ${selectedLecturer.id}`}>
        <div className="space-y-8 pb-20">
          <Button variant="ghost" onClick={() => setView("list")} className="font-black gap-2 hover:bg-muted rounded-xl">
             <ArrowLeft className="w-4 h-4" /> Back to Faculty Directory
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
             {/* Profile Card */}
             <div className="space-y-8">
                <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                   <div className="flex flex-col items-center text-center space-y-4">
                      <Avatar className="h-32 w-32 border-4 border-white shadow-2xl">
                         <AvatarImage src={selectedLecturer.avatar} />
                         <AvatarFallback className="text-4xl font-black">{selectedLecturer.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                         <h2 className="text-2xl font-black">{selectedLecturer.name}</h2>
                         <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{selectedLecturer.dept} Department</p>
                      </div>
                      <Badge className={`${selectedLecturer.performance >= 80 ? 'bg-success/10 text-success' : 'bg-amber-500/10 text-amber-600'} border-none font-black px-4 py-1.5 rounded-xl uppercase tracking-widest text-[10px]`}>
                         {selectedLecturer.performance}% Course Efficiency
                      </Badge>
                      
                      <div className="flex gap-2 w-full pt-4">
                         <Button variant="outline" className="flex-1 rounded-xl font-black gap-2 border-border/60">
                            <Mail className="w-4 h-4" /> Message
                         </Button>
                         <Button variant="outline" className="flex-1 rounded-xl font-black gap-2 border-border/60">
                            <FileText className="w-4 h-4" /> CV / Records
                         </Button>
                      </div>
                   </div>

                   <div className="mt-8 space-y-4 border-t border-border/40 pt-8">
                      <div className="flex justify-between items-center">
                         <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Faculty ID</span>
                         <span className="text-sm font-black">{selectedLecturer.id}</span>
                      </div>
                      <div className="flex justify-between items-center">
                         <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Active Courses</span>
                         <span className="text-sm font-black">{selectedLecturer.courses} Modules</span>
                      </div>
                      <div className="flex justify-between items-center">
                         <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Students Taught</span>
                         <span className="text-sm font-black">{selectedLecturer.students} Learners</span>
                      </div>
                   </div>
                </Card>

                <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                   <h4 className="text-lg font-black mb-6">Synchronization Logs</h4>
                   <div className="space-y-4">
                      <div className="space-y-2">
                         <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                            <span>Last Content Sync</span>
                            <span className="text-primary">{selectedLecturer.syncHealth}% Health</span>
                         </div>
                         <Progress value={selectedLecturer.syncHealth} className="h-2" />
                      </div>
                      <div className="p-4 bg-muted/30 rounded-2xl border border-border/40 flex items-center gap-4">
                         <Clock className="w-4 h-4 text-primary" />
                         <div className="flex-1">
                            <p className="text-xs font-black">Last Upload: {selectedLecturer.lastUpload}</p>
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Networking Module 4.2</p>
                         </div>
                      </div>
                   </div>
                </Card>
             </div>

             {/* Performance Column */}
             <div className="lg:col-span-2 space-y-8">
                <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                   <h3 className="text-2xl font-black mb-8">Faculty Performance Analytics</h3>
                   <div className="h-[400px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                         <BarChart data={performanceData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 'bold'}} />
                            <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 'bold'}} />
                            <Tooltip 
                               contentStyle={{ backgroundColor: 'hsl(var(--card))', borderRadius: '20px', border: '1px solid hsl(var(--border))', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                            />
                            <Bar dataKey="completion" fill="var(--color-primary)" radius={[10, 10, 0, 0]} />
                            <Bar dataKey="satisfaction" fill="#3b82f6" radius={[10, 10, 0, 0]} />
                         </BarChart>
                      </ResponsiveContainer>
                   </div>
                   <div className="flex justify-center gap-8 mt-6">
                      <div className="flex items-center gap-2">
                         <div className="w-3 h-3 rounded-full bg-primary"></div>
                         <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">Curriculum Completion</span>
                      </div>
                      <div className="flex items-center gap-2">
                         <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                         <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">Learner Satisfaction</span>
                      </div>
                   </div>
                </Card>

                <div className="grid md:grid-cols-2 gap-8">
                   <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                      <h4 className="text-lg font-black mb-6">Assigned Courses</h4>
                      <div className="space-y-4">
                         {[
                           { title: "Networking Essentials", students: 184, rating: 4.8 },
                           { title: "Cybersecurity Basics", students: 96, rating: 4.9 },
                           { title: "IP Subnetting Lab", students: 132, rating: 4.7 }
                         ].map((c, i) => (
                           <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 border border-border/40">
                              <div>
                                 <p className="font-black text-sm">{c.title}</p>
                                 <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{c.students} Learners</p>
                              </div>
                              <div className="text-right">
                                 <Badge className="bg-primary/10 text-primary border-none text-[10px] font-black">{c.rating} ★</Badge>
                              </div>
                           </div>
                         ))}
                      </div>
                      <Button variant="outline" className="w-full mt-4 rounded-xl font-black text-xs border-border/60">Assign New Course</Button>
                   </Card>

                   <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                      <h4 className="text-lg font-black mb-6">Administrative Audit</h4>
                      <div className="space-y-4">
                         <div className="flex items-center gap-4 p-4 rounded-2xl bg-success/5 border border-success/20">
                            <ShieldCheck className="w-5 h-5 text-success" />
                            <p className="text-xs font-bold text-success/80">Teaching Credentials Verified</p>
                         </div>
                         <div className="flex items-center gap-4 p-4 rounded-2xl bg-primary/5 border border-primary/20">
                            <Calendar className="w-5 h-5 text-primary" />
                            <p className="text-xs font-bold text-primary/80">Contract Renewable: Jan 2027</p>
                         </div>
                         <div className="bg-background/80 p-6 rounded-[1.5rem] border border-border/40 text-center space-y-2">
                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Institutional Rating</p>
                            <h5 className="text-3xl font-black text-primary">Excellent</h5>
                            <p className="text-xs font-bold">Top 5% of Faculty</p>
                         </div>
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
    <DashboardLayout role="admin" title="Faculty Management" subtitle="Manage institutional lecturers, monitor course delivery, and audit faculty performance.">
      <div className="space-y-8 pb-20">
        {/* Advanced Filters */}
        <div className="bg-card/40 backdrop-blur-sm border border-border/40 rounded-[2rem] p-6 shadow-xl space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="relative flex-1 max-w-xl w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search faculty by name, ID, or department..."
                className="pl-12 h-14 rounded-2xl bg-background/50 border-border/60 focus-visible:ring-primary/50 text-lg font-medium"
              />
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <Button variant="outline" className="h-14 px-6 rounded-2xl font-black border-border/60 hover:bg-muted">
                <Filter className="w-5 h-5 mr-2" /> Filters
              </Button>
              <Button className="h-14 px-8 rounded-2xl font-black bg-primary text-white shadow-lg shadow-primary/20">
                <UserPlus className="w-5 h-5 mr-2" /> Add Lecturer
              </Button>
            </div>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-1 hide-scrollbar">
            {["All Faculty", "ICT", "Engineering", "Electrical", "Mechanical", "Highly Active", "Pending Audit"].map((cat, i) => (
              <Badge key={i} variant={i === 0 ? "default" : "outline"} className="px-6 py-2 rounded-xl font-black cursor-pointer whitespace-nowrap">
                {cat}
              </Badge>
            ))}
          </div>
        </div>

        {/* Lecturer Table */}
        <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] shadow-xl overflow-hidden">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow className="border-border/40 hover:bg-transparent">
                <TableHead className="font-black uppercase tracking-widest text-[10px] py-6 px-8">Lecturer</TableHead>
                <TableHead className="font-black uppercase tracking-widest text-[10px]">Department</TableHead>
                <TableHead className="font-black uppercase tracking-widest text-[10px]">Active Courses</TableHead>
                <TableHead className="font-black uppercase tracking-widest text-[10px]">Sync Health</TableHead>
                <TableHead className="font-black uppercase tracking-widest text-[10px]">Performance</TableHead>
                <TableHead className="font-black uppercase tracking-widest text-[10px] text-right pr-8">Last Upload</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {lecturers.map((lec) => (
                <TableRow key={lec.id} className="border-border/40 hover:bg-muted/20 transition-colors group cursor-pointer" onClick={() => handleOpenLecturer(lec)}>
                  <TableCell className="py-6 px-8">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12 border-2 border-background shadow-lg">
                        <AvatarImage src={lec.avatar} />
                        <AvatarFallback>{lec.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-black text-sm group-hover:text-primary transition-colors">{lec.name}</p>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{lec.id}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="rounded-lg font-bold border-border/60">{lec.dept}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                       <BookOpen className="w-4 h-4 text-primary" />
                       <span className="text-xs font-black">{lec.courses} Modules</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3 w-32">
                       <Progress value={lec.syncHealth} className={`h-1.5 ${lec.syncHealth < 70 ? 'text-amber-500' : ''}`} />
                       <span className="text-xs font-black">{lec.syncHealth}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                       <TrendingUp className="w-4 h-4 text-success" />
                       <span className="text-xs font-black">{lec.performance}% Eff.</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right pr-8">
                    <div className="flex flex-col items-end">
                       <span className="text-xs font-black text-muted-foreground uppercase tracking-widest">{lec.lastUpload}</span>
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
