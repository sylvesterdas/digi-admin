import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { SituationCard } from '@/components/SituationCard'
import { Search } from 'lucide-react'
import Link from 'next/link'

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
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6 text-center">
            <h1 className="text-4xl font-bold md:text-5xl">
              BayernPortal - Digital administration
            </h1>
            <div className="w-full max-w-2xl">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-full rounded-lg border-0 px-4 py-3 pr-12 text-foreground shadow-lg focus:ring-2 focus:ring-white"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:text-primary/80">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/situations/life"
                className="rounded-full bg-white px-6 py-2 font-medium text-primary transition-all hover:bg-white/90"
              >
                For citizens
              </Link>
              <Link
                href="/situations/business"
                className="rounded-full bg-white px-6 py-2 font-medium text-primary transition-all hover:bg-white/90"
              >
                For businesses
              </Link>
              <Link
                href="/situations/authority"
                className="rounded-full bg-white px-6 py-2 font-medium text-primary transition-all hover:bg-white/90"
              >
                For authorities
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Life situations</h2>
            <Link
              href="/situations/life"
              className="text-sm font-medium text-primary hover:underline"
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
                  icon={situation.icon}
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
              <div className="mb-2 text-sm font-medium text-primary">Procedure</div>
              <h3 className="mb-2 text-lg font-semibold">
                Certificate of good conduct: application for a simple certificate of good conduct
              </h3>
              <p className="text-sm text-muted-foreground">
                You can apply for a certificate of good conduct online and have it sent directly to you.
              </p>
            </div>
            <div className="rounded-lg border border-primary/20 bg-white p-6 shadow-sm">
              <div className="mb-2 text-sm font-medium text-primary">Procedure</div>
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
  title: 'BayernPortal - Digital Administration for Bavaria',
  description: 'Access government services, procedures and information for citizens, businesses and authorities.',
}
