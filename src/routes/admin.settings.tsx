import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Building2, Save, Upload, Palette, Globe, HardDrive } from "lucide-react";

export const Route = createFileRoute("/admin/settings")({
  head: () => ({ meta: [{ title: "Institution Settings — Admin" }] }),
  component: AdminSettings,
});

function AdminSettings() {
  return (
    <DashboardLayout role="admin" title="Institution Settings" subtitle="Configure platform branding, contact details, and global sync policies.">
      <div className="max-w-4xl space-y-6">
        
        {/* General Profile */}
        <Card className="border-border/40 shadow-sm bg-card/50 backdrop-blur-sm rounded-2xl">
          <CardHeader className="border-b border-border/40 p-6">
            <CardTitle className="text-lg font-bold flex items-center gap-2">
               <Building2 className="w-5 h-5 text-primary" /> Institution Profile
            </CardTitle>
            <CardDescription className="text-xs mt-1">These details appear on student dashboards and fee statements.</CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="flex items-center gap-6 pb-6 border-b border-border/40">
               <div className="h-20 w-20 rounded-xl bg-muted/50 border-2 border-dashed border-border/60 flex items-center justify-center text-muted-foreground flex-col gap-1 cursor-pointer hover:bg-muted transition-colors">
                  <Upload className="w-5 h-5" />
                  <span className="text-[9px] uppercase font-bold tracking-widest">Logo</span>
               </div>
               <div className="space-y-1">
                  <p className="text-sm font-semibold">Institution Logo</p>
                  <p className="text-xs text-muted-foreground">Upload a transparent PNG, min 200x200px.</p>
               </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-sm">
               <div className="space-y-2">
                 <Label className="text-xs font-semibold text-muted-foreground">School Name</Label>
                 <Input defaultValue="Nairobi TVET Institute" className="h-10 rounded-lg" />
               </div>
               <div className="space-y-2">
                 <Label className="text-xs font-semibold text-muted-foreground">Abbreviation / Tagline</Label>
                 <Input defaultValue="Excellence in Skills" className="h-10 rounded-lg" />
               </div>
               <div className="space-y-2">
                 <Label className="text-xs font-semibold text-muted-foreground">Contact Email</Label>
                 <Input defaultValue="support@nairobitevt.ac.ke" className="h-10 rounded-lg" />
               </div>
               <div className="space-y-2">
                 <Label className="text-xs font-semibold text-muted-foreground">Support Phone</Label>
                 <Input defaultValue="+254 700 000 000" className="h-10 rounded-lg" />
               </div>
            </div>
          </CardContent>
        </Card>

        {/* Sync & Offline Policies */}
        <Card className="border-border/40 shadow-sm bg-card/50 backdrop-blur-sm rounded-2xl">
          <CardHeader className="border-b border-border/40 p-6">
            <CardTitle className="text-lg font-bold flex items-center gap-2">
               <HardDrive className="w-5 h-5 text-primary" /> Offline Sync Policies
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6 text-sm">
             <div className="flex items-center justify-between">
                <div className="space-y-1">
                   <p className="font-semibold">Auto-Sync on Local Network</p>
                   <p className="text-xs text-muted-foreground">Automatically download assignments when connected to campus Wi-Fi.</p>
                </div>
                <Switch defaultChecked />
             </div>
             <div className="flex items-center justify-between">
                <div className="space-y-1">
                   <p className="font-semibold">Restrict Downloads on Unpaid Fees</p>
                   <p className="text-xs text-muted-foreground">Prevent downloading full course modules if fee balance is overdue.</p>
                </div>
                <Switch defaultChecked />
             </div>
             <div className="flex items-center justify-between">
                <div className="space-y-1">
                   <p className="font-semibold">Allow USB Sideloading</p>
                   <p className="text-xs text-muted-foreground">Permit students to copy encrypted course packages via USB drives.</p>
                </div>
                <Switch defaultChecked />
             </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-3 pt-4">
           <Button variant="outline" className="h-10 px-6 rounded-lg font-semibold">Discard Changes</Button>
           <Button className="h-10 px-6 rounded-lg font-semibold"><Save className="w-4 h-4 mr-2"/> Save Configuration</Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
