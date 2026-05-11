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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import {
  User,
  Settings,
  Bell,
  Palette,
  Globe,
  WifiOff,
  ShieldCheck,
  Smartphone,
  Save,
  Camera,
  Trash2,
  Laptop,
  Lock,
  LogOut,
  CheckCircle2,
  MoreVertical,
  Eye,
  HardDrive,
  Download,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/settings")({
  component: SettingsComponent,
});

function SettingsComponent() {
  return (
    <DashboardLayout role="student" title="System Preferences" subtitle="Configure your offline workspace and manage security credentials.">
      <div className="max-w-4xl space-y-10">
        {/* Profile Section */}
        <section className="space-y-6">
           <h2 className="text-xl font-black flex items-center gap-2">
              <User className="w-5 h-5 text-primary" /> Profile Settings
           </h2>
           <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-10">
                 <div className="relative group">
                    <Avatar className="h-24 w-24 border-4 border-primary/20">
                       <AvatarFallback className="bg-primary/10 text-primary font-black text-2xl">AH</AvatarFallback>
                    </Avatar>
                    <Button size="icon" className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-primary shadow-lg border-2 border-background">
                       <Camera className="w-4 h-4" />
                    </Button>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 w-full">
                    <div className="space-y-2">
                       <Label className="font-black text-[10px] uppercase tracking-widest text-muted-foreground">Full Name</Label>
                       <Input defaultValue="Amina Hussein" className="h-12 rounded-xl bg-background/50 border-border/60" />
                    </div>
                    <div className="space-y-2">
                       <Label className="font-black text-[10px] uppercase tracking-widest text-muted-foreground">Student ID</Label>
                       <Input defaultValue="KPS/ICT/2024/089" disabled className="h-12 rounded-xl bg-muted/30 border-border/60" />
                    </div>
                 </div>
              </div>
           </Card>
        </section>

        {/* Storage Management */}
        <section className="space-y-6">
           <h2 className="text-xl font-black flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-primary" /> Offline Storage
           </h2>
           <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl space-y-6">
              <div className="flex justify-between items-center p-4 bg-muted/30 rounded-2xl border border-border/40">
                 <div>
                    <p className="font-black">Local Content Cache</p>
                    <p className="text-xs text-muted-foreground font-bold">Currently using 2.4 GB of 8.0 GB</p>
                 </div>
                 <Button variant="outline" className="rounded-xl font-black border-border/60 text-destructive hover:bg-destructive/10">Clear Cache</Button>
              </div>
              <div className="flex justify-between items-center p-4 bg-muted/30 rounded-2xl border border-border/40">
                 <div>
                    <p className="font-black">Local Database (Dexie.js)</p>
                    <p className="text-xs text-muted-foreground font-bold">Export your learning progress to USB</p>
                 </div>
                 <Button variant="outline" className="rounded-xl font-black border-border/60 gap-2">
                    <Download className="w-4 h-4" /> Export DB
                 </Button>
              </div>
           </Card>
        </section>

        {/* Accessibility & Design */}
        <section className="space-y-6">
           <h2 className="text-xl font-black flex items-center gap-2">
              <Eye className="w-5 h-5 text-primary" /> Accessibility
           </h2>
           <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl space-y-6">
              <div className="flex justify-between items-center">
                 <div>
                    <p className="font-black">Institutional Dark Mode</p>
                    <p className="text-xs text-muted-foreground font-bold">Optimized for low-light study sessions</p>
                 </div>
                 <Switch defaultChecked />
              </div>
              <div className="flex justify-between items-center">
                 <div>
                    <p className="font-black">High Contrast Text</p>
                    <p className="text-xs text-muted-foreground font-bold">Better readability for outdoors</p>
                 </div>
                 <Switch />
              </div>
              <div className="space-y-4 pt-4 border-t border-border/40">
                 <Label className="font-black text-[10px] uppercase tracking-widest text-muted-foreground">Global Text Size</Label>
                 <Slider defaultValue={[16]} max={24} min={12} step={1} className="w-full" />
              </div>
           </Card>
        </section>

        {/* Security */}
        <section className="space-y-6 pb-20">
           <h2 className="text-xl font-black flex items-center gap-2">
              <Lock className="w-5 h-5 text-primary" /> Security & Privacy
           </h2>
           <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-xl space-y-6">
              <div className="flex justify-between items-center">
                 <div>
                    <p className="font-black">Authentication PIN</p>
                    <p className="text-xs text-muted-foreground font-bold">Last changed 2 months ago</p>
                 </div>
                 <Button variant="outline" className="rounded-xl font-black border-border/60">Change PIN</Button>
              </div>
              <div className="flex justify-between items-center p-4 bg-rose-500/5 rounded-2xl border border-rose-500/20">
                 <div>
                    <p className="font-black text-rose-700">Logout Everywhere</p>
                    <p className="text-xs text-rose-600/70 font-bold">Terminate all active sessions on other devices</p>
                 </div>
                 <Button variant="ghost" className="rounded-xl font-black text-rose-700 hover:bg-rose-500/10">Sign Out</Button>
              </div>
           </Card>
        </section>
      </div>
    </DashboardLayout>
  );
}
