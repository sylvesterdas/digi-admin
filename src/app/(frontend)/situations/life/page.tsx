import CategoryPage from '../CategoryPage'
import { Metadata } from 'next'

export default function LifeCategoryPage() {
  return <CategoryPage category="life" />
}

export const metadata: Metadata = {
  title: 'Life situations',
  description: 'Services for your personal life events',
}
