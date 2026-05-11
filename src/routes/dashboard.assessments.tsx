import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileCheck,
  Clock,
  CheckCircle2,
  AlertCircle,
  PlayCircle,
  Download,
  RefreshCw,
  BarChart3,
  HelpCircle,
  Timer,
  History,
  Target,
  BookOpen,
  Trophy,
  ShieldAlert,
  TrendingUp,
  Calendar,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/assessments")({
  component: AssessmentsComponent,
});

function AssessmentsComponent() {
  const upcomingAssessments = [
    {
      id: 1,
      title: "Electrical Safety Quiz",
      duration: "30 mins",
      attempts: "1 Remaining",
      offlineMode: true,
      buttons: ["Start Quiz", "Download for Offline"],
      color: "border-amber-500",
    },
    {
      id: 2,
      title: "Networking Midterm CAT",
      duration: "1 Hour",
      status: "Scheduled Tomorrow",
      buttons: ["Review Materials", "Practice Questions"],
      color: "border-primary",
    },
  ];

  return (
    <DashboardLayout
      role="student"
      title="Assessments"
      subtitle="Take exams and track your academic performance."
    >
      <div className="space-y-8">
        {/* Results Analytics Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-black flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-primary" /> Results Analytics
          </h2>
          
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="border-border/40 bg-card/50 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-t-4 border-t-primary">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">Average Score</p>
                  <h3 className="text-4xl font-black text-primary">82%</h3>
                </div>
                <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                  <Target className="w-6 h-6" />
                </div>
              </div>
            </Card>

            <Card className="border-border/40 bg-card/50 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-t-4 border-t-success">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">Best Subject</p>
                  <h3 className="text-2xl font-black text-success">Networking</h3>
                </div>
                <div className="p-3 bg-success/10 rounded-2xl text-success">
                  <Trophy className="w-6 h-6" />
                </div>
              </div>
            </Card>

            <Card className="border-border/40 bg-card/50 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-t-4 border-t-amber-500">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">Improvement Area</p>
                  <h3 className="text-2xl font-black text-amber-600">Practical Wiring</h3>
                </div>
                <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-500">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>
              <p className="font-bold text-muted-foreground uppercase tracking-widest text-xs">Assessment Trend</p>
            </Card>
          </div>
        </section>

        {/* Upcoming Assessments */}
        <section className="space-y-6">
          <h2 className="text-2xl font-black flex items-center gap-2">
            <Timer className="w-6 h-6 text-amber-500" /> Upcoming Assessments
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {upcomingAssessments.map((exam) => (
              <Card key={exam.id} className={`border-l-8 ${exam.color} bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500`}>
                <CardContent className="p-8 space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-black">{exam.title}</h3>
                      <div className="flex items-center gap-4 text-sm font-bold text-muted-foreground">
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {exam.duration}</span>
                        {exam.attempts && <span className="flex items-center gap-1"><History className="w-4 h-4" /> {exam.attempts}</span>}
                        {exam.status && <span className="flex items-center gap-1 text-primary"><Calendar className="w-4 h-4" /> {exam.status}</span>}
                      </div>
                    </div>
                    {exam.offlineMode && (
                      <Badge className="bg-success/10 text-success border-success/20 font-black">OFFLINE SUPPORTED</Badge>
                    )}
                  </div>

                  <div className="flex gap-3">
                    {exam.buttons.map((btn, i) => (
                      <Button key={btn} variant={i === 0 ? "default" : "outline"} className="flex-1 rounded-xl font-black h-12 shadow-lg">
                        {btn === "Download for Offline" && <Download className="w-4 h-4 mr-2" />}
                        {btn}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
