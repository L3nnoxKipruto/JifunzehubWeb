import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
  History as HistoryIcon,
  Target,
  BookOpen,
  Trophy,
  ShieldAlert,
  TrendingUp,
  Calendar,
  ArrowRight,
  Star,
  Zap,
  Plus,
} from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/dashboard/assessments")({
  component: AssessmentsComponent,
});

function AssessmentsComponent() {
  const [activeTab, setActiveTab] = useState("available");
  const [selectedResult, setSelectedResult] = useState<any>(null);
  const [view, setView] = useState<"dashboard" | "review">("dashboard");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const upcomingAssessments = [
    {
      id: 1,
      title: "Electrical Safety Quiz",
      subject: "Electrical Engineering",
      duration: "30 mins",
      attempts: "1 Remaining",
      offlineMode: true,
      buttons: ["Start Quiz", "Download for Offline"],
      color: "border-amber-500",
      icon: ShieldAlert,
    },
    {
      id: 2,
      title: "Networking Midterm CAT",
      subject: "ICT & Computing",
      duration: "1 Hour",
      status: "Scheduled Tomorrow",
      buttons: ["Review Materials", "Practice Questions"],
      color: "border-primary",
      icon: Zap,
    },
  ];

  const pastResults = [
    {
      id: 101,
      title: "Network Fundamentals",
      score: 88,
      date: "May 5, 2026",
      status: "Passed",
      feedback: "Excellent understanding of OSI layers.",
      breakdown: [
        { topic: "OSI Model", score: 100 },
        { topic: "TCP/IP", score: 85 },
        { topic: "Subnetting", score: 75 },
      ],
    },
    {
      id: 102,
      title: "Workshop Safety Lab",
      score: 74,
      date: "April 28, 2026",
      status: "Passed",
      feedback: "Good, but need to review fire safety protocols.",
      breakdown: [
        { topic: "Tool Handling", score: 90 },
        { topic: "Fire Safety", score: 50 },
        { topic: "First Aid", score: 85 },
      ],
    },
    {
      id: 103,
      title: "Basic Circuit Theory",
      score: 45,
      date: "April 15, 2026",
      status: "Resit Required",
      feedback: "Calculation errors in parallel circuits. See lecturer.",
      breakdown: [
        { topic: "Ohm's Law", score: 60 },
        { topic: "Parallel Circuits", score: 20 },
        { topic: "Series Circuits", score: 55 },
      ],
    },
  ];

  const flashcardSets = [
    { id: 1, title: "Networking Terms", count: 42, progress: 65, color: "bg-blue-500" },
    { id: 2, title: "Electrical Symbols", count: 28, progress: 90, color: "bg-emerald-500" },
    { id: 3, title: "Linux Commands", count: 56, progress: 20, color: "bg-purple-500" },
  ];

  const practiceTests = [
    {
      id: 201,
      title: "Router Configuration Mock",
      questions: 20,
      difficulty: "Advanced",
      completed: false,
    },
    {
      id: 202,
      title: "Common Electrical Faults",
      questions: 15,
      difficulty: "Intermediate",
      completed: true,
      bestScore: 92,
    },
  ];

  const handleReviewResult = (result: any) => {
    setSelectedResult(result);
    setView("review");
  };

  if (view === "review" && selectedResult) {
    return (
      <DashboardLayout role="student" title="Result Review" subtitle={selectedResult.title}>
        <div className="space-y-8 pb-20">
          <Button 
            variant="ghost" 
            onClick={() => setView("dashboard")} 
            className="font-black gap-2 hover:bg-muted rounded-xl -ml-4"
          >
            <HistoryIcon className="w-4 h-4 rotate-180" /> Back to Assessments
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="space-y-8">
              <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl text-center">
                 <div className="mx-auto w-32 h-32 rounded-full border-8 border-primary/20 flex items-center justify-center relative mb-6">
                    <span className="text-4xl font-black text-primary">{selectedResult.score}%</span>
                    <svg className="absolute -inset-2 w-[144px] h-[144px] -rotate-90">
                       <circle cx="72" cy="72" r="66" fill="none" stroke="currentColor" strokeWidth="8" className="text-primary" strokeDasharray="414" strokeDashoffset={414 - (414 * selectedResult.score) / 100} />
                    </svg>
                 </div>
                 <h3 className="text-2xl font-black uppercase tracking-tight">{selectedResult.title}</h3>
                 <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-2">Attempted on {selectedResult.date}</p>
                 <Badge className={`mt-4 font-black px-4 py-1.5 rounded-xl uppercase tracking-widest text-[10px] ${selectedResult.status === 'Passed' ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'}`}>
                    {selectedResult.status}
                 </Badge>
              </Card>

              <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                 <h4 className="text-lg font-black mb-6">Lecturer's Feedback</h4>
                 <div className="p-6 bg-muted/30 rounded-2xl border border-border/40 italic font-medium text-muted-foreground">
                    "{selectedResult.feedback}"
                 </div>
                 <Button className="w-full mt-6 rounded-xl font-black bg-primary/10 text-primary hover:bg-primary/20 border-none">
                    Message Lecturer
                 </Button>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                 <h4 className="text-2xl font-black mb-8">Topic Breakdown</h4>
                 <div className="space-y-8">
                    {selectedResult.breakdown.map((item: any, i: number) => (
                      <div key={i} className="space-y-3">
                         <div className="flex justify-between items-end">
                            <h5 className="font-black text-sm uppercase tracking-tight">{item.topic}</h5>
                            <span className={`text-lg font-black ${item.score >= 80 ? 'text-success' : item.score >= 50 ? 'text-amber-500' : 'text-destructive'}`}>
                               {item.score}%
                            </span>
                         </div>
                         <Progress value={item.score} className="h-3" indicatorClassName={item.score >= 80 ? 'bg-success' : item.score >= 50 ? 'bg-amber-500' : 'bg-destructive'} />
                      </div>
                    ))}
                 </div>
              </Card>

              <div className="grid md:grid-cols-2 gap-8">
                 <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                    <h4 className="text-lg font-black mb-4">Study Recommendations</h4>
                    <ul className="space-y-4">
                       <li className="flex gap-3 text-sm font-medium">
                          <BookOpen className="w-5 h-5 text-primary shrink-0" />
                          <span>Review Module 4: Advanced Protocols</span>
                       </li>
                       <li className="flex gap-3 text-sm font-medium">
                          <PlayCircle className="w-5 h-5 text-primary shrink-0" />
                          <span>Watch "Subnetting Masterclass" video</span>
                       </li>
                    </ul>
                 </Card>
                 <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl flex flex-col items-center justify-center text-center">
                    <Trophy className="w-12 h-12 text-amber-500 mb-4" />
                    <h4 className="font-black uppercase tracking-tight">Earned Badge</h4>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">Networking Novice</p>
                    <Button variant="link" className="mt-2 text-primary font-black uppercase text-[10px]">Share to Profile</Button>
                 </Card>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout
      role="student"
      title="Assessments"
      subtitle="Take exams and track your academic performance."
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-10"
      >
        {/* Results Analytics Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-black flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-primary" /> Results Analytics
          </h2>
          
          <div className="grid gap-4 md:grid-cols-3">
            <motion.div variants={item}>
              <Card className="border-border/40 bg-card/50 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-t-4 border-t-primary group hover:shadow-primary/10 transition-all duration-500">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Average Score</p>
                    <h3 className="text-4xl font-black text-primary">82%</h3>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6" />
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                   <div className="flex justify-between text-[10px] font-black uppercase tracking-widest opacity-60">
                      <span>vs Class Avg</span>
                      <span>+12%</span>
                   </div>
                   <Progress value={82} className="h-1" indicatorClassName="bg-primary" />
                </div>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-border/40 bg-card/50 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-t-4 border-t-success group hover:shadow-success/10 transition-all duration-500">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Best Subject</p>
                    <h3 className="text-2xl font-black text-success">Networking</h3>
                  </div>
                  <div className="p-3 bg-success/10 rounded-2xl text-success group-hover:scale-110 transition-transform">
                    <Trophy className="w-6 h-6" />
                  </div>
                </div>
                <p className="mt-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500" /> Top 5% in Department
                </p>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-border/40 bg-card/50 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-t-4 border-t-amber-500 group hover:shadow-amber-500/10 transition-all duration-500">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Improvement Area</p>
                    <h3 className="text-2xl font-black text-amber-600">Practical Wiring</h3>
                  </div>
                  <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-500 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                </div>
                <div className="mt-4 flex gap-1 h-8 items-end">
                  {[40, 55, 45, 60, 52, 70].map((h, i) => (
                    <div key={i} className="flex-1 bg-amber-500/20 rounded-t-sm" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Main Tabs Section */}
        <Tabs defaultValue="available" className="space-y-8" onValueChange={setActiveTab}>
          <div className="flex items-center justify-between">
            <TabsList className="bg-muted/50 p-1 rounded-2xl border border-border/50 backdrop-blur-sm">
              <TabsTrigger value="available" className="rounded-xl px-6 py-2.5 font-black uppercase tracking-widest text-[10px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg">
                Available
              </TabsTrigger>
              <TabsTrigger value="history" className="rounded-xl px-6 py-2.5 font-black uppercase tracking-widest text-[10px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg">
                History
              </TabsTrigger>
              <TabsTrigger value="practice" className="rounded-xl px-6 py-2.5 font-black uppercase tracking-widest text-[10px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg">
                Practice Tests
              </TabsTrigger>
            </TabsList>
            
            <Button variant="outline" size="sm" className="hidden md:flex gap-2 rounded-xl font-black uppercase tracking-widest text-[10px] h-10 border-border/60">
              <RefreshCw className="w-3.5 h-3.5" /> Sync Results
            </Button>
          </div>

          <TabsContent value="available" className="space-y-6 focus-visible:outline-none">
            <div className="grid gap-6 md:grid-cols-2">
              {upcomingAssessments.map((exam) => (
                <motion.div key={exam.id} variants={item}>
                  <Card className={`border-l-8 ${exam.color} bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 group`}>
                    <CardContent className="p-8 space-y-6">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <div className={`p-2 rounded-lg bg-muted`}>
                              <exam.icon className="w-4 h-4 text-foreground/70" />
                            </div>
                            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{exam.subject}</span>
                          </div>
                          <h3 className="text-2xl font-black mt-2">{exam.title}</h3>
                          <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground pt-1">
                            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {exam.duration}</span>
                            {exam.attempts && <span className="flex items-center gap-1.5"><HistoryIcon className="w-4 h-4" /> {exam.attempts}</span>}
                            {exam.status && <span className="flex items-center gap-1.5 text-primary"><Calendar className="w-4 h-4" /> {exam.status}</span>}
                          </div>
                        </div>
                        {exam.offlineMode && (
                          <Badge className="bg-success/10 text-success border-success/20 font-black text-[10px] uppercase tracking-widest">OFFLINE READY</Badge>
                        )}
                      </div>

                      <div className="flex gap-3">
                        {exam.buttons.map((btn, i) => (
                          <Button 
                            key={btn} 
                            variant={i === 0 ? "default" : "outline"} 
                            className={`flex-1 rounded-2xl font-black h-12 uppercase tracking-widest text-[10px] shadow-lg transition-all duration-300 ${i === 0 ? "hover:translate-y-[-2px] hover:shadow-primary/20" : ""}`}
                          >
                            {btn === "Download for Offline" && <Download className="w-3.5 h-3.5 mr-2" />}
                            {btn === "Start Quiz" && <PlayCircle className="w-3.5 h-3.5 mr-2" />}
                            {btn}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-6 focus-visible:outline-none">
            <Card className="border-border/40 bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/30 border-b border-border/40">
                    <tr>
                      <th className="px-6 py-4 text-left text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Assessment</th>
                      <th className="px-6 py-4 text-left text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Score</th>
                      <th className="px-6 py-4 text-left text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Date</th>
                      <th className="px-6 py-4 text-left text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Status</th>
                      <th className="px-6 py-4 text-right text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {pastResults.map((result) => (
                      <tr key={result.id} className="hover:bg-muted/20 transition-colors group">
                        <td className="px-6 py-5">
                          <div className="font-black text-sm uppercase tracking-tight group-hover:text-primary transition-colors">{result.title}</div>
                          <div className="text-[10px] font-medium text-muted-foreground italic mt-0.5">"{result.feedback}"</div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <span className={`text-lg font-black ${result.score >= 70 ? "text-success" : result.score >= 50 ? "text-amber-500" : "text-destructive"}`}>
                              {result.score}%
                            </span>
                            <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                              <div className={`h-full ${result.score >= 70 ? "bg-success" : result.score >= 50 ? "bg-amber-500" : "bg-destructive"}`} style={{ width: `${result.score}%` }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="text-xs font-bold text-muted-foreground">{result.date}</div>
                        </td>
                        <td className="px-6 py-5">
                          <Badge variant="outline" className={`font-black text-[9px] uppercase tracking-widest ${result.status === "Passed" ? "bg-success/5 text-success border-success/20" : "bg-destructive/5 text-destructive border-destructive/20"}`}>
                            {result.status}
                          </Badge>
                        </td>
                        <td className="px-6 py-5 text-right">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleReviewResult(result)}
                            className="h-8 px-4 rounded-xl font-black uppercase text-[10px] hover:bg-primary hover:text-primary-foreground transition-all gap-2"
                          >
                            Review Script <ArrowRight className="w-3 h-3" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="practice" className="space-y-10 focus-visible:outline-none">
            {/* Flashcards Horizontal Scroll */}
            <section className="space-y-4">
               <h3 className="text-lg font-black uppercase tracking-tighter flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-500" /> Active Flashcard Sets
               </h3>
               <div className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar">
                  {flashcardSets.map((set) => (
                    <motion.div key={set.id} variants={item} className="shrink-0 w-64">
                       <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-3xl p-6 shadow-lg group cursor-pointer hover:border-primary/40 transition-all">
                          <div className={`w-10 h-10 ${set.color} rounded-xl mb-4 shadow-lg flex items-center justify-center text-white`}>
                             <BookOpen className="w-5 h-5" />
                          </div>
                          <h4 className="font-black uppercase tracking-tight">{set.title}</h4>
                          <p className="text-[10px] font-bold text-muted-foreground uppercase mt-1">{set.count} Cards</p>
                          <div className="mt-6 space-y-2">
                             <div className="flex justify-between text-[9px] font-black uppercase">
                                <span>Mastery</span>
                                <span>{set.progress}%</span>
                             </div>
                             <Progress value={set.progress} className="h-1" indicatorClassName="bg-primary" />
                          </div>
                       </Card>
                    </motion.div>
                  ))}
                  <div className="shrink-0 w-64">
                     <Card className="border-dashed border-2 border-border/40 bg-muted/10 rounded-3xl p-6 h-full flex flex-col items-center justify-center text-center cursor-pointer hover:bg-muted/20 transition-all">
                        <Plus className="w-8 h-8 text-muted-foreground mb-2" />
                        <p className="text-xs font-black uppercase text-muted-foreground">New Set</p>
                     </Card>
                  </div>
               </div>
            </section>

            <div className="grid gap-6 md:grid-cols-3">
              {practiceTests.map((test) => (
                <motion.div key={test.id} variants={item}>
                  <Card className="border-border/40 bg-card/50 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-b-4 border-b-primary/30 group hover:translate-y-[-5px] transition-all duration-300">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                         <Badge className="bg-muted text-muted-foreground text-[9px] font-black uppercase tracking-widest">{test.difficulty}</Badge>
                         {test.completed && <CheckCircle2 className="w-5 h-5 text-success" />}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-black text-lg leading-tight uppercase tracking-tight">{test.title}</h4>
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{test.questions} Questions</p>
                      </div>
                      {test.bestScore && (
                        <div className="bg-success/5 rounded-xl p-3 border border-success/10">
                           <p className="text-[9px] font-black text-success uppercase tracking-widest">Best Attempt</p>
                           <p className="text-lg font-black text-success">{test.bestScore}%</p>
                        </div>
                      )}
                      <Button className="w-full rounded-2xl font-black h-11 uppercase tracking-widest text-[10px] group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        {test.completed ? "Retake Practice" : "Start Practice"}
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}

              {/* Resource Card */}
              <motion.div variants={item}>
                <Card className="border-dashed border-2 border-border/60 bg-muted/20 rounded-3xl p-6 flex flex-col items-center justify-center text-center space-y-4 h-full min-h-[250px]">
                   <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center text-muted-foreground">
                      <HelpCircle className="w-6 h-6" />
                   </div>
                   <div className="space-y-1">
                      <h4 className="font-black uppercase tracking-tight">Need Help?</h4>
                      <p className="text-xs font-bold text-muted-foreground leading-relaxed">
                        Access the offline study library to review course materials.
                      </p>
                   </div>
                   <Button variant="link" className="font-black uppercase tracking-widest text-[10px] text-primary">
                     Go to Library <ArrowRight className="ml-2 w-3.5 h-3.5" />
                   </Button>
                </Card>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Global Performance Insight */}
        <section className="pt-6">
           <Card className="rounded-[40px] bg-gradient-to-br from-primary/10 via-background to-accent/5 border border-primary/20 p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-110 transition-transform">
                 <ShieldAlert className="w-48 h-48" />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                 <div className="shrink-0 w-32 h-32 rounded-full border-8 border-primary/20 flex items-center justify-center relative">
                    <span className="text-3xl font-black text-primary">A-</span>
                    <svg className="absolute -inset-2 w-[144px] h-[144px] -rotate-90">
                       <circle cx="72" cy="72" r="66" fill="none" stroke="currentColor" strokeWidth="8" className="text-primary" strokeDasharray="414" strokeDashoffset="82" />
                    </svg>
                 </div>
                 <div className="space-y-3 flex-1 text-center md:text-left">
                    <h2 className="text-3xl font-black uppercase tracking-tighter italic">Lecturer's Insight</h2>
                    <p className="text-muted-foreground font-medium max-w-xl leading-relaxed italic">
                      "Amina, your progress in Networking is outstanding. Focus on your Practical Wiring labs this week to boost your overall aggregate before the final exams."
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                       <Badge className="bg-primary/10 text-primary border-primary/20 font-black text-[9px] uppercase tracking-widest">Dean's List Candidate</Badge>
                       <Badge className="bg-accent/10 text-accent border-accent/20 font-black text-[9px] uppercase tracking-widest">Sync Health: 100%</Badge>
                    </div>
                 </div>
                 <Button className="shrink-0 h-14 px-8 rounded-2xl font-black uppercase tracking-widest text-xs bg-foreground text-background hover:bg-primary transition-all">
                    View Full Transcript
                 </Button>
              </div>
           </Card>
        </section>
      </motion.div>
    </DashboardLayout>
  );
}
