# Kape Barako Coffee Shop - Mockup Website

A professional, rustic-themed coffee shop website built with Next.js 14+ and Tailwind CSS.

## 🎨 Design Theme

- **Style**: Rustic + Professional with clean white background
- **Color Palette**:
  - Primary: Warm brown/coffee (#6B4423, #8B5A3C)
  - Secondary: Cream/beige (#F5F5DC, #FFF8DC)
  - Accent: Terracotta/rust (#C17C5C)
  - Background: Clean white (#FFFFFF)
  - Text: Dark brown (#3E2723)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project folder:
```bash
cd kafe-barako
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
kafe-barako/
├── app/
│   ├── page.tsx                    # Landing page with branch selector
│   ├── kafe-barako-malolos/
│   │   └── page.tsx                # Malolos branch page
│   └── kafe-barako-talisay/
│       └── page.tsx                # Talisay branch page
├── components/
│   ├── Header.tsx                  # Sticky navigation header
│   ├── Footer.tsx                  # Footer with branch info
│   ├── Hero.tsx                    # Hero section with CTA
│   ├── Banner.tsx                  # Promotional banner
│   ├── MenuSection.tsx             # Menu items grid
│   ├── PackagesSection.tsx         # Coffee bar & event packages
│   ├── Gallery.tsx                 # Image gallery with lightbox
│   ├── ContactForm.tsx             # Contact form section
│   └── OffersSection.tsx           # Special offers & promotions
├── lib/
│   └── mockData.ts                 # Hardcoded mock data
├── public/
│   └── assets/
│       ├── kape barako.jpg         # Malolos branch logo
│       └── kafe_talisay.jpg        # Talisay branch logo
└── schema.sql                      # Database schema for future Supabase integration
```

## 🌟 Features

### Landing Page (/)
- Clean, professional design with coffee bean pattern
- Two prominent branch selector cards
- Responsive layout

### Branch Pages
- **Header**: Sticky navigation with branch logo
- **Hero**: Full-screen hero image with CTA
- **Banner**: Promotional "What's New" section
- **Why Kape Barako**: Heritage story with images
- **Offers**: Special deals and loyalty program
- **Menu**: Categorized menu items (Coffee, Food, Beverages, Desserts)
- **Packages**: Coffee bar packages (Intimate, Premium, Grand, Customized) and event packages
- **Gallery**: Masonry grid with lightbox functionality
- **Contact**: Contact form with branch details
- **Footer**: Quick links and social media

## 📊 Mock Data

The website currently uses hardcoded data from `lib/mockData.ts`:

- **Malolos Menu**: 10 items including Tapsilog, Ensaymada
- **Talisay Menu**: 10 items including Lomi Batangas, Suman
- **Packages**: 4 coffee bar packages + 3 event packages
- **Gallery**: 6 placeholder images from Unsplash

## 🔮 Future: Supabase Integration

This is currently a **MOCKUP ONLY** with hardcoded data. To connect to Supabase:

### Step 1: Install Supabase Client
```bash
npm install @supabase/supabase-js
```

### Step 2: Environment Variables
Create `.env.local` in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### Step 3: Create Supabase Client
Create `lib/supabase.ts`:
```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### Step 4: Set Up Database
Run the SQL schema from `schema.sql` in your Supabase SQL editor.

### Step 5: Replace Mock Data
Update components to fetch from Supabase:

**Menu Items:**
```typescript
const { data: menuItems } = await supabase
  .from('menu')
  .select('*')
  .in('branch', ['malolos', 'both']); // or 'talisay'
```

**Packages:**
```typescript
const { data: packages } = await supabase
  .from('packages')
  .select('*');
```

**Gallery:**
```typescript
const { data: gallery } = await supabase
  .from('gallery')
  .select('*')
  .order('display_order');
```

**Contact Form Submission:**
```typescript
const { error } = await supabase
  .from('booking')
  .insert([{ /* form data */ }]);
```

## 🎨 Customization

### Colors
Edit `app/globals.css` to change the color scheme:
```css
--color-primary: #6B4423;
--color-secondary: #F5F5DC;
--color-accent: #C17C5C;
```

### Images
Replace placeholder images in:
- `public/assets/` for logos
- Update Unsplash URLs in components for hero/menu/gallery images

### Content
Edit `lib/mockData.ts` to update:
- Menu items and prices
- Package descriptions
- Gallery images

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## 📄 License

This project is for demonstration purposes.

## 🙏 Credits

- Images: [Unsplash](https://unsplash.com)
- Framework: [Next.js](https://nextjs.org)
- Styling: [Tailwind CSS](https://tailwindcss.com)
