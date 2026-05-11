import { createFileRoute } from '@tanstack/react-router'
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, UserPlus, Clock, MoreHorizontal, CheckCircle2 } from "lucide-react"

export const Route = createFileRoute('/admin/students')({
  component: AdminStudentsComponent,
})

function AdminStudentsComponent() {
  const students = [
    { id: "STU-001", name: "Amina Hussein", course: "Networking Essentials", department: "ICT", syncStatus: "Synced", lastSync: "10 mins ago", pendingUploads: 0 },
    { id: "STU-002", name: "John Ochieng", course: "Solar Installation", department: "Electrical", syncStatus: "Offline", lastSync: "2 days ago", pendingUploads: 4 },
    { id: "STU-003", name: "Sarah Wanjiru", course: "Hospitality Service", department: "Hospitality", syncStatus: "Synced", lastSync: "1 hour ago", pendingUploads: 0 },
    { id: "STU-004", name: "Peter Mutua", course: "Plumbing Basics", department: "Plumbing", syncStatus: "Offline", lastSync: "1 week ago", pendingUploads: 12 },
  ];

  return (
    <DashboardLayout role="admin" title="Student Management" subtitle="Manage TVET learners, enrollments, and track their offline sync statuses.">
      <div className="space-y-6">
        
        <Card className="border-border/60">
          <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <CardTitle>Registered Students</CardTitle>
              <CardDescription>Full visibility of learner activity across all devices.</CardDescription>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search by name or ID..." className="pl-8 bg-muted/50" />
              </div>
              <Button className="shrink-0 shadow-md shadow-primary/20"><UserPlus className="w-4 h-4 mr-2" /> Add Student</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border border-border/50 overflow-hidden">
              <Table>
                <TableHeader className="bg-muted/30">
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Course</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Sync Status</TableHead>
                    <TableHead>Offline Data</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>
                        <div className="font-medium">{student.name}</div>
                        <div className="text-xs text-muted-foreground">{student.id}</div>
                      </TableCell>
                      <TableCell>{student.course}</TableCell>
                      <TableCell><Badge variant="outline">{student.department}</Badge></TableCell>
                      <TableCell>
                        <Badge 
                          variant="outline" 
                          className={student.syncStatus === 'Synced' ? 'bg-success/10 text-success border-success/20' : 'bg-muted text-muted-foreground'}
                        >
                          {student.syncStatus === 'Synced' && <CheckCircle2 className="w-3 h-3 mr-1" />}
                          {student.syncStatus}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" /> Last: {student.lastSync}</span>
                          {student.pendingUploads > 0 && <span className="text-xs text-orange-500 font-medium">{student.pendingUploads} pending uploads</span>}
                        </div>
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
