'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'ar' | 'en' | 'zh' | 'ru'

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
  },
  zh: {
    // Hero
    'hero.badge': '豪华公寓出租',
    'hero.title': '综合楼',
    'hero.titleHighlight': 'Saqifa 17',
    'hero.location': '马尔卡区 - 利雅得',
    'hero.subtitle': '奢华与卓越的交汇',
    'hero.cta': '立即预约参观',
    
    // Intro
    'intro.text': '尊敬的客户，如果您正在寻找集奢华与舒适于一体的居住体验，那么您来对地方了。我们为您提供位于高档马尔卡区中心的卓越公寓，每一个细节都按照最高质量和优雅标准设计。',
    'intro.luxury': '奢华与舒适',
    'intro.location': '马尔卡区',
    
    // Features
    'features.title': '✨ 为什么选择我们的豪华公寓？',
    'features.subtitle': '舒适奢华生活所需的一切',
    'features.space.title': '宽敞空间',
    'features.space.desc': '宽敞的客厅，配有优雅的餐桌，可容纳家人和客人',
    'features.rooms.title': '3间卧室',
    'features.rooms.desc': '卧室设计注重舒适和隐私，符合最高质量标准',
    'features.kitchen.title': '现代厨房',
    'features.kitchen.desc': '配备最新电器和现代设备的全套厨房',
    'features.services.title': '完善服务',
    'features.services.desc': '佣人房、洗衣房、3间浴室和宽敞的庭院',
    'features.parking.title': '有盖停车位',
    'features.parking.desc': '可停放两辆车的私人有盖停车位，方便进出',
    
    // Premium
    'premium.title': '独家特色',
    'premium.subtitle': '我们的独特之处',
    'premium.sound.title': '完善隔音',
    'premium.sound.desc': '得益于先进的隔音系统，在您的公寓内享受完全的宁静',
    'premium.smart.title': '智能门禁系统',
    'premium.smart.desc': '通过智能手机完全控制进出，实现最高安全性和便利性',
    'premium.furnished': '🏠 公寓配备全套豪华现代家具',
    
    // Video
    'video.title': '公寓视频',
    'video.subtitle': '观看公寓内部虚拟导览',
    
    // Gallery
    'gallery.title': '图片库',
    'gallery.subtitle': '通过图片探索公寓细节',
    
    // Viewing
    'viewing.title': '亲眼看看您的新家！',
    'viewing.subtitle': '我们在周五和周六开放参观。立即登记您的信息，我们的团队将与您联系安排合适的时间。',
    'viewing.name': '姓名',
    'viewing.phone': '电话号码',
    'viewing.submit': '立即登记',
    'viewing.success': '登记成功！我们将尽快与您联系',
    
    // Contact
    'contact.title': '不要错过',
    'contact.subtitle': '立即联系我们预约参观，亲自发现这个地方的美丽',
    'contact.available': '全天候为您解答疑问',
    'contact.whatsapp': '通过WhatsApp联系',
    
    // Footer
    'footer.rights': '© 2024 Saqifa 17 综合楼 - 保留所有权利',
    
    // Theme
    'theme.light': '浅色',
    'theme.dark': '深色',
  },
  ru: {
    // Hero
    'hero.badge': 'Роскошные апартаменты в аренду',
    'hero.title': 'Комплекс',
    'hero.titleHighlight': 'Сакифа 17',
    'hero.location': 'Район Аль-Малка - Эр-Рияд',
    'hero.subtitle': 'Где роскошь встречается с совершенством',
    'hero.cta': 'Забронировать просмотр',
    
    // Intro
    'intro.text': 'Уважаемый клиент, если вы ищете жилой опыт, сочетающий роскошь и комфорт, вы пришли по адресу. Мы предлагаем вам исключительную квартиру в сердце престижного района Аль-Малка, где каждая деталь создана по высшим стандартам качества и элегантности.',
    'intro.luxury': 'Роскошь и комфорт',
    'intro.location': 'Район Аль-Малка',
    
    // Features
    'features.title': '✨ Почему выбирают нашу роскошную квартиру?',
    'features.subtitle': 'Всё необходимое для комфортной и роскошной жизни',
    'features.space.title': 'Просторная площадь',
    'features.space.desc': 'Просторная гостиная с элегантным обеденным столом для семьи и гостей',
    'features.rooms.title': '3 спальни',
    'features.rooms.desc': 'Спальни спроектированы для комфорта и уединения по высшим стандартам качества',
    'features.kitchen.title': 'Современная кухня',
    'features.kitchen.desc': 'Полностью оборудованная кухня с новейшей техникой и современным оборудованием',
    'features.services.title': 'Полный сервис',
    'features.services.desc': 'Комната для прислуги, прачечная, 3 ванные комнаты и просторный двор',
    'features.parking.title': 'Крытая парковка',
    'features.parking.desc': 'Частная крытая парковка на две машины с удобным подъездом',
    
    // Premium
    'premium.title': 'Эксклюзивные особенности',
    'premium.subtitle': 'Что отличает нас',
    'premium.sound.title': 'Полная звукоизоляция',
    'premium.sound.desc': 'Наслаждайтесь полной тишиной и покоем в квартире благодаря передовой системе звукоизоляции',
    'premium.smart.title': 'Умная система доступа',
    'premium.smart.desc': 'Полный контроль входа через смартфон для максимальной безопасности и комфорта',
    'premium.furnished': '🏠 Квартира полностью меблирована роскошной современной мебелью',
    
    // Video
    'video.title': 'Видео квартиры',
    'video.subtitle': 'Посмотрите виртуальную экскурсию по квартире',
    
    // Gallery
    'gallery.title': 'Фотогалерея',
    'gallery.subtitle': 'Изучите детали квартиры на фотографиях',
    
    // Viewing
    'viewing.title': 'Посмотрите свой новый дом вживую!',
    'viewing.subtitle': 'Мы открыты для просмотра по пятницам и субботам. Зарегистрируйтесь сейчас, и наша команда свяжется с вами.',
    'viewing.name': 'Имя',
    'viewing.phone': 'Номер телефона',
    'viewing.submit': 'Зарегистрироваться',
    'viewing.success': 'Регистрация успешна! Мы скоро свяжемся с вами',
    
    // Contact
    'contact.title': 'Не упустите шанс',
    'contact.subtitle': 'Свяжитесь с нами сегодня для бронирования просмотра и откройте для себя красоту этого места',
    'contact.available': 'Доступны для ответа на ваши вопросы круглосуточно',
    'contact.whatsapp': 'Связаться через WhatsApp',
    
    // Footer
    'footer.rights': '© 2024 Комплекс Сакифа 17 - Все права защищены',
    
    // Theme
    'theme.light': 'Светлая',
    'theme.dark': 'Тёмная',
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
