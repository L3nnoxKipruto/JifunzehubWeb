import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/site/PublicLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Server,
  WifiOff,
  Usb,
  Laptop,
  ArrowRight,
  Zap,
  ShieldCheck,
  Globe,
  CloudLightning,
  Activity,
  Database,
  RefreshCw,
  LayoutDashboard,
  Users,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/system-overview")({
  head: () => ({ meta: [{ title: "How It Works — JifunzeHub Architecture" }] }),
  component: SystemOverviewComponent,
});

function SystemOverviewComponent() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <PublicLayout>
      <div className="relative overflow-hidden bg-background">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10 opacity-30"></div>

        <div className="container mx-auto py-24 px-4 max-w-7xl relative">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24 space-y-6"
          >
            <Badge className="px-4 py-1.5 bg-primary/10 text-primary border-primary/20 backdrop-blur-sm text-xs font-black uppercase tracking-[0.2em] rounded-full">
              Architecture
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground uppercase leading-[0.9]">
              How <span className="text-primary italic">JifunzeHub</span> <br /> Works Offline
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
              A resilient, mission-critical learning ecosystem designed for institutions operating
              in high-latency or zero-bandwidth environments.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                <ShieldCheck className="w-3.5 h-3.5 text-success" /> End-to-End Encryption
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                <Zap className="w-3.5 h-3.5 text-accent" /> Zero Latency LAN
              </div>
            </div>
          </motion.div>

          {/* Three Pillars Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-3 gap-8 relative"
          >
            {/* Connection Line (Visual) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent -z-10"></div>

            <SystemCard
              variants={item}
              icon={Server}
              title="1. Local Command Center"
              subtitle="The Institutional Backbone"
              description="A secure local hub (Raspberry Pi, NUC, or Server) that manages the entire campus learning OS without needing the internet."
              features={[
                "Full LMS mirroring locally",
                "Massive asset storage",
                "Real-time sync aggregation",
              ]}
              color="text-primary"
              bg="bg-primary/5"
            />

            <SystemCard
              variants={item}
              icon={WifiOff}
              title="2. Resilient Intranet"
              subtitle="Zero Data Deployment"
              description="Standard Wi-Fi infrastructure re-routed to your local hub, providing high-speed access to all students at zero data cost."
              features={[
                "Instant video streaming",
                "LAN-based submissions",
                "Unlimited bandwidth use",
              ]}
              color="text-accent"
              bg="bg-accent/5"
            />

            <SystemCard
              variants={item}
              icon={Usb}
              title="3. Persistent Sync"
              subtitle="The Portable Campus"
              description="Advanced peer-to-peer and USB-based data persistence that allows students to carry the entire campus experience in their pockets."
              features={[
                "IndexedDB local persistence",
                "USB drive mirroring",
                "Background cloud gateway",
              ]}
              color="text-emerald-500"
              bg="bg-emerald-500/5"
            />
          </motion.div>

          {/* Technical Deep Dive */}
          <div className="mt-40">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-4xl font-black tracking-tighter uppercase">
                    The Offline <br />
                    <span className="text-accent">Synchronization</span> Engine
                  </h2>
                  <p className="text-muted-foreground font-medium leading-relaxed">
                    Our proprietary engine ensures that data flows seamlessly between students,
                    lecturers, and the central cloud, even when the connection is broken for weeks.
                  </p>
                </div>

                <div className="space-y-6">
                  <TechFeature
                    icon={Activity}
                    title="Delta Syncing"
                    text="Only the changes (deltas) are synchronized, making updates extremely fast even on weak local connections."
                  />
                  <TechFeature
                    icon={Database}
                    title="Local Encryption"
                    text="All student data is encrypted locally using hardware-bound keys before being stored on personal devices."
                  />
                  <TechFeature
                    icon={RefreshCw}
                    title="Conflict Resolution"
                    text="Smart algorithms handle data collisions when multiple devices update the same course materials offline."
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-accent/20 to-transparent blur-2xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
                <div className="relative bg-muted/30 border border-border/50 rounded-[40px] p-8 aspect-square flex items-center justify-center overflow-hidden">
                  {/* Abstract Architecture Visual */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute w-40 h-40 bg-primary/20 rounded-full animate-ping opacity-20"></div>
                    <div className="relative z-10 w-48 h-48 bg-background border border-border/50 rounded-3xl shadow-2xl flex items-center justify-center">
                      <Server className="w-20 h-20 text-primary" />
                    </div>

                    {/* Orbiting Elements */}
                    <OrbitingIcon icon={Laptop} className="top-10 left-10" delay={0} />
                    <OrbitingIcon icon={Smartphone} className="bottom-10 right-10" delay={1} />
                    <OrbitingIcon icon={Users} className="top-10 right-10" delay={0.5} />
                    <OrbitingIcon icon={BookOpen} className="bottom-10 left-10" delay={1.5} />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-40 p-12 rounded-[50px] bg-gradient-to-br from-primary/10 via-background to-accent/10 border border-primary/20 shadow-2xl relative overflow-hidden text-center group"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-110 transition-transform">
              <Globe className="w-64 h-64" />
            </div>

            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">
                Ready to empower <br /> your institution?
              </h2>
              <p className="text-muted-foreground font-medium italic">
                "JifunzeHub isn't just software; it's the digital infrastructure for the future of
                TVET education."
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                <Button
                  size="lg"
                  className="h-14 px-10 rounded-full font-black uppercase tracking-widest text-xs bg-primary text-primary-foreground shadow-xl shadow-primary/30 group"
                >
                  Get Deployment Package{" "}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-10 rounded-full font-black uppercase tracking-widest text-xs border-border/60 backdrop-blur-sm"
                >
                  Talk to an Expert
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PublicLayout>
  );
}

function SystemCard({
  variants,
  icon: Icon,
  title,
  subtitle,
  description,
  features,
  color,
  bg,
}: any) {
  return (
    <motion.div variants={variants}>
      <Card className="h-full border-border/60 shadow-elegant hover:shadow-soft transition-all duration-500 group bg-background/50 backdrop-blur-md rounded-[32px] overflow-hidden flex flex-col">
        <CardHeader className="p-8 pb-4">
          <div
            className={`w-16 h-16 ${bg} ${color} rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
          >
            <Icon className="w-8 h-8" />
          </div>
          <CardTitle className="text-2xl font-black tracking-tight uppercase">{title}</CardTitle>
          <CardDescription className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mt-1">
            {subtitle}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8 pt-4 flex-1">
          <p className="text-muted-foreground font-medium leading-relaxed mb-8">{description}</p>
          <ul className="space-y-4">
            {features.map((f: string, i: number) => (
              <li key={i} className="flex items-center gap-3 text-sm font-bold">
                <div
                  className={`w-5 h-5 rounded-full ${bg} ${color} flex items-center justify-center shrink-0`}
                >
                  <ShieldCheck className="w-3 h-3" />
                </div>
                {f}
              </li>
            ))}
          </ul>
        </CardContent>
        <div className="p-8 pt-0 mt-auto">
          <Button
            variant="ghost"
            className="w-full h-12 rounded-2xl font-black uppercase tracking-widest text-[10px] group-hover:bg-muted transition-colors"
          >
            Technical Specs <ArrowRight className="ml-2 w-3.5 h-3.5" />
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}

function TechFeature({ icon: Icon, title, text }: any) {
  return (
    <div className="flex gap-4 group">
      <div className="shrink-0 w-12 h-12 rounded-2xl bg-muted/50 border border-border/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
        <Icon className="w-5 h-5" />
      </div>
      <div className="space-y-1">
        <h4 className="font-black uppercase tracking-tight text-sm">{title}</h4>
        <p className="text-xs text-muted-foreground font-medium leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function OrbitingIcon({ icon: Icon, className, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={`absolute w-16 h-16 bg-background border border-border/50 rounded-2xl shadow-xl flex items-center justify-center text-muted-foreground ${className}`}
    >
      <Icon className="w-7 h-7" />
    </motion.div>
  );
}

function Smartphone(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}
