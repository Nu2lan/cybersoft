"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card } from "@/components/ui/card"

export function Clients() {
  const { t } = useLanguage()

  const clients = [
    { name: "TechCorp", logo: "/techcorp-logo.jpg" },
    { name: "InnovateLabs", logo: "/innovatelabs-logo.jpg" },
    { name: "DataFlow", logo: "/dataflow-logo.jpg" },
    { name: "CloudSync", logo: "/cloudsync-logo.jpg" },
    { name: "NextGen", logo: "/nextgen-logo.jpg" },
    { name: "SmartSystems", logo: "/smartsystems-logo.jpg" },
  ]

  const stats = [
    {
      value: "50+",
      label: t.clients.stats.projects,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      value: "98%",
      label: t.clients.stats.satisfaction,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      value: "24+",
      label: t.clients.stats.response,
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background py-24"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-20 text-center">
            <h2 className="mb-6 text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {t.clients.title}{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {t.clients.titleHighlight}
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              {t.clients.description}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden rounded-2xl border-2 border-border bg-card p-8 text-center transition-all duration-500 hover:scale-105 hover:border-transparent hover:shadow-2xl"
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                />

                <div className="relative z-10">
                  <div
                    className={`mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-5xl font-black text-transparent transition-transform duration-500 group-hover:scale-110`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-wide text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                    {stat.label}
                  </div>
                </div>

                {/* Animated border */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.gradient} opacity-0 blur transition-opacity duration-500 group-hover:opacity-20`}
                />
              </Card>
            ))}
          </div>

          {/* Client Logos Section */}
          <div className="relative">
            <h3 className="mb-10 text-center text-2xl font-bold text-foreground">{t.clients.trustedBy}</h3>

            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-3xl border-2 border-border bg-card/50 py-16 shadow-xl backdrop-blur-sm">
              {/* Gradient fade edges */}
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-card/50 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-card/50 to-transparent" />

              {/* Scrolling logos */}
              <div className="flex gap-16 overflow-hidden">
                <div className="flex animate-scroll-left gap-16">
                  {/* First set of logos */}
                  {clients.map((client, index) => (
                    <div key={`first-${index}`} className="group flex min-w-[250px] items-center justify-center">
                      <div className="relative p-8 transition-all duration-500 group-hover:scale-110">
                        <img
                          src={client.logo || "/placeholder.svg"}
                          alt={client.name}
                          className="h-32 w-auto object-contain opacity-70 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                        />
                      </div>
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {clients.map((client, index) => (
                    <div key={`second-${index}`} className="group flex min-w-[250px] items-center justify-center">
                      <div className="relative p-8 transition-all duration-500 group-hover:scale-110">
                        <img
                          src={client.logo || "/placeholder.svg"}
                          alt={client.name}
                          className="h-32 w-auto object-contain opacity-70 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
