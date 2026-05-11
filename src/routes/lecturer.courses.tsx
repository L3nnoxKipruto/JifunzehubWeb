import { createFileRoute, Link } from "@tanstack/react-router";
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
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
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
  PlayCircle,
  Users,
  BookOpen,
  HardDrive,
  WifiOff,
  SlidersHorizontal,
  Grid,
  List,
  MoreVertical,
  Edit,
  FileUp,
  Package,
  BarChart3,
  Share2,
  Copy,
  Archive,
  Globe,
  Lock,
  AlertTriangle,
  LayoutDashboard,
  MessageSquare,
  History,
  Clock,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Route = createFileRoute("/lecturer/courses")({
  component: LecturerCoursesComponent,
});

function LecturerCoursesComponent() {
  const courses = [
    {
      id: 1,
      title: "Networking Essentials (CCNA Foundations)",
      dept: "ICT",
      instructor: "James M.",
      students: 145,
      progress: 68,
      status: "published",
      offlineReady: true,
      size: "1.2 GB",
      lastUpdated: "2h ago",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    },
    {
      id: 2,
      title: "Advanced Routing & Switching",
      dept: "ICT",
      instructor: "James M.",
      students: 0,
      progress: 40,
      status: "draft",
      offlineReady: false,
      size: "Pending",
      lastUpdated: "Yesterday",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=800&q=80",
    },
    {
      id: 3,
      title: "Solar Power Systems & Maintenance",
      dept: "Electrical",
      instructor: "Dr. Omondi",
      students: 88,
      progress: 100,
      status: "published",
      offlineReady: true,
      size: "850 MB",
      lastUpdated: "3 days ago",
      image: "https://images.unsplash.com/photo-1509391366360-12822a16d8bd?w=800&q=80",
    },
    {
      id: 4,
      title: "Intro to Python for Engineering",
      dept: "ICT",
      instructor: "S. Wanjiru",
      students: 210,
      progress: 15,
      status: "published",
      offlineReady: true,
      size: "1.5 GB",
      lastUpdated: "5h ago",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    },
  ];

  return (
    <DashboardLayout
      role="lecturer"
      title="Course Management"
      subtitle="Create, edit, and monitor your TVET curriculum performance."
    >
      <div className="space-y-8">
        {/* Advanced Filters & Search Header */}
        <div className="bg-background border border-border/60 rounded-2xl p-4 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search your courses..."
                className="pl-10 bg-muted/30 border-border/60 focus-visible:ring-accent/50 w-full"
              />
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 hide-scrollbar">
              <Button
                variant="outline"
                size="sm"
                className="shrink-0 bg-accent/5 border-accent/20 text-accent hover:bg-accent/10"
              >
                <Package className="w-4 h-4 mr-2" /> Pending Pkgs (2)
              </Button>
              <div className="h-6 w-px bg-border/60 mx-1 hidden md:block"></div>
              <Button variant="outline" size="sm" className="shrink-0">
                <SlidersHorizontal className="w-4 h-4 mr-2" /> Filters
              </Button>
              <div className="flex bg-muted/50 p-0.5 rounded-lg border border-border/50 shrink-0">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-md bg-background shadow-sm"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-md text-muted-foreground"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
              <Button
                asChild
                className="shrink-0 bg-primary text-primary-foreground shadow-md shadow-primary/20"
              >
                <Link to="/lecturer/builder">
                  <Plus className="w-4 h-4 mr-2" /> Create Course
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar text-sm">
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer shrink-0 rounded-full px-3 py-1 text-xs"
            >
              All Courses (12)
            </Badge>
            <Badge
              variant="outline"
              className="hover:bg-muted cursor-pointer shrink-0 rounded-full px-3 py-1 text-xs font-normal"
            >
              Active (8)
            </Badge>
            <Badge
              variant="outline"
              className="hover:bg-muted cursor-pointer shrink-0 rounded-full px-3 py-1 text-xs font-normal"
            >
              Drafts (3)
            </Badge>
            <Badge
              variant="outline"
              className="hover:bg-muted cursor-pointer shrink-0 rounded-full px-3 py-1 text-xs font-normal"
            >
              Archived (1)
            </Badge>
            <div className="h-6 w-px bg-border/60 mx-1"></div>
            <Badge
              variant="outline"
              className="hover:bg-muted cursor-pointer shrink-0 rounded-full px-3 py-1 text-xs font-normal"
            >
              ICT Dept
            </Badge>
            <Badge
              variant="outline"
              className="hover:bg-muted cursor-pointer shrink-0 rounded-full px-3 py-1 text-xs font-normal"
            >
              Engineering
            </Badge>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="group overflow-hidden border-border/60 hover:shadow-elegant hover:border-primary/40 transition-all duration-300 flex flex-col bg-background"
            >
              {/* Card Header with Image */}
              <div className="relative h-44 bg-muted overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90"></div>
                <img
                  src={course.image}
                  alt={course.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute top-3 left-3 z-20 flex gap-2">
                  <Badge
                    className={`backdrop-blur-md border-none font-bold text-[10px] uppercase tracking-wider ${
                      course.status === "published"
                        ? "bg-success/90 text-success-foreground"
                        : "bg-muted/90 text-muted-foreground"
                    }`}
                  >
                    {course.status}
                  </Badge>
                  <Badge className="bg-background/80 text-foreground backdrop-blur border-none font-bold text-[10px] uppercase tracking-wider">
                    {course.dept}
                  </Badge>
                </div>

                <div className="absolute top-3 right-3 z-20 flex items-center gap-1">
                  {course.offlineReady ? (
                    <Badge
                      variant="outline"
                      className="bg-success/20 text-success-foreground border-none backdrop-blur-sm font-bold text-[10px] shadow-sm"
                    >
                      <WifiOff className="w-3 h-3 mr-1" /> Offline
                    </Badge>
                  ) : (
                    <Badge
                      variant="outline"
                      className="bg-destructive/20 text-white border-none backdrop-blur-sm font-bold text-[10px] shadow-sm"
                    >
                      <Lock className="w-3 h-3 mr-1" /> Cloud Only
                    </Badge>
                  )}

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 rounded-full bg-background/20 backdrop-blur text-white hover:bg-background/80"
                      >
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem>
                        <Copy className="w-4 h-4 mr-2" /> Duplicate
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Share2 className="w-4 h-4 mr-2" /> Share / Invite
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Globe className="w-4 h-4 mr-2" /> Publish Settings
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive focus:bg-destructive/10">
                        <Archive className="w-4 h-4 mr-2" /> Archive Course
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="absolute bottom-3 left-3 right-3 z-20">
                  <h3 className="font-bold text-white text-base leading-tight line-clamp-2 mb-1">
                    {course.title}
                  </h3>
                  <p className="text-[10px] text-white/70 font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Updated {course.lastUpdated}
                  </p>
                </div>
              </div>

              <CardContent className="p-5 flex-1 flex flex-col justify-between space-y-4">
                {/* Metrics Row */}
                <div className="flex justify-between items-center py-1">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                      Learners
                    </span>
                    <span className="text-sm font-bold flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-primary" /> {course.students}
                    </span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                      Avg Progress
                    </span>
                    <span className="text-sm font-bold text-primary">{course.progress}%</span>
                  </div>
                </div>

                <Progress
                  value={course.progress}
                  className="h-1.5 bg-muted"
                  indicatorClassName="bg-primary"
                />

                <div className="flex items-center gap-2 pt-2">
                  <Avatar className="h-6 w-6 border">
                    <AvatarFallback className="text-[8px] bg-muted">
                      {course.instructor.split(" ")[0][0]}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-[10px] text-muted-foreground font-medium">
                    Instructor: {course.instructor}
                  </span>
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0 gap-2 mt-auto">
                <Button
                  variant="outline"
                  className="flex-1 text-xs h-9 border-border/60 hover:bg-muted"
                  asChild
                >
                  <Link to="/lecturer/builder">
                    <Edit className="w-3.5 h-3.5 mr-2" /> Edit
                  </Link>
                </Button>
                <Button className="flex-1 text-xs h-9 bg-primary/10 text-primary hover:bg-primary/20 border-0 shadow-none">
                  <BarChart3 className="w-3.5 h-3.5 mr-2" /> Analytics
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-md border border-border/60 text-muted-foreground hover:text-accent"
                >
                  <Package className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Multi-Tab Detail View Placeholder (for when a course is selected/opened) */}
        <Card className="border-border/60 bg-muted/20 border-dashed">
          <CardContent className="p-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-background border border-border shadow-sm flex items-center justify-center mx-auto text-muted-foreground opacity-50">
              <LayoutDashboard className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold">Course Insights Center</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Select a course to view detailed learner progress, manage modules, and generate
                offline deployment packages for your institution.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              <Badge variant="outline" className="bg-background">
                Modules Tracker
              </Badge>
              <Badge variant="outline" className="bg-background">
                Assessment Grades
              </Badge>
              <Badge variant="outline" className="bg-background">
                Offline Sync Status
              </Badge>
              <Badge variant="outline" className="bg-background">
                Engagement Heatmap
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
