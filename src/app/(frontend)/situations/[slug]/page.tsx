import type { Metadata } from 'next'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'

import type { Situation } from '@/payload-types'

import { generateMeta } from '@/utilities/generateMeta'
import { notFound } from 'next/navigation'
import RichText from '@/components/RichText'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const situations = await payload.find({
    collection: 'situations',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = situations.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function SituationPage({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const decodedSlug = decodeURIComponent(slug)
  
  const situation = await querySituationBySlug({ slug: decodedSlug })

  if (!situation) {
    return notFound()
  }

  return (
    <main className="flex flex-col">
        <div className="bg-white py-8">
            <div className="container mx-auto px-4">
                <div className="mb-8 flex items-center justify-between">
                    <h1 className="text-4xl font-bold text-foreground">{situation.title}</h1>
                </div>
                {situation.description && (
                    <p className="text-lg text-muted-foreground">{situation.description}</p>
                )}
                <RichText data={situation.content} />
            </div>
        </div>
    </main>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const decodedSlug = decodeURIComponent(slug)
  const situation = await querySituationBySlug({ slug: decodedSlug })

  return generateMeta({ doc: situation })
}

const querySituationBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'situations',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
