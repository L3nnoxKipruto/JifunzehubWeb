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
  Search,
  Plus,
  MoreHorizontal,
  BookOpen,
  Clock,
  Users,
  Filter,
  SlidersHorizontal,
  Grid,
  List,
  CheckCircle2,
  AlertTriangle,
  Package,
  History,
  Download,
  Edit,
  Trash2,
  Globe,
  Lock,
  ShieldCheck,
  Share2,
  Copy,
  Archive,
  BarChart3,
  WifiOff,
  LayoutDashboard,
  Monitor,
  RefreshCw,
} from "lucide-react";

export const Route = createFileRoute("/admin/courses")({
  head: () => ({ meta: [{ title: "Institutional Curriculum — JifunzeHub" }] }),
  component: AdminCoursesComponent,
});

function AdminCoursesComponent() {
  const courses = [
    {
      id: "C101",
      title: "Networking Essentials (CCNA Foundations)",
      department: "ICT",
      instructor: "Eng. Kamau",
      status: "Published",
      students: 184,
      completion: 68,
      offlineReady: true,
      pkgSize: "1.2 GB",
      updated: "2h ago",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    },
    {
      id: "C102",
      title: "Solar Power Systems & Maintenance",
      department: "Electrical",
      instructor: "Mr. Omondi",
      status: "Review",
      students: 132,
      completion: 41,
      offlineReady: true,
      pkgSize: "850 MB",
      updated: "5h ago",
      image: "https://images.unsplash.com/photo-1509391366360-12822a16d8bd?w=800&q=80",
    },
    {
      id: "C103",
      title: "Advanced Automotive Diagnostics",
      department: "Mechanical",
      instructor: "Ms. Wanjiku",
      status: "Published",
      students: 96,
      completion: 22,
      offlineReady: false,
      pkgSize: "Pending",
      updated: "1w ago",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=800&q=80",
    },
    {
      id: "C104",
      title: "Introduction to Python for Engineering",
      department: "ICT",
      instructor: "S. Wanjiru",
      status: "Published",
      students: 210,
      completion: 15,
      offlineReady: true,
      pkgSize: "1.5 GB",
      updated: "3h ago",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    },
  ];

  return (
    <DashboardLayout
      role="admin"
      title="Institutional Curriculum"
      subtitle="Moderate course content, approve new modules, and manage offline deployment packages."
    >
      <div className="space-y-8 pb-20">
        {/* Advanced Controls */}
        <div className="bg-background border border-border/60 rounded-2xl p-4 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search curriculum, lecturers, keywords..."
                className="pl-10 bg-muted/30 border-border/60 focus-visible:ring-primary/50"
              />
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <Button variant="outline" size="sm" className="shrink-0">
                <SlidersHorizontal className="w-4 h-4 mr-2" /> Filters
              </Button>
              <div className="h-8 w-px bg-border/60 mx-1 hidden md:block"></div>
              <Button className="bg-primary text-primary-foreground shadow-md shadow-primary/20 font-bold">
                <Plus className="w-4 h-4 mr-2" /> Create Course
              </Button>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer shrink-0 rounded-full px-3 py-1 text-[10px] font-bold"
            >
              All Courses (42)
            </Badge>
            <Badge
              variant="outline"
              className="hover:bg-muted cursor-pointer shrink-0 rounded-full px-3 py-1 text-[10px] font-bold border-emerald-500/30 text-emerald-600 bg-emerald-50/50"
            >
              Published (32)
            </Badge>
            <Badge
              variant="outline"
              className="hover:bg-muted cursor-pointer shrink-0 rounded-full px-3 py-1 text-[10px] font-bold border-amber-500/30 text-amber-600 bg-amber-50/50"
            >
              Pending Review (5)
            </Badge>
            <Badge
              variant="outline"
              className="hover:bg-muted cursor-pointer shrink-0 rounded-full px-3 py-1 text-[10px] font-bold border-blue-500/30 text-blue-600 bg-blue-50/50"
            >
              Offline Ready (38)
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="grid" className="w-full">
          <div className="flex justify-between items-center mb-6">
            <TabsList className="bg-muted/50 border border-border/50 p-1">
              <TabsTrigger
                value="grid"
                className="data-[state=active]:bg-background data-[state=active]:shadow-sm px-4"
              >
                <Grid className="w-4 h-4 mr-2" /> Grid
              </TabsTrigger>
              <TabsTrigger
                value="list"
                className="data-[state=active]:bg-background data-[state=active]:shadow-sm px-4"
              >
                <List className="w-4 h-4 mr-2" /> Table
              </TabsTrigger>
            </TabsList>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 text-[10px] font-black uppercase tracking-widest"
              >
                <Package className="w-3 h-3 mr-2" /> Pkg History
              </Button>
              <Button className="h-8 bg-accent/10 text-accent hover:bg-accent/20 border-0 text-[10px] font-black uppercase tracking-widest">
                <RefreshCw className="w-3 h-3 mr-2" /> Global Sync
              </Button>
            </div>
          </div>

          <TabsContent value="grid" className="m-0 focus-visible:outline-none">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {courses.map((course) => (
                <Card
                  key={course.id}
                  className="group overflow-hidden border-border/60 hover:shadow-elegant hover:border-primary/40 transition-all duration-300 flex flex-col bg-background"
                >
                  <div className="relative h-44 bg-muted overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    <img
                      src={course.image}
                      alt={course.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute top-3 left-3 z-20 flex gap-1.5">
                      <Badge
                        className={`border-none font-black text-[9px] uppercase tracking-widest ${
                          course.status === "Published"
                            ? "bg-success/90 text-success-foreground"
                            : "bg-amber-500/90 text-white"
                        }`}
                      >
                        {course.status}
                      </Badge>
                      <Badge className="bg-background/80 text-foreground backdrop-blur-md border-none font-black text-[9px] uppercase tracking-widest">
                        {course.department}
                      </Badge>
                    </div>

                    <div className="absolute top-3 right-3 z-20">
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
                        <DropdownMenuContent align="end" className="w-48">
                          <DropdownMenuItem>
                            <CheckCircle2 className="w-4 h-4 mr-2 text-success" /> Approve Course
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="w-4 h-4 mr-2" /> Modify Content
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Package className="w-4 h-4 mr-2" /> Re-Package Offline
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <BarChart3 className="w-4 h-4 mr-2" /> View Analytics
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <History className="w-4 h-4 mr-2" /> Change Logs
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            <Archive className="w-4 h-4 mr-2" /> Archive Course
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 z-20">
                      <h3 className="font-black text-white text-sm leading-tight line-clamp-2 uppercase tracking-tight">
                        {course.title}
                      </h3>
                      <p className="text-[9px] text-white/70 font-bold uppercase tracking-widest mt-1">
                        Instructor: {course.instructor}
                      </p>
                    </div>
                  </div>

                  <CardContent className="p-5 flex-1 space-y-4">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Users className="w-3.5 h-3.5" /> {course.students} Learners
                      </div>
                      <div className="text-primary">{course.completion}% Done</div>
                    </div>
                    <Progress
                      value={course.completion}
                      className="h-1.5 bg-muted"
                      indicatorClassName="bg-primary shadow-[0_0_8px_rgba(var(--primary),0.5)]"
                    />

                    <div className="flex justify-between items-center pt-2">
                      <div className="flex items-center gap-1.5">
                        {course.offlineReady ? (
                          <Badge
                            variant="outline"
                            className="bg-success/10 text-success border-success/30 text-[9px] font-black uppercase py-0 px-1.5"
                          >
                            <WifiOff className="w-3 h-3 mr-1" /> {course.pkgSize}
                          </Badge>
                        ) : (
                          <Badge
                            variant="outline"
                            className="bg-muted text-muted-foreground border-border text-[9px] font-black uppercase py-0 px-1.5"
                          >
                            <Clock className="w-3 h-3 mr-1" /> Packaging...
                          </Badge>
                        )}
                      </div>
                      <span className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">
                        Updated {course.updated}
                      </span>
                    </div>
                  </CardContent>

                  <CardFooter className="p-4 pt-0 gap-2">
                    <Button
                      variant="outline"
                      className="flex-1 text-[10px] font-black uppercase tracking-widest h-9 border-border/60 hover:bg-muted"
                    >
                      Review
                    </Button>
                    <Button className="flex-1 text-[10px] font-black uppercase tracking-widest h-9 bg-primary/10 text-primary border-0 hover:bg-primary/20 shadow-none">
                      Publish
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="list" className="m-0 focus-visible:outline-none">
            <Card className="border-border/60 shadow-soft overflow-hidden">
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-muted/30">
                    <TableRow className="hover:bg-transparent border-b border-border/50">
                      <TableHead className="w-20 text-[10px] font-black uppercase tracking-widest px-6 py-4">
                        Code
                      </TableHead>
                      <TableHead className="text-[10px] font-black uppercase tracking-widest px-6 py-4">
                        Course Title
                      </TableHead>
                      <TableHead className="text-[10px] font-black uppercase tracking-widest px-6 py-4">
                        Department
                      </TableHead>
                      <TableHead className="text-[10px] font-black uppercase tracking-widest px-6 py-4">
                        Instructor
                      </TableHead>
                      <TableHead className="text-center text-[10px] font-black uppercase tracking-widest px-6 py-4">
                        Students
                      </TableHead>
                      <TableHead className="text-[10px] font-black uppercase tracking-widest px-6 py-4">
                        Offline Status
                      </TableHead>
                      <TableHead className="text-right text-[10px] font-black uppercase tracking-widest px-6 py-4">
                        Actions
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {courses.map((course) => (
                      <TableRow
                        key={course.id}
                        className="group border-b border-border/40 hover:bg-muted/10 transition-colors"
                      >
                        <TableCell className="px-6 py-4 font-bold text-muted-foreground">
                          {course.id}
                        </TableCell>
                        <TableCell className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-muted overflow-hidden flex-shrink-0">
                              <img
                                src={course.image}
                                alt=""
                                className="object-cover w-full h-full"
                              />
                            </div>
                            <span className="font-black uppercase tracking-tight text-xs">
                              {course.title}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="px-6 py-4">
                          <Badge variant="outline" className="text-[9px] font-black">
                            {course.department}
                          </Badge>
                        </TableCell>
                        <TableCell className="px-6 py-4 text-xs font-bold">
                          {course.instructor}
                        </TableCell>
                        <TableCell className="px-6 py-4 text-center font-black">
                          {course.students}
                        </TableCell>
                        <TableCell className="px-6 py-4">
                          {course.offlineReady ? (
                            <Badge
                              variant="outline"
                              className="bg-success/5 text-success border-success/20 text-[9px] font-bold"
                            >
                              READY ({course.pkgSize})
                            </Badge>
                          ) : (
                            <Badge
                              variant="outline"
                              className="bg-amber-500/5 text-amber-600 border-amber-500/20 text-[9px] font-bold"
                            >
                              PENDING
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell className="px-6 py-4 text-right">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground"
                          >
                            <MoreHorizontal className="w-4 h-4" />
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

        {/* Deployment Management Panel */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-border/60 bg-primary/5 shadow-soft">
            <CardHeader>
              <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                <Package className="w-4 h-4 text-primary" /> Offline Packager Studio
              </CardTitle>
              <CardDescription>
                Manage curriculum deployment for low-bandwidth zones.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-background rounded-2xl p-4 border border-border/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-muted rounded-lg">
                    <WifiOff className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest">
                      Global Pkg Status
                    </p>
                    <p className="text-lg font-black">
                      38 <span className="text-[10px] text-muted-foreground ml-1">DEPLOYED</span>
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 text-[10px] font-black border-border/60"
                >
                  Manage Distribution
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-background rounded-xl border border-border/50 text-center">
                  <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest mb-1">
                    Avg Size
                  </p>
                  <p className="text-xl font-black">1.1 GB</p>
                </div>
                <div className="p-3 bg-background rounded-xl border border-border/50 text-center">
                  <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest mb-1">
                    Total Hubs
                  </p>
                  <p className="text-xl font-black">18 LAN</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 shadow-soft">
            <CardHeader>
              <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-accent" /> Institutional Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-muted-foreground">Highest Engagement</span>
                <span className="text-primary font-black uppercase">ICT Dept (82%)</span>
              </div>
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-muted-foreground">Most Downloaded Course</span>
                <span className="text-accent font-black uppercase">Solar Systems</span>
              </div>
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-muted-foreground">Weakest Engagement</span>
                <span className="text-destructive font-black uppercase">Mechanical (42%)</span>
              </div>
              <Button
                variant="ghost"
                className="w-full h-9 text-[10px] font-black uppercase tracking-widest mt-2 border border-border/50 hover:bg-muted"
              >
                Generate Full Curriculum Audit
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
