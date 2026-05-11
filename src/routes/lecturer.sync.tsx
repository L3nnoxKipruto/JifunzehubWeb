import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  RefreshCw,
  Wifi,
  WifiOff,
  Database,
  HardDrive,
  Usb,
  AlertTriangle,
  CheckCircle2,
  Clock,
  History,
  Activity,
  ArrowUpRight,
  Monitor,
  Download,
  Trash2,
  FileUp,
  MessageSquare,
  ShieldCheck,
  Zap,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export const Route = createFileRoute("/lecturer/sync")({
  component: LecturerSyncComponent,
});

const syncHistoryData = [
  { time: "08:00", success: 95 },
  { time: "10:00", success: 92 },
  { time: "12:00", success: 98 },
  { time: "14:00", success: 85 },
  { time: "16:00", success: 94 },
  { time: "18:00", success: 99 },
  { time: "20:00", success: 97 },
];

function LecturerSyncComponent() {
  return (
    <DashboardLayout role="lecturer" title="Sync Mission Control" subtitle="Monitor institutional data integrity and offline synchronization health.">
      <div className="space-y-8 pb-20">
        {/* Sync Status Header Cards */}
        <div className="grid lg:grid-cols-4 gap-6">
           <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2rem] p-6 shadow-xl border-l-4 border-l-success">
              <div className="flex items-center gap-4">
                 <div className="p-3 rounded-2xl bg-success/10 text-success">
                    <Wifi className="w-6 h-6" />
                 </div>
                 <div>
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Network Status</p>
                    <h3 className="text-xl font-black">Local Hub Live</h3>
                 </div>
              </div>
           </Card>

           <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2rem] p-6 shadow-xl border-l-4 border-l-amber-500">
              <div className="flex items-center gap-4">
                 <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-600">
                    <FileUp className="w-6 h-6" />
                 </div>
                 <div>
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Pending Sync</p>
                    <h3 className="text-xl font-black">12 Submissions</h3>
                 </div>
              </div>
           </Card>

           <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2rem] p-6 shadow-xl border-l-4 border-l-primary">
              <div className="flex items-center gap-4">
                 <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                    <History className="w-6 h-6" />
                 </div>
                 <div>
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Last Sync</p>
                    <h3 className="text-xl font-black">42 mins ago</h3>
                 </div>
              </div>
           </Card>

           <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2rem] p-6 shadow-xl border-l-4 border-l-purple-500">
              <div className="flex items-center gap-4">
                 <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-600">
                    <HardDrive className="w-6 h-6" />
                 </div>
                 <div>
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Storage Used</p>
                    <h3 className="text-xl font-black">2.4 / 8 GB</h3>
                 </div>
              </div>
           </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
           {/* Sync Health Analytics */}
           <div className="lg:col-span-2 space-y-8">
              <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                 <div className="flex justify-between items-center mb-8">
                    <div>
                       <h3 className="text-2xl font-black">Institutional Sync Health</h3>
                       <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Success rate of data transfers across campus hubs</p>
                    </div>
                    <Badge className="bg-success text-white border-none font-black px-4 py-1.5 rounded-xl uppercase tracking-widest text-[10px]">Optimal</Badge>
                 </div>
                 
                 <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                       <AreaChart data={syncHistoryData}>
                          <defs>
                             <linearGradient id="colorSync" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                             </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                          <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 'bold'}} />
                          <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 'bold'}} />
                          <Tooltip 
                             contentStyle={{ backgroundColor: 'hsl(var(--card))', borderRadius: '20px', border: '1px solid hsl(var(--border))', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                             itemStyle={{ fontWeight: 'black' }}
                          />
                          <Area type="monotone" dataKey="success" stroke="var(--color-primary)" fillOpacity={1} fill="url(#colorSync)" strokeWidth={4} />
                       </AreaChart>
                    </ResponsiveContainer>
                 </div>
              </Card>

              {/* Detailed Sync Logs */}
              <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] shadow-xl overflow-hidden">
                 <div className="p-8 border-b border-border/40 flex justify-between items-center bg-muted/20">
                    <h3 className="text-xl font-black">Sync Activity Logs</h3>
                    <div className="flex gap-2">
                       <Button variant="outline" size="sm" className="rounded-xl font-black text-[10px] uppercase border-border/60">Export via USB</Button>
                       <Button variant="outline" size="sm" className="rounded-xl font-black text-[10px] uppercase border-border/60">Import Data</Button>
                    </div>
                 </div>
                 <Table>
                    <TableHeader className="bg-muted/30">
                       <TableRow className="border-border/40 hover:bg-transparent">
                          <TableHead className="font-black uppercase tracking-widest text-[10px] py-4 px-8">Activity</TableHead>
                          <TableHead className="font-black uppercase tracking-widest text-[10px]">Learner / Device</TableHead>
                          <TableHead className="font-black uppercase tracking-widest text-[10px]">Type</TableHead>
                          <TableHead className="font-black uppercase tracking-widest text-[10px]">Status</TableHead>
                          <TableHead className="font-black uppercase tracking-widest text-[10px] text-right pr-8">Time</TableHead>
                       </TableRow>
                    </TableHeader>
                    <TableBody>
                       {[
                         { act: "Module 4 Sync", target: "Amina H. (TAB-02)", type: "Lesson", status: "Success", time: "12m ago" },
                         { act: "CAT 1 Submission", target: "David M. (LP-01)", type: "Assessment", status: "Pending", time: "45m ago" },
                         { act: "Message Thread Sync", target: "ICT Dept Head", type: "Message", status: "Success", time: "2h ago" },
                         { act: "Practical Guide 3", target: "John K. (TAB-05)", type: "Lesson", status: "Conflict", time: "Yesterday" }
                       ].map((log, i) => (
                         <TableRow key={i} className="border-border/40 hover:bg-muted/20 transition-colors cursor-pointer group">
                            <TableCell className="py-4 px-8">
                               <div className="flex items-center gap-3">
                                  <div className={`p-2 rounded-lg ${log.status === 'Conflict' ? 'bg-destructive/10 text-destructive' : 'bg-primary/10 text-primary'}`}>
                                     {log.type === 'Lesson' ? <Database className="w-4 h-4" /> : log.type === 'Assessment' ? <CheckCircle2 className="w-4 h-4" /> : <MessageSquare className="w-4 h-4" />}
                                  </div>
                                  <p className="font-black text-sm group-hover:text-primary transition-colors">{log.act}</p>
                               </div>
                            </TableCell>
                            <TableCell>
                               <p className="text-xs font-bold text-muted-foreground">{log.target}</p>
                            </TableCell>
                            <TableCell>
                               <Badge variant="outline" className="rounded-lg font-bold border-border/60 text-[10px]">{log.type}</Badge>
                            </TableCell>
                            <TableCell>
                               <Badge className={`${log.status === 'Success' ? 'bg-success/10 text-success' : log.status === 'Pending' ? 'bg-amber-500/10 text-amber-600' : 'bg-destructive/10 text-destructive'} border-none font-black text-[9px] uppercase px-2`}>
                                  {log.status}
                               </Badge>
                            </TableCell>
                            <TableCell className="text-right pr-8">
                               <span className="text-xs font-bold text-muted-foreground">{log.time}</span>
                            </TableCell>
                         </TableRow>
                       ))}
                    </TableBody>
                 </Table>
              </Card>
           </div>

           {/* Infrastructure Monitoring Sidebar */}
           <div className="space-y-8">
              {/* Device Health Monitor */}
              <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                 <h4 className="text-lg font-black mb-6 flex items-center gap-2">
                    <Monitor className="w-5 h-5 text-primary" /> Active Hub Nodes
                 </h4>
                 <div className="space-y-6">
                    {[
                      { name: "ICT Lab Hotspot", load: 78, status: "High Activity" },
                      { name: "Engineering Hub 1", load: 32, status: "Normal" },
                      { name: "Library Local Server", load: 94, status: "Peak Usage" }
                    ].map((hub, i) => (
                      <div key={i} className="space-y-2">
                         <div className="flex justify-between items-center">
                            <span className="text-sm font-black">{hub.name}</span>
                            <Badge variant="outline" className="border-none bg-muted/40 text-[9px] font-black uppercase tracking-widest">{hub.status}</Badge>
                         </div>
                         <Progress value={hub.load} className="h-1.5" />
                         <div className="flex justify-between text-[9px] font-bold text-muted-foreground uppercase">
                            <span>{hub.load}% Capacity</span>
                            <span>{Math.round(hub.load / 5)} Devices</span>
                         </div>
                      </div>
                    ))}
                 </div>
                 <Button variant="ghost" className="w-full mt-6 font-black text-xs text-primary">Full Infrastructure Map</Button>
              </Card>

              {/* Conflict Resolution Center */}
              <Card className="border-destructive/20 bg-destructive/5 rounded-[2.5rem] p-8 shadow-xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
                    <AlertTriangle className="w-20 h-20 text-destructive" />
                 </div>
                 <CardHeader className="p-0 mb-4 relative z-10">
                    <CardTitle className="text-xl font-black text-destructive">Conflict Resolution</CardTitle>
                    <CardDescription className="text-destructive/70 font-bold">1 file version mismatch detected.</CardDescription>
                 </CardHeader>
                 <CardContent className="p-0 space-y-4 relative z-10">
                    <div className="bg-background/80 p-4 rounded-2xl border border-destructive/20 space-y-3">
                       <p className="text-xs font-bold leading-relaxed">David Mutua's "Lab Practical 3" version is newer than the local server cache.</p>
                       <div className="flex gap-2">
                          <Button size="sm" className="flex-1 bg-destructive text-white rounded-xl font-black text-[10px]">Approve Overwrite</Button>
                          <Button size="sm" variant="outline" className="flex-1 rounded-xl font-black text-[10px] border-destructive/20 text-destructive">Keep Local</Button>
                       </div>
                    </div>
                 </CardContent>
              </Card>

              {/* Sync Actions */}
              <Card className="border-primary/20 bg-primary/5 rounded-[2.5rem] p-8 shadow-xl">
                 <h4 className="text-lg font-black mb-6">Quick Sync Actions</h4>
                 <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="h-24 flex-col gap-2 rounded-2xl border-border/60 font-black text-xs">
                       <RefreshCw className="w-6 h-6 text-primary" /> Force Sync
                    </Button>
                    <Button variant="outline" className="h-24 flex-col gap-2 rounded-2xl border-border/60 font-black text-xs">
                       <Usb className="w-6 h-6 text-amber-500" /> USB Sync
                    </Button>
                    <Button variant="outline" className="h-24 flex-col gap-2 rounded-2xl border-border/60 font-black text-xs">
                       <Trash2 className="w-6 h-6 text-destructive" /> Clear Logs
                    </Button>
                    <Button variant="outline" className="h-24 flex-col gap-2 rounded-2xl border-border/60 font-black text-xs">
                       <ShieldCheck className="w-6 h-6 text-success" /> Integrity Check
                    </Button>
                 </div>
              </Card>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
