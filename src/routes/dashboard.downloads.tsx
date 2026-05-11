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
} from "lucide-react";

export const Route = createFileRoute("/dashboard/downloads")({
  component: DownloadsComponent,
});

function DownloadsComponent() {
  const activeDownloads = [
    {
      id: 1,
      title: "Module 5: Routing Protocols (Video Package)",
      course: "Networking Essentials",
      progress: 42,
      speed: "1.2 MB/s",
      remaining: "12 mins",
      size: "850 MB",
      status: "Downloading",
    },
    {
      id: 2,
      title: "Subnetting Cheat Sheet (PDF)",
      course: "Networking Essentials",
      progress: 0,
      speed: "Queued",
      remaining: "--",
      size: "2 MB",
      status: "Paused",
    },
  ];

  const completedDownloads = [
    {
      id: 3,
      title: "Module 4: Subnetting Architectures",
      size: "450 MB",
      date: "Today, 10:24 AM",
      path: "/internal/jifunzehub/ict/net",
    },
    {
      id: 4,
      title: "Workshop Safety Handbook",
      size: "12 MB",
      date: "Yesterday",
      path: "/internal/jifunzehub/mech/safety",
    },
  ];

  return (
    <DashboardLayout
      role="student"
      title="Download Manager"
      subtitle="Monitor active downloads and manage your offline course packages."
    >
      <div className="space-y-8">
        {/* Download Settings Bar */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="border-border/60 bg-background flex items-center justify-between p-4 px-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 text-primary rounded-lg">
                <Wifi className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <Label htmlFor="wifi-only" className="text-sm font-bold">
                  Wi-Fi Only
                </Label>
                <p className="text-[10px] text-muted-foreground">Pause on mobile data</p>
              </div>
            </div>
            <Switch id="wifi-only" defaultChecked />
          </Card>

          <Card className="border-border/60 bg-background flex items-center justify-between p-4 px-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/10 text-accent rounded-lg">
                <Settings className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <Label htmlFor="auto-download" className="text-sm font-bold">
                  Auto-Download
                </Label>
                <p className="text-[10px] text-muted-foreground">New lessons in active courses</p>
              </div>
            </div>
            <Switch id="auto-download" />
          </Card>

          <Card className="border-border/60 bg-background flex items-center justify-between p-4 px-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-muted text-muted-foreground rounded-lg">
                <HardDrive className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <p className="text-sm font-bold">Available Space</p>
                <p className="text-[10px] text-muted-foreground">3.4 GB remaining</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="text-xs h-8 text-primary">
              Manage
            </Button>
          </Card>
        </div>

        <Tabs defaultValue="active" className="w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <TabsList className="bg-muted/50 border border-border/50 h-10">
              <TabsTrigger value="active" className="text-xs sm:text-sm gap-2">
                Active{" "}
                <Badge className="h-4 w-4 p-0 flex items-center justify-center text-[10px] bg-accent">
                  2
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="completed" className="text-xs sm:text-sm">
                Completed
              </TabsTrigger>
              <TabsTrigger value="failed" className="text-xs sm:text-sm">
                Failed
              </TabsTrigger>
              <TabsTrigger value="scheduled" className="text-xs sm:text-sm">
                Scheduled
              </TabsTrigger>
            </TabsList>

            <div className="flex gap-2 w-full sm:w-auto">
              <Button size="sm" variant="outline" className="flex-1 sm:flex-none h-9">
                <Play className="w-3 h-3 mr-2" /> Resume All
              </Button>
              <Button size="sm" variant="outline" className="flex-1 sm:flex-none h-9">
                <Pause className="w-3 h-3 mr-2" /> Pause All
              </Button>
            </div>
          </div>

          <TabsContent value="active" className="m-0 space-y-4">
            {activeDownloads.map((item) => (
              <Card
                key={item.id}
                className="border-border/60 bg-background overflow-hidden hover:shadow-soft transition-all duration-300"
              >
                <div className="p-5 flex flex-col md:flex-row items-center gap-6">
                  <div className="h-16 w-16 bg-muted rounded-lg shrink-0 flex items-center justify-center relative overflow-hidden">
                    <FileVideo className="w-6 h-6 text-muted-foreground z-10" />
                    {item.status === "Downloading" && (
                      <div className="absolute inset-0 bg-primary/5 animate-pulse"></div>
                    )}
                  </div>

                  <div className="flex-1 w-full space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h4 className="font-bold text-sm leading-tight">{item.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {item.course} • {item.size}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right hidden sm:block">
                          <p className="text-xs font-bold">{item.speed}</p>
                          <p className="text-[10px] text-muted-foreground">{item.remaining} left</p>
                        </div>
                        <Badge
                          variant="outline"
                          className={`
                           ${item.status === "Downloading" ? "bg-primary/10 text-primary border-primary/20" : "bg-muted text-muted-foreground border-border"}
                         `}
                        >
                          {item.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Progress
                        value={item.progress}
                        className="h-2 bg-muted"
                        indicatorClassName="bg-primary"
                      />
                      <div className="flex justify-between sm:hidden">
                        <span className="text-[10px] font-medium text-muted-foreground">
                          {item.speed}
                        </span>
                        <span className="text-[10px] font-medium text-muted-foreground">
                          {item.remaining} left
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 shrink-0 w-full md:w-auto border-t md:border-t-0 pt-3 md:pt-0">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-9 w-9 rounded-full bg-muted/20 hover:bg-muted"
                      title={item.status === "Downloading" ? "Pause" : "Resume"}
                    >
                      {item.status === "Downloading" ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4" />
                      )}
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-9 w-9 rounded-full hover:bg-destructive/10 hover:text-destructive"
                      title="Cancel"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-9 w-9 rounded-full hover:bg-primary/10 hover:text-primary"
                      title="Prioritize"
                    >
                      <ArrowUp className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent
            value="completed"
            className="m-0 space-y-4 focus-visible:outline-none focus-visible:ring-0"
          >
            {completedDownloads.map((item) => (
              <Card
                key={item.id}
                className="border-border/60 bg-background overflow-hidden hover:shadow-soft transition-all duration-300"
              >
                <div className="p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-success/10 text-success rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm leading-tight">{item.title}</h4>
                      <p className="text-[10px] text-muted-foreground mt-0.5">
                        {item.size} • Completed {item.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 text-xs text-muted-foreground hover:text-foreground hidden md:flex"
                    >
                      <HardDrive className="w-3 h-3 mr-1" /> {item.path}
                    </Button>
                    <Button size="sm" variant="outline" className="h-8">
                      Open
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="failed" className="m-0 space-y-4">
            <Card className="border-destructive/20 bg-destructive/5">
              <div className="p-10 text-center space-y-4">
                <div className="w-12 h-12 bg-destructive/10 text-destructive rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold">Module 6: Troubleshooting (Videos)</h4>
                  <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                    Download failed due to connection timeout. Check your LAN connection to the
                    campus server.
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="border-destructive/30 text-destructive hover:bg-destructive/10"
                >
                  <RefreshCw className="w-4 h-4 mr-2" /> Retry Download
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
