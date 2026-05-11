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
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Download,
  Play,
  Pause,
  X,
  RefreshCw,
  HardDrive,
  Wifi,
  Settings,
  MoreVertical,
  Trash2,
  ArrowUp,
  Clock,
  FileVideo,
  FileType,
  CheckCircle2,
  AlertCircle,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/downloads")({
  component: DownloadsComponent,
});

function DownloadsComponent() {
  const activeDownloads = [
    { id: 1, title: "Module 5: Routing Protocols (Video)", course: "Networking Essentials", progress: 42, speed: "1.2 MB/s", remaining: "12m", size: "850 MB", status: "Downloading" },
    { id: 2, title: "Subnetting Cheat Sheet (PDF)", course: "Networking Essentials", progress: 0, speed: "Queued", remaining: "--", size: "2 MB", status: "Paused" },
  ];

  const completed = [
    { id: 1, title: "Electrical Safety Standards", size: "120 MB", date: "Yesterday" },
    { id: 2, title: "Module 1: Intro to TVET", size: "15 MB", date: "2 days ago" },
    { id: 3, title: "Module 4: Subnetting Architectures", size: "450 MB", date: "Today, 10:24 AM" },
    { id: 4, title: "Workshop Safety Handbook", size: "12 MB", date: "Yesterday" },
  ];

  return (
    <DashboardLayout role="student" title="Download Center" subtitle="Monitor active downloads and manage your offline course packages.">
      <div className="space-y-10">
        {/* Network & Performance Panel */}
        <div className="grid lg:grid-cols-3 gap-8">
           <Card className="lg:col-span-2 border-border/40 bg-card/50 backdrop-blur-sm rounded-[2.5rem] p-10 shadow-xl overflow-hidden relative">
              <div className="flex flex-col md:flex-row justify-between gap-10">
                 <div className="space-y-6 flex-1">
                    <h3 className="text-xl font-black">Network Performance</h3>
                    <div className="grid grid-cols-2 gap-6">
                       <div className="space-y-1">
                          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Current Bandwidth</p>
                          <p className="text-2xl font-black text-primary">1.2 MB/s</p>
                       </div>
                       <div className="space-y-1">
                          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Est. Completion</p>
                          <p className="text-2xl font-black">18 mins</p>
                       </div>
                    </div>
                    <div className="pt-4 flex items-center justify-between p-4 bg-muted/30 rounded-2xl border border-border/40">
                       <div className="flex items-center gap-3">
                          <Zap className="w-5 h-5 text-amber-500" />
                          <span className="text-sm font-bold">Low Bandwidth Mode</span>
                       </div>
                       <Switch />
                    </div>
                 </div>
                 <div className="h-40 w-40 flex items-center justify-center shrink-0">
                    <div className="relative h-full w-full">
                       <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
                          <circle className="text-muted/20 stroke-current" strokeWidth="8" fill="transparent" r="40" cx="50" cy="50" />
                          <circle className="text-primary stroke-current" strokeWidth="8" strokeLinecap="round" fill="transparent" r="40" cx="50" cy="50" strokeDasharray="251.2" strokeDashoffset="251.2" style={{ strokeDashoffset: 251.2 - (251.2 * 45) / 100 }} />
                       </svg>
                       <div className="absolute inset-0 flex flex-col items-center justify-center rotate-[90deg]">
                          <Download className="w-6 h-6 text-primary mb-1" />
                          <span className="text-xl font-black">45%</span>
                       </div>
                    </div>
                 </div>
              </div>
           </Card>

           <Card className="border-border/40 bg-primary/5 rounded-[2.5rem] p-8 shadow-xl flex flex-col justify-between">
              <div className="space-y-6">
                 <h4 className="text-lg font-black">Queue Actions</h4>
                 <div className="space-y-3">
                    <Button className="w-full h-12 rounded-xl font-black bg-primary shadow-lg shadow-primary/20">Resume All</Button>
                    <Button variant="outline" className="w-full h-12 rounded-xl font-black border-border/60">Pause All Queue</Button>
                    <Button variant="outline" className="w-full h-12 rounded-xl font-black border-border/60 text-destructive hover:bg-destructive/10">Clear Failed</Button>
                 </div>
              </div>
           </Card>
        </div>

        {/* Download Queue */}
        <section className="space-y-6">
           <h2 className="text-2xl font-black">Active Queue</h2>
           <div className="space-y-4">
              {activeDownloads.map((item) => (
                 <Card key={item.id} className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2rem] p-6 shadow-xl hover:border-primary/40 transition-all group">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                       <div className="h-16 w-16 bg-muted/30 rounded-2xl flex items-center justify-center shrink-0">
                          <FileVideo className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                       </div>
                       <div className="flex-1 space-y-3 w-full">
                          <div className="flex justify-between items-start">
                             <div>
                                <h4 className="text-lg font-black">{item.title}</h4>
                                <p className="text-xs font-bold text-muted-foreground">{item.course} • {item.size}</p>
                             </div>
                             <div className="text-right">
                                <Badge className={`font-black text-[10px] ${item.status === "Downloading" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>{item.status.toUpperCase()}</Badge>
                             </div>
                          </div>
                          <div className="space-y-2">
                             <Progress value={item.progress} className="h-2" />
                             <div className="flex justify-between text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                                <span>{item.speed}</span>
                                <span>{item.remaining} remaining</span>
                             </div>
                          </div>
                       </div>
                       <div className="flex gap-2 shrink-0">
                          <Button size="icon" variant="ghost" className="h-10 w-10 rounded-xl hover:bg-primary/10 hover:text-primary transition-all"><Pause className="w-5 h-5" /></Button>
                          <Button size="icon" variant="ghost" className="h-10 w-10 rounded-xl hover:bg-primary/10 hover:text-primary transition-all"><ArrowUp className="w-5 h-5" /></Button>
                          <Button size="icon" variant="ghost" className="h-10 w-10 rounded-xl hover:bg-destructive/10 hover:text-destructive transition-all"><X className="w-5 h-5" /></Button>
                       </div>
                    </div>
                 </Card>
              ))}
           </div>
        </section>

        {/* Completed History */}
        <section className="space-y-6">
           <h2 className="text-2xl font-black">Recently Completed</h2>
           <div className="grid md:grid-cols-2 gap-6">
              {completed.map((item) => (
                 <Card key={item.id} className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2rem] p-6 shadow-xl flex items-center justify-between group hover:border-primary/40 transition-all">
                    <div className="flex items-center gap-4">
                       <div className="h-12 w-12 bg-success/10 text-success rounded-xl flex items-center justify-center">
                          <CheckCircle2 className="w-6 h-6" />
                       </div>
                       <div>
                          <h4 className="font-black group-hover:text-primary transition-colors">{item.title}</h4>
                          <p className="text-xs font-bold text-muted-foreground">{item.size} • {item.date}</p>
                       </div>
                    </div>
                    <Button variant="ghost" size="sm" className="font-black text-primary hover:bg-primary/10 rounded-xl">Open</Button>
                 </Card>
              ))}
           </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
