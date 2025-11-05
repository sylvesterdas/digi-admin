import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { CategoryCard } from '@/components/CategoryCard/CategoryCard'
import { AppCard } from '@/components/AppCard/AppCard'
import { HeroSearch } from '@/components/HeroSearch'
import Link from 'next/link'
import { Building2, Coins, GraduationCap, UserCheck } from 'lucide-react'

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
              Government Services Portal
            </h1>
            <HeroSearch />
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

      {/* Category Cards Section */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <CategoryCard
              title="Bauen & Umwelt"
              description="Alle Apps von Abfallüberwachung bis Geoinformation."
              icon={<Building2 className="w-8 h-8" />}
              href="/situations/life"
              color="teal"
            />
            <CategoryCard
              title="Finanzen & Personal"
              description="Alle Apps für Ihre Ausgaben im Finanz- und Personalwesen."
              icon={<Coins className="w-8 h-8" />}
              href="/situations/business"
              color="green"
            />
            <CategoryCard
              title="Bildung & Soziales"
              description="Alle Apps von Bibliothek bis Wohlergehen."
              icon={<GraduationCap className="w-8 h-8" />}
              href="/funding"
              color="lime"
            />
            <CategoryCard
              title="Bürgerservice"
              description="Apps für die Bereiche Einwohnerwesen, Ordnungs- und Gewerberecht."
              icon={<UserCheck className="w-8 h-8" />}
              href="/services/popular"
              color="orange"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Verfügbare Apps</h2>
            <Link
              href="/situations/life"
              className="text-sm font-medium text-link hover:text-link-hover hover:underline"
              >
              Alle hinzufügen →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <AppCard title="Bauflächenmanagement-Führungskomponente" abbreviation="BM" href="/app/bm" color="teal" />
            <AppCard title="Flächenmanagement" abbreviation="FT" href="/app/ft" color="teal" />
            <AppCard title="KM-Finanzen" abbreviation="FN" href="/app/fn" color="green" bookmarked />
            <AppCard title="KM-Finanzen AWM" abbreviation="FN" href="/app/fn-awm" color="green" />
            <AppCard title="KM-Personal" abbreviation="PN" href="/app/pn" color="blue" bookmarked />
            <AppCard title="Gesundheitsmanagement" abbreviation="GM" href="/app/gm" color="lime" />
            <AppCard title="Kita_Verwaltung" abbreviation="KV" href="/app/kv" color="lime" />
            <AppCard title="Sozialhilfe" abbreviation="SH" href="/app/sh" color="lime" />
            <AppCard title="KM-Fahrzeug" abbreviation="FZ" href="/app/fz" color="orange" />
            <AppCard title="KM-Gewerberegister" abbreviation="GR" href="/app/gr" color="orange" />
            <AppCard title="KM-Gewerberegister Cadenza" abbreviation="GC" href="/app/gc" color="orange" />
            <AppCard title="KM-Gewerberegister Testumgebung" abbreviation="GT" href="/app/gt" color="orange" />
          </div>
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
