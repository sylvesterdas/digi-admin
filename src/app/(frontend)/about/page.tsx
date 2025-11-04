import React from 'react'
import { Metadata } from 'next/types'
import { Building2, Users, Lock, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | Government Services Portal',
  description: 'Learn about the digital government services platform',
}

export default function AboutPage() {
  return (
    <main className="py-8">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 mb-12">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-white/90">
              Your central access point to digital government services
            </p>
          </div>
        </div>
      </section>

      <div className="container max-w-6xl">
        {/* Introduction */}
        <div className="prose dark:prose-invert max-w-none mb-16">
          <p className="text-lg">
            This is the central digital platform for government services.
            It provides citizens, businesses, and authorities with easy access to administrative
            services, information, and procedures.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="p-3 bg-link/10 text-link rounded-lg w-fit mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-semibold mb-3">For Everyone</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Whether you're a citizen, business owner, or public authority - find the services
              you need quickly and easily.
            </p>
          </div>

          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="p-3 bg-link/10 text-link rounded-lg w-fit mb-4">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-semibold mb-3">Secure & Trustworthy</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Your data is protected with the highest security standards. All services comply
              with German data protection regulations.
            </p>
          </div>

          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="p-3 bg-link/10 text-link rounded-lg w-fit mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-semibold mb-3">Fast & Efficient</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Complete many procedures online from home. Save time and avoid unnecessary trips
              to government offices.
            </p>
          </div>

          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="p-3 bg-link/10 text-link rounded-lg w-fit mb-4">
              <Building2 className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-semibold mb-3">Comprehensive Services</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Access hundreds of government services, from registrations and applications to
              information and consulting.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="p-8 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We are committed to making government services accessible, efficient, and user-friendly
            for everyone. Through digital transformation, we aim to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Simplify access to government services</li>
            <li>Reduce bureaucracy and processing times</li>
            <li>Provide transparent and reliable information</li>
            <li>Support digital literacy and inclusion</li>
            <li>Continuously improve based on user feedback</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
