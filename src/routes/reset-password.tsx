import { createFileRoute, Link } from '@tanstack/react-router'
import { AuthShell } from "@/components/site/AuthShell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock, CheckCircle2 } from "lucide-react"

export const Route = createFileRoute('/reset-password')({
  component: ResetPasswordComponent,
})

function ResetPasswordComponent() {
  return (
    <AuthShell title="Set New Password" subtitle="Choose a strong password to secure your JifunzeHub account.">
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="password">New Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input id="password" type="password" placeholder="••••••••" className="pl-9" />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="confirm">Confirm Password</Label>
          <div className="relative">
            <CheckCircle2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input id="confirm" type="password" placeholder="••••••••" className="pl-9" />
          </div>
        </div>

        <div className="text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg border border-border/50">
          <ul className="list-disc pl-4 space-y-1">
            <li>At least 8 characters long</li>
            <li>Contains a number or symbol</li>
            <li>Does not match your old password</li>
          </ul>
        </div>

        <Button asChild className="w-full shadow-md shadow-primary/20">
          <Link to="/login">Reset Password & Login</Link>
        </Button>
      </div>
    </AuthShell>
  )
}
