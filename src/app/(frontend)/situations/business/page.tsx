import CategoryPage from '../CategoryPage'
import { Metadata } from 'next'

export default function BusinessCategoryPage() {
  return <CategoryPage category="business" />
}

export const metadata: Metadata = {
  title: 'Business situations',
  description: 'Services for businesses and entrepreneurs',
}
