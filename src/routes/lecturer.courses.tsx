import { createFileRoute, Link } from "@tanstack/react-router";
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
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  ArrowLeft,
  FileText,
  Video,
  DownloadCloud,
  CheckCircle2,
  ChevronRight,
  FileCheck,
  ArrowUpRight,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Route = createFileRoute("/lecturer/courses")({
  component: LecturerCoursesComponent,
});

function LecturerCoursesComponent() {
  const [view, setView] = useState<"list" | "detail">("list");
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  const courses = [
    {
      id: 1,
      title: "Solar PV Installation & Maintenance",
      dept: "Electrical",
      instructor: "Dr. Omondi",
      students: 145,
      progress: 68,
      status: "published",
      offlineReady: true,
      size: "1.2 GB",
      lastUpdated: "2h ago",
      image: "https://images.unsplash.com/photo-1509391366360-12822a16d8bd?w=800&q=80",
      description: "Comprehensive guide to sizing, installing, and maintaining off-grid solar systems for rural areas.",
      modules: 12,
      resources: 45,
      assessments: 8
    },
    {
      id: 2,
      title: "Automotive Engine Diagnostics",
      dept: "Automotive",
      instructor: "Eng. Kamau",
      students: 42,
      progress: 40,
      status: "draft",
      offlineReady: false,
      size: "Pending",
      lastUpdated: "Yesterday",
      image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&q=80",
      description: "Advanced troubleshooting of modern EFI engines and mechanical tear-downs.",
      modules: 8,
      resources: 22,
      assessments: 4
    },
    {
      id: 3,
      title: "Plumbing Technology Level 4",
      dept: "Building Tech",
      instructor: "Peter Ochieng",
      students: 88,
      progress: 100,
      status: "published",
      offlineReady: true,
      size: "850 MB",
      lastUpdated: "3 days ago",
      image: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?w=800&q=80",
      description: "Practical curriculum covering pipe fitting, water supply networks, and sanitation systems.",
      modules: 15,
      resources: 60,
      assessments: 12
    }
  ];

  const handleOpenCourse = (course: any) => {
    setSelectedCourse(course);
    setView("detail");
  };

  if (view === "detail" && selectedCourse) {
    return (
      <DashboardLayout role="lecturer" title={selectedCourse.title} subtitle={`Course Management • ${selectedCourse.dept}`}>
        <div className="space-y-8 pb-20">
          <Button variant="ghost" onClick={() => setView("list")} className="font-black gap-2 hover:bg-muted rounded-xl">
             <ArrowLeft className="w-4 h-4" /> Back to My Courses
          </Button>

          {/* Course Detail Header */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
             <div className="w-full lg:w-80 h-48 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <img src={selectedCourse.image} className="w-full h-full object-cover" alt="" />
             </div>
             <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                   <Badge className="bg-primary text-white border-none font-black px-3 py-1 rounded-lg uppercase tracking-widest text-[10px]">
                      {selectedCourse.status}
                   </Badge>
                   <Badge variant="outline" className="border-border/60 font-black px-3 py-1 rounded-lg uppercase tracking-widest text-[10px]">
                      {selectedCourse.dept}
                   </Badge>
                </div>
                <h1 className="text-4xl font-black">{selectedCourse.title}</h1>
                <p className="text-lg text-muted-foreground font-medium max-w-2xl">{selectedCourse.description}</p>
                
                <div className="flex flex-wrap gap-4 pt-2">
                   <div className="flex items-center gap-2 bg-muted/40 px-4 py-2 rounded-2xl border border-border/60">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm font-black">{selectedCourse.students} Learners</span>
                   </div>
                   <div className="flex items-center gap-2 bg-muted/40 px-4 py-2 rounded-2xl border border-border/60">
                      <BookOpen className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-black">{selectedCourse.modules} Modules</span>
                   </div>
                   <div className="flex items-center gap-2 bg-muted/40 px-4 py-2 rounded-2xl border border-border/60">
                      <Clock className="w-4 h-4 text-amber-500" />
                      <span className="text-sm font-black">Updated {selectedCourse.lastUpdated}</span>
                   </div>
                </div>
             </div>
          </div>

          {/* Course Tabs */}
          <Tabs defaultValue="modules" className="space-y-8">
            <TabsList className="bg-muted/40 p-1 rounded-2xl border border-border/40 h-auto flex flex-wrap gap-1">
              {["Overview", "Modules", "Resources", "Assessments", "Learners", "Analytics", "Sync"].map(tab => (
                <TabsTrigger key={tab} value={tab.toLowerCase()} className="rounded-xl px-6 py-2.5 font-black data-[state=active]:bg-background data-[state=active]:shadow-lg transition-all">
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="modules" className="space-y-6">
               <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-black">Course Curriculum</h2>
                  <Button className="rounded-xl font-black">
                     <Plus className="w-4 h-4 mr-2" /> Add Module
                  </Button>
               </div>
               
               <div className="grid gap-4">
                  {[1, 2, 3].map(i => (
                    <Card key={i} className="border-border/40 bg-card/40 backdrop-blur-sm rounded-3xl overflow-hidden group">
                       <div className="p-6 flex items-center justify-between cursor-pointer">
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-black">
                                {i}
                             </div>
                             <div>
                                <h4 className="font-black text-lg">Module {i}: Fundamentals of Solar Installation</h4>
                                <p className="text-sm font-bold text-muted-foreground">4 Lessons • 2 Resources • 1 Quiz</p>
                             </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                       </div>
                       <div className="bg-muted/20 border-t border-border/40 p-6 space-y-3">
                          {[
                            { type: 'video', title: 'Introduction to Photovoltaic Systems', duration: '12:45' },
                            { type: 'pdf', title: 'Inverter Sizing Cheat Sheet', size: '2.4 MB' },
                            { type: 'quiz', title: 'Basic Circuitry Assessment', questions: '15' }
                          ].map((lesson, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 rounded-xl hover:bg-background/80 transition-all border border-transparent hover:border-border/40">
                               <div className="flex items-center gap-3">
                                  {lesson.type === 'video' ? <Video className="w-4 h-4 text-blue-500" /> : lesson.type === 'pdf' ? <FileText className="w-4 h-4 text-emerald-500" /> : <FileCheck className="w-4 h-4 text-amber-500" />}
                                  <span className="text-sm font-black">{lesson.title}</span>
                               </div>
                               <div className="flex items-center gap-4">
                                  <span className="text-[10px] font-black text-muted-foreground uppercase">{lesson.duration || lesson.size || lesson.questions + ' Qs'}</span>
                                  <Badge variant="outline" className="bg-success/10 text-success border-none text-[10px] font-black uppercase">Offline Ready</Badge>
                                  <Button size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground"><MoreVertical className="w-4 h-4" /></Button>
                               </div>
                            </div>
                          ))}
                       </div>
                    </Card>
                  ))}
               </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                   <Card className="p-6 border-border/40 bg-card/40 rounded-3xl space-y-4">
                      <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">Average Score</p>
                      <h3 className="text-4xl font-black">84%</h3>
                      <Progress value={84} className="h-2" />
                      <p className="text-[10px] font-bold text-success flex items-center gap-1">
                        <ArrowUpRight className="w-3 h-3" /> 12% increase from last term
                      </p>
                   </Card>
                   <Card className="p-6 border-border/40 bg-card/40 rounded-3xl space-y-4">
                      <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">Active Learners</p>
                      <h3 className="text-4xl font-black">{selectedCourse.students}</h3>
                      <div className="flex -space-x-2">
                         {[1,2,3,4,5].map(i => <Avatar key={i} className="border-2 border-background h-8 w-8"><AvatarFallback>S</AvatarFallback></Avatar>)}
                      </div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">+12 New this week</p>
                   </Card>
                   <Card className="p-6 border-border/40 bg-card/40 rounded-3xl space-y-4">
                      <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">Offline Access</p>
                      <h3 className="text-4xl font-black">92%</h3>
                      <div className="flex items-center gap-2 text-success">
                         <WifiOff className="w-5 h-5" />
                         <span className="text-sm font-black">High Connectivity Autonomy</span>
                      </div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Optimized for TVET Hubs</p>
                   </Card>
                </div>
            </TabsContent>
          </Tabs>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout
      role="lecturer"
      title="Course Management"
      subtitle="Manage your TVET curriculum and monitor learner engagement."
    >
      <div className="space-y-8">
        {/* Advanced Filters & Search Header */}
        <div className="bg-card/40 backdrop-blur-sm border border-border/40 rounded-[2rem] p-6 shadow-xl space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="relative flex-1 max-w-xl w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search courses, departments, or lecturers..."
                className="pl-12 h-14 rounded-2xl bg-background/50 border-border/60 focus-visible:ring-primary/50 text-lg font-medium"
              />
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <Button variant="outline" className="h-14 px-6 rounded-2xl font-black border-border/60 hover:bg-muted">
                <SlidersHorizontal className="w-5 h-5 mr-2" /> Filters
              </Button>
              <Button asChild className="h-14 px-8 rounded-2xl font-black bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                <Link to="/lecturer/builder">
                  <Plus className="w-5 h-5 mr-2" /> Create New Course
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-1 hide-scrollbar">
            {["All Courses", "ICT", "Engineering", "Hospitality", "Electrical", "Automotive"].map((cat, i) => (
              <Badge key={i} variant={i === 0 ? "default" : "outline"} className="px-6 py-2 rounded-xl font-black cursor-pointer whitespace-nowrap">
                {cat}
              </Badge>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="group overflow-hidden border-border/40 hover:shadow-2xl hover:border-primary/40 transition-all duration-500 rounded-[2.5rem] flex flex-col bg-card/40 backdrop-blur-sm"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                <div className="absolute top-6 left-6 flex gap-2">
                  <Badge className="bg-primary/90 text-white border-none font-black px-3 py-1 rounded-lg uppercase tracking-widest text-[10px]">
                    {course.dept}
                  </Badge>
                  {course.offlineReady && (
                    <Badge className="bg-success/90 text-white border-none font-black px-3 py-1 rounded-lg uppercase tracking-widest text-[10px]">
                      <WifiOff className="w-3 h-3 mr-1" /> Offline
                    </Badge>
                  )}
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-black text-white leading-tight mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-3">
                     <div className="flex -space-x-2">
                        {[1,2,3].map(i => <Avatar key={i} className="h-6 w-6 border-2 border-black"><AvatarFallback>S</AvatarFallback></Avatar>)}
                     </div>
                     <span className="text-xs font-bold text-white/80">{course.students} Learners Enrolled</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                   <div className="flex justify-between text-xs font-black uppercase tracking-widest text-muted-foreground">
                      <span>Curriculum Completion</span>
                      <span className="text-primary">{course.progress}%</span>
                   </div>
                   <Progress value={course.progress} className="h-2" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <div className="bg-muted/30 p-3 rounded-2xl border border-border/40">
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Status</p>
                      <p className="text-xs font-bold capitalize">{course.status}</p>
                   </div>
                   <div className="bg-muted/30 p-3 rounded-2xl border border-border/40">
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Updated</p>
                      <p className="text-xs font-bold">{course.lastUpdated}</p>
                   </div>
                </div>
              </CardContent>

              <CardFooter className="p-8 pt-0 gap-3">
                <Button className="flex-1 rounded-2xl h-12 font-black shadow-lg shadow-primary/20" onClick={() => handleOpenCourse(course)}>
                  Open Portal
                </Button>
                <Button variant="outline" className="rounded-2xl h-12 w-12 p-0 border-border/60 hover:bg-muted" asChild>
                   <Link to="/lecturer/builder">
                    <Edit className="w-5 h-5" />
                   </Link>
                </Button>
                <Button variant="outline" className="rounded-2xl h-12 w-12 p-0 border-border/60 hover:bg-muted">
                    <MoreVertical className="w-5 h-5" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
