import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { SituationCard } from '@/components/SituationCard'
import Link from 'next/link'
import { Users, Briefcase, Building2, Info } from 'lucide-react'

const categoryCards = [
  {
    title: 'Life situations',
    subtitle: 'Services for your personal life events',
    href: '/situations/life',
    icon: Users,
    bgColor: 'bg-category-teal-light',
    shapeColor: '#00B2A9',
  },
  {
    title: 'Business situations',
    subtitle: 'Services for businesses and entrepreneurs',
    href: '/situations/business',
    icon: Briefcase,
    bgColor: 'bg-category-green-light',
    shapeColor: '#00A651',
  },
  {
    title: 'Administrative situations',
    subtitle: 'Services for public authorities',
    href: '/situations/authority',
    icon: Building2,
    bgColor: 'bg-category-lime-light',
    shapeColor: '#A4D233',
  },
  {
    title: 'Citizen services',
    subtitle: 'General services and information',
    href: '/help',
    icon: Info,
    bgColor: 'bg-category-orange-light',
    shapeColor: '#FF9E1B',
  },
]

export default async function HomePage() {
  const payload = await getPayload({ config })

  const lifeSituations = await payload.find({
    collection: 'situations',
    where: {
      category: {
        equals: 'life',
      },
    },
    limit: 8,
    sort: 'order',
  })

  return (
    <main className="flex flex-col">
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {categoryCards.map((card) => {
              const Icon = card.icon
              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group relative transition-shadow hover:shadow-lg"
                >
                  <div className={`relative ${card.bgColor} p-6 h-48 flex flex-col rounded-lg`}>
                    <div className="relative z-10">
                      <div className="mb-2 text-xs font-normal text-midnight">Komm.ONE</div>
                      <h2 className="mb-1 text-lg font-bold text-midnight">{card.title}</h2>
                      <p className="text-sm text-midnight/70">{card.subtitle}</p>
                    </div>
                    
                    <Icon className="absolute bottom-4 left-6 h-16 w-16 text-midnight/15 z-0" strokeWidth={1} />
                    
                    <svg 
                      className="absolute -right-12 -bottom-12 pointer-events-none" 
                      width="280" 
                      height="280" 
                      viewBox="0 0 280 280" 
                      fill="none"
                    >
                      <path 
                        d="M100 0 L280 0 L280 180 L150 280 Z" 
                        fill={card.shapeColor}
                        opacity="0.5"
                      />
                      <path 
                        d="M180 140 L280 80 L280 280 L120 280 Z" 
                        fill={card.shapeColor}
                        opacity="0.35"
                      />
                    </svg>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Life situations</h2>
            <Link
              href="/situations/life"
              className="text-sm font-medium text-link hover:text-link-hover hover:underline"
            >
              Show all life situations →
            </Link>
          </div>
          
          {lifeSituations.docs.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {lifeSituations.docs.map((situation) => (
                <SituationCard
                  key={situation.id}
                  title={situation.title}
                  abbreviation={situation.abbreviation || situation.title.substring(0, 2).toUpperCase()}
                  category={situation.category as 'life' | 'business' | 'authority'}
                  description={situation.description || ''}
                  href={`/situations/${situation.slug}`}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-border bg-muted/30 p-8 text-center">
              <p className="text-muted-foreground">
                No situations available yet. Please add some through the admin panel.
              </p>
              <Link
                href="/admin"
                className="mt-4 inline-block rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Go to Admin Panel
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Most popular</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-primary/20 bg-white p-6 shadow-sm">
              <div className="mb-2 text-sm font-medium text-link">Procedure</div>
              <h3 className="mb-2 text-lg font-semibold">
                Certificate of good conduct: application for a simple certificate of good conduct
              </h3>
              <p className="text-sm text-muted-foreground">
                You can apply for a certificate of good conduct online and have it sent directly to you.
              </p>
            </div>
            <div className="rounded-lg border border-primary/20 bg-white p-6 shadow-sm">
              <div className="mb-2 text-sm font-medium text-link">Procedure</div>
              <h3 className="mb-2 text-lg font-semibold">
                Motor vehicle: application for new registration
              </h3>
              <p className="text-sm text-muted-foreground">
                Register your vehicle online to get license plates and registration documents.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export const metadata = {
  title: 'Government Services Portal',
  description: 'Access government services, procedures and information for citizens, businesses and authorities.',
}
