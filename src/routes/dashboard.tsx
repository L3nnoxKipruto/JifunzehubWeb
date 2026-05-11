import { createFileRoute, Link } from '@tanstack/react-router'
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  PlayCircle, Download, Clock, CheckCircle2, TrendingUp, Flame, 
  BookOpen, Calendar, ChevronRight, FileCheck2, Lightbulb, RefreshCw,
  MoreVertical, Share2, BookmarkPlus
} from "lucide-react"

export const Route = createFileRoute('/dashboard')({
  component: DashboardComponent,
})

function DashboardComponent() {
  const currentHour = new Date().getHours()
  const greeting = currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening'

  return (
    <DashboardLayout role="student">
      <div className="space-y-8">
        
        {/* Personalized Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 bg-gradient-to-br from-primary/10 via-background to-accent/5 p-6 rounded-2xl border border-primary/10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
          
          <div className="z-10">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-2">
              {greeting}, <span className="text-primary">Amina</span> 👋
            </h1>
            <p className="text-muted-foreground flex items-center gap-2 italic">
              "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 z-10 w-full md:w-auto mt-4 md:mt-0">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/20 flex-1 md:flex-none">
              <PlayCircle className="w-4 h-4 mr-2" /> Resume Learning
            </Button>
            <Button variant="outline" className="bg-background/50 backdrop-blur border-border/60 hover:bg-muted flex-1 md:flex-none">
              <RefreshCw className="w-4 h-4 mr-2 text-accent" /> Sync (3 items)
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          <Card className="col-span-2 border-border/60 shadow-soft bg-background hover:border-primary/30 transition-colors">
            <CardContent className="p-5 flex flex-col justify-between h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-primary/10 text-primary rounded-lg">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <Badge variant="secondary" className="bg-success/10 text-success border-success/20">+12%</Badge>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Weekly Progress</p>
                <h3 className="text-3xl font-bold mt-1">68%</h3>
                <Progress value={68} className="h-1.5 mt-3 bg-muted" indicatorColor="bg-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="col-span-2 border-border/60 shadow-soft bg-background hover:border-accent/30 transition-colors">
            <CardContent className="p-5 flex flex-col justify-between h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-accent/10 text-accent rounded-lg">
                  <Flame className="w-5 h-5" />
                </div>
                <span className="text-xs text-muted-foreground font-medium">Personal Best!</span>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Learning Streak</p>
                <div className="flex items-baseline gap-1 mt-1">
                  <h3 className="text-3xl font-bold text-accent">14</h3>
                  <span className="text-sm font-medium text-muted-foreground">days</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-1 md:col-span-2 lg:col-span-1 border-border/60 shadow-soft bg-background">
            <CardContent className="p-5">
              <div className="p-2 bg-blue-500/10 text-blue-500 rounded-lg w-fit mb-3">
                <Clock className="w-4 h-4" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">Study Hours</p>
              <h3 className="text-2xl font-bold mt-1">24.5h</h3>
            </CardContent>
          </Card>

          <Card className="col-span-1 md:col-span-2 lg:col-span-1 border-border/60 shadow-soft bg-background">
            <CardContent className="p-5">
              <div className="p-2 bg-amber-500/10 text-amber-500 rounded-lg w-fit mb-3">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">Lessons Done</p>
              <h3 className="text-2xl font-bold mt-1">42</h3>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          
          {/* Main Column: Continue Learning & Timeline */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Continue Learning */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold tracking-tight flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" /> Continue Learning
                </h2>
                <Button variant="link" className="text-muted-foreground hover:text-primary p-0">View All <ChevronRight className="w-4 h-4 ml-1" /></Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="group overflow-hidden border-border/60 hover:shadow-elegant hover:border-primary/30 transition-all duration-300 flex flex-col">
                  <div className="relative h-32 bg-muted overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                    <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80" alt="Networking" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                    <Badge className="absolute top-3 left-3 z-20 bg-background/80 text-foreground backdrop-blur border-none font-semibold">ICT Dept</Badge>
                    <Badge variant="outline" className="absolute top-3 right-3 z-20 bg-success/90 text-success-foreground border-none backdrop-blur font-semibold">Available Offline</Badge>
                    <div className="absolute bottom-3 left-3 z-20 w-full pr-6">
                      <h3 className="font-bold text-white leading-tight line-clamp-1">Networking Essentials (CCNA)</h3>
                      <p className="text-xs text-white/80 mt-1 line-clamp-1">Module 4: Subnetting Architectures</p>
                    </div>
                  </div>
                  <CardContent className="p-4 flex-1">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground font-medium">Progress</span>
                      <span className="font-bold text-primary">64%</span>
                    </div>
                    <Progress value={64} className="h-2 bg-muted" indicatorColor="bg-primary" />
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2">
                        <Avatar className="w-6 h-6 border"><AvatarFallback className="text-[10px]">EK</AvatarFallback></Avatar>
                        <span className="text-xs text-muted-foreground">Eng. Kamau</span>
                      </div>
                      <span className="text-xs font-medium text-muted-foreground flex items-center"><Clock className="w-3 h-3 mr-1"/> 45m left</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 gap-2 border-t border-border/40 mt-auto bg-muted/10">
                    <Button className="flex-1 w-full bg-primary/10 text-primary hover:bg-primary/20"><PlayCircle className="w-4 h-4 mr-2"/> Resume</Button>
                    <Button variant="outline" size="icon" className="shrink-0 text-muted-foreground"><BookmarkPlus className="w-4 h-4"/></Button>
                  </CardFooter>
                </Card>

                <Card className="group overflow-hidden border-border/60 hover:shadow-elegant hover:border-primary/30 transition-all duration-300 flex flex-col">
                  <div className="relative h-32 bg-muted overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                    <img src="https://images.unsplash.com/photo-1498084393753-b411b2d26b34?w=800&q=80" alt="Programming" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                    <Badge className="absolute top-3 left-3 z-20 bg-background/80 text-foreground backdrop-blur border-none font-semibold">ICT Dept</Badge>
                    <div className="absolute bottom-3 left-3 z-20 w-full pr-6">
                      <h3 className="font-bold text-white leading-tight line-clamp-1">Introduction to Python</h3>
                      <p className="text-xs text-white/80 mt-1 line-clamp-1">Module 2: Data Structures</p>
                    </div>
                  </div>
                  <CardContent className="p-4 flex-1">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground font-medium">Progress</span>
                      <span className="font-bold text-primary">12%</span>
                    </div>
                    <Progress value={12} className="h-2 bg-muted" indicatorColor="bg-primary" />
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2">
                        <Avatar className="w-6 h-6 border"><AvatarFallback className="text-[10px]">SW</AvatarFallback></Avatar>
                        <span className="text-xs text-muted-foreground">S. Wanjiru</span>
                      </div>
                      <span className="text-xs font-medium text-muted-foreground flex items-center"><Clock className="w-3 h-3 mr-1"/> 2h left</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 gap-2 border-t border-border/40 mt-auto bg-muted/10">
                    <Button className="flex-1 w-full bg-primary/10 text-primary hover:bg-primary/20"><PlayCircle className="w-4 h-4 mr-2"/> Start Lesson</Button>
                    <Button variant="outline" size="icon" className="shrink-0 text-muted-foreground"><Download className="w-4 h-4"/></Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            {/* Recent Activity Timeline */}
            <div>
              <h2 className="text-xl font-bold tracking-tight mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-accent" /> Recent Activity
              </h2>
              <Card className="border-border/60">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    
                    <div className="flex gap-4 relative">
                      <div className="absolute left-4 top-8 bottom-0 w-px bg-border/80 -translate-x-1/2"></div>
                      <div className="w-8 h-8 rounded-full bg-success/15 text-success flex items-center justify-center shrink-0 z-10 ring-4 ring-background">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div className="flex-1 pb-1">
                        <p className="text-sm font-semibold">Completed Quiz: OSPF Protocols</p>
                        <p className="text-xs text-muted-foreground mt-1">Networking Essentials • Scored 92%</p>
                        <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider block mt-2">2 hours ago</span>
                      </div>
                    </div>

                    <div className="flex gap-4 relative">
                      <div className="absolute left-4 top-8 bottom-0 w-px bg-border/80 -translate-x-1/2"></div>
                      <div className="w-8 h-8 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0 z-10 ring-4 ring-background">
                        <Download className="w-4 h-4" />
                      </div>
                      <div className="flex-1 pb-1">
                        <p className="text-sm font-semibold">Downloaded Offline Package</p>
                        <p className="text-xs text-muted-foreground mt-1">Python Intro (Modules 1-3) saved to local cache</p>
                        <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider block mt-2">Yesterday, via Campus LAN</span>
                      </div>
                    </div>

                    <div className="flex gap-4 relative">
                      <div className="w-8 h-8 rounded-full bg-amber-500/15 text-amber-600 flex items-center justify-center shrink-0 z-10 ring-4 ring-background">
                        <FileCheck2 className="w-4 h-4" />
                      </div>
                      <div className="flex-1 pb-1">
                        <p className="text-sm font-semibold">Assignment Queued for Sync</p>
                        <p className="text-xs text-muted-foreground mt-1">Subnetting Lab Worksheet submitted offline</p>
                        <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider block mt-2">Yesterday</span>
                      </div>
                    </div>

                  </div>
                </CardContent>
              </Card>
            </div>
            
          </div>

          {/* Right Column: Deadlines, Smart Recommendations */}
          <div className="space-y-6">
            
            {/* Upcoming Deadlines */}
            <Card className="border-border/60 bg-gradient-to-b from-card to-muted/20">
              <CardHeader className="pb-3 border-b border-border/40">
                <CardTitle className="text-lg flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> Upcoming Deadlines</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border/50">
                  <div className="p-4 hover:bg-muted/30 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-sm leading-tight">Packet Tracer Lab 2</h4>
                      <Badge variant="destructive" className="bg-destructive/15 text-destructive border-none text-[10px]">Due Today</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">Networking Essentials</p>
                    <Button size="sm" className="w-full text-xs h-8">Submit Offline Work</Button>
                  </div>
                  
                  <div className="p-4 hover:bg-muted/30 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-sm leading-tight">Python Functions Quiz</h4>
                      <Badge variant="outline" className="text-[10px] bg-amber-500/10 text-amber-600 border-none">In 2 Days</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">Intro to Python</p>
                    <Button size="sm" variant="outline" className="w-full text-xs h-8">Start Preparation</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Smart Recommendations */}
            <Card className="border-accent/20 bg-accent/5 shadow-inner">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2 text-accent-foreground"><Lightbulb className="w-4 h-4 text-accent fill-accent/20" /> Smart Suggestions</CardTitle>
                <CardDescription>Based on your recent offline activity.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-background rounded-lg p-3 border border-border/60 shadow-sm flex gap-3 items-start">
                  <div className="mt-0.5"><Download className="w-4 h-4 text-primary" /></div>
                  <div>
                    <p className="text-xs font-semibold">Download Next Module</p>
                    <p className="text-[10px] text-muted-foreground mt-1">You're almost done with Networking M4. Download M5 now while you have LAN access.</p>
                  </div>
                </div>
                <div className="bg-background rounded-lg p-3 border border-border/60 shadow-sm flex gap-3 items-start">
                  <div className="mt-0.5"><BookOpen className="w-4 h-4 text-amber-500" /></div>
                  <div>
                    <p className="text-xs font-semibold">Review: Subnet Masks</p>
                    <p className="text-[10px] text-muted-foreground mt-1">You spent extra time on question 4 in your last quiz. Reviewing this topic is recommended.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

      </div>
    </DashboardLayout>
  )
}
