import { Link } from "@tanstack/react-router";
import { ReactNode } from "react";
import { WifiOff, ChevronLeft, ShieldCheck, Zap } from "lucide-react";
import { Logo } from "./Logo";
import { motion } from "framer-motion";
import splashImg from "@/assets/splash.png"; // We'll keep the import but I'll use the generated one if possible, or just style this better.

export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2 bg-background selection:bg-primary/30">
      {/* Left: Branding & Visuals (Hidden on Mobile) */}
      <div className="relative hidden overflow-hidden bg-slate-950 lg:block">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={splashImg}
            alt="JifunzeHub Experience"
            className="h-full w-full object-cover opacity-60 saturate-[0.8]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent" />
        </motion.div>

        <div className="relative flex h-full flex-col justify-between p-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Logo className="text-white scale-110 origin-left" />
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="space-y-4"
            >
              <h2 className="text-6xl font-black leading-[0.95] text-white tracking-tighter uppercase">
                The Future of <br />
                <span className="text-primary italic">Learning</span> is <br />
                Offline-First.
              </h2>
              <p className="mt-6 max-w-md text-lg text-slate-300 font-medium leading-relaxed">
                JifunzeHub ensures institutional continuity in low-connectivity environments by
                bringing the entire campus experience to the local network.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap items-center gap-4"
            >
              <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white shadow-xl">
                <WifiOff className="h-3.5 w-3.5 text-accent animate-pulse" /> Offline Secure
              </div>
              <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white shadow-xl">
                <ShieldCheck className="h-3.5 w-3.5 text-success" /> Auth Persistence
              </div>
              <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white shadow-xl">
                <Zap className="h-3.5 w-3.5 text-primary" /> Low Latency
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1.5 }}
            className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60"
          >
            © 2026 JifunzeHub Institutional Engine
          </motion.div>
        </div>
      </div>

      {/* Right: Auth Content */}
      <div className="flex items-center justify-center p-8 sm:p-20 relative overflow-hidden">
        {/* Mobile Background Elements */}
        <div className="lg:hidden absolute top-0 left-0 w-full h-full -z-10 bg-muted/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md space-y-10"
        >
          <div className="space-y-4">
            <div className="lg:hidden mb-12 flex justify-center">
              <Logo />
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl font-black tracking-tighter uppercase leading-none">
                {title}
              </h1>
              <p className="text-muted-foreground font-medium">{subtitle}</p>
            </div>
          </div>

          <div className="relative group">
            {/* Decorative glow for children container */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-focus-within:opacity-100"></div>
            <div className="relative">{children}</div>
          </div>

          {footer && (
            <div className="text-center text-sm font-medium py-4 border-t border-border/50">
              {footer}
            </div>
          )}

          <div className="flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors group"
            >
              <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              Institutional Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
