import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'
import { anyone } from '../access/anyone'
import { slugField } from 'payload'

export const FundingPrograms: CollectionConfig = {
  slug: 'funding-programs',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'targetGroup', 'subjectArea'],
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
      required: true,
    },
    {
      name: 'targetGroup',
      type: 'select',
      required: true,
      options: [
        { label: 'Citizen', value: 'citizen' },
        { label: 'My company', value: 'company' },
        { label: 'Employees', value: 'employees' },
        { label: 'My authority', value: 'authority' },
      ],
    },
    {
      name: 'subjectArea',
      type: 'select',
      required: true,
      hasMany: true,
      options: [
        { label: 'Birth', value: 'birth' },
        { label: 'Child care', value: 'childcare' },
        { label: 'School', value: 'school' },
        { label: 'Youth', value: 'youth' },
        { label: 'Work and career', value: 'work' },
        { label: 'Health and welfare', value: 'health' },
        { label: 'Living', value: 'living' },
        { label: 'Building', value: 'building' },
        { label: 'Retirement', value: 'retirement' },
      ],
    },
    {
      name: 'topic',
      type: 'text',
    },
    {
      name: 'amount',
      type: 'text',
      admin: {
        description: 'Funding amount or range',
      },
    },
    {
      name: 'deadline',
      type: 'date',
    },
    {
      name: 'link',
      type: 'text',
      required: true,
      admin: {
        description: 'External application link',
      },
    },
    slugField(),
  ],
}
