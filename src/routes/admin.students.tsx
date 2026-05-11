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
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Search,
  Plus,
  UserPlus,
  Clock,
  MoreVertical,
  CheckCircle2,
  Filter,
  SlidersHorizontal,
  Download,
  FileUp,
  RefreshCw,
  AlertTriangle,
  MessageSquare,
  ShieldAlert,
  WifiOff,
  Laptop,
  Activity,
  GraduationCap,
  ChevronDown,
  MoreHorizontal,
  UserMinus,
  Mail,
  Key,
  History,
  FileText,
  Ban,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/admin/students")({
  head: () => ({ meta: [{ title: "Student Management — JifunzeHub" }] }),
  component: AdminStudentsComponent,
});

function AdminStudentsComponent() {
  const students = [
    {
      id: "STU-001",
      name: "Amina Hussein",
      admNo: "KIP/ICT/2024/001",
      department: "ICT",
      course: "Networking Essentials",
      syncStatus: "Synced",
      device: "Laptop (Win 11)",
      lastActivity: "12m ago",
      score: 92,
      offlineActivity: 88,
      avatar: "AH",
    },
    {
      id: "STU-002",
      name: "John Ochieng",
      admNo: "KIP/ELE/2024/042",
      department: "Electrical",
      course: "Solar Installation",
      syncStatus: "Offline",
      device: "Android Tab",
      lastActivity: "2d ago",
      score: 45,
      offlineActivity: 12,
      avatar: "JO",
      warning: true,
    },
    {
      id: "STU-003",
      name: "Sarah Wanjiru",
      admNo: "KIP/HOS/2024/115",
      department: "Hospitality",
      course: "Food & Beverage",
      syncStatus: "Synced",
      device: "Smartphone",
      lastActivity: "1h ago",
      score: 78,
      offlineActivity: 45,
      avatar: "SW",
    },
    {
      id: "STU-004",
      name: "Peter Mutua",
      admNo: "KIP/PLU/2024/089",
      department: "Plumbing",
      course: "Pipe Fitting",
      syncStatus: "Syncing",
      device: "Laptop (Win 10)",
      lastActivity: "Just now",
      score: 64,
      offlineActivity: 92,
      avatar: "PM",
    },
    {
      id: "STU-005",
      name: "David Kiptoo",
      admNo: "KIP/ICT/2024/012",
      department: "ICT",
      course: "Software Dev",
      syncStatus: "Conflict",
      device: "Desktop (Lab)",
      lastActivity: "3h ago",
      score: 85,
      offlineActivity: 74,
      avatar: "DK",
      conflict: true,
    },
  ];

  return (
    <DashboardLayout
      role="admin"
      title="Student Management"
      subtitle="Complete institutional visibility of learner progress, device sync health, and academic performance."
    >
      <div className="space-y-8 pb-20">
        {/* Quick Stats Banner */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StudentStatCard title="Total Students" value="1,248" icon={Users} color="text-primary" />
          <StudentStatCard
            title="Active Today"
            value="842"
            icon={Activity}
            color="text-emerald-500"
          />
          <StudentStatCard
            title="Offline Syncs"
            value="156"
            icon={WifiOff}
            color="text-amber-500"
          />
          <StudentStatCard
            title="Sync Failures"
            value="12"
            icon={AlertTriangle}
            color="text-destructive"
          />
        </div>

        {/* Smart Alerts Center */}
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="border-amber-500/20 bg-amber-500/5 shadow-sm">
            <CardHeader className="py-4 flex flex-row items-center justify-between space-y-0">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-600" />
                <CardTitle className="text-sm font-black uppercase tracking-widest text-amber-700">
                  Sync Anomalies
                </CardTitle>
              </div>
              <Badge variant="outline" className="bg-amber-100 text-amber-700 border-amber-200">
                4 Students
              </Badge>
            </CardHeader>
            <CardContent className="pb-4">
              <p className="text-xs text-amber-800/80 font-medium leading-relaxed">
                Students in Electrical Dept have reported sync conflicts due to duplicate local
                storage indexes.
              </p>
            </CardContent>
          </Card>
          <Card className="border-destructive/20 bg-destructive/5 shadow-sm">
            <CardHeader className="py-4 flex flex-row items-center justify-between space-y-0">
              <div className="flex items-center gap-2">
                <Ban className="w-4 h-4 text-destructive" />
                <CardTitle className="text-sm font-black uppercase tracking-widest text-destructive">
                  At-Risk Learners
                </CardTitle>
              </div>
              <Badge
                variant="outline"
                className="bg-destructive/10 text-destructive border-destructive/20"
              >
                8 Students
              </Badge>
            </CardHeader>
            <CardContent className="pb-4">
              <p className="text-xs text-destructive/80 font-medium leading-relaxed">
                These students haven't synced their offline activity for more than 14 days. Possible
                device failure.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Management Controls */}
        <div className="bg-background border border-border/60 rounded-2xl p-4 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search name, admission number, department..."
                className="pl-10 bg-muted/30 border-border/60 focus-visible:ring-primary/50"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <Button variant="outline" size="sm" className="shrink-0">
                <SlidersHorizontal className="w-4 h-4 mr-2" /> Filters
              </Button>
              <Button variant="outline" size="sm" className="shrink-0">
                <FileUp className="w-4 h-4 mr-2" /> Bulk Import
              </Button>
              <div className="h-8 w-px bg-border/60 mx-1 hidden md:block"></div>
              <Button className="bg-primary text-primary-foreground shadow-md shadow-primary/20 font-bold">
                <UserPlus className="w-4 h-4 mr-2" /> Add Student
              </Button>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer shrink-0 rounded-full px-3 py-1 text-[10px] font-bold"
            >
              All Students (1,248)
            </Badge>
            <Badge
              variant="outline"
              className="hover:bg-muted cursor-pointer shrink-0 rounded-full px-3 py-1 text-[10px] font-bold"
            >
              Synced Today (842)
            </Badge>
            <Badge
              variant="outline"
              className="hover:bg-muted cursor-pointer shrink-0 rounded-full px-3 py-1 text-[10px] font-bold text-amber-600 border-amber-200 bg-amber-50/50"
            >
              Offline &gt; 3 Days (156)
            </Badge>
            <Badge
              variant="outline"
              className="hover:bg-muted cursor-pointer shrink-0 rounded-full px-3 py-1 text-[10px] font-bold text-destructive border-destructive/20 bg-destructive/5"
            >
              At Risk (8)
            </Badge>
          </div>
        </div>

        {/* Student Table */}
        <Card className="border-border/60 shadow-soft overflow-hidden">
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-muted/30">
                <TableRow className="hover:bg-transparent border-b border-border/50">
                  <TableHead className="text-[10px] font-black uppercase tracking-widest px-6 py-4">
                    Student & Adm
                  </TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest px-6 py-4">
                    Course & Dept
                  </TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest px-6 py-4">
                    Sync Status
                  </TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest px-6 py-4">
                    Last Activity
                  </TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest px-6 py-4">
                    Performance
                  </TableHead>
                  <TableHead className="text-right text-[10px] font-black uppercase tracking-widest px-6 py-4">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow
                    key={student.id}
                    className="group border-b border-border/40 hover:bg-muted/10 transition-colors"
                  >
                    <TableCell className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9 border border-border/50">
                          <AvatarFallback
                            className={`text-[10px] font-black ${student.warning ? "bg-destructive/10 text-destructive" : "bg-muted text-muted-foreground"}`}
                          >
                            {student.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-black uppercase tracking-tight text-sm">
                            {student.name}
                          </p>
                          <p className="text-[10px] text-muted-foreground font-bold">
                            {student.admNo}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-4">
                      <div className="space-y-0.5">
                        <p className="font-bold text-xs">{student.course}</p>
                        <Badge variant="outline" className="text-[9px] font-bold py-0">
                          {student.department}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        <Badge
                          variant="outline"
                          className={`w-fit text-[9px] font-black uppercase tracking-widest ${
                            student.syncStatus === "Synced"
                              ? "bg-success/10 text-success border-success/30"
                              : student.syncStatus === "Offline"
                                ? "bg-muted text-muted-foreground border-border"
                                : student.syncStatus === "Conflict"
                                  ? "bg-destructive/10 text-destructive border-destructive/30"
                                  : "bg-amber-500/10 text-amber-600 border-amber-500/30"
                          }`}
                        >
                          {student.syncStatus === "Synced" && (
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                          )}
                          {student.syncStatus === "Conflict" && (
                            <AlertTriangle className="w-3 h-3 mr-1" />
                          )}
                          {student.syncStatus}
                        </Badge>
                        <span className="text-[9px] text-muted-foreground font-medium flex items-center gap-1">
                          <Laptop className="w-3 h-3" /> {student.device}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-4">
                      <div className="space-y-0.5">
                        <p className="text-xs font-bold">{student.lastActivity}</p>
                        <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest flex items-center gap-1">
                          <History className="w-3 h-3" /> LAN Session
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-4">
                      <div className="space-y-2 w-32">
                        <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-widest">
                          <span className="text-muted-foreground">Score</span>
                          <span
                            className={student.score < 50 ? "text-destructive" : "text-primary"}
                          >
                            {student.score}%
                          </span>
                        </div>
                        <Progress
                          value={student.score}
                          className="h-1 bg-muted"
                          indicatorClassName={student.score < 50 ? "bg-destructive" : "bg-primary"}
                        />
                      </div>
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
                            Student Actions
                          </DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <FileText className="w-4 h-4 mr-2" /> View Academic Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Mail className="w-4 h-4 mr-2" /> Send Message / Alert
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <History className="w-4 h-4 mr-2" /> View Offline Logs
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <RefreshCw className="w-4 h-4 mr-2" /> Force Sync Device
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Key className="w-4 h-4 mr-2" /> Reset Local Pin
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            <UserMinus className="w-4 h-4 mr-2" /> Suspend Account
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="bg-muted/10 border-t border-border/50 py-3 px-6 flex items-center justify-between">
            <p className="text-xs text-muted-foreground font-medium">
              Showing <span className="font-bold text-foreground">5</span> of{" "}
              <span className="font-bold text-foreground">1,248</span> students
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 text-[10px] font-black uppercase tracking-widest px-4 border-border/60"
                disabled
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 text-[10px] font-black uppercase tracking-widest px-4 border-border/60"
              >
                Next Page
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  );
}

function StudentStatCard({ title, value, icon: Icon, color }: any) {
  return (
    <Card className="border-border/60 hover:shadow-soft transition-all bg-background overflow-hidden relative">
      <div className={`absolute top-0 right-0 p-4 opacity-5 ${color}`}>
        <Icon className="w-16 h-16" />
      </div>
      <CardContent className="p-6 relative z-10">
        <div className="flex flex-col gap-1">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            {title}
          </p>
          <div className="flex items-center gap-3">
            <h3 className="text-3xl font-black tracking-tighter">{value}</h3>
            <div className={`p-1.5 rounded-lg bg-muted/50 ${color}`}>
              <Icon className="w-4 h-4" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
