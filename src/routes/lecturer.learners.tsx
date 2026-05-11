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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  Users,
  Activity,
  CheckCircle2,
  WifiOff,
  Filter,
  MoreVertical,
  MessageSquare,
  Eye,
  FileText,
  BarChart3,
  AlertTriangle,
  ArrowUpRight,
  TrendingUp,
  Clock,
  UserCheck,
  CloudSync,
  SlidersHorizontal,
  DownloadCloud,
  Usb,
  Package,
} from "lucide-react";

export const Route = createFileRoute("/lecturer/learners")({
  component: LecturerLearnersComponent,
});

function LecturerLearnersComponent() {
  const learners = [
    {
      id: "STU-089",
      name: "Amina Hussein",
      dept: "ICT",
      course: "Networking Essentials",
      progress: 85,
      status: "Active",
      lastSync: "10m ago",
      score: 92,
      offline: "High",
    },
    {
      id: "STU-102",
      name: "John Ochieng",
      dept: "Electrical",
      course: "Solar Systems",
      progress: 42,
      status: "Offline",
      lastSync: "2 days ago",
      score: 68,
      offline: "Med",
    },
    {
      id: "STU-045",
      name: "Sarah Wanjiku",
      dept: "ICT",
      course: "Networking Essentials",
      progress: 95,
      status: "Active",
      lastSync: "1h ago",
      score: 88,
      offline: "Low",
    },
    {
      id: "STU-012",
      name: "David Mutua",
      dept: "Mechanical",
      course: "Engine Repair",
      progress: 12,
      status: "At Risk",
      lastSync: "2 weeks ago",
      score: 34,
      offline: "None",
    },
    {
      id: "STU-214",
      name: "Kevin Otieno",
      dept: "ICT",
      course: "Python Basics",
      progress: 64,
      status: "Active",
      lastSync: "5m ago",
      score: 76,
      offline: "High",
    },
  ];

  return (
    <DashboardLayout
      role="lecturer"
      title="Learner Intelligence"
      subtitle="Monitor student progress, analyze engagement patterns, and track offline learning activity."
    >
      <div className="space-y-8">
        {/* Analytics Top Row */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <LearnerStat
            cardColor="bg-primary/5"
            icon={Users}
            label="Total Learners"
            value="412"
            trend="+12"
            trendUp={true}
          />
          <LearnerStat
            cardColor="bg-success/5"
            icon={TrendingUp}
            label="Avg. Progress"
            value="64%"
            trend="+5.2%"
            trendUp={true}
          />
          <LearnerStat
            cardColor="bg-amber-500/5"
            icon={WifiOff}
            label="Offline-First Users"
            value="284"
            trend="68%"
            trendUp={true}
          />
          <LearnerStat
            cardColor="bg-destructive/5"
            icon={AlertTriangle}
            label="At-Risk (Inactive)"
            value="12"
            trend="-2"
            trendUp={false}
          />
        </div>

        {/* Filters & Actions */}
        <div className="bg-background border border-border/60 rounded-2xl p-4 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search learners by name, ID or course..."
                className="pl-10 bg-muted/30 border-border/60 focus-visible:ring-accent/50 w-full"
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Button variant="outline" size="sm" className="shrink-0 h-9">
                <Filter className="w-4 h-4 mr-2" /> More Filters
              </Button>
              <Button variant="outline" size="sm" className="shrink-0 h-9">
                <DownloadCloud className="w-4 h-4 mr-2" /> Export CSV
              </Button>
              <div className="h-6 w-px bg-border/60 mx-1 hidden md:block"></div>
              <Button
                size="sm"
                className="bg-primary text-primary-foreground shadow-md shadow-primary/20 h-9"
              >
                <MessageSquare className="w-4 h-4 mr-2" /> Message Group
              </Button>
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20 cursor-pointer"
            >
              All Learners (412)
            </Badge>
            <Badge variant="outline" className="hover:bg-muted cursor-pointer">
              Networking (184)
            </Badge>
            <Badge variant="outline" className="hover:bg-muted cursor-pointer">
              Electrical (132)
            </Badge>
            <Badge variant="outline" className="hover:bg-muted cursor-pointer">
              Automotive (96)
            </Badge>
            <Badge
              variant="outline"
              className="text-destructive bg-destructive/5 border-destructive/20 cursor-pointer"
            >
              At Risk (12)
            </Badge>
            <Badge
              variant="outline"
              className="text-success bg-success/5 border-success/20 cursor-pointer"
            >
              Graduated (45)
            </Badge>
          </div>
        </div>

        {/* Main Learner Table */}
        <Card className="border-border/60 shadow-soft overflow-hidden">
          <CardHeader className="pb-0 border-b border-border/40">
            <div className="flex justify-between items-center mb-4">
              <div>
                <CardTitle className="text-lg">Student Roster</CardTitle>
                <CardDescription>Comprehensive tracking of all enrolled learners.</CardDescription>
              </div>
              <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-success"></div> Active
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div> Offline
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-destructive"></div> At Risk
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-muted/30">
                  <TableRow className="hover:bg-transparent border-b border-border/50">
                    <TableHead className="w-[280px]">Student Details</TableHead>
                    <TableHead>Course & Dept</TableHead>
                    <TableHead className="w-[180px]">Progress & Score</TableHead>
                    <TableHead>Offline Activity</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Last Sync</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {learners.map((learner) => (
                    <TableRow
                      key={learner.id}
                      className="hover:bg-muted/20 transition-colors border-b border-border/50"
                    >
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9 border border-border/60 shadow-sm">
                            <AvatarFallback className="bg-gradient-primary text-primary-foreground font-bold text-xs">
                              {learner.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="space-y-0.5">
                            <p className="font-bold text-sm leading-tight">{learner.name}</p>
                            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                              {learner.id}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">{learner.course}</p>
                          <Badge variant="outline" className="text-[9px] font-bold py-0">
                            {learner.dept} Dept
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-[10px] font-bold">
                            <span className="text-muted-foreground">
                              Progress: {learner.progress}%
                            </span>
                            <span
                              className={
                                learner.score >= 80
                                  ? "text-success"
                                  : learner.score < 40
                                    ? "text-destructive"
                                    : "text-primary"
                              }
                            >
                              Score: {learner.score}%
                            </span>
                          </div>
                          <Progress
                            value={learner.progress}
                            className="h-1.5 bg-muted"
                            indicatorClassName={
                              learner.status === "At Risk" ? "bg-destructive" : "bg-primary"
                            }
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="outline"
                            className={`text-[10px] ${
                              learner.offline === "High"
                                ? "bg-accent/10 text-accent border-accent/20"
                                : learner.offline === "Med"
                                  ? "bg-primary/10 text-primary border-primary/20"
                                  : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {learner.offline} Sync
                          </Badge>
                          {learner.offline === "High" && (
                            <CloudSync className="w-3 h-3 text-accent" />
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={`text-[10px] font-bold ${
                            learner.status === "Active"
                              ? "bg-success/5 text-success border-success/20"
                              : learner.status === "At Risk"
                                ? "bg-destructive/5 text-destructive border-destructive/20"
                                : "bg-amber-500/5 text-amber-600 border-amber-200"
                          }`}
                        >
                          {learner.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="text-sm font-medium">{learner.lastSync}</div>
                        <div className="text-[10px] text-muted-foreground uppercase tracking-widest">
                          Via LAN
                        </div>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-full hover:bg-muted"
                            >
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" /> View Full Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <MessageSquare className="mr-2 h-4 w-4" /> Send Private Message
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <FileText className="mr-2 h-4 w-4" /> View Submissions
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <BarChart3 className="mr-2 h-4 w-4" /> Performance Report
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive focus:bg-destructive/10">
                              <AlertTriangle className="mr-2 h-4 w-4" /> Flag as Inactive
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
          <CardFooter className="bg-muted/10 p-4 border-t border-border/40 flex justify-between items-center">
            <p className="text-xs text-muted-foreground">
              Showing <span className="font-bold text-foreground">5</span> of{" "}
              <span className="font-bold text-foreground">412</span> learners
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled className="h-8 text-xs">
                Previous
              </Button>
              <Button variant="outline" size="sm" className="h-8 text-xs">
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>

        {/* Smart Alerts Panel */}
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="border-destructive/20 bg-destructive/5 lg:col-span-1 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2 text-destructive">
                <AlertTriangle className="w-4 h-4" /> Low Performance Alert
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-xs text-muted-foreground">
                8 learners in 'Networking Essentials' scored below 40% in the last CAT.
              </p>
              <Button variant="destructive" className="w-full text-xs font-bold h-9">
                Bulk Message Alerts
              </Button>
            </CardContent>
          </Card>

          <Card className="border-amber-500/20 bg-amber-500/5 lg:col-span-1 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2 text-amber-600">
                <WifiOff className="w-4 h-4" /> Sync Gap Detected
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-xs text-muted-foreground">
                15 learners haven't synced their offline work in over 7 days.
              </p>
              <Button
                variant="outline"
                className="w-full text-xs font-bold h-9 border-amber-200 text-amber-700 hover:bg-amber-100"
              >
                Send Sync Reminder
              </Button>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5 lg:col-span-1 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2 text-primary">
                <UserCheck className="w-4 h-4" /> Top Performers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-xs text-muted-foreground">
                3 learners have completed 100% of the curriculum early. Ready for certificates.
              </p>
              <Button
                variant="outline"
                className="w-full text-xs font-bold h-9 border-primary/20 text-primary hover:bg-primary/10"
              >
                Issue Certificates
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

function LearnerStat({ cardColor, icon: Icon, label, value, trend, trendUp }: any) {
  return (
    <Card
      className={`border-border/60 ${cardColor} shadow-sm group hover:shadow-soft transition-all`}
    >
      <CardContent className="p-5 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">
            {label}
          </p>
          <h3 className="text-3xl font-bold">{value}</h3>
          <p
            className={`text-[10px] font-bold mt-2 flex items-center gap-1 ${trendUp ? "text-success" : "text-destructive"}`}
          >
            {trendUp ? <ArrowUpRight className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
            {trend} from last month
          </p>
        </div>
        <div className="p-3 bg-background rounded-2xl shadow-sm border border-border/50">
          <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
        </div>
      </CardContent>
    </Card>
  );
}
