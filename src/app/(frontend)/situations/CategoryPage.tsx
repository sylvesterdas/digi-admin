import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { SituationCard } from '@/components/SituationCard'
import { notFound } from 'next/navigation'
import type { Situation } from '@/payload-types'
import { CategoryHero } from '@/components/CategoryHero'

type Category = 'life' | 'business' | 'authority'

const categoryDetails: { [key in Category]: { title: string; description: string; icon: string; variant: 'teal' | 'green' | 'lime' | 'orange' } } = {
  life: {
    title: 'Life situations',
    description: 'Services for your personal life events',
    icon: 'Users',
    variant: 'teal',
  },
  business: {
    title: 'Business situations',
    description: 'Services for businesses and entrepreneurs',
    icon: 'Briefcase',
    variant: 'green',
  },
  authority: {
    title: 'Administrative situations',
    description: 'Services for public authorities',
    icon: 'Building2',
    variant: 'lime',
  },
}

type CategoryPageProps = {
  category: Category
}

export default async function CategoryPage({ category }: CategoryPageProps) {
  const payload = await getPayload({ config })
  const details = categoryDetails[category]

  if (!details) {
    return notFound()
  }

  const situations = await payload.find({
    collection: 'situations',
    where: {
      category: {
        equals: category,
      },
    },
    sort: 'order',
  })

  return (
    <main className="flex flex-col">
      <CategoryHero title={details.title} icon={details.icon} variant={details.variant} />

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          {situations.docs.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {situations.docs.map((situation: Situation) => (
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
                No situations available for this category yet.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
