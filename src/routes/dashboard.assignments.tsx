import { createFileRoute, Link } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Download } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  SlidersHorizontal,
  ClipboardList,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileText,
  Upload,
  MoreVertical,
  MessageSquare,
  ArrowUpCircle,
  ExternalLink,
  Calendar,
  FileType,
  Filter,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/assignments")({
  component: AssignmentsComponent,
});

function AssignmentsComponent() {
  const assignments = [
    {
      id: 1,
      title: "Solar Array Sizing Lab",
      course: "Solar Photovoltaic Installation",
      due: "Tomorrow",
      status: "Pending",
      buttons: ["Open Assignment", "Save Offline", "Submit"],
      color: "border-destructive",
      badge: "DESTRUCTIVE",
    },
    {
      id: 2,
      title: "Engine Block Tear-down Report",
      course: "Automotive Engine Diagnostics",
      due: "Friday",
      status: "Draft Saved Offline",
      buttons: ["Continue Editing", "Upload Photos", "Sync Submission"],
      color: "border-amber-500",
      badge: "WARNING",
    },
    {
      id: 3,
      title: "Service Roleplay Reflection",
      course: "Food and Beverage Service & Sales",
      due: "Completed",
      status: "Submitted",
      grade: "Pending",
      buttons: ["View Submission", "Lecturer Feedback"],
      color: "border-success",
      badge: "SUCCESS",
    },
  ];

  return (
    <DashboardLayout
      role="student"
      title="Assignments"
      subtitle="Manage your practical work, submit offline drafts, and track grading feedback."
    >
      <div className="space-y-8">
        {/* Assignment Table */}
        <div className="grid gap-6">
          {assignments.map((assignment) => (
            <Card key={assignment.id} className={`border-l-8 ${assignment.color} bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden`}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="font-bold bg-muted/50 uppercase tracking-widest text-[10px]">
                        {assignment.course}
                      </Badge>
                      <Badge className={assignment.status === "Pending" ? "bg-destructive" : assignment.status === "Submitted" ? "bg-success" : "bg-amber-500"}>
                        {assignment.status}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-black">{assignment.title}</h3>
                    <p className="text-sm font-bold text-muted-foreground flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" /> Due: {assignment.due}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {assignment.buttons.map((btn, i) => {
                      const isOpen = btn.includes("Open") || btn.includes("Continue Editing") || btn.includes("View Submission");
                      return (
                        <Button
                          key={btn}
                          variant={i === 0 ? "default" : "outline"}
                          asChild={isOpen}
                          className="rounded-xl font-bold px-6 h-12 shadow-lg transition-transform active:scale-95"
                          onClick={!isOpen ? () => {
                            import("sonner").then(({ toast }) => {
                              if (btn === "Submit") toast.promise(new Promise(r => setTimeout(r, 2000)), { loading: "Submitting assignment…", success: "Submitted successfully! Queued for sync.", error: "Submission failed." });
                              else if (btn === "Save Offline") toast.success("Draft saved offline. Will sync when connected.");
                              else if (btn === "Upload Photos") toast.success("Photo upload dialog opened.");
                              else if (btn === "Sync Submission") toast.promise(new Promise(r => setTimeout(r, 1500)), { loading: "Syncing submission…", success: "Submission synced to campus server!", error: "Sync failed." });
                              else if (btn === "Lecturer Feedback") toast.success("Feedback request sent to lecturer.");
                            });
                          } : undefined}
                        >
                          {isOpen ? <Link to={`/dashboard/player/CRS-101`}>{btn}</Link> : btn}
                        </Button>
                      );
                    })}
                  </div>
                </div>
                {assignment.grade && (
                  <div className="mt-4 pt-4 border-t border-border/40 flex items-center gap-2 text-success font-black">
                    <CheckCircle2 className="w-5 h-5" /> Grade: {assignment.grade}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Assignment Viewer Section */}
        <Card className="border-primary/20 bg-primary/5 rounded-[2.5rem] overflow-hidden shadow-2xl mt-12">
          <CardHeader className="p-8 border-b border-primary/10">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-3xl font-black text-primary">Assignment Viewer</CardTitle>
                <CardDescription className="text-lg font-bold text-muted-foreground">Solar Array Sizing Lab — Solar Photovoltaic Installation</CardDescription>
              </div>
              <Button variant="ghost" className="rounded-full h-12 w-12 hover:bg-primary/10 text-primary">
                <ExternalLink className="w-6 h-6" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Tabs defaultValue="instructions" className="w-full">
              <TabsList className="w-full justify-start h-auto bg-transparent p-4 gap-4 overflow-x-auto no-scrollbar">
                <TabsTrigger value="instructions" className="rounded-xl px-8 py-4 font-black data-[state=active]:bg-primary data-[state=active]:text-white">Instructions</TabsTrigger>
                <TabsTrigger value="attachments" className="rounded-xl px-8 py-4 font-black data-[state=active]:bg-primary data-[state=active]:text-white">Attachments</TabsTrigger>
                <TabsTrigger value="rubric" className="rounded-xl px-8 py-4 font-black data-[state=active]:bg-primary data-[state=active]:text-white">Grading Rubric</TabsTrigger>
              </TabsList>
              
              <TabsContent value="instructions" className="p-8 space-y-6 m-0 focus-visible:outline-none bg-card/30">
                 <div className="space-y-4">
                    <h4 className="text-xl font-black">Project Overview</h4>
                    <p className="font-medium text-muted-foreground leading-relaxed">Calculate the total daily load for a rural clinic and design an appropriate standalone solar PV system. You must specify panel wattage, battery capacity, and inverter size.</p>
                 </div>
                 <div className="space-y-4 pt-6 border-t border-border/40">
                    <h4 className="text-xl font-black">Technical Requirements</h4>
                    <ul className="grid gap-3">
                       {['Accurate load profile table', 'Battery bank sizing with 3 days autonomy', 'Inverter sizing with surge allowance', 'Wiring diagram sketch (photo upload)'].map((req, i) => (
                          <li key={i} className="flex items-center gap-3 font-bold text-sm">
                             <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> {req}
                          </li>
                       ))}
                    </ul>
                 </div>
              </TabsContent>

              <TabsContent value="attachments" className="grid md:grid-cols-2 gap-4 m-0 focus-visible:outline-none p-6">
                  <div className="p-6 bg-card rounded-2xl border border-border/60 flex items-center justify-between group hover:border-primary transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500"><FileText className="w-6 h-6" /></div>
                      <div>
                        <p className="font-bold">Project_Specs.pdf</p>
                        <p className="text-xs text-muted-foreground">1.2 MB • PDF</p>
                      </div>
                    </div>
                    <Download className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="p-6 bg-card rounded-2xl border border-border/60 flex items-center justify-between group hover:border-primary transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl text-primary"><FileType className="w-6 h-6" /></div>
                      <div>
                        <p className="font-bold">Network_Template.pkt</p>
                        <p className="text-xs text-muted-foreground">450 KB • PKT</p>
                      </div>
                    </div>
                    <Download className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </TabsContent>

                <TabsContent value="rubric" className="m-0 focus-visible:outline-none">
                   <div className="overflow-hidden border border-border/60 rounded-2xl">
                     <table className="w-full text-left">
                       <thead className="bg-muted/50 border-b border-border/60">
                         <tr>
                           <th className="p-4 font-black">Criteria</th>
                           <th className="p-4 font-black">Weight</th>
                           <th className="p-4 font-black">Description</th>
                         </tr>
                       </thead>
                       <tbody className="divide-y divide-border/60">
                         <tr>
                           <td className="p-4 font-bold">VLAN Logic</td>
                           <td className="p-4 font-black text-primary">30%</td>
                           <td className="p-4 text-sm text-muted-foreground">Correct addressing and department separation.</td>
                         </tr>
                         <tr>
                           <td className="p-4 font-bold">Security Config</td>
                           <td className="p-4 font-black text-primary">40%</td>
                           <td className="p-4 text-sm text-muted-foreground">Implementation of ACLs and Port Security.</td>
                         </tr>
                       </tbody>
                     </table>
                   </div>
                </TabsContent>

                <TabsContent value="submission" className="space-y-6 m-0 focus-visible:outline-none">
                  <div className="border-2 border-dashed border-primary/30 rounded-[2rem] p-12 text-center space-y-4 hover:bg-primary/5 transition-all cursor-pointer group">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary group-hover:scale-110 transition-transform">
                      <Upload className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black">Drag and Drop Submission</h3>
                      <p className="text-muted-foreground font-bold">Upload your Packet Tracer lab and documentation here.</p>
                    </div>
                    <Button className="rounded-xl px-12 py-6 font-black text-lg shadow-xl shadow-primary/20">Select Files</Button>
                  </div>
                </TabsContent>

                <TabsContent value="comments" className="space-y-4 m-0 focus-visible:outline-none">
                  <div className="p-6 bg-card rounded-2xl border border-border/60 relative">
                    <div className="absolute top-4 right-4 text-xs font-bold text-muted-foreground">May 10, 2026</div>
                    <div className="flex gap-4">
                      <Avatar className="w-10 h-10 border-2 border-primary/20">
                        <AvatarFallback className="bg-primary text-white font-bold">EK</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-black">Dr. Sarah Omondi</p>
                        <p className="text-muted-foreground mt-2 font-medium">
                          "Great start on the calculations. Ensure your battery bank sizing accounts for the correct depth of discharge for lead-acid batteries."
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="p-8 bg-muted/20 border-t border-primary/10 justify-end">
             <Button variant="outline" className="rounded-xl font-bold h-12 border-border/60">Save Draft for Offline</Button>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  );
}
