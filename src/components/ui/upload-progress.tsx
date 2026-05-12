import { Progress } from "./progress";
import { X, CheckCircle2, FileText, UploadCloud } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface UploadProgressProps {
  fileName: string;
  progress: number;
  status: "uploading" | "completed" | "error";
  onCancel?: () => void;
}

export function UploadProgress({ fileName, progress, status, onCancel }: UploadProgressProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="p-4 rounded-2xl bg-card border border-border/40 shadow-xl space-y-3"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            {status === "completed" ? <CheckCircle2 className="w-4 h-4" /> : <UploadCloud className="w-4 h-4" />}
          </div>
          <div>
            <p className="text-xs font-black truncate max-w-[150px]">{fileName}</p>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
              {status === "uploading" ? "Uploading..." : status === "completed" ? "Ready" : "Failed"}
            </p>
          </div>
        </div>
        <button onClick={onCancel} className="text-muted-foreground hover:text-foreground">
          <X className="w-4 h-4" />
        </button>
      </div>
      
      <div className="space-y-1.5">
        <Progress value={progress} className={`h-1.5 ${status === "completed" ? "bg-success" : ""}`} />
        <div className="flex justify-between text-[9px] font-black uppercase text-muted-foreground">
          <span>{progress}%</span>
          <span>{status === "uploading" ? "Syncing to cache..." : "Stored"}</span>
        </div>
      </div>
    </motion.div>
  );
}
