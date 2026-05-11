import { createFileRoute, Link } from '@tanstack/react-router'
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, 
  DropdownMenuSeparator, DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { 
  Search, SlidersHorizontal, Grid, List, Download, PlayCircle, 
  WifiOff, Clock, BookOpen, MoreVertical, BookmarkPlus, Share2, AlertTriangle, Pin
} from "lucide-react"

export const Route = createFileRoute('/dashboard/courses')({
  component: CoursesComponent,
})

function CoursesComponent() {
  const courses = [
    { 
      id: 1, title: "Networking Essentials (CCNA)", dept: "ICT", instructor: "Eng. Kamau",
      progress: 64, offline: true, lastLesson: "Module 4: Subnetting", remaining: 12,
      estCompletion: "Oct 15", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
      pinned: true
    },
    { 
      id: 2, title: "Introduction to Python", dept: "ICT", instructor: "S. Wanjiru",
      progress: 12, offline: false, lastLesson: "Module 2: Data Structures", remaining: 45,
      estCompletion: "Nov 30", image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?w=800&q=80",
      pinned: false
    },
    { 
      id: 3, title: "Solar Power Systems", dept: "Electrical", instructor: "Dr. Omondi",
      progress: 100, offline: true, lastLesson: "Final Assessment", remaining: 0,
      estCompletion: "Completed", image: "https://images.unsplash.com/photo-1509391366360-12822a16d8bd?w=800&q=80",
      pinned: false
    },
  ];

  return (
    <DashboardLayout role="student" title="My Courses" subtitle="Your competency-based TVET curriculum, available for offline learning.">
      <div className="space-y-8">
        
        {/* Quick Actions & Filters Header */}
        <div className="bg-background border border-border/60 rounded-2xl p-4 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search your courses..." className="pl-10 bg-muted/30 border-border/60 focus-visible:ring-accent/50 w-full" />
            </div>
            
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 hide-scrollbar">
              <Button variant="outline" size="sm" className="shrink-0 bg-accent/5 border-accent/20 text-accent hover:bg-accent/10">
                <Download className="w-4 h-4 mr-2" /> Download Pending (2)
              </Button>
              <div className="h-6 w-px bg-border/60 mx-1 hidden md:block"></div>
              <Button variant="outline" size="sm" className="shrink-0"><SlidersHorizontal className="w-4 h-4 mr-2" /> Filters</Button>
              <div className="flex bg-muted/50 p-0.5 rounded-lg border border-border/50 shrink-0">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md bg-background shadow-sm"><Grid className="w-4 h-4" /></Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md text-muted-foreground"><List className="w-4 h-4" /></Button>
              </div>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar text-sm">
            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer shrink-0 rounded-full px-3 py-1 text-xs">All Courses (3)</Badge>
            <Badge variant="outline" className="hover:bg-muted cursor-pointer shrink-0 rounded-full px-3 py-1 text-xs font-normal">Active (2)</Badge>
            <Badge variant="outline" className="hover:bg-muted cursor-pointer shrink-0 rounded-full px-3 py-1 text-xs font-normal">Completed (1)</Badge>
            <Badge variant="outline" className="hover:bg-muted cursor-pointer shrink-0 rounded-full px-3 py-1 text-xs font-normal border-success/30 text-success"><WifiOff className="w-3 h-3 mr-1" /> Available Offline</Badge>
            <Badge variant="outline" className="hover:bg-muted cursor-pointer shrink-0 rounded-full px-3 py-1 text-xs font-normal">ICT Dept</Badge>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.id} className="group overflow-hidden border-border/60 hover:shadow-elegant hover:border-primary/40 transition-all duration-300 flex flex-col bg-background">
              
              <div className="relative h-44 bg-muted overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90"></div>
                <img src={course.image} alt={course.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" />
                
                <div className="absolute top-3 left-3 z-20 flex gap-2">
                  <Badge className="bg-background/80 text-foreground backdrop-blur border-none font-semibold text-[10px] uppercase tracking-wider">{course.dept}</Badge>
                  {course.pinned && <Badge className="bg-accent/90 text-accent-foreground backdrop-blur border-none font-semibold text-[10px]"><Pin className="w-3 h-3 mr-1"/> Pinned</Badge>}
                </div>
                
                <div className="absolute top-3 right-3 z-20 flex items-center gap-1">
                  {course.offline ? (
                    <Badge variant="outline" className="bg-success/90 text-success-foreground border-none backdrop-blur font-semibold text-[10px] shadow-sm">
                      <WifiOff className="w-3 h-3 mr-1" /> Cached
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="bg-background/80 text-muted-foreground border-none backdrop-blur font-semibold text-[10px] shadow-sm">
                      <Download className="w-3 h-3 mr-1" /> Cloud
                    </Badge>
                  )}
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full bg-background/50 backdrop-blur text-white hover:bg-background/80">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem><Pin className="w-4 h-4 mr-2" /> {course.pinned ? 'Unpin Course' : 'Pin to Top'}</DropdownMenuItem>
                      <DropdownMenuItem><BookmarkPlus className="w-4 h-4 mr-2" /> Add to Favorites</DropdownMenuItem>
                      <DropdownMenuItem><Share2 className="w-4 h-4 mr-2" /> Share Progress</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive focus:bg-destructive/10"><AlertTriangle className="w-4 h-4 mr-2" /> Report Issue</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="absolute bottom-3 left-3 right-3 z-20">
                  <h3 className="font-bold text-white text-lg leading-tight line-clamp-1 mb-1">{course.title}</h3>
                  <div className="flex items-center gap-2">
                    <Avatar className="w-5 h-5 border border-white/20"><AvatarFallback className="text-[8px] bg-primary text-white">IN</AvatarFallback></Avatar>
                    <span className="text-xs text-white/80">{course.instructor}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-5 flex-1 flex flex-col justify-between space-y-4">
                
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground font-medium">Course Progress</span>
                    <span className="font-bold text-primary">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2 bg-muted" indicatorColor={course.progress === 100 ? "bg-success" : "bg-primary"} />
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border/50">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-0.5">Last Lesson</span>
                    <span className="text-xs font-medium line-clamp-1 flex items-center"><BookOpen className="w-3 h-3 mr-1 text-primary"/> {course.lastLesson}</span>
                  </div>
                  <div className="flex flex-col pl-2 border-l border-border/50">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-0.5">Status</span>
                    <span className="text-xs font-medium line-clamp-1 flex items-center">
                      <Clock className="w-3 h-3 mr-1 text-accent"/> 
                      {course.progress === 100 ? "Completed" : `${course.remaining} lessons left`}
                    </span>
                  </div>
                </div>

              </CardContent>
              
              <CardFooter className="p-4 pt-0 gap-2 mt-auto">
                {course.progress === 100 ? (
                  <Button className="flex-1 bg-success/10 text-success hover:bg-success/20 border-0"><FileCheck2 className="w-4 h-4 mr-2"/> Review Material</Button>
                ) : (
                  <Button className="flex-1 shadow-md shadow-primary/10 transition-transform active:scale-95"><PlayCircle className="w-4 h-4 mr-2"/> Continue Learning</Button>
                )}
                
                {!course.offline && (
                  <Button variant="outline" size="icon" className="shrink-0 text-muted-foreground border-border/60 hover:text-accent hover:border-accent/30" title="Download for offline access">
                    <Download className="w-4 h-4"/>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
