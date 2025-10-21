"use client"

import { BookOpen, Brain, FileText, Clock, Sparkles, Users } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Course Marketplace",
    description: "Discover thousands of courses from expert instructors across all disciplines and skill levels.",
  },
  {
    icon: Sparkles,
    title: "AI Tutoring",
    description: "Personalized learning paths powered by advanced AI that adapts to your learning style and pace.",
  },
  {
    icon: Brain,
    title: "Mental Health Support",
    description: "AI-driven wellness tools and resources to support your emotional and mental well-being.",
  },
  {
    icon: FileText,
    title: "Resume Builder",
    description: "Create professional resumes and portfolios that showcase your skills and achievements.",
  },
  {
    icon: Clock,
    title: "Smart Attendance",
    description: "Intelligent tracking and analytics for better engagement and learning outcomes.",
  },
  {
    icon: Users,
    title: "Community Learning",
    description: "Connect with peers, collaborate on projects, and grow together in a supportive community.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Powerful Features for Modern Learning
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Everything you need to learn, teach, and grow in one integrated platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
