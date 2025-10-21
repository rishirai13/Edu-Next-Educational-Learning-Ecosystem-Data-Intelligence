"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
          <span className="text-accent text-sm font-medium">✨ The Future of Learning</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
          Next-Gen Online Learning Ecosystem
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
          Empower learners and instructors with AI-driven personalization, comprehensive course marketplace, and
          intelligent support tools built for the future of education.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
            Start Learning <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="gap-2 border-border hover:bg-muted bg-transparent">
            <Play className="w-4 h-4" /> Watch Demo
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-3xl"></div>
          <div className="relative bg-card border border-border rounded-2xl p-8 sm:p-12">
            <img src="/online-learning-platform-dashboard-with-courses-an.jpg" alt="EduNext Platform Dashboard" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
