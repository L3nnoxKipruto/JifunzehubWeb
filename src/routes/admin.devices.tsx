import { createFileRoute } from '@tanstack/react-router'
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, TabletSmartphone, Laptop, ShieldCheck, ShieldAlert, RefreshCw, Trash2, WifiOff } from "lucide-react"

export const Route = createFileRoute('/admin/devices')({
  component: AdminDevicesComponent,
})

function AdminDevicesComponent() {
  const devices = [
    { id: "DEV-842", owner: "Amina Hussein", type: "Tablet", storage: "6.2 GB", lastSync: "10 mins ago", status: "online", auth: "authorized" },
    { id: "DEV-115", owner: "Eng. Kamau", type: "Laptop", storage: "12.4 GB", lastSync: "2 hours ago", status: "offline", auth: "authorized" },
    { id: "DEV-993", owner: "Unknown", type: "Mobile", storage: "0 GB", lastSync: "Never", status: "offline", auth: "pending" },
    { id: "DEV-402", owner: "Peter Mutua", type: "Tablet", storage: "4.1 GB", lastSync: "1 week ago", status: "offline", auth: "revoked" },
  ];

  return (
    <DashboardLayout role="admin" title="Device Management" subtitle="Control ecosystem access, authorize hardware, and track device sync statuses.">
      <div className="space-y-6">
        
        <div className="grid gap-4 md:grid-cols-4 mb-6">
          <Card className="border-border/60 bg-primary/5">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-primary mb-1">Registered Devices</p>
                <p className="text-2xl font-bold text-foreground">1,402</p>
              </div>
              <TabletSmartphone className="w-8 h-8 text-primary/40" />
            </CardContent>
          </Card>
          <Card className="border-border/60 bg-success/5">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-success mb-1">Online / LAN</p>
                <p className="text-2xl font-bold text-foreground">184</p>
              </div>
              <div className="w-3 h-3 rounded-full bg-success animate-pulse"></div>
            </CardContent>
          </Card>
          <Card className="border-border/60 bg-amber-500/5">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-amber-600 mb-1">Pending Auth</p>
                <p className="text-2xl font-bold text-foreground">12</p>
              </div>
              <ShieldAlert className="w-8 h-8 text-amber-500/40" />
            </CardContent>
          </Card>
        </div>

        <Card className="border-border/60">
          <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <CardTitle>Device Fleet</CardTitle>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search device ID or owner..." className="pl-8 bg-muted/50" />
              </div>
              <Button variant="outline" className="shrink-0"><ShieldCheck className="w-4 h-4 mr-2" /> Authorize All</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border border-border/50 overflow-hidden">
              <Table>
                <TableHeader className="bg-muted/30">
                  <TableRow>
                    <TableHead>Device ID</TableHead>
                    <TableHead>Owner</TableHead>
                    <TableHead>Storage Used</TableHead>
                    <TableHead>Status / Last Sync</TableHead>
                    <TableHead>Authorization</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {devices.map((device) => (
                    <TableRow key={device.id}>
                      <TableCell>
                        <div className="font-medium flex items-center gap-2">
                          {device.type === 'Laptop' ? <Laptop className="w-4 h-4 text-muted-foreground" /> : <TabletSmartphone className="w-4 h-4 text-muted-foreground" />}
                          {device.id}
                        </div>
                      </TableCell>
                      <TableCell>{device.owner}</TableCell>
                      <TableCell className="text-muted-foreground">{device.storage}</TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <span className={`text-xs font-medium flex items-center gap-1 ${device.status === 'online' ? 'text-success' : 'text-muted-foreground'}`}>
                            {device.status === 'online' ? <div className="w-2 h-2 rounded-full bg-success"></div> : <WifiOff className="w-3 h-3" />}
                            {device.status === 'online' ? 'Connected via LAN' : 'Offline'}
                          </span>
                          <span className="text-xs text-muted-foreground">Sync: {device.lastSync}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        {device.auth === 'authorized' ? (
                          <Badge variant="outline" className="bg-success/10 text-success border-success/20"><ShieldCheck className="w-3 h-3 mr-1" /> Authorized</Badge>
                        ) : device.auth === 'pending' ? (
                          <Badge variant="secondary" className="bg-amber-500/20 text-amber-700 dark:text-amber-400 hover:bg-amber-500/30 cursor-pointer">Review Request</Badge>
                        ) : (
                          <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20"><ShieldAlert className="w-3 h-3 mr-1" /> Revoked</Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon" title="Force Sync" className="text-primary hover:text-primary hover:bg-primary/10">
                            <RefreshCw className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" title="Remove Device" className="text-destructive hover:text-destructive hover:bg-destructive/10">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
