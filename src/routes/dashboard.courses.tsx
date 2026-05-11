import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  SlidersHorizontal,
  Grid,
  List,
  Download,
  PlayCircle,
  WifiOff,
  Clock,
  BookOpen,
  MoreVertical,
  BookmarkPlus,
  Share2,
  AlertTriangle,
  Pin,
  FileCheck,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/courses")({
  component: CoursesComponent,
});

function CoursesComponent() {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  const courses = [
    {
      id: 1,
      title: "Networking Essentials (CCNA Foundations)",
      instructor: "Eng. Kamau",
      department: "ICT Department",
      progress: 78,
      modules: 12,
      practicalLabs: 4,
      offlineLessons: 24,
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=60",
      buttons: ["Resume Learning", "Download Offline Kit"],
    },
    {
      id: 2,
      title: "Solar Installation & Maintenance",
      instructor: "Sarah Ochieng",
      department: "Engineering",
      progress: 41,
      modules: 8,
      practicalLabs: 12,
      offlineLessons: 15,
      image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?w=800&auto=format&fit=crop&q=60",
      buttons: ["Continue Lab", "Sync Progress"],
    },
    {
      id: 3,
      title: "Hospitality Service Excellence",
      instructor: "Amina Hussein",
      department: "Hospitality",
      progress: 18,
      modules: 6,
      practicalLabs: 2,
      offlineLessons: 10,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=60",
      buttons: ["Resume", "Download Lessons"],
    },
  ];

  return (
    <DashboardLayout role="student" title="My Enrolled Courses" subtitle="Manage your curriculum and track your professional progress.">
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-card/30 p-6 rounded-[2rem] border border-border/40 backdrop-blur-md">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              placeholder="Filter courses..." 
              className="pl-12 h-12 rounded-xl bg-background border-border/40 focus:ring-primary/20"
            />
          </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="rounded-xl px-5 h-12 font-bold border-border/40">
                    Department <SlidersHorizontal className="ml-2 w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 rounded-xl">
                  <DropdownMenuLabel>Departments</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>ICT</DropdownMenuItem>
                  <DropdownMenuItem>Engineering</DropdownMenuItem>
                  <DropdownMenuItem>Hospitality</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="outline" className="rounded-xl px-5 h-12 font-bold border-border/40">
                Downloaded Only
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="rounded-xl px-5 h-12 font-bold border-border/40">
                    Sort by: Progress <ChevronRight className="ml-2 w-4 h-4 rotate-90" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 rounded-xl">
                  <DropdownMenuItem>Progress: High to Low</DropdownMenuItem>
                  <DropdownMenuItem>Recently Accessed</DropdownMenuItem>
                  <DropdownMenuItem>Title: A-Z</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

        {/* Course Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="group overflow-hidden border-border/40 hover:shadow-2xl hover:border-primary/30 transition-all duration-500 flex flex-col bg-card/50 backdrop-blur-sm rounded-3xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-primary/90 text-white border-none shadow-lg px-3 py-1 rounded-lg font-bold">
                  {course.department}
                </Badge>
              </div>

              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-black leading-tight mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-6">
                  <Avatar className="w-6 h-6 ring-2 ring-primary/20">
                    <AvatarFallback className="text-[10px] bg-primary text-white">
                      {course.instructor.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-bold text-muted-foreground">Instructor: {course.instructor}</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      {course.modules && (
                        <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">
                          {course.modules} Modules
                        </p>
                      )}
                      {course.practicalLabs && (
                        <p className="text-xs font-black text-accent uppercase tracking-widest">
                          {course.practicalLabs} Practical Labs
                        </p>
                      )}
                      {course.offlineLessons && (
                        <p className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded w-fit">
                          {course.offlineLessons} Offline Lessons
                        </p>
                      )}
                    </div>
                    <span className="text-2xl font-black text-primary">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-3" />
                </div>

                <div className="grid grid-cols-2 gap-2 mt-auto">
                  {course.buttons.map((btn, i) => (
                    <Button
                      key={btn}
                      variant={i === 0 ? "default" : "outline"}
                      className={`rounded-xl text-xs font-bold h-10 ${
                        i === 0 ? "col-span-2 py-6 text-base" : ""
                      }`}
                    >
                      {btn === "Download All" || btn === "Download Offline Kit" || btn === "Download Lessons" ? (
                        <Download className="w-4 h-4 mr-2" />
                      ) : null}
                      {btn}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
