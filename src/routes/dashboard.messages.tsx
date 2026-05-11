import { createFileRoute } from "@tanstack/react-router";
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
  const conversations = [
    {
      id: 1,
      name: "Eng. Kamau",
      role: "Lecturer",
      lastMsg: "Please check the new practical worksheet I uploaded.",
      time: "10:24 AM",
      unread: 2,
      online: true,
      pinned: true,
    },
    {
      id: 2,
      name: "ICT Group 2024",
      role: "Course Group",
      lastMsg: "Amina: Does anyone have the lab setup PDF?",
      time: "9:15 AM",
      unread: 0,
      online: false,
      pinned: true,
    },
    {
      id: 3,
      name: "Student Services",
      role: "System Alert",
      lastMsg: "Campus LAN will be down for maintenance at 2PM.",
      time: "Yesterday",
      unread: 0,
      online: true,
      pinned: false,
    },
    {
      id: 4,
      name: "Sarah Wanjiru",
      role: "Student",
      lastMsg: "Thanks for the help with subnetting!",
      time: "Yesterday",
      unread: 0,
      online: false,
      pinned: false,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "Eng. Kamau",
      text: "Hello Amina, how are you finding Module 4?",
      time: "10:20 AM",
      own: false,
    },
    {
      id: 2,
      sender: "Me",
      text: "I'm finding the subnetting part a bit challenging, but the offline videos help!",
      time: "10:22 AM",
      own: true,
      status: "read",
    },
    {
      id: 3,
      sender: "Eng. Kamau",
      text: "Please check the new practical worksheet I uploaded. It breaks it down step-by-step.",
      time: "10:24 AM",
      own: false,
    },
    {
      id: 4,
      sender: "Me",
      text: "Great, I'll download it while I'm still on campus LAN.",
      time: "10:25 AM",
      own: true,
      status: "queued",
    },
  ];

  return (
    <DashboardLayout
      role="student"
      title="Communication Center"
      subtitle="Connect with lecturers and peers, even when offline (messages queue for sync)."
    >
      <Card className="border-border/60 overflow-hidden h-[calc(100vh-220px)] flex flex-col lg:flex-row bg-background shadow-elegant">
        {/* Left Sidebar: Conversations List */}
        <div className="w-full lg:w-[350px] border-r border-border/60 flex flex-col bg-muted/10 h-full">
          <div className="p-4 border-b border-border/60 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg">Messages</h3>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <Archive className="w-4 h-4 text-muted-foreground" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full bg-background"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search chats..."
                className="h-9 pl-9 bg-background/50 border-border/60 focus-visible:ring-accent/40"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {conversations.map((chat) => (
              <div
                key={chat.id}
                className={`p-4 flex gap-3 cursor-pointer transition-colors border-b border-border/40 relative ${chat.unread > 0 ? "bg-accent/5" : "hover:bg-muted/50"}`}
              >
                {chat.id === 1 && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent"></div>
                )}
                <div className="relative shrink-0">
                  <Avatar className="h-12 w-12 border-2 border-background shadow-sm">
                    <AvatarFallback
                      className={
                        chat.id % 2 === 0
                          ? "bg-primary/20 text-primary"
                          : "bg-accent/20 text-accent"
                      }
                    >
                      {chat.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  {chat.online && (
                    <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-success shadow-sm"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h4
                      className={`text-sm truncate ${chat.unread > 0 ? "font-bold" : "font-semibold"}`}
                    >
                      {chat.name}
                    </h4>
                    <span className="text-[10px] text-muted-foreground font-medium shrink-0 ml-2">
                      {chat.time}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate leading-relaxed">
                    {chat.lastMsg}
                  </p>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    {chat.pinned && <Pin className="w-2.5 h-2.5 text-accent fill-accent" />}
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">
                      {chat.role}
                    </span>
                    {chat.unread > 0 && (
                      <Badge className="h-4 px-1.5 rounded-full bg-accent text-[10px] ml-auto">
                        {chat.unread}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar: Chat Area */}
        <div className="flex-1 flex flex-col bg-background relative h-full">
          {/* Chat Header */}
          <div className="h-16 shrink-0 border-b border-border/60 px-4 flex items-center justify-between bg-background/50 backdrop-blur-md z-10">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="lg:hidden h-8 w-8 -ml-1 mr-1">
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Avatar className="h-9 w-9 border border-border/50">
                <AvatarFallback className="bg-primary/20 text-primary font-bold">EK</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-sm font-bold leading-tight">Eng. Kamau</h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-success"></div>
                  <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">
                    Active Now
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full text-muted-foreground hover:text-primary"
              >
                <Phone className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full text-muted-foreground hover:text-primary"
              >
                <Video className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full text-muted-foreground"
              >
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed opacity-95">
            <div className="flex justify-center my-4">
              <Badge
                variant="outline"
                className="bg-background/80 backdrop-blur border-border/60 text-[10px] font-bold uppercase tracking-widest py-1 px-3"
              >
                October 11, 2024
              </Badge>
            </div>

            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.own ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[75%] space-y-1`}>
                  <div
                    className={`p-3 rounded-2xl text-sm shadow-sm relative group transition-all ${
                      m.own
                        ? "bg-primary text-primary-foreground rounded-tr-none"
                        : "bg-muted/80 backdrop-blur-sm border border-border/50 rounded-tl-none"
                    }`}
                  >
                    {m.text}
                    {/* Reactions Placeholder */}
                    <div className="absolute -bottom-2 -right-1 opacity-0 group-hover:opacity-100 transition-opacity bg-background border border-border/60 rounded-full px-1 flex gap-0.5 py-0.5 shadow-sm">
                      <span className="text-[10px] cursor-pointer">👍</span>
                      <span className="text-[10px] cursor-pointer">❤️</span>
                    </div>
                  </div>
                  <div
                    className={`flex items-center gap-1.5 px-1 ${m.own ? "justify-end" : "justify-start"}`}
                  >
                    <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-tighter">
                      {m.time}
                    </span>
                    {m.own && (
                      <span className="text-primary-foreground/70">
                        {m.status === "read" ? (
                          <CheckCheck className="w-3 h-3 text-primary" />
                        ) : m.status === "queued" ? (
                          <WifiOff className="w-3 h-3 text-amber-500" />
                        ) : (
                          <Check className="w-3 h-3 text-muted-foreground" />
                        )}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            <div className="flex justify-start">
              <div className="bg-muted/50 rounded-full px-3 py-1.5 flex items-center gap-1">
                <div className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce"></div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce delay-100"></div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-4 bg-background border-t border-border/60 space-y-3">
            {messages.find((m) => m.status === "queued") && (
              <div className="flex items-center gap-2 text-[10px] font-bold text-amber-600 bg-amber-500/5 py-1 px-3 rounded-full w-fit mx-auto border border-amber-200/50">
                <WifiOff className="w-3 h-3" /> 1 Message Queued for Offline Sync
              </div>
            )}
            <div className="flex items-end gap-2">
              <div className="flex-1 bg-muted/30 rounded-2xl border border-border/60 focus-within:border-accent/50 focus-within:ring-1 focus-within:ring-accent/20 transition-all p-1 flex items-end">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full text-muted-foreground hover:text-accent"
                >
                  <Paperclip className="w-4 h-4" />
                </Button>
                <textarea
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2 px-2 resize-none min-h-[40px] max-h-[120px] custom-scrollbar h-auto"
                  rows={1}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full text-muted-foreground hover:text-accent"
                >
                  <Smile className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full text-muted-foreground hover:text-accent"
                >
                  <Image className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex flex-col gap-2">
                <Button
                  size="icon"
                  className="h-10 w-10 rounded-full bg-primary hover:bg-primary/90 shadow-md shadow-primary/20 shrink-0"
                >
                  <Send className="w-4 h-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-10 w-10 rounded-full border-border/60 text-muted-foreground hover:text-accent hidden sm:flex"
                >
                  <Mic className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </DashboardLayout>
  );
}
