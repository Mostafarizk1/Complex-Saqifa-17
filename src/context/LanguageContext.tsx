'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'ar' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  ar: {
    // Hero
    'hero.badge': 'شقق فاخرة للإيجار',
    'hero.title': 'مجمع',
    'hero.titleHighlight': 'سقيفة 17',
    'hero.location': 'حي الملقا - الرياض',
    'hero.subtitle': 'حيث الرفاهية والتميز يلتقيان',
    'hero.cta': 'احجز معاينة الآن',
    
    // Intro
    'intro.text': 'عزيزي العميل، إذا كنت تبحث عن تجربة سكنية تجمع بين الفخامة والراحة، فقد وصلت إلى المكان الصحيح. نقدم لك شقة استثنائية في قلب حي الملقا الراقي، حيث كل تفصيلة صُممت لتلبي أعلى معايير الجودة والأناقة.',
    'intro.luxury': 'الفخامة والراحة',
    'intro.location': 'حي الملقا',
    
    // Features
    'features.title': '✨ لماذا تختار شقتنا الفاخرة؟',
    'features.subtitle': 'كل ما تحتاجه لحياة مريحة ومترفة',
    'features.space.title': 'مساحة واسعة',
    'features.space.desc': 'صالة رحبة مع طاولة طعام أنيقة تتسع للعائلة والضيوف',
    'features.rooms.title': '3 غرف نوم',
    'features.rooms.desc': 'غرف نوم مصممة للراحة والخصوصية بأعلى معايير الجودة',
    'features.kitchen.title': 'مطبخ حديث',
    'features.kitchen.desc': 'مطبخ مجهز بالكامل بأحدث الأجهزة والتجهيزات العصرية',
    'features.services.title': 'خدمات متكاملة',
    'features.services.desc': 'غرفة خادمة، غرفة غسيل، 3 دورات مياه، وحوش واسع',
    'features.parking.title': 'موقف مظلل',
    'features.parking.desc': 'موقف خاص مظلل يتسع لسيارتين مع سهولة الوصول',
    
    // Premium
    'premium.title': 'مميزات حصرية',
    'premium.subtitle': 'ما يميزنا عن غيرنا',
    'premium.sound.title': 'عزل صوتي متكامل',
    'premium.sound.desc': 'استمتع بالهدوء والسكينة التامة داخل شقتك بفضل نظام العزل الصوتي المتطور',
    'premium.smart.title': 'نظام دخول ذكي',
    'premium.smart.desc': 'تحكم كامل بالدخول عبر هاتفك الذكي لأقصى درجات الأمان والراحة',
    'premium.furnished': '🏠 الشقة مؤثثة بالكامل بأثاث فاخر وعصري',
    
    // Video
    'video.title': 'فيديو للشقة',
    'video.subtitle': 'شاهد جولة افتراضية داخل الشقة',
    
    // Gallery
    'gallery.title': 'معرض الصور',
    'gallery.subtitle': 'استكشف تفاصيل الشقة من خلال الصور',
    
    // Viewing
    'viewing.title': 'شوف بيتك الجديد على الواقع!',
    'viewing.subtitle': 'نفتح أبوابنا لمعاينة الوحدة يومي الجمعة والسبت. سجل بياناتك الآن وسيتواصل معك فريقنا لتحديد الساعة المناسبة لك.',
    'viewing.name': 'الاسم',
    'viewing.phone': 'رقم الجوال',
    'viewing.submit': 'سجل الآن',
    'viewing.success': 'تم التسجيل بنجاح! سنتواصل معك قريباً',
    
    // Contact
    'contact.title': 'لا تفوت الفرصة',
    'contact.subtitle': 'تواصل معنا اليوم لحجز معاينة واكتشف بنفسك روعة المكان',
    'contact.available': 'متاحون للرد على استفساراتكم على مدار الساعة',
    'contact.whatsapp': 'تواصل عبر واتساب',
    
    // Footer
    'footer.rights': '© 2024 مجمع سقيفة 17 - جميع الحقوق محفوظة',
    
    // Theme
    'theme.light': 'فاتح',
    'theme.dark': 'داكن',
  },
  en: {
    // Hero
    'hero.badge': 'Luxury Apartments for Rent',
    'hero.title': 'Complex',
    'hero.titleHighlight': 'Saqifa 17',
    'hero.location': 'Al-Malqa District - Riyadh',
    'hero.subtitle': 'Where luxury and excellence meet',
    'hero.cta': 'Book a Tour Now',
    
    // Intro
    'intro.text': 'Dear customer, if you are looking for a residential experience that combines luxury and comfort, you have come to the right place. We offer you an exceptional apartment in the heart of the upscale Al-Malqa district, where every detail is designed to meet the highest standards of quality and elegance.',
    'intro.luxury': 'Luxury and Comfort',
    'intro.location': 'Al-Malqa District',
    
    // Features
    'features.title': '✨ Why Choose Our Luxury Apartment?',
    'features.subtitle': 'Everything you need for a comfortable and luxurious life',
    'features.space.title': 'Spacious Area',
    'features.space.desc': 'Spacious living room with an elegant dining table for family and guests',
    'features.rooms.title': '3 Bedrooms',
    'features.rooms.desc': 'Bedrooms designed for comfort and privacy with the highest quality standards',
    'features.kitchen.title': 'Modern Kitchen',
    'features.kitchen.desc': 'Fully equipped kitchen with the latest appliances and modern equipment',
    'features.services.title': 'Complete Services',
    'features.services.desc': "Maid's room, laundry room, 3 bathrooms, and a spacious courtyard",
    'features.parking.title': 'Covered Parking',
    'features.parking.desc': 'Private covered parking for two cars with easy access',
    
    // Premium
    'premium.title': 'Exclusive Features',
    'premium.subtitle': 'What sets us apart',
    'premium.sound.title': 'Complete Sound Insulation',
    'premium.sound.desc': 'Enjoy complete peace and quiet inside your apartment thanks to the advanced sound insulation system',
    'premium.smart.title': 'Smart Entry System',
    'premium.smart.desc': 'Full control of entry via your smartphone for maximum security and comfort',
    'premium.furnished': '🏠 The apartment is fully furnished with luxury modern furniture',
    
    // Video
    'video.title': 'Apartment Video',
    'video.subtitle': 'Watch a virtual tour inside the apartment',
    
    // Gallery
    'gallery.title': 'Photo Gallery',
    'gallery.subtitle': 'Explore apartment details through photos',
    
    // Viewing
    'viewing.title': 'See Your New Home in Reality!',
    'viewing.subtitle': 'We open our doors for unit viewing on Fridays and Saturdays. Register your details now and our team will contact you to set the right time for you.',
    'viewing.name': 'Name',
    'viewing.phone': 'Phone Number',
    'viewing.submit': 'Register Now',
    'viewing.success': 'Registration successful! We will contact you soon',
    
    // Contact
    'contact.title': "Don't Miss Out",
    'contact.subtitle': 'Contact us today to book a tour and discover the beauty of the place',
    'contact.available': 'Available to answer your inquiries around the clock',
    'contact.whatsapp': 'Contact via WhatsApp',
    
    // Footer
    'footer.rights': '© 2024 Saqifa 17 Complex - All Rights Reserved',
    
    // Theme
    'theme.light': 'Light',
    'theme.dark': 'Dark',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar')

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
