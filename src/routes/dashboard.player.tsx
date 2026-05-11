import { createFileRoute } from "@tanstack/react-router";
import {
  CheckCircle2,
  Download,
  FileText,
  Lock,
  Maximize2,
  MessageSquare,
  Pause,
  Play,
  Settings as SettingsIcon,
  SkipForward,
  Volume2,
  WifiOff,
} from "lucide-react";
import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/dashboard/player")({
  head: () => ({ meta: [{ title: "Course Player — JifunzeHub" }] }),
  component: Player,
});

const sections = [
  {
    title: "Module 3 — Subnetting",
    items: [
      { t: "What is subnetting?", dur: "8:12", done: true, off: true },
      { t: "CIDR notation explained", dur: "10:45", done: true, off: true },
      { t: "Subnetting in practice", dur: "14:20", current: true, off: true },
      { t: "VLSM walkthrough", dur: "12:30", off: false },
    ],
  },
  {
    title: "Module 4 — Routing basics",
    items: [
      { t: "Static vs dynamic routing", dur: "9:00", off: false, locked: true },
      { t: "Configuring a router", dur: "16:40", off: false, locked: true },
    ],
  },
];

function Player() {
  const [playing, setPlaying] = useState(false);
  return (
    <DashboardLayout role="student">
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">ICT</Badge>
            <Badge variant="outline" className="border-success/40 text-success">
              <WifiOff className="mr-1 h-3 w-3" /> Available offline
            </Badge>
            <Badge variant="outline">Cached • 92 MB</Badge>
          </div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Subnetting in practice</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Networking Essentials • Module 3 • Lesson 14
          </p>

          <Card className="mt-5 overflow-hidden border-border/60">
            <div className="relative aspect-video bg-gradient-hero">
              <div className="absolute inset-0 grid place-items-center">
                <button
                  onClick={() => setPlaying(!playing)}
                  className="grid h-20 w-20 place-items-center rounded-full bg-white/15 text-primary-foreground backdrop-blur transition hover:scale-105 hover:bg-white/25"
                  aria-label="Play"
                >
                  {playing ? <Pause className="h-8 w-8" /> : <Play className="ml-1 h-8 w-8" />}
                </button>
              </div>
              <div className="absolute inset-x-0 bottom-0 space-y-2 bg-gradient-to-t from-black/70 to-transparent p-4 text-primary-foreground">
                <Progress value={42} className="h-1 bg-white/20" />
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <button onClick={() => setPlaying(!playing)} aria-label="Toggle play">
                      {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </button>
                    <SkipForward className="h-4 w-4" />
                    <Volume2 className="h-4 w-4" />
                    <span>05:58 / 14:20</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <SettingsIcon className="h-4 w-4" />
                    <Maximize2 className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Tabs defaultValue="notes" className="mt-6">
            <TabsList>
              <TabsTrigger value="notes">
                <FileText className="mr-1 h-4 w-4" /> Notes
              </TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="assessment">Assessment</TabsTrigger>
              <TabsTrigger value="discuss">
                <MessageSquare className="mr-1 h-4 w-4" /> Discussion
              </TabsTrigger>
            </TabsList>
            <TabsContent value="notes">
              <Textarea
                placeholder="Write your notes here. They'll sync to your account when online…"
                rows={6}
              />
              <p className="mt-2 text-xs text-muted-foreground">
                Auto-saved locally • Last save 12s ago
              </p>
            </TabsContent>
            <TabsContent value="resources" className="space-y-2">
              {[
                ["Subnetting cheat sheet.pdf", "1.2 MB"],
                ["Practice worksheet.pdf", "640 KB"],
                ["IP planning template.xlsx", "210 KB"],
              ].map(([n, s]) => (
                <div
                  key={n}
                  className="flex items-center justify-between rounded-lg border border-border/60 p-3 text-sm"
                >
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-accent" /> {n}
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="mr-1 h-4 w-4" /> {s}
                  </Button>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="assessment">
              <Card className="border-border/60">
                <CardContent className="p-5 text-sm">
                  <p className="font-medium">Quiz: Subnetting in practice</p>
                  <p className="mt-1 text-muted-foreground">
                    10 questions • 15 min • Submission queues offline
                  </p>
                  <Button className="mt-4 bg-gradient-primary text-primary-foreground hover:opacity-95">
                    Start quiz
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="discuss">
              <p className="text-sm text-muted-foreground">
                No messages yet. Discussion syncs once you reconnect.
              </p>
            </TabsContent>
          </Tabs>
        </div>

        <Card className="h-fit border-border/60">
          <CardContent className="p-0">
            <div className="border-b border-border/60 p-4">
              <p className="text-sm font-semibold">Course curriculum</p>
              <p className="text-xs text-muted-foreground">14 of 32 lessons completed</p>
              <Progress value={44} className="mt-2 h-2" />
            </div>
            <div className="max-h-[640px] overflow-auto">
              {sections.map((s) => (
                <div key={s.title} className="border-b border-border/60 p-3">
                  <p className="px-2 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {s.title}
                  </p>
                  {s.items.map((it) => (
                    <button
                      key={it.t}
                      className={`flex w-full items-start gap-3 rounded-lg px-2 py-2 text-left text-sm transition hover:bg-muted/50 ${
                        (it as any).current ? "bg-accent/10" : ""
                      }`}
                    >
                      <span className="mt-0.5">
                        {(it as any).done ? (
                          <CheckCircle2 className="h-4 w-4 text-success" />
                        ) : (it as any).locked ? (
                          <Lock className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Play className="h-4 w-4 text-accent" />
                        )}
                      </span>
                      <span className="flex-1">
                        <span className={`block ${(it as any).current ? "font-semibold" : ""}`}>
                          {it.t}
                        </span>
                        <span className="text-xs text-muted-foreground">{it.dur}</span>
                      </span>
                      {(it as any).off && <WifiOff className="mt-0.5 h-3.5 w-3.5 text-success" />}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
