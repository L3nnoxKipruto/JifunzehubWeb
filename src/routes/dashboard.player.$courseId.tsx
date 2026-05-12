import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { 
  ArrowLeft, 
  Play, 
  FileText, 
  CheckCircle2, 
  ChevronRight, 
  Download, 
  MessageSquare,
  Video,
  BookOpen,
  HelpCircle,
  Maximize2,
  Volume2,
  Settings,
  SkipForward,
  SkipBack
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const Route = createFileRoute("/dashboard/player/$courseId")({
  component: CoursePlayerComponent,
});

function CoursePlayerComponent() {
  const { courseId } = Route.useParams();
  const [currentModule, setCurrentModule] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(0);

  const course = {
    id: courseId,
    title: "Networking Essentials (CCNA)",
    instructor: "James M. Macharia",
    progress: 45,
    modules: [
      {
        title: "Module 1: Network Fundamentals",
        lessons: [
          { title: "Introduction to Networking", type: "video", duration: "12:45", completed: true },
          { title: "OSI Model Layers", type: "video", duration: "18:20", completed: true },
          { title: "TCP/IP Suite Deep Dive", type: "reading", duration: "10 mins", completed: false },
        ]
      },
      {
        title: "Module 2: Routing & Switching",
        lessons: [
          { title: "Basic Router Configuration", type: "video", duration: "15:10", completed: false },
          { title: "VLAN Implementation", type: "video", duration: "22:30", completed: false },
          { title: "Spanning Tree Protocol", type: "quiz", duration: "15 questions", completed: false },
        ]
      }
    ]
  };

  const activeLesson = course.modules[currentModule].lessons[currentLesson];

  return (
    <div className="flex h-screen flex-col bg-background overflow-hidden">
      {/* Top Header */}
      <header className="flex h-16 items-center justify-between border-b border-border/60 bg-card/50 px-6 backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild className="rounded-xl">
             <Link to="/dashboard/courses"><ArrowLeft className="h-5 w-5" /></Link>
          </Button>
          <div>
            <h1 className="text-sm font-black uppercase tracking-widest text-muted-foreground leading-none mb-1">Learning: {course.id}</h1>
            <h2 className="text-lg font-black">{course.title}</h2>
          </div>
        </div>
        <div className="flex items-center gap-6">
           <div className="hidden md:block w-48 space-y-1.5">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                 <span>Course Progress</span>
                 <span className="text-primary">{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-1.5" />
           </div>
           <Button className="rounded-xl font-black bg-primary text-white shadow-lg shadow-primary/20">
              <Download className="w-4 h-4 mr-2" /> Download Offline Package
           </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Main Player Area */}
        <main className="flex-1 overflow-y-auto bg-muted/20 p-8 custom-scrollbar">
          <div className="mx-auto max-w-5xl space-y-8">
            {/* Video Placeholder */}
            <div className="aspect-video w-full overflow-hidden rounded-[2.5rem] bg-zinc-950 shadow-2xl relative group border-4 border-white/5">
               <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <div className="flex items-center gap-6">
                     <Button variant="ghost" size="icon" className="h-12 w-12 text-white"><SkipBack className="w-8 h-8" /></Button>
                     <Button className="h-20 w-20 rounded-full bg-primary text-white shadow-2xl shadow-primary/40"><Play className="w-10 h-10 fill-current" /></Button>
                     <Button variant="ghost" size="icon" className="h-12 w-12 text-white"><SkipForward className="w-8 h-8" /></Button>
                  </div>
               </div>
               <img 
                 src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80" 
                 className="h-full w-full object-cover opacity-60" 
                 alt="Course Preview" 
               />
               <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-between">
                  <div className="space-y-1">
                     <Badge className="bg-primary text-white border-none font-black text-[10px] px-3">NOW PLAYING</Badge>
                     <h3 className="text-2xl font-black text-white">{activeLesson.title}</h3>
                  </div>
                  <div className="flex gap-2">
                     <Button size="icon" variant="ghost" className="text-white hover:bg-white/10"><Volume2 /></Button>
                     <Button size="icon" variant="ghost" className="text-white hover:bg-white/10"><Settings /></Button>
                     <Button size="icon" variant="ghost" className="text-white hover:bg-white/10"><Maximize2 /></Button>
                  </div>
               </div>
            </div>

            {/* Lesson Content Tabs */}
            <Tabs defaultValue="overview" className="w-full">
               <TabsList className="bg-card/40 border border-border/60 p-1 rounded-2xl h-14">
                  <TabsTrigger value="overview" className="rounded-xl px-8 font-black text-xs uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-white transition-all">Overview</TabsTrigger>
                  <TabsTrigger value="resources" className="rounded-xl px-8 font-black text-xs uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-white transition-all">Resources</TabsTrigger>
                  <TabsTrigger value="notes" className="rounded-xl px-8 font-black text-xs uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-white transition-all">My Notes</TabsTrigger>
                  <TabsTrigger value="qa" className="rounded-xl px-8 font-black text-xs uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-white transition-all">Q&A</TabsTrigger>
               </TabsList>
               
               <TabsContent value="overview" className="mt-8 space-y-6">
                  <Card className="p-8 border-border/40 bg-card/40 backdrop-blur-sm rounded-[2rem] shadow-xl">
                     <h4 className="text-2xl font-black mb-4">About this lesson</h4>
                     <p className="text-muted-foreground leading-relaxed">
                        In this comprehensive session, we dive deep into the core foundations of modern computer networks. 
                        You will learn how data travels across the globe, the role of routers and switches, and why the OSI Model 
                        is the "bible" of networking. This lesson is critical for passing your CCNA certification.
                     </p>
                     <div className="mt-8 pt-8 border-t border-border/40 flex items-center gap-6">
                        <div className="flex items-center gap-3">
                           <Avatar className="h-12 w-12 border border-primary/20 shadow-lg">
                              <AvatarFallback className="bg-primary text-white font-black">JM</AvatarFallback>
                           </Avatar>
                           <div>
                              <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-none mb-1">Instructor</p>
                              <p className="text-sm font-black">{course.instructor}</p>
                           </div>
                        </div>
                        <div className="flex gap-4">
                           <Badge variant="outline" className="h-10 px-4 rounded-xl font-black border-border/60 uppercase tracking-widest text-[10px]">Intermediate</Badge>
                           <Badge variant="outline" className="h-10 px-4 rounded-xl font-black border-border/60 uppercase tracking-widest text-[10px]">CCNA-Ready</Badge>
                        </div>
                     </div>
                  </Card>
               </TabsContent>

               <TabsContent value="resources" className="mt-8">
                  <div className="grid md:grid-cols-2 gap-4">
                     {[
                        { title: "OSI Model Cheat Sheet", type: "PDF", size: "2.4 MB" },
                        { title: "Network Topology Lab File", type: "PKT", size: "12.1 MB" },
                        { title: "Study Guide: Module 1", type: "PDF", size: "5.8 MB" },
                        { title: "Quick Quiz Questions", type: "DOCX", size: "1.2 MB" },
                     ].map((res, i) => (
                        <Card key={i} className="p-4 border-border/40 bg-card/40 backdrop-blur-sm rounded-2xl flex items-center justify-between group hover:border-primary/40 transition-all cursor-pointer">
                           <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-black text-xs">{res.type}</div>
                              <div>
                                 <p className="font-black text-sm group-hover:text-primary transition-colors">{res.title}</p>
                                 <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{res.size}</p>
                              </div>
                           </div>
                           <Button size="icon" variant="ghost" className="rounded-lg"><Download className="w-4 h-4" /></Button>
                        </Card>
                     ))}
                  </div>
               </TabsContent>
            </Tabs>
          </div>
        </main>

        {/* Course Syllabus Sidebar */}
        <aside className="w-[380px] border-l border-border/60 bg-card/30 flex flex-col backdrop-blur-sm">
          <div className="p-6 border-b border-border/60">
             <h3 className="text-xl font-black mb-2">Course Curriculum</h3>
             <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground">
                <BookOpen className="w-3.5 h-3.5" />
                <span>12 Modules • 48 Lessons</span>
             </div>
          </div>
          
          <ScrollArea className="flex-1 p-6 custom-scrollbar">
            <div className="space-y-8">
               {course.modules.map((mod, mIdx) => (
                  <div key={mIdx} className="space-y-4">
                     <div className="flex items-center justify-between">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{mod.title}</h4>
                        <span className="text-[10px] font-black text-muted-foreground">0/{mod.lessons.length}</span>
                     </div>
                     <div className="space-y-2">
                        {mod.lessons.map((les, lIdx) => {
                           const active = currentModule === mIdx && currentLesson === lIdx;
                           return (
                              <button 
                                key={lIdx}
                                onClick={() => { setCurrentModule(mIdx); setCurrentLesson(lIdx); }}
                                className={`w-full flex items-center gap-3 p-4 rounded-2xl border transition-all text-left group ${
                                   active 
                                   ? "bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-[1.02]" 
                                   : "bg-card/40 border-border/40 hover:border-primary/40"
                                }`}
                              >
                                 <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                                    active ? "bg-white/20" : "bg-muted text-muted-foreground"
                                 }`}>
                                    {les.completed ? <CheckCircle2 className="w-4 h-4" /> : (les.type === 'video' ? <Play className="w-4 h-4 fill-current" /> : <FileText className="w-4 h-4" />)}
                                 </div>
                                 <div className="min-w-0 flex-1">
                                    <p className={`text-sm font-black truncate ${active ? 'text-white' : 'text-foreground'}`}>{les.title}</p>
                                    <p className={`text-[10px] font-bold uppercase tracking-widest ${active ? 'text-white/70' : 'text-muted-foreground'}`}>{les.duration}</p>
                                 </div>
                              </button>
                           );
                        })}
                     </div>
                  </div>
               ))}
            </div>
          </ScrollArea>

          <div className="p-6 bg-primary/5 border-t border-border/60">
             <Button className="w-full h-12 rounded-xl font-black bg-primary text-white shadow-xl shadow-primary/30 gap-2">
                Continue to Next Lesson <ChevronRight className="w-4 h-4" />
             </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}
