import { createFileRoute } from '@tanstack/react-router'
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { 
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, 
  DropdownMenuSeparator, DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { 
  Search, SlidersHorizontal, ClipboardList, Clock, CheckCircle2, 
  AlertCircle, FileText, Upload, MoreVertical, MessageSquare, 
  ArrowUpCircle, ExternalLink, Calendar, FileType, Filter
} from "lucide-react"

export const Route = createFileRoute('/dashboard/assignments')({
  component: AssignmentsComponent,
})

function AssignmentsComponent() {
  const assignments = [
    { 
      id: 1, title: "Packet Tracer Lab 2: Subnetting", course: "Networking Essentials", 
      deadline: "Today, 11:59 PM", type: "Laboratory Work", lecturer: "Eng. Kamau",
      status: "Pending", priority: "high", submissionType: "PDF/PKT"
    },
    { 
      id: 2, title: "Python Functions Exercise", course: "Introduction to Python", 
      deadline: "Tomorrow", type: "Coding Assignment", lecturer: "S. Wanjiru",
      status: "Submitted Offline", priority: "medium", submissionType: "Code File"
    },
    { 
      id: 3, title: "Solar Panel Angle Calculation", course: "Solar Power Systems", 
      deadline: "2 days ago", type: "Mathematical Practical", lecturer: "Dr. Omondi",
      status: "Synced", priority: "low", submissionType: "Document", grade: "92%"
    },
    { 
      id: 4, title: "Workshop Safety Report", course: "Mechanical Fundamentals", 
      deadline: "Next Week", type: "Report", lecturer: "M. Bakari",
      status: "Reviewed", priority: "low", submissionType: "PDF", grade: "Pass"
    }
  ];

  return (
    <DashboardLayout role="student" title="Assignments" subtitle="Manage your practical work, submit offline drafts, and track grading feedback.">
      <div className="space-y-8">
        
        {/* Filter and Stats Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-background border border-border/60 rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-3 flex-1 w-full md:w-auto">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search assignments..." className="pl-10 h-9 bg-muted/30 border-border/60" />
            </div>
            <Button variant="outline" size="sm" className="h-9 shrink-0">
              <Filter className="w-4 h-4 mr-2" /> <span className="hidden sm:inline">Filters</span>
            </Button>
          </div>
          
          <div className="flex items-center gap-4 overflow-x-auto pb-1 md:pb-0 w-full md:w-auto">
            <div className="flex gap-2">
              <Badge variant="secondary" className="rounded-full px-3 py-1 bg-primary/10 text-primary border-none">Total: 4</Badge>
              <Badge variant="secondary" className="rounded-full px-3 py-1 bg-amber-500/10 text-amber-600 border-none">Due Soon: 2</Badge>
              <Badge variant="secondary" className="rounded-full px-3 py-1 bg-success/10 text-success border-none">Graded: 2</Badge>
            </div>
          </div>
        </div>

        {/* Assignment List */}
        <div className="grid gap-4">
          {assignments.map((assignment) => (
            <Card key={assignment.id} className="border-border/60 hover:shadow-soft transition-all duration-300 group overflow-hidden bg-background">
              <div className={`absolute top-0 left-0 w-1 h-full ${
                assignment.status === 'Pending' ? 'bg-destructive' : 
                assignment.status === 'Submitted Offline' ? 'bg-amber-500' : 'bg-success'
              }`}></div>
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row items-stretch">
                  <div className="flex-1 p-5 space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-wider bg-muted/30">{assignment.course}</Badge>
                          {assignment.priority === 'high' && <Badge className="bg-destructive/10 text-destructive border-none text-[10px] uppercase font-bold px-1.5 h-4">Priority</Badge>}
                        </div>
                        <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{assignment.title}</h3>
                      </div>
                      <div className="flex items-center gap-1">
                        <Badge className={`
                          ${assignment.status === 'Pending' ? 'bg-destructive/10 text-destructive border-none' : ''}
                          ${assignment.status === 'Submitted Offline' ? 'bg-amber-500/10 text-amber-600 border-none' : ''}
                          ${assignment.status === 'Synced' ? 'bg-success/10 text-success border-none' : ''}
                          ${assignment.status === 'Reviewed' ? 'bg-primary/10 text-primary border-none' : ''}
                        `}>
                          {assignment.status}
                        </Badge>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuItem><ExternalLink className="w-4 h-4 mr-2" /> View Rubric</DropdownMenuItem>
                            <DropdownMenuItem><MessageSquare className="w-4 h-4 mr-2" /> Contact Lecturer</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive"><AlertCircle className="w-4 h-4 mr-2" /> Report Issue</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1"><Calendar className="w-3 h-3"/> Deadline</p>
                        <p className={`text-sm font-semibold ${assignment.status === 'Pending' ? 'text-destructive' : ''}`}>{assignment.deadline}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1"><FileType className="w-3 h-3"/> Type</p>
                        <p className="text-sm font-semibold">{assignment.submissionType}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1"><Users className="w-3 h-3"/> Lecturer</p>
                        <p className="text-sm font-semibold">{assignment.lecturer}</p>
                      </div>
                      {assignment.grade && (
                        <div className="space-y-1">
                          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Grade</p>
                          <p className="text-sm font-bold text-success">{assignment.grade}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-muted/20 border-t md:border-t-0 md:border-l border-border/50 p-5 flex md:flex-col justify-center gap-3 md:w-56 shrink-0">
                    {assignment.status === 'Pending' ? (
                      <>
                        <Button className="w-full shadow-md shadow-primary/20 bg-primary hover:bg-primary/90 text-primary-foreground">
                          <Upload className="w-4 h-4 mr-2" /> Upload Work
                        </Button>
                        <Button variant="outline" className="w-full bg-background">
                          <Clock className="w-4 h-4 mr-2" /> Save Draft
                        </Button>
                      </>
                    ) : assignment.status === 'Submitted Offline' ? (
                      <Button variant="outline" className="w-full bg-background text-amber-600 border-amber-200 hover:bg-amber-50">
                        <ArrowUpCircle className="w-4 h-4 mr-2" /> Sync Now
                      </Button>
                    ) : (
                      <Button variant="outline" className="w-full bg-background">
                        <FileText className="w-4 h-4 mr-2" /> View Feedback
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State / Upload Info */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center space-y-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary shadow-inner">
            <Upload className="w-8 h-8" />
          </div>
          <div className="max-w-md mx-auto space-y-2">
            <h3 className="text-lg font-bold">Practical Work Submission</h3>
            <p className="text-sm text-muted-foreground">You can upload your practical assignments even when offline. They will be queued for synchronization with the campus server automatically.</p>
          </div>
          <div className="flex justify-center gap-3 pt-2">
            <Badge variant="outline" className="bg-background">Supports: PDF, DOCX, ZIP, PKT</Badge>
            <Badge variant="outline" className="bg-background">Max Size: 50MB</Badge>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
