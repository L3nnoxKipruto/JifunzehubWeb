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
  Filter,
  MoreVertical,
  MessageSquare,
  BarChart3,
  User,
  ArrowUpRight,
  TrendingDown,
  Wifi,
  WifiOff,
  CheckCircle2,
  AlertTriangle,
  Download,
  Calendar,
  Clock,
  ArrowLeft,
  ChevronRight,
  UserPlus,
  Mail,
  MoreHorizontal,
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

export const Route = createFileRoute("/lecturer/learners")({
  component: LecturerLearnersComponent,
});

const performanceData = [
  { name: "Week 1", score: 65, engagement: 40 },
  { name: "Week 2", score: 72, engagement: 55 },
  { name: "Week 3", score: 68, engagement: 48 },
  { name: "Week 4", score: 85, engagement: 72 },
  { name: "Week 5", score: 82, engagement: 65 },
  { name: "Week 6", score: 90, engagement: 88 },
];

function LecturerLearnersComponent() {
  const [view, setView] = useState<"list" | "detail">("list");
  const [selectedLearner, setSelectedLearner] = useState<any>(null);

  const learners = [
    {
      id: "KPU-2026-001",
      name: "Amina Hussein",
      dept: "Solar Tech",
      course: "Solar PV Installation",
      progress: 88,
      avgScore: 92,
      syncStatus: "synced",
      lastActive: "10 mins ago",
      status: "High Performer",
      avatar: "https://i.pravatar.cc/150?u=amina"
    },
    {
      id: "KPU-2026-042",
      name: "David Mutua",
      dept: "Electrical",
      course: "Electrical Installations",
      progress: 45,
      avgScore: 58,
      syncStatus: "offline",
      lastActive: "2 days ago",
      status: "At Risk",
      avatar: "https://i.pravatar.cc/150?u=david"
    },
    {
      id: "KPU-2026-112",
      name: "Sarah Wanjiru",
      dept: "Hospitality",
      course: "Food & Beverage Mgt",
      progress: 72,
      avgScore: 84,
      syncStatus: "synced",
      lastActive: "1 hour ago",
      status: "Active",
      avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      id: "KPU-2026-205",
      name: "John Kamau",
      dept: "Automotive",
      course: "Engine Diagnostics",
      progress: 12,
      avgScore: 42,
      syncStatus: "pending",
      lastActive: "1 week ago",
      status: "Inactive",
      avatar: "https://i.pravatar.cc/150?u=john"
    }
  ];

  const handleOpenLearner = (learner: any) => {
    setSelectedLearner(learner);
    setView("detail");
  };

  if (view === "detail" && selectedLearner) {
    return (
      <DashboardLayout role="lecturer" title={selectedLearner.name} subtitle={`Learner Profile • ${selectedLearner.id}`}>
        <div className="space-y-8 pb-20">
          <Button variant="ghost" onClick={() => setView("list")} className="font-black gap-2 hover:bg-muted rounded-xl">
             <ArrowLeft className="w-4 h-4" /> Back to Learner Directory
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
             {/* Left: Profile Information */}
             <div className="space-y-8">
                <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                   <div className="flex flex-col items-center text-center space-y-4">
                      <Avatar className="h-32 w-32 border-4 border-white shadow-2xl">
                         <AvatarImage src={selectedLearner.avatar} />
                         <AvatarFallback className="text-4xl font-black">{selectedLearner.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                         <h2 className="text-2xl font-black">{selectedLearner.name}</h2>
                         <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{selectedLearner.dept} Student</p>
                      </div>
                      <Badge className={`${selectedLearner.status === 'At Risk' ? 'bg-destructive/10 text-destructive' : 'bg-success/10 text-success'} border-none font-black px-4 py-1.5 rounded-xl uppercase tracking-widest text-[10px]`}>
                         {selectedLearner.status}
                      </Badge>
                      
                      <div className="flex gap-2 w-full pt-4">
                         <Button className="flex-1 rounded-xl font-black gap-2">
                            <MessageSquare className="w-4 h-4" /> Message
                         </Button>
                         <Button variant="outline" className="flex-1 rounded-xl font-black gap-2 border-border/60">
                            <Download className="w-4 h-4" /> Reports
                         </Button>
                      </div>
                   </div>

                   <div className="mt-8 space-y-4 border-t border-border/40 pt-8">
                      <div className="flex justify-between items-center">
                         <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Admission No.</span>
                         <span className="text-sm font-black">{selectedLearner.id}</span>
                      </div>
                      <div className="flex justify-between items-center">
                         <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Sync Status</span>
                         <Badge variant="outline" className="border-none bg-muted/40 font-black text-[10px] uppercase gap-1">
                            {selectedLearner.syncStatus === 'synced' ? <Wifi className="w-3 h-3 text-success" /> : <WifiOff className="w-3 h-3 text-destructive" />}
                            {selectedLearner.syncStatus}
                         </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                         <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Last Activity</span>
                         <span className="text-sm font-black">{selectedLearner.lastActive}</span>
                      </div>
                   </div>
                </Card>

                <Card className="border-border/40 bg-primary/5 rounded-[2.5rem] p-8 shadow-xl">
                   <h4 className="text-lg font-black mb-6">Course Engagement</h4>
                   <div className="space-y-6">
                      <div className="space-y-2">
                         <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                            <span>{selectedLearner.course}</span>
                            <span className="text-primary">{selectedLearner.progress}%</span>
                         </div>
                         <Progress value={selectedLearner.progress} className="h-2" />
                      </div>
                      <div className="bg-background/80 p-4 rounded-2xl border border-border/40 space-y-2">
                         <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Downloaded Lessons</p>
                         <div className="flex flex-wrap gap-2">
                            {[1,2,3,4].map(i => <Badge key={i} variant="outline" className="rounded-lg text-[9px] font-black uppercase">M{i}.V4</Badge>)}
                            <Badge variant="outline" className="text-[9px] font-black uppercase text-primary border-primary/20">+12 more</Badge>
                         </div>
                      </div>
                   </div>
                </Card>
             </div>

             {/* Right: Detailed Analytics */}
             <div className="lg:col-span-2 space-y-8">
                <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                   <div className="flex justify-between items-center mb-8">
                      <h3 className="text-2xl font-black">Performance Trends</h3>
                      <div className="flex gap-4">
                         <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-primary"></div>
                            <span className="text-xs font-black text-muted-foreground uppercase tracking-widest">Test Scores</span>
                         </div>
                         <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                            <span className="text-xs font-black text-muted-foreground uppercase tracking-widest">Engagement</span>
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
                            <Line type="monotone" dataKey="score" stroke="var(--color-primary)" strokeWidth={4} dot={{ r: 6, strokeWidth: 0, fill: 'var(--color-primary)' }} activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="engagement" stroke="#3b82f6" strokeWidth={4} dot={{ r: 6, strokeWidth: 0, fill: '#3b82f6' }} />
                         </LineChart>
                      </ResponsiveContainer>
                   </div>
                </Card>

                <div className="grid md:grid-cols-2 gap-8">
                   <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                      <h4 className="text-lg font-black mb-6">Assessment History</h4>
                      <div className="space-y-4">
                         {[
                           { title: "CAT 1: Networking Basics", score: 92, date: "Oct 12" },
                           { title: "Practical: Cable Crimping", score: 85, date: "Oct 15" },
                           { title: "Quiz: OSI Model Layers", score: 78, date: "Oct 18" }
                         ].map((item, i) => (
                           <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 border border-border/40">
                              <div className="space-y-0.5">
                                 <p className="font-black text-sm">{item.title}</p>
                                 <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{item.date}</p>
                              </div>
                              <div className="text-right">
                                 <p className="text-lg font-black text-primary">{item.score}%</p>
                                 <Badge className="bg-success/10 text-success border-none text-[9px] font-black uppercase">Pass</Badge>
                              </div>
                           </div>
                         ))}
                      </div>
                      <Button variant="ghost" className="w-full mt-4 font-black text-xs text-primary">View Full Transcripts</Button>
                   </Card>

                   <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                      <h4 className="text-lg font-black mb-6">Device & Sync Logs</h4>
                      <div className="space-y-4">
                         {[
                           { device: "SAMSUNG-TAB-02", activity: "Downloaded Module 4", time: "2h ago", icon: Download },
                           { device: "LENOVO-LP-01", activity: "Synced Assessment Results", time: "5h ago", icon: RefreshCw },
                           { device: "SAMSUNG-TAB-02", activity: "Offline Access: Video 2.1", time: "Yesterday", icon: WifiOff }
                         ].map((log, i) => (
                           <div key={i} className="flex gap-4 p-4 rounded-2xl bg-muted/30 border border-border/40">
                              <div className="p-2 bg-background rounded-xl border border-border/40 shrink-0 h-fit">
                                 <log.icon className="w-4 h-4 text-primary" />
                              </div>
                              <div className="space-y-0.5">
                                 <p className="font-black text-sm">{log.activity}</p>
                                 <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{log.device} • {log.time}</p>
                              </div>
                           </div>
                         ))}
                      </div>
                      <Button variant="ghost" className="w-full mt-4 font-black text-xs text-primary">Full Infrastructure Log</Button>
                   </Card>
                </div>
             </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout role="lecturer" title="Learner Directory" subtitle="Monitor and manage student performance and institutional health.">
      <div className="space-y-8">
        {/* Advanced Filters */}
        <div className="bg-card/40 backdrop-blur-sm border border-border/40 rounded-[2rem] p-6 shadow-xl space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="relative flex-1 max-w-xl w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search learners by name or admission ID..."
                className="pl-12 h-14 rounded-2xl bg-background/50 border-border/60 focus-visible:ring-primary/50 text-lg font-medium"
              />
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <Button variant="outline" className="h-14 px-6 rounded-2xl font-black border-border/60 hover:bg-muted">
                <Filter className="w-5 h-5 mr-2" /> Advanced Filters
              </Button>
              <Button className="h-14 px-8 rounded-2xl font-black bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                <UserPlus className="w-5 h-5 mr-2" /> Add Learner
              </Button>
            </div>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-1 hide-scrollbar">
            {["All Learners", "ICT Dept", "Engineering", "High Performers", "At Risk", "Offline Only"].map((cat, i) => (
              <Badge key={i} variant={i === 0 ? "default" : "outline"} className="px-6 py-2 rounded-xl font-black cursor-pointer whitespace-nowrap">
                {cat}
              </Badge>
            ))}
          </div>
        </div>

        {/* Learner Table */}
        <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] shadow-xl overflow-hidden">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow className="border-border/40 hover:bg-transparent">
                <TableHead className="font-black uppercase tracking-widest text-[10px] py-6 px-8">Learner</TableHead>
                <TableHead className="font-black uppercase tracking-widest text-[10px]">Department</TableHead>
                <TableHead className="font-black uppercase tracking-widest text-[10px]">Active Course</TableHead>
                <TableHead className="font-black uppercase tracking-widest text-[10px]">Progress</TableHead>
                <TableHead className="font-black uppercase tracking-widest text-[10px]">Sync Status</TableHead>
                <TableHead className="font-black uppercase tracking-widest text-[10px] text-right pr-8">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {learners.map((learner) => (
                <TableRow key={learner.id} className="border-border/40 hover:bg-muted/20 transition-colors group cursor-pointer" onClick={() => handleOpenLearner(learner)}>
                  <TableCell className="py-6 px-8">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12 border-2 border-background shadow-lg">
                        <AvatarImage src={learner.avatar} />
                        <AvatarFallback>{learner.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-black text-sm group-hover:text-primary transition-colors">{learner.name}</p>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{learner.id}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="rounded-lg font-bold border-border/60">{learner.dept}</Badge>
                  </TableCell>
                  <TableCell>
                    <p className="text-xs font-bold">{learner.course}</p>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3 w-40">
                      <Progress value={learner.progress} className="h-1.5" />
                      <span className="text-xs font-black text-primary">{learner.progress}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {learner.syncStatus === 'synced' ? (
                        <Wifi className="w-4 h-4 text-success" />
                      ) : (
                        <WifiOff className="w-4 h-4 text-destructive" />
                      )}
                      <span className="text-xs font-bold capitalize">{learner.syncStatus}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right pr-8">
                    <div className="flex items-center justify-end gap-2">
                       <Button size="icon" variant="ghost" className="rounded-xl h-10 w-10 text-muted-foreground hover:text-primary"><MessageSquare className="w-4 h-4" /></Button>
                       <Button size="icon" variant="ghost" className="rounded-xl h-10 w-10 text-muted-foreground"><ChevronRight className="w-5 h-5" /></Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        {/* At Risk Summary */}
        <div className="grid md:grid-cols-2 gap-8">
           <Card className="border-destructive/20 bg-destructive/5 rounded-[2.5rem] p-8 shadow-xl group">
              <div className="flex items-center gap-4 mb-6">
                 <div className="p-4 rounded-2xl bg-destructive/10 text-destructive group-hover:scale-110 transition-transform">
                    <AlertTriangle className="w-8 h-8" />
                 </div>
                 <div>
                    <h4 className="text-xl font-black text-destructive">At-Risk Learners</h4>
                    <p className="text-sm font-bold text-destructive/70">4 students require immediate intervention.</p>
                 </div>
              </div>
              <div className="space-y-4">
                 {[1,2].map(i => (
                   <div key={i} className="bg-background/80 p-4 rounded-2xl border border-destructive/20 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <Avatar className="h-8 w-8"><AvatarFallback>D</AvatarFallback></Avatar>
                         <div>
                            <p className="text-sm font-black">David Mutua</p>
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Inactive &gt; 14 Days</p>
                         </div>
                      </div>
                      <Button size="sm" variant="destructive" className="rounded-xl font-black text-[10px] h-8">Review Engagement</Button>
                   </div>
                 ))}
              </div>
           </Card>

           <Card className="border-primary/20 bg-primary/5 rounded-[2.5rem] p-8 shadow-xl group">
              <div className="flex items-center gap-4 mb-6">
                 <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-8 h-8" />
                 </div>
                 <div>
                    <h4 className="text-xl font-black text-primary">Performance Insights</h4>
                    <p className="text-sm font-bold text-primary/70">ICT Dept completion is up by 15% this month.</p>
                 </div>
              </div>
              <div className="space-y-4">
                 <div className="bg-background/80 p-4 rounded-2xl border border-primary/20 space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                       <span>Networking Basics Mastery</span>
                       <span className="text-success">Optimal</span>
                    </div>
                    <Progress value={85} className="h-2" />
                 </div>
                 <div className="bg-background/80 p-4 rounded-2xl border border-primary/20 space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                       <span>Practical Lab Attendance</span>
                       <span className="text-primary">High</span>
                    </div>
                    <Progress value={72} className="h-2" />
                 </div>
              </div>
           </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

function TrendingUp(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
