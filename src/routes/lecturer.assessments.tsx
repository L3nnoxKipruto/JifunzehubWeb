import { createFileRoute } from "@tanstack/react-router";
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
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileCheck,
  Clock,
  CheckCircle2,
  AlertCircle,
  Plus,
  PenTool,
  Search,
  Filter,
  MoreVertical,
  DownloadCloud,
  FileUp,
  BarChart3,
  Target,
  History,
  Settings,
  ExternalLink,
  HelpCircle,
  Timer,
  Award,
  ShieldCheck,
  WifiOff,
  Usb,
  ClipboardCheck,
  ClipboardList,
  BookOpen,
  Layers,
  ArrowRight,
  Eye,
} from "lucide-react";

export const Route = createFileRoute("/lecturer/assessments")({
  component: LecturerAssessmentsComponent,
});

function LecturerAssessmentsComponent() {
  const assessments = [
    {
      id: "A1",
      title: "Mid-Term Exam: Subnetting Foundations",
      course: "Networking Essentials",
      submissions: 142,
      pendingGrades: 12,
      status: "Active",
      avgScore: 74,
      type: "Quiz",
      duration: "60 mins",
      sync: "High",
    },
    {
      id: "A2",
      title: "Solar Angle Practical Worksheet",
      course: "Solar Installation",
      submissions: 45,
      pendingGrades: 0,
      status: "Completed",
      avgScore: 82,
      type: "Practical",
      duration: "120 mins",
      sync: "Med",
    },
    {
      id: "A3",
      title: "Engine Diagnostic CAT 1",
      course: "Automotive Diagnostics",
      submissions: 96,
      pendingGrades: 38,
      status: "Active",
      avgScore: 58,
      type: "CAT",
      duration: "90 mins",
      sync: "High",
    },
  ];

  return (
    <DashboardLayout
      role="lecturer"
      title="Examination System"
      subtitle="Design competency-based assessments, manage exam sessions, and grade offline submissions."
    >
      <div className="space-y-8">
        {/* Global Action Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-background border border-border/60 p-5 rounded-2xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 text-primary rounded-xl">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-bold text-lg leading-tight">Assessment Command Center</h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                5 active exam sessions across 3 departments.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <Button variant="outline" size="sm" className="flex-1 md:flex-none h-9">
              <DownloadCloud className="w-4 h-4 mr-2" /> Import Qs
            </Button>
            <Button variant="outline" size="sm" className="flex-1 md:flex-none h-9">
              <Usb className="w-4 h-4 mr-2" /> Offline Export
            </Button>
            <Button
              size="sm"
              className="flex-1 md:flex-none h-9 bg-primary text-primary-foreground shadow-md shadow-primary/20"
            >
              <Plus className="w-4 h-4 mr-2" /> Create Assessment
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="bg-muted/50 border border-border/50 h-10 mb-6">
            <TabsTrigger value="all" className="text-xs sm:text-sm">
              All Assessments
            </TabsTrigger>
            <TabsTrigger value="grading" className="text-xs sm:text-sm flex items-center gap-2">
              Grading Queue{" "}
              <Badge className="bg-accent h-4 w-4 p-0 flex items-center justify-center text-[10px]">
                50
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="practical" className="text-xs sm:text-sm">
              Practical Tasks
            </TabsTrigger>
            <TabsTrigger value="offline" className="text-xs sm:text-sm">
              Offline Modes
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="all"
            className="m-0 space-y-6 focus-visible:outline-none focus-visible:ring-0"
          >
            {/* Assessment Stats Row */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <AssessmentStat label="Total Exams" value="12" icon={Layers} color="text-blue-500" />
              <AssessmentStat
                label="Avg. Pass Rate"
                value="78%"
                icon={Target}
                color="text-emerald-500"
              />
              <AssessmentStat
                label="Grading Latency"
                value="14 hrs"
                icon={Clock}
                color="text-amber-500"
              />
              <AssessmentStat
                label="Sync Integrity"
                value="99.4%"
                icon={ShieldCheck}
                color="text-primary"
              />
            </div>

            {/* Assessment Cards Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {assessments.map((a) => (
                <Card
                  key={a.id}
                  className="border-border/60 hover:shadow-soft transition-all flex flex-col bg-background overflow-hidden group"
                >
                  <div
                    className={`h-2 w-full ${a.status === "Active" ? "bg-primary animate-pulse" : "bg-muted"}`}
                  ></div>
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant="outline" className="bg-muted/50 text-[10px] font-bold py-0">
                        {a.course}
                      </Badge>
                      <Badge
                        className={
                          a.status === "Active"
                            ? "bg-success/10 text-success border-success/20"
                            : "bg-muted text-muted-foreground"
                        }
                      >
                        {a.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                      {a.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-3 mt-3">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1">
                        <HelpCircle className="w-3 h-3" /> {a.type}
                      </span>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1">
                        <Timer className="w-3 h-3" /> {a.duration}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-5 pt-0">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-muted/30 rounded-xl border border-border/50">
                        <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mb-1">
                          Submissions
                        </p>
                        <p className="text-xl font-bold">{a.submissions}</p>
                      </div>
                      <div
                        className={`p-3 rounded-xl border ${a.pendingGrades > 0 ? "bg-amber-500/5 border-amber-500/20" : "bg-success/5 border-success/20"}`}
                      >
                        <p
                          className={`text-[9px] font-bold uppercase tracking-widest mb-1 ${a.pendingGrades > 0 ? "text-amber-600" : "text-success"}`}
                        >
                          Pending
                        </p>
                        <p
                          className={`text-xl font-bold ${a.pendingGrades > 0 ? "text-amber-600" : "text-success"}`}
                        >
                          {a.pendingGrades}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-muted-foreground">Class Avg. Score</span>
                        <span className="text-primary">{a.avgScore}%</span>
                      </div>
                      <Progress
                        value={a.avgScore}
                        className="h-1.5 bg-muted"
                        indicatorClassName={a.avgScore >= 70 ? "bg-success" : "bg-primary"}
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-xs h-8 hover:bg-muted border-border/60"
                    >
                      Manage
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 text-xs h-8 bg-primary/10 text-primary hover:bg-primary/20 border-0 shadow-none"
                    >
                      Grade All
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-md border border-border/60 text-muted-foreground hover:text-accent"
                    >
                      <WifiOff className="w-4 h-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent
            value="grading"
            className="m-0 focus-visible:outline-none focus-visible:ring-0"
          >
            <Card className="border-border/60 shadow-soft overflow-hidden">
              <CardHeader className="border-b border-border/40">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <CardTitle>Grading Queue</CardTitle>
                    <CardDescription>
                      Review and grade submissions synced from student offline devices.
                    </CardDescription>
                  </div>
                  <div className="relative w-full sm:w-64">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search students..." className="h-9 pl-9 bg-muted/30" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-muted/30">
                    <TableRow className="border-b border-border/50">
                      <TableHead>Student</TableHead>
                      <TableHead>Assessment</TableHead>
                      <TableHead>Synced Via</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: 1,
                        name: "Amina Hussein",
                        exam: "Subnetting CAT",
                        via: "LAN Sync",
                        time: "10 mins ago",
                        status: "Needs Grading",
                      },
                      {
                        id: 2,
                        name: "John Ochieng",
                        exam: "Subnetting CAT",
                        via: "USB Import",
                        time: "2 days ago",
                        status: "Needs Grading",
                      },
                      {
                        id: 3,
                        name: "Sarah Wanjiru",
                        exam: "Solar Workshop",
                        via: "LAN Sync",
                        time: "3 days ago",
                        status: "Needs Grading",
                      },
                      {
                        id: 4,
                        name: "David Mutua",
                        exam: "Engine Repair",
                        via: "Cloud",
                        time: "1 week ago",
                        status: "Graded",
                      },
                    ].map((sub) => (
                      <TableRow
                        key={sub.id}
                        className="hover:bg-muted/20 border-b border-border/50"
                      >
                        <TableCell className="font-bold text-sm">{sub.name}</TableCell>
                        <TableCell className="text-sm">{sub.exam}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-[10px] font-bold bg-muted/10">
                            {sub.via === "USB Import" && <Usb className="w-3 h-3 mr-1" />}
                            {sub.via}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-xs text-muted-foreground font-medium">
                          {sub.time}
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={
                              sub.status === "Needs Grading"
                                ? "bg-amber-500/10 text-amber-600 border-amber-200"
                                : "bg-success/10 text-success border-success/20"
                            }
                          >
                            {sub.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            size="sm"
                            variant={sub.status === "Needs Grading" ? "default" : "ghost"}
                            className="h-8 text-xs"
                          >
                            {sub.status === "Needs Grading" ? (
                              <PenTool className="w-3.5 h-3.5 mr-2" />
                            ) : (
                              <Eye className="w-3.5 h-3.5 mr-2" />
                            )}
                            {sub.status === "Needs Grading" ? "Grade" : "Review"}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Question Analytics / Performance Heatmap Placeholder */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-border/60 shadow-soft">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" /> Question Performance Analysis
              </CardTitle>
              <CardDescription>
                Identify concepts where learners are struggling offline.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { q: "Q4: VLSM Subnetting Logic", pass: 32 },
                { q: "Q7: OSPF Area Routing", pass: 45 },
                { q: "Q12: DHCP Lease Process", pass: 88 },
              ].map((item, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold">
                    <span>{item.q}</span>
                    <span className={item.pass < 50 ? "text-destructive" : "text-success"}>
                      {item.pass}% Pass
                    </span>
                  </div>
                  <Progress
                    value={item.pass}
                    className="h-1.5 bg-muted"
                    indicatorClassName={item.pass < 50 ? "bg-destructive" : "bg-success"}
                  />
                </div>
              ))}
              <div className="pt-2">
                <Button variant="ghost" className="w-full text-xs font-bold text-primary group">
                  View Deep Analytics{" "}
                  <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5 shadow-sm border-dashed">
            <CardContent className="p-8 text-center space-y-4 flex flex-col items-center justify-center h-full">
              <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-primary shadow-sm border border-primary/20">
                <ClipboardCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold">Competency Grading Interface</h3>
              <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                Use rubrics and competency standards to grade practical assessments synced from
                student devices during lab sessions.
              </p>
              <Button
                variant="outline"
                className="text-xs font-bold bg-background h-9 border-primary/30 text-primary"
              >
                Open Grading Panel
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

function AssessmentStat({ label, value, icon: Icon, color }: any) {
  return (
    <Card className="border-border/60 bg-background shadow-soft group hover:border-primary/40 transition-all">
      <CardContent className="p-5 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">
            {label}
          </p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
        <div
          className={`p-2 bg-muted/50 rounded-xl ${color} group-hover:scale-110 transition-transform`}
        >
          <Icon className="w-5 h-5" />
        </div>
      </CardContent>
    </Card>
  );
}
