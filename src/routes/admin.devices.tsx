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
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Search,
  Laptop,
  Smartphone,
  Tablet,
  Wifi,
  WifiOff,
  Battery,
  HardDrive,
  RefreshCw,
  Clock,
  MoreVertical,
  ArrowLeft,
  ChevronRight,
  Filter,
  ArrowUpRight,
  ShieldCheck,
  AlertTriangle,
  Send,
  Trash2,
  Settings,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Device } from "@/types/admin";

export const Route = createFileRoute("/admin/devices")({
  component: AdminDevicesComponent,
});

const deviceTypeData = [
  { name: "Tablets", value: 450, color: "var(--color-primary)" },
  { name: "Laptops", value: 180, color: "#3b82f6" },
  { name: "Mobiles", value: 120, color: "#10b981" },
];

function AdminDevicesComponent() {
  const [view, setView] = useState<"list" | "detail">("list");
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);

  const devices: Device[] = [
    {
      id: "DEV-S-001",
      name: "SAMSUNG-TAB-A7",
      owner: "Amina Hussein",
      dept: "ICT",
      lastSync: "12 mins ago",
      storage: "68%",
      health: "Healthy",
      type: "Tablet",
      os: "Android 14"
    },
    {
      id: "DEV-L-042",
      name: "HP-PROBOOK-450",
      owner: "David Mutua",
      dept: "Electrical & Electronics",
      lastSync: "2 days ago",
      storage: "92%",
      health: "Warning",
      type: "Laptop",
      os: "Windows 11"
    },
    {
      id: "DEV-S-112",
      name: "ITEL-PAD-1",
      owner: "Sarah Wanjiru",
      dept: "Food & Beverage",
      lastSync: "1 hour ago",
      storage: "45%",
      health: "Healthy",
      type: "Tablet",
      os: "Android 12 Go"
    },
    {
      id: "DEV-M-205",
      name: "TECNO-CAMON-30",
      owner: "John Kamau",
      dept: "Automotive Engineering",
      lastSync: "3 days ago",
      storage: "95%",
      health: "Low Storage",
      type: "Mobile",
      os: "Android 13"
    }
  ];

  const handleOpenDevice = (dev: Device) => {
    setSelectedDevice(dev);
    setView("detail");
  };

  if (view === "detail" && selectedDevice) {
    return (
      <DashboardLayout role="admin" title={selectedDevice.name} subtitle={`Device Monitoring • ${selectedDevice.id}`}>
        <div className="space-y-8 pb-20">
          <Button variant="ghost" onClick={() => setView("list")} className="font-black gap-2 hover:bg-muted rounded-xl">
             <ArrowLeft className="w-4 h-4" /> Back to Device Inventory
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
             {/* Device Info */}
             <div className="space-y-8">
                <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                   <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-8 rounded-[2rem] bg-muted/40 shadow-inner">
                         {selectedDevice.type === 'Tablet' ? <Tablet className="w-20 h-20 text-primary" /> : selectedDevice.type === 'Laptop' ? <Laptop className="w-20 h-20 text-blue-500" /> : <Smartphone className="w-20 h-20 text-emerald-500" />}
                      </div>
                      <div className="space-y-1">
                         <h2 className="text-2xl font-black">{selectedDevice.name}</h2>
                         <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{selectedDevice.os} • {selectedDevice.id}</p>
                      </div>
                      <Badge className={`${selectedDevice.health === 'Healthy' ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'} border-none font-black px-4 py-1.5 rounded-xl uppercase tracking-widest text-[10px]`}>
                         System Status: {selectedDevice.health}
                      </Badge>
                      
                      <div className="flex gap-2 w-full pt-4">
                         <Button className="flex-1 rounded-xl font-black gap-2 bg-primary text-white">
                            <RefreshCw className="w-4 h-4" /> Force Sync
                         </Button>
                         <Button variant="outline" className="flex-1 rounded-xl font-black gap-2 border-border/60">
                            <Send className="w-4 h-4" /> Notify Owner
                         </Button>
                      </div>
                   </div>

                   <div className="mt-8 space-y-4 border-t border-border/40 pt-8">
                      <div className="flex justify-between items-center">
                         <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Device Owner</span>
                         <span className="text-sm font-black">{selectedDevice.owner}</span>
                      </div>
                      <div className="flex justify-between items-center">
                         <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Department</span>
                         <span className="text-sm font-black">{selectedDevice.dept}</span>
                      </div>
                      <div className="flex justify-between items-center">
                         <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Security Patch</span>
                         <Badge variant="outline" className="bg-success/5 border-success/20 text-success text-[9px] font-black uppercase">v2026.04.12</Badge>
                      </div>
                   </div>
                </Card>

                <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                   <h4 className="text-lg font-black mb-6">Device Telemetry</h4>
                   <div className="space-y-6">
                      <div className="space-y-2">
                         <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                            <span>Storage Usage</span>
                            <span className="text-primary">{selectedDevice.storage} Full</span>
                         </div>
                         <Progress value={parseInt(selectedDevice.storage)} className="h-2" />
                      </div>
                      <div className="space-y-2">
                         <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                            <span>Battery Health</span>
                            <span className="text-success">92% Optimal</span>
                         </div>
                         <Progress value={92} className="h-2 bg-muted" indicatorClassName="bg-success" />
                      </div>
                   </div>
                </Card>
             </div>

             {/* Analytics & History */}
             <div className="lg:col-span-2 space-y-8">
                <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                   <h3 className="text-2xl font-black mb-8">Synchronization History</h3>
                   <div className="h-[350px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                         <BarChart data={[
                           { date: 'Oct 01', size: 120 },
                           { date: 'Oct 03', size: 85 },
                           { date: 'Oct 05', size: 450 },
                           { date: 'Oct 07', size: 190 },
                           { date: 'Oct 09', size: 310 },
                           { date: 'Oct 11', size: 125 }
                         ]}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                            <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 'bold'}} />
                            <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 'bold'}} />
                            <Tooltip 
                               contentStyle={{ backgroundColor: 'hsl(var(--card))', borderRadius: '20px', border: '1px solid hsl(var(--border))', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                            />
                            <Bar dataKey="size" fill="var(--color-primary)" radius={[10, 10, 0, 0]} />
                         </BarChart>
                      </ResponsiveContainer>
                   </div>
                   <p className="text-center text-xs font-bold text-muted-foreground uppercase tracking-widest mt-4">Data Downloaded (MB) per Sync Session</p>
                </Card>

                <div className="grid md:grid-cols-2 gap-8">
                   <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                      <h4 className="text-lg font-black mb-6">Cached Content Registry</h4>
                      <div className="space-y-3">
                         {[
                           { title: "Networking Module 4 Video", size: "450 MB", date: "Oct 12" },
                           { title: "Solar Systems CAT 1", size: "2.4 MB", date: "Oct 10" },
                           { title: "Institutional Handbook", size: "12.5 MB", date: "Sep 28" }
                         ].map((item, i) => (
                           <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 border border-border/40">
                              <div className="space-y-0.5">
                                 <p className="font-black text-xs">{item.title}</p>
                                 <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">{item.date}</p>
                              </div>
                              <span className="text-xs font-black text-primary">{item.size}</span>
                           </div>
                         ))}
                      </div>
                      <Button variant="ghost" className="w-full mt-4 font-black text-xs text-primary">Full Storage Manifest</Button>
                   </Card>

                   <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
                      <h4 className="text-lg font-black mb-6">Infrastructure Alerts</h4>
                      <div className="space-y-4">
                         {parseInt(selectedDevice.storage) > 90 && (
                           <div className="p-4 rounded-2xl bg-destructive/5 border border-destructive/20 space-y-2">
                              <div className="flex items-center gap-2 text-destructive">
                                 <AlertTriangle className="w-5 h-5" />
                                 <p className="text-sm font-black">Critical Storage Load</p>
                              </div>
                              <p className="text-xs font-medium text-destructive/70">Device has less than 500MB free. Local caching may fail for upcoming course modules.</p>
                           </div>
                         )}
                         <div className="p-4 rounded-2xl bg-success/5 border border-success/20 space-y-2">
                            <div className="flex items-center gap-2 text-success">
                               <ShieldCheck className="w-5 h-5" />
                               <p className="text-sm font-black">Security Audit Pass</p>
                            </div>
                            <p className="text-xs font-medium text-success/70">Last automated integrity scan completed on Oct 11. No threats found.</p>
                         </div>
                         <Button variant="destructive" className="w-full mt-2 rounded-xl h-12 font-black text-xs">Wipe Institutional Data</Button>
                      </div>
                   </Card>
                </div>
             </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout role="admin" title="Device Infrastructure" subtitle="Monitor and manage all connected student and faculty devices within the institutional ecosystem.">
      <div className="space-y-8 pb-20">
        {/* Analytics Top Section */}
        <div className="grid md:grid-cols-3 gap-8">
           <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl md:col-span-2">
              <div className="flex justify-between items-center mb-6">
                 <div>
                    <h3 className="text-2xl font-black">Device Health Fleet</h3>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Global status of all institutional endpoints</p>
                 </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {[
                   { label: "Optimal", count: 642, color: "text-success", bg: "bg-success/10" },
                   { label: "Synced", count: 580, color: "text-primary", bg: "bg-primary/10" },
                   { label: "Warning", count: 42, color: "text-amber-500", bg: "bg-amber-500/10" },
                   { label: "Critical", count: 8, color: "text-destructive", bg: "bg-destructive/10" }
                 ].map((stat, i) => (
                   <div key={i} className={`p-6 rounded-[1.5rem] ${stat.bg} text-center space-y-1 shadow-sm`}>
                      <h4 className="text-3xl font-black font-mono tracking-tighter">{stat.count}</h4>
                      <p className={`text-[9px] font-black uppercase tracking-widest ${stat.color}`}>{stat.label}</p>
                   </div>
                 ))}
              </div>
           </Card>

           <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl flex flex-col items-center justify-center">
              <div className="h-[200px] w-full">
                 <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                       <Pie data={deviceTypeData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                          {deviceTypeData.map((entry, index) => (
                             <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                       </Pie>
                       <Tooltip />
                    </PieChart>
                 </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-3 gap-4 w-full pt-4 border-t border-border/40 mt-4">
                 {deviceTypeData.map((type, i) => (
                   <div key={i} className="text-center">
                      <p className="text-xs font-black">{type.value}</p>
                      <p className="text-[8px] font-black uppercase text-muted-foreground">{type.name}</p>
                   </div>
                 ))}
              </div>
           </Card>
        </div>

        {/* Filters */}
        <div className="bg-card/40 backdrop-blur-sm border border-border/40 rounded-[2rem] p-6 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
           <div className="relative flex-1 max-w-xl w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search devices by ID, owner, or hardware model..."
                className="pl-12 h-14 rounded-2xl bg-background/50 border-border/60 focus-visible:ring-primary/50 text-lg font-medium"
              />
           </div>
           <div className="flex gap-3 w-full md:w-auto">
              <Button variant="outline" className="h-14 px-6 rounded-2xl font-black border-border/60 hover:bg-muted">
                 <Filter className="w-5 h-5 mr-2" /> Filters
              </Button>
              <Button className="h-14 px-8 rounded-2xl font-black bg-primary text-white shadow-lg shadow-primary/20">
                 <Settings className="w-5 h-5 mr-2" /> Global Config
              </Button>
           </div>
        </div>

        {/* Device Table */}
        <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] shadow-xl overflow-hidden">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow className="border-border/40 hover:bg-transparent">
                <TableHead className="font-black uppercase tracking-widest text-[10px] py-6 px-8">Device</TableHead>
                <TableHead className="font-black uppercase tracking-widest text-[10px]">Owner / Dept</TableHead>
                <TableHead className="font-black uppercase tracking-widest text-[10px]">Storage</TableHead>
                <TableHead className="font-black uppercase tracking-widest text-[10px]">Sync Status</TableHead>
                <TableHead className="font-black uppercase tracking-widest text-[10px]">Health</TableHead>
                <TableHead className="font-black uppercase tracking-widest text-[10px] text-right pr-8">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {devices.map((dev) => (
                <TableRow key={dev.id} className="border-border/40 hover:bg-muted/20 transition-colors group cursor-pointer" onClick={() => handleOpenDevice(dev)}>
                  <TableCell className="py-6 px-8">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-muted/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                         {dev.type === 'Tablet' ? <Tablet className="w-5 h-5" /> : dev.type === 'Laptop' ? <Laptop className="w-5 h-5" /> : <Smartphone className="w-5 h-5" />}
                      </div>
                      <div>
                        <p className="font-black text-sm group-hover:text-primary transition-colors">{dev.name}</p>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{dev.id}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                       <p className="text-xs font-bold">{dev.owner}</p>
                       <p className="text-[9px] font-black uppercase text-primary tracking-widest">{dev.dept}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3 w-32">
                       <Progress value={parseInt(dev.storage)} className="h-1.5" />
                       <span className="text-xs font-black">{dev.storage}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                       <Clock className="w-4 h-4 text-muted-foreground" />
                       <span className="text-xs font-bold">{dev.lastSync}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={`${dev.health === 'Healthy' ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'} border-none font-black text-[9px] uppercase`}>
                       {dev.health}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right pr-8">
                    <Button size="icon" variant="ghost" className="rounded-xl h-10 w-10 text-muted-foreground"><ChevronRight className="w-5 h-5" /></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </DashboardLayout>
  );
}
