import { createFileRoute } from '@tanstack/react-router'
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  User, Settings, Bell, Palette, Globe, 
  WifiOff, ShieldLock, Smartphone, Save,
  Camera, Trash2, SmartphoneIcon, Laptop,
  Lock, LogOut, CheckCircle2, MoreVertical
} from "lucide-react"

export const Route = createFileRoute('/dashboard/settings')({
  component: SettingsComponent,
})

function SettingsComponent() {
  return (
    <DashboardLayout role="student" title="Workspace Settings" subtitle="Personalize your learning experience and manage your offline data preferences.">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Navigation (Simulated) */}
        <aside className="w-full lg:w-64 shrink-0 space-y-1">
          {[
            { id: 'profile', label: 'Profile & Identity', icon: User },
            { id: 'account', label: 'Security & Account', icon: ShieldLock },
            { id: 'notifications', label: 'Notifications', icon: Bell },
            { id: 'appearance', label: 'Appearance', icon: Palette },
            { id: 'language', label: 'Language', icon: Globe },
            { id: 'offline', label: 'Offline & Storage', icon: WifiOff },
            { id: 'devices', label: 'Linked Devices', icon: SmartphoneIcon },
          ].map((item) => (
            <Button 
              key={item.id} 
              variant="ghost" 
              className={`w-full justify-start gap-3 h-11 ${item.id === 'profile' ? 'bg-muted font-bold text-foreground' : 'text-muted-foreground font-medium'}`}
            >
              <item.icon className={`w-4 h-4 ${item.id === 'profile' ? 'text-primary' : ''}`} />
              {item.label}
            </Button>
          ))}
          <div className="pt-4 mt-4 border-t border-border/50">
            <Button variant="ghost" className="w-full justify-start gap-3 h-11 text-destructive hover:bg-destructive/10 hover:text-destructive">
               <LogOut className="w-4 h-4" /> Sign Out
            </Button>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 space-y-8 pb-20">
          
          {/* Profile Section */}
          <Card className="border-border/60 shadow-soft overflow-hidden bg-background">
             <CardHeader className="p-6 border-b border-border/40">
               <div className="flex items-center justify-between">
                 <CardTitle className="text-xl">Profile & Identity</CardTitle>
                 <Button size="sm" className="bg-primary hover:bg-primary/90"><Save className="w-4 h-4 mr-2" /> Save Changes</Button>
               </div>
               <CardDescription>Manage your public identity within the institution.</CardDescription>
             </CardHeader>
             <CardContent className="p-6 space-y-8">
                
                <div className="flex flex-col sm:flex-row items-center gap-8">
                   <div className="relative group">
                     <Avatar className="h-28 w-28 border-4 border-muted/50 ring-4 ring-background">
                       <AvatarFallback className="bg-gradient-primary text-primary-foreground text-3xl font-bold">AH</AvatarFallback>
                     </Avatar>
                     <Button size="icon" className="absolute bottom-0 right-0 h-9 w-9 rounded-full bg-primary border-4 border-background shadow-lg hover:scale-110 transition-transform">
                        <Camera className="w-4 h-4 text-white" />
                     </Button>
                   </div>
                   <div className="space-y-4 flex-1 w-full">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name</Label>
                          <Input defaultValue="Amina Hussein" className="h-10 bg-muted/30" />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Student ID</Label>
                          <Input defaultValue="STUD-KP-2024-089" disabled className="h-10 bg-muted/10 opacity-70" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Bio / Learning Focus</Label>
                        <Input defaultValue="I am passionate about ICT and Networking. Aiming for CCNA certification." className="h-10 bg-muted/30" />
                      </div>
                   </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-border/40">
                   <div className="space-y-2">
                     <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Institution</Label>
                     <p className="text-sm font-semibold p-3 rounded-lg bg-muted/50 border border-border/50">Kisumu Polytechnic</p>
                   </div>
                   <div className="space-y-2">
                     <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Department</Label>
                     <p className="text-sm font-semibold p-3 rounded-lg bg-muted/50 border border-border/50">ICT & Digital Transformation</p>
                   </div>
                </div>

             </CardContent>
          </Card>

          {/* Offline & Storage Preferences */}
          <Card className="border-border/60 shadow-soft bg-background">
             <CardHeader className="p-6 border-b border-border/40">
                <CardTitle className="text-xl flex items-center gap-2"><WifiOff className="w-5 h-5 text-accent" /> Offline & Storage</CardTitle>
                <CardDescription>Configure how your device manages cached educational content.</CardDescription>
             </CardHeader>
             <CardContent className="p-6 space-y-6">
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="font-bold">Auto-Cache Lessons</Label>
                    <p className="text-xs text-muted-foreground">Automatically download the next 3 lessons in your active courses when on Wi-Fi.</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="font-bold">Prefer Low Resolution Videos</Label>
                    <p className="text-xs text-muted-foreground">Saves storage space by downloading 480p instead of 720p/1080p.</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="space-y-4 pt-4 border-t border-border/40">
                  <div className="flex justify-between items-center text-sm">
                    <Label className="font-bold">Storage Quota</Label>
                    <span className="font-mono text-xs text-muted-foreground">1.6 GB used of 5.0 GB</span>
                  </div>
                  <Progress value={32} className="h-2 bg-muted" indicatorColor="bg-primary" />
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" className="h-8 text-xs">Analyze Storage</Button>
                    <Button variant="outline" size="sm" className="h-8 text-xs text-destructive hover:bg-destructive/10">Clear Cached Media</Button>
                  </div>
                </div>

             </CardContent>
          </Card>

          {/* Linked Devices */}
          <Card className="border-border/60 shadow-soft bg-background">
             <CardHeader className="p-6 border-b border-border/40">
                <CardTitle className="text-xl">Linked Devices</CardTitle>
                <CardDescription>Manage the devices authorized for offline learning.</CardDescription>
             </CardHeader>
             <CardContent className="p-0">
                <div className="divide-y divide-border/50">
                   <div className="p-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                         <div className="p-2 bg-primary/10 text-primary rounded-lg"><Smartphone className="w-5 h-5" /></div>
                         <div>
                            <h4 className="text-sm font-bold">Infinix Note 30 (This Device)</h4>
                            <p className="text-xs text-muted-foreground">Last synced: 10 minutes ago via Campus Hotspot</p>
                         </div>
                      </div>
                      <Badge className="bg-success text-success-foreground">Active</Badge>
                   </div>
                   <div className="p-6 flex items-center justify-between opacity-60">
                      <div className="flex items-center gap-4">
                         <div className="p-2 bg-muted text-muted-foreground rounded-lg"><Laptop className="w-5 h-5" /></div>
                         <div>
                            <h4 className="text-sm font-bold">HP Pavilion Lab Computer</h4>
                            <p className="text-xs text-muted-foreground">Last synced: August 12, 2024</p>
                         </div>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive"><Trash2 className="w-4 h-4" /></Button>
                   </div>
                </div>
                <div className="p-4 bg-muted/20 border-t border-border/40 text-center">
                   <Button variant="ghost" size="sm" className="text-xs text-primary font-bold">Link New Device</Button>
                </div>
             </CardContent>
          </Card>

        </div>
      </div>
    </DashboardLayout>
  )
}
