import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { AuthShell } from "@/components/site/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "Create account — JifunzeHub" }] }),
  component: Register,
});

function Register() {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  return (
    <AuthShell
      title="Create your account"
      subtitle="Join your TVET institution on JifunzeHub."
      footer={<>Already registered? <Link to="/login" className="font-medium text-accent">Sign in</Link></>}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);
          setTimeout(() => { toast.success("Account created"); nav({ to: "/dashboard" }); }, 700);
        }}
        className="grid gap-4"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2"><Label>First name</Label><Input required /></div>
          <div className="grid gap-2"><Label>Last name</Label><Input required /></div>
        </div>
        <div className="grid gap-2"><Label>Email</Label><Input type="email" required /></div>
        <div className="grid gap-2"><Label>Institution</Label><Input required defaultValue="Nairobi TVET" /></div>
        <div className="grid gap-2"><Label>Password</Label><Input type="password" required /></div>
        <div className="grid gap-2">
          <Label>I am a…</Label>
          <RadioGroup defaultValue="student" className="grid grid-cols-3 gap-2">
            {["student", "lecturer", "admin"].map((r) => (
              <label key={r} className="flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm capitalize has-[:checked]:border-accent has-[:checked]:bg-accent/10">
                <RadioGroupItem value={r} /> {r}
              </label>
            ))}
          </RadioGroup>
        </div>
        <Button type="submit" disabled={loading} className="bg-gradient-primary text-primary-foreground hover:opacity-95">
          {loading ? "Creating..." : "Create account"}
        </Button>
      </form>
    </AuthShell>
  );
}
