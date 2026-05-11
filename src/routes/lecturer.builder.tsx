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
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  FolderKanban,
  Plus,
  FileVideo,
  FileText,
  FileQuestion,
  GripVertical,
  DownloadCloud,
  HardDrive,
  Save,
  Globe,
  Eye,
  Settings,
  Trash2,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  AlertCircle,
  Info,
  CloudUpload,
  Usb,
  Package,
  Mic,
  FileCheck,
  Layers,
  Edit,
  ArrowDownRight,
  ClipboardList,
} from "lucide-react";

export const Route = createFileRoute("/lecturer/builder")({
  component: LecturerBuilderComponent,
});

function LecturerBuilderComponent() {
  const modules = [
    {
      id: 1,
      title: "Module 1: Introduction to IP Addressing",
      items: [
        {
          type: "video",
          title: "IPv4 vs IPv6 Basics",
          size: "145 MB",
          status: "Ready",
          offline: true,
        },
        {
          type: "pdf",
          title: "Subnetting Cheat Sheet",
          size: "2 MB",
          status: "Ready",
          offline: true,
        },
        { type: "quiz", title: "IP Basics Check", size: "12 KB", status: "Ready", offline: true },
      ],
    },
    {
      id: 2,
      title: "Module 2: Routing Protocols",
      items: [
        {
          type: "video",
          title: "OSPF Configuration",
          size: "210 MB",
          status: "Ready",
          offline: true,
        },
        {
          type: "assignment",
          title: "Packet Tracer Lab 1",
          size: "5 MB",
          status: "Needs Sync",
          offline: false,
        },
      ],
    },
  ];

  return (
    <DashboardLayout
      role="lecturer"
      title="Course Builder Studio"
      subtitle="The creative engine of JifunzeHub. Design your TVET curriculum for any environment."
    >
      <div className="space-y-8 pb-20">
        {/* Top Control Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-background border border-border/60 p-4 rounded-2xl shadow-sm sticky top-20 z-20 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-primary/10 text-primary rounded-xl hidden sm:block">
              <FolderKanban className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-sm leading-tight">
                Networking Essentials (CCNA Foundations)
              </h2>
              <p className="text-[10px] text-muted-foreground flex items-center gap-1 mt-0.5">
                <CheckCircle2 className="w-3 h-3 text-success" /> Auto-saved: 2:34 PM
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button variant="outline" size="sm" className="flex-1 sm:flex-none h-9">
              <Eye className="w-4 h-4 mr-2" /> Preview
            </Button>
            <Button variant="outline" size="sm" className="flex-1 sm:flex-none h-9">
              <Save className="w-4 h-4 mr-2" /> Save Draft
            </Button>
            <Button
              size="sm"
              className="flex-1 sm:flex-none h-9 bg-primary text-primary-foreground shadow-md shadow-primary/10"
            >
              Publish Course
            </Button>
          </div>
        </div>

        <Tabs defaultValue="curriculum" className="w-full">
          <TabsList className="bg-muted/50 border border-border/50 h-10 mb-6">
            <TabsTrigger value="info" className="text-xs sm:text-sm">
              Course Info
            </TabsTrigger>
            <TabsTrigger value="curriculum" className="text-xs sm:text-sm">
              Curriculum Builder
            </TabsTrigger>
            <TabsTrigger value="offline" className="text-xs sm:text-sm">
              Offline Packaging
            </TabsTrigger>
            <TabsTrigger value="settings" className="text-xs sm:text-sm">
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="info" className="m-0 focus-visible:outline-none focus-visible:ring-0">
            <Card className="border-border/60 shadow-soft">
              <CardContent className="p-8 space-y-8">
                <div className="grid md:grid-cols-[240px_1fr] gap-10">
                  <div className="space-y-4">
                    <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Course Thumbnail
                    </Label>
                    <div className="aspect-video bg-muted rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center text-center p-6 gap-2 hover:bg-muted/50 transition-colors cursor-pointer group">
                      <CloudUpload className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                      <p className="text-[10px] text-muted-foreground">
                        Drop image here or click to upload
                        <br />
                        (16:9 recommended)
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label className="font-bold">Course Title</Label>
                      <Input
                        defaultValue="Networking Essentials (CCNA Foundations)"
                        className="h-11 bg-muted/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-bold">Course Description</Label>
                      <Textarea
                        className="min-h-[120px] bg-muted/20 leading-relaxed"
                        defaultValue="Comprehensive introduction to networking concepts, covering IPv4/v6, subnetting, switching foundations, and basic security."
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="font-bold">Department</Label>
                        <Input defaultValue="ICT" className="h-10 bg-muted/20" />
                      </div>
                      <div className="space-y-2">
                        <Label className="font-bold">Level / Year</Label>
                        <Input defaultValue="Level 4 (Year 1)" className="h-10 bg-muted/20" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent
            value="curriculum"
            className="m-0 space-y-6 focus-visible:outline-none focus-visible:ring-0"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Layers className="w-5 h-5 text-primary" /> Curriculum Structure
              </h3>
              <Button variant="outline" size="sm" className="h-9">
                <Plus className="w-4 h-4 mr-2" /> Add Module
              </Button>
            </div>

            <div className="space-y-6">
              {modules.map((mod) => (
                <Card key={mod.id} className="border-border/60 shadow-soft overflow-hidden">
                  <CardHeader className="bg-muted/30 pb-4 border-b border-border/50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <GripVertical className="w-5 h-5 text-muted-foreground/50 cursor-grab" />
                        <CardTitle className="text-base">{mod.title}</CardTitle>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Settings className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="divide-y divide-border/50">
                      {mod.items.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-4 px-6 hover:bg-muted/10 transition-colors group"
                        >
                          <div className="flex items-center gap-4">
                            <GripVertical className="w-4 h-4 text-muted-foreground/30 cursor-grab opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div
                              className={`p-2 rounded-xl ${
                                item.type === "video"
                                  ? "bg-blue-500/10 text-blue-500"
                                  : item.type === "pdf"
                                    ? "bg-red-500/10 text-red-500"
                                    : item.type === "quiz"
                                      ? "bg-emerald-500/10 text-emerald-500"
                                      : "bg-purple-500/10 text-purple-500"
                              }`}
                            >
                              {item.type === "video" ? (
                                <FileVideo className="w-4 h-4" />
                              ) : item.type === "pdf" ? (
                                <FileText className="w-4 h-4" />
                              ) : item.type === "quiz" ? (
                                <FileQuestion className="w-4 h-4" />
                              ) : (
                                <ClipboardList className="w-4 h-4" />
                              )}
                            </div>
                            <div>
                              <p className="font-bold text-sm">{item.title}</p>
                              <p className="text-[10px] text-muted-foreground flex items-center gap-2 mt-0.5">
                                <span>{item.type.toUpperCase()}</span>
                                <span className="h-1 w-1 rounded-full bg-border"></span>
                                <span>{item.size}</span>
                                {item.offline && (
                                  <span className="flex items-center gap-1 text-success">
                                    <CheckCircle2 className="w-3 h-3" /> Offline Ready
                                  </span>
                                )}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant="outline"
                              className={`text-[10px] ${item.status === "Ready" ? "bg-success/5 text-success border-success/20" : "bg-amber-500/5 text-amber-600 border-amber-200"}`}
                            >
                              {item.status}
                            </Badge>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Edit className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 bg-muted/5 flex flex-wrap justify-center gap-3 border-t border-border/40">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 text-[10px] font-bold uppercase tracking-widest"
                      >
                        <FileVideo className="w-3 h-3 mr-2" /> Add Video
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 text-[10px] font-bold uppercase tracking-widest"
                      >
                        <FileText className="w-3 h-3 mr-2" /> Add Resource
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 text-[10px] font-bold uppercase tracking-widest"
                      >
                        <FileQuestion className="w-3 h-3 mr-2" /> Add Quiz
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 text-[10px] font-bold uppercase tracking-widest"
                      >
                        <ClipboardList className="w-3 h-3 mr-2" /> Add Practical
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 text-[10px] font-bold uppercase tracking-widest"
                      >
                        <Mic className="w-3 h-3 mr-2" /> Record Audio
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent
            value="offline"
            className="m-0 focus-visible:outline-none focus-visible:ring-0"
          >
            <div className="grid md:grid-cols-[1fr_350px] gap-8">
              <div className="space-y-6">
                <Card className="border-border/60 shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Package className="w-6 h-6 text-accent" /> Offline Packager
                    </CardTitle>
                    <CardDescription>
                      JifunzeHub's unique engine for bundling high-quality content into small,
                      resilient packages.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div className="bg-muted/30 rounded-2xl p-6 border border-border/50">
                      <div className="flex justify-between items-end mb-4">
                        <div>
                          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">
                            Estimated Package Size
                          </p>
                          <h3 className="text-4xl font-bold">
                            362 <span className="text-lg text-muted-foreground">MB</span>
                          </h3>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-bold text-success flex items-center gap-1 justify-end">
                            <ArrowDownRight className="w-3 h-3" /> 65% Compressed
                          </p>
                          <p className="text-[10px] text-muted-foreground mt-1">
                            Raw Size: 1.04 GB
                          </p>
                        </div>
                      </div>
                      <Progress
                        value={35}
                        className="h-3 bg-background"
                        indicatorClassName="bg-accent shadow-glow shadow-accent/50"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <Label className="font-bold text-sm">Optimization Settings</Label>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">
                              Compress Videos (720p)
                            </span>
                            <Switch defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">
                              Include Practical Lab Assets
                            </span>
                            <Switch defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">
                              Mobile Data Friendly (Low-res)
                            </span>
                            <Switch />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <Label className="font-bold text-sm">Export Compatibility</Label>
                        <div className="flex flex-wrap gap-2 pt-1">
                          <Badge
                            variant="outline"
                            className="bg-success/10 text-success border-success/20"
                          >
                            Android App
                          </Badge>
                          <Badge
                            variant="outline"
                            className="bg-success/10 text-success border-success/20"
                          >
                            Windows Offline
                          </Badge>
                          <Badge
                            variant="outline"
                            className="bg-success/10 text-success border-success/20"
                          >
                            USB Key
                          </Badge>
                          <Badge
                            variant="outline"
                            className="bg-amber-500/10 text-amber-600 border-amber-200"
                          >
                            Local LAN Server
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-muted/10 p-6 border-t border-border/40 gap-4">
                    <Button className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20">
                      <HardDrive className="w-4 h-4 mr-2" /> Generate Offline Package
                    </Button>
                    <Button variant="outline" className="bg-background">
                      <Usb className="w-4 h-4 mr-2" /> Export to USB
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-border/60 bg-muted/20">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-background rounded-xl text-amber-600 shadow-sm">
                      <Info className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Packaging Guide</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                        Large video files are automatically compressed during packaging. For courses
                        intended for USB distribution, ensure the total size is under 2GB for
                        compatibility with older learner devices.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-border/60">
                  <CardHeader className="pb-3 border-b border-border/40">
                    <CardTitle className="text-base">History</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="divide-y divide-border/50">
                      <div className="p-4 flex items-center justify-between hover:bg-muted/30 transition-colors">
                        <div>
                          <p className="text-xs font-bold">Package v2.4</p>
                          <p className="text-[10px] text-muted-foreground">Generated Yesterday</p>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <DownloadCloud className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="p-4 flex items-center justify-between hover:bg-muted/30 transition-colors opacity-60">
                        <div>
                          <p className="text-xs font-bold">Package v2.3</p>
                          <p className="text-[10px] text-muted-foreground">Aug 12, 2024</p>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <DownloadCloud className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
