import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { CaseCard } from "@/components/cases/CaseCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const availableCases = [
  {
    id: "PC-2025-5678",
    patientInitials: "M.K.",
    patientAge: 62,
    surgeryType: "Aortic Valve Replacement",
    specialty: "Cardiac",
    urgency: "urgent" as const,
    status: "Available",
    dueTime: "24 minutes remaining",
    compensation: "$850",
    reviewTime: "2-3 hours",
  },
  {
    id: "PC-2025-5679",
    patientInitials: "J.D.",
    patientAge: 58,
    surgeryType: "Hip Replacement",
    specialty: "Orthopedic",
    urgency: "routine" as const,
    status: "Available",
    dueTime: "2 days remaining",
    compensation: "$650",
    reviewTime: "1-2 hours",
  },
  {
    id: "PC-2025-5680",
    patientInitials: "A.P.",
    patientAge: 67,
    surgeryType: "Brain Tumor Resection",
    specialty: "Neurosurgery",
    urgency: "emergency" as const,
    status: "Available",
    dueTime: "45 minutes remaining",
    compensation: "$1,200",
    reviewTime: "3-4 hours",
  },
];

export default function Cases() {
  const { toast } = useToast();

  const handleAcceptCase = (caseId: string) => {
    toast({
      title: "Case Accepted!",
      description: `You've successfully accepted case ${caseId}. Redirecting to case review...`,
    });
  };

  return (
    <DashboardLayout>
      <div className="p-8 max-w-7xl mx-auto animate-slide-forward">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Available Cases</h1>
          <p className="text-muted-foreground">Review and accept cases that match your expertise</p>
        </div>

        {/* Filters */}
        <div className="glass-card p-6 mb-8">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="font-semibold">Filters:</span>
            </div>

            <Select defaultValue="all">
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Surgery Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="cardiac">Cardiac</SelectItem>
                <SelectItem value="orthopedic">Orthopedic</SelectItem>
                <SelectItem value="neuro">Neurosurgery</SelectItem>
                <SelectItem value="general">General</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all">
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Urgency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Urgency</SelectItem>
                <SelectItem value="routine">Routine</SelectItem>
                <SelectItem value="urgent">Urgent</SelectItem>
                <SelectItem value="emergency">Emergency</SelectItem>
              </SelectContent>
            </Select>

            <Button className="btn-primary ml-auto">Apply Filters</Button>
          </div>
        </div>

        {/* Case Cards */}
        <div className="space-y-6">
          {availableCases.map((caseData) => (
            <div key={caseData.id} className="glass-card p-6 hover-lift">
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        caseData.urgency === "emergency"
                          ? "bg-destructive text-destructive-foreground"
                          : caseData.urgency === "urgent"
                          ? "bg-warning text-warning-foreground"
                          : "bg-success text-success-foreground"
                      }`}
                    >
                      {caseData.urgency === "emergency" ? "🔴 EMERGENCY" : caseData.urgency === "urgent" ? "⚠️ URGENT" : "✓ ROUTINE"}
                    </span>
                    <span className="font-mono text-sm text-muted-foreground">{caseData.id}</span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Patient</p>
                      <p className="font-semibold">{caseData.patientInitials} | Age: {caseData.patientAge}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Surgery Type</p>
                      <p className="font-semibold">{caseData.surgeryType}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Compensation</p>
                      <p className="font-semibold text-success">{caseData.compensation}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Est. Review Time</p>
                      <p className="font-semibold">{caseData.reviewTime}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">⏱️ Time to Accept:</span>
                    <span className="font-semibold text-destructive">{caseData.dueTime}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 min-w-[200px]">
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                  <Button onClick={() => handleAcceptCase(caseData.id)} className="w-full btn-primary">
                    Accept Case
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
