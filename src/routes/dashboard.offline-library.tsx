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
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HardDrive,
  Database,
  Usb,
  FileVideo,
  FileText,
  FileCheck,
  AlertCircle,
  Trash2,
  RefreshCw,
  Smartphone,
  PlayCircle,
  Clock,
  CheckCircle2,
  DownloadCloud,
  Share2,
  MoreVertical,
  ServerCog,
  DatabaseZap,
  BookOpen,
} from "lucide-react";
import { Input } from "@/components/ui/input";

import { useState } from "react";
import { EmptyState } from "@/components/ui/empty-state";
import { Library, FolderSearch } from "lucide-react";

export const Route = createFileRoute("/dashboard/offline-library")({
  component: OfflineLibraryComponent,
});

function OfflineLibraryComponent() {
  const [isEmpty, setIsEmpty] = useState(false);
  const [isUsbTransferring, setIsUsbTransferring] = useState(false);
  const [usbProgress, setUsbProgress] = useState(0);
  const [showConflictModal, setShowConflictModal] = useState(false);

  const simulateUsbTransfer = () => {
    setIsUsbTransferring(true);
    let prog = 0;
    const interval = setInterval(() => {
      prog += 5;
      setUsbProgress(prog);
      if (prog >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsUsbTransferring(false);
          setUsbProgress(0);
          import("sonner").then(({ toast }) => {
            toast.success("Content successfully exported to USB Drive (JIFUNZE_HUB)");
          });
        }, 800);
      }
    }, 100);
  };
  const categories = [
    {
      name: "Networking Videos",
      icon: FileVideo,
      color: "text-blue-500",
      items: ["IP Addressing Basics", "Router Configuration", "VLAN Setup"],
    },
    {
      name: "PDF Resources",
      icon: FileText,
      color: "text-emerald-500",
      items: ["Electrical Installation Handbook", "Hospitality Customer Service Notes"],
    },
    {
      name: "Audio Lessons",
      icon: Smartphone,
      color: "text-amber-500",
      items: ["Tourism Communication Skills", "Entrepreneurship Basics"],
    },
  ];

  return (
    <DashboardLayout
      role="student"
      title="Offline Library"
      subtitle="Manage your locally cached lessons and device storage."
    >
      <div className="space-y-8 relative">
        <AnimatePresence>
          {isUsbTransferring && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
            >
              <Card className="w-full max-w-md border-primary/20 shadow-2xl rounded-[2.5rem] p-8 space-y-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-6 rounded-full bg-primary/10 text-primary animate-bounce">
                    <Usb className="w-12 h-12" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black">USB Export in Progress</h3>
                    <p className="text-sm font-bold text-muted-foreground">Writing encrypted course bundles to (E:) JIFUNZE_HUB</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Progress value={usbProgress} className="h-2" />
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    <span>{usbProgress}% Complete</span>
                    <span>Do not remove drive</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!isEmpty && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 flex items-center justify-between overflow-hidden"
            >
              <div className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-amber-500" />
                <p className="text-sm font-bold text-amber-700">Conflict Detected: "Advanced Solar Draft" has version mismatches with Campus Hub.</p>
              </div>
              <Button size="sm" className="bg-amber-500 text-white font-black text-xs px-4 rounded-xl" onClick={() => setShowConflictModal(true)}>
                Resolve Conflict
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Storage Analytics & Controls */}
        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 border-border/40 bg-card/50 backdrop-blur-sm shadow-xl overflow-hidden rounded-3xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center gap-2">
                <HardDrive className="w-6 h-6 text-primary" /> Local Cache Health
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-4xl font-black text-primary">2.4 GB <span className="text-lg text-muted-foreground font-bold">/ 8 GB</span></p>
                  <p className="text-sm font-bold text-muted-foreground mt-1">Smart Caching: 5.6 GB Available</p>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="bg-success/10 text-success border-success/20 font-bold px-3 py-1 rounded-lg">SYSTEM OPTIMAL</Badge>
                  <p className="text-[9px] font-black text-muted-foreground uppercase mt-2">Last Sync: 12 mins ago</p>
                </div>
              </div>
              
              <div className="h-4 w-full bg-muted rounded-2xl overflow-hidden flex shadow-inner">
                <div className="h-full bg-blue-500" style={{ width: "20%" }}></div>
                <div className="h-full bg-emerald-500" style={{ width: "8%" }}></div>
                <div className="h-full bg-amber-500" style={{ width: "2%" }}></div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/40">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div> Video Cache
                  </div>
                  <p className="text-lg font-black">1.8 GB</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div> PDF/Docs
                  </div>
                  <p className="text-lg font-black">420 MB</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div> Offline Data
                  </div>
                  <p className="text-lg font-black">180 MB</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5 shadow-xl rounded-3xl">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Infrastructure Controls</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Button variant="outline" className="justify-start font-bold py-6 rounded-xl hover:bg-destructive/10 hover:text-destructive border-border/40">
                <Trash2 className="w-4 h-4 mr-3" /> Clear Local Data
              </Button>
              <Button variant="outline" className="justify-start font-bold py-6 rounded-xl border-border/40">
                <RefreshCw className="w-4 h-4 mr-3" /> Force Remote Sync
              </Button>
              <Button 
                variant="outline" 
                onClick={simulateUsbTransfer}
                className="justify-start font-bold py-6 rounded-xl border-border/40"
              >
                <Usb className="w-4 h-4 mr-3" /> Export to USB
              </Button>
              <Button variant="ghost" className="text-muted-foreground font-bold py-6 hover:text-primary">
                Diagnostics Mode
              </Button>
            </CardContent>
          </Card>
        </div>

        {isEmpty ? (
          <div className="py-20">
            <EmptyState 
              icon={FolderSearch}
              title="Your library is empty"
              description="You haven't downloaded any lessons for offline use yet. Browse courses to start saving content."
              actionText="Browse Courses"
              onAction={() => window.location.href = '/dashboard/courses'}
            />
          </div>
        ) : (
          <>
            {/* Categorized Lessons */}
            <div className="grid md:grid-cols-3 gap-6">
              {categories.map((cat) => (
                <Card key={cat.name} className="border-border/40 bg-card/40 backdrop-blur-sm rounded-3xl shadow-lg">
                  <CardHeader className="border-b border-border/40 pb-4">
                    <CardTitle className="text-lg font-bold flex items-center gap-2">
                      <cat.icon className={`w-5 h-5 ${cat.color}`} /> {cat.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 space-y-2">
                    {cat.items.map((item) => (
                      <div key={item} className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/50 transition-colors group cursor-pointer">
                        <span className="text-sm font-bold group-hover:text-primary">{item}</span>
                        <PlayCircle className="w-4 h-4 text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-border/40 bg-primary/5 rounded-[2.5rem] p-8 shadow-xl flex flex-col justify-between">
              <div className="space-y-6">
                <h4 className="text-xl font-black">Quick Actions</h4>
                <div className="space-y-3">
                  <Button className="w-full h-12 rounded-xl font-black justify-start px-4">
                     <Usb className="w-5 h-5 mr-3" /> Export to USB
                  </Button>
                  <Button variant="outline" className="w-full h-12 rounded-xl font-black justify-start px-4 border-border/60">
                     <RefreshCw className="w-5 h-5 mr-3" /> Sync All Updates
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full h-12 rounded-xl font-black justify-start px-4 border-border/60 text-destructive hover:bg-destructive/10"
                    onClick={() => setIsEmpty(true)}
                  >
                     <Trash2 className="w-5 h-5 mr-3" /> Clear Local Cache
                  </Button>
                </div>
              </div>
              <div className="bg-background/60 p-4 rounded-2xl border border-border/40">
                 <p className="text-[10px] font-black text-muted-foreground uppercase mb-2">Sync Status</p>
                 <div className="flex items-center gap-2 text-sm font-bold">
                    <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
                    Fully Synced with Campus LAN
                 </div>
              </div>
            </Card>
          </>
        )}

        {/* Content Table */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
             <h2 className="text-2xl font-black">Downloaded Content</h2>
             <div className="flex gap-2 p-1 bg-muted/40 rounded-xl border border-border/40">
                {["All", "Videos", "Documents", "Audio"].map((cat) => (
                   <Button key={cat} variant={cat === "All" ? "default" : "ghost"} size="sm" className="rounded-lg font-black text-xs h-8">
                      {cat}
                   </Button>
                ))}
             </div>
          </div>

          <Card className="border-accent/20 bg-accent/5 rounded-[2.5rem] overflow-hidden shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl font-black text-accent">Suggested for Offline</CardTitle>
              <CardDescription className="font-bold text-accent/70">
                Download upcoming lessons before going offline.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4 pb-8">
              <div className="bg-background/80 backdrop-blur-md p-4 rounded-2xl border border-accent/20 flex items-center justify-between hover:border-accent transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold">Electrical Wiring Practical</p>
                    <p className="text-xs text-muted-foreground">Suggested for Next Week</p>
                  </div>
                </div>
                <Button size="icon" variant="ghost" className="text-accent group-hover:bg-accent group-hover:text-white rounded-xl">
                  <DownloadCloud className="w-5 h-5" />
                </Button>
              </div>

              <div className="bg-background/80 backdrop-blur-md p-4 rounded-2xl border border-accent/20 flex items-center justify-between hover:border-accent transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent">
                    <FileVideo className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold">Linux Networking Basics</p>
                    <p className="text-xs text-muted-foreground">Module 1 - 3</p>
                  </div>
                </div>
                <Button size="icon" variant="ghost" className="text-accent group-hover:bg-accent group-hover:text-white rounded-xl">
                  <DownloadCloud className="w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <AnimatePresence>
        {showConflictModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowConflictModal(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-card border border-border/40 shadow-2xl z-[110] rounded-[2.5rem] overflow-hidden"
            >
              <div className="p-8 border-b border-border/40 bg-amber-500/10">
                <h3 className="text-2xl font-black flex items-center gap-3 text-amber-600">
                  <AlertCircle className="w-6 h-6" /> Data Conflict Detected
                </h3>
                <p className="text-sm font-bold text-amber-700/80 mt-1 uppercase tracking-widest">Multiple versions found for "Advanced Solar Installation"</p>
              </div>

              <div className="p-8 grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-3xl border-2 border-primary bg-primary/5 space-y-4">
                  <div className="flex justify-between items-start">
                    <Badge className="bg-primary text-white font-black rounded-lg">LOCAL VERSION</Badge>
                    <span className="text-[10px] font-black text-muted-foreground uppercase">Today, 10:15 AM</span>
                  </div>
                  <div className="space-y-1">
                    <p className="font-black">Amina Hussein (You)</p>
                    <p className="text-xs text-muted-foreground">Modified 3 lessons in Module 2.</p>
                  </div>
                  <Button className="w-full rounded-xl font-black bg-primary text-white" onClick={() => setShowConflictModal(false)}>
                    Keep Local Version
                  </Button>
                </div>

                <div className="p-6 rounded-3xl border border-border/40 bg-muted/20 space-y-4 opacity-80">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="font-black rounded-lg">CAMPUS HUB VERSION</Badge>
                    <span className="text-[10px] font-black text-muted-foreground uppercase">Today, 09:45 AM</span>
                  </div>
                  <div className="space-y-1">
                    <p className="font-black">Central Server</p>
                    <p className="text-xs text-muted-foreground">Automated sync from Lecturer James.</p>
                  </div>
                  <Button variant="outline" className="w-full rounded-xl font-black border-border/60" onClick={() => setShowConflictModal(false)}>
                    Accept Remote Changes
                  </Button>
                </div>
              </div>

              <div className="p-6 bg-muted/40 border-t border-border/40 flex justify-between items-center">
                <Button variant="ghost" className="font-black text-xs uppercase" onClick={() => setShowConflictModal(false)}>Cancel & Review Later</Button>
                <Button variant="link" className="font-black text-xs text-primary uppercase">Merge Changes (Advanced)</Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </DashboardLayout>
  );
}
