import React from 'react'
import Link from 'next/link'
import { Building2, Mail, Phone, MapPin } from 'lucide-react'

export async function Footer() {
  return (
    <footer className="mt-auto bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Government Services</h3>
            <p className="text-gray-400 text-sm">
              Your central platform for accessing government services, procedures, and information.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/situations/life" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Life Situations
                </Link>
              </li>
              <li>
                <Link href="/situations/business" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Business Situations
                </Link>
              </li>
              <li>
                <Link href="/services/popular" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Popular Services
                </Link>
              </li>
              <li>
                <Link href="/funding" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Funding Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Help & Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Legal Notice
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4" />
                <span>089 / 1234-5678</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@example.gov" className="hover:text-white transition-colors">
                  info@example.gov
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>
                  Example Street 1<br />
                  12345 City
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Government Services Portal. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Building2 className="w-4 h-4" />
              <span>Official Government Website</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
