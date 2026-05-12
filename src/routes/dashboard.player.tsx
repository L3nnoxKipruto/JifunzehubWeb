import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft,
  WifiOff,
  Download,
  RefreshCw,
  Moon,
  LogOut,
  CheckCircle2,
  PlayCircle,
  Lock,
  HardDrive,
  Play,
  Pause,
  Volume2,
  Maximize2,
  SkipForward,
  SkipBack,
  Settings,
  FileText,
  MessageSquare,
  Wrench,
  FileQuestion,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  Upload,
  CheckSquare,
  ListChecks,
  MonitorPlay,
  Save,
  FilePlus,
  ChevronDown,
  ChevronUp,
  PanelRightClose,
  PanelRightOpen,
  PanelLeftClose,
  PanelLeftOpen,
  CloudOff,
  FileCheck,
  Clock,
  Share2,
  Bookmark,
  Award,
  LaptopIcon,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/player")({
  head: () => ({ meta: [{ title: "Learning Workspace — JifunzeHub" }] }),
  component: LearningWorkspace,
});

function LearningWorkspace() {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [activeModule, setActiveModule] = useState(1);
  const [bookmarks, setBookmarks] = useState([
    { time: "02:15", text: "Calculation formula for daily load" },
    { time: "05:40", text: "Important: Depth of Discharge safety limits" },
  ]);
  const [competencyPoints, setCompetencyPoints] = useState(740);

  const modules = [
    {
      id: 1,
      title: "Module 1 — Solar Panel Fundamentals",
      duration: "45 min",
      competency: "Energy Harvesting Basics",
      lessons: [
        {
          id: 101,
          title: "Intro to Photovoltaics",
          dur: "10:15",
          type: "video",
          state: "completed",
          offline: true,
        },
        {
          id: 102,
          title: "Types of Solar Systems (Off-Grid/Grid-Tie)",
          dur: "15:20",
          type: "video",
          state: "completed",
          offline: true,
        },
        {
          id: 103,
          title: "Battery Sizing Fundamentals",
          dur: "12:05",
          type: "video",
          state: "current",
          offline: true,
        },
        {
          id: 104,
          title: "Solar Basics Quiz",
          dur: "10:00",
          type: "quiz",
          state: "locked",
          offline: false,
        },
      ],
    },
    {
      id: 2,
      title: "Module 2 — Inverter Configuration",
      duration: "1h 20m",
      competency: "Power Conversion Systems",
      lessons: [
        {
          id: 201,
          title: "Charge Controller Concepts",
          dur: "18:40",
          type: "video",
          state: "locked",
          offline: false,
        },
        {
          id: 202,
          title: "Configuring an Inverter",
          dur: "25:10",
          type: "video",
          state: "locked",
          offline: false,
        },
        {
          id: 203,
          title: "Practical Lab: Wiring Setup",
          dur: "45:00",
          type: "lab",
          state: "locked",
          offline: false,
        },
      ],
    },
  ];

  const recommendations = [
    { title: "Advanced Battery Maintenance", dur: "18:00", type: "video", pts: 50 },
    { title: "Solar Wiring Lab 2", dur: "30:00", type: "lab", pts: 120 },
  ];

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background font-sans text-sm selection:bg-primary/20">
      {/* TOP NAVIGATION BAR */}
      <header className="z-20 flex h-[4.25rem] shrink-0 items-center justify-between border-b border-border/60 bg-background/80 px-3 shadow-header backdrop-blur-xl sm:px-5">
        {/* Left: Branding & Breadcrumb */}
        <div className="flex w-1/3 min-w-0 items-center gap-3">
          <Link
            to="/dashboard/courses"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div className="hidden min-w-0 flex-col md:flex">
            <div className="flex items-center gap-2 text-[13px]">
              <span className="font-semibold tracking-tight text-primary">JifunzeHub</span>
              <span className="text-border">/</span>
              <span className="truncate font-medium text-muted-foreground">
                Solar Installation & Maintenance
              </span>
            </div>
          </div>
        </div>

        {/* Center: Current Context */}
        <div className="hidden w-1/3 min-w-0 flex-col items-center justify-center lg:flex">
          <p className="flex max-w-md items-center gap-2 text-center text-[15px] font-semibold tracking-tight">
            <span className="truncate">Battery Sizing Fundamentals</span>
            <Badge
              variant="success"
              className="h-6 shrink-0 gap-1 border-0 px-2 text-[10px] font-semibold"
            >
              <WifiOff className="h-3 w-3" />
              Offline ready
            </Badge>
          </p>
          <div className="mt-1.5 flex w-64 max-w-full items-center gap-2">
            <Progress value={32} className="h-1.5 flex-1 bg-muted/60" />
            <span className="text-[11px] font-semibold tabular-nums text-muted-foreground">
              32%
            </span>
          </div>
        </div>

        {/* Right: Actions & Notifications */}
        <div className="flex w-1/3 min-w-0 items-center justify-end gap-1.5 sm:gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-xl flex md:hidden"
            onClick={() => setLeftSidebarOpen(true)}
          >
            <ListChecks className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-xl hidden sm:flex"
            title="Sync Status"
          >
            <div className="relative">
              <RefreshCw className="w-5 h-5 text-muted-foreground" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-500 rounded-full border border-background"></div>
            </div>
          </Button>
          <Button
            variant="outline"
            className="hidden lg:flex rounded-xl font-bold border-border/60 shadow-sm h-9 px-4"
          >
            <Download className="w-4 h-4 mr-2" /> Save Offline
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-xl flex md:hidden"
            onClick={() => setRightSidebarOpen(true)}
          >
            <Wrench className="w-5 h-5" />
          </Button>
          <div className="h-6 w-px bg-border/60 mx-1 hidden sm:block"></div>
          <Button
            asChild
            variant="ghost"
            className="rounded-xl font-bold text-destructive hover:bg-destructive/10 h-9 px-4"
          >
            <Link to="/dashboard/courses">
              <LogOut className="w-4 h-4 sm:mr-2" /> <span className="hidden sm:inline">Exit</span>
            </Link>
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* MOBILE SIDEBAR BACKDROP */}
        {leftSidebarOpen && (
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 md:hidden"
            onClick={() => setLeftSidebarOpen(false)}
          />
        )}
        {rightSidebarOpen && (
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 md:hidden"
            onClick={() => setRightSidebarOpen(false)}
          />
        )}

        {/* LEFT COURSE SIDEBAR */}
        <aside
          className={`fixed md:relative inset-y-0 left-0 z-40 md:z-10 flex flex-col bg-card/95 md:bg-card/30 border-r border-border/40 transition-all duration-300 ease-in-out ${leftSidebarOpen ? "w-[280px] sm:w-80 translate-x-0" : "w-0 -translate-x-full md:translate-x-0"} overflow-hidden`}
        >
          <div className="p-5 border-b border-border/40 shrink-0 bg-card/50">
            <div className="aspect-video rounded-xl bg-muted overflow-hidden relative mb-4 border border-border/40 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=60"
                className="object-cover w-full h-full opacity-80"
                alt="Course"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex flex-col justify-end p-3">
                <Badge className="w-fit bg-primary text-white border-none text-[10px] font-black px-2 py-0.5 shadow-sm">
                  ELECTRICAL DEPT
                </Badge>
              </div>
            </div>
            <h2 className="font-black text-lg leading-tight mb-1">
              Solar Installation & Maintenance
            </h2>
            <p className="text-xs font-semibold text-muted-foreground mb-4">
              Dr. Omondi • 32 Lessons
            </p>
            <div className="flex gap-2">
              <Button
                className="flex-1 h-8 text-xs font-bold rounded-lg shadow-sm"
                variant="secondary"
              >
                <Download className="w-3 h-3 mr-1.5" /> Sync All
              </Button>
              <Button
                className="flex-1 h-8 text-xs font-bold rounded-lg shadow-sm border-border/60"
                variant="outline"
              >
                <CheckCircle2 className="w-3 h-3 mr-1.5 text-success" /> Marked
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin">
            {modules.map((module) => (
              <div key={module.id} className="border-b border-border/40">
                <button
                  onClick={() => setActiveModule(activeModule === module.id ? 0 : module.id)}
                  className="w-full p-4 flex items-center justify-between hover:bg-muted/30 transition-colors text-left"
                >
                  <div>
                    <h4 className="font-black text-sm text-foreground/90">{module.title}</h4>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">
                      4 Lessons • {module.duration}
                    </p>
                  </div>
                  {activeModule === module.id ? (
                    <ChevronUp className="w-4 h-4 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>

                {activeModule === module.id && (
                  <div className="bg-muted/10 pb-2">
                    {module.lessons.map((lesson, idx) => (
                      <button
                        key={idx}
                        className={`w-full p-3 pl-4 flex items-start gap-3 hover:bg-muted/50 transition-colors text-left ${lesson.state === "current" ? "bg-primary/5 border-l-2 border-primary" : "border-l-2 border-transparent"}`}
                      >
                        <div className="mt-0.5 shrink-0">
                          {lesson.state === "completed" && (
                            <CheckCircle2 className="w-4 h-4 text-success" />
                          )}
                          {lesson.state === "current" && (
                            <PlayCircle className="w-4 h-4 text-primary" />
                          )}
                          {lesson.state === "locked" && (
                            <Lock className="w-4 h-4 text-muted-foreground/50" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p
                            className={`text-xs truncate ${lesson.state === "current" ? "font-black text-primary" : lesson.state === "locked" ? "font-medium text-muted-foreground/70" : "font-bold"}`}
                          >
                            {lesson.title}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[10px] font-semibold text-muted-foreground flex items-center gap-1">
                              {lesson.type === "video" ? (
                                <Play className="w-3 h-3" />
                              ) : lesson.type === "quiz" ? (
                                <FileQuestion className="w-3 h-3" />
                              ) : (
                                <Wrench className="w-3 h-3" />
                              )}
                              {lesson.dur}
                            </span>
                          </div>
                        </div>
                        {lesson.offline && (
                          <WifiOff className="w-3 h-3 text-success shrink-0 mt-0.5" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* SIDEBAR TOGGLE BUTTON - Hidden on very small screens, use top nav instead if needed, but let's keep it functional */}
        <button
          onClick={() => setLeftSidebarOpen(!leftSidebarOpen)}
          className="hidden md:flex absolute top-1/2 -translate-y-1/2 z-20 bg-card border border-border/40 rounded-r-xl shadow-lg p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
          style={{ left: leftSidebarOpen ? "320px" : "0px", transition: "left 0.3s ease-in-out" }}
        >
          {leftSidebarOpen ? (
            <PanelLeftClose className="w-4 h-4" />
          ) : (
            <PanelLeftOpen className="w-4 h-4" />
          )}
        </button>

        {/* MAIN LEARNING AREA */}
        <main className="flex-1 flex flex-col overflow-hidden relative bg-card/10">
          <div className="flex-1 overflow-y-auto pb-24 scrollbar-thin">
            {/* THE VIDEO PLAYER */}
            <div className="w-full bg-black relative group flex items-center justify-center overflow-hidden aspect-video max-h-[65vh] shadow-2xl">
              {/* Simulated Video Feed */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/40 to-slate-900 flex flex-col items-center justify-center">
                <div
                  className="w-32 h-32 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-md border border-white/10 cursor-pointer hover:bg-white/10 hover:scale-105 transition-all"
                  onClick={() => setPlaying(!playing)}
                >
                  {playing ? (
                    <Pause className="w-12 h-12 text-white" />
                  ) : (
                    <Play className="w-12 h-12 text-white ml-2" />
                  )}
                </div>
              </div>

              {/* Player Controls (visible on hover or paused) */}
              <div
                className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 pt-12 transition-opacity duration-300 ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
              >
                {/* Progress Bar with Markers */}
                <div className="relative h-2 bg-white/20 rounded-full mb-4 cursor-pointer group/progress">
                  <div className="absolute top-0 left-0 h-full bg-primary rounded-full w-[45%] z-10"></div>

                  {/* Bookmark Markers */}
                  <div
                    className="absolute top-0 left-[20%] w-1.5 h-full bg-white/60 z-20"
                    title="Note: Calculation formula"
                  ></div>
                  <div
                    className="absolute top-0 left-[48%] w-1.5 h-full bg-amber-500 z-20"
                    title="Bookmark: DoD safety limits"
                  ></div>

                  <div className="absolute top-1/2 left-[45%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full z-30 opacity-0 group-hover/progress:opacity-100 shadow-glow transition-opacity"></div>
                </div>

                {/* Control Buttons */}
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setPlaying(!playing)}
                      className="hover:text-primary transition-colors"
                    >
                      {playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>
                    <button className="hover:text-primary transition-colors">
                      <SkipBack className="w-5 h-5" />
                    </button>
                    <button className="hover:text-primary transition-colors">
                      <SkipForward className="w-5 h-5" />
                    </button>
                    <div className="flex items-center gap-2 group/volume cursor-pointer">
                      <Volume2 className="w-5 h-5 hover:text-primary transition-colors" />
                      <div className="w-0 overflow-hidden group-hover/volume:w-16 transition-all duration-300">
                        <div className="w-16 h-1 bg-white/30 rounded-full relative">
                          <div className="absolute top-0 left-0 h-full bg-white w-2/3 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold font-mono opacity-80">
                      05:24 / 12:05
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white hover:text-primary hover:bg-white/10 font-black text-[10px] uppercase tracking-widest"
                      onClick={() =>
                        setBookmarks([...bookmarks, { time: "05:24", text: "New Bookmark" }])
                      }
                    >
                      <Bookmark className="w-3.5 h-3.5 mr-2" /> Add Bookmark
                    </Button>
                    <Badge
                      variant="outline"
                      className="hidden sm:flex border-white/20 bg-black/40 text-[10px] text-white"
                    >
                      <WifiOff className="w-3 h-3 mr-1.5 text-success" /> Cached
                    </Badge>
                    <button className="hover:text-primary transition-colors">
                      <Settings className="w-5 h-5" />
                    </button>
                    <button className="hover:text-primary transition-colors">
                      <Maximize2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* LESSON META & TABS CONTAINER */}
            <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
                    Battery Sizing Fundamentals
                  </h1>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-muted-foreground">
                    <span className="flex items-center gap-1.5 text-primary bg-primary/10 px-2 py-1 rounded-md">
                      <BookOpen className="w-3 h-3" /> Module 1
                    </span>
                    <span className="flex items-center gap-1.5 bg-muted/50 px-2 py-1 rounded-md">
                      <Clock className="w-3 h-3" /> 12 mins
                    </span>
                    <span className="flex items-center gap-1.5 bg-muted/50 px-2 py-1 rounded-md">
                      Updated Sep 12
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="rounded-xl font-bold shadow-sm h-10">
                    <Share2 className="w-4 h-4 mr-2" /> Share
                  </Button>
                  <Button className="rounded-xl font-bold shadow-sm h-10 bg-primary">
                    <CheckCircle2 className="w-4 h-4 mr-2" /> Complete Lesson
                  </Button>
                </div>
              </div>

              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start border-b border-border/40 rounded-none bg-transparent h-auto p-0 space-x-6 overflow-x-auto overflow-y-hidden">
                  <TabsTrigger
                    value="overview"
                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 pb-3 font-bold text-sm"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="notes"
                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 pb-3 font-bold text-sm"
                  >
                    <FileText className="w-4 h-4 mr-1.5" /> Notes
                  </TabsTrigger>
                  <TabsTrigger
                    value="resources"
                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 pb-3 font-bold text-sm"
                  >
                    <HardDrive className="w-4 h-4 mr-1.5" /> Resources
                  </TabsTrigger>
                  <TabsTrigger
                    value="lab"
                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 pb-3 font-bold text-sm"
                  >
                    <Wrench className="w-4 h-4 mr-1.5 text-amber-500" /> TVET Lab
                  </TabsTrigger>
                  <TabsTrigger
                    value="qa"
                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 pb-3 font-bold text-sm"
                  >
                    <MessageSquare className="w-4 h-4 mr-1.5" /> Q&A
                  </TabsTrigger>
                </TabsList>

                {/* OVERVIEW TAB */}
                <TabsContent
                  value="overview"
                  className="py-8 space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-500"
                >
                  <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground leading-relaxed font-medium">
                    <p className="text-base text-foreground font-semibold">
                      In this lesson, we explore the foundational concepts of battery sizing, the
                      cornerstone of off-grid solar systems.
                    </p>
                    <p className="mt-4">
                      You will learn how to calculate daily load, recognize depth of discharge, and
                      select the correct battery type. This theoretical foundation is critical
                      before we move on to practical wiring in Module 2.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="md:col-span-2 border-border/40 shadow-sm bg-card/40 backdrop-blur-sm rounded-2xl p-6">
                      <h4 className="font-black text-sm mb-4 uppercase tracking-widest text-primary flex items-center gap-2">
                        <Award className="w-4 h-4" /> Competency Unit Progress
                      </h4>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <div className="flex justify-between items-end">
                            <p className="text-xs font-bold text-muted-foreground uppercase">
                              Energy Harvesting Basics
                            </p>
                            <p className="text-lg font-black text-primary">85%</p>
                          </div>
                          <Progress value={85} className="h-2 bg-muted/50" />
                        </div>
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-success/5 border border-success/20">
                          <div className="p-2 rounded-lg bg-success/10 text-success">
                            <Zap className="w-4 h-4" />
                          </div>
                          <p className="text-xs font-bold text-success">
                            Completing this lesson will unlock the "Solar Technician Level 1"
                            digital badge.
                          </p>
                        </div>
                      </div>
                    </Card>

                    <Card className="border-border/40 shadow-sm bg-card/40 backdrop-blur-sm rounded-2xl p-6 flex flex-col justify-between">
                      <h4 className="font-black text-sm mb-4 uppercase tracking-widest text-amber-500 flex items-center gap-2">
                        <Clock className="w-4 h-4" /> Effort Log
                      </h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-bold text-muted-foreground">
                            Focus Time
                          </span>
                          <span className="text-sm font-black">2h 15m</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-bold text-muted-foreground">
                            Practical Work
                          </span>
                          <span className="text-sm font-black">45m</span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        className="w-full text-[10px] font-black uppercase tracking-widest mt-4"
                      >
                        View Full Analytics
                      </Button>
                    </Card>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-black text-sm uppercase tracking-widest text-muted-foreground">
                      Recommended Next Steps
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {recommendations.map((rec) => (
                        <Card
                          key={rec.title}
                          className="border-border/40 bg-card/40 backdrop-blur-sm rounded-2xl p-4 hover:border-primary/40 transition-all cursor-pointer group"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-white transition-colors">
                                {rec.type === "video" ? (
                                  <Play className="w-4 h-4" />
                                ) : (
                                  <Wrench className="w-4 h-4" />
                                )}
                              </div>
                              <div>
                                <h5 className="text-sm font-bold truncate max-w-[150px]">
                                  {rec.title}
                                </h5>
                                <p className="text-[10px] font-black text-muted-foreground uppercase">
                                  {rec.dur} • +{rec.pts} PTS
                                </p>
                              </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all" />
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* NOTES TAB */}
                <TabsContent
                  value="notes"
                  className="py-8 animate-in fade-in slide-in-from-bottom-2 duration-500"
                >
                  <Card className="border-border/40 shadow-sm bg-card/40 backdrop-blur-sm rounded-2xl overflow-hidden">
                    <div className="bg-muted/30 p-3 border-b border-border/40 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-muted-foreground bg-background px-3 py-1.5 rounded-lg border border-border/40 shadow-sm">
                          B
                        </span>
                        <span className="text-xs font-bold text-muted-foreground bg-background px-3 py-1.5 rounded-lg border border-border/40 shadow-sm italic">
                          I
                        </span>
                        <span className="text-xs font-bold text-muted-foreground bg-background px-3 py-1.5 rounded-lg border border-border/40 shadow-sm underline">
                          U
                        </span>
                        <div className="w-px h-4 bg-border/60 mx-1"></div>
                        <span className="text-xs font-bold flex items-center gap-1.5 text-primary cursor-pointer hover:bg-primary/10 px-2 py-1 rounded-md transition-colors">
                          <Clock className="w-3 h-3" /> Add Timestamp
                        </span>
                      </div>
                      <Badge
                        variant="outline"
                        className="text-[10px] font-semibold bg-success/10 text-success border-success/20"
                      >
                        <CheckCircle2 className="w-3 h-3 mr-1" /> Saved Locally
                      </Badge>
                    </div>
                    <Textarea
                      placeholder="Type your notes here. They are automatically saved offline and synced when you reconnect..."
                      className="min-h-[300px] border-0 focus-visible:ring-0 p-6 text-sm font-medium resize-none bg-transparent rounded-none"
                    />
                    <div className="p-4 border-t border-border/40 bg-muted/10 flex justify-between items-center">
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest flex items-center gap-1.5">
                        <CloudOff className="w-3 h-3" /> Waiting to sync
                      </p>
                      <Button size="sm" className="rounded-lg font-bold shadow-sm">
                        <Save className="w-4 h-4 mr-2" /> Export as PDF
                      </Button>
                    </div>
                  </Card>
                </TabsContent>

                {/* RESOURCES TAB */}
                <TabsContent
                  value="resources"
                  className="py-8 animate-in fade-in slide-in-from-bottom-2 duration-500"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      {
                        name: "Battery Sizing Cheat Sheet",
                        type: "PDF",
                        size: "2.4 MB",
                        offline: true,
                      },
                      {
                        name: "Load Calculation Worksheet",
                        type: "PDF",
                        size: "1.1 MB",
                        offline: true,
                      },
                      { name: "Cable Sizing Logic", type: "Excel", size: "450 KB", offline: false },
                    ].map((res) => (
                      <Card
                        key={res.name}
                        className="border-border/40 shadow-sm bg-card/40 backdrop-blur-sm rounded-2xl hover:border-primary/40 transition-colors group cursor-pointer"
                      >
                        <CardContent className="p-5 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                              <FileCheck className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="font-bold text-sm">{res.name}</h4>
                              <div className="flex items-center gap-2 mt-0.5">
                                <span className="text-[10px] font-black text-muted-foreground uppercase">
                                  {res.type} • {res.size}
                                </span>
                                {res.offline && (
                                  <Badge
                                    variant="outline"
                                    className="text-[9px] h-4 px-1 border-success/30 text-success"
                                  >
                                    OFFLINE
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" className="rounded-xl">
                            <Download className="w-4 h-4 text-muted-foreground" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* PRACTICAL LAB TAB (TVET FOCUS) */}
                <TabsContent
                  value="lab"
                  className="py-8 space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500"
                >
                  <div className="p-5 bg-amber-500/5 border border-amber-500/20 rounded-2xl flex flex-col sm:flex-row gap-5 relative overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
                      <Wrench className="w-40 h-40" />
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                      <Wrench className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-black text-lg text-amber-500 mb-1 tracking-tight">
                        Competency Lab: Battery Wiring Setup
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground leading-relaxed max-w-2xl">
                        This practical assignment requires you to physically connect a battery bank
                        and perform basic voltage testing. You must submit evidence of your working
                        setup.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-black text-sm mb-3 flex items-center gap-2">
                          <ListChecks className="w-4 h-4 text-primary" /> Required Equipment
                        </h4>
                        <div className="space-y-2">
                          {[
                            "12V 100Ah Battery",
                            "Jumper Cables",
                            "Multimeter",
                            "Safety Gloves",
                          ].map((eq) => (
                            <div
                              key={eq}
                              className="flex items-center gap-3 p-3 rounded-xl border border-border/40 bg-card/30"
                            >
                              <div className="w-4 h-4 rounded border border-muted-foreground/50"></div>
                              <span className="text-sm font-semibold">{eq}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="p-4 rounded-xl border border-destructive/20 bg-destructive/5 text-destructive-foreground">
                        <h4 className="font-bold text-xs flex items-center gap-2 mb-1">
                          <AlertCircle className="w-4 h-4" /> Safety Warning
                        </h4>
                        <p className="text-xs font-medium opacity-90">
                          Ensure all devices are powered off before connecting console and ethernet
                          cables to prevent port damage.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-black text-sm flex items-center gap-2">
                        <MonitorPlay className="w-4 h-4 text-primary" /> Evidence Submission
                      </h4>
                      <div className="border-2 border-dashed border-border/60 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-muted/20 transition-colors cursor-pointer bg-card/20 group">
                        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Upload className="w-8 h-8" />
                        </div>
                        <p className="font-black text-base">Upload Lab Photos or Video</p>
                        <p className="text-xs font-semibold text-muted-foreground mt-2 max-w-[250px] leading-relaxed">
                          Attach a clear photo of your running config screen and the physical
                          connections. Max 50MB.
                        </p>
                        <Button className="mt-6 rounded-xl font-bold px-8 shadow-sm">
                          Select Media
                        </Button>
                      </div>
                      <p className="text-[10px] font-bold text-center text-muted-foreground uppercase tracking-widest">
                        <WifiOff className="w-3 h-3 inline mr-1 text-amber-500" /> Submissions queue
                        offline automatically
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* BOTTOM LESSON NAVIGATION (STICKY) */}
          <div className="h-20 shrink-0 border-t border-border/40 bg-card/80 backdrop-blur-lg flex items-center justify-between px-4 sm:px-8 z-20 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)] absolute bottom-0 left-0 right-0">
            <Button
              variant="outline"
              className="rounded-xl font-bold h-11 px-4 sm:px-6 shadow-sm border-border/60 hidden sm:flex"
            >
              <ChevronLeft className="w-4 h-4 mr-2" /> Previous Lesson
            </Button>
            <Button variant="outline" size="icon" className="rounded-xl h-11 w-11 sm:hidden">
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex flex-col items-center text-center max-w-[200px] sm:max-w-none">
              <p className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-1 flex items-center gap-1.5">
                <HardDrive className="w-3 h-3 text-primary" /> Auto-saved Locally
              </p>
              <p className="text-xs font-semibold text-muted-foreground truncate">
                Sync queues active. Safe to close.
              </p>
            </div>

            <Button className="rounded-xl font-bold h-11 px-4 sm:px-6 shadow-sm bg-foreground text-background hover:bg-foreground/90 hidden sm:flex">
              Next Lesson <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="icon"
              className="rounded-xl h-11 w-11 bg-foreground text-background sm:hidden"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </main>

        {/* RIGHT TOOL PANEL TOGGLE - Desktop only */}
        <button
          onClick={() => setRightSidebarOpen(!rightSidebarOpen)}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-card border border-border/40 rounded-l-xl shadow-lg p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
          style={{
            right: rightSidebarOpen ? "288px" : "0px",
            transition: "right 0.3s ease-in-out",
          }}
        >
          {rightSidebarOpen ? (
            <PanelRightClose className="w-4 h-4" />
          ) : (
            <PanelRightOpen className="w-4 h-4" />
          )}
        </button>

        <aside
          className={`fixed md:relative inset-y-0 right-0 z-40 md:z-10 flex flex-col bg-card/95 md:bg-card/30 border-l border-border/40 transition-all duration-300 ease-in-out ${rightSidebarOpen ? "w-[280px] translate-x-0" : "w-0 translate-x-full md:translate-x-0"} overflow-hidden`}
        >
          <div className="p-5 border-b border-border/40 shrink-0 bg-card/50">
            <h3 className="font-black text-base flex items-center gap-2">
              <CheckSquare className="w-4 h-4 text-primary" /> Study Tools
            </h3>
          </div>
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            <div className="space-y-3">
              <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest flex items-center justify-between">
                Bookmarks{" "}
                <Badge variant="secondary" className="text-[9px] h-4">
                  {bookmarks.length}
                </Badge>
              </h4>
              <div className="space-y-2">
                {bookmarks.map((bm, i) => (
                  <Card
                    key={i}
                    className="border-border/40 bg-background/50 hover:bg-muted/20 transition-colors cursor-pointer rounded-xl group"
                  >
                    <CardContent className="p-3">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-[10px] font-black text-primary bg-primary/10 px-2 py-0.5 rounded-md">
                          {bm.time}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Share2 className="w-3 h-3" />
                        </Button>
                      </div>
                      <p className="text-xs font-semibold leading-relaxed line-clamp-2">
                        {bm.text}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest">
                Glossary
              </h4>
              <Card className="border-border/40 bg-background/50 shadow-sm rounded-xl">
                <CardContent className="p-4 space-y-3">
                  <div className="relative">
                    <Input
                      className="h-8 text-xs rounded-lg bg-card"
                      placeholder="Search term..."
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary">Depth of Discharge (DoD)</p>
                    <p className="text-xs font-medium text-muted-foreground mt-1 leading-relaxed">
                      The percentage of a battery's capacity that has been used relative to its
                      total capacity.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest flex items-center justify-between">
                Sync Health{" "}
                <Badge
                  variant="outline"
                  className="text-[9px] border-success/30 text-success bg-success/10"
                >
                  STABLE
                </Badge>
              </h4>
              <Card className="border-border/40 bg-background/50 shadow-sm rounded-xl overflow-hidden">
                <div className="h-1 w-full bg-success/20">
                  <div className="h-full bg-success w-full animate-pulse"></div>
                </div>
                <CardContent className="p-4 space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-muted-foreground">Last synced</span>
                    <span>2 mins ago</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-muted-foreground">Pending uploads</span>
                    <span className="text-amber-500">1 Item</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-muted-foreground">Local Storage</span>
                    <span>1.2GB Used</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
