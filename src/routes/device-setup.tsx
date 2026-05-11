import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/site/PublicLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Laptop,
  Server,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  Settings,
  Wifi,
  RefreshCw,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Database,
  Globe,
  HardDrive,
  Smartphone,
  Usb,
  Terminal,
  Activity,
  Monitor,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/device-setup")({
  head: () => ({ meta: [{ title: "Provisioning — JifunzeHub Device Setup" }] }),
  component: DeviceSetupComponent,
});

const steps = [
  { id: 1, title: "Identity", icon: Laptop, description: "Register device unique identifier" },
  { id: 2, title: "Connectivity", icon: Wifi, description: "Scan local campus LAN infrastructure" },
  {
    id: 3,
    title: "Infrastructure",
    icon: Server,
    description: "Initialize offline database & cache",
  },
  {
    id: 4,
    title: "Authorization",
    icon: ShieldCheck,
    description: "Verify institutional credentials",
  },
  { id: 5, title: "Completion", icon: CheckCircle2, description: "Sync initial course curriculum" },
];

function DeviceSetupComponent() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isProvisioning, setIsProvisioning] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isProvisioning) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsProvisioning(false);
            if (currentStep < 5) setCurrentStep((prevStep) => prevStep + 1);
            return 100;
          }
          return prev + 1.5;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isProvisioning]);

  const handleNext = () => {
    if (currentStep === 5) return;
    setIsProvisioning(true);
    setProgress(0);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <PublicLayout>
      <div className="min-h-[80vh] flex items-center justify-center bg-muted/20 relative overflow-hidden px-4 py-20">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

        <div className="w-full max-w-5xl grid lg:grid-cols-3 gap-12 items-center">
          {/* Left: Progress Sidebar */}
          <div className="hidden lg:block space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <Badge className="bg-primary/10 text-primary border-primary/20 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                Device Provisioning
              </Badge>
              <h1 className="text-5xl font-black tracking-tighter uppercase leading-[0.8]">
                System <br />
                <span className="text-primary italic">Initialization</span>
              </h1>
              <p className="text-muted-foreground font-medium leading-relaxed">
                Configure your personal workstation for the JifunzeHub offline learning ecosystem.
              </p>
            </motion.div>

            <div className="space-y-6 pt-8 border-l-2 border-border/50 pl-8 relative">
              {steps.map((step) => {
                const active = step.id === currentStep;
                const completed = step.id < currentStep;
                return (
                  <div key={step.id} className="relative group">
                    <div
                      className={`absolute -left-[41px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-background transition-colors ${
                        completed ? "bg-success" : active ? "bg-primary animate-pulse" : "bg-border"
                      }`}
                    ></div>
                    <div
                      className={`space-y-1 transition-opacity ${active ? "opacity-100" : "opacity-40 group-hover:opacity-60"}`}
                    >
                      <h4 className="text-sm font-black uppercase tracking-tight">{step.title}</h4>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Main Setup Wizard */}
          <div className="lg:col-span-2 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                transition={{ duration: 0.5, ease: "circOut" }}
              >
                <Card className="border-border/60 shadow-2xl rounded-[48px] overflow-hidden bg-background/80 backdrop-blur-xl border-t-8 border-t-primary">
                  <CardHeader className="p-12 pb-6">
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-20 h-20 bg-primary/10 text-primary rounded-[32px] flex items-center justify-center shadow-inner">
                        {(() => {
                          const Icon = steps[currentStep - 1].icon;
                          return <Icon className="w-10 h-10" />;
                        })()}
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                          Step 0{currentStep}
                        </p>
                        <h2 className="text-3xl font-black uppercase tracking-tighter">
                          {steps[currentStep - 1].title}
                        </h2>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold uppercase tracking-tight leading-relaxed">
                      {currentStep === 1 &&
                        "Authenticating hardware identity with campus security protocols..."}
                      {currentStep === 2 &&
                        "Scanning institutional local area network for the hub server..."}
                      {currentStep === 3 &&
                        "Building resilient local database and mirroring essential assets..."}
                      {currentStep === 4 &&
                        "Encrypting institutional keys and authorizing user profile..."}
                      {currentStep === 5 &&
                        "Initialization complete. Institutional curriculum is ready."}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-12 pt-6 space-y-12 flex-1 min-h-[300px]">
                    {isProvisioning ? (
                      <div className="space-y-8 py-12">
                        <div className="space-y-4">
                          <div className="flex justify-between items-end text-xs font-black uppercase tracking-widest">
                            <span className="text-primary flex items-center gap-2">
                              <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Provisioning...
                            </span>
                            <span>{Math.round(progress)}%</span>
                          </div>
                          <Progress
                            value={progress}
                            className="h-3 bg-muted rounded-full overflow-hidden"
                            indicatorClassName="bg-primary shadow-[0_0_15px_rgba(var(--primary),0.6)]"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <StatusRow
                            label="Protocol"
                            value="HUB_SECURE_v4"
                            icon={ShieldCheck}
                            success
                          />
                          <StatusRow label="Node ID" value="MAIN_HUB_01" icon={Server} success />
                          <StatusRow label="Bitrate" value="840 Mbps" icon={Zap} success />
                          <StatusRow label="Latency" value="2ms" icon={Activity} success />
                        </div>
                      </div>
                    ) : (
                      <div className="grid md:grid-cols-2 gap-8 items-center h-full">
                        <div className="space-y-6">
                          <p className="text-muted-foreground font-medium leading-relaxed italic">
                            {currentStep === 1 &&
                              "Your device will be assigned a permanent institutional ID for offline tracking."}
                            {currentStep === 2 &&
                              "Ensure you are connected to the 'JIFUNZE_HUB_MAIN' Wi-Fi network."}
                            {currentStep === 3 &&
                              "This process will allocate approximately 500MB of local storage for cache."}
                            {currentStep === 4 &&
                              "Final security handshake to ensure your learning progress is protected."}
                            {currentStep === 5 &&
                              "You are now fully provisioned. Learning starts now."}
                          </p>
                          <div className="space-y-3">
                            <FeatureItem text="Encrypted Local Store" />
                            <FeatureItem text="Automatic LAN Recovery" />
                            <FeatureItem text="P2P Data Mirroring" />
                          </div>
                        </div>

                        <div className="relative flex items-center justify-center p-8 bg-muted/20 rounded-[32px] border border-border/50 border-dashed">
                          {currentStep === 1 && <Monitor className="w-32 h-32 text-primary/30" />}
                          {currentStep === 2 && <Wifi className="w-32 h-32 text-primary/30" />}
                          {currentStep === 3 && <HardDrive className="w-32 h-32 text-primary/30" />}
                          {currentStep === 4 && (
                            <ShieldCheck className="w-32 h-32 text-primary/30" />
                          )}
                          {currentStep === 5 && (
                            <Zap className="w-32 h-32 text-primary/30 animate-pulse" />
                          )}
                        </div>
                      </div>
                    )}
                  </CardContent>

                  <CardFooter className="p-12 pt-0 flex gap-4">
                    <Button
                      variant="ghost"
                      onClick={handleBack}
                      disabled={currentStep === 1 || isProvisioning}
                      className="h-14 px-8 rounded-2xl font-black uppercase tracking-widest text-[10px] border border-border/60"
                    >
                      <ChevronLeft className="mr-2 w-4 h-4" /> Go Back
                    </Button>
                    <Button
                      onClick={handleNext}
                      disabled={isProvisioning || currentStep === 5}
                      className="flex-1 h-14 rounded-2xl font-black uppercase tracking-widest text-[10px] bg-primary text-primary-foreground shadow-xl shadow-primary/30 group"
                    >
                      {currentStep === 5 ? "Go to Dashboard" : "Begin Provisioning"}{" "}
                      <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Terminal Output Mini */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 bg-slate-950 text-slate-50 font-mono text-[10px] p-6 rounded-[32px] border border-slate-800 shadow-2xl relative group"
            >
              <div className="absolute top-4 right-6 flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-amber-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-emerald-500/50"></div>
              </div>
              <div className="space-y-1.5 opacity-70">
                <p className="text-emerald-400 font-bold">
                  $ jifunze-hub provision --target=node-01
                </p>
                <p>[INFO] Requesting hardware ID token...</p>
                <p>[INFO] Target identified: {currentStep === 1 ? "PENDING" : "SUCCESS"}</p>
                {currentStep > 1 && (
                  <p>[INFO] Network scan: {currentStep === 2 ? "ACTIVE" : "SUCCESS"}</p>
                )}
                {currentStep > 2 && (
                  <p>[INFO] DB initialization: {currentStep === 3 ? "ACTIVE" : "SUCCESS"}</p>
                )}
                <div className="animate-pulse inline-block h-3 w-1.5 bg-slate-50 translate-y-0.5"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}

function StatusRow({ label, value, icon: Icon, success }: any) {
  return (
    <div className="flex items-center gap-3 p-3 bg-background rounded-2xl border border-border/50 shadow-sm">
      <div
        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${success ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}`}
      >
        <Icon className="w-4 h-4" />
      </div>
      <div className="min-w-0">
        <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground leading-none mb-0.5">
          {label}
        </p>
        <p className="text-xs font-black truncate">{value}</p>
      </div>
    </div>
  );
}

function FeatureItem({ text }: any) {
  return (
    <div className="flex items-center gap-2 text-xs font-bold">
      <CheckCircle2 className="w-4 h-4 text-success" />
      <span>{text}</span>
    </div>
  );
}
