import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Search,
  Plus,
  MoreVertical,
  Send,
  Paperclip,
  Mic,
  Image,
  Smile,
  Pin,
  MessageCircle,
  Clock,
  WifiOff,
  Check,
  CheckCheck,
  Phone,
  Video,
  Menu,
  ChevronLeft,
  Volume2,
  Archive,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/messages")({
  component: MessagesComponent,
});

function MessagesComponent() {
  const [selectedChat, setSelectedChat] = useState<any>(null);

  const chats = [
    { id: 1, name: "Eng. Kamau", role: "Lecturer", lastMsg: "Please check the new topology PDF.", time: "10:24 AM", unread: 2, online: true, type: "individual" },
    { id: 2, name: "ICT Group 2024", role: "Course Group", lastMsg: "Amina: Does anyone have the lab setup?", time: "9:15 AM", unread: 0, online: false, type: "group" },
    { id: 3, name: "Solar Lab Practical", role: "Group Discussion", lastMsg: "Sarah: I finished the wiring diagram.", time: "Yesterday", unread: 0, online: true, type: "group" },
  ];

  return (
    <DashboardLayout role="student" title="Communications" subtitle="Connect with instructors and peers. Messages queue for sync when offline.">
      <Card className="border-border/40 bg-card/40 backdrop-blur-sm rounded-[2.5rem] overflow-hidden shadow-2xl h-[calc(100vh-250px)] flex">
        {/* Sidebar */}
        <div className="w-full md:w-96 border-r border-border/40 flex flex-col bg-muted/10">
          <div className="p-6 border-b border-border/40 space-y-4">
             <div className="flex justify-between items-center">
                <h3 className="text-xl font-black">Messages</h3>
                <Button variant="ghost" size="icon" className="rounded-full"><Plus className="w-5 h-5" /></Button>
             </div>
             <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search conversations..." className="h-10 pl-10 rounded-xl bg-background/50 border-border/60" />
             </div>
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar">
             {chats.map((chat) => (
                <div key={chat.id} onClick={() => setSelectedChat(chat)} className={`p-4 rounded-2xl flex gap-4 cursor-pointer transition-all ${selectedChat?.id === chat.id ? "bg-primary text-white shadow-lg shadow-primary/20" : "hover:bg-muted/50"}`}>
                   <div className="relative shrink-0">
                      <Avatar className="h-12 w-12 border-2 border-background">
                         <AvatarFallback className={`${selectedChat?.id === chat.id ? "bg-white/20 text-white" : "bg-primary/10 text-primary"} font-black`}>{chat.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      {chat.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-background"></div>}
                   </div>
                   <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline">
                         <h4 className="font-black text-sm truncate">{chat.name}</h4>
                         <span className={`text-[10px] font-bold ${selectedChat?.id === chat.id ? "text-white/70" : "text-muted-foreground"}`}>{chat.time}</span>
                      </div>
                      <p className={`text-xs truncate ${selectedChat?.id === chat.id ? "text-white/80" : "text-muted-foreground"}`}>{chat.lastMsg}</p>
                      <div className="flex items-center gap-2 mt-1">
                         <Badge className={`text-[10px] font-black border-none px-2 py-0 ${selectedChat?.id === chat.id ? "bg-white/20 text-white" : "bg-muted/50 text-muted-foreground"}`}>{chat.role.toUpperCase()}</Badge>
                         {chat.unread > 0 && <Badge className="bg-accent text-white border-none h-4 px-1">{chat.unread}</Badge>}
                      </div>
                   </div>
                </div>
             ))}
          </div>
        </div>

        {/* Chat Area */}
        {selectedChat ? (
           <div className="flex-1 flex flex-col bg-background/30 relative">
              <div className="p-6 border-b border-border/40 flex justify-between items-center bg-background/50 backdrop-blur-md">
                 <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10 border border-border/40">
                       <AvatarFallback className="bg-primary/10 text-primary font-black">EK</AvatarFallback>
                    </Avatar>
                    <div>
                       <h4 className="font-black text-sm">{selectedChat.name}</h4>
                       <p className="text-[10px] font-bold text-success uppercase tracking-widest">Active Now</p>
                    </div>
                 </div>
                 <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground"><Phone className="w-5 h-5" /></Button>
                    <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground"><Video className="w-5 h-5" /></Button>
                    <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground"><MoreVertical className="w-5 h-5" /></Button>
                 </div>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed opacity-95">
                 <div className="flex justify-center mb-10">
                    <Badge variant="outline" className="bg-background/80 backdrop-blur border-border/40 font-black text-[10px] py-1 px-4">TODAY</Badge>
                 </div>
                 
                 <div className="flex justify-start">
                    <div className="max-w-[70%] bg-muted/50 backdrop-blur-sm p-4 rounded-3xl rounded-tl-none border border-border/40 shadow-sm">
                       <p className="text-sm font-medium">Hello Amina, please find the attached network topology for your project.</p>
                       <span className="text-[10px] font-black text-muted-foreground uppercase mt-2 block">10:20 AM</span>
                    </div>
                 </div>

                 <div className="flex justify-end">
                    <div className="max-w-[70%] bg-primary p-4 rounded-3xl rounded-tr-none text-white shadow-xl">
                       <p className="text-sm font-medium">Thank you Eng. Kamau! I'll review it and submit my report offline today.</p>
                       <div className="flex justify-end items-center gap-1 mt-2">
                          <span className="text-[10px] font-black text-white/70 uppercase">10:22 AM</span>
                          <CheckCheck className="w-3 h-3 text-white/70" />
                       </div>
                    </div>
                 </div>

                 <div className="flex justify-end">
                    <div className="max-w-[70%] bg-amber-500/10 border border-amber-500/20 p-4 rounded-3xl rounded-tr-none shadow-sm">
                       <p className="text-sm font-medium text-amber-700">Question: Does the design include the VOIP subsystem?</p>
                       <div className="flex justify-end items-center gap-1 mt-2">
                          <span className="text-[10px] font-black text-amber-600 uppercase">10:24 AM</span>
                          <WifiOff className="w-3 h-3 text-amber-600" />
                       </div>
                    </div>
                 </div>
              </div>

              <div className="p-6 bg-background/50 backdrop-blur-md border-t border-border/40 space-y-4">
                 {/* Offline Queue Notice */}
                 <div className="flex items-center gap-2 text-[10px] font-black text-amber-600 bg-amber-500/5 py-1.5 px-4 rounded-full border border-amber-200/50 w-fit mx-auto">
                    <WifiOff className="w-3 h-3" /> 1 Message Queued for Offline Sync
                 </div>
                 
                 <div className="flex items-center gap-3">
                    <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-primary"><Paperclip className="w-5 h-5" /></Button>
                    <div className="flex-1 relative">
                       <Input placeholder="Write your message..." className="h-12 px-6 rounded-2xl bg-muted/20 border-border/40 focus:ring-primary/20" />
                    </div>
                    <Button size="icon" className="h-12 w-12 rounded-2xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"><Send className="w-5 h-5" /></Button>
                 </div>
              </div>
           </div>
        ) : (
           <div className="flex-1 flex flex-col items-center justify-center text-center p-20 space-y-6">
              <div className="h-32 w-32 bg-primary/5 rounded-full flex items-center justify-center">
                 <MessageCircle className="w-16 h-16 text-primary opacity-20" />
              </div>
              <div className="space-y-2">
                 <h3 className="text-2xl font-black">Select a Conversation</h3>
                 <p className="text-muted-foreground font-medium max-w-sm">Pick a discussion group or lecturer to start communicating.</p>
              </div>
           </div>
        )}
      </Card>
    </DashboardLayout>
  );
}
