import { Link, useRouterState } from "@tanstack/react-router";
import { ReactNode, useState, useEffect } from "react";
import {
  LayoutDashboard,
  BookOpen,
  Library,
  ClipboardList,
  FileCheck,
  Award,
  Download,
  MessageSquare,
  RefreshCw,
  Settings,
  Menu,
  Bell,
  Search,
  GraduationCap,
  Users,
  Building2,
  BarChart3,
  Server,
  FolderKanban,
  Wrench,
  WifiOff,
  X,
  LogOut,
  Globe,
  CloudLightning,
  Zap,
  MessageCircle,
  PlayCircle,
  HardDrive,
  Wifi,
  Activity,
  CheckCircle2,
  ChevronDown,
  Plus,
  FileUp,
  Package,
  History,
  Usb,
  ShieldCheck,
  AlertTriangle,
  Monitor,
  Database,
  ChevronRight,
  Briefcase,
} from "lucide-react";
import { Logo } from "@/components/site/Logo";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

type Item = { to: string; label: string; icon: any };

const studentNav: Item[] = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/dashboard/courses", label: "My Courses", icon: BookOpen },
  { to: "/dashboard/offline-library", label: "Offline Library", icon: Library },
  { to: "/dashboard/assignments", label: "Assignments", icon: ClipboardList },
  { to: "/dashboard/assessments", label: "Assessments", icon: FileCheck },
  { to: "/dashboard/certificates", label: "Certificates", icon: Award },
  { to: "/dashboard/downloads", label: "Downloads", icon: Download },
  { to: "/dashboard/messages", label: "Messages", icon: MessageSquare },
  { to: "/dashboard/sync", label: "Sync Center", icon: RefreshCw },
  { to: "/dashboard/settings", label: "Settings", icon: Settings },
];

const lecturerNav: Item[] = [
  { to: "/lecturer", label: "Overview", icon: LayoutDashboard },
  { to: "/lecturer/courses", label: "Courses", icon: BookOpen },
  { to: "/lecturer/builder", label: "Course Builder", icon: FolderKanban },
  { to: "/lecturer/learners", label: "Learners", icon: Users },
  { to: "/lecturer/assessments", label: "Assessments", icon: FileCheck },
  { to: "/lecturer/sync", label: "Sync Reports", icon: History },
];

const adminNav: Item[] = [
  { to: "/admin", label: "Overview", icon: LayoutDashboard },
  { to: "/admin/departments", label: "Departments", icon: Building2 },
  { to: "/admin/students", label: "Students", icon: GraduationCap },
  { to: "/admin/lecturers", label: "Lecturers", icon: Users },
  { to: "/admin/courses", label: "Courses", icon: BookOpen },
  { to: "/admin/local-server", label: "Local Server", icon: Server },
  { to: "/admin/devices", label: "Devices", icon: Wrench },
  { to: "/admin/analytics", label: "Analytics", icon: BarChart3 },
];

const navMap = { student: studentNav, lecturer: lecturerNav, admin: adminNav };
const titleMap = { student: "Student", lecturer: "Lecturer", admin: "Administrator" };

export function DashboardLayout({
  role = "student",
  children,
  title,
  subtitle,
}: {
  role?: "student" | "lecturer" | "admin";
  children: ReactNode;
  title?: string;
  subtitle?: string;
}) {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const items = navMap[role];

  const userProfile = {
    student: {
      name: "Amina Hussein",
      email: "amina.h@kisumupoly.ac.ke",
      initials: "AH",
      dept: "ICT Dept",
    },
    lecturer: {
      name: "Lecturer James",
      email: "james.m@kisumupoly.ac.ke",
      initials: "JM",
      dept: "Engineering",
    },
    admin: {
      name: "Amina Hussein",
      email: "amina.h@kisumupoly.ac.ke",
      initials: "AH",
      dept: "Admin Office",
    },
  }[role];

  return (
    <div className="flex min-h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-sidebar text-sidebar-foreground shadow-2xl transition-transform lg:static lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-sidebar-border px-5">
          <div className="flex items-center gap-2 font-bold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-accent text-accent-foreground shadow-sm">
              <GraduationCap className="h-4 w-4" />
            </span>
            <span className="text-lg">JifunzeHub</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-sidebar-foreground lg:hidden"
            onClick={() => setOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* User Profile Area */}
        <div className="px-6 pt-8 pb-4">
          <div className="flex items-center gap-4 p-4 rounded-3xl bg-white/5 border border-white/10 shadow-lg group cursor-pointer transition-all hover:bg-white/10">
            <div className="relative">
              <Avatar className="h-12 w-12 border-2 border-primary/20 transition-transform group-hover:scale-105">
                <AvatarFallback className="bg-primary text-primary-foreground font-black text-lg">
                  {userProfile.initials}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-sidebar bg-success shadow-sm"></div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-black text-sm truncate leading-tight">{userProfile.name}</p>
              <p className="text-[10px] text-sidebar-foreground/50 mt-1 uppercase tracking-widest font-bold truncate">
                {role === "student" ? "Student • ICT Dept" : role === "lecturer" ? "Lecturer • Engineering" : "Administrator"}
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-4 custom-scrollbar">
          <nav className="space-y-1">
            {items.map((item) => {
              const active = path === item.to || path.startsWith(item.to + "/");
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
                      : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`h-4 w-4 transition-transform duration-200 ${active ? "scale-110 text-accent" : "group-hover:scale-110"}`}
                    />
                    {item.label}
                  </div>
                  {item.label === "Messages" && (
                    <Badge className="h-5 w-5 rounded-full p-0 flex items-center justify-center bg-accent text-accent-foreground">
                      3
                    </Badge>
                  )}
                  {item.label === "Assignments" && (
                    <Badge variant="secondary" className="bg-sidebar-border text-xs px-1.5 py-0">
                      2 Due
                    </Badge>
                  )}
                  {role === "lecturer" && item.label === "Learners" && (
                    <Badge variant="secondary" className="bg-sidebar-border text-xs px-1.5 py-0">
                      12 New
                    </Badge>
                  )}
                  {(role === "lecturer" || role === "admin") && item.label.includes("Sync") && (
                    <Badge
                      variant="destructive"
                      className="h-2 w-2 rounded-full p-0 animate-pulse"
                    ></Badge>
                  )}
                  {role === "admin" && item.label === "Devices" && (
                    <Badge
                      variant="secondary"
                      className="bg-sidebar-border text-xs px-1.5 py-0 font-bold"
                    >
                      18
                    </Badge>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Teaching Progress Ring for Lecturer */}
        {role === "lecturer" && (
          <div className="px-5 mb-4">
            <div className="bg-sidebar-accent/30 rounded-xl p-3 border-sidebar-border/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-sidebar-foreground/50">
                  Teaching Progress
                </span>
                <span className="text-xs font-bold text-accent">78%</span>
              </div>
              <Progress
                value={78}
                className="h-1 bg-sidebar-border"
                indicatorClassName="bg-accent"
              />
            </div>
          </div>
        )}

        {/* Admin Infrastructure Health Stats */}
        {role === "admin" && (
          <div className="px-5 mb-4 space-y-3">
            <div className="bg-sidebar-accent/20 rounded-xl p-3 border border-sidebar-border/30">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Server className="w-3 h-3 text-primary" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-sidebar-foreground/60">
                    Local Server
                  </span>
                </div>
                <span className="text-[9px] font-bold text-success uppercase">98% UP</span>
              </div>
              <Progress
                value={98}
                className="h-1 bg-sidebar-border"
                indicatorClassName="bg-primary"
              />
            </div>
          </div>
        )}

        {/* Offline Panel / Bottom Status */}
        <div className="mt-auto m-4 rounded-[2rem] bg-amber-500/10 border border-amber-500/20 p-5 backdrop-blur-md overflow-hidden relative group">
           <div className="absolute -top-4 -right-4 opacity-5 transition-transform group-hover:rotate-12">
              <WifiOff className="w-20 h-20" />
           </div>
           <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                 <div className="flex items-center gap-2">
                    <div className="relative flex h-2 w-2">
                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                       <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </div>
                    <span className="text-xs font-black text-amber-600 uppercase tracking-widest">Working Offline</span>
                 </div>
                 <Badge variant="outline" className="h-5 px-1.5 border-amber-500/30 text-[9px] font-black text-amber-700 bg-amber-500/5">LOCAL</Badge>
              </div>

              <div className="space-y-2">
                 <p className="text-[10px] font-bold text-amber-700/70 leading-relaxed">
                    3 lessons cached. Changes will sync when campus LAN is detected.
                 </p>
                 <Progress value={33} className="h-1 bg-amber-500/20" indicatorClassName="bg-amber-500" />
              </div>

              <Button size="sm" className="w-full h-8 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-black text-[10px] uppercase tracking-widest shadow-lg shadow-amber-500/20">
                 Force Sync
              </Button>
           </div>
        </div>
      </aside>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex min-h-screen flex-1 flex-col overflow-hidden bg-muted/20">
        {/* Top Navbar */}
        <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-4 border-b border-border bg-background/80 px-4 backdrop-blur-xl sm:gap-6 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0 lg:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="flex items-center gap-2 mr-auto">
            {role === "admin" ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hidden md:flex h-9 border-border/60 bg-muted/30 hover:bg-muted gap-2 font-bold"
                  >
                    <Building2 className="w-4 h-4 text-primary" />
                    <span>Kisumu Polytechnic</span>
                    <ChevronDown className="w-3 h-3 text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64">
                  <DropdownMenuLabel>Switch Institution</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="bg-muted font-bold">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-success" /> Kisumu Polytechnic (Main)
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Building2 className="w-4 h-4 mr-2" /> Kisumu Poly - Annex
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Building2 className="w-4 h-4 mr-2" /> Siaya TVET Branch
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-primary font-bold">
                    <Plus className="w-4 h-4 mr-2" /> Add New Campus
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Badge
                variant="outline"
                className="hidden md:flex items-center gap-1.5 border-border/60 bg-muted/50 text-muted-foreground hover:bg-muted font-normal py-1"
              >
                <Building2 className="w-3.5 h-3.5" /> Kisumu Polytechnic
              </Badge>
            )}

            <div className="hidden lg:flex relative w-64 xl:w-96 ml-4">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={
                  role === "admin"
                    ? "Search students, staff, server logs..."
                    : role === "lecturer"
                      ? "Search learners, courses, materials..."
                      : "Search curriculum..."
                }
                className="h-9 w-full bg-muted/40 pl-9 border-border/50 focus-visible:ring-accent/50"
              />
              <kbd className="pointer-events-none absolute right-2 top-2.5 hidden h-4 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Quick Actions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden sm:flex h-9 border-border/60 bg-background hover:bg-muted gap-2"
                >
                  <Zap className="h-4 w-4 text-accent" />
                  <span className="font-bold">Quick Actions</span>
                  <ChevronDown className="h-3 w-3 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Instant Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {role === "admin" ? (
                  <>
                    <DropdownMenuItem>
                      <Plus className="mr-2 h-4 w-4 text-primary" /> Add Student
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Users className="mr-2 h-4 w-4 text-primary" /> Add Lecturer
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Building2 className="mr-2 h-4 w-4 text-accent" /> Create Department
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <BookOpen className="mr-2 h-4 w-4 text-accent" /> Create Course
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Package className="mr-2 h-4 w-4 text-success" /> Deploy Offline Pkg
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <RefreshCw className="mr-2 h-4 w-4 text-success" /> Sync Institution
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <BarChart3 className="mr-2 h-4 w-4" /> Generate Reports
                    </DropdownMenuItem>
                  </>
                ) : role === "lecturer" ? (
                  <>
                    <DropdownMenuItem>
                      <Plus className="mr-2 h-4 w-4 text-primary" /> Create Course
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <FileUp className="mr-2 h-4 w-4" /> Upload Materials
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Package className="mr-2 h-4 w-4 text-accent" /> Generate Offline Pkg
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <RefreshCw className="mr-2 h-4 w-4 text-success" /> Sync Now
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Usb className="mr-2 h-4 w-4" /> Export via USB
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <FileCheck className="mr-2 h-4 w-4" /> Create Assessment
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem>
                      <PlayCircle className="mr-2 h-4 w-4 text-primary" /> Resume "Routing
                      Protocols"
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Download className="mr-2 h-4 w-4" /> Download Pending Lessons
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <RefreshCw className="mr-2 h-4 w-4 text-success" /> Force Sync Now
                    </DropdownMenuItem>
                  </>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <MessageCircle className="mr-2 h-4 w-4" /> Message Support
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language & Theme */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-muted">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="font-bold bg-muted/50">English (EN)</DropdownMenuItem>
                <DropdownMenuItem>Kiswahili (SW)</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <ThemeToggle />

            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative h-9 w-9 rounded-full">
                  <Bell className="h-5 w-5 text-muted-foreground" />
                  <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-destructive border-2 border-background"></span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 shadow-2xl">
                <DropdownMenuLabel className="flex justify-between items-center py-3">
                  <span className="text-sm font-black uppercase tracking-widest">
                    Institution Alerts
                  </span>
                  <Badge className="bg-accent text-[10px] font-bold">2 New</Badge>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="max-h-[350px] overflow-y-auto hide-scrollbar">
                  {role === "admin" && (
                    <>
                      <DropdownMenuItem className="flex flex-col items-start gap-1 p-3 cursor-pointer">
                        <div className="flex items-center gap-2 w-full">
                          <div className="h-2 w-2 rounded-full bg-destructive shrink-0"></div>
                          <p className="font-bold text-sm">Server Backup Failed</p>
                          <span className="text-[10px] text-muted-foreground ml-auto">15m ago</span>
                        </div>
                        <p className="text-xs text-muted-foreground pl-4 line-clamp-2">
                          Local server was unable to perform scheduled backup to the cloud. No
                          internet connection.
                        </p>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                    </>
                  )}
                  <DropdownMenuItem className="flex flex-col items-start gap-1 p-3 cursor-pointer">
                    <div className="flex items-center gap-2 w-full">
                      <div className="h-2 w-2 rounded-full bg-accent shrink-0"></div>
                      <p className="font-bold text-sm">
                        {role === "lecturer"
                          ? "New Learner Submission"
                          : role === "admin"
                            ? "New Device Registered"
                            : "Assignment Graded"}
                      </p>
                      <span className="text-[10px] text-muted-foreground ml-auto">10m ago</span>
                    </div>
                    <p className="text-xs text-muted-foreground pl-4 line-clamp-2">
                      {role === "lecturer"
                        ? "Amina Hussein submitted 'Packet Tracer Lab 2'."
                        : role === "admin"
                          ? "A new Samsung Tab S9 was registered in the ICT Department."
                          : "Eng. Kamau graded your Packet Tracer Lab."}
                    </p>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex flex-col items-start gap-1 p-3 cursor-pointer opacity-70">
                    <div className="flex items-center gap-2 w-full">
                      <div className="h-2 w-2 rounded-full bg-muted shrink-0"></div>
                      <p className="font-medium text-sm">Sync Successful</p>
                      <span className="text-[10px] text-muted-foreground ml-auto">2h ago</span>
                    </div>
                    <p className="text-xs text-muted-foreground pl-4">
                      Weekly institution report generated and saved to offline storage.
                    </p>
                  </DropdownMenuItem>
                </div>
                <DropdownMenuSeparator />
                <Button
                  variant="ghost"
                  className="w-full text-[10px] font-black uppercase tracking-widest h-10 rounded-none hover:bg-muted"
                >
                  View all notifications
                </Button>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-9 w-9 rounded-full ml-1 border border-border/50 ring-offset-background transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <Avatar className="h-9 w-9 border border-border/50">
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground font-black text-xs">
                      {userProfile.initials}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 shadow-2xl" align="end" forceMount>
                <DropdownMenuLabel className="font-normal p-4 bg-muted/20">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-black leading-none uppercase tracking-widest">
                      {userProfile.name}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {userProfile.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup className="p-1">
                  <DropdownMenuItem asChild>
                    <Link
                      to={
                        role === "admin"
                          ? "/admin"
                          : role === "lecturer"
                            ? "/lecturer"
                            : "/dashboard/settings"
                      }
                    >
                      <Briefcase className="mr-2 h-4 w-4 text-primary" />
                      <span className="font-bold">Workspace Home</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Account Settings</span>
                  </DropdownMenuItem>
                  {role === "admin" && (
                    <DropdownMenuItem>
                      <ShieldCheck className="mr-2 h-4 w-4 text-success" />
                      <span>Security Controls</span>
                    </DropdownMenuItem>
                  )}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  asChild
                  className="text-destructive focus:bg-destructive/10 focus:text-destructive p-2 m-1 rounded-md"
                >
                  <Link to="/login">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span className="font-bold">Log out of JifunzeHub</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main Workspace Area */}
        <main className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 max-w-7xl pb-24">
            {(title || subtitle) && (
              <div className="mb-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="flex items-center gap-3">
                  {role === "lecturer" && (
                    <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 mb-2 font-bold">
                      Teaching Workspace
                    </Badge>
                  )}
                  {role === "admin" && (
                    <Badge className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 mb-2 font-bold uppercase tracking-widest text-[9px]">
                      Institution Command Center
                    </Badge>
                  )}
                </div>
                {title && (
                  <h1 className="text-3xl font-black tracking-tight text-foreground uppercase tracking-tighter">
                    {title}
                  </h1>
                )}
                {subtitle && (
                  <p className="mt-2 text-base text-muted-foreground max-w-3xl font-medium">
                    {subtitle}
                  </p>
                )}
              </div>
            )}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
