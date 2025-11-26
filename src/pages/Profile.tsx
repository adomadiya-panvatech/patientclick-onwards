import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { MapPin, Award, Languages, Upload, Star } from "lucide-react";

export default function Profile() {
  return (
    <DashboardLayout>
      <div className="p-8 max-w-7xl mx-auto animate-slide-forward">
        {/* Profile Header */}
        <div className="glass-card p-8 mb-8">
          <div className="flex items-start gap-6">
            <div className="relative group">
              <Avatar className="w-32 h-32">
                <AvatarFallback className="bg-primary text-primary-foreground text-4xl font-bold">
                  SC
                </AvatarFallback>
              </Avatar>
              <button className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Upload className="w-8 h-8 text-white" />
              </button>
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">Dr. Sarah Chen, MD, FACS</h1>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-warning text-warning-foreground">Gold Provider</Badge>
                    <span className="text-muted-foreground">Member since January 2024</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      San Francisco, CA
                    </div>
                  </div>
                </div>
                <Button>Edit Profile</Button>
              </div>

              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="bg-primary/10 text-primary">Cardiothoracic Surgery</Badge>
                <Badge variant="outline" className="bg-secondary/10 text-secondary">Cardiac Surgery</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-white border border-border">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="credentials">Credentials</TabsTrigger>
            <TabsTrigger value="availability">Availability</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">About</h3>
              <p className="text-muted-foreground leading-relaxed">
                Board-certified cardiothoracic surgeon with over 12 years of experience in complex cardiac procedures. 
                Specialized in minimally invasive cardiac surgery and high-risk valve replacements. Committed to providing 
                expert surgical opinions to improve patient outcomes worldwide.
              </p>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Specialties
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <p className="font-semibold">Cardiothoracic Surgery</p>
                  <p className="text-sm text-muted-foreground">Primary specialty</p>
                </div>
                <div className="p-4 bg-secondary/5 rounded-lg">
                  <p className="font-semibold">Cardiac Surgery</p>
                  <p className="text-sm text-muted-foreground">Sub-specialty</p>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Languages className="w-5 h-5" />
                Languages
              </h3>
              <div className="flex gap-2">
                <Badge>English (Native)</Badge>
                <Badge>Mandarin (Fluent)</Badge>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="glass-card p-6">
                <p className="text-sm text-muted-foreground mb-2">Total Cases</p>
                <p className="text-3xl font-bold">247</p>
              </Card>
              <Card className="glass-card p-6">
                <p className="text-sm text-muted-foreground mb-2">This Month</p>
                <p className="text-3xl font-bold">47</p>
              </Card>
              <Card className="glass-card p-6">
                <p className="text-sm text-muted-foreground mb-2">Avg Response</p>
                <p className="text-3xl font-bold">2.4 hrs</p>
              </Card>
              <Card className="glass-card p-6">
                <p className="text-sm text-muted-foreground mb-2">Rating</p>
                <div className="flex items-center gap-2">
                  <p className="text-3xl font-bold">4.9</p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            <Card className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">Patient Feedback</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="w-4 h-4 fill-warning text-warning" />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">2 days ago</span>
                    </div>
                    <p className="text-sm">
                      Excellent detailed opinion. Dr. Chen provided comprehensive analysis with clear recommendations.
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="earnings" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glass-card p-6">
                <p className="text-sm text-muted-foreground mb-2">Current Month</p>
                <p className="text-3xl font-bold text-success">$42,450</p>
              </Card>
              <Card className="glass-card p-6">
                <p className="text-sm text-muted-foreground mb-2">Year to Date</p>
                <p className="text-3xl font-bold text-success">$485,900</p>
              </Card>
              <Card className="glass-card p-6">
                <p className="text-sm text-muted-foreground mb-2">Avg per Case</p>
                <p className="text-3xl font-bold">$1,967</p>
              </Card>
            </div>

            <Card className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">Payment Method</h3>
              <div className="p-4 bg-muted/50 rounded-lg flex items-center justify-between">
                <div>
                  <p className="font-semibold">ACH Direct Deposit</p>
                  <p className="text-sm text-muted-foreground">Account ending in ••4242</p>
                </div>
                <Button variant="outline">Update</Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
