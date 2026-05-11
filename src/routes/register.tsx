import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { AuthShell } from "@/components/site/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  User,
  Mail,
  Building2,
  Lock,
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Users,
  Shield,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "Institutional Registration — JifunzeHub" }] }),
  component: Register,
});

function Register() {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("student");

  return (
    <AuthShell
      title="Join the Ecosystem"
      subtitle="Complete your registration to begin learning or managing your TVET institution."
      footer={
        <p className="text-muted-foreground">
          Already part of an institution?{" "}
          <Link
            to="/login"
            className="font-black text-primary hover:underline uppercase tracking-tight"
          >
            Sign In
          </Link>
        </p>
      }
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);
          setTimeout(() => {
            toast.success("Institutional profile created!", {
              description: "Welcome to JifunzeHub. Taking you to your dashboard...",
            });
            nav({
              to: role === "admin" ? "/admin" : role === "lecturer" ? "/lecturer" : "/dashboard",
            });
          }, 1500);
        }}
        className="space-y-8"
      >
        {/* Role Selection Blocks */}
        <div className="space-y-3">
          <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
            Select your role
          </Label>
          <RadioGroup
            defaultValue="student"
            onValueChange={setRole}
            className="grid grid-cols-3 gap-3"
          >
            {[
              { id: "student", icon: GraduationCap, label: "Student" },
              { id: "lecturer", icon: Users, label: "Staff" },
              { id: "admin", icon: Shield, label: "Admin" },
            ].map((r) => (
              <label
                key={r.id}
                className={`flex flex-col items-center gap-2 cursor-pointer rounded-[24px] border border-border/60 bg-muted/20 p-4 transition-all duration-300 hover:border-primary/40 has-[:checked]:border-primary has-[:checked]:bg-primary/5 has-[:checked]:shadow-inner relative group`}
              >
                <RadioGroupItem value={r.id} className="sr-only" />
                <r.icon
                  className={`w-5 h-5 transition-colors ${role === r.id ? "text-primary" : "text-muted-foreground"}`}
                />
                <span
                  className={`text-[9px] font-black uppercase tracking-widest transition-colors ${role === r.id ? "text-primary" : "text-muted-foreground"}`}
                >
                  {r.label}
                </span>
                {role === r.id && (
                  <motion.div
                    layoutId="activeRole"
                    className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg"
                  >
                    <CheckCircle2 className="w-2.5 h-2.5" />
                  </motion.div>
                )}
              </label>
            ))}
          </RadioGroup>
        </div>

        <div className="grid gap-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2 group">
              <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
                First Name
              </Label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  placeholder="Amina"
                  required
                  className="h-14 pl-12 bg-muted/20 border-border/60 focus-visible:ring-primary/50 rounded-2xl font-bold"
                />
              </div>
            </div>
            <div className="grid gap-2 group">
              <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
                Last Name
              </Label>
              <Input
                placeholder="Hussein"
                required
                className="h-14 px-6 bg-muted/20 border-border/60 focus-visible:ring-primary/50 rounded-2xl font-bold"
              />
            </div>
          </div>

          <div className="grid gap-2 group">
            <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
              Email / Admission
            </Label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input
                type="email"
                placeholder="amina.h@nairobitvet.ac.ke"
                required
                className="h-14 pl-12 bg-muted/20 border-border/60 focus-visible:ring-primary/50 rounded-2xl font-bold"
              />
            </div>
          </div>

          <div className="grid gap-2 group">
            <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
              Home Institution
            </Label>
            <div className="relative">
              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input
                placeholder="Nairobi Technical Training Institute"
                required
                className="h-14 pl-12 bg-muted/20 border-border/60 focus-visible:ring-primary/50 rounded-2xl font-bold"
              />
            </div>
          </div>

          <div className="grid gap-2 group">
            <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
              Security Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input
                type="password"
                placeholder="••••••••"
                required
                className="h-14 pl-12 bg-muted/20 border-border/60 focus-visible:ring-primary/50 rounded-2xl font-bold"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-2">
          <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-2xl border border-border/50 border-dashed">
            <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
            <p className="text-[10px] font-medium text-muted-foreground leading-relaxed">
              By registering, you agree to the Institutional Data Governance Policy and JifunzeHub's
              offline synchronization protocols.
            </p>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-14 bg-slate-950 text-white hover:bg-slate-900 rounded-2xl font-black uppercase tracking-[0.15em] text-xs shadow-2xl transition-all active:scale-[0.98] group"
          >
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3"
                >
                  <Rocket className="w-5 h-5 animate-bounce" />
                  Launching Profile...
                </motion.div>
              ) : (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3"
                >
                  Initialize Account{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </form>
    </AuthShell>
  );
}
