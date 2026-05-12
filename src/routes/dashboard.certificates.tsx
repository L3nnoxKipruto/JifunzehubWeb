import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Trophy,
  Award,
  Download,
  Share2,
  Calendar,
  GraduationCap,
  Printer,
  ShieldCheck,
  Star,
  TrendingUp,
  Zap,
  Clock,
  History,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/certificates")({
  component: CertificatesComponent,
});

function CertificatesComponent() {
  const earnedCertificates = [
    {
      id: 1,
      title: "Introduction to Networking",
      date: "March 2026",
      grade: "Distinction",
      institution: "Kisumu Polytechnic",
      buttons: ["Download PDF", "Share", "Verify"],
      color: "from-blue-600 to-blue-400",
    },
    {
      id: 2,
      title: "Electrical Safety Fundamentals",
      date: "January 2026",
      grade: "Pass",
      institution: "Kisumu Polytechnic",
      buttons: ["View Certificate", "Print Copy"],
      color: "from-amber-600 to-amber-400",
    },
  ];

  const stats = [
    { label: "Total Earned", value: "2", icon: Trophy, color: "text-amber-500" },
    { label: "Distinctions", value: "1", icon: Star, color: "text-blue-500" },
    { label: "Completion Rate", value: "98%", icon: TrendingUp, color: "text-emerald-500" },
  ];

  const inProgress = {
    title: "Hospitality Service Excellence",
    progress: 78,
    remaining: ["Final Reflection Journal", "Guest Communication Lab", "Security Awareness Quiz"],
  };

  return (
    <DashboardLayout role="student" title="Academic Credentials" subtitle="View and manage your verified TVET certifications.">
      <div className="space-y-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <Card key={stat.label} className="border-border/40 bg-card/50 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className={`p-4 rounded-2xl bg-muted/50 ${stat.color}`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-black text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                  <p className="text-3xl font-black">{stat.value}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Earned Certificates Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-black flex items-center gap-3">
             <Award className="w-8 h-8 text-primary" /> Verified Credentials
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            {earnedCertificates.map((cert) => (
              <Card key={cert.id} className="border-border/40 bg-card/50 backdrop-blur-md rounded-[2.5rem] overflow-hidden shadow-2xl group hover:-translate-y-2 transition-all duration-500">
                <div className={`h-24 bg-gradient-to-r ${cert.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20 flex items-center justify-center">
                    <Award className="w-48 h-48 rotate-12 scale-150" />
                  </div>
                  <div className="absolute bottom-4 right-6">
                    <Badge className="bg-white/20 backdrop-blur-md text-white border-white/30 font-black px-4 py-1">
                      {cert.grade}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black">{cert.title}</h3>
                    <p className="text-sm font-bold text-muted-foreground flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> Issued: {cert.date}
                    </p>
                    <p className="text-sm font-bold text-muted-foreground flex items-center gap-2">
                      <GraduationCap className="w-4 h-4" /> {cert.institution}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {cert.buttons.map((btn, i) => (
                      <Button
                        key={btn}
                        variant={i === 0 ? "default" : "outline"}
                        className="flex-1 rounded-xl font-black h-12 shadow-lg"
                        onClick={() => {
                          import("sonner").then(({ toast }) => {
                            if (btn === "Download PDF") {
                              toast.promise(
                                new Promise((r) => setTimeout(r, 1800)),
                                { loading: "Preparing certificate PDF…", success: `${cert.title} — Certificate downloaded!`, error: "Download failed." }
                              );
                            } else if (btn === "Print Copy") {
                              toast.success("Sent to printer!");
                              window.print();
                            } else if (btn === "Share") {
                              toast.success("Share link copied to clipboard!");
                            } else if (btn === "Verify" || btn === "View Certificate") {
                              toast.success("Certificate verified on JifunzeHub Registry.");
                            }
                          });
                        }}
                      >
                        {btn === "Download PDF" && <Download className="w-4 h-4 mr-2" />}
                        {btn === "Print Copy" && <Printer className="w-4 h-4 mr-2" />}
                        {btn === "Share" && <Share2 className="w-4 h-4 mr-2" />}
                        {btn}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* In Progress Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-black flex items-center gap-3">
            <Zap className="w-8 h-8 text-amber-500" /> In Progress
          </h2>

          <Card className="border-primary/20 bg-primary/5 rounded-[2.5rem] p-10 overflow-hidden relative shadow-xl">
             <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <ShieldCheck className="w-64 h-64" />
             </div>
             
             <div className="flex flex-col lg:flex-row justify-between gap-12 relative z-10">
                <div className="space-y-6 flex-1">
                   <div className="space-y-2">
                      <h3 className="text-3xl font-black">{inProgress.title}</h3>
                      <p className="text-lg font-bold text-muted-foreground">Mastering professional hospitality standards.</p>
                   </div>
                   
                   <div className="space-y-2">
                      <div className="flex justify-between items-end">
                         <p className="font-black text-primary">Current Progress</p>
                         <p className="text-2xl font-black text-primary">{inProgress.progress}%</p>
                      </div>
                      <div className="h-6 w-full bg-muted rounded-full overflow-hidden p-1 shadow-inner">
                         <div className="h-full bg-primary rounded-full transition-all duration-1000 shadow-lg" style={{ width: `${inProgress.progress}%` }}></div>
                      </div>
                   </div>
                </div>

                <div className="lg:w-80 space-y-4">
                   <p className="text-sm font-black text-muted-foreground uppercase tracking-widest">Remaining Requirements</p>
                   {inProgress.remaining.map((req) => (
                      <div key={req} className="bg-background/80 backdrop-blur-md p-4 rounded-2xl border border-primary/20 flex items-center gap-3 font-bold group hover:border-primary transition-all">
                         <div className="w-6 h-6 rounded-full border-2 border-primary/30 flex items-center justify-center group-hover:bg-primary/10">
                            <div className="w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary transition-all"></div>
                         </div>
                         {req}
                      </div>
                   ))}
                   <Button asChild className="w-full rounded-2xl h-14 font-black text-lg shadow-xl shadow-primary/20 mt-4">
                     <Link to="/dashboard/player/CRS-101">Continue Course</Link>
                   </Button>
                </div>
             </div>
          </Card>
        </section>
      </div>
    </DashboardLayout>
  );
}
