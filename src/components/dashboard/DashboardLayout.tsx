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
  PanelLeftClose,
  PanelLeftOpen,
  type LucideIcon,
} from "lucide-react";
import { Logo } from "@/components/site/Logo";
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
import { MotionPage } from "@/components/animations/MotionPage";
import { SyncQueue, SyncItem } from "./SyncQueue";

type NavItem = { to: string; label: string; icon: LucideIcon };
type NavSection = { id: string; label: string; items: NavItem[] };

const studentSections: NavSection[] = [
  {
    id: "learn",
    label: "Learn",
    items: [
      { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
      { to: "/dashboard/courses", label: "My Courses", icon: BookOpen },
      { to: "/dashboard/offline-library", label: "Offline Library", icon: Library },
    ],
  },
  {
    id: "work",
    label: "Coursework",
    items: [
      { to: "/dashboard/assignments", label: "Assignments", icon: ClipboardList },
      { to: "/dashboard/assessments", label: "Assessments", icon: FileCheck },
      { to: "/dashboard/certificates", label: "Certificates", icon: Award },
    ],
  },
  {
    id: "campus",
    label: "Campus & files",
    items: [
      { to: "/dashboard/fees", label: "Fees & Finance", icon: Briefcase },
      { to: "/dashboard/downloads", label: "Downloads", icon: Download },
      { to: "/dashboard/messages", label: "Messages", icon: MessageSquare },
    ],
  },
  {
    id: "system",
    label: "Offline system",
    items: [
      { to: "/dashboard/sync", label: "Sync Center", icon: RefreshCw },
      { to: "/dashboard/settings", label: "Settings", icon: Settings },
    ],
  },
];

const lecturerSections: NavSection[] = [
  {
    id: "teach",
    label: "Teaching",
    items: [
      { to: "/lecturer", label: "Overview", icon: LayoutDashboard },
      { to: "/lecturer/courses", label: "Courses", icon: BookOpen },
      { to: "/lecturer/builder", label: "Course Builder", icon: FolderKanban },
      { to: "/lecturer/learners", label: "Learners", icon: Users },
    ],
  },
  {
    id: "eval",
    label: "Evaluation",
    items: [{ to: "/lecturer/assessments", label: "Assessments", icon: FileCheck }],
  },
  {
    id: "ops",
    label: "Operations",
    items: [{ to: "/lecturer/sync", label: "Sync Reports", icon: History }],
  },
];

const adminSections: NavSection[] = [
  {
    id: "command",
    label: "Institution",
    items: [
      { to: "/admin", label: "Overview", icon: LayoutDashboard },
      { to: "/admin/departments", label: "Departments", icon: Building2 },
      { to: "/admin/students", label: "Students", icon: GraduationCap },
      { to: "/admin/lecturers", label: "Lecturers", icon: Users },
      { to: "/admin/courses", label: "Courses", icon: BookOpen },
    ],
  },
  {
    id: "infra",
    label: "Edge & devices",
    items: [
      { to: "/admin/finance", label: "Finance", icon: Briefcase },
      { to: "/admin/local-server", label: "Local Server", icon: Server },
      { to: "/admin/devices", label: "Devices", icon: Wrench },
    ],
  },
  {
    id: "intel",
    label: "Intelligence",
    items: [
      { to: "/admin/analytics", label: "Analytics", icon: BarChart3 },
      { to: "/admin/settings", label: "Settings", icon: Settings },
    ],
  },
];

const navRoleMap: Record<"student" | "lecturer" | "admin", NavSection[]> = {
  student: studentSections,
  lecturer: lecturerSections,
  admin: adminSections,
};
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
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isSyncQueueOpen, setIsSyncQueueOpen] = useState(false);
  const [networkMode, setNetworkMode] = useState<"cloud" | "local" | "offline">("local");
  const [syncItems, setSyncItems] = useState<SyncItem[]>([
    {
      id: "1",
      name: "Assessment: Module 2 Fundamentals",
      type: "assessment",
      status: "queued",
      progress: 0,
      timestamp: "2 mins ago",
    },
    {
      id: "2",
      name: "Course Draft: Advanced Solar",
      type: "course",
      status: "error",
      progress: 0,
      timestamp: "1 hour ago",
    },
    {
      id: "3",
      name: "Student Profile Update",
      type: "profile",
      status: "completed",
      progress: 100,
      timestamp: "Just now",
    },
  ]);

  const handleSyncAll = () => {
    setSyncItems((prev) =>
      prev.map((item) =>
        item.status === "queued" || item.status === "error" ? { ...item, status: "syncing" } : item,
      ),
    );

    // Simulate sync progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 20;
      setSyncItems((prev) =>
        prev.map((item) => (item.status === "syncing" ? { ...item, progress } : item)),
      );

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setSyncItems((prev) =>
            prev.map((item) =>
              item.status === "syncing" ? { ...item, status: "completed" } : item,
            ),
          );
          import("sonner").then(({ toast }) => {
            toast.success("Background synchronization complete!");
          });
        }, 500);
      }
    }, 400);
  };
  const path = useRouterState({ select: (s) => s.location.pathname });
  const sections = navRoleMap[role];

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
        className={`fixed inset-y-0 left-0 z-50 flex flex-col border-r border-sidebar-border/80 bg-sidebar text-sidebar-foreground shadow-2xl transition-all duration-300 ease-out lg:static lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        } w-72 ${sidebarCollapsed ? "lg:w-[4.5rem]" : "lg:w-72"}`}
      >
        <div className="flex h-[4.25rem] shrink-0 items-center gap-2 border-b border-sidebar-border px-3 lg:px-4">
          <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
            <Logo
              variant="inverse"
              showWordmark={!sidebarCollapsed}
              className={sidebarCollapsed ? "min-w-0 lg:justify-center" : "min-w-0"}
            />
            <div className="flex shrink-0 items-center gap-0.5">
              <Button
                variant="ghost"
                size="icon"
                className="hidden h-9 w-9 rounded-lg text-sidebar-foreground/80 hover:bg-white/10 hover:text-sidebar-foreground lg:flex"
                type="button"
                onClick={() => setSidebarCollapsed((c) => !c)}
                aria-label={sidebarCollapsed ? "Expand navigation" : "Collapse navigation"}
              >
                {sidebarCollapsed ? (
                  <PanelLeftOpen className="h-5 w-5" />
                ) : (
                  <PanelLeftClose className="h-5 w-5" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-sidebar-foreground lg:hidden"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* User Profile Area */}
        <div className={`px-4 pt-6 pb-3 ${sidebarCollapsed ? "lg:px-2" : "lg:px-5"}`}>
          <div
            className={`group flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 shadow-sm transition-all hover:border-white/15 hover:bg-white/10 ${
              sidebarCollapsed ? "lg:justify-center lg:p-2" : ""
            }`}
          >
            <div className="relative shrink-0">
              <Avatar className="h-11 w-11 border border-primary/25 transition-transform duration-200 group-hover:scale-[1.02]">
                <AvatarFallback className="bg-primary/90 text-sm font-semibold text-primary-foreground">
                  {userProfile.initials}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-sidebar bg-[color:var(--success)] shadow-sm" />
            </div>
            <div className={`min-w-0 flex-1 ${sidebarCollapsed ? "lg:hidden" : ""}`}>
              <p className="truncate text-sm font-semibold leading-tight text-sidebar-foreground">
                {userProfile.name}
              </p>
              <p className="mt-1 truncate text-[11px] font-medium uppercase tracking-wide text-sidebar-foreground/50">
                {role === "student"
                  ? "Student · ICT"
                  : role === "lecturer"
                    ? "Lecturer · Engineering"
                    : "Administrator"}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`custom-scrollbar flex-1 overflow-y-auto py-2 ${sidebarCollapsed ? "px-2 lg:px-1.5" : "px-3"}`}
        >
          <nav className="space-y-5">
            {sections.map((section) => (
              <div key={section.id}>
                <p
                  className={`mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-sidebar-foreground/40 ${
                    sidebarCollapsed ? "lg:hidden" : ""
                  }`}
                >
                  {section.label}
                </p>
                <div className="space-y-0.5">
                  {section.items.map((item) => {
                    const active = path === item.to || path.startsWith(item.to + "/");
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.to}
                        to={item.to}
                        title={sidebarCollapsed ? item.label : undefined}
                        onClick={() => setOpen(false)}
                        className={`group relative flex items-center rounded-xl text-sm font-medium transition-all duration-200 ${
                          sidebarCollapsed
                            ? "justify-center px-0 py-2.5 lg:py-2.5"
                            : "justify-between px-3 py-2.5"
                        } ${
                          active
                            ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm ring-1 ring-white/5"
                            : "text-sidebar-foreground/72 hover:bg-sidebar-accent/35 hover:text-sidebar-foreground"
                        }`}
                      >
                        {active && (
                          <span
                            className="absolute left-0 top-1/2 hidden h-7 w-0.5 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_12px_color-mix(in_oklab,var(--accent)_55%,transparent)] lg:block"
                            aria-hidden
                          />
                        )}
                        <div
                          className={`flex items-center gap-3 ${sidebarCollapsed ? "lg:justify-center" : ""}`}
                        >
                          <Icon
                            className={`h-[18px] w-[18px] shrink-0 transition-transform duration-200 ${
                              active ? "text-accent" : "opacity-80 group-hover:opacity-100"
                            }`}
                          />
                          <span className={sidebarCollapsed ? "lg:hidden" : ""}>{item.label}</span>
                        </div>
                        <div
                          className={`flex items-center gap-1 ${sidebarCollapsed ? "lg:hidden" : ""}`}
                        >
                          {item.label === "Messages" && (
                            <Badge className="flex h-5 w-5 items-center justify-center rounded-full border-0 bg-accent p-0 text-[10px] font-semibold text-accent-foreground">
                              3
                            </Badge>
                          )}
                          {item.label === "Assignments" && (
                            <Badge
                              variant="secondary"
                              className="bg-sidebar-border/80 px-1.5 py-0 text-[10px] font-medium"
                            >
                              2 due
                            </Badge>
                          )}
                          {role === "lecturer" && item.label === "Learners" && (
                            <Badge
                              variant="secondary"
                              className="bg-sidebar-border/80 px-1.5 py-0 text-[10px] font-medium"
                            >
                              12 new
                            </Badge>
                          )}
                          {(role === "lecturer" || role === "admin") &&
                            item.label.includes("Sync") && (
                              <Badge
                                variant="destructive"
                                className="h-2 w-2 animate-pulse rounded-full p-0"
                              />
                            )}
                          {role === "admin" && item.label === "Devices" && (
                            <Badge
                              variant="secondary"
                              className="bg-sidebar-border/80 px-1.5 py-0 text-[10px] font-semibold"
                            >
                              18
                            </Badge>
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
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
        <div className="group relative mt-auto m-3 overflow-hidden rounded-2xl border border-amber-500/25 bg-gradient-to-br from-amber-500/12 to-amber-600/5 p-4 shadow-inner backdrop-blur-md sm:m-4 sm:p-5">
          <div className="absolute -top-4 -right-4 opacity-[0.06] transition-transform group-hover:rotate-12 pointer-events-none">
            <WifiOff className="h-20 w-20" />
          </div>
          <div className="relative z-10 space-y-3">
            <div className="flex items-center justify-between gap-2">
              <div className="flex min-w-0 items-center gap-2">
                <div className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400/80" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
                </div>
                <span className="truncate text-[11px] font-semibold uppercase tracking-wide text-amber-100">
                  Working offline
                </span>
              </div>
              <Badge
                variant="offline"
                className="shrink-0 border-amber-500/35 px-2 py-0 text-[10px] font-semibold"
              >
                Local cache
              </Badge>
            </div>

            <div className="space-y-2">
              <p className="text-[12px] font-medium leading-relaxed text-amber-50/85">
                3 lessons cached. Changes sync when the campus hub is in range.
              </p>
              <Progress
                value={33}
                className="h-1 bg-amber-950/20"
                indicatorClassName="bg-amber-400"
              />
            </div>

            <Button
              variant="sync"
              size="sm"
              className="w-full rounded-xl font-semibold"
              onClick={() => {
                import("sonner").then(({ toast }) => {
                  toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
                    loading: "Syncing institutional data…",
                    success: "Everything is up to date.",
                    error: "Sync failed. Check campus LAN.",
                  });
                });
              }}
            >
              Force sync
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
        <header className="sticky top-0 z-30 flex h-[4.25rem] shrink-0 items-center gap-3 border-b border-border/70 bg-background/75 px-4 shadow-header backdrop-blur-xl supports-[backdrop-filter]:bg-background/65 sm:gap-5 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0 lg:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="flex items-center gap-2 mr-auto">
            {role === "admin" && (
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
            )}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Badge
                  variant="outline"
                  className={`hidden lg:flex items-center gap-2 px-3 py-1 rounded-full font-bold ml-4 cursor-pointer transition-colors ${
                    networkMode === "cloud"
                      ? "bg-blue-500/10 text-blue-500 border-blue-500/20 hover:bg-blue-500/20"
                      : networkMode === "local"
                        ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20 hover:bg-emerald-500/20"
                        : "bg-amber-500/10 text-amber-500 border-amber-500/20 hover:bg-amber-500/20"
                  }`}
                >
                  <div className="relative flex h-2 w-2">
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                        networkMode === "cloud"
                          ? "bg-blue-400"
                          : networkMode === "local"
                            ? "bg-emerald-400"
                            : "bg-amber-400"
                      }`}
                    ></span>
                    <span
                      className={`relative inline-flex rounded-full h-2 w-2 ${
                        networkMode === "cloud"
                          ? "bg-blue-500"
                          : networkMode === "local"
                            ? "bg-emerald-500"
                            : "bg-amber-500"
                      }`}
                    ></span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest flex items-center gap-1.5 font-black">
                    {networkMode === "cloud"
                      ? "Cloud"
                      : networkMode === "local"
                        ? "Campus LAN"
                        : "Local Only"}
                  </span>
                </Badge>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 rounded-2xl p-2">
                <DropdownMenuLabel className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  Network Priority
                </DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => setNetworkMode("cloud")}
                  className="rounded-xl gap-2 cursor-pointer"
                >
                  <Globe className="w-4 h-4 text-blue-500" /> <span>Cloud Sync Mode</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setNetworkMode("local")}
                  className="rounded-xl gap-2 cursor-pointer"
                >
                  <Server className="w-4 h-4 text-emerald-500" />{" "}
                  <span>Campus Hub (Recommended)</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setNetworkMode("offline")}
                  className="rounded-xl gap-2 cursor-pointer"
                >
                  <WifiOff className="w-4 h-4 text-amber-500" /> <span>Offline Cache Only</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSyncQueueOpen(true)}
              className="relative hidden xl:flex h-9 border border-border/40 bg-muted/30 hover:bg-muted gap-2 font-black text-[10px] uppercase tracking-widest rounded-xl ml-2"
            >
              <RefreshCw
                className={`w-3.5 h-3.5 ${syncItems.some((i) => i.status === "syncing") ? "animate-spin" : ""}`}
              />
              Sync Status
              {syncItems.some((i) => i.status === "queued" || i.status === "error") && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-[10px] text-white font-black shadow-lg">
                  {syncItems.filter((i) => i.status === "queued" || i.status === "error").length}
                </span>
              )}
            </Button>

            <div className="hidden lg:flex relative ml-1 w-64 xl:w-96">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/80" />
              <Input
                placeholder={
                  role === "admin"
                    ? "Search students, staff, server logs…"
                    : role === "lecturer"
                      ? "Search learners, courses, materials…"
                      : "Search courses, lessons, and files…"
                }
                className="h-10 w-full rounded-xl border-border/60 bg-muted/35 pl-10 pr-14 text-[13px] shadow-sm transition-shadow focus-visible:bg-background"
              />
              <kbd className="pointer-events-none absolute right-2.5 top-1/2 hidden h-7 -translate-y-1/2 select-none items-center gap-1 rounded-md border border-border/60 bg-background/80 px-2 font-mono text-[10px] font-medium text-muted-foreground shadow-sm sm:flex">
                <span className="text-[11px]">⌘</span>K
              </kbd>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Mobile Search Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 lg:hidden rounded-full hover:bg-muted"
            >
              <Search className="h-5 w-5 text-muted-foreground" />
            </Button>

            {/* Quick Actions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex h-9 border-border/60 bg-background hover:bg-muted gap-2 px-3"
                >
                  <Zap className="h-4 w-4 text-accent" />
                  <span className="font-bold hidden sm:inline">Quick Actions</span>
                  <ChevronDown className="h-3 w-3 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Instant Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {role === "admin" ? (
                  <>
                    <DropdownMenuItem asChild>
                      <Link to="/admin/students">
                        <Plus className="mr-2 h-4 w-4 text-primary" /> Add Student
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/admin/lecturers">
                        <Users className="mr-2 h-4 w-4 text-primary" /> Add Lecturer
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/admin/departments">
                        <Building2 className="mr-2 h-4 w-4 text-accent" /> Create Department
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/admin/courses">
                        <BookOpen className="mr-2 h-4 w-4 text-accent" /> Create Course
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/admin/local-server">
                        <Package className="mr-2 h-4 w-4 text-success" /> Deploy Offline Pkg
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/admin/local-server">
                        <RefreshCw className="mr-2 h-4 w-4 text-success" /> Sync Institution
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/admin/analytics">
                        <BarChart3 className="mr-2 h-4 w-4" /> Generate Reports
                      </Link>
                    </DropdownMenuItem>
                  </>
                ) : role === "lecturer" ? (
                  <>
                    <DropdownMenuItem asChild>
                      <Link to="/lecturer/builder">
                        <Plus className="mr-2 h-4 w-4 text-primary" /> Create Course
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/lecturer/builder">
                        <FileUp className="mr-2 h-4 w-4" /> Upload Materials
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/lecturer/sync">
                        <Package className="mr-2 h-4 w-4 text-accent" /> Generate Offline Pkg
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/lecturer/sync">
                        <RefreshCw className="mr-2 h-4 w-4 text-success" /> Sync Now
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/lecturer/sync">
                        <Usb className="mr-2 h-4 w-4" /> Export via USB
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/lecturer/assessments">
                        <FileCheck className="mr-2 h-4 w-4" /> Create Assessment
                      </Link>
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard/player">
                        <PlayCircle className="mr-2 h-4 w-4 text-primary" /> Resume Learning
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard/downloads">
                        <Download className="mr-2 h-4 w-4" /> Download Pending Lessons
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard/sync">
                        <RefreshCw className="mr-2 h-4 w-4 text-success" /> Force Sync Now
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link
                    to={
                      role === "student"
                        ? "/dashboard/messages"
                        : role === "lecturer"
                          ? "/lecturer/learners"
                          : "/admin/students"
                    }
                  >
                    <MessageCircle className="mr-2 h-4 w-4" /> Message Support
                  </Link>
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
                <DropdownMenuItem asChild className="p-0">
                  <Link
                    to={
                      role === "student"
                        ? "/dashboard/notifications"
                        : role === "lecturer"
                          ? "/lecturer"
                          : "/admin"
                    }
                    className="w-full h-full p-2 flex justify-center"
                  >
                    <Button
                      variant="ghost"
                      className="w-full text-[10px] font-black uppercase tracking-widest h-10 rounded-none hover:bg-muted"
                    >
                      View all notifications
                    </Button>
                  </Link>
                </DropdownMenuItem>
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
                <div className="flex flex-wrap items-center gap-2">
                  {role === "lecturer" && (
                    <span className="jh-kicker border-primary/25 bg-primary/8 text-primary">
                      Teaching workspace
                    </span>
                  )}
                  {role === "admin" && (
                    <span className="jh-kicker border-accent/30 bg-accent/10 text-accent-foreground">
                      Institution command
                    </span>
                  )}
                </div>
                {title && <h1 className="jh-page-title mt-3">{title}</h1>}
                {subtitle && <p className="jh-body mt-2 max-w-3xl">{subtitle}</p>}
              </div>
            )}
            <MotionPage>
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both">
                {children}
              </div>
            </MotionPage>
          </div>
        </main>
      </div>

      <SyncQueue
        isOpen={isSyncQueueOpen}
        onClose={() => setIsSyncQueueOpen(false)}
        items={syncItems}
        onSyncAll={handleSyncAll}
        onClearCompleted={() =>
          setSyncItems((prev) => prev.filter((i) => i.status !== "completed"))
        }
      />
    </div>
  );
}
