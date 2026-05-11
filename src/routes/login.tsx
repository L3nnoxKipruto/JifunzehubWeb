import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { AuthShell } from "@/components/site/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Users, Shield, ArrowRight, Fingerprint, Lock, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Institutional Sign In — JifunzeHub" }] }),
  component: Login,
});

function Login() {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<"student" | "lecturer" | "admin">("student");

  const roleData = {
    student: {
      email: "amina.h@kisumupoly.ac.ke",
      path: "/dashboard",
      color: "text-primary",
      bg: "bg-primary/5",
      label: "Learner Portal",
    },
    lecturer: {
      email: "eng.kamau@nairobitvet.ac.ke",
      path: "/lecturer",
      color: "text-accent",
      bg: "bg-accent/5",
      label: "Staff Command",
    },
    admin: {
      email: "admin@jifunzehub.local",
      path: "/admin",
      color: "text-emerald-500",
      bg: "bg-emerald-500/5",
      label: "System Core",
    },
  };

  return (
    <AuthShell
      title="Access Dashboard"
      subtitle="Select your institutional role to continue to the offline-first workspace."
      footer={
        <p className="text-muted-foreground">
          New to JifunzeHub?{" "}
          <Link
            to="/register"
            className="font-black text-primary hover:underline uppercase tracking-tight"
          >
            Register Institution
          </Link>
        </p>
      }
    >
      <div className="space-y-8">
        {/* Role Switcher */}
        <div className="space-y-3">
          <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
            Account Role
          </Label>
          <Tabs defaultValue="student" onValueChange={(v) => setRole(v as any)} className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-14 p-1.5 bg-muted/30 border border-border/50 rounded-2xl">
              <TabsTrigger
                value="student"
                className="rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-lg transition-all group"
              >
                <div className="flex flex-col items-center gap-0.5">
                  <GraduationCap className="w-4 h-4 group-data-[state=active]:text-primary" />
                  <span className="text-[9px] font-black uppercase tracking-tighter">Student</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="lecturer"
                className="rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-lg transition-all group"
              >
                <div className="flex flex-col items-center gap-0.5">
                  <Users className="w-4 h-4 group-data-[state=active]:text-accent" />
                  <span className="text-[9px] font-black uppercase tracking-tighter">Lecturer</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="admin"
                className="rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-lg transition-all group"
              >
                <div className="flex flex-col items-center gap-0.5">
                  <Shield className="w-4 h-4 group-data-[state=active]:text-emerald-500" />
                  <span className="text-[9px] font-black uppercase tracking-tighter">Admin</span>
                </div>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            setTimeout(() => {
              toast.success(`Access granted for ${roleData[role].label}`, {
                description: `Redirecting to institutional workspace...`,
              });
              nav({ to: roleData[role].path });
            }, 1200);
          }}
          className="grid gap-6"
        >
          <div className="space-y-4">
            <div className="grid gap-2 group">
              <div className="flex items-center justify-between ml-1">
                <Label
                  htmlFor="email"
                  className="text-[10px] font-black uppercase tracking-widest text-muted-foreground"
                >
                  ID / Email Address
                </Label>
                <motion.span
                  key={role}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`text-[9px] font-black uppercase ${roleData[role].color}`}
                >
                  {roleData[role].label}
                </motion.span>
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  id="email"
                  required
                  key={role}
                  defaultValue={roleData[role].email}
                  className="h-14 pl-12 bg-muted/20 border-border/60 focus-visible:ring-primary/50 focus-visible:ring-offset-0 rounded-2xl font-bold transition-all"
                />
              </div>
            </div>

            <div className="grid gap-2 group">
              <div className="flex items-center justify-between ml-1">
                <Label
                  htmlFor="password"
                  className="text-[10px] font-black uppercase tracking-widest text-muted-foreground"
                >
                  Access Password
                </Label>
                <Link
                  to="/"
                  className="text-[10px] font-black uppercase text-accent hover:underline tracking-tighter"
                >
                  Reset Security Key
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  id="password"
                  type="password"
                  required
                  defaultValue="••••••••"
                  className="h-14 pl-12 bg-muted/20 border-border/60 focus-visible:ring-primary/50 focus-visible:ring-offset-0 rounded-2xl font-bold transition-all"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between px-1">
            <label className="flex items-center gap-2 text-xs font-bold text-muted-foreground cursor-pointer select-none group">
              <Checkbox
                defaultChecked
                className="h-5 w-5 rounded-lg border-border/60 data-[state=checked]:bg-primary data-[state=checked]:border-primary transition-all"
              />
              <span className="group-hover:text-foreground transition-colors">
                Remember device (Local Cache)
              </span>
            </label>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-14 bg-slate-950 text-white hover:bg-slate-900 rounded-2xl font-black uppercase tracking-[0.15em] text-xs shadow-2xl transition-all active:scale-[0.98] relative overflow-hidden group"
          >
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3"
                >
                  <Fingerprint className="w-5 h-5 animate-pulse" />
                  Authenticating Credentials...
                </motion.div>
              ) : (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3"
                >
                  Authorize Access{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </form>
      </div>
    </AuthShell>
  );
}
