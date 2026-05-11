import { createFileRoute } from '@tanstack/react-router'
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, GraduationCap, Server, BookOpen, WifiOff, Laptop, CheckCircle2, AlertTriangle } from "lucide-react"

export const Route = createFileRoute('/admin')({
  component: AdminOverviewComponent,
})

function AdminOverviewComponent() {
  return (
    <DashboardLayout role="admin" title="Administrator Overview" subtitle="Complete visibility over the institution's offline learning ecosystem.">
      <div className="space-y-6">
        
        {/* System Health / Offline Status Indicator */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative flex h-12 w-12 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-30"></span>
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20 text-amber-500">
                <WifiOff className="h-6 w-6" />
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg text-foreground">Working Offline / Limited Connectivity</h4>
              <p className="text-sm text-muted-foreground">Local server active. Cloud sync pending internet restoration.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-right">
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Local Server</p>
              <Badge className="bg-success/20 text-success hover:bg-success/30 border-0 mt-1"><CheckCircle2 className="w-3 h-3 mr-1" /> Online & Serving</Badge>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Sync Success Rate</p>
              <p className="text-lg font-bold text-primary">94.2%</p>
            </div>
          </div>
        </div>

        {/* Core Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Total Students" value="1,248" icon={GraduationCap} color="text-blue-500" />
          <StatCard title="Total Lecturers" value="45" icon={Users} color="text-indigo-500" />
          <StatCard title="Active Courses" value="32" icon={BookOpen} color="text-amber-500" />
          <StatCard title="Offline Devices" value="204" icon={Laptop} color="text-accent" />
        </div>

        {/* Recent Activity */}
        <Card className="border-border/60">
          <CardHeader>
            <CardTitle>Recent Ecosystem Activity</CardTitle>
            <CardDescription>Latest sync events and content updates from the local network.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { type: 'sync', msg: 'Amina H. synced progress via USB drive.', time: '10 mins ago', icon: WifiOff },
                { type: 'upload', msg: 'Mr. Omondi published "Solar Inverter Lab" to local server.', time: '45 mins ago', icon: BookOpen },
                { type: 'server', msg: 'Local server performed partial cloud sync (24MB transferred).', time: '2 hours ago', icon: Server },
                { type: 'warning', msg: 'Device DEV-842 failed authentication during LAN sync.', time: '5 hours ago', icon: AlertTriangle },
              ].map((activity, i) => (
                <div key={i} className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/30 transition-colors border border-transparent hover:border-border/50">
                  <div className={`p-2 rounded-full ${activity.type === 'warning' ? 'bg-destructive/10 text-destructive' : 'bg-primary/10 text-primary'}`}>
                    <activity.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.msg}</p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

function StatCard({ title, value, icon: Icon, color }: any) {
  return (
    <Card className="border-border/60 hover:shadow-soft transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-3xl font-bold mt-2">{value}</h3>
          </div>
          <div className={`p-3 rounded-xl bg-muted/50 ${color}`}>
            <Icon className="w-5 h-5" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
