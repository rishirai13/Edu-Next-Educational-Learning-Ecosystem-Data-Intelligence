"use client"

const stats = [
  { value: "500K+", label: "Active Learners" },
  { value: "10K+", label: "Expert Courses" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "150+", label: "Countries" },
]

export function Stats() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
