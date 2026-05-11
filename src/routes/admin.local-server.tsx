import { createFileRoute } from '@tanstack/react-router'
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Server, Wifi, Play, Square, Activity, Database, CloudOff, RefreshCw } from "lucide-react"

export const Route = createFileRoute('/admin/local-server')({
  component: LocalServerComponent,
})

function LocalServerComponent() {
  return (
    <DashboardLayout role="admin" title="Local Server Management" subtitle="Control the offline infrastructure backbone of your institution.">
      <div className="space-y-6">
        
        {/* Server Status Banner */}
        <div className="bg-success/10 border border-success/20 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-5">
             <Server className="w-64 h-64 -mt-10 -mr-10" />
          </div>
          <div className="flex items-center gap-4 relative z-10">
            <div className="h-16 w-16 rounded-full bg-success/20 text-success flex items-center justify-center">
              <Server className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-success-foreground">Server is Online & Serving</h2>
              <p className="text-success-foreground/80 mt-1">Nairobi TVET Main Campus Hub • IP: 192.168.1.100</p>
            </div>
          </div>
          <div className="flex gap-3 relative z-10">
            <Button variant="outline" className="border-success/30 text-success hover:bg-success/10"><Wifi className="w-4 h-4 mr-2" /> Network Settings</Button>
            <Button variant="destructive" className="bg-destructive/90 hover:bg-destructive"><Square className="w-4 h-4 mr-2" /> Stop Server</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-border/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Database className="w-5 h-5 text-primary" /> Storage Usage</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-sm">Main Drive (/dev/sda1)</span>
                  <span className="text-sm text-muted-foreground">42 GB / 500 GB</span>
                </div>
                <Progress value={8.4} className="h-3" />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="p-3 bg-muted/30 rounded-lg border border-border/50">
                  <p className="text-muted-foreground mb-1">Hosted Courses</p>
                  <p className="text-2xl font-bold">32</p>
                </div>
                <div className="p-3 bg-muted/30 rounded-lg border border-border/50">
                  <p className="text-muted-foreground mb-1">Cached Videos</p>
                  <p className="text-2xl font-bold">412</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Activity className="w-5 h-5 text-accent" /> Active Connections</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2 mb-6">
                <span className="text-5xl font-bold text-accent">184</span>
                <span className="text-muted-foreground pb-1">devices connected to LAN/Hotspot</span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Current Bandwidth</span>
                  <span className="font-medium">45 MB/s</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-muted-foreground">CPU Usage</span>
                  <span className="font-medium text-success">12%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Memory</span>
                  <span className="font-medium">4.2 GB / 16 GB</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><CloudOff className="w-5 h-5 text-orange-500" /> Synchronization Logs</CardTitle>
              <CardDescription>Tracking data movement between local server and central cloud.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { event: "Cloud Sync (Delta)", status: "Success", time: "10 mins ago", details: "Pushed 42 assignments, Pulled 1 new course update." },
                  { event: "Lecturer Upload", status: "Success", time: "2 hours ago", details: "Received 500MB from Eng. Kamau via LAN." },
                  { event: "Cloud Sync (Full)", status: "Failed", time: "1 day ago", details: "No internet connection detected." },
                ].map((log, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-muted/20 border border-border/50 rounded-lg gap-2">
                    <div>
                      <p className="font-medium flex items-center gap-2">
                        {log.event} 
                        <Badge variant="outline" className={log.status === 'Success' ? 'text-success border-success/30' : 'text-destructive border-destructive/30'}>{log.status}</Badge>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{log.details}</p>
                    </div>
                    <span className="text-xs text-muted-foreground shrink-0">{log.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
               <Button className="w-full shadow-md shadow-primary/20"><RefreshCw className="w-4 h-4 mr-2" /> Force Cloud Sync Now</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
