import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Search, Filter, ArrowUpRight, TrendingUp, Users, FileText, PlusCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { FinanceRecord } from "@/types/admin";

export const Route = createFileRoute("/admin/finance")({
  head: () => ({ meta: [{ title: "Finance & Fees — Admin" }] }),
  component: AdminFinance,
});

function AdminFinance() {
  const students: FinanceRecord[] = [
    { id: "ST-001", name: "Amina Hussein", course: "Hospitality", total: 45000, paid: 45000, balance: 0, status: "Cleared" },
    { id: "ST-002", name: "David Mutua", course: "Electrical", total: 52000, paid: 20000, balance: 32000, status: "Pending" },
    { id: "ST-003", name: "Sarah Ochieng", course: "ICT", total: 48000, paid: 40000, balance: 8000, status: "Pending" },
    { id: "ST-004", name: "James Kipruto", course: "Automotive", total: 55000, paid: 10000, balance: 45000, status: "Overdue" },
  ];

  return (
    <DashboardLayout role="admin" title="Fee Management" subtitle="Monitor school fees, track payments, and manage student financial records.">
      <div className="space-y-8">
        
        {/* Finance Overview */}
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="border-border/40 shadow-sm bg-card/50 backdrop-blur-sm rounded-2xl">
            <CardContent className="p-6 flex flex-col justify-between h-full space-y-4">
              <div className="flex justify-between items-start">
                <div className="p-2.5 bg-primary/10 text-primary rounded-lg">
                  <DollarSign className="w-5 h-5" />
                </div>
                <Badge variant="outline" className="text-[10px] font-semibold bg-success/10 text-success border-success/20">+12% this month</Badge>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Total Collected (Term 1)</p>
                <h3 className="text-2xl font-bold mt-1">KES 1.4M</h3>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-border/40 shadow-sm bg-card/50 backdrop-blur-sm rounded-2xl">
            <CardContent className="p-6 flex flex-col justify-between h-full space-y-4">
              <div className="flex justify-between items-start">
                <div className="p-2.5 bg-amber-500/10 text-amber-500 rounded-lg">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Outstanding Balances</p>
                <h3 className="text-2xl font-bold mt-1">KES 480K</h3>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/40 shadow-sm bg-card/50 backdrop-blur-sm rounded-2xl">
            <CardContent className="p-6 flex flex-col justify-between h-full space-y-4">
              <div className="flex justify-between items-start">
                <div className="p-2.5 bg-blue-500/10 text-blue-500 rounded-lg">
                  <Users className="w-5 h-5" />
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Cleared Students</p>
                <div className="flex items-end gap-2 mt-1">
                  <h3 className="text-2xl font-bold">142</h3>
                  <span className="text-sm text-muted-foreground mb-1">/ 412</span>
                </div>
                <Progress value={(142/412)*100} className="h-1.5 mt-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/40 shadow-sm bg-card/50 backdrop-blur-sm rounded-2xl bg-primary/5 border-primary/20 flex items-center justify-center cursor-pointer hover:bg-primary/10 transition-colors">
            <CardContent className="p-6 flex flex-col items-center text-center">
               <PlusCircle className="w-8 h-8 text-primary mb-2" />
               <p className="font-semibold text-sm">Record New Payment</p>
               <p className="text-xs text-muted-foreground mt-1">Log a manual transaction</p>
            </CardContent>
          </Card>
        </div>

        {/* Student Balances Table */}
        <Card className="border-border/40 shadow-sm bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden">
          <CardHeader className="border-b border-border/40 p-6 bg-muted/20 flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg font-bold">Student Fee Balances</CardTitle>
              <CardDescription className="text-xs mt-1">Overview of all registered students and their fee status.</CardDescription>
            </div>
            <div className="flex gap-2">
               <div className="relative w-64">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                 <Input className="pl-9 h-9 text-sm rounded-lg" placeholder="Search student or ID..." />
               </div>
               <Button variant="outline" size="sm" className="h-9 rounded-lg"><Filter className="w-4 h-4 mr-2"/> Filter</Button>
            </div>
          </CardHeader>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-muted/30 border-b border-border/40">
                <tr>
                  <th className="px-6 py-4 font-semibold tracking-wider">Student ID</th>
                  <th className="px-6 py-4 font-semibold tracking-wider">Name</th>
                  <th className="px-6 py-4 font-semibold tracking-wider">Course</th>
                  <th className="px-6 py-4 font-semibold tracking-wider">Total Fee</th>
                  <th className="px-6 py-4 font-semibold tracking-wider">Paid</th>
                  <th className="px-6 py-4 font-semibold tracking-wider">Balance</th>
                  <th className="px-6 py-4 font-semibold tracking-wider">Status</th>
                  <th className="px-6 py-4 font-semibold tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {students.map((s) => (
                  <tr key={s.id} className="hover:bg-muted/10 transition-colors">
                    <td className="px-6 py-4 font-mono text-xs">{s.id}</td>
                    <td className="px-6 py-4 font-semibold">{s.name}</td>
                    <td className="px-6 py-4 text-muted-foreground">{s.course}</td>
                    <td className="px-6 py-4">KES {s.total.toLocaleString()}</td>
                    <td className="px-6 py-4 text-success">KES {s.paid.toLocaleString()}</td>
                    <td className="px-6 py-4 font-semibold">KES {s.balance.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <Badge variant="outline" className={`text-[10px] font-semibold ${s.status === 'Cleared' ? 'bg-success/10 text-success border-success/20' : s.status === 'Overdue' ? 'bg-destructive/10 text-destructive border-destructive/20' : 'bg-amber-500/10 text-amber-500 border-amber-500/20'}`}>
                        {s.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="sm" className="h-8 text-xs font-semibold rounded-md">View Details</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

      </div>
    </DashboardLayout>
  );
}
