import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseCardProps {
  id: string;
  patientInitials: string;
  patientAge: number;
  surgeryType: string;
  specialty: string;
  urgency: "routine" | "urgent" | "emergency";
  status: string;
  dueTime: string;
  progress?: number;
}

const urgencyColors = {
  routine: "bg-success/10 text-success border-success/20",
  urgent: "bg-warning/10 text-warning border-warning/20",
  emergency: "bg-destructive/10 text-destructive border-destructive/20",
};

const specialtyColors = [
  "bg-primary/10 text-primary",
  "bg-secondary/10 text-secondary",
  "bg-accent/10 text-accent",
];

export function CaseCard({
  id,
  patientInitials,
  patientAge,
  surgeryType,
  specialty,
  urgency,
  status,
  dueTime,
  progress,
}: CaseCardProps) {
  const specialtyColorClass = specialtyColors[Math.floor(Math.random() * specialtyColors.length)];

  return (
    <div className="glass-card hover-lift p-6 cursor-pointer">
      <div className="flex items-start gap-4">
        <Avatar className="w-12 h-12">
          <AvatarFallback className="bg-primary/20 text-primary font-bold">
            {patientInitials}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge className={`${urgencyColors[urgency]} border`}>
                  {urgency.toUpperCase()}
                </Badge>
                <Badge variant="outline" className={specialtyColorClass}>
                  {specialty}
                </Badge>
              </div>
              <p className="text-sm font-mono text-muted-foreground">{id}</p>
            </div>
          </div>

          <h3 className="font-semibold text-lg mb-1">{surgeryType}</h3>
          <p className="text-sm text-muted-foreground mb-3">Age: {patientAge}</p>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Status: {status}</span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <Clock className="w-4 h-4" />
                {dueTime}
              </span>
            </div>

            {progress !== undefined && (
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
          </div>

          <Link to={`/case/${id}`}>
            <Button className="w-full mt-4 arrow-forward">
              Continue Review
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
