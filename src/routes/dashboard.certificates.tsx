import { createFileRoute } from "@tanstack/react-router";
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
import {
  Award,
  Download,
  Printer,
  ShieldCheck,
  Share2,
  ExternalLink,
  Trophy,
  Star,
  Zap,
  GraduationCap,
  Search,
  BookOpen,
  CheckCircle2,
  MoreVertical,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Route = createFileRoute("/dashboard/certificates")({
  component: CertificatesComponent,
});

function CertificatesComponent() {
  const achievements = [
    {
      id: 1,
      title: "Offline Warrior",
      desc: "Completed 10 modules entirely without internet.",
      icon: Zap,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      id: 2,
      title: "LMS Pro",
      desc: "Maintained a 14-day learning streak.",
      icon: Star,
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      id: 3,
      title: "Top Scorer",
      desc: "Achieved 90%+ in 5 consecutive quizzes.",
      icon: Trophy,
      color: "text-success",
      bg: "bg-success/10",
    },
  ];

  const certificates = [
    {
      id: "CERT-84920",
      title: "Certificate in Networking Fundamentals",
      course: "Networking Essentials (CCNA)",
      date: "Aug 12, 2024",
      level: "Professional",
      institution: "Kisumu Polytechnic",
      status: "Verified",
      verificationId: "JH-KP-84920",
    },
  ];

  return (
    <DashboardLayout
      role="student"
      title="Certificates & Achievements"
      subtitle="Showcase your professional competency and TVET certifications."
    >
      <div className="space-y-10">
        {/* Achievements Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-5 h-5 text-accent" />
            <h2 className="text-xl font-bold tracking-tight">Earning & Badges</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {achievements.map((a) => (
              <Card
                key={a.id}
                className="border-border/60 hover:shadow-soft transition-all bg-background"
              >
                <CardContent className="p-5 flex gap-4 items-center">
                  <div
                    className={`p-3 rounded-2xl shrink-0 ${a.bg} ${a.color} ring-4 ring-background shadow-inner`}
                  >
                    <a.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{a.title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{a.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold tracking-tight">Verified Certificates</h2>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  placeholder="Search certificates..."
                  className="w-full pl-8 pr-3 py-1.5 text-sm rounded-lg border border-border/60 bg-muted/30 focus:outline-none focus:ring-1 focus:ring-accent/50"
                />
              </div>
              <Button size="sm" variant="outline" className="h-9 shrink-0">
                Filter
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            {certificates.map((cert) => (
              <Card
                key={cert.id}
                className="group border-border/60 overflow-hidden hover:shadow-elegant transition-all bg-background"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Preview Area */}
                  <div className="lg:w-72 bg-muted/30 p-8 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-border/50 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                    <div className="relative z-10 w-48 h-32 bg-white shadow-2xl rounded-md border border-border/50 flex flex-col items-center justify-center p-3 transform transition-transform group-hover:scale-105 duration-500">
                      <div className="w-8 h-8 rounded-full bg-primary/10 mb-2 flex items-center justify-center">
                        <Award className="w-4 h-4 text-primary" />
                      </div>
                      <div className="w-32 h-1 bg-muted mb-1"></div>
                      <div className="w-24 h-1 bg-muted mb-1 opacity-50"></div>
                      <div className="mt-2 text-[8px] font-bold uppercase text-primary">
                        Kisumu Poly
                      </div>
                      <div className="absolute top-2 right-2">
                        <ShieldCheck className="w-3 h-3 text-success" />
                      </div>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="flex-1 p-6 space-y-4">
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge
                            variant="outline"
                            className="text-[10px] font-bold uppercase tracking-wider bg-primary/5 text-primary border-primary/20"
                          >
                            Verified Credential
                          </Badge>
                          <Badge
                            variant="outline"
                            className="text-[10px] font-bold uppercase tracking-wider bg-muted/50"
                          >
                            {cert.level}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold">{cert.title}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                          <GraduationCap className="w-4 h-4" /> {cert.institution} • Issued{" "}
                          {cert.date}
                        </p>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="rounded-full">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                          <DropdownMenuItem>
                            <ExternalLink className="w-4 h-4 mr-2" /> Verify Authenticity
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Share2 className="w-4 h-4 mr-2" /> Share to LinkedIn
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Printer className="w-4 h-4 mr-2" /> Print Hardcopy
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-2 border-y border-border/40">
                      <div className="space-y-0.5">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                          Certificate ID
                        </p>
                        <p className="text-sm font-mono font-medium">{cert.verificationId}</p>
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                          Competency Level
                        </p>
                        <p className="text-sm font-medium">TVET Level 5</p>
                      </div>
                      <div className="space-y-0.5 hidden md:block">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                          Verification Status
                        </p>
                        <p className="text-sm font-medium text-success flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3" /> Blockchain Verified
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <Button className="flex-1 sm:flex-none shadow-md shadow-primary/20 bg-primary hover:bg-primary/90">
                        <Download className="w-4 h-4 mr-2" /> Download PDF
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 sm:flex-none bg-background hover:bg-muted"
                      >
                        <Printer className="w-4 h-4 mr-2" /> Print
                      </Button>
                      <Button
                        variant="ghost"
                        className="flex-1 sm:flex-none text-muted-foreground hover:text-primary"
                      >
                        <Share2 className="w-4 h-4 mr-2" /> Add to Portfolio
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Empty State / Achievement Tracker */}
        <Card className="border-border/60 bg-muted/20 border-dashed">
          <CardContent className="p-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-background border border-border shadow-sm flex items-center justify-center mx-auto text-muted-foreground opacity-50">
              <BookOpen className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold">2 Certificates Pending</h4>
              <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                You're making great progress! Complete your remaining modules in "Introduction to
                Python" to unlock your next certification.
              </p>
            </div>
            <Button variant="link" className="text-primary font-bold">
              Continue My Courses
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
