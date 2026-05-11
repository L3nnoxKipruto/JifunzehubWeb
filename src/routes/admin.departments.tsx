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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Building2,
  Users,
  BookOpen,
  Plus,
  MoreVertical,
  Settings2,
  Search,
  Filter,
  SlidersHorizontal,
  Grid,
  List,
  MoreHorizontal,
  Download,
  FileDown,
  Briefcase,
  GraduationCap,
  Laptop,
  WifiOff,
  ArrowUpRight,
  BarChart3,
  Edit,
  Trash2,
  Archive,
  Copy,
  ExternalLink,
  Activity,
  RefreshCw,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/admin/departments")({
  head: () => ({ meta: [{ title: "Department Management — JifunzeHub" }] }),
  component: DepartmentsComponent,
});

function DepartmentsComponent() {
  const departments = [
    {
      id: "D01",
      name: "ICT & Computing",
      head: "Eng. Kamau",
      students: 450,
      lecturers: 12,
      courses: 24,
      completionRate: 82,
      offlineActivity: 94,
      status: "Active",
      icon: Laptop,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      id: "D02",
      name: "Electrical Engineering",
      head: "Mr. Omondi",
      students: 320,
      lecturers: 8,
      courses: 15,
      completionRate: 64,
      offlineActivity: 78,
      status: "Active",
      icon: Activity,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      id: "D03",
      name: "Mechanical & Automotive",
      head: "Ms. Wanjiku",
      students: 210,
      lecturers: 6,
      courses: 10,
      completionRate: 42,
      offlineActivity: 85,
      status: "Active",
      icon: Settings2,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      id: "D04",
      name: "Hospitality & Tourism",
      head: "Mrs. Mutua",
      students: 180,
      lecturers: 5,
      courses: 8,
      completionRate: 75,
      offlineActivity: 62,
      status: "Active",
      icon: Briefcase,
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
    },
    {
      id: "D05",
      name: "Plumbing & Construction",
      head: "Eng. Kiprotich",
      students: 120,
      lecturers: 4,
      courses: 6,
      completionRate: 58,
      offlineActivity: 88,
      status: "Active",
      icon: Building2,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
  ];

  return (
    <DashboardLayout
      role="admin"
      title="Departments"
      subtitle="Manage TVET academic structure, assign lecturers, and track departmental analytics."
    >
      <div className="space-y-8 pb-20">
        {/* Controls Header */}
        <div className="bg-background border border-border/60 rounded-2xl p-4 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="relative flex-1 max-w-md w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search departments, HODs..."
              className="pl-10 bg-muted/30 border-border/60 focus-visible:ring-primary/50"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <Button variant="outline" size="sm" className="shrink-0">
              <SlidersHorizontal className="w-4 h-4 mr-2" /> Filters
            </Button>
            <div className="h-8 w-px bg-border/60 mx-1 hidden md:block"></div>
            <Button className="bg-primary text-primary-foreground shadow-md shadow-primary/20 font-bold">
              <Plus className="w-4 h-4 mr-2" /> Create Department
            </Button>
          </div>
        </div>

        <Tabs defaultValue="grid" className="w-full">
          <div className="flex justify-between items-center mb-6">
            <TabsList className="bg-muted/50 border border-border/50 p-1">
              <TabsTrigger
                value="grid"
                className="data-[state=active]:bg-background data-[state=active]:shadow-sm px-4"
              >
                <Grid className="w-4 h-4 mr-2" /> Card View
              </TabsTrigger>
              <TabsTrigger
                value="list"
                className="data-[state=active]:bg-background data-[state=active]:shadow-sm px-4"
              >
                <List className="w-4 h-4 mr-2" /> Table View
              </TabsTrigger>
            </TabsList>

            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-[10px] font-black uppercase tracking-widest"
              >
                <FileDown className="w-3 h-3 mr-2" /> Export CSV
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-[10px] font-black uppercase tracking-widest"
              >
                <BarChart3 className="w-3 h-3 mr-2" /> Global Analytics
              </Button>
            </div>
          </div>

          <TabsContent value="grid" className="m-0 focus-visible:outline-none">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {departments.map((dept) => (
                <Card
                  key={dept.id}
                  className="group border-border/60 hover:border-primary/40 hover:shadow-soft transition-all duration-300 bg-background overflow-hidden flex flex-col"
                >
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <div
                        className={`w-12 h-12 rounded-2xl ${dept.bg} ${dept.color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500`}
                      >
                        <dept.icon className="w-6 h-6" />
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-foreground"
                          >
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                          <DropdownMenuItem>
                            <Edit className="w-4 h-4 mr-2" /> Edit Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Users className="w-4 h-4 mr-2" /> Assign Lecturers
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <BookOpen className="w-4 h-4 mr-2" /> Add Course
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <BarChart3 className="w-4 h-4 mr-2" /> View Analytics
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="w-4 h-4 mr-2" /> Export Offline Data
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            <Archive className="w-4 h-4 mr-2" /> Archive
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div>
                      <CardTitle className="text-xl font-black uppercase tracking-tight">
                        {dept.name}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-1 font-bold text-xs mt-1">
                        <Briefcase className="w-3 h-3" /> HOD: {dept.head}
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6 flex-1">
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                          Students
                        </p>
                        <p className="text-lg font-black flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-primary" /> {dept.students}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                          Lecturers
                        </p>
                        <p className="text-lg font-black flex items-center gap-2">
                          <Users className="w-4 h-4 text-accent" /> {dept.lecturers}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                          Courses
                        </p>
                        <p className="text-lg font-black flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-emerald-500" /> {dept.courses}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                          Offline Activity
                        </p>
                        <p className="text-lg font-black flex items-center gap-2">
                          <WifiOff className="w-4 h-4 text-amber-500" /> {dept.offlineActivity}%
                        </p>
                      </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="space-y-2 pt-2">
                      <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                        <span className="text-muted-foreground">Term Completion</span>
                        <span className="text-primary">{dept.completionRate}%</span>
                      </div>
                      <Progress
                        value={dept.completionRate}
                        className="h-1.5 bg-muted"
                        indicatorClassName="bg-primary shadow-[0_0_8px_rgba(var(--primary),0.5)]"
                      />
                    </div>
                  </CardContent>

                  <CardFooter className="p-4 pt-0 gap-2">
                    <Button
                      variant="outline"
                      className="flex-1 text-[10px] font-black uppercase tracking-widest h-9 border-border/60 hover:bg-muted"
                    >
                      View Depth
                    </Button>
                    <Button className="flex-1 text-[10px] font-black uppercase tracking-widest h-9 bg-primary/10 text-primary border-0 hover:bg-primary/20 shadow-none">
                      Dept. Analytics
                    </Button>
                  </CardFooter>
                </Card>
              ))}

              {/* Add New Department Card */}
              <Card className="border-dashed border-2 border-border/60 bg-muted/5 hover:bg-muted/10 transition-colors flex flex-col items-center justify-center p-12 text-center space-y-4 group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-background border border-border/60 flex items-center justify-center text-muted-foreground group-hover:scale-110 group-hover:text-primary transition-all duration-300">
                  <Plus className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-lg">Create Department</h3>
                  <p className="text-sm text-muted-foreground">
                    Add a new academic unit to the institution structure.
                  </p>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="list" className="m-0 focus-visible:outline-none">
            <Card className="border-border/60 shadow-soft overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader className="bg-muted/30">
                      <TableRow className="hover:bg-transparent border-b border-border/50">
                        <TableHead className="w-20 text-[10px] font-black uppercase tracking-widest px-6 py-4">
                          ID
                        </TableHead>
                        <TableHead className="text-[10px] font-black uppercase tracking-widest px-6 py-4">
                          Department
                        </TableHead>
                        <TableHead className="text-[10px] font-black uppercase tracking-widest px-6 py-4">
                          Head of Dept
                        </TableHead>
                        <TableHead className="text-center text-[10px] font-black uppercase tracking-widest px-6 py-4">
                          Lecturers
                        </TableHead>
                        <TableHead className="text-center text-[10px] font-black uppercase tracking-widest px-6 py-4">
                          Students
                        </TableHead>
                        <TableHead className="text-[10px] font-black uppercase tracking-widest px-6 py-4">
                          Completion
                        </TableHead>
                        <TableHead className="text-right text-[10px] font-black uppercase tracking-widest px-6 py-4">
                          Actions
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {departments.map((dept) => (
                        <TableRow
                          key={dept.id}
                          className="group border-b border-border/40 hover:bg-muted/10 transition-colors"
                        >
                          <TableCell className="px-6 py-4 font-bold text-muted-foreground">
                            {dept.id}
                          </TableCell>
                          <TableCell className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-lg ${dept.bg} ${dept.color}`}>
                                <dept.icon className="w-4 h-4" />
                              </div>
                              <span className="font-black uppercase tracking-tight">
                                {dept.name}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell className="px-6 py-4 font-medium">{dept.head}</TableCell>
                          <TableCell className="px-6 py-4 text-center">
                            <Badge variant="secondary" className="font-bold">
                              {dept.lecturers}
                            </Badge>
                          </TableCell>
                          <TableCell className="px-6 py-4 text-center font-bold text-primary">
                            {dept.students}
                          </TableCell>
                          <TableCell className="px-6 py-4">
                            <div className="flex items-center gap-3 w-32">
                              <Progress
                                value={dept.completionRate}
                                className="h-1 bg-muted flex-1"
                                indicatorClassName="bg-emerald-500"
                              />
                              <span className="text-[10px] font-bold">{dept.completionRate}%</span>
                            </div>
                          </TableCell>
                          <TableCell className="px-6 py-4 text-right">
                            <div className="flex justify-end gap-1">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-muted-foreground hover:text-primary"
                              >
                                <Edit className="w-3.5 h-3.5" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-muted-foreground hover:text-accent"
                              >
                                <BarChart3 className="w-3.5 h-3.5" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-muted-foreground hover:text-destructive"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Global Structural Metrics */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-border/60 bg-primary/5">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" /> Institution Health
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black">92.4%</div>
              <p className="text-xs text-muted-foreground font-medium mt-1">
                Weighted performance across 5 departments.
              </p>
              <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[92%] shadow-[0_0_10px_rgba(var(--primary),0.5)]"></div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-accent/5">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2 text-accent-foreground">
                <WifiOff className="w-4 h-4" /> Offline Resiliency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black">84.8%</div>
              <p className="text-xs text-muted-foreground font-medium mt-1">
                Curriculum accessibility in low-connectivity areas.
              </p>
              <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-accent w-[84%] shadow-[0_0_10px_rgba(var(--accent),0.5)]"></div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-500" /> Resource Efficiency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black">12:1</div>
              <p className="text-xs text-muted-foreground font-medium mt-1">
                Average student-to-lecturer ratio institution-wide.
              </p>
              <div className="mt-4 flex items-center gap-1.5">
                <Badge
                  variant="outline"
                  className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 text-[9px] font-bold"
                >
                  OPTIMAL
                </Badge>
                <Badge variant="outline" className="text-[9px] font-bold">
                  TARGET: 15:1
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
