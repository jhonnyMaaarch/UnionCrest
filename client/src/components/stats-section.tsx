const stats = [
  { value: "50+", label: "Properties Acquired" },
  { value: "12", label: "Markets Active" },
  { value: "$85M+", label: "Total Investment Value" },
  { value: "18%", label: "Average Partner Returns" },
];

export function StatsSection() {
  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              data-testid={`stat-${index}`}
            >
              <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm lg:text-base text-primary-foreground/80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
