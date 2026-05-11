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
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  RefreshCw,
  Wifi,
  WifiOff,
  Server,
  HardDrive,
  Upload,
  Download,
  AlertCircle,
  CheckCircle2,
  ArrowUpCircle,
  ArrowDownCircle,
  History,
  Activity,
  Zap,
  Database,
  ExternalLink,
  Settings,
  MoreVertical,
  CloudOff,
  Globe,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/sync")({
  component: SyncCenterComponent,
});

function SyncCenterComponent() {
  const pending = [
    { id: 1, type: "Assignment", name: "Network Topology Design", size: "12 MB", action: "Upload", status: "Ready" },
    { id: 2, type: "Quiz", name: "Electrical Safety CAT 1", size: "150 KB", action: "Upload", status: "Queued" },
    { id: 3, type: "Lesson", name: "Subnetting Part 4 (Video)", size: "245 MB", action: "Download", status: "Queued" },
  ];

  const history = [
    { date: "Oct 12, 10:45 AM", status: "Success", items: "12 Items", node: "Campus LAN North" },
    { date: "Oct 11, 04:20 PM", status: "Success", items: "5 Items", node: "Main Library Node" },
    { date: "Oct 10, 09:15 AM", status: "Failed", items: "2 Items", node: "Internet Gateway" },
  ];

  return (
    <DashboardLayout role="student" title="Sync Mission Control" subtitle="Synchronize your local workspace with the institutional cloud.">
      <div className="space-y-10">
        {/* Sync Mission Control Board */}
        <div className="grid lg:grid-cols-3 gap-8">
           <Card className="lg:col-span-2 border-border/40 bg-card/50 backdrop-blur-sm rounded-[2.5rem] p-10 shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 p-10 opacity-5">
                 <RefreshCw className="w-64 h-64 animate-spin-slow" />
              </div>
              <div className="space-y-8 relative z-10">
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="space-y-1">
                       <h3 className="text-3xl font-black">Sync Ready</h3>
                       <p className="text-lg font-bold text-muted-foreground flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success" /> All local changes validated
                       </p>
                    </div>
                    <Button size="lg" className="rounded-2xl font-black bg-primary px-10 h-16 text-lg shadow-2xl shadow-primary/40 hover:scale-105 transition-transform group">
                       <RefreshCw className="w-6 h-6 mr-3 group-hover:animate-spin" /> Sync Now
                    </Button>
                 </div>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-border/40">
                    {[
                       { label: "Last Sync", val: "32m ago" },
                       { label: "Pending", val: "3 Items" },
                       { label: "Data Delta", val: "257 MB" },
                       { label: "Health", val: "100%" }
                    ].map((item, i) => (
                       <div key={i} className="space-y-1">
                          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{item.label}</p>
                          <p className="text-xl font-black">{item.val}</p>
                       </div>
                    ))}
                 </div>
              </div>
           </Card>

           <Card className="border-border/40 bg-primary/5 rounded-[2.5rem] p-8 shadow-xl space-y-6">
              <h4 className="text-xl font-black">Connectivity Map</h4>
              <div className="space-y-6">
                 {[
                    { label: "Campus LAN", status: "Connected", color: "bg-success", icon: Wifi },
                    { label: "Internet Gateway", status: "Latency High", color: "bg-amber-500", icon: Globe },
                    { label: "Institutional Cloud", status: "Reachable", color: "bg-success", icon: Server }
                 ].map((net, i) => (
                    <div key={i} className="flex justify-between items-center p-4 rounded-2xl bg-background/60 border border-border/40 shadow-sm">
                       <div className="flex items-center gap-3">
                          <div className="p-2 bg-muted/50 rounded-lg text-muted-foreground"><net.icon className="w-4 h-4" /></div>
                          <span className="font-bold text-sm">{net.label}</span>
                       </div>
                       <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black text-muted-foreground uppercase">{net.status}</span>
                          <div className={`w-2 h-2 rounded-full ${net.color}`}></div>
                       </div>
                    </div>
                 ))}
              </div>
           </Card>
        </div>

        {/* Data Delta Table */}
        <section className="space-y-6">
           <h2 className="text-2xl font-black flex items-center gap-3">
              <div className="w-2 h-8 bg-primary rounded-full"></div>
              Data Delta (Pending Sync)
           </h2>
           <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead className="bg-muted/30 border-b border-border/40">
                       <tr>
                          <th className="px-8 py-5 text-[10px] font-black text-muted-foreground uppercase tracking-widest">Type</th>
                          <th className="px-8 py-5 text-[10px] font-black text-muted-foreground uppercase tracking-widest">Item Name</th>
                          <th className="px-8 py-5 text-[10px] font-black text-muted-foreground uppercase tracking-widest">Size</th>
                          <th className="px-8 py-5 text-[10px] font-black text-muted-foreground uppercase tracking-widest">Direction</th>
                          <th className="px-8 py-5 text-[10px] font-black text-muted-foreground uppercase tracking-widest">Actions</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40">
                       {pending.map((item) => (
                          <tr key={item.id} className="hover:bg-muted/20 transition-colors group">
                             <td className="px-8 py-6">
                                <Badge variant="outline" className="font-black text-[10px] bg-muted/50">{item.type.toUpperCase()}</Badge>
                             </td>
                             <td className="px-8 py-6 font-black text-sm group-hover:text-primary transition-colors">{item.name}</td>
                             <td className="px-8 py-6 font-mono text-xs">{item.size}</td>
                             <td className="px-8 py-6">
                                <div className="flex items-center gap-2 text-[10px] font-black uppercase">
                                   {item.action === "Upload" ? <Upload className="w-3 h-3 text-blue-500" /> : <Download className="w-3 h-3 text-emerald-500" />}
                                   {item.action}
                                </div>
                             </td>
                             <td className="px-8 py-6">
                                <Button size="sm" variant="ghost" className="h-8 rounded-lg font-black text-xs text-primary hover:bg-primary/10">Prioritize</Button>
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </Card>
        </section>

        {/* Sync History Log */}
        <section className="space-y-6">
           <h2 className="text-2xl font-black flex items-center gap-3">
              <div className="w-2 h-8 bg-muted rounded-full"></div>
              Sync History Log
           </h2>
           <div className="grid md:grid-cols-3 gap-6">
              {history.map((h, i) => (
                 <Card key={i} className="border-border/40 bg-card/40 rounded-3xl p-6 shadow-xl space-y-4">
                    <div className="flex justify-between items-start">
                       <span className="text-xs font-bold text-muted-foreground">{h.date}</span>
                       <Badge className={`text-[10px] font-black border-none px-2 py-0.5 ${h.status === "Success" ? "bg-success/10 text-success" : "bg-rose-500/10 text-rose-500"}`}>{h.status.toUpperCase()}</Badge>
                    </div>
                    <div className="space-y-1">
                       <h4 className="font-black text-sm">{h.items} Processed</h4>
                       <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1">
                          <Server className="w-3 h-3" /> {h.node}
                       </p>
                    </div>
                 </Card>
              ))}
           </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
