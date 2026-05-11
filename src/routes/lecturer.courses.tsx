import { createFileRoute, Link } from '@tanstack/react-router'
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Search, Plus, PlayCircle, Users, BookOpen, HardDrive, WifiOff } from "lucide-react"

export const Route = createFileRoute('/lecturer/courses')({
  component: LecturerCoursesComponent,
})

function LecturerCoursesComponent() {
  const courses = [
    { id: 1, title: "Networking Essentials (CCNA Foundations)", students: 145, progress: 85, status: "published", offlineReady: true, size: "1.2 GB" },
    { id: 2, title: "Advanced Routing & Switching", students: 0, progress: 40, status: "draft", offlineReady: false, size: "Pending" },
    { id: 3, title: "Cybersecurity Basics", students: 88, progress: 100, status: "published", offlineReady: true, size: "850 MB" },
  ];

  return (
    <DashboardLayout role="lecturer" title="My Courses" subtitle="Manage your active TVET curriculum and track overall class progress.">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search my courses..." className="pl-8 bg-muted/30" />
          </div>
          <Button asChild className="shrink-0 shadow-md shadow-primary/20">
            <Link to="/lecturer/builder"><Plus className="w-4 h-4 mr-2" /> Create New Course</Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.id} className="border-border/60 hover:shadow-soft transition-all duration-300 flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={course.status === 'published' ? 'default' : 'secondary'} className={course.status === 'published' ? 'bg-success/20 text-success hover:bg-success/30' : ''}>
                    {course.status === 'published' ? 'Published' : 'Draft'}
                  </Badge>
                  {course.offlineReady && (
                    <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5">
                      <WifiOff className="mr-1 h-3 w-3" /> Packaged for Offline
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl leading-tight">{course.title}</CardTitle>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {course.students} Learners</span>
                  {course.offlineReady && <span className="flex items-center gap-1"><HardDrive className="w-4 h-4" /> {course.size}</span>}
                </div>
              </CardHeader>
              <CardContent className="pb-2 flex-1">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Class Average Progress</span>
                    <span className="font-semibold">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2 bg-muted/60" />
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline" className="flex-1 text-primary border-primary/20 hover:bg-primary/10">Edit Content</Button>
                <Button variant="ghost" size="icon" title="View Course"><PlayCircle className="w-4 h-4" /></Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
