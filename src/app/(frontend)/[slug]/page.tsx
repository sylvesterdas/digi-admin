import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import { homeStatic } from '@/endpoints/seed/home-static'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })

  const [pages, situations, fundingPrograms] = await Promise.all([
    payload.find({
      collection: 'pages',
      draft: false,
      limit: 1000,
      overrideAccess: false,
      pagination: false,
      select: {
        slug: true,
      },
    }),
    payload.find({
      collection: 'situations',
      draft: false,
      limit: 1000,
      overrideAccess: false,
      pagination: false,
      select: {
        slug: true,
      },
    }),
    payload.find({
      collection: 'fundingPrograms',
      draft: false,
      limit: 1000,
      overrideAccess: false,
      pagination: false,
      select: {
        slug: true,
      },
    }),
  ])

  const pageParams = pages.docs
    ?.filter((doc) => {
      return doc.slug !== 'home'
    })
    .map(({ slug }) => {
      return { slug }
    })

  const situationParams = situations.docs?.map(({ slug }) => {
    return { slug: ['situations', slug] }
  })

  const fundingProgramParams = fundingPrograms.docs?.map(({ slug }) => {
    return { slug: ['funding', slug] }
  })

  return [...(pageParams || []), ...(situationParams || []), ...(fundingProgramParams || [])]
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { slug: slugFromParams = 'home' } = await paramsPromise
  const slug = Array.isArray(slugFromParams) ? slugFromParams.join('/') : slugFromParams
  const slugParts = Array.isArray(slugFromParams) ? slugFromParams : [slugFromParams]
  const lastSlugPart = slugParts[slugParts.length - 1]

  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(lastSlugPart)
  let page: RequiredDataFromCollectionSlug<'pages'> | null

  page = await queryCollectionsBySlug({
    slug: decodedSlug,
  })

  // Remove this code once your website is seeded
  if (!page && slug === 'home') {
    page = homeStatic
  }

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  const { hero, layout } = page

  return (
    <article className="pt-16 pb-24">
      <PageClient />
      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <RenderHero {...hero} />
      <RenderBlocks blocks={layout} />
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug: slugFromParams = 'home' } = await paramsPromise
  const slug = Array.isArray(slugFromParams) ? slugFromParams.join('/') : slugFromParams
  const slugParts = Array.isArray(slugFromParams) ? slugFromParams : [slugFromParams]
  const lastSlugPart = slugParts[slugParts.length - 1]

  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(lastSlugPart)
  const page = await queryCollectionsBySlug({
    slug: decodedSlug,
  })

  return generateMeta({ doc: page })
}

const queryCollectionsBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const collectionsToSearch = ['pages', 'situations', 'fundingPrograms']
  for (const collection of collectionsToSearch) {
    const result = await payload.find({
      collection: collection as any,
      draft,
      limit: 1,
      pagination: false,
      overrideAccess: draft,
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    if (result.docs.length > 0) {
      return {
        ...result.docs[0],
        collection,
      }
    }
  }

  return null
})
