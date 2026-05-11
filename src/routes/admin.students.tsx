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
  FileDown,
  MoreVertical,
  MessageSquare,
  BarChart3,
  Wifi,
  WifiOff,
  CheckCircle2,
  AlertTriangle,
  Download,
  Calendar,
  Clock,
  ArrowLeft,
  ChevronRight,
  Filter,
  ArrowUpRight,
  User,
  MoreHorizontal,
  Mail,
  GraduationCap,
  RefreshCw,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export const Route = createFileRoute("/admin/students")({
  component: AdminStudentsComponent,
});

const performanceData = [
  { name: "Week 1", attendance: 85, grades: 68 },
  { name: "Week 2", attendance: 92, grades: 72 },
  { name: "Week 3", attendance: 88, grades: 65 },
  { name: "Week 4", attendance: 95, grades: 82 },
  { name: "Week 5", attendance: 82, grades: 78 },
  { name: "Week 6", attendance: 98, grades: 85 },
];

function AdminStudentsComponent() {
  const [view, setView] = useState<"list" | "detail">("list");
  const [selectedStudent, setSelectedStudent] = useState<any>(null);

  const students = [
    {
      id: "KPU-2026-001",
      name: "Amina Hussein",
      dept: "ICT",
      enrolled: 4,
      progress: 88,
      avgScore: 92,
      syncStatus: "synced",
      attendance: 95,
      avatar: "https://i.pravatar.cc/150?u=amina"
    },
    {
      id: "KPU-2026-042",
      name: "David Mutua",
      dept: "Electrical",
      enrolled: 3,
      progress: 45,
      avgScore: 58,
      syncStatus: "offline",
      attendance: 72,
      avatar: "https://i.pravatar.cc/150?u=david"
    },
    {
      id: "KPU-2026-112",
      name: "Sarah Wanjiru",
      dept: "ICT",
      enrolled: 5,
      progress: 72,
      avgScore: 84,
      syncStatus: "synced",
      attendance: 98,
      avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      id: "KPU-2026-205",
      name: "John Kamau",
      dept: "Mechanical",
      enrolled: 3,
      progress: 12,
      avgScore: 42,
      syncStatus: "pending",
      attendance: 45,
      avatar: "https://i.pravatar.cc/150?u=john"
    }
  ];

  const handleOpenStudent = (student: any) => {
    setSelectedStudent(student);
    setView("detail");
  };

  if (view === "detail" && selectedStudent) {
    return (
      <DashboardLayout role="admin" title={selectedStudent.name} subtitle={`Student Profile • ${selectedStudent.id}`}>
        <div className="space-y-8 pb-20">
          <Button variant="ghost" onClick={() => setView("list")} className="font-black gap-2 hover:bg-muted rounded-xl">
             <ArrowLeft className="w-4 h-4" /> Back to Student Directory
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
             {/* Profile Card */}
             <div className="space-y-8">
                <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                   <div className="flex flex-col items-center text-center space-y-4">
                      <Avatar className="h-32 w-32 border-4 border-white shadow-2xl">
                         <AvatarImage src={selectedStudent.avatar} />
                         <AvatarFallback className="text-4xl font-black">{selectedStudent.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                         <h2 className="text-2xl font-black">{selectedStudent.name}</h2>
                         <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{selectedStudent.dept} Department</p>
                      </div>
                      <Badge className={`${selectedStudent.attendance >= 80 ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'} border-none font-black px-4 py-1.5 rounded-xl uppercase tracking-widest text-[10px]`}>
                         {selectedStudent.attendance}% Attendance
                      </Badge>
                      
                      <div className="flex gap-2 w-full pt-4">
                         <Button variant="outline" className="flex-1 rounded-xl font-black gap-2 border-border/60">
                            <Mail className="w-4 h-4" /> Email
                         </Button>
                         <Button variant="outline" className="flex-1 rounded-xl font-black gap-2 border-border/60">
                            <Download className="w-4 h-4" /> Records
                         </Button>
                      </div>
                   </div>

                   <div className="mt-8 space-y-4 border-t border-border/40 pt-8">
                      <div className="flex justify-between items-center">
                         <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Admission No.</span>
                         <span className="text-sm font-black">{selectedStudent.id}</span>
                      </div>
                      <div className="flex justify-between items-center">
                         <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Institution</span>
                         <span className="text-sm font-black">Kisumu Polytechnic</span>
                      </div>
                      <div className="flex justify-between items-center">
                         <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Account Status</span>
                         <Badge className="bg-success text-white border-none text-[9px] font-black uppercase">ACTIVE</Badge>
                      </div>
                   </div>
                </Card>

                <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                   <h4 className="text-lg font-black mb-6">Device Activity</h4>
                   <div className="space-y-4">
                      <div className="p-4 bg-muted/30 rounded-2xl border border-border/40 flex items-center gap-4">
                         <div className="p-2 bg-background rounded-xl shrink-0">
                            <Wifi className="w-4 h-4 text-primary" />
                         </div>
                         <div className="flex-1">
                            <p className="text-xs font-black">SAMSUNG-TAB-02</p>
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Last Synced 2h ago</p>
                         </div>
                         <Badge variant="outline" className="rounded-lg text-[9px] font-black uppercase">Online</Badge>
                      </div>
                      <div className="p-4 bg-muted/30 rounded-2xl border border-border/40 flex items-center gap-4">
                         <div className="p-2 bg-background rounded-xl shrink-0">
                            <Download className="w-4 h-4 text-emerald-500" />
                         </div>
                         <div className="flex-1">
                            <p className="text-xs font-black">1.2 GB Cached</p>
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">12 Lessons Downloaded</p>
                         </div>
                      </div>
                   </div>
                </Card>
             </div>

             {/* Analytics Column */}
             <div className="lg:col-span-2 space-y-8">
                <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                   <div className="flex justify-between items-center mb-8">
                      <h3 className="text-2xl font-black">Academic Trends</h3>
                      <div className="flex gap-4">
                         <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-primary"></div>
                            <span className="text-xs font-black text-muted-foreground uppercase tracking-widest">Attendance</span>
                         </div>
                         <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                            <span className="text-xs font-black text-muted-foreground uppercase tracking-widest">Assessment Avg</span>
                         </div>
                      </div>
                   </div>
                   
                   <div className="h-[400px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                         <LineChart data={performanceData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 'bold'}} />
                            <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 'bold'}} />
                            <Tooltip 
                               contentStyle={{ backgroundColor: 'hsl(var(--card))', borderRadius: '20px', border: '1px solid hsl(var(--border))', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                               itemStyle={{ fontWeight: 'black' }}
                            />
                            <Line type="monotone" dataKey="attendance" stroke="var(--color-primary)" strokeWidth={4} dot={{ r: 6, strokeWidth: 0, fill: 'var(--color-primary)' }} />
                            <Line type="monotone" dataKey="grades" stroke="#3b82f6" strokeWidth={4} dot={{ r: 6, strokeWidth: 0, fill: '#3b82f6' }} />
                         </LineChart>
                      </ResponsiveContainer>
                   </div>
                </Card>

                <div className="grid md:grid-cols-2 gap-8">
                   <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                      <h4 className="text-lg font-black mb-6">Enrolled Courses</h4>
                      <div className="space-y-4">
                         {[
                           { title: "Networking Essentials", progress: 88, status: "Active" },
                           { title: "Solar Installation", progress: 45, status: "Active" },
                           { title: "Mobile Apps 101", progress: 100, status: "Completed" }
                         ].map((c, i) => (
                           <div key={i} className="space-y-3 p-4 rounded-2xl bg-muted/30 border border-border/40">
                              <div className="flex justify-between items-start">
                                 <h5 className="font-black text-sm">{c.title}</h5>
                                 <Badge className={`${c.status === 'Completed' ? 'bg-success/10 text-success' : 'bg-primary/10 text-primary'} border-none text-[9px] font-black uppercase`}>{c.status}</Badge>
                              </div>
                              <div className="space-y-1">
                                 <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                                    <span>Progress</span>
                                    <span>{c.progress}%</span>
                                 </div>
                                 <Progress value={c.progress} className="h-1.5" />
                              </div>
                           </div>
                         ))}
                      </div>
                   </Card>

                   <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                      <h4 className="text-lg font-black mb-6">Risk Assessment</h4>
                      <div className="space-y-6">
                         {selectedStudent.attendance < 80 ? (
                           <div className="p-4 rounded-2xl bg-destructive/10 border border-destructive/20 space-y-2">
                              <div className="flex items-center gap-2 text-destructive">
                                 <AlertTriangle className="w-5 h-5" />
                                 <p className="text-sm font-black">Attendance Warning</p>
                              </div>
                              <p className="text-xs font-medium text-destructive/70">Learner's attendance has dropped below 80% this month. Recommended for guidance session.</p>
                           </div>
                         ) : (
                           <div className="p-4 rounded-2xl bg-success/10 border border-success/20 space-y-2">
                              <div className="flex items-center gap-2 text-success">
                                 <CheckCircle2 className="w-5 h-5" />
                                 <p className="text-sm font-black">Consistent Performance</p>
                              </div>
                              <p className="text-xs font-medium text-success/70">Learner is meeting all institutional engagement benchmarks.</p>
                           </div>
                         )}

                         <div className="bg-background/80 p-6 rounded-[1.5rem] border border-border/40 text-center space-y-2">
                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Predictive Completion</p>
                            <h5 className="text-3xl font-black text-primary">On-Track</h5>
                            <p className="text-xs font-bold">Estimated finish: Dec 2026</p>
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
    <DashboardLayout role="admin" title="Student Ecosystem" subtitle="Manage institution-wide student data and monitor engagement health.">
      <div className="space-y-8 pb-20">
        {/* Advanced Filters */}
        <div className="bg-card/40 backdrop-blur-sm border border-border/40 rounded-[2rem] p-6 shadow-xl space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="relative flex-1 max-w-xl w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search students by name, ID, or department..."
                className="pl-12 h-14 rounded-2xl bg-background/50 border-border/60 focus-visible:ring-primary/50 text-lg font-medium"
              />
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <Button variant="outline" className="h-14 px-6 rounded-2xl font-black border-border/60 hover:bg-muted">
                <Filter className="w-5 h-5 mr-2" /> Advanced Filters
              </Button>
              <Button className="h-14 px-8 rounded-2xl font-black bg-primary text-white shadow-lg shadow-primary/20">
                <UserPlus className="w-5 h-5 mr-2" /> Add Student
              </Button>
            </div>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-1 hide-scrollbar">
            {["All Students", "Active", "Offline Only", "At Risk", "High Performers", "ICT Dept", "Mechanical"].map((cat, i) => (
              <Badge key={i} variant={i === 0 ? "default" : "outline"} className="px-6 py-2 rounded-xl font-black cursor-pointer whitespace-nowrap">
                {cat}
              </Badge>
            ))}
          </div>
        </div>

        {/* Student Table */}
        <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] shadow-xl overflow-hidden">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow className="border-border/40 hover:bg-transparent">
                <TableHead className="font-black uppercase tracking-widest text-[10px] py-6 px-8">Student</TableHead>
                <TableHead className="font-black uppercase tracking-widest text-[10px]">Department</TableHead>
                <TableHead className="font-black uppercase tracking-widest text-[10px]">Courses</TableHead>
                <TableHead className="font-black uppercase tracking-widest text-[10px]">Sync Health</TableHead>
                <TableHead className="font-black uppercase tracking-widest text-[10px]">Attendance</TableHead>
                <TableHead className="font-black uppercase tracking-widest text-[10px] text-right pr-8">Avg Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id} className="border-border/40 hover:bg-muted/20 transition-colors group cursor-pointer" onClick={() => handleOpenStudent(student)}>
                  <TableCell className="py-6 px-8">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12 border-2 border-background shadow-lg">
                        <AvatarImage src={student.avatar} />
                        <AvatarFallback>{student.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-black text-sm group-hover:text-primary transition-colors">{student.name}</p>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{student.id}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="rounded-lg font-bold border-border/60">{student.dept}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                       <GraduationCap className="w-4 h-4 text-primary" />
                       <span className="text-xs font-black">{student.enrolled} Enrolled</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {student.syncStatus === 'synced' ? (
                        <Wifi className="w-4 h-4 text-success" />
                      ) : student.syncStatus === 'pending' ? (
                        <RefreshCw className="w-4 h-4 text-amber-500 animate-spin-slow" />
                      ) : (
                        <WifiOff className="w-4 h-4 text-destructive" />
                      )}
                      <span className="text-xs font-bold capitalize">{student.syncStatus}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3 w-32">
                      <Progress value={student.attendance} className={`h-1.5 ${student.attendance < 80 ? 'text-destructive' : ''}`} />
                      <span className="text-xs font-black">{student.attendance}%</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right pr-8">
                    <div className="flex flex-col items-end">
                       <span className={`text-lg font-black ${student.avgScore >= 80 ? 'text-success' : student.avgScore >= 50 ? 'text-amber-500' : 'text-destructive'}`}>
                          {student.avgScore}%
                       </span>
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
