import { createFileRoute } from '@tanstack/react-router'
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { FolderKanban, Plus, FileVideo, FileText, FileQuestion, GripVertical, DownloadCloud, HardDrive } from "lucide-react"

export const Route = createFileRoute('/lecturer/builder')({
  component: LecturerBuilderComponent,
})

function LecturerBuilderComponent() {
  const modules = [
    { id: 1, title: "Module 1: Introduction to IP Addressing", items: [
      { type: "video", title: "IPv4 vs IPv6 Basics", size: "145 MB" },
      { type: "pdf", title: "Subnetting Cheat Sheet", size: "2 MB" },
      { type: "quiz", title: "IP Basics Check", size: "12 KB" },
    ]},
    { id: 2, title: "Module 2: Routing Protocols", items: [
      { type: "video", title: "OSPF Configuration", size: "210 MB" },
      { type: "assignment", title: "Packet Tracer Lab 1", size: "5 MB" },
    ]}
  ];

  return (
    <DashboardLayout role="lecturer" title="Course Builder" subtitle="Create lessons and bundle them into compressed packages for offline USB/LAN distribution.">
      <div className="grid lg:grid-cols-[1fr_300px] gap-6">
        
        {/* Builder Area */}
        <div className="space-y-6">
          <div className="flex justify-between items-center bg-background p-4 rounded-xl border border-border/60 shadow-sm">
            <div>
              <h3 className="font-semibold text-lg">Networking Essentials (CCNA Foundations)</h3>
              <p className="text-sm text-muted-foreground">Status: Draft • Auto-saved 2 mins ago</p>
            </div>
            <Button variant="outline"><Plus className="w-4 h-4 mr-2" /> Add Module</Button>
          </div>

          {modules.map((mod) => (
            <Card key={mod.id} className="border-border/60">
              <CardHeader className="bg-muted/20 pb-4 border-b border-border/50">
                <div className="flex items-center gap-2">
                  <GripVertical className="w-5 h-5 text-muted-foreground cursor-grab" />
                  <CardTitle className="text-lg">{mod.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border/50">
                  {mod.items.map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 hover:bg-muted/10 transition-colors">
                      <div className="flex items-center gap-3">
                        <GripVertical className="w-4 h-4 text-muted-foreground/50 cursor-grab" />
                        <div className={`p-2 rounded-md ${item.type === 'video' ? 'bg-blue-500/10 text-blue-500' : item.type === 'pdf' ? 'bg-red-500/10 text-red-500' : 'bg-green-500/10 text-green-500'}`}>
                          {item.type === 'video' ? <FileVideo className="w-4 h-4" /> : item.type === 'pdf' ? <FileText className="w-4 h-4" /> : <FileQuestion className="w-4 h-4" />}
                        </div>
                        <span className="font-medium text-sm">{item.title}</span>
                      </div>
                      <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-md">{item.size}</span>
                    </div>
                  ))}
                </div>
                <div className="p-3 bg-muted/5 border-t border-border/50 text-center">
                  <Button variant="ghost" size="sm" className="text-muted-foreground"><Plus className="w-4 h-4 mr-2" /> Add Lesson Material</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sidebar Actions */}
        <div className="space-y-6">
          <Card className="border-border/60 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg text-primary flex items-center gap-2"><DownloadCloud className="w-5 h-5" /> Offline Packager</CardTitle>
              <CardDescription>Compress and bundle this course for local server or USB distribution.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Estimated Size</span>
                <span className="font-bold">362 MB</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Videos Compressed</span>
                <Badge variant="outline" className="bg-success/10 text-success border-success/20">Yes (720p)</Badge>
              </div>
              <Button className="w-full shadow-md shadow-primary/20"><HardDrive className="w-4 h-4 mr-2" /> Generate Offline Package</Button>
            </CardContent>
          </Card>

          <Card className="border-border/60">
            <CardHeader>
              <CardTitle className="text-lg">Publish Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full">Save Draft</Button>
              <Button className="w-full bg-success hover:bg-success/90 text-success-foreground">Publish to Students</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
