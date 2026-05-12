import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  ChevronRight, 
  ChevronLeft,
  Timer,
  Flag,
  HelpCircle,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/dashboard/assessments/$id")({
  component: AssessmentPlayerComponent,
});

function AssessmentPlayerComponent() {
  const { id } = Route.useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !isFinished) {
      const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setIsFinished(true);
    }
  }, [timeLeft, isFinished]);

  const questions = [
    {
      id: 1,
      text: "Which layer of the OSI model is responsible for logical addressing and routing?",
      options: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"],
      correct: "Network Layer"
    },
    {
      id: 2,
      text: "What is the primary function of a Router in a computer network?",
      options: [
        "To connect multiple devices in a single LAN",
        "To direct data packets between different networks",
        "To provide power to connected devices via Ethernet",
        "To store website data for faster access"
      ],
      correct: "To direct data packets between different networks"
    },
    {
      id: 3,
      text: "Which protocol is used to automatically assign IP addresses to devices on a network?",
      options: ["HTTP", "DNS", "DHCP", "FTP"],
      correct: "DHCP"
    }
  ];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleFinish = () => {
    setIsFinished(true);
  };

  if (isFinished) {
    const score = questions.reduce((acc, q, idx) => {
      return acc + (answers[idx] === q.correct ? 1 : 0);
    }, 0);
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="min-h-screen bg-muted/20 flex items-center justify-center p-6">
        <Card className="max-w-xl w-full p-10 border-border/40 bg-card/60 backdrop-blur-xl rounded-[3rem] shadow-2xl text-center space-y-8 animate-jh-fade">
          <div className="w-24 h-24 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto">
             <CheckCircle2 className="w-12 h-12" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-black">Assessment Complete!</h2>
            <p className="text-muted-foreground font-medium">Your results have been saved and queued for sync.</p>
          </div>
          
          <div className="p-8 bg-muted/30 rounded-[2rem] border border-border/40">
             <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2">Final Score</p>
             <div className="text-6xl font-black text-primary mb-2">{percentage}%</div>
             <p className="text-sm font-bold">{score} out of {questions.length} correct</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <Button asChild variant="outline" className="h-12 rounded-xl font-black border-border/60">
                <Link to="/dashboard/assessments">Back to List</Link>
             </Button>
             <Button asChild className="h-12 rounded-xl font-black bg-primary text-white shadow-lg shadow-primary/20">
                <Link to="/dashboard">Go to Dashboard</Link>
             </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-hidden">
      {/* Header */}
      <header className="h-20 border-b border-border/60 bg-card/50 flex items-center justify-between px-8 backdrop-blur-xl shrink-0">
        <div className="flex items-center gap-4">
           <Button variant="ghost" size="icon" asChild className="rounded-xl"><Link to="/dashboard/assessments"><ArrowLeft className="h-5 w-5" /></Link></Button>
           <div>
              <h1 className="text-lg font-black">Module 2 Final Assessment</h1>
              <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Question {currentQuestion + 1} of {questions.length}</p>
           </div>
        </div>
        
        <div className="flex items-center gap-6">
           <div className={`flex items-center gap-3 px-6 py-2.5 rounded-2xl border font-black ${timeLeft < 300 ? 'bg-destructive/10 border-destructive/30 text-destructive animate-pulse' : 'bg-muted/50 border-border/60'}`}>
              <Timer className="w-5 h-5" />
              <span className="tabular-nums">{formatTime(timeLeft)}</span>
           </div>
           <Button variant="outline" className="rounded-xl font-black border-border/60 h-11"><Flag className="w-4 h-4 mr-2" /> Flag Question</Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-12 custom-scrollbar">
         <div className="max-w-4xl mx-auto space-y-12">
            <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-2" />
            
            <Card className="p-12 border-border/40 bg-card/40 backdrop-blur-sm rounded-[3rem] shadow-2xl space-y-10 min-h-[400px]">
               <h3 className="text-3xl font-black leading-tight">{questions[currentQuestion].text}</h3>
               
               <RadioGroup 
                 value={answers[currentQuestion]} 
                 onValueChange={(val) => setAnswers(prev => ({...prev, [currentQuestion]: val}))}
                 className="grid gap-4"
               >
                  {questions[currentQuestion].options.map((opt, i) => (
                    <Label 
                      key={i} 
                      className={`flex items-center gap-4 p-6 rounded-2xl border transition-all cursor-pointer group ${
                        answers[currentQuestion] === opt 
                        ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20' 
                        : 'bg-muted/30 border-border/40 hover:border-primary/40'
                      }`}
                    >
                       <RadioGroupItem value={opt} className="sr-only" />
                       <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                         answers[currentQuestion] === opt ? 'border-white' : 'border-muted-foreground/30'
                       }`}>
                          {answers[currentQuestion] === opt && <div className="w-3 h-3 bg-white rounded-full" />}
                       </div>
                       <span className="text-lg font-black">{opt}</span>
                    </Label>
                  ))}
               </RadioGroup>
            </Card>

            <div className="flex justify-between items-center pt-8">
               <Button 
                 variant="ghost" 
                 disabled={currentQuestion === 0}
                 onClick={() => setCurrentQuestion(prev => prev - 1)}
                 className="h-14 px-8 rounded-2xl font-black gap-2"
               >
                  <ChevronLeft className="w-5 h-5" /> Previous
               </Button>
               
               {currentQuestion === questions.length - 1 ? (
                 <Button 
                   onClick={handleFinish}
                   className="h-14 px-12 rounded-2xl font-black bg-primary text-white shadow-xl shadow-primary/30"
                 >
                    Finish Assessment
                 </Button>
               ) : (
                 <Button 
                   onClick={() => setCurrentQuestion(prev => prev + 1)}
                   className="h-14 px-12 rounded-2xl font-black bg-primary text-white shadow-xl shadow-primary/30 gap-2"
                 >
                    Next Question <ChevronRight className="w-5 h-5" />
                 </Button>
               )}
            </div>
         </div>
      </main>

      {/* Side Progress Bar */}
      <footer className="h-20 border-t border-border/60 bg-card/50 flex items-center justify-center px-8 backdrop-blur-xl shrink-0">
         <div className="flex gap-3">
            {questions.map((_, i) => (
               <button 
                 key={i}
                 onClick={() => setCurrentQuestion(i)}
                 className={`w-10 h-10 rounded-xl font-black text-xs transition-all ${
                   currentQuestion === i 
                   ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-110' 
                   : (answers[i] ? 'bg-primary/20 text-primary border border-primary/30' : 'bg-muted text-muted-foreground border border-border/60')
                 }`}
               >
                  {i + 1}
               </button>
            ))}
         </div>
      </footer>
    </div>
  );
}
