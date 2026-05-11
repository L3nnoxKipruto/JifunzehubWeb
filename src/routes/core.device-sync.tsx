import { createFileRoute } from '@tanstack/react-router'
import { PublicLayout } from "@/components/site/PublicLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Laptop, Smartphone, Search, Wifi, WifiOff, RefreshCw } from "lucide-react"

export const Route = createFileRoute('/core/device-sync')({
  component: CoreDeviceSyncComponent,
})

function CoreDeviceSyncComponent() {
  const devices = [
    { id: "DEV-104", type: "laptop", user: "Amina Hussein", status: "online", lastSync: "2 mins ago", syncHealth: "100%" },
    { id: "DEV-089", type: "mobile", user: "John Ochieng", status: "offline", lastSync: "4 hours ago", syncHealth: "98%" },
    { id: "DEV-211", type: "laptop", user: "Library PC 4", status: "online", lastSync: "Just now", syncHealth: "100%" },
    { id: "DEV-156", type: "mobile", user: "Sarah W.", status: "offline", lastSync: "2 days ago", syncHealth: "85%" },
  ];

  return (
    <PublicLayout>
      <div className="container mx-auto py-12 px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Device Sync Status</h1>
            <p className="text-muted-foreground mt-1">Monitor offline/online states and sync history across all registered devices.</p>
          </div>
          <Button variant="outline" className="shrink-0"><RefreshCw className="w-4 h-4 mr-2" /> Refresh Data</Button>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="border-border/60 bg-primary/5 border-primary/20">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-primary mb-1">Total Devices</p>
                <p className="text-2xl font-bold">248</p>
              </div>
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Laptop className="w-5 h-5" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-border/60 bg-green-500/5 border-green-500/20">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600 mb-1">Online Now</p>
                <p className="text-2xl font-bold">42</p>
              </div>
              <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center text-green-600">
                <Wifi className="w-5 h-5" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-border/60 bg-amber-500/5 border-amber-500/20">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-amber-600 mb-1">Offline</p>
                <p className="text-2xl font-bold">206</p>
              </div>
              <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-600">
                <WifiOff className="w-5 h-5" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-border/60">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Avg Sync Health</p>
                <p className="text-2xl font-bold">96%</p>
              </div>
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground">
                <RefreshCw className="w-5 h-5" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border/60">
          <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4">
            <div>
              <CardTitle>Connected Devices</CardTitle>
              <CardDescription>Real-time view of device connection status</CardDescription>
            </div>
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search by Device ID or User..." className="pl-8 bg-muted/30" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border border-border/50">
              <Table>
                <TableHeader className="bg-muted/20">
                  <TableRow>
                    <TableHead>Device ID</TableHead>
                    <TableHead>User / Location</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Health</TableHead>
                    <TableHead className="text-right">Last Sync</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {devices.map((device) => (
                    <TableRow key={device.id}>
                      <TableCell className="font-medium flex items-center gap-2">
                        {device.type === 'laptop' ? <Laptop className="w-4 h-4 text-muted-foreground" /> : <Smartphone className="w-4 h-4 text-muted-foreground" />}
                        {device.id}
                      </TableCell>
                      <TableCell>{device.user}</TableCell>
                      <TableCell>
                        <Badge 
                          variant="outline" 
                          className={device.status === 'online' ? 'bg-green-500/10 text-green-600 border-green-500/20' : 'bg-muted text-muted-foreground border-border'}
                        >
                          {device.status === 'online' && <Wifi className="w-3 h-3 mr-1" />}
                          {device.status === 'offline' && <WifiOff className="w-3 h-3 mr-1" />}
                          {device.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <span className={`text-sm ${parseInt(device.syncHealth) < 90 ? 'text-orange-500 font-medium' : 'text-muted-foreground'}`}>
                          {device.syncHealth}
                        </span>
                      </TableCell>
                      <TableCell className="text-right text-muted-foreground text-sm">{device.lastSync}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </PublicLayout>
  )
}
