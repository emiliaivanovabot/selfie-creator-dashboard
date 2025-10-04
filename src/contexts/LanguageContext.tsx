import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, params?: Record<string, string>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation keys for the dashboard
const translations = {
  en: {
    // Dashboard
    'dashboard.title': 'Selfie Creator Dashboard',
    'dashboard.greeting': 'Hello {{name}}!',
    'dashboard.subtitle': 'Here are your latest insights',
    'dashboard.generatedImages': 'Generated Images',
    'dashboard.revenue': 'Revenue',
    'dashboard.pageVisits': 'Page Visits',
    'dashboard.thisWeek': 'this week',
    'dashboard.dayTrend': '7-Day Trend',
    'dashboard.popularScenes': 'Popular Scenes',
    'dashboard.popularPoses': 'Popular Poses',
    
    // Stats
    'stats.generations': 'Generations',
    'stats.earnings': 'Earnings',
    'stats.usage': 'Usage',
    
    // Scenes (English names)
    'scene.beachSunset': 'Beach Sunset',
    'scene.nightclub': 'Nightclub',
    'scene.romanticDinner': 'Romantic Dinner',
    'scene.mountainHiking': 'Mountain Hiking',
    'scene.cityTour': 'City Tour',
    'scene.weddingParty': 'Wedding Party',
    'scene.coffeeShop': 'Coffee Shop',
    'scene.parkPicnic': 'Park Picnic',
    
    // Poses (English names)
    'pose.smiling': 'Smiling',
    'pose.sideways': 'Sideways',
    'pose.thoughtful': 'Thoughtful',
    'pose.sporty': 'Sporty',
    'pose.elegant': 'Elegant',
    'pose.kissOnCheek': 'Kiss on Cheek',
    'pose.armOnShoulder': 'Arm on Shoulder',
    'pose.laughingTogether': 'Laughing Together',
    
    // Settings
    'settings.title': 'Creator Settings',
    'settings.profile': 'Profile',
    'settings.apiConfig': 'API Config',
    'settings.payment': 'Payment',
    'settings.content': 'Content',
    'settings.save': 'Save',
    
    // Common
    'common.back': 'Back',
    'common.settings': 'Settings',
    'common.theme': 'Theme',
    'common.language': 'Language',
    'common.lightMode': 'Light Mode',
    'common.darkMode': 'Dark Mode',
  },
  de: {
    // Dashboard
    'dashboard.title': 'Selfie Creator Dashboard',
    'dashboard.greeting': 'Hallo {{name}}!',
    'dashboard.subtitle': 'Hier sind deine neuesten Einblicke',
    'dashboard.generatedImages': 'Generierte Bilder',
    'dashboard.revenue': 'Einnahmen',
    'dashboard.pageVisits': 'Seitenbesuche',
    'dashboard.thisWeek': 'diese Woche',
    'dashboard.dayTrend': '7-Tage Trend',
    'dashboard.popularScenes': 'Beliebte Szenen',
    'dashboard.popularPoses': 'Beliebte Posen',
    
    // Stats
    'stats.generations': 'Generierungen',
    'stats.earnings': 'Einnahmen',
    'stats.usage': 'Verwendungen',
    
    // Scenes (German names)
    'scene.beachSunset': 'Strand bei Sonnenuntergang',
    'scene.nightclub': 'Nachtclub',
    'scene.romanticDinner': 'Romantisches Dinner',
    'scene.mountainHiking': 'Bergwanderung',
    'scene.cityTour': 'Stadttour',
    'scene.weddingParty': 'Hochzeitsfeier',
    'scene.coffeeShop': 'Café',
    'scene.parkPicnic': 'Picknick im Park',
    
    // Poses (German names)
    'pose.smiling': 'Lächelnd',
    'pose.sideways': 'Seitlich',
    'pose.thoughtful': 'Nachdenklich',
    'pose.sporty': 'Sportlich',
    'pose.elegant': 'Elegant',
    'pose.kissOnCheek': 'Kuss auf die Wange',
    'pose.armOnShoulder': 'Arm auf der Schulter',
    'pose.laughingTogether': 'Zusammen lachen',
    
    // Settings
    'settings.title': 'Creator Einstellungen',
    'settings.profile': 'Profil',
    'settings.apiConfig': 'API Konfiguration',
    'settings.payment': 'Zahlung',
    'settings.content': 'Inhalt',
    'settings.save': 'Speichern',
    
    // Common
    'common.back': 'Zurück',
    'common.settings': 'Einstellungen',
    'common.theme': 'Design',
    'common.language': 'Sprache',
    'common.lightMode': 'Heller Modus',
    'common.darkMode': 'Dunkler Modus',
  },
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Check localStorage for saved language preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'en' || savedLanguage === 'de') {
      return savedLanguage;
    }
    // Default to German (matches current content)
    return 'de';
  });

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string, params?: Record<string, string>): string => {
    const translation = translations[language][key as keyof typeof translations[typeof language]];
    if (!translation) {
      console.warn(`Translation missing for key: ${key} in language: ${language}`);
      return key; // Return the key itself if translation is missing
    }
    
    // Replace parameters in the translation
    if (params) {
      return Object.entries(params).reduce((text, [param, value]) => {
        return text.replace(new RegExp(`\\{\\{${param}\\}\\}`, 'g'), value);
      }, translation);
    }
    
    return translation;
  };

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};