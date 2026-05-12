import { motion, AnimatePresence } from "framer-motion";
import { 
  CloudOff, 
  CloudRain, 
  RefreshCw, 
  CheckCircle2, 
  Clock, 
  FileUp, 
  Database,
  Usb,
  AlertCircle,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export type SyncItem = {
  id: string;
  name: string;
  type: "course" | "assignment" | "assessment" | "profile";
  status: "queued" | "syncing" | "completed" | "error";
  progress: number;
  timestamp: string;
};

interface SyncQueueProps {
  items: SyncItem[];
  onSyncAll?: () => void;
  onClearCompleted?: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export function SyncQueue({ items, onSyncAll, onClearCompleted, isOpen, onClose }: SyncQueueProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-card border-l border-border/40 shadow-2xl z-[70] flex flex-col"
          >
            <div className="p-6 border-b border-border/40 flex items-center justify-between bg-muted/20">
              <div>
                <h3 className="text-xl font-black flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-primary" /> Sync Pipeline
                </h3>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">
                  Local Queue • {items.filter(i => i.status === 'queued').length} Pending
                </p>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose} className="rounded-xl">
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-40">
                  <div className="p-6 rounded-full bg-muted">
                    <CloudOff className="w-12 h-12" />
                  </div>
                  <p className="font-bold uppercase tracking-widest text-xs">Queue is clear</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="p-4 rounded-2xl border border-border/40 bg-muted/10 space-y-3 relative overflow-hidden group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          item.status === 'completed' ? 'bg-success/10 text-success' : 
                          item.status === 'syncing' ? 'bg-primary/10 text-primary' : 'bg-muted/50 text-muted-foreground'
                        }`}>
                          {item.type === 'course' ? <Database className="w-4 h-4" /> : <FileUp className="w-4 h-4" />}
                        </div>
                        <div>
                          <p className="text-sm font-black truncate max-w-[200px]">{item.name}</p>
                          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{item.timestamp}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className={`text-[9px] font-black uppercase ${
                        item.status === 'completed' ? 'bg-success/10 text-success border-success/20' : 
                        item.status === 'syncing' ? 'bg-primary/10 text-primary border-primary/20 animate-pulse' : 'bg-muted/50 border-border/40'
                      }`}>
                        {item.status}
                      </Badge>
                    </div>

                    {item.status === 'syncing' && (
                      <div className="space-y-1.5">
                        <Progress value={item.progress} className="h-1" />
                        <div className="flex justify-between text-[9px] font-black uppercase text-muted-foreground">
                          <span>{item.progress}%</span>
                          <span>Pushing to Central Hub</span>
                        </div>
                      </div>
                    )}

                    {item.status === 'error' && (
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-destructive/5 border border-destructive/20">
                        <AlertCircle className="w-3 h-3 text-destructive" />
                        <span className="text-[10px] font-bold text-destructive">Conflict: Remote version is newer.</span>
                        <Button variant="link" className="text-[10px] font-black text-destructive p-0 ml-auto underline">Resolve</Button>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

            <div className="p-6 border-t border-border/40 bg-muted/20 space-y-3">
              <div className="flex gap-3">
                <Button 
                  onClick={onSyncAll}
                  disabled={items.length === 0}
                  className="flex-1 rounded-xl font-black bg-primary text-white shadow-lg shadow-primary/20 h-12"
                >
                  <RefreshCw className="w-4 h-4 mr-2" /> Sync Everything
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => {}}
                  className="rounded-xl font-black border-border/60 h-12"
                >
                  <Usb className="w-4 h-4 mr-2" /> USB Export
                </Button>
              </div>
              <p className="text-[9px] text-center font-bold text-muted-foreground uppercase tracking-widest">
                Data is encrypted and stored in local IndexedDB
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
