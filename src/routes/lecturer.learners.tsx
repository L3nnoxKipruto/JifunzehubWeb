import { createFileRoute } from '@tanstack/react-router'
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Search, Users, Activity, CheckCircle2, WifiOff } from "lucide-react"

export const Route = createFileRoute('/lecturer/learners')({
  component: LecturerLearnersComponent,
})

function LecturerLearnersComponent() {
  const learners = [
    { id: "STU-001", name: "Amina Hussein", course: "Networking Essentials", progress: 85, status: "Active", lastSync: "10 mins ago" },
    { id: "STU-002", name: "John Ochieng", course: "Networking Essentials", progress: 42, status: "Offline", lastSync: "2 days ago" },
    { id: "STU-005", name: "David Mutua", course: "Networking Essentials", progress: 12, status: "At Risk", lastSync: "2 weeks ago" },
  ];

  return (
    <DashboardLayout role="lecturer" title="Learners" subtitle="Track student progress, engagement, and offline synchronization timestamps.">
      <div className="space-y-6">
        
        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <Card className="border-border/60 bg-primary/5">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-primary mb-1">Total Enrolled</p>
                <p className="text-2xl font-bold text-foreground">145</p>
              </div>
              <Users className="w-8 h-8 text-primary/40" />
            </CardContent>
          </Card>
          <Card className="border-border/60 bg-success/5">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-success mb-1">Avg Progress</p>
                <p className="text-2xl font-bold text-foreground">64%</p>
              </div>
              <Activity className="w-8 h-8 text-success/40" />
            </CardContent>
          </Card>
          <Card className="border-border/60 bg-amber-500/5">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-amber-600 mb-1">At Risk (No Sync &gt; 7 days)</p>
                <p className="text-2xl font-bold text-foreground">12</p>
              </div>
              <WifiOff className="w-8 h-8 text-amber-500/40" />
            </CardContent>
          </Card>
        </div>

        <Card className="border-border/60">
          <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <CardTitle>Student Roster</CardTitle>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search learners..." className="pl-8 bg-muted/50" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border border-border/50 overflow-hidden">
              <Table>
                <TableHeader className="bg-muted/30">
                  <TableRow>
                    <TableHead>Student Name</TableHead>
                    <TableHead>Course</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Last Device Sync</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {learners.map((learner) => (
                    <TableRow key={learner.id}>
                      <TableCell>
                        <div className="font-medium">{learner.name}</div>
                        <div className="text-xs text-muted-foreground">{learner.id}</div>
                      </TableCell>
                      <TableCell>{learner.course}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={learner.progress} className="h-2 w-24" />
                          <span className="text-xs font-medium">{learner.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant="outline" 
                          className={learner.status === 'Active' ? 'bg-success/10 text-success border-success/20' : learner.status === 'At Risk' ? 'bg-destructive/10 text-destructive border-destructive/20' : 'bg-muted text-muted-foreground'}
                        >
                          {learner.status === 'Active' && <CheckCircle2 className="w-3 h-3 mr-1" />}
                          {learner.status === 'Offline' && <WifiOff className="w-3 h-3 mr-1" />}
                          {learner.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right text-sm text-muted-foreground">
                        {learner.lastSync}
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
