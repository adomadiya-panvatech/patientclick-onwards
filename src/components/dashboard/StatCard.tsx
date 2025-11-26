import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  iconColor?: string;
}

export function StatCard({ title, value, icon: Icon, trend, trendUp = true, iconColor = "bg-primary" }: StatCardProps) {
  return (
    <div className="glass-card hover-lift p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
          <p className="text-3xl font-bold text-foreground">{value}</p>
          {trend && (
            <p className={`text-sm mt-2 flex items-center gap-1 ${trendUp ? "text-success" : "text-destructive"}`}>
              <span>{trendUp ? "↑" : "↓"}</span>
              {trend}
            </p>
          )}
        </div>
        <div className={`${iconColor} p-3 rounded-xl`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
}
