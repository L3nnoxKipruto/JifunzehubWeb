import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Wallet, CreditCard, History, FileText, CheckCircle2, AlertCircle, ArrowDownToLine } from "lucide-react";

export const Route = createFileRoute("/dashboard/fees")({
  head: () => ({ meta: [{ title: "My Fees & Finance — JifunzeHub" }] }),
  component: DashboardFees,
});

function DashboardFees() {
  const feeStructure = [
    { item: "Tuition Fee (Term 1)", amount: 35000 },
    { item: "Library & Lab Fee", amount: 8000 },
    { item: "Registration Fee", amount: 2000 },
  ];
  
  const totalFee = 45000;
  const totalPaid = 20000;
  const balance = totalFee - totalPaid;
  const progressPercent = (totalPaid / totalFee) * 100;

  const transactions = [
    { id: "TRX-8921", date: "Sep 12, 2026", amount: 15000, method: "M-Pesa", status: "Completed" },
    { id: "TRX-8104", date: "Sep 01, 2026", amount: 5000, method: "Bank Transfer", status: "Completed" },
  ];

  return (
    <DashboardLayout role="student" title="Fee Statement" subtitle="View your fee balance, payment history, and download statements.">
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Main Fee Overview */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-border/40 shadow-sm bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Wallet className="w-40 h-40" />
            </div>
            <CardHeader className="p-8 pb-4">
              <div className="flex justify-between items-center">
                <div>
                   <CardTitle className="text-xl font-bold flex items-center gap-2">
                     Current Balance
                   </CardTitle>
                   <CardDescription className="text-xs mt-1">Outstanding amount for Term 1, 2026</CardDescription>
                </div>
                <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/20 text-[10px] font-semibold">Payment Pending</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <h2 className="text-4xl font-black text-primary mt-2">KES {balance.toLocaleString()}</h2>
              
              <div className="mt-8 space-y-2">
                <div className="flex justify-between text-xs font-semibold text-muted-foreground">
                   <span>Paid: KES {totalPaid.toLocaleString()}</span>
                   <span>Total: KES {totalFee.toLocaleString()}</span>
                </div>
                <Progress value={progressPercent} className="h-2 bg-muted/50" />
              </div>

              <div className="mt-8 flex gap-3">
                 <Button className="h-10 px-6 rounded-lg font-semibold shadow-sm">Pay Now</Button>
                 <Button variant="outline" className="h-10 px-6 rounded-lg font-semibold"><ArrowDownToLine className="w-4 h-4 mr-2"/> Download Statement</Button>
              </div>
            </CardContent>
          </Card>

          {/* Fee Breakdown */}
          <Card className="border-border/40 shadow-sm bg-card/50 backdrop-blur-sm rounded-2xl">
             <CardHeader className="p-6 border-b border-border/40">
                <CardTitle className="text-base font-bold flex items-center gap-2">
                   <FileText className="w-4 h-4 text-muted-foreground" /> Fee Structure Breakdown
                </CardTitle>
             </CardHeader>
             <CardContent className="p-0">
                <div className="divide-y divide-border/40 text-sm">
                   {feeStructure.map((item, i) => (
                     <div key={i} className="flex justify-between p-4 px-6">
                        <span className="font-medium text-muted-foreground">{item.item}</span>
                        <span className="font-semibold">KES {item.amount.toLocaleString()}</span>
                     </div>
                   ))}
                   <div className="flex justify-between p-4 px-6 bg-muted/20">
                      <span className="font-bold">Total Fees</span>
                      <span className="font-bold text-primary">KES {totalFee.toLocaleString()}</span>
                   </div>
                </div>
             </CardContent>
          </Card>
        </div>

        {/* Sidebar: History */}
        <div className="space-y-6">
          <Card className="border-border/40 shadow-sm bg-card/50 backdrop-blur-sm rounded-2xl">
             <CardHeader className="p-6 border-b border-border/40">
                <CardTitle className="text-base font-bold flex items-center gap-2">
                   <History className="w-4 h-4 text-muted-foreground" /> Payment History
                </CardTitle>
             </CardHeader>
             <CardContent className="p-0">
                <div className="divide-y divide-border/40">
                   {transactions.map((trx, i) => (
                      <div key={i} className="p-5 flex flex-col gap-2 hover:bg-muted/10 transition-colors">
                         <div className="flex justify-between items-start">
                            <span className="font-bold text-sm text-success">+ KES {trx.amount.toLocaleString()}</span>
                            <span className="text-[10px] text-muted-foreground font-mono">{trx.id}</span>
                         </div>
                         <div className="flex justify-between items-center text-xs text-muted-foreground">
                            <span>{trx.date}</span>
                            <span className="flex items-center gap-1"><CreditCard className="w-3 h-3"/> {trx.method}</span>
                         </div>
                      </div>
                   ))}
                   {transactions.length === 0 && (
                      <div className="p-8 text-center text-sm text-muted-foreground">No payments recorded yet.</div>
                   )}
                </div>
             </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5 rounded-2xl shadow-sm text-sm">
             <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-primary font-bold">
                   <AlertCircle className="w-4 h-4" /> Important Note
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">
                   Fees must be cleared by the 5th week of the semester. Unpaid balances may restrict your ability to download complete offline course packages or sit for assessments.
                </p>
             </CardContent>
          </Card>
        </div>

      </div>
    </DashboardLayout>
  );
}
