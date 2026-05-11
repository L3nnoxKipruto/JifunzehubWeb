import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, BookOpen, Download, FileCheck2, FolderKanban, Plus,
  TrendingUp, Upload, Users, Video,
} from "lucide-react";
import {
  Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export const Route = createFileRoute("/lecturer")({
  head: () => ({ meta: [{ title: "Lecturer Studio — JifunzeHub" }] }),
  component: Lecturer,
});

const data = [
  { d: "W1", v: 120 }, { d: "W2", v: 180 }, { d: "W3", v: 160 },
  { d: "W4", v: 240 }, { d: "W5", v: 280 }, { d: "W6", v: 320 },
];

function Lecturer() {
  return (
    <DashboardLayout role="lecturer" title="Lecturer Studio" subtitle="Build, package and deliver TVET courses — online or off.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Stat icon={Users} v="412" l="Active learners" />
        <Stat icon={BookOpen} v="6" l="Active courses" />
        <Stat icon={FileCheck2} v="38" l="Pending assessments" />
        <Stat icon={TrendingUp} v="+18%" l="Engagement w/w" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Card className="border-border/60 lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>My courses</CardTitle>
            <Button size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-95"><Plus className="mr-1 h-4 w-4" /> New course</Button>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              ["Networking Essentials", "ICT", 184, 68],
              ["Solar Installation", "Electrical", 132, 41],
              ["Engine Diagnostics", "Automotive", 96, 22],
            ].map(([t, tr, l, p]) => (
              <div key={t as string} className="rounded-lg border border-border/60 p-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <Badge variant="secondary">{tr}</Badge>
                    <h3 className="mt-2 font-semibold">{t}</h3>
                    <p className="text-xs text-muted-foreground">{l} learners enrolled</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm"><Download className="mr-1 h-4 w-4" /> Export</Button>
                    <Button asChild size="sm" variant="ghost"><Link to="/lecturer">Manage <ArrowRight className="ml-1 h-3 w-3" /></Link></Button>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <Progress value={p as number} className="h-2 flex-1" />
                  <span className="text-xs text-muted-foreground">Avg progress {p as number}%</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border/60">
          <CardHeader><CardTitle className="flex items-center gap-2"><FolderKanban className="h-4 w-4 text-accent" /> Course builder</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start"><Video className="mr-2 h-4 w-4" /> Upload video lesson</Button>
            <Button variant="outline" className="w-full justify-start"><Upload className="mr-2 h-4 w-4" /> Upload PDF / resource</Button>
            <Button variant="outline" className="w-full justify-start"><FileCheck2 className="mr-2 h-4 w-4" /> Create quiz</Button>
            <Button variant="outline" className="w-full justify-start"><BookOpen className="mr-2 h-4 w-4" /> Add practical assignment</Button>
            <div className="rounded-lg border border-dashed border-border p-4 text-center text-xs text-muted-foreground">
              Drop files here to add to the active course
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Card className="border-border/60 lg:col-span-2">
          <CardHeader><CardTitle>Engagement (lessons watched / week)</CardTitle></CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-accent)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="var(--color-accent)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="d" stroke="var(--color-muted-foreground)" fontSize={12} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
                <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 8 }} />
                <Area dataKey="v" stroke="var(--color-accent)" fill="url(#g1)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border/60">
          <CardHeader><CardTitle>Sync reports</CardTitle></CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Devices synced</span><span className="font-medium">386 / 412</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">USB packages issued</span><span className="font-medium">42</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Avg sync latency</span><span className="font-medium">14 hrs</span></div>
            <Button variant="outline" size="sm" className="w-full">Generate offline package</Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

function Stat({ icon: Icon, v, l }: { icon: any; v: string; l: string }) {
  return (
    <Card className="border-border/60">
      <CardContent className="p-5">
        <div className="flex items-center justify-between"><p className="text-sm text-muted-foreground">{l}</p><Icon className="h-4 w-4 text-accent" /></div>
        <p className="mt-2 text-2xl font-bold">{v}</p>
      </CardContent>
    </Card>
  );
}
