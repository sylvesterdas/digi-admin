'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { X, Menu, ChevronRight, Home, Users, Building2, Briefcase, Info, Phone } from 'lucide-react'

interface MenuSection {
  title: string
  icon: React.ReactNode
  items: {
    label: string
    href: string
  }[]
}

export const NavigationMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus()
    } else if (!isOpen && menuButtonRef.current) {
      menuButtonRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === 'Escape') {
        setIsOpen(false)
        return
      }

      // Focus trap for Tab/Shift+Tab
      if (e.key === 'Tab' && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll(
          'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement?.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement?.focus()
          }
        }
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const menuSections: MenuSection[] = [
    {
      title: 'Citizens',
      icon: <Users className="w-5 h-5" />,
      items: [
        { label: 'Life Situations', href: '/situations/life' },
        { label: 'Popular Services', href: '/services/popular' },
      ],
    },
    {
      title: 'Businesses',
      icon: <Briefcase className="w-5 h-5" />,
      items: [
        { label: 'Business Situations', href: '/situations/business' },
        { label: 'Funding Programs', href: '/funding' },
      ],
    },
    {
      title: 'Authorities',
      icon: <Building2 className="w-5 h-5" />,
      items: [
        { label: 'Administrative Situations', href: '/situations/authority' },
      ],
    },
    {
      title: 'Information',
      icon: <Info className="w-5 h-5" />,
      items: [
        { label: 'About', href: '/about' },
        { label: 'Help & Support', href: '/help' },
      ],
    },
  ]

  return (
    <>
      {/* Menu Button */}
      <button
        ref={menuButtonRef}
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 text-midnight dark:text-white hover:bg-link/10 rounded-lg transition-colors"
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="navigation-drawer"
      >
        <Menu className="w-6 h-6" />
        <span className="hidden md:inline">Menu</span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      {isOpen && (
        <div
          ref={drawerRef}
          id="navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed top-0 left-0 h-full w-80 bg-white dark:bg-gray-900 z-50 shadow-2xl transform transition-transform duration-300 ease-in-out translate-x-0"
        >
          <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Navigation</h2>
            <button
              ref={closeButtonRef}
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex-1 overflow-y-auto">
            {/* Home Link */}
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-b border-gray-100 dark:border-gray-800"
            >
              <Home className="w-5 h-5 text-link" />
              <span className="font-medium">Home</span>
            </Link>

            {/* Menu Sections */}
            {menuSections.map((section, idx) => (
              <div key={idx} className="border-b border-gray-100 dark:border-gray-800">
                <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800/50">
                  <div className="flex items-center gap-3">
                    <span className="text-link">{section.icon}</span>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {section.title}
                    </h3>
                  </div>
                </div>
                <ul>
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between px-4 py-3 pl-12 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                      >
                        <span className="text-gray-700 dark:text-gray-300">{item.label}</span>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-link transition-colors" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Phone className="w-4 h-4" />
              <span>Hotline: 089 / 1234-5678</span>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  )
}
