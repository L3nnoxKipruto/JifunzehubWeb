import { Link } from "@tanstack/react-router";
import { ReactNode } from "react";
import { WifiOff } from "lucide-react";
import { Logo } from "./Logo";
import splashImg from "@/assets/splash.png";

export function AuthShell({ title, subtitle, children, footer }: { title: string; subtitle: string; children: ReactNode; footer?: ReactNode }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden overflow-hidden bg-black text-white lg:block">
        <img src={splashImg} alt="Splash background" className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative flex h-full flex-col justify-between p-10">
          <Logo className="text-primary-foreground" />
          <div>
            <h2 className="text-3xl font-bold leading-tight">Learning Without Internet Barriers.</h2>
            <p className="mt-3 max-w-md text-primary-foreground/85">JifunzeHub keeps lessons, assignments and assessments running — even when the network doesn't.</p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs">
              <WifiOff className="h-3.5 w-3.5 text-accent-glow" /> Offline session ready on this device
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-background p-6 sm:p-10">
        <div className="w-full max-w-md">
          <div className="mb-6 lg:hidden"><Logo /></div>
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
          <div className="mt-6">{children}</div>
          {footer && <div className="mt-6 text-center text-sm text-muted-foreground">{footer}</div>}
          <p className="mt-8 text-center text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">← Back to home</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
