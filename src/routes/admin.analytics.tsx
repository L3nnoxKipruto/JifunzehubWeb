import { createFileRoute } from '@tanstack/react-router'
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip as RechartsTooltip, XAxis, YAxis, Area, AreaChart } from "recharts"

export const Route = createFileRoute('/admin/analytics')({
  component: AdminAnalyticsComponent,
})

function AdminAnalyticsComponent() {
  const offlineUsageData = [
    { month: "Jan", cache: 4500, usb: 1200 },
    { month: "Feb", cache: 5200, usb: 1500 },
    { month: "Mar", cache: 6800, usb: 2100 },
    { month: "Apr", cache: 7400, usb: 2800 },
    { month: "May", cache: 8900, usb: 3400 },
  ];

  const deptPerformanceData = [
    { dept: "ICT", rate: 88 },
    { dept: "Electrical", rate: 75 },
    { dept: "Automotive", rate: 62 },
    { dept: "Hospitality", rate: 91 },
    { dept: "Plumbing", rate: 58 },
  ];

  return (
    <DashboardLayout role="admin" title="Institution Intelligence" subtitle="Analyze offline usage patterns, content distribution, and departmental performance.">
      <div className="space-y-6">
        
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Ecosystem Overview</h3>
          <Select defaultValue="this-semester">
            <SelectTrigger className="w-40 bg-background">
              <SelectValue placeholder="Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="this-month">This Month</SelectItem>
              <SelectItem value="this-semester">This Semester</SelectItem>
              <SelectItem value="this-year">This Year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Offline Distribution Analytics */}
          <Card className="border-border/60">
            <CardHeader>
              <CardTitle>Offline Content Distribution</CardTitle>
              <CardDescription>Lessons accessed via local cache vs USB sync over time.</CardDescription>
            </CardHeader>
            <CardContent className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={offlineUsageData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorCache" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorUsb" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-accent)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="var(--color-accent)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                  <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={12} />
                  <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
                  <RechartsTooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 8 }} />
                  <Area type="monotone" dataKey="cache" stroke="var(--color-primary)" fillOpacity={1} fill="url(#colorCache)" name="Local Cache Access" />
                  <Area type="monotone" dataKey="usb" stroke="var(--color-accent)" fillOpacity={1} fill="url(#colorUsb)" name="USB Sync Distribution" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Departmental Performance */}
          <Card className="border-border/60">
            <CardHeader>
              <CardTitle>Departmental Completion Rates</CardTitle>
              <CardDescription>Average course completion percentage across TVET tracks.</CardDescription>
            </CardHeader>
            <CardContent className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={deptPerformanceData} layout="vertical" margin={{ top: 10, right: 30, left: 20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" horizontal={false} />
                  <XAxis type="number" domain={[0, 100]} stroke="var(--color-muted-foreground)" fontSize={12} />
                  <YAxis dataKey="dept" type="category" stroke="var(--color-muted-foreground)" fontSize={12} />
                  <RechartsTooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 8 }} />
                  <Bar dataKey="rate" fill="var(--color-primary)" radius={[0, 4, 4, 0]} barSize={24} name="Completion Rate (%)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-border/60 bg-muted/20">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-1">Total Assessment Completions</p>
              <h4 className="text-3xl font-bold">14,208</h4>
              <p className="text-xs text-success mt-2 font-medium">+12% vs last semester</p>
            </CardContent>
          </Card>
          <Card className="border-border/60 bg-muted/20">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-1">Average Sync Frequency</p>
              <h4 className="text-3xl font-bold">3.2 days</h4>
              <p className="text-xs text-muted-foreground mt-2">Time between local network connections</p>
            </CardContent>
          </Card>
          <Card className="border-border/60 bg-muted/20">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-1">Most Effective Lecturer</p>
              <h4 className="text-xl font-bold mt-1 text-primary">Eng. Kamau (ICT)</h4>
              <p className="text-xs text-muted-foreground mt-2">Highest course completion & engagement</p>
            </CardContent>
          </Card>
        </div>

      </div>
    </DashboardLayout>
  )
}
