import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
import { Input } from "@/components/ui/input";
import {
  Search,
  Plus,
  Users,
  GraduationCap,
  BookOpen,
  BarChart3,
  MoreVertical,
  ChevronRight,
  TrendingUp,
  FileText,
  Clock,
  ArrowLeft,
  Building2,
  Mail,
  MoreHorizontal,
  ArrowUpRight,
  WifiOff,
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
import { Department } from "@/types/admin";

export const Route = createFileRoute("/admin/departments")({
  component: AdminDepartmentsComponent,
});

function AdminDepartmentsComponent() {
  const [view, setView] = useState<"grid" | "detail">("grid");
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);

  const departments: Department[] = [
    {
      id: "DEPT-ICT",
      name: "ICT & Digital Media",
      head: "Prof. Benson Omari",
      students: 450,
      lecturers: 12,
      courses: 15,
      completionRate: 82,
      performance: "Optimal",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
    },
    {
      id: "DEPT-ELEC",
      name: "Electrical Engineering",
      head: "Eng. Sarah Wanjiru",
      students: 312,
      lecturers: 8,
      courses: 10,
      completionRate: 64,
      performance: "Stable",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
    },
    {
      id: "DEPT-MECH",
      name: "Mechanical Engineering",
      head: "Dr. Kamau John",
      students: 284,
      lecturers: 9,
      courses: 8,
      completionRate: 42,
      performance: "At Risk",
      image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&q=80"
    }
  ];

  const handleOpenDept = (dept: Department) => {
    setSelectedDept(dept);
    setView("detail");
  };

  if (view === "detail" && selectedDept) {
    return (
      <DashboardLayout role="admin" title={selectedDept.name} subtitle={`Department Management • ${selectedDept.id}`}>
        <div className="space-y-8 pb-20">
          <Button variant="ghost" onClick={() => setView("grid")} className="font-black gap-2 hover:bg-muted rounded-xl">
             <ArrowLeft className="w-4 h-4" /> Back to Departments
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
             {/* Left: Dept Info */}
             <div className="space-y-8">
                <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                   <div className="w-full h-40 rounded-2xl overflow-hidden mb-6">
                      <img src={selectedDept.image} className="w-full h-full object-cover" alt="" />
                   </div>
                   <div className="space-y-4">
                      <h2 className="text-2xl font-black">{selectedDept.name}</h2>
                      <div className="flex items-center gap-3">
                         <Avatar className="h-10 w-10 border border-border/40">
                            <AvatarFallback>{selectedDept.head[0]}</AvatarFallback>
                         </Avatar>
                         <div>
                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Head of Dept</p>
                            <p className="text-sm font-black">{selectedDept.head}</p>
                         </div>
                      </div>
                      <Badge className={`${selectedDept.performance === 'At Risk' ? 'bg-destructive/10 text-destructive' : 'bg-success/10 text-success'} border-none font-black px-4 py-1 rounded-xl uppercase tracking-widest text-[10px]`}>
                         {selectedDept.performance} Performance
                      </Badge>
                   </div>

                   <div className="mt-8 space-y-4 border-t border-border/40 pt-8">
                      <div className="grid grid-cols-2 gap-4">
                         <div className="p-4 bg-muted/30 rounded-2xl border border-border/40">
                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Students</p>
                            <p className="text-xl font-black">{selectedDept.students}</p>
                         </div>
                         <div className="p-4 bg-muted/30 rounded-2xl border border-border/40">
                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Lecturers</p>
                            <p className="text-xl font-black">{selectedDept.lecturers}</p>
                         </div>
                      </div>
                   </div>
                </Card>

                <Card className="border-primary/20 bg-primary/5 rounded-[2.5rem] p-8 shadow-xl">
                   <h4 className="text-lg font-black mb-6">Institutional Goal</h4>
                   <div className="space-y-4">
                      <div className="space-y-2">
                         <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                            <span>Completion Target</span>
                            <span className="text-primary">{selectedDept.completionRate}% / 90%</span>
                         </div>
                         <Progress value={selectedDept.completionRate} className="h-2" />
                      </div>
                      <Button className="w-full rounded-xl font-black bg-primary text-white shadow-lg shadow-primary/20">Allocate Resources</Button>
                   </div>
                </Card>
             </div>

             {/* Right: Dept Details */}
             <div className="lg:col-span-2 space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                   <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                      <h4 className="text-lg font-black mb-6">Top Performing Courses</h4>
                      <div className="space-y-4">
                         {[
                           { title: "Introduction to Networking", learners: 184, avg: 92 },
                           { title: "Mobile App Development", learners: 142, avg: 85 },
                           { title: "Cybersecurity Fundamentals", learners: 96, avg: 88 }
                         ].map((c, i) => (
                           <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 border border-border/40">
                              <div>
                                 <p className="font-black text-sm">{c.title}</p>
                                 <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{c.learners} Active Learners</p>
                              </div>
                              <div className="text-right">
                                 <p className="text-lg font-black text-success">{c.avg}%</p>
                              </div>
                           </div>
                         ))}
                      </div>
                   </Card>

                   <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                      <h4 className="text-lg font-black mb-6">Staffing Overview</h4>
                      <div className="space-y-4">
                         {[
                           { name: "Lecturer James M.", courses: 4, activity: "High" },
                           { name: "Sarah Wanjiru", courses: 3, activity: "Normal" },
                           { name: "David K.", courses: 2, activity: "Offline" }
                         ].map((s, i) => (
                           <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30 border border-border/40">
                              <Avatar className="h-10 w-10 border border-border/40">
                                 <AvatarFallback>{s.name[0]}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                 <p className="font-black text-sm">{s.name}</p>
                                 <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{s.courses} Active Courses</p>
                              </div>
                              <Badge variant="outline" className="rounded-lg text-[9px] font-black uppercase">{s.activity}</Badge>
                           </div>
                         ))}
                      </div>
                   </Card>
                </div>

                <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                   <h4 className="text-2xl font-black mb-8">Department Activity Trends</h4>
                   <div className="h-[300px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                         <BarChart data={[
                           { name: 'Mon', active: 120 },
                           { name: 'Tue', active: 180 },
                           { name: 'Wed', active: 150 },
                           { name: 'Thu', active: 220 },
                           { name: 'Fri', active: 190 }
                         ]}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 'bold'}} />
                            <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 'bold'}} />
                            <Tooltip 
                               contentStyle={{ backgroundColor: 'hsl(var(--card))', borderRadius: '20px', border: '1px solid hsl(var(--border))', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                            />
                            <Bar dataKey="active" fill="var(--color-primary)" radius={[10, 10, 0, 0]} />
                         </BarChart>
                      </ResponsiveContainer>
                   </div>
                </Card>
             </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout role="admin" title="Departments Control" subtitle="Manage institutional departments and faculty operations.">
      <div className="space-y-8 pb-20">
        {/* Actions & Search */}
        <div className="bg-card/40 backdrop-blur-sm border border-border/40 rounded-[2rem] p-6 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
           <div className="relative flex-1 max-w-xl w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search departments or faculty heads..."
                className="pl-12 h-14 rounded-2xl bg-background/50 border-border/60 focus-visible:ring-primary/50 text-lg font-medium"
              />
           </div>
           <div className="flex gap-3 w-full md:w-auto">
              <Button variant="outline" className="h-14 px-6 rounded-2xl font-black border-border/60 hover:bg-muted">
                 <Building2 className="w-5 h-5 mr-2" /> Assign Lecturer
              </Button>
              <Button className="h-14 px-8 rounded-2xl font-black bg-primary text-white shadow-lg shadow-primary/20">
                 <Plus className="w-5 h-5 mr-2" /> Create Department
              </Button>
           </div>
        </div>

        {/* Dept Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept) => (
            <Card key={dept.id} className="group overflow-hidden border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-primary/40">
               <div className="relative h-48 overflow-hidden">
                  <img src={dept.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                     <Badge className="bg-primary/90 text-white border-none font-black px-3 py-1 rounded-lg uppercase tracking-widest text-[10px]">
                        {dept.id}
                     </Badge>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                     <h3 className="text-xl font-black text-white leading-tight group-hover:text-primary transition-colors">{dept.name}</h3>
                  </div>
               </div>
               <CardContent className="p-8 space-y-6">
                  <div className="flex items-center justify-between py-2 border-b border-border/40">
                     <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8 border border-border/40">
                           <AvatarFallback>{dept.head[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                           <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-none mb-1">Head of Dept</p>
                           <p className="text-xs font-bold">{dept.head}</p>
                        </div>
                     </div>
                     <Badge className={`${dept.performance === 'At Risk' ? 'bg-destructive/10 text-destructive' : 'bg-success/10 text-success'} border-none font-black text-[9px] uppercase`}>
                        {dept.performance}
                     </Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                     <div className="text-center">
                        <p className="text-xl font-black">{dept.students}</p>
                        <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Students</p>
                     </div>
                     <div className="text-center border-x border-border/40">
                        <p className="text-xl font-black">{dept.lecturers}</p>
                        <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Lecturers</p>
                     </div>
                     <div className="text-center">
                        <p className="text-xl font-black">{dept.courses}</p>
                        <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Courses</p>
                     </div>
                  </div>

                  <div className="space-y-2">
                     <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                        <span>Completion Rate</span>
                        <span className="text-primary">{dept.completionRate}%</span>
                     </div>
                     <Progress value={dept.completionRate} className="h-2" />
                  </div>
               </CardContent>
               <CardFooter className="px-8 pb-8 pt-0 gap-3">
                  <Button className="flex-1 rounded-2xl h-12 font-black shadow-lg shadow-primary/20" onClick={() => handleOpenDept(dept)}>View Details</Button>
                  <Button variant="outline" className="rounded-2xl h-12 w-12 p-0 border-border/60 hover:bg-muted">
                     <BarChart3 className="w-5 h-5" />
                  </Button>
               </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
