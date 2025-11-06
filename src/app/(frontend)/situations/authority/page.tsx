import CategoryPage from '../CategoryPage'
import { Metadata } from 'next'

export default function AuthorityCategoryPage() {
  return <CategoryPage category="authority" />
}

export const metadata: Metadata = {
  title: 'Administrative situations',
  description: 'Services for public authorities',
}
