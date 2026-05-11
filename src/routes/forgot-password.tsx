import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { AuthShell } from "@/components/site/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({ meta: [{ title: "Reset password — JifunzeHub" }] }),
  component: Forgot,
});

function Forgot() {
  const [sent, setSent] = useState(false);
  return (
    <AuthShell
      title="Reset your password"
      subtitle="We'll send a reset link to your email."
      footer={<><Link to="/login" className="text-accent">Back to sign in</Link></>}
    >
      {sent ? (
        <div className="rounded-lg border border-border bg-muted/40 p-4 text-sm">
          Check your inbox for reset instructions. If your device is offline, the email will be queued and sent when sync resumes.
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); toast.success("Reset link queued"); setSent(true); }} className="grid gap-4">
          <div className="grid gap-2"><Label>Email</Label><Input type="email" required /></div>
          <Button type="submit" className="bg-gradient-primary text-primary-foreground hover:opacity-95">Send reset link</Button>
        </form>
      )}
    </AuthShell>
  );
}
