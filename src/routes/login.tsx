import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { AuthShell } from "@/components/site/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { GraduationCap, Users, Shield } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — JifunzeHub" }] }),
  component: Login,
});

function Login() {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<"student" | "lecturer" | "admin">("student");

  const roleData = {
    student: { email: "amina.h@kisumupoly.ac.ke", path: "/dashboard" },
    lecturer: { email: "eng.kamau@nairobitvet.ac.ke", path: "/lecturer" },
    admin: { email: "admin@jifunzehub.local", path: "/admin" },
  };

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to your JifunzeHub account."
      footer={<>Don't have an account? <Link to="/register" className="font-medium text-accent hover:underline">Create one</Link></>}
    >
      <div className="space-y-6">
        <Tabs defaultValue="student" onValueChange={(v) => setRole(v as any)} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-muted/50 border border-border/50">
            <TabsTrigger value="student" className="text-xs sm:text-sm"><GraduationCap className="w-3 h-3 sm:mr-2" /> <span className="hidden sm:inline">Student</span></TabsTrigger>
            <TabsTrigger value="lecturer" className="text-xs sm:text-sm"><Users className="w-3 h-3 sm:mr-2" /> <span className="hidden sm:inline">Lecturer</span></TabsTrigger>
            <TabsTrigger value="admin" className="text-xs sm:text-sm"><Shield className="w-3 h-3 sm:mr-2" /> <span className="hidden sm:inline">Admin</span></TabsTrigger>
          </TabsList>
        </Tabs>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            setTimeout(() => { 
              toast.success(`Signed in as ${role}`); 
              nav({ to: roleData[role].path }); 
            }, 800);
          }}
          className="grid gap-4"
        >
          <div className="grid gap-2">
            <Label htmlFor="email">Email or admission number</Label>
            <Input id="email" required key={role} defaultValue={roleData[role].email} className="bg-muted/30" />
          </div>
          
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link to="/reset-password" className="text-xs text-accent hover:underline">Forgot?</Link>
            </div>
            <Input id="password" type="password" required defaultValue="••••••••" className="bg-muted/30" />
          </div>
          
          <label className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
            <Checkbox defaultChecked className="border-border/60 data-[state=checked]:bg-primary" /> 
            Remember this device (offline login)
          </label>
          
          <Button type="submit" disabled={loading} className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/20">
            {loading ? "Authenticating..." : `Sign in as ${role.charAt(0).toUpperCase() + role.slice(1)}`}
          </Button>
        </form>
      </div>
    </AuthShell>
  );
}
