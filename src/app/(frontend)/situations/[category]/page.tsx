import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { SituationCard } from '@/components/SituationCard'
import { CategoryHero } from '@/components/CategoryHero'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const categoryInfo = {
  life: {
    title: 'Life situations',
    description: 'Find services and information for various life situations',
    icon: 'Users',
    variant: 'teal' as const,
  },
  business: {
    title: 'Business situations',
    description: 'Services and procedures for businesses and entrepreneurs',
    icon: 'Briefcase',
    variant: 'green' as const,
  },
  authority: {
    title: 'Administrative situations',
    description: 'Information and services for public authorities',
    icon: 'Building2',
    variant: 'lime' as const,
  },
}

export default async function SituationsPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  
  if (!['life', 'business', 'authority'].includes(category)) {
    notFound()
  }

  const payload = await getPayload({ config })

  const situations = await payload.find({
    collection: 'situations',
    where: {
      category: {
        equals: category,
      },
    },
    limit: 100,
    sort: 'order',
  })

  const info = categoryInfo[category as keyof typeof categoryInfo]

  return (
    <main className="min-h-screen bg-white">
      <CategoryHero title={info.title} icon={info.icon} variant={info.variant} />
      
      <div className="bg-white py-6">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-link">
              Home
            </Link>
            <span>›</span>
            <span className="text-foreground">{info.title}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {situations.docs.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {situations.docs.map((situation) => (
              <SituationCard
                key={situation.id}
                title={situation.title}
                icon={situation.icon}
                description={situation.description || ''}
                href={`/situations/${situation.slug}`}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-border bg-muted/30 p-12 text-center">
            <h2 className="mb-2 text-xl font-semibold">No situations available yet</h2>
            <p className="mb-6 text-muted-foreground">
              Add {info.title.toLowerCase()} through the admin panel to see them here.
            </p>
            <Link
              href="/admin/collections/situations"
              className="inline-block rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Add Situations
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const info = categoryInfo[category as keyof typeof categoryInfo]
  
  if (!info) {
    return {
      title: 'Not Found',
    }
  }

  return {
    title: `${info.title} | BayernPortal`,
    description: info.description,
  }
}
