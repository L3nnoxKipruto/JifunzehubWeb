import { createFileRoute } from '@tanstack/react-router'
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  FileCheck2, Clock, CheckCircle2, AlertCircle, PlayCircle, 
  Download, RefreshCw, BarChart3, HelpCircle, Timer, 
  History, Target, BookOpen, Trophy, ShieldAlert
} from "lucide-react"

export const Route = createFileRoute('/dashboard/assessments')({
  component: AssessmentsComponent,
})

function AssessmentsComponent() {
  const upcomingExams = [
    { 
      id: 1, title: "Mid-Term: Networking & IP Subnetting", course: "Networking Essentials", 
      duration: "90 mins", questions: 45, passMark: "65%", status: "Ready", 
      offlineCompatible: true, difficulty: "Hard"
    },
    { 
      id: 2, title: "Python Basics Certification", course: "Introduction to Python", 
      duration: "60 mins", questions: 30, passMark: "70%", status: "Locked", 
      offlineCompatible: true, difficulty: "Medium"
    }
  ];

  const practiceQuizzes = [
    { id: 3, title: "IPv4 Addressing Practice", attempts: 4, bestScore: "88%", avgScore: "72%" },
    { id: 4, title: "Loops & Conditions Quiz", attempts: 12, bestScore: "95%", avgScore: "85%" }
  ];

  return (
    <DashboardLayout role="student" title="Assessments" subtitle="Take exams, practice your skills with quizzes, and review your performance.">
      <div className="space-y-8">
        
        {/* Performance Overview Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="border-border/60 bg-primary/5">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Average Score</p>
                <h3 className="text-2xl font-bold">78.4%</h3>
              </div>
              <Target className="w-8 h-8 text-primary/30" />
            </CardContent>
          </Card>
          <Card className="border-border/60 bg-success/5">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-success uppercase tracking-widest">Exams Passed</p>
                <h3 className="text-2xl font-bold">12 / 14</h3>
              </div>
              <Trophy className="w-8 h-8 text-success/30" />
            </CardContent>
          </Card>
          <Card className="border-border/60 bg-accent/5">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-accent uppercase tracking-widest">Study Streak</p>
                <h3 className="text-2xl font-bold">14 Days</h3>
              </div>
              <History className="w-8 h-8 text-accent/30" />
            </CardContent>
          </Card>
          <Card className="border-border/60 bg-amber-500/5">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">Offline Ready</p>
                <h3 className="text-2xl font-bold">6 Quizzes</h3>
              </div>
              <Download className="w-8 h-8 text-amber-500/30" />
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="bg-muted/50 border border-border/50 h-11 w-full sm:w-auto p-1">
            <TabsTrigger value="upcoming" className="flex-1 sm:flex-none gap-2 px-6"><Timer className="w-4 h-4"/> Upcoming Exams</TabsTrigger>
            <TabsTrigger value="practice" className="flex-1 sm:flex-none gap-2 px-6"><BookOpen className="w-4 h-4"/> Practice Quizzes</TabsTrigger>
            <TabsTrigger value="completed" className="flex-1 sm:flex-none gap-2 px-6"><History className="w-4 h-4"/> Results History</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              {upcomingExams.map((exam) => (
                <Card key={exam.id} className="border-border/60 hover:shadow-elegant transition-all duration-300 bg-background overflow-hidden flex flex-col">
                  <div className={`h-1.5 w-full ${exam.status === 'Ready' ? 'bg-success' : 'bg-muted'}`}></div>
                  <CardHeader className="p-5 pb-2">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="text-[10px] font-bold tracking-tight uppercase bg-muted/30">{exam.course}</Badge>
                      <Badge className={exam.difficulty === 'Hard' ? 'bg-destructive/10 text-destructive border-none' : 'bg-primary/10 text-primary border-none'}>
                        {exam.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{exam.title}</CardTitle>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> {exam.duration}</span>
                      <span className="flex items-center gap-1"><HelpCircle className="w-3 h-3"/> {exam.questions} Questions</span>
                      <span className="flex items-center gap-1"><Target className="w-3 h-3"/> Pass: {exam.passMark}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-5 pt-4 space-y-4 flex-1">
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/40 border border-border/50">
                      <RefreshCw className={`w-4 h-4 ${exam.offlineCompatible ? 'text-success' : 'text-muted-foreground'}`} />
                      <p className="text-xs font-medium">
                        {exam.offlineCompatible ? "Full Offline Exam Mode Compatible" : "Online Only (Requires LAN)"}
                      </p>
                    </div>
                    {exam.status === 'Locked' && (
                      <div className="flex items-center gap-2 text-xs text-amber-600 bg-amber-500/5 p-3 rounded-lg border border-amber-200/50">
                        <ShieldAlert className="w-4 h-4" />
                        <span>Prerequisite not met: Complete Module 4 to unlock.</span>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="p-5 pt-0 gap-3">
                    <Button 
                      className={`flex-1 shadow-md ${exam.status === 'Ready' ? 'bg-primary shadow-primary/20' : 'bg-muted text-muted-foreground'}`}
                      disabled={exam.status === 'Locked'}
                    >
                      <PlayCircle className="w-4 h-4 mr-2" /> Start Assessment
                    </Button>
                    <Button variant="outline" className="h-10 px-4 border-border/60">
                      <Download className="w-4 h-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="practice" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2">
              {practiceQuizzes.map((quiz) => (
                <Card key={quiz.id} className="border-border/60 hover:shadow-soft transition-all bg-background">
                  <CardContent className="p-5 flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="font-bold">{quiz.title}</h4>
                      <p className="text-xs text-muted-foreground">{quiz.attempts} Previous Attempts • Best: {quiz.bestScore}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Review</Button>
                      <Button size="sm">Try Again</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="mt-6">
             <Card className="border-border/60 overflow-hidden">
               <div className="p-8 text-center space-y-3">
                 <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto text-muted-foreground">
                   <History className="w-8 h-8" />
                 </div>
                 <h3 className="text-lg font-bold">No Past Results Yet</h3>
                 <p className="text-sm text-muted-foreground max-w-xs mx-auto">Complete your first assessment to see your scores and performance breakdown here.</p>
               </div>
             </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
