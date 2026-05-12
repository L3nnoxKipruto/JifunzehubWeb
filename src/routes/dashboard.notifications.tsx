import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, BookOpen, AlertCircle, CheckCircle2, MessageSquare, Clock } from "lucide-react";

export const Route = createFileRoute("/dashboard/notifications")({
  head: () => ({ meta: [{ title: "Notifications — JifunzeHub" }] }),
  component: DashboardNotifications,
});

function DashboardNotifications() {
  const notifications = [
    { 
      id: 1, 
      type: "assignment", 
      title: "New Assignment: Solar Panel Sizing", 
      course: "Solar Installation", 
      time: "2 mins ago (Synced)", 
      icon: BookOpen, 
      color: "text-blue-500", 
      bg: "bg-blue-500/10",
      unread: true 
    },
    { 
      id: 2, 
      type: "alert", 
      title: "Fee Reminder", 
      desc: "Please clear your Term 1 balance of KES 25,000 before the end of the month.", 
      time: "Yesterday", 
      icon: AlertCircle, 
      color: "text-amber-500", 
      bg: "bg-amber-500/10",
      unread: true 
    },
    { 
      id: 3, 
      type: "message", 
      title: "Message from Lecturer", 
      course: "Networking Essentials", 
      desc: "The practical lab for tomorrow has been moved to Lab 3. Please bring your crimping tools.", 
      time: "3 days ago", 
      icon: MessageSquare, 
      color: "text-primary", 
      bg: "bg-primary/10",
      unread: false 
    },
    { 
      id: 4, 
      type: "system", 
      title: "Sync Completed", 
      desc: "Successfully downloaded 2 videos and 1 PDF for Hospitality Management.", 
      time: "1 week ago", 
      icon: CheckCircle2, 
      color: "text-success", 
      bg: "bg-success/10",
      unread: false 
    },
  ];

  return (
    <DashboardLayout role="student" title="Notifications" subtitle="Stay updated with announcements, new assignments, and sync alerts.">
      <div className="max-w-4xl space-y-6">
        
        <div className="flex justify-between items-center bg-card/40 backdrop-blur-sm p-4 rounded-2xl border border-border/40">
           <div className="flex gap-2">
              <Button variant="secondary" size="sm" className="rounded-lg h-8 text-xs font-semibold">All</Button>
              <Button variant="ghost" size="sm" className="rounded-lg h-8 text-xs font-semibold text-muted-foreground">Unread (2)</Button>
              <Button variant="ghost" size="sm" className="rounded-lg h-8 text-xs font-semibold text-muted-foreground">Assignments</Button>
           </div>
           <Button variant="ghost" size="sm" className="rounded-lg h-8 text-xs font-semibold text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 mr-1"/> Mark all as read
           </Button>
        </div>

        <div className="space-y-3">
           {notifications.map((n) => (
             <Card key={n.id} className={`border-border/40 shadow-sm transition-all hover:border-border/80 ${n.unread ? 'bg-card/80 backdrop-blur-sm shadow-md' : 'bg-card/30 opacity-80'}`}>
                <CardContent className="p-5 flex gap-4 items-start">
                   <div className={`p-3 rounded-xl shrink-0 mt-1 ${n.bg} ${n.color}`}>
                      <n.icon className="w-5 h-5" />
                   </div>
                   <div className="flex-1 space-y-1.5">
                      <div className="flex justify-between items-start">
                         <h4 className={`text-sm ${n.unread ? 'font-bold' : 'font-medium'}`}>{n.title}</h4>
                         <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-semibold">
                            <Clock className="w-3 h-3" /> {n.time}
                         </div>
                      </div>
                      {n.course && (
                        <p className="text-xs font-semibold text-primary">{n.course}</p>
                      )}
                      {n.desc && (
                        <p className="text-xs text-muted-foreground leading-relaxed">{n.desc}</p>
                      )}
                      
                      {n.type === 'assignment' && n.unread && (
                        <div className="pt-3 flex gap-2">
                           <Button size="sm" className="h-8 text-xs rounded-lg font-semibold">View Assignment</Button>
                        </div>
                      )}
                      {n.type === 'alert' && n.unread && (
                        <div className="pt-3 flex gap-2">
                           <Button size="sm" variant="outline" className="h-8 text-xs rounded-lg font-semibold border-amber-500/30 text-amber-500 hover:bg-amber-500/10">View Statement</Button>
                        </div>
                      )}
                   </div>
                   {n.unread && (
                     <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                   )}
                </CardContent>
             </Card>
           ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
