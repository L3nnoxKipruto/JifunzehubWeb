import { createFileRoute } from "@tanstack/react-router";
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
  Server,
  Zap,
  HardDrive,
  Cpu,
  Activity,
  RefreshCw,
  Wifi,
  WifiOff,
  Database,
  ShieldCheck,
  Search,
  Trash2,
  DownloadCloud,
  FileUp,
  AlertTriangle,
  Clock,
  Terminal,
  Settings,
  MoreVertical,
  Usb,
  Router,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

export const Route = createFileRoute("/admin/local-server")({
  component: AdminLocalServerComponent,
});

const bandwidthData = [
  { time: "08:00", upload: 45, download: 120 },
  { time: "10:00", upload: 85, download: 340 },
  { time: "12:00", upload: 120, download: 560 },
  { time: "14:00", upload: 90, download: 420 },
  { time: "16:00", upload: 140, download: 780 },
  { time: "18:00", upload: 60, download: 230 },
  { time: "20:00", upload: 30, download: 110 },
];

function AdminLocalServerComponent() {
  return (
    <DashboardLayout role="admin" title="Local Infrastructure Hub" subtitle="Manage campus-wide offline distribution nodes and synchronization services.">
      <div className="space-y-8 pb-20">
        {/* Core Server Metrics */}
        <div className="grid lg:grid-cols-4 gap-6">
           {[
             { label: "Server Health", value: "99.9%", status: "Optimal", icon: ShieldCheck, color: "text-success", bg: "bg-success/10" },
             { label: "Active Nodes", value: "12 Hubs", status: "All Online", icon: Router, color: "text-primary", bg: "bg-primary/10" },
             { label: "Daily Syncs", value: "1,420", status: "+12% Growth", icon: RefreshCw, color: "text-amber-500", bg: "bg-amber-500/10" },
             { label: "Storage Used", value: "1.2 / 4 TB", status: "30% Capacity", icon: HardDrive, color: "text-blue-500", bg: "bg-blue-500/10" },
           ].map((stat, i) => (
             <Card key={i} className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2rem] p-6 shadow-xl border-l-4 border-l-primary">
                <div className="flex items-center gap-4">
                   <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color}`}>
                      <stat.icon className="w-6 h-6" />
                   </div>
                   <div>
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                      <h3 className="text-xl font-black">{stat.value}</h3>
                      <p className={`text-[10px] font-bold ${stat.color} uppercase tracking-widest`}>{stat.status}</p>
                   </div>
                </div>
             </Card>
           ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
           {/* Bandwidth & Load Analytics */}
           <div className="lg:col-span-2 space-y-8">
              <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                 <div className="flex justify-between items-center mb-8">
                    <div>
                       <h3 className="text-2xl font-black">Local Traffic Distribution</h3>
                       <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Network throughput across campus hotspot nodes</p>
                    </div>
                    <div className="flex gap-4">
                       <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-primary"></div>
                          <span className="text-xs font-black text-muted-foreground uppercase tracking-widest">Download (Mbps)</span>
                       </div>
                       <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                          <span className="text-xs font-black text-muted-foreground uppercase tracking-widest">Upload (Mbps)</span>
                       </div>
                    </div>
                 </div>
                 
                 <div className="h-[350px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                       <AreaChart data={bandwidthData}>
                          <defs>
                             <linearGradient id="colorDL" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                             </linearGradient>
                             <linearGradient id="colorUL" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                             </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                          <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 'bold'}} />
                          <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 'bold'}} />
                          <Tooltip 
                             contentStyle={{ backgroundColor: 'hsl(var(--card))', borderRadius: '20px', border: '1px solid hsl(var(--border))', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                          />
                          <Area type="monotone" dataKey="download" stroke="var(--color-primary)" fillOpacity={1} fill="url(#colorDL)" strokeWidth={4} />
                          <Area type="monotone" dataKey="upload" stroke="#10b981" fillOpacity={1} fill="url(#colorUL)" strokeWidth={4} />
                       </AreaChart>
                    </ResponsiveContainer>
                 </div>
              </Card>

              {/* Node Monitoring */}
              <div className="grid md:grid-cols-2 gap-8">
                 <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                    <h4 className="text-lg font-black mb-6 flex items-center gap-2">
                       <Router className="w-5 h-5 text-primary" /> Active Hub Nodes
                    </h4>
                    <div className="space-y-4">
                       {[
                         { name: "Main ICT Lab", status: "Peak", load: 92, users: 45 },
                         { name: "Engineering Block A", status: "Normal", load: 45, users: 22 },
                         { name: "Hospitality Hub", status: "Idle", load: 12, users: 5 }
                       ].map((hub, i) => (
                         <div key={i} className="p-4 bg-muted/30 rounded-2xl border border-border/40 space-y-3">
                            <div className="flex justify-between items-center">
                               <p className="font-black text-sm">{hub.name}</p>
                               <Badge className={`${hub.status === 'Peak' ? 'bg-amber-500' : 'bg-success'} text-white border-none text-[9px] font-black uppercase`}>{hub.status}</Badge>
                            </div>
                            <div className="space-y-1">
                               <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                                  <span>Node Load</span>
                                  <span>{hub.load}%</span>
                               </div>
                               <Progress value={hub.load} className="h-1.5" />
                            </div>
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{hub.users} Connected Devices</p>
                         </div>
                       ))}
                    </div>
                 </Card>

                 <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                    <h4 className="text-lg font-black mb-6 flex items-center gap-2">
                       <RefreshCw className="w-5 h-5 text-amber-500" /> Sync Infrastructure
                    </h4>
                    <div className="space-y-4">
                       <div className="bg-primary/5 p-4 rounded-2xl border border-primary/20 space-y-2">
                          <p className="text-[10px] font-black text-primary uppercase tracking-widest">Active Institution Sync</p>
                          <div className="flex justify-between items-center">
                             <p className="text-sm font-black">Central DB → Local Hubs</p>
                             <span className="text-xs font-black text-primary">68%</span>
                          </div>
                          <Progress value={68} className="h-1.5" />
                       </div>
                       
                       <div className="space-y-3 pt-2">
                          {[
                            { title: "Course Content Cache", status: "Synced", icon: Database },
                            { title: "Student Assessment Queue", status: "3 Pending", icon: FileUp, alert: true },
                            { title: "System Logs Pipeline", status: "Live", icon: Terminal }
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-border/40">
                               <item.icon className={`w-4 h-4 ${item.alert ? 'text-amber-500' : 'text-muted-foreground'}`} />
                               <span className="text-xs font-bold flex-1">{item.title}</span>
                               <span className={`text-[9px] font-black uppercase ${item.alert ? 'text-amber-500' : 'text-success'}`}>{item.status}</span>
                            </div>
                          ))}
                       </div>
                       <Button className="w-full mt-2 rounded-xl font-black bg-amber-500 text-white shadow-lg">Retry All Failed Syncs</Button>
                    </div>
                 </Card>
              </div>
           </div>

           {/* Hardware & System Logs */}
           <div className="space-y-8">
              {/* Hardware Performance */}
              <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                 <h4 className="text-lg font-black mb-6 flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-primary" /> Hardware Vitality
                 </h4>
                 <div className="space-y-6">
                    <div className="space-y-2">
                       <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                          <span>CPU Usage</span>
                          <span>24%</span>
                       </div>
                       <Progress value={24} className="h-2" />
                    </div>
                    <div className="space-y-2">
                       <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                          <span>Memory (RAM)</span>
                          <span>4.8 / 32 GB</span>
                       </div>
                       <Progress value={15} className="h-2" />
                    </div>
                    <div className="space-y-2">
                       <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                          <span>NVMe SSD Storage</span>
                          <span>1.2 / 4 TB</span>
                       </div>
                       <Progress value={30} className="h-2" />
                    </div>
                    <div className="flex justify-between pt-4 border-t border-border/40">
                       <div className="text-center">
                          <p className="text-xl font-black">38°C</p>
                          <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Temp</p>
                       </div>
                       <div className="text-center">
                          <p className="text-xl font-black">2.4 GHz</p>
                          <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Clock</p>
                       </div>
                       <div className="text-center">
                          <p className="text-xl font-black">1.2W</p>
                          <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Power</p>
                       </div>
                    </div>
                 </div>
              </Card>

              {/* Quick Server Controls */}
              <Card className="border-primary/20 bg-primary/5 rounded-[2.5rem] p-8 shadow-xl">
                 <h4 className="text-lg font-black mb-6">Server Controls</h4>
                 <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="h-24 flex-col gap-2 rounded-2xl border-border/60 font-black text-xs">
                       <RefreshCw className="w-6 h-6 text-primary" /> Restart Hub
                    </Button>
                    <Button variant="outline" className="h-24 flex-col gap-2 rounded-2xl border-border/60 font-black text-xs">
                       <Database className="w-6 h-6 text-amber-500" /> Full Backup
                    </Button>
                    <Button variant="outline" className="h-24 flex-col gap-2 rounded-2xl border-border/60 font-black text-xs">
                       <Settings className="w-6 h-6 text-blue-500" /> Config Hub
                    </Button>
                    <Button variant="outline" className="h-24 flex-col gap-2 rounded-2xl border-border/60 font-black text-xs">
                       <Usb className="w-6 h-6 text-emerald-500" /> USB Export
                    </Button>
                 </div>
              </Card>

              {/* System Logs Terminal */}
              <Card className="border-border/40 bg-zinc-950 rounded-[2.5rem] overflow-hidden shadow-2xl">
                 <div className="p-4 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                       <Terminal className="w-4 h-4 text-emerald-500" />
                       <span className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">System Kernel Logs</span>
                    </div>
                    <div className="flex gap-1.5">
                       <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
                    </div>
                 </div>
                 <div className="p-6 font-mono text-[10px] space-y-2 text-emerald-500/80">
                    <p><span className="text-zinc-600">[21:04:12]</span> INFO: Sync engine initialized on node HUB-MAIN-01</p>
                    <p><span className="text-zinc-600">[21:05:01]</span> AUTH: Device SAMSUNG-TAB-02 verified via local token</p>
                    <p><span className="text-amber-500/80">[21:05:45]</span> WARN: Storage usage on Library node exceeds 90%</p>
                    <p><span className="text-zinc-600">[21:06:12]</span> INFO: Pushing course content package #CRS-102 to all hubs</p>
                    <div className="h-4 w-2 bg-emerald-500/50 animate-pulse mt-2"></div>
                 </div>
              </Card>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
