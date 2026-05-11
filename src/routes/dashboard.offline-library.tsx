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
} from "lucide-react";

export const Route = createFileRoute("/dashboard/offline-library")({
  component: OfflineLibraryComponent,
});

function OfflineLibraryComponent() {
  const libraryItems = [
    {
      id: 1,
      title: "Networking Essentials (Full Course)",
      type: "Course Package",
      source: "LAN Sync",
      size: "1.2 GB",
      health: "Healthy",
      expires: "Never",
      lastOpened: "2 days ago",
      icon: Database,
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      id: 2,
      title: "Python Data Structures (Videos)",
      type: "Video Cache",
      source: "Cloud Download",
      size: "450 MB",
      health: "Expiring Soon",
      expires: "In 3 days",
      lastOpened: "1 week ago",
      icon: FileVideo,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      id: 3,
      title: "Solar Installation Guide",
      type: "PDF Manual",
      source: "USB Import",
      size: "15 MB",
      health: "Healthy",
      expires: "Never",
      lastOpened: "Just now",
      icon: FileText,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      id: 4,
      title: "Mid-Term Exam: Subnetting",
      type: "Offline Assessment",
      source: "LAN Sync",
      size: "2 MB",
      health: "Locked",
      expires: "Oct 15",
      lastOpened: "Not opened",
      icon: FileCheck,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
  ];

  return (
    <DashboardLayout
      role="student"
      title="Offline Library"
      subtitle="Manage your locally cached lessons, USB imports, and device storage."
    >
      <div className="space-y-8">
        {/* Top Actions & Storage Panel */}
        <div className="grid lg:grid-cols-[1fr_350px] gap-6">
          <Card className="border-border/60 bg-gradient-to-br from-background to-muted/20 shadow-sm overflow-hidden flex flex-col relative">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <HardDrive className="w-48 h-48" />
            </div>
            <CardHeader className="pb-4 border-b border-border/40 z-10">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <DatabaseZap className="w-5 h-5 text-accent" /> Storage Overview
                  </CardTitle>
                  <CardDescription>Local device memory allocated to JifunzeHub.</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="bg-background">
                    <ServerCog className="w-4 h-4 mr-2" /> Optimize
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    className="bg-destructive/10 text-destructive hover:bg-destructive hover:text-destructive-foreground border-0"
                  >
                    <Trash2 className="w-4 h-4 mr-2" /> Clear Cache
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6 flex-1 z-10 space-y-6">
              <div>
                <div className="flex justify-between items-end mb-2">
                  <div>
                    <span className="text-3xl font-bold tracking-tight">1.6 GB</span>
                    <span className="text-muted-foreground ml-2">used of 5.0 GB limit</span>
                  </div>
                  <Badge variant="outline" className="bg-success/10 text-success border-success/30">
                    Healthy
                  </Badge>
                </div>

                <div className="h-4 w-full bg-muted rounded-full overflow-hidden flex shadow-inner">
                  <div
                    className="h-full bg-primary transition-all duration-1000"
                    style={{ width: "45%" }}
                    title="Course Packages: 1.2 GB"
                  ></div>
                  <div
                    className="h-full bg-amber-500 transition-all duration-1000"
                    style={{ width: "15%" }}
                    title="Video Cache: 450 MB"
                  ></div>
                  <div
                    className="h-full bg-blue-500 transition-all duration-1000"
                    style={{ width: "5%" }}
                    title="Documents: 15 MB"
                  ></div>
                  <div
                    className="h-full bg-purple-500 transition-all duration-1000"
                    style={{ width: "2%" }}
                    title="Assessments: 2 MB"
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary"></div> Courses
                  </div>
                  <p className="font-semibold text-sm">1.2 GB</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div> Videos
                  </div>
                  <p className="font-semibold text-sm">450 MB</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div> Docs
                  </div>
                  <p className="font-semibold text-sm">15 MB</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div> Exams
                  </div>
                  <p className="font-semibold text-sm">2 MB</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4 flex flex-col">
            <Card className="border-border/60 bg-accent/5 shadow-sm flex-1">
              <CardContent className="p-5 flex flex-col items-center justify-center text-center h-full space-y-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-2 ring-4 ring-background">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg">System Sync</h3>
                <p className="text-xs text-muted-foreground px-4">
                  Synchronize your entire offline library with the campus server.
                </p>
                <Button className="w-full shadow-md shadow-accent/20 bg-accent hover:bg-accent-glow text-accent-foreground mt-2">
                  Sync All Content
                </Button>
              </CardContent>
            </Card>
            <Button
              variant="outline"
              className="w-full border-primary/20 text-primary hover:bg-primary/5 bg-background shadow-sm h-12"
            >
              <DownloadCloud className="w-4 h-4 mr-2" /> Export Offline Package
            </Button>
          </div>
        </div>

        {/* Library Content */}
        <Tabs defaultValue="all" className="w-full">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
            <TabsList className="bg-muted/50 border border-border/50 h-10">
              <TabsTrigger value="all" className="text-xs sm:text-sm">
                All Content
              </TabsTrigger>
              <TabsTrigger value="courses" className="text-xs sm:text-sm">
                Courses
              </TabsTrigger>
              <TabsTrigger value="media" className="text-xs sm:text-sm">
                Media & Docs
              </TabsTrigger>
              <TabsTrigger value="usb" className="text-xs sm:text-sm hidden sm:flex">
                <Usb className="w-3 h-3 mr-1" /> USB Imports
              </TabsTrigger>
            </TabsList>
            <div className="text-sm text-muted-foreground flex items-center gap-2 font-medium">
              <Smartphone className="w-4 h-4" /> Device Location:{" "}
              <span className="text-foreground">Internal Storage</span>
            </div>
          </div>

          <TabsContent value="all" className="m-0 focus-visible:outline-none focus-visible:ring-0">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {libraryItems.map((item) => (
                <Card
                  key={item.id}
                  className="border-border/60 hover:shadow-soft transition-all duration-300 flex flex-col bg-background"
                >
                  <CardHeader className="p-4 pb-2">
                    <div className="flex justify-between items-start mb-3">
                      <div className={`p-2.5 rounded-xl ${item.bg} ${item.color}`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <Badge
                        variant="outline"
                        className={`
                        ${item.health === "Healthy" ? "bg-success/10 text-success border-success/20" : ""}
                        ${item.health === "Expiring Soon" ? "bg-amber-500/10 text-amber-600 border-amber-500/20" : ""}
                        ${item.health === "Locked" ? "bg-muted text-muted-foreground border-border" : ""}
                      `}
                      >
                        {item.health === "Healthy" && <CheckCircle2 className="w-3 h-3 mr-1" />}
                        {item.health === "Expiring Soon" && (
                          <AlertCircle className="w-3 h-3 mr-1" />
                        )}
                        {item.health}
                      </Badge>
                    </div>
                    <CardTitle className="text-base line-clamp-1" title={item.title}>
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-xs font-medium mt-1">
                      {item.type} • {item.size}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-2 flex-1">
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Source</span>
                        <span className="font-medium flex items-center">
                          {item.source === "USB Import" && (
                            <Usb className="w-3 h-3 mr-1 text-muted-foreground" />
                          )}{" "}
                          {item.source}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Last Opened</span>
                        <span className="font-medium">{item.lastOpened}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Expires</span>
                        <span
                          className={`font-medium ${item.expires !== "Never" ? "text-amber-600" : ""}`}
                        >
                          {item.expires}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-3 bg-muted/10 border-t border-border/40 gap-2">
                    <Button
                      size="sm"
                      className="flex-1 shadow-sm h-8 bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      <PlayCircle className="w-4 h-4 mr-2" /> Open
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 shrink-0 border-border/60 bg-background hover:bg-muted"
                        >
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuLabel>Manage Item</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <RefreshCw className="mr-2 h-4 w-4" /> Repair / Re-download
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <HardDrive className="mr-2 h-4 w-4" /> Move to SD Card
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Share2 className="mr-2 h-4 w-4" /> Share via Bluetooth
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive focus:bg-destructive/10 focus:text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" /> Remove from Device
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
