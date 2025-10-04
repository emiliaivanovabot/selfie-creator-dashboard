# Selfie Creator Dashboard 📊

Ein Creator/Model Dashboard für AI-Selfie-Plattformen mit Einnahmen-Tracking und Analytics für beliebte Szenen und Posen.

![Dashboard Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)
![Vite](https://img.shields.io/badge/Vite-5.4.19-purple)

## 🎯 Features

### 💰 **Einnahmen & Analytics**
- **Tageseinnahmen** mit Trend-Anzeige
- **Wocheneinnahmen** und Performance-Metriken
- **Verkaufte Sets** und Conversion-Rate
- **Revenue Chart** mit zeitlichem Verlauf

### 📊 **Beliebte Szenen Analytics**
- 🏖️ **Strand bei Sonnenuntergang** - 1,247 Generierungen (23.4%)
- 🪩 **Nachtclub** - 1,089 Generierungen (20.5%)
- 🕯️ **Romantisches Dinner** - 876 Generierungen (16.5%)
- 🏙️ **Dachterrasse** - 654 Generierungen (12.3%)
- 🎪 **Musikfestival** - 432 Generierungen (8.1%)

### 💕 **Beliebte Posen Analytics**
- 😊 **Zusammen Lächeln** - 1,456 mal gewählt (27.3%)
- 😘 **Kuss auf die Wange** - 1,234 mal gewählt (23.2%)
- 🤗 **Freundschaftliche Umarmung** - 987 mal gewählt (18.5%)
- 🤝 **Händchen halten** - 765 mal gewählt (14.4%)
- 😂 **Zusammen lachen** - 543 mal gewählt (10.2%)

### 📈 **Business Insights**
- **Top Performance:** Strand-Szenen generieren 23% mehr Einnahmen
- **Fan Favorit:** "Zusammen Lächeln" ist die beliebteste Pose
- **Engagement:** Romantische Szenen haben 85% Wiederkehr-Rate
- **Durchschnitt:** 4,2 Bilder pro Session

## 🚀 Live Demo

Das Dashboard läuft auf **http://localhost:3000**

### Test-Login:
- **E-Mail:** `test@test.de`
- **Passwort:** `testtest`
- **Name:** Emilia Ivanova

## 🛠️ Tech Stack

- **Frontend:** React 18.3.1 + TypeScript
- **Build Tool:** Vite 5.4.19
- **UI Framework:** shadcn/ui + Tailwind CSS
- **Charts:** Recharts für interaktive BarCharts
- **Icons:** Lucide React
- **Routing:** React Router DOM
- **Notifications:** Sonner (Toast)

## 📦 Installation

```bash
# Repository klonen
git clone https://github.com/emiliaivanovabot/selfie-creator-dashboard.git
cd selfie-creator-dashboard

# Dependencies installieren
npm install

# Development Server starten
npm run dev
```

Das Dashboard ist dann verfügbar unter: **http://localhost:3000**

## 🎨 Design System

### **Komponenten-Architektur:**
```
src/
├── components/
│   ├── dashboard/
│   │   ├── DashboardHeader.tsx     # Personalisierte Begrüßung
│   │   ├── StatsOverview.tsx       # Einnahmen-Karten
│   │   ├── RevenueChart.tsx        # Umsatz-Verlauf
│   │   ├── PopularScenes.tsx       # Szenen-Analytics (NEU)
│   │   ├── PopularPoses.tsx        # Posen-Analytics (NEU)
│   │   └── ProfileSection.tsx      # Creator-Profil
│   └── ui/                         # shadcn/ui Komponenten
├── pages/
│   ├── Auth.tsx                    # Mock-Authentifizierung
│   └── Dashboard.tsx               # Haupt-Dashboard
└── hooks/
    └── use-mobile.tsx              # Responsive Hooks
```

### **Design-Prinzipien:**
- **Konsistente Karten:** `gradient-card border-primary/10 shadow-card`
- **Interactive Charts:** Hover-Effekte und Tooltips
- **Responsive Layout:** Mobile-First Design
- **Emoji-Integration:** Visuelle Szenen/Posen-Darstellung
- **Performance-Fokus:** Optimierte Ladezeiten

## 📊 Dashboard Layout

1. **Header:** Personalisierte Begrüßung "Hallo Emilia Ivanova"
2. **Stats Overview:** 4 Einnahmen-Karten (Heute, Woche, Sets, Conversion)
3. **Analytics Row 1:** Revenue Chart + Beliebte Szenen
4. **Analytics Row 2:** Beliebte Posen + Performance Insights
5. **Profile Section:** Creator-Informationen und Einstellungen

## 🔐 Authentifizierung

**Mock-System** für Development:
- Keine externe Abhängigkeiten
- LocalStorage-basierte Sessions
- Einfacher Login/Logout Flow

**Production-Ready:**
- Einfach durch echte Auth-Provider ersetzbar
- Session-Management vorbereitet
- Sichere Logout-Funktionalität

## 🎯 Zielgruppe

**Creator/Models** die AI-Selfie-Plattformen nutzen:
- **Einnahmen-Tracking:** Tägliche/wöchentliche Performance
- **Content-Optimierung:** Welche Szenen/Posen funktionieren
- **Business-Insights:** Datengetriebene Entscheidungen
- **Fan-Engagement:** Beliebtheits-Trends verstehen

## 🚀 Deployment

```bash
# Build für Production
npm run build

# Preview des Builds
npm run preview
```

**Deployment-Optionen:**
- Vercel (empfohlen für React/Vite)
- Netlify
- GitHub Pages
- Eigener Server

## 📝 Lizenz

MIT License - Siehe [LICENSE](LICENSE) für Details.

## 🤝 Contributing

Pull Requests sind willkommen! Für größere Änderungen bitte zuerst ein Issue öffnen.

## 📞 Support

Bei Fragen oder Problemen bitte ein GitHub Issue erstellen.

---

**Entwickelt für Creator, die ihre AI-Selfie-Performance optimieren möchten** 🎨✨