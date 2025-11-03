import { getPayload } from 'payload'
import config from '../payload.config'

const lifeSituations = [
  { title: 'Birth', icon: 'Baby', order: 1 },
  { title: 'Child care', icon: 'Heart', order: 2 },
  { title: 'School', icon: 'GraduationCap', order: 3 },
  { title: 'Youth', icon: 'Users', order: 4 },
  { title: 'Vocational training', icon: 'Briefcase', order: 5 },
  { title: 'Voluntary services', icon: 'HandHeart', order: 6 },
  { title: 'Academic studies', icon: 'BookOpen', order: 7 },
  { title: 'Work and career', icon: 'Briefcase', order: 8 },
  { title: 'Moving house', icon: 'Home', order: 9 },
  { title: 'Living', icon: 'Building2', order: 10 },
  { title: 'Building', icon: 'Construction', order: 11 },
  { title: 'Churches and religious communities', icon: 'Church', order: 12 },
  { title: 'Family and partnerships', icon: 'Heart', order: 13 },
  { title: 'Marriage', icon: 'HeartHandshake', order: 14 },
  { title: 'Mobility', icon: 'Car', order: 15 },
  { title: 'Travelling', icon: 'Plane', order: 16 },
  { title: 'Identity cards and documents', icon: 'CreditCard', order: 17 },
  { title: 'Animals', icon: 'Dog', order: 18 },
  { title: 'Culture and leisure', icon: 'Music', order: 19 },
  { title: 'Nature and environment', icon: 'Trees', order: 20 },
  { title: 'Goods and services', icon: 'ShoppingCart', order: 21 },
  { title: 'Information and advice', icon: 'Info', order: 22 },
  { title: 'Taxes and duties', icon: 'Receipt', order: 23 },
  { title: 'Society and politics', icon: 'Users2', order: 24 },
  { title: 'Security', icon: 'Shield', order: 25 },
  { title: 'Emergency and victim support', icon: 'Siren', order: 26 },
  { title: 'Health and welfare', icon: 'Heart', order: 27 },
  { title: 'Living with a disability', icon: 'Accessibility', order: 28 },
  { title: 'Retirement', icon: 'Armchair', order: 29 },
  { title: 'Inheritance and testament', icon: 'FileText', order: 30 },
  { title: 'Death', icon: 'Flower', order: 31 },
]

const businessSituations = [
  { title: 'Business start-up preparations', icon: 'Rocket', order: 1 },
  { title: 'Business start-up, development and management', icon: 'Building2', order: 2 },
  { title: 'Financing', icon: 'PiggyBank', order: 3 },
  { title: 'Funding', icon: 'TrendingUp', order: 4 },
  { title: 'Registers and directories', icon: 'BookOpen', order: 5 },
  { title: 'Taxes and duties', icon: 'Receipt', order: 6 },
  { title: 'Statistics and reporting requirements', icon: 'BarChart3', order: 7 },
  { title: 'Human resources', icon: 'Users', order: 8 },
  { title: 'Insurances', icon: 'Shield', order: 9 },
  { title: 'Real estate and transport', icon: 'Home', order: 10 },
  { title: 'Public tenders', icon: 'FileCheck', order: 11 },
  { title: 'Patents and trademarks', icon: 'Award', order: 12 },
  { title: 'Innovation', icon: 'Lightbulb', order: 13 },
  { title: 'Electronic Business and Electronic Commerce', icon: 'Monitor', order: 14 },
  { title: 'Growth and expansion', icon: 'TrendingUp', order: 15 },
  { title: 'Takeovers and mergers', icon: 'Merge', order: 16 },
  { title: 'Foreign trade', icon: 'Globe', order: 17 },
  { title: 'Foreign investments', icon: 'DollarSign', order: 18 },
  { title: 'Invoicing and dunning', icon: 'FileText', order: 19 },
  { title: 'Equipment, goods and materials', icon: 'Package', order: 20 },
  { title: 'Legal remedies and suggestions', icon: 'Scale', order: 21 },
  { title: 'Assistance in emergencies and crises', icon: 'LifeBuoy', order: 22 },
  { title: 'Security and safety', icon: 'ShieldCheck', order: 23 },
  { title: 'Transfer of business and termination of business', icon: 'ArrowRightLeft', order: 24 },
]

const authoritySituations = [
  { title: 'Preparation for foundation', icon: 'FileEdit', order: 1 },
  { title: 'Establishment and foundation of authorities and institutions', icon: 'Building', order: 2 },
  { title: 'Finances and budget', icon: 'Wallet', order: 3 },
  { title: 'Administrative management and public relations', icon: 'Megaphone', order: 4 },
  { title: 'Funding', icon: 'Coins', order: 5 },
  { title: 'Human Resources', icon: 'UserCog', order: 6 },
  { title: 'Property Management', icon: 'Building2', order: 7 },
  { title: 'Furniture and vehicle fleet', icon: 'Truck', order: 8 },
  { title: 'Information and communication technology', icon: 'Server', order: 9 },
  { title: 'Administrative procedure', icon: 'ClipboardList', order: 10 },
  { title: 'Reporting obligations and statistics', icon: 'BarChart', order: 11 },
  { title: 'Procurement: tendering, awarding and purchasing', icon: 'ShoppingBag', order: 12 },
  { title: 'Disposition and auction', icon: 'Gavel', order: 13 },
  { title: 'Legal Department', icon: 'Scale', order: 14 },
  { title: 'Matters with foreign relevance', icon: 'Globe2', order: 15 },
  { title: 'Public infrastructure', icon: 'Network', order: 16 },
  { title: 'Security and safety', icon: 'ShieldCheck', order: 17 },
  { title: 'Innovation', icon: 'Zap', order: 18 },
  { title: 'Administrative employee - Entry into the public sector', icon: 'UserPlus', order: 19 },
  { title: 'Opportunities for promotion and development', icon: 'TrendingUp', order: 20 },
  { title: 'Administrative employee - Obligation to notify and provide proof', icon: 'Bell', order: 21 },
  { title: 'Verwaltungsmitarbeiter - Dienstliche und Dienststättenänderung', icon: 'ArrowRightLeft', order: 22 },
  { title: 'Verwaltungsmitarbeiter - Abordnung und Versetzung', icon: 'Move', order: 23 },
  { title: 'Administrative employee - List from public sector', icon: 'UserMinus', order: 24 },
  { title: 'Administrative employee - Relocation', icon: 'Home', order: 25 },
  { title: 'Administrative employee - Retirement', icon: 'Armchair', order: 26 },
]

async function seed() {
  console.log('Starting seed...')
  
  const payload = await getPayload({ config })

  console.log('Creating Life Situations...')
  for (const situation of lifeSituations) {
    await payload.create({
      collection: 'situations',
      data: {
        ...situation,
        category: 'life',
        slug: situation.title.toLowerCase().replace(/\s+/g, '-'),
      },
    })
  }

  console.log('Creating Business Situations...')
  for (const situation of businessSituations) {
    await payload.create({
      collection: 'situations',
      data: {
        ...situation,
        category: 'business',
        slug: situation.title.toLowerCase().replace(/\s+/g, '-'),
      },
    })
  }

  console.log('Creating Authority Situations...')
  for (const situation of authoritySituations) {
    await payload.create({
      collection: 'situations',
      data: {
        ...situation,
        category: 'authority',
        slug: situation.title.toLowerCase().replace(/\s+/g, '-'),
      },
    })
  }

  console.log('Seed completed!')
  process.exit(0)
}

seed()
