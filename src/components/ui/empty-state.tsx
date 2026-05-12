import { LucideIcon } from "lucide-react";
import { Button } from "./button";
import { motion } from "framer-motion";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionText?: string;
  onAction?: () => void;
}

export function EmptyState({ icon: Icon, title, description, actionText, onAction }: EmptyStateProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center p-12 text-center border-2 border-dashed border-border/60 rounded-[3rem] bg-card/20 backdrop-blur-sm"
    >
      <div className="p-6 rounded-full bg-primary/10 text-primary mb-6 shadow-inner">
        <Icon className="w-12 h-12" />
      </div>
      <h3 className="text-2xl font-black mb-2">{title}</h3>
      <p className="text-muted-foreground max-w-sm mb-8 font-medium leading-relaxed">
        {description}
      </p>
      {actionText && onAction && (
        <Button onClick={onAction} className="rounded-2xl h-12 px-8 font-black shadow-lg shadow-primary/20">
          {actionText}
        </Button>
      )}
    </motion.div>
  );
}
