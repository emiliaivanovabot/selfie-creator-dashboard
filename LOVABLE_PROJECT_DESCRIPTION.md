# Selfie Creator Dashboard - Lovable Project Description

## 🎯 Project Overview

**Creator/Model Analytics Dashboard** for AI-Selfie platforms. A professional dashboard where AI models (like Emilia) can track their earnings, analyze popular content, and optimize their performance based on user preferences.

## 🎨 Design Requirements

### **Visual Style**
- **Modern, clean dashboard design** with professional aesthetics
- **Pink/Rose color scheme** (primary: rose-500, accent: pink-400)
- **Gradient cards** with subtle shadows and hover effects
- **Mobile-first responsive design**
- **Dark/light mode support** (optional)

### **Typography & Layout**
- **Clean, readable fonts** (Inter or similar)
- **Card-based layout** with consistent spacing
- **Interactive elements** with smooth animations
- **Professional business dashboard feel**

## 📊 Core Features & Components

### **1. Authentication System**
```
- Login/Register forms with elegant design
- Mock authentication for demo (email: test@test.de, password: testtest)
- User session management
- Personalized welcome message: "Hallo [Name]"
- Logout functionality
```

### **2. Dashboard Header**
```
- Personalized greeting: "Hallo Emilia Ivanova"
- User avatar/profile picture
- Navigation menu
- Logout button
- Responsive mobile menu
```

### **3. Revenue & Earnings Section**
```
Stats Cards (4 cards in a row):
- Today's Earnings: €247 (+12% vs yesterday)
- This Week: €1,432 (+8% vs last week)  
- Total Sales: 89 sets (+23% vs last week)
- Conversion Rate: 4.2% (+0.8% vs last week)

Revenue Chart:
- Line/Area chart showing earnings over time (last 30 days)
- Interactive tooltips
- Smooth animations
```

### **4. Popular Scenes Analytics**
```
Interactive Bar Chart showing:
- 🏖️ Beach Sunset: 1,247 generations (23.4%)
- 🪩 Nightclub: 1,089 generations (20.5%)
- 🕯️ Romantic Dinner: 876 generations (16.5%)
- 🏙️ Rooftop City: 654 generations (12.3%)
- 🎪 Music Festival: 432 generations (8.1%)

Features:
- Hover effects with detailed tooltips
- Emoji icons for visual appeal
- Percentage and absolute numbers
- Color-coded bars
```

### **5. Popular Poses Analytics**
```
Interactive Bar Chart showing:
- 😊 Smiling Together: 1,456 selections (27.3%)
- 😘 Kiss on Cheek: 1,234 selections (23.2%)
- 🤗 Friendly Hug: 987 selections (18.5%)
- 🤝 Holding Hands: 765 selections (14.4%)
- 😂 Laughing Together: 543 selections (10.2%)

Features:
- Same interactive design as scenes
- Emoji-based visual representation
- Detailed statistics on hover
```

### **6. Performance Insights Cards**
```
3 insight cards showing:
- 📈 Top Performance: "Beach scenes generate 23% more revenue"
- 👥 Fan Favorite: "Smiling Together is the most popular pose"
- 💕 Engagement: "Romantic scenes have 85% return rate"

Each card with:
- Icon + gradient background
- Key metric highlighted
- Brief explanation text
```

### **7. Profile Section**
```
Creator profile card with:
- Profile picture (Emilia)
- Basic stats (followers, total earnings, etc.)
- Quick settings/preferences
- Account management links
```

## 🛠️ Technical Requirements

### **Frontend Stack**
- **React 18** with TypeScript
- **Vite** for fast development
- **Tailwind CSS** for styling
- **Recharts** for interactive charts
- **Lucide React** for icons
- **React Router** for navigation
- **Sonner** for toast notifications

### **Key Libraries**
```json
{
  "react": "^18.3.1",
  "typescript": "^5.5.3",
  "vite": "^5.4.19",
  "tailwindcss": "^3.4.1",
  "recharts": "^2.12.7",
  "lucide-react": "^0.263.1",
  "react-router-dom": "^6.8.1",
  "sonner": "^1.4.3"
}
```

### **Component Architecture**
```
src/
├── components/
│   ├── dashboard/
│   │   ├── DashboardHeader.tsx
│   │   ├── StatsOverview.tsx (4 earnings cards)
│   │   ├── RevenueChart.tsx (earnings over time)
│   │   ├── PopularScenes.tsx (scenes bar chart)
│   │   ├── PopularPoses.tsx (poses bar chart)
│   │   ├── InsightsCards.tsx (3 performance insights)
│   │   └── ProfileSection.tsx
│   └── ui/ (reusable components)
├── pages/
│   ├── Login.tsx
│   ├── Dashboard.tsx
│   └── NotFound.tsx
├── hooks/
├── utils/
└── types/
```

## 📱 Responsive Design

### **Desktop (1200px+)**
- 4-column stats cards
- 2-column chart layout (Revenue + Scenes)
- 2-column layout (Poses + Insights)
- Full sidebar navigation

### **Tablet (768px - 1199px)**
- 2-column stats cards
- Stacked chart layout
- Responsive navigation

### **Mobile (< 768px)**
- Single column layout
- Stacked cards
- Mobile-optimized charts
- Hamburger menu

## 🎯 User Experience

### **Dashboard Flow**
1. **Login Page** → Clean form with brand colors
2. **Dashboard Landing** → Immediate overview of key metrics
3. **Interactive Charts** → Hover for details, smooth animations
4. **Performance Insights** → Actionable business intelligence
5. **Profile Management** → Quick access to settings

### **Key Interactions**
- **Smooth hover effects** on all interactive elements
- **Loading states** for data fetching
- **Toast notifications** for user actions
- **Responsive touch targets** for mobile
- **Keyboard navigation** support

## 📊 Mock Data Structure

### **Revenue Data**
```javascript
const revenueData = [
  { date: '2024-01-01', earnings: 180 },
  { date: '2024-01-02', earnings: 220 },
  { date: '2024-01-03', earnings: 247 },
  // ... 30 days of data
];
```

### **Scenes Data**
```javascript
const scenesData = [
  { name: 'Beach Sunset', count: 1247, percentage: 23.4, emoji: '🏖️' },
  { name: 'Nightclub', count: 1089, percentage: 20.5, emoji: '🪩' },
  // ... more scenes
];
```

### **Poses Data**
```javascript
const posesData = [
  { name: 'Smiling Together', count: 1456, percentage: 27.3, emoji: '😊' },
  { name: 'Kiss on Cheek', count: 1234, percentage: 23.2, emoji: '😘' },
  // ... more poses
];
```

## 🎨 Color Palette

### **Primary Colors**
- **Primary:** `#f43f5e` (rose-500)
- **Primary Light:** `#fb7185` (rose-400)
- **Primary Dark:** `#e11d48` (rose-600)

### **Accent Colors**
- **Accent:** `#f472b6` (pink-400)
- **Accent Light:** `#f9a8d4` (pink-300)
- **Accent Dark:** `#ec4899` (pink-500)

### **Neutral Colors**
- **Background:** `#ffffff` (white)
- **Card Background:** `#f8fafc` (slate-50)
- **Text Primary:** `#0f172a` (slate-900)
- **Text Secondary:** `#64748b` (slate-500)
- **Border:** `#e2e8f0` (slate-200)

## 🚀 Deployment & Features

### **Authentication**
- Mock login system for demo
- Session management with localStorage
- Automatic logout after inactivity

### **Performance**
- Optimized bundle size
- Lazy loading for components
- Efficient chart rendering
- Fast page transitions

### **Accessibility**
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- High contrast ratios

## 📋 Acceptance Criteria

### **Must Have**
✅ Professional dashboard design with pink/rose theme
✅ Responsive layout (mobile, tablet, desktop)
✅ Mock authentication system
✅ 4 earnings stats cards with trend indicators
✅ Interactive revenue chart (30 days)
✅ Popular scenes bar chart with emojis
✅ Popular poses bar chart with emojis
✅ 3 performance insight cards
✅ Profile section with user info
✅ Smooth animations and hover effects

### **Nice to Have**
- Dark mode toggle
- Export data functionality
- Advanced filtering options
- Real-time data updates
- Custom date range selection

## 🎯 Success Metrics

**The dashboard should feel like a professional business intelligence tool that helps AI creators:**
- Track their earnings and performance
- Understand what content performs best
- Make data-driven decisions about their content strategy
- Have a delightful, smooth user experience

**Target User:** AI Models/Creators like Emilia who want to optimize their AI-selfie business through data insights.

---

**This dashboard should be the gold standard for creator analytics - beautiful, functional, and insightful.** 🎨📊✨
