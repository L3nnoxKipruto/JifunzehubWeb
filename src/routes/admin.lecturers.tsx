import { createFileRoute } from '@tanstack/react-router'
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, MoreHorizontal, UserCheck, KeyRound } from "lucide-react"

export const Route = createFileRoute('/admin/lecturers')({
  component: AdminLecturersComponent,
})

function AdminLecturersComponent() {
  const lecturers = [
    { id: "LEC-01", name: "Eng. Kamau", department: "ICT", courses: 3, lastUpload: "Today, 09:00 AM", hasBuilderAccess: true },
    { id: "LEC-02", name: "Mr. Omondi", department: "Electrical", courses: 2, lastUpload: "Yesterday", hasBuilderAccess: true },
    { id: "LEC-03", name: "Ms. Wanjiku", department: "Automotive", courses: 1, lastUpload: "1 week ago", hasBuilderAccess: false },
  ];

  return (
    <DashboardLayout role="admin" title="Lecturers" subtitle="Manage teaching staff, course assignments, and content builder access.">
      <div className="space-y-6">
        
        <Card className="border-border/60">
          <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <CardTitle>Teaching Staff</CardTitle>
              <CardDescription>Control access to the Lecturer Studio and content creation tools.</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button className="shrink-0 shadow-md shadow-primary/20"><UserCheck className="w-4 h-4 mr-2" /> Add Lecturer</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border border-border/50 overflow-hidden">
              <Table>
                <TableHeader className="bg-muted/30">
                  <TableRow>
                    <TableHead>Lecturer</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Courses Taught</TableHead>
                    <TableHead>Content Builder Access</TableHead>
                    <TableHead>Last Content Upload</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lecturers.map((lec) => (
                    <TableRow key={lec.id}>
                      <TableCell>
                        <div className="font-medium">{lec.name}</div>
                        <div className="text-xs text-muted-foreground">{lec.id}</div>
                      </TableCell>
                      <TableCell><Badge variant="outline">{lec.department}</Badge></TableCell>
                      <TableCell>{lec.courses}</TableCell>
                      <TableCell>
                        {lec.hasBuilderAccess ? (
                          <Badge className="bg-success/10 text-success border-success/20 hover:bg-success/20 border"><KeyRound className="w-3 h-3 mr-1" /> Authorized</Badge>
                        ) : (
                          <Badge variant="secondary" className="bg-muted text-muted-foreground"><KeyRound className="w-3 h-3 mr-1" /> Pending Approval</Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">{lec.lastUpload}</TableCell>
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
