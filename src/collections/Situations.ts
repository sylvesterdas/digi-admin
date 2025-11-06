import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'
import { anyone } from '../access/anyone'
import { slugField } from 'payload'
import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Situations: CollectionConfig = {
  slug: 'situations',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'order'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'abbreviation',
      type: 'text',
      required: false,
      maxLength: 3,
      admin: {
        description: 'Two-letter abbreviation for card display (e.g., BM, FT, KV)',
      },
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            BlocksFeature({ blocks: [] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
            HorizontalRuleFeature(),
          ]
        },
      }),
      label: 'Content',
      required: false,
    },
    {
      name: 'icon',
      type: 'text',
      required: true,
      admin: {
        description: 'Lucide icon name (e.g., Baby, Briefcase, Building2)',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Life Situations', value: 'life' },
        { label: 'Business Situations', value: 'business' },
        { label: 'Administrative Situations', value: 'authority' },
      ],
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Display order (lower numbers appear first)',
      },
    },
    {
      name: 'link',
      type: 'text',
      admin: {
        description: 'Optional external link or slug',
      },
    },
    slugField(),
  ],
}
