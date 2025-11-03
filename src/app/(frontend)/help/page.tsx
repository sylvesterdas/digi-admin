import React from 'react'
import { Metadata } from 'next/types'
import { Phone, Mail, MessageCircle, BookOpen, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Help & Support | BayernPortal',
  description: 'Get help and support for using BayernPortal services',
}

export default function HelpPage() {
  return (
    <main className="container py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-3">Help & Support</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          We're here to help you with any questions or issues
        </p>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg text-center">
            <div className="p-4 bg-primary/10 text-primary rounded-full w-fit mx-auto mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">Phone Support</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Mon-Fri: 8:00 - 18:00
            </p>
            <a href="tel:+4989123456789" className="text-primary hover:underline">
              089 / 1234-5678
            </a>
          </div>

          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg text-center">
            <div className="p-4 bg-primary/10 text-primary rounded-full w-fit mx-auto mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">Email Support</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Response within 24 hours
            </p>
            <a href="mailto:support@bayernportal.de" className="text-primary hover:underline">
              support@bayernportal.de
            </a>
          </div>

          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg text-center">
            <div className="p-4 bg-primary/10 text-primary rounded-full w-fit mx-auto mb-4">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">Live Chat</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Mon-Fri: 9:00 - 17:00
            </p>
            <button className="text-primary hover:underline">Start Chat</button>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            <details className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <summary className="font-semibold cursor-pointer hover:text-primary">
                How do I register for an account?
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Click on the "Register" button in the top right corner and follow the instructions.
                You'll need a valid email address and will receive a confirmation email.
              </p>
            </details>

            <details className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <summary className="font-semibold cursor-pointer hover:text-primary">
                Which documents do I need for online services?
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Required documents vary by service. Each service page lists the necessary documents.
                Generally, you may need your ID card, proof of address, or other specific documents.
              </p>
            </details>

            <details className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <summary className="font-semibold cursor-pointer hover:text-primary">
                How long does it take to process my application?
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Processing times vary depending on the type of service. You can check the estimated
                processing time on each service page. You'll also receive status updates via email.
              </p>
            </details>

            <details className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <summary className="font-semibold cursor-pointer hover:text-primary">
                Is my data secure?
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Yes, we use the highest security standards to protect your data. All connections
                are encrypted, and we comply with German data protection regulations (GDPR).
              </p>
            </details>

            <details className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <summary className="font-semibold cursor-pointer hover:text-primary">
                Can I track my application status?
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Yes, once you submit an application, you can track its status in your account
                dashboard. You'll also receive email notifications when the status changes.
              </p>
            </details>
          </div>
        </div>

        {/* Resources */}
        <div className="mt-12 p-6 bg-primary/5 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-bold">Additional Resources</h2>
          </div>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-primary hover:underline">User Guide (PDF)</a>
            </li>
            <li>
              <a href="#" className="text-primary hover:underline">Video Tutorials</a>
            </li>
            <li>
              <a href="#" className="text-primary hover:underline">Service Directory</a>
            </li>
            <li>
              <a href="#" className="text-primary hover:underline">Accessibility Information</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
