import { createFileRoute, Link } from '@tanstack/react-router'
import { AuthShell } from "@/components/site/AuthShell"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Wifi, Server, CheckCircle2, Laptop } from "lucide-react"
import { useState } from "react"

export const Route = createFileRoute('/device-setup')({
  component: DeviceSetupComponent,
})

function DeviceSetupComponent() {
  const [step, setStep] = useState(1);

  return (
    <AuthShell title="Device Setup" subtitle="Connect this device to your institution's offline server.">
      <div className="space-y-6 mt-4">
        {step === 1 && (
          <Card className="border-border/60 shadow-lg animate-in fade-in zoom-in duration-300">
            <CardHeader>
              <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Wifi className="text-primary w-6 h-6" />
              </div>
              <CardTitle className="text-center">Connect to Local Network</CardTitle>
              <CardDescription className="text-center">
                Ensure you are connected to the school's local Wi-Fi hotspot. No internet is required.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg flex items-center gap-4 border border-border/50">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <div className="flex-1">
                  <p className="font-medium text-sm">TVET_Local_Learn</p>
                  <p className="text-xs text-muted-foreground">Connected, no internet</p>
                </div>
                <CheckCircle2 className="text-green-500 w-5 h-5" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => setStep(2)}>Continue</Button>
            </CardFooter>
          </Card>
        )}

        {step === 2 && (
          <Card className="border-border/60 shadow-lg animate-in slide-in-from-right-4 duration-300">
            <CardHeader>
              <div className="mx-auto bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Server className="text-accent w-6 h-6" />
              </div>
              <CardTitle className="text-center">Server Configuration</CardTitle>
              <CardDescription className="text-center">
                Enter the address of the JifunzeHub local server provided by your administrator.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="server-ip">Server IP Address</Label>
                <Input id="server-ip" defaultValue="192.168.1.100" placeholder="e.g. 192.168.8.1" />
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button variant="outline" className="w-full" onClick={() => setStep(1)}>Back</Button>
              <Button className="w-full" onClick={() => setStep(3)}>Connect</Button>
            </CardFooter>
          </Card>
        )}

        {step === 3 && (
          <Card className="border-green-500/30 bg-green-50/5 dark:bg-green-950/10 shadow-lg animate-in slide-in-from-bottom-4 duration-500">
            <CardHeader>
              <div className="mx-auto bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="text-green-500 w-8 h-8" />
              </div>
              <CardTitle className="text-center text-xl">Device Registered!</CardTitle>
              <CardDescription className="text-center">
                This device is now securely paired with the local server. You can now sync courses and learn offline.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-background rounded-lg flex items-center gap-4 border border-border">
                <Laptop className="text-muted-foreground w-6 h-6" />
                <div className="flex-1">
                  <p className="font-medium text-sm">Student Laptop (Offline Mode)</p>
                  <p className="text-xs text-muted-foreground">ID: DEV-8492-X</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                <Link to="/login">Go to Login</Link>
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </AuthShell>
  )
}
