import { createFileRoute, Link } from "@tanstack/react-router";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Plus,
  Video,
  FileText,
  Music,
  HelpCircle,
  ClipboardList,
  Save,
  Globe,
  WifiOff,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  GripVertical,
  Trash2,
  Image as ImageIcon,
  CheckCircle2,
  UploadCloud,
  FileCode,
  Laptop,
  MoreVertical,
  Package,
  PlayCircle,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

export const Route = createFileRoute("/lecturer/builder")({
  component: CourseBuilderComponent,
});

function CourseBuilderComponent() {
  const [modules, setModules] = useState([
    {
      id: 1,
      title: "Introduction to Networking",
      lessons: [
        { id: 101, title: "What is a Network?", type: "video", status: "uploaded" },
        { id: 102, title: "OSI Model Overview", type: "pdf", status: "uploaded" }
      ]
    }
  ]);

  const addModule = () => {
    setModules([...modules, { id: Date.now(), title: "New Module", lessons: [] }]);
  };

  return (
    <DashboardLayout role="lecturer" title="Course Builder" subtitle="Design and publish competency-based TVET content.">
      <div className="grid lg:grid-cols-3 gap-8 pb-20">
        {/* Left Column: Course Configuration */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
             <div className="space-y-6">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-2 h-8 bg-primary rounded-full"></div>
                   <h2 className="text-2xl font-black">Course Information</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Course Title</label>
                      <Input placeholder="e.g. Advanced Solar Installation" className="h-14 rounded-2xl bg-background/50 border-border/60 text-lg font-bold" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Department</label>
                      <Select>
                         <SelectTrigger className="h-14 rounded-2xl bg-background/50 border-border/60 font-bold">
                            <SelectValue placeholder="Select Department" />
                         </SelectTrigger>
                         <SelectContent>
                            <SelectItem value="ict">ICT Department</SelectItem>
                            <SelectItem value="elec">Electrical Engineering</SelectItem>
                            <SelectItem value="mech">Mechanical Engineering</SelectItem>
                            <SelectItem value="hosp">Hospitality & Tourism</SelectItem>
                         </SelectContent>
                      </Select>
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Course Description</label>
                   <Textarea placeholder="Describe what learners will achieve..." className="min-h-[120px] rounded-2xl bg-background/50 border-border/60 font-medium resize-none p-4" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Competency Level</label>
                      <Select>
                         <SelectTrigger className="h-14 rounded-2xl bg-background/50 border-border/60 font-bold">
                            <SelectValue placeholder="Select Level" />
                         </SelectTrigger>
                         <SelectContent>
                            <SelectItem value="level1">Level 1 - Foundational</SelectItem>
                            <SelectItem value="level2">Level 2 - Intermediate</SelectItem>
                            <SelectItem value="level3">Level 3 - Advanced</SelectItem>
                            <SelectItem value="level4">Level 4 - Expert / Specialist</SelectItem>
                         </SelectContent>
                      </Select>
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Thumbnail</label>
                      <div className="h-14 border-2 border-dashed border-border/60 rounded-2xl flex items-center justify-center gap-2 cursor-pointer hover:bg-muted/50 transition-colors">
                         <ImageIcon className="w-5 h-5 text-muted-foreground" />
                         <span className="text-xs font-black text-muted-foreground uppercase tracking-widest">Upload Image</span>
                      </div>
                   </div>
                </div>
             </div>
          </Card>

          {/* Module Builder */}
          <div className="space-y-6">
             <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black flex items-center gap-3">
                   <div className="w-2 h-8 bg-amber-500 rounded-full"></div>
                   Curriculum Builder
                </h2>
                <Button onClick={addModule} className="rounded-xl font-black bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                   <Plus className="w-4 h-4 mr-2" /> Add New Module
                </Button>
             </div>

             <div className="space-y-4">
                {modules.map((mod, i) => (
                  <Card key={mod.id} className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2rem] overflow-hidden shadow-xl group">
                     <div className="p-6 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                           <GripVertical className="w-5 h-5 text-muted-foreground/40 cursor-grab" />
                           <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-black">
                              {i + 1}
                           </div>
                           <Input defaultValue={mod.title} className="border-none bg-transparent text-xl font-black focus-visible:ring-0 w-80 p-0" />
                        </div>
                        <div className="flex items-center gap-2">
                           <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10"><Trash2 className="w-4 h-4" /></Button>
                           <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        </div>
                     </div>
                     
                     <div className="px-6 pb-6 space-y-4">
                        <div className="bg-muted/20 rounded-2xl p-4 border border-border/40 space-y-3">
                           {mod.lessons.map((lesson) => (
                             <div key={lesson.id} className="flex items-center justify-between p-3 rounded-xl bg-background/50 border border-border/40">
                                <div className="flex items-center gap-3">
                                   <GripVertical className="w-4 h-4 text-muted-foreground/30 cursor-grab" />
                                   {lesson.type === 'video' ? <Video className="w-4 h-4 text-blue-500" /> : <FileText className="w-4 h-4 text-emerald-500" />}
                                   <span className="text-sm font-bold">{lesson.title}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                   <Badge variant="outline" className="bg-success/10 text-success border-none text-[10px] font-black uppercase">Published</Badge>
                                   <Button size="icon" variant="ghost" className="h-8 w-8"><MoreVertical className="w-4 h-4" /></Button>
                                </div>
                             </div>
                           ))}
                           
                           <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-2">
                              {[
                                { icon: Video, label: 'Video', color: 'text-blue-500' },
                                { icon: FileText, label: 'PDF', color: 'text-emerald-500' },
                                { icon: FileCode, label: 'Lab/Practical', color: 'text-purple-500' },
                                { icon: ClipboardList, label: 'Assignment', color: 'text-rose-500' }
                              ].map((type) => (
                                <Button key={type.label} variant="outline" className="h-10 rounded-xl border-dashed border-border/60 hover:bg-muted text-[10px] font-black uppercase tracking-widest gap-2">
                                   <type.icon className={`w-3.5 h-3.5 ${type.color}`} /> {type.label}
                                </Button>
                              ))}
                           </div>
                        </div>
                     </div>
                  </Card>
                ))}
             </div>
          </div>
        </div>

        {/* Right Column: Publishing & Warnings */}
        <div className="space-y-8">
           {/* Publishing Controls */}
           <Card className="border-primary/20 bg-primary/5 rounded-[2.5rem] overflow-hidden shadow-xl">
              <CardHeader className="p-8 pb-4">
                 <CardTitle className="text-xl font-black">Launch Center</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 space-y-4">
                 <div className="space-y-2">
                    <div className="flex justify-between text-xs font-black uppercase tracking-widest text-muted-foreground">
                       <span>Content Health</span>
                       <span className="text-primary">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                 </div>
                 
                 <div className="space-y-3 pt-2">
                    <Button className="w-full h-14 rounded-2xl font-black bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                       <Globe className="w-5 h-5 mr-2" /> Publish to Institute
                    </Button>
                    <Button variant="outline" className="w-full h-14 rounded-2xl font-black border-border/60 hover:bg-muted">
                       <Save className="w-5 h-5 mr-2" /> Save Draft
                    </Button>
                    <Button variant="outline" className="w-full h-14 rounded-2xl font-black border-border/60 hover:bg-muted">
                       <Package className="w-5 h-5 mr-2" /> Export Offline Bundle
                    </Button>
                 </div>
              </CardContent>
              <div className="p-6 bg-muted/20 border-t border-border/40 flex items-center gap-3">
                 <div className="w-3 h-3 rounded-full bg-success animate-pulse"></div>
                 <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Auto-saved to local cache</span>
              </div>
           </Card>

           {/* Smart Warnings */}
           <Card className="border-amber-200 bg-amber-500/5 rounded-[2.5rem] overflow-hidden shadow-xl">
              <CardHeader className="p-8 pb-4">
                 <CardTitle className="text-lg font-black flex items-center gap-2 text-amber-600">
                    <AlertTriangle className="w-5 h-5" /> Smart Audit
                 </CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 space-y-4">
                 {[
                   { title: "Large Video File", desc: "Module 1 Video is 450MB. May fail on low-bandwidth student devices.", icon: WifiOff },
                   { title: "Missing Practical File", desc: "Module 2.3 references a PDF that hasn't been uploaded yet.", icon: HelpCircle }
                 ].map((warn, i) => (
                   <div key={i} className="flex gap-3 p-4 bg-background/80 backdrop-blur rounded-2xl border border-amber-200 shadow-sm">
                      <warn.icon className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                         <p className="text-sm font-black text-amber-900">{warn.title}</p>
                         <p className="text-xs font-medium text-amber-800/80 leading-relaxed">{warn.desc}</p>
                      </div>
                   </div>
                 ))}
                 <Button variant="link" className="text-amber-700 font-black text-xs w-full">Ignore all warnings</Button>
              </CardContent>
           </Card>

           {/* Preview Card */}
           <Card className="border-border/40 bg-card/50 rounded-[2.5rem] overflow-hidden shadow-xl group cursor-pointer">
              <div className="relative h-48 bg-muted">
                 <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <div className="flex flex-col items-center gap-2">
                       <PlayCircle className="w-12 h-12 text-white" />
                       <span className="text-white font-black uppercase text-xs tracking-widest">Live Preview</span>
                    </div>
                 </div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Laptop className="w-16 h-16 text-muted-foreground/20" />
                 </div>
              </div>
              <CardContent className="p-6">
                 <h4 className="font-black text-center text-sm uppercase tracking-widest text-muted-foreground">Student View Simulator</h4>
              </CardContent>
           </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
