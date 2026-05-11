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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  Plus,
  MoreVertical,
  UserCheck,
  KeyRound,
  Users,
  BookOpen,
  SlidersHorizontal,
  Download,
  Briefcase,
  GraduationCap,
  Laptop,
  WifiOff,
  Activity,
  CheckCircle2,
  RefreshCw,
  BarChart3,
  Mail,
  MessageSquare,
  FileText,
  ShieldCheck,
  History,
  Edit,
  Trash2,
  ArrowUpRight,
  MoreHorizontal,
} from "lucide-react";

export const Route = createFileRoute("/admin/lecturers")({
  head: () => ({ meta: [{ title: "Staff Management — JifunzeHub" }] }),
  component: AdminLecturersComponent,
});

function AdminLecturersComponent() {
  const lecturers = [
    {
      id: "LEC-001",
      name: "Eng. James Kamau",
      department: "ICT",
      courses: 4,
      learners: 184,
      syncHealth: 98,
      lastActivity: "10m ago",
      status: "Active",
      avatar: "JK",
      rating: 4.8,
      uploadFreq: "High",
    },
    {
      id: "LEC-002",
      name: "Dr. Mary Omondi",
      department: "Electrical",
      courses: 3,
      learners: 132,
      syncHealth: 92,
      lastActivity: "2h ago",
      status: "Active",
      avatar: "MO",
      rating: 4.5,
      uploadFreq: "Medium",
    },
    {
      id: "LEC-003",
      name: "Prof. Sarah Wanjiru",
      department: "ICT",
      courses: 2,
      learners: 210,
      syncHealth: 85,
      lastActivity: "Yesterday",
      status: "Away",
      avatar: "SW",
      rating: 4.9,
      uploadFreq: "High",
    },
    {
      id: "LEC-004",
      name: "Mr. Peter Mutua",
      department: "Mechanical",
      courses: 2,
      learners: 96,
      syncHealth: 74,
      lastActivity: "3h ago",
      status: "Active",
      avatar: "PM",
      rating: 4.2,
      uploadFreq: "Low",
    },
    {
      id: "LEC-005",
      name: "Eng. David Kiptoo",
      department: "Electrical",
      courses: 3,
      learners: 115,
      syncHealth: 95,
      lastActivity: "Just now",
      status: "Active",
      avatar: "DK",
      rating: 4.7,
      uploadFreq: "Medium",
    },
  ];

  return (
    <DashboardLayout
      role="admin"
      title="Lecturer Management"
      subtitle="Manage teaching staff, oversee curriculum delivery, and track pedagogical performance metrics."
    >
      <div className="space-y-8 pb-20">
        {/* Performance Metrics Banner */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StaffStatCard title="Total Staff" value="45" icon={Users} color="text-primary" />
          <StaffStatCard
            title="Active Courses"
            value="112"
            icon={BookOpen}
            color="text-emerald-500"
          />
          <StaffStatCard
            title="Avg. Satisfaction"
            value="4.7/5"
            icon={ShieldCheck}
            color="text-amber-500"
          />
          <StaffStatCard title="Grading Rate" value="92%" icon={Activity} color="text-indigo-500" />
        </div>

        {/* Management Controls */}
        <div className="bg-background border border-border/60 rounded-2xl p-4 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search lecturers, departments, expertise..."
                className="pl-10 bg-muted/30 border-border/60 focus-visible:ring-primary/50"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <Button variant="outline" size="sm" className="shrink-0">
                <SlidersHorizontal className="w-4 h-4 mr-2" /> Filters
              </Button>
              <Button variant="outline" size="sm" className="shrink-0">
                <FileText className="w-4 h-4 mr-2" /> Staff Report
              </Button>
              <div className="h-8 w-px bg-border/60 mx-1 hidden md:block"></div>
              <Button className="bg-primary text-primary-foreground shadow-md shadow-primary/20 font-bold">
                <UserCheck className="w-4 h-4 mr-2" /> Add Lecturer
              </Button>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer shrink-0 rounded-full px-3 py-1 text-[10px] font-bold"
            >
              All Staff (45)
            </Badge>
            <Badge
              variant="outline"
              className="hover:bg-muted cursor-pointer shrink-0 rounded-full px-3 py-1 text-[10px] font-bold"
            >
              ICT Department (12)
            </Badge>
            <Badge
              variant="outline"
              className="hover:bg-muted cursor-pointer shrink-0 rounded-full px-3 py-1 text-[10px] font-bold"
            >
              Engineering (18)
            </Badge>
            <Badge
              variant="outline"
              className="hover:bg-muted cursor-pointer shrink-0 rounded-full px-3 py-1 text-[10px] font-bold"
            >
              Hospitality (8)
            </Badge>
          </div>
        </div>

        {/* Lecturers Roster */}
        <Card className="border-border/60 shadow-soft overflow-hidden">
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-muted/30">
                <TableRow className="hover:bg-transparent border-b border-border/50">
                  <TableHead className="text-[10px] font-black uppercase tracking-widest px-6 py-4">
                    Lecturer
                  </TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest px-6 py-4">
                    Dept & Expertise
                  </TableHead>
                  <TableHead className="text-center text-[10px] font-black uppercase tracking-widest px-6 py-4">
                    Courses
                  </TableHead>
                  <TableHead className="text-center text-[10px] font-black uppercase tracking-widest px-6 py-4">
                    Learners
                  </TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest px-6 py-4">
                    Sync Health
                  </TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest px-6 py-4">
                    Upload Frequency
                  </TableHead>
                  <TableHead className="text-right text-[10px] font-black uppercase tracking-widest px-6 py-4">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {lecturers.map((lec) => (
                  <TableRow
                    key={lec.id}
                    className="group border-b border-border/40 hover:bg-muted/10 transition-colors"
                  >
                    <TableCell className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <Avatar className="h-10 w-10 border-2 border-border/50">
                            <AvatarFallback className="bg-muted text-muted-foreground font-black text-xs">
                              {lec.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div
                            className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-background ${lec.status === "Active" ? "bg-success" : "bg-muted"}`}
                          ></div>
                        </div>
                        <div>
                          <p className="font-black uppercase tracking-tight text-sm">{lec.name}</p>
                          <p className="text-[10px] text-muted-foreground font-bold">
                            {lec.id} • {lec.status}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-4">
                      <div className="space-y-0.5">
                        <p className="font-bold text-xs">{lec.department}</p>
                        <div className="flex gap-1 items-center">
                          <Badge variant="outline" className="text-[9px] font-black py-0">
                            SENIOR
                          </Badge>
                          <span className="text-[9px] text-primary font-bold">★ {lec.rating}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-4 text-center">
                      <Badge className="bg-primary/10 text-primary border-0 font-black">
                        {lec.courses}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-6 py-4 text-center">
                      <span className="font-black text-foreground">{lec.learners}</span>
                    </TableCell>
                    <TableCell className="px-6 py-4">
                      <div className="space-y-2 w-28">
                        <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-widest">
                          <span className="text-muted-foreground">Integrity</span>
                          <span className="text-foreground">{lec.syncHealth}%</span>
                        </div>
                        <Progress
                          value={lec.syncHealth}
                          className="h-1 bg-muted"
                          indicatorClassName={lec.syncHealth > 90 ? "bg-success" : "bg-amber-500"}
                        />
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-4">
                      <Badge
                        variant="outline"
                        className={`text-[9px] font-black uppercase tracking-widest ${
                          lec.uploadFreq === "High"
                            ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/30"
                            : lec.uploadFreq === "Medium"
                              ? "bg-amber-500/10 text-amber-600 border-amber-500/30"
                              : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {lec.uploadFreq} Frequency
                      </Badge>
                    </TableCell>
                    <TableCell className="px-6 py-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-foreground"
                          >
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                          <DropdownMenuLabel className="text-[10px] font-black uppercase tracking-widest">
                            Staff Controls
                          </DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Briefcase className="w-4 h-4 mr-2" /> View Academic Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <BookOpen className="w-4 h-4 mr-2" /> Assign New Course
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <ShieldCheck className="w-4 h-4 mr-2 text-primary" /> Manage Builder
                            Access
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Mail className="w-4 h-4 mr-2" /> Send Staff Memo
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <History className="w-4 h-4 mr-2" /> Content Sync Logs
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="w-4 h-4 mr-2" /> Revoke Credentials
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Global Staff Analytics Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-border/60 shadow-soft">
            <CardHeader className="pb-4">
              <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-primary" /> Content Creation Trends
              </CardTitle>
              <CardDescription>Frequency of new module uploads to campus server.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                  <span className="text-muted-foreground">Video Lessons</span>
                  <span className="text-foreground">78/month</span>
                </div>
                <Progress value={78} className="h-1.5 bg-muted" indicatorClassName="bg-primary" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                  <span className="text-muted-foreground">Assessments Created</span>
                  <span className="text-foreground">42/month</span>
                </div>
                <Progress value={42} className="h-1.5 bg-muted" indicatorClassName="bg-accent" />
              </div>
              <div className="pt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-[10px] font-black uppercase tracking-widest"
                >
                  Download Full Pedagogy Report
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 shadow-soft bg-muted/5 border-dashed">
            <CardContent className="p-10 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-background border border-border shadow-sm flex items-center justify-center text-muted-foreground opacity-50">
                <History className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold">Staff Activity Logs</h4>
                <p className="text-xs text-muted-foreground max-w-xs">
                  Audit trails of content publishing, grading activities, and administrative changes
                  by lecturers.
                </p>
              </div>
              <Button
                variant="outline"
                className="text-[10px] font-black uppercase tracking-widest h-9 px-6 border-border/60"
              >
                View Audit Trails
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

function StaffStatCard({ title, value, icon: Icon, color }: any) {
  return (
    <Card className="border-border/60 hover:shadow-soft transition-all group bg-background">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div
            className={`p-4 rounded-2xl bg-muted/50 ${color} group-hover:scale-110 transition-transform duration-500`}
          >
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mb-1">
              {title}
            </p>
            <h3 className="text-2xl font-black tracking-tight">{value}</h3>
          </div>
          <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
