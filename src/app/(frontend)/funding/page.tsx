import React from 'react'
import { Metadata } from 'next/types'
import { DollarSign, Users, Building2, Lightbulb } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Funding Programs | Government Services Portal',
  description: 'Find funding opportunities for your projects and initiatives',
}

const fundingCategories = [
  {
    title: 'Business Funding',
    icon: <DollarSign className="w-8 h-8" />,
    description: 'Grants and loans for businesses, startups, and entrepreneurs',
    count: 24,
    href: '/funding/business',
  },
  {
    title: 'Social Projects',
    icon: <Users className="w-8 h-8" />,
    description: 'Funding for social initiatives and community projects',
    count: 18,
    href: '/funding/social',
  },
  {
    title: 'Infrastructure',
    icon: <Building2 className="w-8 h-8" />,
    description: 'Support for infrastructure development and improvements',
    count: 12,
    href: '/funding/infrastructure',
  },
  {
    title: 'Innovation',
    icon: <Lightbulb className="w-8 h-8" />,
    description: 'Funding for research, development, and innovation projects',
    count: 15,
    href: '/funding/innovation',
  },
]

export default function FundingPage() {
  return (
    <main className="py-8">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 mb-8">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Funding Programs</h1>
            <p className="text-lg text-white/90">
              Discover funding opportunities for your business, projects, and initiatives.
              Navigate through our categories to find the right support for your needs.
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Funding Navigation Wizard */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {fundingCategories.map((category, idx) => (
              <Link
                key={idx}
                href={category.href}
                className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-link/10 text-link rounded-lg group-hover:bg-link group-hover:text-white transition-colors">
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-link transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {category.description}
                    </p>
                    <span className="text-sm text-link font-medium">
                      {category.count} programs available
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Funding Wizard */}
        <div className="max-w-4xl mx-auto p-8 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Find the Right Funding</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Answer a few questions to find funding programs that match your needs.
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Who are you?</label>
              <select className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700">
                <option>Select your category</option>
                <option>Individual / Citizen</option>
                <option>Business / Entrepreneur</option>
                <option>Non-profit Organization</option>
                <option>Municipality / Authority</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">What do you need funding for?</label>
              <select className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700">
                <option>Select a topic</option>
                <option>Starting a business</option>
                <option>Research & Innovation</option>
                <option>Social project</option>
                <option>Infrastructure</option>
                <option>Education & Training</option>
              </select>
            </div>
            <button className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Find Funding Programs
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
