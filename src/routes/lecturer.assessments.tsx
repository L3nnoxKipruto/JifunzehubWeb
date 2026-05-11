import { createFileRoute } from '@tanstack/react-router'
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileCheck2, Clock, CheckCircle2, AlertCircle, Plus, PenTool } from "lucide-react"

export const Route = createFileRoute('/lecturer/assessments')({
  component: LecturerAssessmentsComponent,
})

function LecturerAssessmentsComponent() {
  const assessments = [
    { id: "A1", title: "Mid-Term Exam: Subnetting", course: "Networking Essentials", submissions: 142, pendingGrades: 12, status: "Active" },
    { id: "A2", title: "Solar Angle Worksheet", course: "Solar Installation", submissions: 45, pendingGrades: 0, status: "Completed" },
  ];

  const recentSubmissions = [
    { id: 1, student: "Amina Hussein", assessment: "Mid-Term Exam: Subnetting", submittedAt: "10 mins ago (via LAN)", status: "Needs Grading" },
    { id: 2, student: "John Ochieng", assessment: "Mid-Term Exam: Subnetting", submittedAt: "2 days ago (via USB)", status: "Needs Grading" },
    { id: 3, student: "Sarah Wanjiru", assessment: "Solar Angle Worksheet", submittedAt: "1 week ago", status: "Graded" },
  ];

  return (
    <DashboardLayout role="lecturer" title="Assessments & Grading" subtitle="Manage quizzes, practicals, and grade offline submissions synced from student devices.">
      <div className="space-y-6">
        
        <div className="flex justify-end">
          <Button className="shadow-md shadow-primary/20"><Plus className="w-4 h-4 mr-2" /> Create Assessment</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {assessments.map((a) => (
            <Card key={a.id} className="border-border/60 flex flex-col">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="text-muted-foreground">{a.course}</Badge>
                  <Badge variant={a.status === 'Active' ? 'default' : 'secondary'} className={a.status === 'Active' ? 'bg-success/20 text-success' : ''}>{a.status}</Badge>
                </div>
                <CardTitle className="text-xl">{a.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex gap-4 mt-2">
                  <div className="p-3 bg-muted/30 rounded-lg border border-border/50 flex-1">
                    <p className="text-muted-foreground text-xs mb-1 uppercase font-semibold tracking-wider">Total Submissions</p>
                    <p className="text-2xl font-bold flex items-center gap-2">
                      {a.submissions} <FileCheck2 className="w-4 h-4 text-muted-foreground" />
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg border flex-1 ${a.pendingGrades > 0 ? 'bg-amber-500/10 border-amber-500/20' : 'bg-success/10 border-success/20'}`}>
                    <p className={`text-xs mb-1 uppercase font-semibold tracking-wider ${a.pendingGrades > 0 ? 'text-amber-600' : 'text-success'}`}>Pending Grading</p>
                    <p className={`text-2xl font-bold flex items-center gap-2 ${a.pendingGrades > 0 ? 'text-amber-600' : 'text-success'}`}>
                      {a.pendingGrades} {a.pendingGrades > 0 ? <AlertCircle className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full text-primary border-primary/20 hover:bg-primary/10">Manage Assessment</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Card className="border-border/60">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Clock className="w-5 h-5 text-accent" /> Recent Submissions (Needs Grading)</CardTitle>
            <CardDescription>Assessments synced from the local network waiting for your review.</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="rounded-md border border-border/50 overflow-hidden">
              <Table>
                <TableHeader className="bg-muted/30">
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Assessment</TableHead>
                    <TableHead>Synced At</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentSubmissions.map((sub) => (
                    <TableRow key={sub.id}>
                      <TableCell className="font-medium">{sub.student}</TableCell>
                      <TableCell>{sub.assessment}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{sub.submittedAt}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={sub.status === 'Needs Grading' ? 'bg-amber-500/10 text-amber-600 border-amber-500/20' : 'bg-success/10 text-success border-success/20'}>
                          {sub.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        {sub.status === 'Needs Grading' ? (
                          <Button size="sm" className="shadow-md"><PenTool className="w-3 h-3 mr-2" /> Grade</Button>
                        ) : (
                          <Button variant="ghost" size="sm">View</Button>
                        )}
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
