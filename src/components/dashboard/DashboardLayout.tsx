import { Link, useRouterState } from "@tanstack/react-router";
import { ReactNode, useState, useEffect } from "react";
import {
  LayoutDashboard, BookOpen, Library, ClipboardList, FileCheck2, Award,
  Download, MessageSquare, RefreshCw, Settings, Menu, Bell, Search,
  GraduationCap, Users, Building2, BarChart3, Server, FolderKanban, Wrench, WifiOff, X, LogOut,
  Globe, CloudLightning, Zap, MessageCircle, PlayCircle, HardDrive, Wifi, Activity, CheckCircle2, ChevronDown
} from "lucide-react";
import { Logo } from "@/components/site/Logo";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuGroup
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

type Item = { to: string; label: string; icon: any };

const studentNav: Item[] = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/dashboard/courses", label: "My Courses", icon: BookOpen },
  { to: "/dashboard/offline-library", label: "Offline Library", icon: Library },
  { to: "/dashboard/assignments", label: "Assignments", icon: ClipboardList },
  { to: "/dashboard/assessments", label: "Assessments", icon: FileCheck2 },
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
  { to: "/lecturer/assessments", label: "Assessments", icon: FileCheck2 },
  { to: "/lecturer/sync", label: "Sync Reports", icon: RefreshCw },
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

  return (
    <div className="flex min-h-screen bg-background">
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
          <Button variant="ghost" size="icon" className="text-sidebar-foreground lg:hidden" onClick={() => setOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="px-5 pt-6 pb-2">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Avatar className="h-10 w-10 border-2 border-accent">
                <AvatarFallback className="bg-primary text-primary-foreground font-bold">AH</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-sidebar bg-success"></div>
            </div>
            <div>
              <p className="font-semibold leading-none">Amina Hussein</p>
              <p className="text-xs text-sidebar-foreground/60 mt-1 uppercase tracking-wider font-medium">{titleMap[role]} • Kisumu Poly</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-4 custom-scrollbar">
          <nav className="space-y-1">
            {items.map((item) => {
              const active = path === item.to || path.startsWith(item.to + '/');
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
                    <Icon className={`h-4 w-4 transition-transform duration-200 ${active ? 'scale-110 text-accent' : 'group-hover:scale-110'}`} />
                    {item.label}
                  </div>
                  {item.label === 'Messages' && <Badge className="h-5 w-5 rounded-full p-0 flex items-center justify-center bg-accent text-accent-foreground">3</Badge>}
                  {item.label === 'Assignments' && <Badge variant="secondary" className="bg-sidebar-border text-xs px-1.5 py-0">2 Due</Badge>}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Offline Panel */}
        <div className="mt-auto border-t border-sidebar-border bg-sidebar-accent/10 p-4 backdrop-blur-md">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex h-full w-full rounded-full bg-amber-500"></span>
              </div>
              <span className="text-sm font-semibold text-amber-500">Working Offline</span>
            </div>
            <WifiOff className="h-4 w-4 text-amber-500/50" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-sidebar-foreground/70">
              <span>Sync Queue</span>
              <span className="font-medium text-sidebar-foreground">3 Items</span>
            </div>
            <Progress value={33} className="h-1.5 bg-sidebar-border" indicatorColor="bg-amber-500" />
            <div className="flex justify-between items-center mt-2">
              <span className="text-[10px] text-sidebar-foreground/50 flex items-center gap-1"><Activity className="w-3 h-3" /> Waiting for LAN</span>
              <Button size="sm" variant="outline" className="h-7 text-[10px] border-sidebar-border bg-transparent hover:bg-sidebar-accent">Sync Now</Button>
            </div>
          </div>
        </div>
      </aside>

      {open && <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden" onClick={() => setOpen(false)} />}

      {/* Main Content */}
      <div className="flex min-h-screen flex-1 flex-col overflow-hidden bg-muted/20">
        
        {/* Top Navbar */}
        <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-4 border-b border-border bg-background/80 px-4 backdrop-blur-xl sm:gap-6 sm:px-6 lg:px-8">
          <Button variant="ghost" size="icon" className="shrink-0 lg:hidden" onClick={() => setOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>

          <div className="flex items-center gap-2 mr-auto">
            <Badge variant="outline" className="hidden md:flex items-center gap-1.5 border-border/60 bg-muted/50 text-muted-foreground hover:bg-muted font-normal py-1">
              <Building2 className="w-3.5 h-3.5" /> Kisumu Polytechnic
            </Badge>
            <div className="hidden lg:flex relative w-64 xl:w-96 ml-4">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search curriculum, assignments, peers..." className="h-9 w-full bg-muted/40 pl-9 border-border/50 focus-visible:ring-accent/50" />
              <kbd className="pointer-events-none absolute right-2 top-2.5 hidden h-4 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Quick Actions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="hidden sm:flex h-9 border-border/60 bg-background hover:bg-muted gap-2">
                  <Zap className="h-4 w-4 text-accent" />
                  <span className="font-medium">Quick Actions</span>
                  <ChevronDown className="h-3 w-3 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Instant Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem><PlayCircle className="mr-2 h-4 w-4 text-primary" /> Resume "Routing Protocols"</DropdownMenuItem>
                <DropdownMenuItem><Download className="mr-2 h-4 w-4" /> Download Pending Lessons</DropdownMenuItem>
                <DropdownMenuItem><RefreshCw className="mr-2 h-4 w-4 text-success" /> Force Sync Now</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem><MessageCircle className="mr-2 h-4 w-4" /> Message Lecturer</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language & Theme */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="font-medium bg-muted/50">English (EN)</DropdownMenuItem>
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
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel className="flex justify-between items-center">
                  Notifications <Badge className="bg-accent">2 New</Badge>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="max-h-[300px] overflow-y-auto">
                  <DropdownMenuItem className="flex flex-col items-start gap-1 p-3 cursor-pointer">
                    <div className="flex items-center gap-2 w-full">
                      <div className="h-2 w-2 rounded-full bg-accent shrink-0"></div>
                      <p className="font-medium text-sm">Assignment Graded</p>
                      <span className="text-xs text-muted-foreground ml-auto">10m ago</span>
                    </div>
                    <p className="text-xs text-muted-foreground pl-4 line-clamp-2">Eng. Kamau graded your Packet Tracer Lab. You scored 92%!</p>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex flex-col items-start gap-1 p-3 cursor-pointer">
                    <div className="flex items-center gap-2 w-full">
                      <div className="h-2 w-2 rounded-full bg-accent shrink-0"></div>
                      <p className="font-medium text-sm">Sync Complete</p>
                      <span className="text-xs text-muted-foreground ml-auto">2h ago</span>
                    </div>
                    <p className="text-xs text-muted-foreground pl-4">3 offline submissions were successfully uploaded to the campus server.</p>
                  </DropdownMenuItem>
                </div>
                <DropdownMenuSeparator />
                <Button variant="ghost" className="w-full text-xs h-8 rounded-none">View all notifications</Button>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full ml-1 border border-border/50 ring-offset-background transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">AH</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Amina Hussein</p>
                    <p className="text-xs leading-none text-muted-foreground">amina.h@kisumupoly.ac.ke</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild><Link to="/dashboard/settings"><Settings className="mr-2 h-4 w-4" /><span>Profile Settings</span></Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link to="/dashboard/certificates"><Award className="mr-2 h-4 w-4" /><span>My Certificates</span></Link></DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="text-destructive focus:bg-destructive/10 focus:text-destructive">
                  <Link to="/login">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main Workspace Area */}
        <main className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 max-w-7xl">
            {(title || subtitle) && (
              <div className="mb-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                {title && <h1 className="text-3xl font-bold tracking-tight text-foreground">{title}</h1>}
                {subtitle && <p className="mt-2 text-base text-muted-foreground max-w-3xl">{subtitle}</p>}
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
