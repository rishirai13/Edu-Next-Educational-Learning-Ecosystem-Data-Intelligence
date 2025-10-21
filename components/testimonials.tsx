"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Student",
    content:
      "EduNext transformed my learning journey. The AI tutor is incredibly responsive and the course quality is outstanding.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Instructor",
    content:
      "As an instructor, I love how easy it is to create and manage courses. The platform handles everything beautifully.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Career Changer",
    content: "The resume builder and career support tools helped me land my dream job. Highly recommend EduNext!",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Loved by Learners & Instructors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Join thousands of satisfied users transforming their education and careers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">{testimonial.content}</p>
              <div>
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
