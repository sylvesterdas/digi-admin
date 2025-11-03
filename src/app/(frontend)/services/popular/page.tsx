import React from 'react'
import { Metadata } from 'next/types'
import { Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Popular Services | Government Services Portal',
  description: 'Most frequently used services and procedures',
}

const popularServices = [
  {
    title: 'Register Residence',
    description: 'Register your address after moving to a new location',
    category: 'Citizens',
    usage: 'Very High',
  },
  {
    title: 'Apply for ID Card',
    description: 'Request a new identity card or renew your existing one',
    category: 'Citizens',
    usage: 'Very High',
  },
  {
    title: 'Register Vehicle',
    description: 'Register a new or used vehicle',
    category: 'Citizens',
    usage: 'High',
  },
  {
    title: 'Apply for Building Permit',
    description: 'Submit application for construction or renovation projects',
    category: 'Citizens',
    usage: 'Medium',
  },
  {
    title: 'Register Business',
    description: 'Register a new business or trade',
    category: 'Businesses',
    usage: 'High',
  },
  {
    title: 'Tax Registration',
    description: 'Register for tax purposes',
    category: 'Businesses',
    usage: 'High',
  },
]

export default function PopularServicesPage() {
  return (
    <main className="container py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-3">Popular Services</h1>
          <p className="text-gray-600 dark:text-gray-400">
            The most frequently used services and procedures
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {popularServices.map((service, idx) => (
            <div
              key={idx}
              className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg hover:border-primary/50 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {service.title}
                </h2>
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
                  {service.category}
                </span>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-primary hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
