import { createFileRoute } from '@tanstack/react-router'
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, BookOpen, Plus, MoreHorizontal, Settings2 } from "lucide-react"

export const Route = createFileRoute('/admin/departments')({
  component: DepartmentsComponent,
})

function DepartmentsComponent() {
  const departments = [
    { id: "D01", name: "ICT & Computing", head: "Eng. Kamau", students: 450, courses: 12, status: "active" },
    { id: "D02", name: "Electrical Engineering", head: "Mr. Omondi", students: 320, courses: 8, status: "active" },
    { id: "D03", name: "Automotive", head: "Ms. Wanjiku", students: 210, courses: 5, status: "active" },
    { id: "D04", name: "Hospitality Service", head: "Mrs. Mutua", students: 180, courses: 4, status: "active" },
    { id: "D05", name: "Plumbing & Piping", head: "Eng. Kiprotich", students: 88, courses: 3, status: "active" },
  ];

  return (
    <DashboardLayout role="admin" title="Departments" subtitle="Manage TVET academic structure, assign lecturers, and track departmental analytics.">
      <div className="space-y-6">
        
        <div className="flex justify-end">
          <Button className="shadow-md shadow-primary/20"><Plus className="w-4 h-4 mr-2" /> Add Department</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
          {departments.slice(0,3).map(dept => (
            <Card key={dept.id} className="border-border/60">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-2">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground"><Settings2 className="w-4 h-4" /></Button>
                </div>
                <CardTitle className="text-lg">{dept.name}</CardTitle>
                <CardDescription>Head: {dept.head}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mt-2 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" /> {dept.students}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <BookOpen className="w-4 h-4" /> {dept.courses} Courses
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-border/60">
          <CardHeader>
            <CardTitle>All Departments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border border-border/50 overflow-hidden">
              <Table>
                <TableHeader className="bg-muted/30">
                  <TableRow>
                    <TableHead>Code</TableHead>
                    <TableHead>Department Name</TableHead>
                    <TableHead>Head of Department</TableHead>
                    <TableHead className="text-right">Students</TableHead>
                    <TableHead className="text-right">Active Courses</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {departments.map((dept) => (
                    <TableRow key={dept.id}>
                      <TableCell className="font-medium text-muted-foreground">{dept.id}</TableCell>
                      <TableCell className="font-semibold">{dept.name}</TableCell>
                      <TableCell>{dept.head}</TableCell>
                      <TableCell className="text-right">{dept.students}</TableCell>
                      <TableCell className="text-right">
                        <Badge variant="secondary">{dept.courses} courses</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon"><MoreHorizontal className="w-4 h-4" /></Button>
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
