import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'
import { anyone } from '../access/anyone'
import { slugField } from 'payload'

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
      name: 'description',
      type: 'textarea',
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
