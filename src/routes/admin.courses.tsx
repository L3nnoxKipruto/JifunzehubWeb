import { createFileRoute } from '@tanstack/react-router'
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus, MoreHorizontal, BookOpen, Clock, Users } from "lucide-react"

export const Route = createFileRoute('/admin/courses')({
  component: AdminCoursesComponent,
})

function AdminCoursesComponent() {
  const courses = [
    { id: "C101", title: "Networking Essentials", department: "ICT", instructor: "Eng. Kamau", status: "Published", students: 184, updated: "2 days ago" },
    { id: "C102", title: "Solar Installation", department: "Electrical", instructor: "Mr. Omondi", status: "Review", students: 132, updated: "5 hours ago" },
    { id: "C103", title: "Engine Diagnostics", department: "Automotive", instructor: "Ms. Wanjiku", status: "Published", students: 96, updated: "1 week ago" },
    { id: "C104", title: "Hospitality Service", department: "Hospitality", instructor: "Mrs. Mutua", status: "Draft", students: 0, updated: "Just now" },
  ];

  return (
    <DashboardLayout role="admin" title="Course Management" subtitle="Approve courses, organize departments, and moderate content across the institution.">
      <div className="space-y-6">
        
        {/* Stats Row */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="border-border/60">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Courses</CardTitle>
              <BookOpen className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <p className="text-xs text-muted-foreground mt-1">+3 added this month</p>
            </CardContent>
          </Card>
          <Card className="border-border/60">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Enrollments</CardTitle>
              <Users className="w-4 h-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,248</div>
              <p className="text-xs text-muted-foreground mt-1">Across all departments</p>
            </CardContent>
          </Card>
          <Card className="border-border/60">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Review</CardTitle>
              <Clock className="w-4 h-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground mt-1">Requires admin approval</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Table Card */}
        <Card className="border-border/60">
          <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <CardTitle>Course Directory</CardTitle>
              <CardDescription>Manage and review all institutional courses.</CardDescription>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search courses..." className="pl-8 bg-muted/50" />
              </div>
              <Button className="shrink-0"><Plus className="w-4 h-4 mr-2" /> New Course</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border border-border/50 overflow-hidden">
              <Table>
                <TableHeader className="bg-muted/30">
                  <TableRow>
                    <TableHead className="w-[100px]">Code</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Instructor</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Students</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courses.map((course) => (
                    <TableRow key={course.id} className="hover:bg-muted/20 transition-colors">
                      <TableCell className="font-medium text-muted-foreground">{course.id}</TableCell>
                      <TableCell>
                        <div className="font-medium">{course.title}</div>
                        <div className="text-xs text-muted-foreground">Updated {course.updated}</div>
                      </TableCell>
                      <TableCell><Badge variant="outline">{course.department}</Badge></TableCell>
                      <TableCell>{course.instructor}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={course.status === 'Published' ? 'default' : course.status === 'Review' ? 'secondary' : 'outline'}
                          className={course.status === 'Published' ? 'bg-green-500/15 text-green-600 hover:bg-green-500/25 border-0' : ''}
                        >
                          {course.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">{course.students}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
