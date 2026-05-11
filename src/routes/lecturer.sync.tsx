import { createFileRoute } from '@tanstack/react-router'
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RefreshCw, Download, Upload, WifiOff, Server, HardDrive } from "lucide-react"

export const Route = createFileRoute('/lecturer/sync')({
  component: LecturerSyncComponent,
})

function LecturerSyncComponent() {
  const syncLogs = [
    { id: 1, type: "push", item: "Module 2: OSPF Config (Course Update)", destination: "Local Server (LAN)", status: "success", time: "10 mins ago", size: "210 MB" },
    { id: 2, type: "pull", item: "Student Submissions (12 Assignments)", source: "USB Drive (Class A)", status: "success", time: "2 hours ago", size: "15 MB" },
    { id: 3, type: "push", item: "Subnetting Quiz (New)", destination: "Central Cloud", status: "failed", time: "5 hours ago", reason: "No Internet Connection" },
  ];

  return (
    <DashboardLayout role="lecturer" title="Sync Reports" subtitle="Monitor content distribution and data synchronization across the local network and USB drives.">
      <div className="space-y-6">
        
        <div className="grid gap-6 md:grid-cols-2">
          {/* LAN Sync Status */}
          <Card className="border-border/60 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5"><Server className="w-24 h-24" /></div>
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-2"><WifiOff className="w-5 h-5 text-success" /> Local Network Sync</CardTitle>
              <CardDescription>Connection to the campus server.</CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 space-y-4">
              <div className="flex items-center gap-3 bg-success/10 text-success p-3 rounded-lg border border-success/20">
                <div className="w-3 h-3 rounded-full bg-success animate-pulse"></div>
                <span className="font-medium text-sm">Connected & Syncing</span>
              </div>
              <div className="flex justify-between items-center text-sm border-t border-border/50 pt-3">
                <span className="text-muted-foreground">Pending Uploads</span>
                <span className="font-medium">0 files</span>
              </div>
              <Button variant="outline" className="w-full"><RefreshCw className="w-4 h-4 mr-2" /> Force Network Sync</Button>
            </CardContent>
          </Card>

          {/* USB Sync Status */}
          <Card className="border-border/60 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5"><HardDrive className="w-24 h-24" /></div>
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-2"><HardDrive className="w-5 h-5 text-accent" /> USB Drive Sync</CardTitle>
              <CardDescription>Manual physical data transfer.</CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 space-y-4">
              <div className="flex items-center gap-3 bg-muted/50 text-muted-foreground p-3 rounded-lg border border-border/50">
                <HardDrive className="w-4 h-4" />
                <span className="font-medium text-sm">No Drive Detected</span>
              </div>
              <div className="flex justify-between items-center text-sm border-t border-border/50 pt-3">
                <span className="text-muted-foreground">Ready to Export</span>
                <span className="font-medium text-accent">1 Course Update</span>
              </div>
              <Button className="w-full shadow-md shadow-primary/20 bg-accent hover:bg-accent/90 text-accent-foreground"><Download className="w-4 h-4 mr-2" /> Export to USB</Button>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border/60">
          <CardHeader>
            <CardTitle>Recent Sync Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {syncLogs.map((log) => (
                <div key={log.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-muted/20 border border-border/50 rounded-lg gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-full mt-1 ${log.type === 'push' ? 'bg-blue-500/10 text-blue-500' : 'bg-green-500/10 text-green-500'}`}>
                      {log.type === 'push' ? <Upload className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                    </div>
                    <div>
                      <p className="font-medium flex items-center gap-2">
                        {log.item} 
                        <Badge variant="outline" className={log.status === 'success' ? 'text-success border-success/30' : 'text-destructive border-destructive/30'}>{log.status}</Badge>
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {log.type === 'push' ? `To: ${log.destination}` : `From: ${log.source}`} • {log.size}
                      </p>
                      {log.reason && <p className="text-xs text-destructive mt-1">Error: {log.reason}</p>}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{log.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
