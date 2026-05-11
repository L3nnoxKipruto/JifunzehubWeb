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
  FileCheck,
  ClipboardList,
  BarChart3,
  CheckCircle2,
  Clock,
  RefreshCw,
  MoreVertical,
  ChevronRight,
  Filter,
  ArrowUpRight,
  HelpCircle,
  FileText,
  UploadCloud,
  GraduationCap,
  Calendar,
  AlertTriangle,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";

export const Route = createFileRoute("/lecturer/assessments")({
  component: LecturerAssessmentsComponent,
});

const gradeDistribution = [
  { range: "0-40", count: 2 },
  { range: "41-60", count: 8 },
  { range: "61-80", count: 25 },
  { range: "81-90", count: 18 },
  { range: "91-100", count: 7 },
];

function LecturerAssessmentsComponent() {
  const [view, setView] = useState<"list" | "grade">("list");

  const assessments = [
    {
      id: "AS-101",
      title: "Networking Basics CAT 1",
      course: "Networking Essentials",
      type: "CAT",
      attempts: 142,
      dueDate: "Oct 24, 2026",
      status: "Active",
      syncStatus: "synced",
      avgScore: 78
    },
    {
      id: "AS-102",
      title: "Cisco IOS Practical Exam",
      course: "Networking Essentials",
      type: "Practical",
      attempts: 84,
      dueDate: "Oct 28, 2026",
      status: "Draft",
      syncStatus: "local",
      avgScore: 0
    },
    {
      id: "AS-103",
      title: "Module 1-3 Quick Quiz",
      course: "Solar Power Systems",
      type: "Quiz",
      attempts: 210,
      dueDate: "Closed",
      status: "Closed",
      syncStatus: "synced",
      avgScore: 82
    },
    {
      id: "AS-104",
      title: "Safety Standards Assignment",
      course: "Electrical Install",
      type: "Assignment",
      attempts: 45,
      dueDate: "Tomorrow",
      status: "Active",
      syncStatus: "pending",
      avgScore: 65
    }
  ];

  return (
    <DashboardLayout role="lecturer" title="Assessments Hub" subtitle="Design, grade, and analyze institutional evaluations.">
      <div className="space-y-8 pb-20">
        {/* Analytics Top Section */}
        <div className="grid md:grid-cols-3 gap-8">
           <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                 <div>
                    <h3 className="text-2xl font-black">Grade Distribution</h3>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Performance across all active assessments</p>
                 </div>
                 <div className="text-right">
                    <p className="text-3xl font-black text-primary">76.4%</p>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Global Avg</p>
                 </div>
              </div>
              <div className="h-[250px] w-full">
                 <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={gradeDistribution}>
                       <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                       <XAxis dataKey="range" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 'bold'}} />
                       <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 'bold'}} />
                       <Tooltip 
                          cursor={{fill: 'rgba(255,255,255,0.05)'}}
                          contentStyle={{ backgroundColor: 'hsl(var(--card))', borderRadius: '20px', border: '1px solid hsl(var(--border))', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                       />
                       <Bar dataKey="count" radius={[10, 10, 0, 0]}>
                          {gradeDistribution.map((entry, index) => (
                             <Cell key={`cell-${index}`} fill={index > 2 ? 'var(--color-primary)' : 'hsl(var(--muted-foreground))'} />
                          ))}
                       </Bar>
                    </BarChart>
                 </ResponsiveContainer>
              </div>
           </Card>

           <div className="space-y-6">
              <Card className="border-primary/20 bg-primary/5 rounded-[2.5rem] p-8 shadow-xl group cursor-pointer hover:bg-primary/10 transition-all">
                 <div className="flex items-center gap-4">
                    <div className="p-4 rounded-2xl bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                       <Plus className="w-8 h-8" />
                    </div>
                    <div>
                       <h4 className="text-xl font-black">New Assessment</h4>
                       <p className="text-sm font-bold text-primary/70">Create a quiz or practical.</p>
                    </div>
                 </div>
              </Card>

              <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                 <h4 className="text-lg font-black mb-4">Grading Queue</h4>
                 <div className="space-y-4">
                    {[
                      { title: "Lab 3 Practical", course: "Networking", count: 12 },
                      { title: "Safety Assignment", course: "Electrical", count: 8 }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 border border-border/40">
                         <div>
                            <p className="font-black text-sm">{item.title}</p>
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{item.course}</p>
                         </div>
                         <Button size="sm" className="rounded-xl font-black text-[10px] h-8 bg-amber-500 hover:bg-amber-600">Grade {item.count}</Button>
                      </div>
                    ))}
                 </div>
              </Card>
           </div>
        </div>

        {/* Filters & Actions */}
        <div className="bg-card/40 backdrop-blur-sm border border-border/40 rounded-[2rem] p-6 shadow-xl space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="relative flex-1 max-w-xl w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search assessments, titles or courses..."
                className="pl-12 h-14 rounded-2xl bg-background/50 border-border/60 focus-visible:ring-primary/50 text-lg font-medium"
              />
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <Button variant="outline" className="h-14 px-6 rounded-2xl font-black border-border/60 hover:bg-muted">
                <Filter className="w-5 h-5 mr-2" /> Filters
              </Button>
              <Button variant="outline" className="h-14 px-6 rounded-2xl font-black border-border/60 hover:bg-muted">
                <UploadCloud className="w-5 h-5 mr-2" /> Bulk Import
              </Button>
            </div>
          </div>
        </div>

        {/* Assessment Table */}
        <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] shadow-xl overflow-hidden">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow className="border-border/40 hover:bg-transparent">
                <TableHead className="font-black uppercase tracking-widest text-[10px] py-6 px-8">Assessment</TableHead>
                <TableHead className="font-black uppercase tracking-widest text-[10px]">Course</TableHead>
                <TableHead className="font-black uppercase tracking-widest text-[10px]">Type</TableHead>
                <TableHead className="font-black uppercase tracking-widest text-[10px]">Attempts</TableHead>
                <TableHead className="font-black uppercase tracking-widest text-[10px]">Status</TableHead>
                <TableHead className="font-black uppercase tracking-widest text-[10px]">Sync</TableHead>
                <TableHead className="font-black uppercase tracking-widest text-[10px] text-right pr-8">Avg Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assessments.map((ass) => (
                <TableRow key={ass.id} className="border-border/40 hover:bg-muted/20 transition-colors group cursor-pointer">
                  <TableCell className="py-6 px-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                         {ass.type === 'CAT' ? <GraduationCap className="w-5 h-5" /> : ass.type === 'Practical' ? <ClipboardList className="w-5 h-5" /> : <HelpCircle className="w-5 h-5" />}
                      </div>
                      <div>
                        <p className="font-black text-sm group-hover:text-primary transition-colors">{ass.title}</p>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Due: {ass.dueDate}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="text-xs font-bold">{ass.course}</p>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="rounded-lg font-bold border-border/60">{ass.type}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                       <span className="text-xs font-black">{ass.attempts}</span>
                       <span className="text-[10px] font-bold text-muted-foreground uppercase">Submitted</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={`${ass.status === 'Active' ? 'bg-success/10 text-success' : ass.status === 'Draft' ? 'bg-muted text-muted-foreground' : 'bg-destructive/10 text-destructive'} border-none font-black text-[10px] uppercase tracking-widest px-3`}>
                       {ass.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                     {ass.syncStatus === 'synced' ? (
                       <CheckCircle2 className="w-4 h-4 text-success" />
                     ) : (
                       <div className="flex items-center gap-1 text-amber-600">
                          <RefreshCw className="w-4 h-4 animate-spin-slow" />
                          <span className="text-[10px] font-black uppercase">Local</span>
                       </div>
                     )}
                  </TableCell>
                  <TableCell className="text-right pr-8">
                    <div className="flex flex-col items-end">
                       <span className={`text-lg font-black ${ass.avgScore >= 75 ? 'text-success' : ass.avgScore >= 50 ? 'text-amber-500' : 'text-muted-foreground'}`}>
                          {ass.avgScore > 0 ? ass.avgScore + '%' : 'N/A'}
                       </span>
                       <Button size="icon" variant="ghost" className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors"><ChevronRight className="w-4 h-4" /></Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        {/* Builder Preview / Template Cards */}
        <div className="grid md:grid-cols-3 gap-8">
           <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl border-dashed flex flex-col items-center justify-center text-center space-y-4">
              <div className="p-4 rounded-2xl bg-muted/40 text-muted-foreground">
                 <FileText className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                 <h4 className="font-black">Practical Rubrics</h4>
                 <p className="text-xs text-muted-foreground">Grade competency-based tasks with institution-standard rubrics.</p>
              </div>
              <Button variant="ghost" className="font-black text-xs text-primary">Manage Rubrics</Button>
           </Card>

           <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl border-dashed flex flex-col items-center justify-center text-center space-y-4">
              <div className="p-4 rounded-2xl bg-muted/40 text-muted-foreground">
                 <Calendar className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                 <h4 className="font-black">Exam Scheduler</h4>
                 <p className="text-xs text-muted-foreground">Set automated unlock/lock windows for offline local LAN exams.</p>
              </div>
              <Button variant="ghost" className="font-black text-xs text-primary">Open Scheduler</Button>
           </Card>

           <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl border-dashed flex flex-col items-center justify-center text-center space-y-4">
              <div className="p-4 rounded-2xl bg-muted/40 text-muted-foreground">
                 <AlertTriangle className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                 <h4 className="font-black">Integrity Guard</h4>
                 <p className="text-xs text-muted-foreground">Monitor sync-gap patterns to detect potential assessment leaks.</p>
              </div>
              <Button variant="ghost" className="font-black text-xs text-primary">View Alerts</Button>
           </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
