import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { CaseCard } from "@/components/cases/CaseCard";
import { FolderOpen, CheckCircle, Clock, Star, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const activeCases = [
  {
    id: "PC-2025-1234",
    patientInitials: "M.K.",
    patientAge: 62,
    surgeryType: "Aortic Valve Replacement",
    specialty: "Cardiac",
    urgency: "urgent" as const,
    status: "In Review",
    dueTime: "Due in 18 hours",
    progress: 65,
  },
  {
    id: "PC-2025-5678",
    patientInitials: "R.S.",
    patientAge: 45,
    surgeryType: "Knee Replacement",
    specialty: "Orthopedic",
    urgency: "routine" as const,
    status: "Awaiting Review",
    dueTime: "Due in 2 days",
    progress: 0,
  },
  {
    id: "PC-2025-9012",
    patientInitials: "L.M.",
    patientAge: 71,
    surgeryType: "Coronary Artery Bypass",
    specialty: "Cardiac",
    urgency: "emergency" as const,
    status: "Pending Review",
    dueTime: "Due in 6 hours",
    progress: 0,
  },
];

const upcomingConsultations = [
  { time: "Today 2:00 PM", patient: "M.K.", type: "Aortic Valve", inTime: "Starts in 2 hours" },
  { time: "Tomorrow 10:00 AM", patient: "R.S.", type: "Knee Replacement", inTime: "Starts in 1 day" },
  { time: "Tomorrow 3:00 PM", patient: "L.M.", type: "CABG Review", inTime: "Starts in 1 day" },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="p-8 max-w-7xl mx-auto animate-slide-forward">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Dr. Chen. Here's your overview.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Active Cases"
            value={12}
            icon={FolderOpen}
            trend="+3 this week"
            trendUp={true}
            iconColor="bg-primary"
          />
          <StatCard
            title="Completed This Month"
            value={47}
            icon={CheckCircle}
            trend="+12% vs last month"
            trendUp={true}
            iconColor="bg-success"
          />
          <StatCard
            title="Avg Response Time"
            value="2.4 hrs"
            icon={Clock}
            trend="↓ 0.5 hrs"
            trendUp={true}
            iconColor="bg-secondary"
          />
          <StatCard
            title="Patient Satisfaction"
            value="4.9/5.0"
            icon={Star}
            iconColor="bg-warning"
          />
        </div>

        {/* Active Cases Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Active Cases</h2>
            <Link to="/cases">
              <Button variant="outline" className="arrow-forward">
                View All
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {activeCases.map((caseData) => (
              <CaseCard key={caseData.id} {...caseData} />
            ))}
          </div>
        </div>

        {/* Upcoming Consultations */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Calendar className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Upcoming Consultations</h2>
          </div>

          <div className="glass-card p-6">
            <div className="space-y-4">
              {upcomingConsultations.map((consultation, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-border hover-lift"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{consultation.time}</p>
                      <p className="text-sm text-muted-foreground">
                        {consultation.patient} - {consultation.type}
                      </p>
                      <p className="text-xs text-success">{consultation.inTime}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Join Consultation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
