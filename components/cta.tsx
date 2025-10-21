"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
          Ready to Transform Your Learning?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
          Join thousands of learners and instructors already experiencing the future of education with EduNext.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
            Start Your Journey <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-border hover:bg-muted bg-transparent">
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
