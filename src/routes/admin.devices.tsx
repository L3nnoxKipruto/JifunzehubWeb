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
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  TabletSmartphone,
  Laptop,
  ShieldCheck,
  ShieldAlert,
  RefreshCw,
  Trash2,
  WifiOff,
  Filter,
  SlidersHorizontal,
  Download,
  FileUp,
  Smartphone,
  Monitor,
  Battery,
  HardDrive,
  History,
  Settings,
  Ban,
  Key,
  Activity,
  MoreHorizontal,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Server,
  Users,
  Plus,
} from "lucide-react";

export const Route = createFileRoute("/admin/devices")({
  head: () => ({ meta: [{ title: "Device Ecosystem — JifunzeHub" }] }),
  component: AdminDevicesComponent,
});

function AdminDevicesComponent() {
  const devices = [
    {
      id: "DEV-842",
      owner: "Amina Hussein",
      type: "Tablet",
      storage: "6.2 GB",
      cache: "1.4 GB",
      lastSync: "10m ago",
      status: "Online",
      battery: 84,
      auth: "Authorized",
      os: "Android 13",
    },
    {
      id: "DEV-115",
      owner: "Eng. Kamau",
      type: "Laptop",
      storage: "12.4 GB",
      cache: "5.8 GB",
      lastSync: "2h ago",
      status: "Offline",
      battery: 42,
      auth: "Authorized",
      os: "Windows 11",
    },
    {
      id: "DEV-993",
      owner: "Sarah Wanjiru",
      type: "Smartphone",
      storage: "2.1 GB",
      cache: "0.8 GB",
      lastSync: "Yesterday",
      status: "Syncing",
      battery: 96,
      auth: "Authorized",
      os: "iOS 17",
    },
    {
      id: "DEV-402",
      owner: "Unknown Guest",
      type: "Tablet",
      storage: "0.5 GB",
      cache: "0 GB",
      lastSync: "Never",
      status: "Inactive",
      battery: 12,
      auth: "Pending",
      os: "Android 11",
    },
    {
      id: "DEV-771",
      owner: "Peter Mutua",
      type: "Laptop",
      storage: "8.4 GB",
      cache: "2.1 GB",
      lastSync: "3d ago",
      status: "Conflict",
      battery: 65,
      auth: "Revoked",
      os: "Windows 10",
    },
  ];

  return (
    <DashboardLayout
      role="admin"
      title="Device Ecosystem"
      subtitle="Orchestrate hardware access, monitor local storage health, and ensure seamless offline-first synchronization."
    >
      <div className="space-y-8 pb-20">
        {/* Device Metrics Banner */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <DeviceStatCard
            title="Total Registered"
            value="1,402"
            icon={Smartphone}
            color="text-primary"
          />
          <Card className="border-border/60 bg-success/5 shadow-soft">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mb-1">
                  Live Connections
                </p>
                <div className="flex items-center gap-2">
                  <h3 className="text-3xl font-black tracking-tighter">184</h3>
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
                </div>
              </div>
              <Server className="w-10 h-10 text-success/20" />
            </CardContent>
          </Card>
          <DeviceStatCard
            title="Sync Conflicts"
            value="3"
            icon={AlertTriangle}
            color="text-destructive"
          />
          <DeviceStatCard
            title="Avg. Offline Cache"
            value="4.2 GB"
            icon={HardDrive}
            color="text-amber-500"
          />
        </div>

        {/* Management Controls */}
        <div className="bg-background border border-border/60 rounded-2xl p-4 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search device ID, owner, OS, or status..."
                className="pl-10 bg-muted/30 border-border/60 focus-visible:ring-primary/50"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <Button variant="outline" size="sm" className="shrink-0">
                <SlidersHorizontal className="w-4 h-4 mr-2" /> Filters
              </Button>
              <Button variant="outline" size="sm" className="shrink-0">
                <Download className="w-4 h-4 mr-2" /> Device Logs
              </Button>
              <div className="h-8 w-px bg-border/60 mx-1 hidden md:block"></div>
              <Button className="bg-primary text-primary-foreground shadow-md shadow-primary/20 font-bold">
                <Plus className="w-4 h-4 mr-2" /> Register Device
              </Button>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer shrink-0 rounded-full px-3 py-1 text-[10px] font-bold"
            >
              All Ecosystem (1,402)
            </Badge>
            <Badge
              variant="outline"
              className="hover:bg-muted cursor-pointer shrink-0 rounded-full px-3 py-1 text-[10px] font-bold border-emerald-500/30 text-emerald-600"
            >
              Online Today (184)
            </Badge>
            <Badge
              variant="outline"
              className="hover:bg-muted cursor-pointer shrink-0 rounded-full px-3 py-1 text-[10px] font-bold border-amber-500/30 text-amber-600"
            >
              Low Battery (12)
            </Badge>
            <Badge
              variant="outline"
              className="hover:bg-muted cursor-pointer shrink-0 rounded-full px-3 py-1 text-[10px] font-bold border-destructive/20 text-destructive bg-destructive/5"
            >
              Pending Auth (12)
            </Badge>
          </div>
        </div>

        {/* Devices Table */}
        <Card className="border-border/60 shadow-soft overflow-hidden">
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-muted/30">
                <TableRow className="hover:bg-transparent border-b border-border/50">
                  <TableHead className="text-[10px] font-black uppercase tracking-widest px-6 py-4">
                    Hardware ID
                  </TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest px-6 py-4">
                    Owner & OS
                  </TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest px-6 py-4">
                    Status / Battery
                  </TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest px-6 py-4">
                    Storage / Cache
                  </TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest px-6 py-4">
                    Authorization
                  </TableHead>
                  <TableHead className="text-right text-[10px] font-black uppercase tracking-widest px-6 py-4">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {devices.map((device) => (
                  <TableRow
                    key={device.id}
                    className="group border-b border-border/40 hover:bg-muted/10 transition-colors"
                  >
                    <TableCell className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg bg-muted text-muted-foreground group-hover:scale-110 transition-transform`}
                        >
                          {device.type === "Laptop" ? (
                            <Monitor className="w-4 h-4" />
                          ) : device.type === "Tablet" ? (
                            <TabletSmartphone className="w-4 h-4" />
                          ) : (
                            <Smartphone className="w-4 h-4" />
                          )}
                        </div>
                        <span className="font-black uppercase tracking-tight text-sm">
                          {device.id}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-4">
                      <div className="space-y-0.5">
                        <p className="font-bold text-xs">{device.owner}</p>
                        <p className="text-[9px] text-muted-foreground font-medium uppercase tracking-widest">
                          {device.os}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div
                            className={`h-2 w-2 rounded-full ${
                              device.status === "Online"
                                ? "bg-success shadow-[0_0_8px_rgba(var(--success),0.5)]"
                                : device.status === "Syncing"
                                  ? "bg-primary animate-pulse"
                                  : device.status === "Conflict"
                                    ? "bg-destructive"
                                    : "bg-muted"
                            }`}
                          ></div>
                          <span className="text-[10px] font-black uppercase tracking-widest">
                            {device.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Battery
                            className={`w-3 h-3 ${device.battery < 20 ? "text-destructive" : "text-muted-foreground"}`}
                          />
                          <span className="text-[9px] font-bold">{device.battery}%</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-4">
                      <div className="space-y-1 w-32">
                        <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-widest">
                          <span className="text-muted-foreground">Local Cache</span>
                          <span className="text-foreground">{device.cache}</span>
                        </div>
                        <Progress
                          value={35}
                          className="h-1 bg-muted"
                          indicatorClassName="bg-amber-500"
                        />
                        <p className="text-[9px] text-muted-foreground font-medium">
                          Total Capacity: {device.storage}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-4">
                      <Badge
                        variant="outline"
                        className={`text-[9px] font-black uppercase tracking-widest ${
                          device.auth === "Authorized"
                            ? "bg-success/5 text-success border-success/30"
                            : device.auth === "Pending"
                              ? "bg-amber-500/10 text-amber-600 border-amber-500/30"
                              : "bg-destructive/10 text-destructive border-destructive/30"
                        }`}
                      >
                        {device.auth === "Authorized" && <ShieldCheck className="w-3 h-3 mr-1" />}
                        {device.auth}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-6 py-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-foreground"
                          >
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56 shadow-2xl">
                          <DropdownMenuLabel className="text-[10px] font-black uppercase tracking-widest">
                            Device Controls
                          </DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Monitor className="w-4 h-4 mr-2" /> Hardware Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <History className="w-4 h-4 mr-2" /> Sync Analytics
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <FileUp className="w-4 h-4 mr-2" /> Export Device Logs
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <RefreshCw className="w-4 h-4 mr-2 text-primary" /> Force Remote Sync
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Key className="w-4 h-4 mr-2" /> Reset Auth Token
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive font-bold">
                            <Ban className="w-4 h-4 mr-2" /> Revoke Infrastructure Access
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Global Ecosystem Analytics Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-border/60 shadow-soft">
            <CardHeader className="pb-4 border-b border-border/40">
              <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                <Activity className="w-4 h-4 text-primary" /> Sync Reliability Trends
              </CardTitle>
              <CardDescription>
                Daily percentage of successful device-to-LAN synchronizations.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex-1 space-y-1.5">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    <span>LAN Sync Success</span>
                    <span className="text-success">98.2%</span>
                  </div>
                  <Progress value={98} className="h-2 bg-muted" indicatorClassName="bg-success" />
                </div>
                <div className="flex-1 space-y-1.5">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    <span>USB Export Success</span>
                    <span className="text-amber-500">84.5%</span>
                  </div>
                  <Progress value={84} className="h-2 bg-muted" indicatorClassName="bg-amber-500" />
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-muted/20 border border-border/50 text-center">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">
                  Average Sync Duration
                </p>
                <p className="text-2xl font-black">
                  12.4s <span className="text-xs text-success ml-1">OPTIMAL</span>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 shadow-soft bg-muted/5 border-dashed">
            <CardContent className="p-10 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-background border border-border shadow-sm flex items-center justify-center text-muted-foreground opacity-50">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold uppercase tracking-tight">Security & Auth Protocol</h4>
                <p className="text-xs text-muted-foreground max-w-xs font-medium">
                  Devices are secured using hardware-based unique IDs and institutional digital
                  signatures.
                </p>
              </div>
              <Button
                variant="outline"
                className="text-[10px] font-black uppercase tracking-widest h-9 px-6 border-border/60"
              >
                Manage Auth Keys
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

function DeviceStatCard({ title, value, icon: Icon, color }: any) {
  return (
    <Card className="border-border/60 hover:shadow-soft transition-all group bg-background overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div
            className={`p-4 rounded-2xl bg-muted/50 ${color} group-hover:scale-110 transition-transform duration-500`}
          >
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mb-1">
              {title}
            </p>
            <h3 className="text-2xl font-black tracking-tight">{value}</h3>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
