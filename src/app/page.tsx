'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Armchair,
  Bed,
  ChefHat,
  Sparkles,
  Car,
  VolumeX,
  Smartphone,
  MapPin,
  Home,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
  Sun,
  Moon,
  Globe,
  Train,
  ShoppingBag,
  Plane,
  Hospital,
  GraduationCap,
  Building2,
  PartyPopper
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useTheme } from '@/context/ThemeContext'

const WHATSAPP_NUMBER = '966504211545'

// Generate gallery image paths (1-45)
const galleryImages = Array.from({ length: 45 }, (_, i) => `/images/gallery/${i + 1}.jpg`)

const heroImage = '/images/slide-1.jpg'
const heroImageMobile = '/images/slide-1-mobile.jpg'

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function LandingPage() {
  const { language, setLanguage, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [showVideo, setShowVideo] = useState(false)
  const videoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowVideo(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (videoRef.current) observer.observe(videoRef.current)
    return () => observer.disconnect()
  }, [])

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)
  const nextImage = () => setSelectedImage((prev) => prev !== null ? (prev + 1) % galleryImages.length : null)
  const prevImage = () => setSelectedImage((prev) => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null)

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }


  const features = [
    {
      icon: Armchair,
      titleKey: 'features.space.title',
      descKey: 'features.space.desc'
    },
    {
      icon: Bed,
      titleKey: 'features.rooms.title',
      descKey: 'features.rooms.desc'
    },
    {
      icon: ChefHat,
      titleKey: 'features.kitchen.title',
      descKey: 'features.kitchen.desc'
    },
    {
      icon: Sparkles,
      titleKey: 'features.services.title',
      descKey: 'features.services.desc'
    },
    {
      icon: Car,
      titleKey: 'features.parking.title',
      descKey: 'features.parking.desc'
    }
  ]

  const premiumFeatures = [
    {
      icon: VolumeX,
      titleKey: 'premium.sound.title',
      descKey: 'premium.sound.desc'
    },
    {
      icon: Smartphone,
      titleKey: 'premium.smart.title',
      descKey: 'premium.smart.desc'
    }
  ]

  const isDark = theme === 'dark'

  return (
    <main className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-900' : 'bg-stone-50'}`}>
      {/* Header with Language & Theme Toggle */}
      <header className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            className="flex gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Language Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-2 px-4 py-2 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all ${isDark ? 'bg-slate-800/90 text-stone-200' : 'bg-white/90 text-slate-700'}`}
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {language === 'ar' ? 'عربي' : language === 'en' ? 'EN' : language === 'zh' ? '中文' : 'РУ'}
                </span>
              </button>
              <div className={`absolute top-full mt-2 ${language === 'ar' || language === 'ru' ? 'right-0' : 'left-0'} opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ${isDark ? 'bg-slate-800/95' : 'bg-white/95'} backdrop-blur-sm rounded-xl shadow-xl overflow-hidden min-w-[120px]`}>
                <button
                  onClick={() => setLanguage('ar')}
                  className={`w-full px-4 py-3 text-sm font-medium text-right hover:bg-amber-600 hover:text-white transition-colors ${language === 'ar' ? 'bg-amber-600 text-white' : isDark ? 'text-stone-200' : 'text-slate-700'}`}
                >
                  🇸🇦 عربي
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`w-full px-4 py-3 text-sm font-medium text-right hover:bg-amber-600 hover:text-white transition-colors ${language === 'en' ? 'bg-amber-600 text-white' : isDark ? 'text-stone-200' : 'text-slate-700'}`}
                >
                  🇬🇧 English
                </button>
                <button
                  onClick={() => setLanguage('zh')}
                  className={`w-full px-4 py-3 text-sm font-medium text-right hover:bg-amber-600 hover:text-white transition-colors ${language === 'zh' ? 'bg-amber-600 text-white' : isDark ? 'text-stone-200' : 'text-slate-700'}`}
                >
                  🇨🇳 中文
                </button>
                <button
                  onClick={() => setLanguage('ru')}
                  className={`w-full px-4 py-3 text-sm font-medium text-right hover:bg-amber-600 hover:text-white transition-colors ${language === 'ru' ? 'bg-amber-600 text-white' : isDark ? 'text-stone-200' : 'text-slate-700'}`}
                >
                  🇷🇺 Русский
                </button>
              </div>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن'}
              className={`flex items-center gap-2 px-4 py-2 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all ${isDark ? 'bg-slate-800/90 text-stone-200' : 'bg-white/90 text-slate-700'}`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </motion.div>
        </div>
      </header>

      {/* Hero Section - Single Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Image - Mobile */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src={heroImageMobile}
            alt="مجمع سقيفة 17"
            fill
            priority
            quality={75}
            className="object-cover"
            sizes="100vw"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        {/* Hero Image - Desktop */}
        <div className="absolute inset-0 hidden md:block">
          <Image
            src={heroImage}
            alt="مجمع سقيفة 17"
            fill
            priority
            quality={80}
            className="object-cover"
            sizes="100vw"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <motion.div 
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-amber-600/20 border border-amber-500/30 rounded-full text-amber-300 text-sm font-medium mb-4">
              <Home className="inline-block w-4 h-4 me-2" />
              {t('hero.badge')}
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            {t('hero.title')} <span className="text-amber-400">{t('hero.titleHighlight')}</span>
          </h1>
          
          <div className="flex items-center justify-center gap-2 text-amber-300 mb-6">
            <MapPin className="w-5 h-5" />
            <span className="text-lg md:text-xl">{t('hero.location')}</span>
          </div>
          
          <p className="text-xl md:text-2xl text-stone-200 mb-10 font-light">
            {t('hero.subtitle')}
          </p>
          
          <motion.button
            onClick={scrollToContact}
            className="group bg-amber-700 hover:bg-amber-800 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-amber-700/25 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('hero.cta')}
            <ChevronDown className="inline-block w-5 h-5 ms-2 group-hover:translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </section>

      {/* Video Section */}
      <section className={`py-20 md:py-28 transition-colors ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t('video.title')}
            </h2>
            <p className={`text-lg ${isDark ? 'text-stone-400' : 'text-slate-600'}`}>{t('video.subtitle')}</p>
          </motion.div>

          <motion.div
            ref={videoRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            {showVideo ? (
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/wR1mNnk8BF8?si=QdFi6leTdMeJcVfI" 
                title="جولة في الشقة - مجمع سقيفة 17" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
              ></iframe>
            ) : (
              <div className={`w-full h-full flex items-center justify-center ${isDark ? 'bg-slate-700' : 'bg-stone-200'}`}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-600 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className={isDark ? 'text-stone-400' : 'text-slate-600'}>جاري تحميل الفيديو...</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section - Grid Layout */}
      <section className={`py-20 md:py-28 transition-colors ${isDark ? 'bg-slate-900' : 'bg-stone-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t('gallery.title')}
            </h2>
            <p className={`text-lg ${isDark ? 'text-stone-400' : 'text-slate-600'}`}>{t('gallery.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                onClick={() => openLightbox(index)}
                className="aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer group relative"
              >
                <Image
                  src={img}
                  alt={`صورة ${index + 1} - مجمع سقيفة 17`}
                  fill
                  quality={60}
                  loading="lazy"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, (max-width: 1024px) 22vw, 18vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            aria-label="إغلاق"
            className="absolute top-4 right-4 p-2 text-white hover:text-amber-500 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="الصورة السابقة"
            className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <div className="max-w-5xl max-h-[85vh] px-16 relative" onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryImages[selectedImage]}
              alt={`صورة ${selectedImage + 1} - مجمع سقيفة 17`}
              width={1200}
              height={800}
              quality={85}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              priority
            />
          </div>
          
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="الصورة التالية"
            className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          
          <div className="absolute bottom-4 text-white text-lg">
            {selectedImage + 1} / {galleryImages.length}
          </div>
        </div>
      )}

      {/* Introduction Section */}
      <section className={`py-20 md:py-28 transition-colors ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
        <motion.div 
          className="max-w-4xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className={`text-xl md:text-2xl leading-relaxed font-light ${isDark ? 'text-stone-300' : 'text-slate-700'}`}>
            {t('intro.text')}
          </p>
          <div className="w-20 h-1 bg-amber-600 mx-auto mt-8"></div>
        </motion.div>
      </section>

      {/* Features Section - Vertical with Scroll Animation */}
      <section className={`py-20 md:py-28 transition-colors ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t('features.title')}
            </h2>
            <p className={`text-lg ${isDark ? 'text-stone-400' : 'text-slate-600'}`}>{t('features.subtitle')}</p>
          </motion.div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-start gap-6 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border group ${isDark ? 'bg-slate-700/50 border-slate-600' : 'bg-stone-50 border-stone-100'}`}
              >
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-amber-600 transition-colors duration-300 ${isDark ? 'bg-amber-600/20' : 'bg-amber-100'}`}>
                  <feature.icon className={`w-8 h-8 group-hover:text-white transition-colors duration-300 ${isDark ? 'text-amber-500' : 'text-amber-600'}`} />
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{t(feature.titleKey)}</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-stone-400' : 'text-slate-600'}`}>{t(feature.descKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className={`py-20 md:py-28 transition-colors ${isDark ? 'bg-slate-900' : 'bg-stone-100'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {language === 'ar' ? 'موقع استراتيجي' : language === 'zh' ? '战略位置' : language === 'ru' ? 'Стратегическое расположение' : 'Strategic Location'}
            </h2>
            <p className={`text-lg ${isDark ? 'text-stone-400' : 'text-slate-600'}`}>
              {language === 'ar' ? 'حي الملقا – تقاطع طريق الملك سلمان مع طريق الملك فهد' : language === 'zh' ? '马尔卡区 - 萨勒曼国王路与法赫德国王路交汇处' : language === 'ru' ? 'Район Аль-Малка – пересечение дороги короля Салмана с дорогой короля Фахда' : 'Al Malqa District – King Salman Road & King Fahd Road Intersection'}
            </p>
          </motion.div>

          {/* Map - Full Width */}
          <motion.a
            href="https://maps.app.goo.gl/D5sAfCnGepWVf49UA"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 group mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.8234!2d46.6234!3d24.8234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee3c0a1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2sAl%20Malqa%2C%20Riyadh!5e0!3m2!1sen!2ssa!4v1"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl pointer-events-none"
              title="موقع مجمع سقيفة 17"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
              <span className="text-white font-bold text-lg flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {language === 'ar' ? 'افتح في خرائط جوجل' : language === 'zh' ? '在谷歌地图中打开' : language === 'ru' ? 'Открыть в Google Картах' : 'Open in Google Maps'}
              </span>
            </div>
          </motion.a>

          {/* Landmarks Grid - Below Map */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Metro */}
            <div className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-lg ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-stone-200'}`}>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${isDark ? 'bg-amber-600/20' : 'bg-amber-100'}`}>
                  <Train className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {language === 'ar' ? 'محطة المترو' : language === 'zh' ? '地铁站' : language === 'ru' ? 'Станция метро' : 'Metro Station'}
                  </h3>
                  <p className="text-amber-600 font-bold">{language === 'ar' ? '5 دقائق' : language === 'zh' ? '5分钟' : language === 'ru' ? '5 минут' : '5 min'}</p>
                </div>
              </div>
            </div>

            {/* Hospital */}
            <div className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-lg ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-stone-200'}`}>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${isDark ? 'bg-amber-600/20' : 'bg-amber-100'}`}>
                  <Hospital className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {language === 'ar' ? 'مستشفى د. سليمان الحبيب' : language === 'zh' ? '苏莱曼·哈比卜医院' : language === 'ru' ? 'Больница Др. Сулеймана' : 'Dr. Sulaiman Hospital'}
                  </h3>
                  <p className="text-amber-600 font-bold">{language === 'ar' ? '8 دقائق' : language === 'zh' ? '8分钟' : language === 'ru' ? '8 минут' : '8 min'}</p>
                </div>
              </div>
            </div>

            {/* Boulevard */}
            <div className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-lg ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-stone-200'}`}>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${isDark ? 'bg-amber-600/20' : 'bg-amber-100'}`}>
                  <PartyPopper className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {language === 'ar' ? 'بوليفارد الرياض' : language === 'zh' ? '利雅得大道' : language === 'ru' ? 'Бульвар Эр-Рияд' : 'Boulevard Riyadh'}
                  </h3>
                  <p className="text-amber-600 font-bold">{language === 'ar' ? '13 دقيقة' : language === 'zh' ? '13分钟' : language === 'ru' ? '13 минут' : '13 min'}</p>
                </div>
              </div>
            </div>

            {/* KAFD */}
            <div className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-lg ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-stone-200'}`}>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${isDark ? 'bg-amber-600/20' : 'bg-amber-100'}`}>
                  <Building2 className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {language === 'ar' ? 'مركز الملك عبدالله المالي' : language === 'zh' ? '阿卜杜拉国王金融区' : language === 'ru' ? 'Финансовый центр KAFD' : 'KAFD'}
                  </h3>
                  <p className="text-amber-600 font-bold">{language === 'ar' ? '15 دقيقة' : language === 'zh' ? '15分钟' : language === 'ru' ? '15 минут' : '15 min'}</p>
                </div>
              </div>
            </div>

            {/* University */}
            <div className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-lg ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-stone-200'}`}>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${isDark ? 'bg-amber-600/20' : 'bg-amber-100'}`}>
                  <GraduationCap className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {language === 'ar' ? 'جامعة الملك سعود' : language === 'zh' ? '沙特国王大学' : language === 'ru' ? 'Университет короля Сауда' : 'King Saud University'}
                  </h3>
                  <p className="text-amber-600 font-bold">{language === 'ar' ? '15 دقيقة' : language === 'zh' ? '15分钟' : language === 'ru' ? '15 минут' : '15 min'}</p>
                </div>
              </div>
            </div>

            {/* Airport */}
            <div className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-lg ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-stone-200'}`}>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${isDark ? 'bg-amber-600/20' : 'bg-amber-100'}`}>
                  <Plane className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {language === 'ar' ? 'مطار الملك خالد' : language === 'zh' ? '哈立德国王机场' : language === 'ru' ? 'Аэропорт им. короля Халида' : 'King Khalid Airport'}
                  </h3>
                  <p className="text-amber-600 font-bold">{language === 'ar' ? '20 دقيقة' : language === 'zh' ? '20分钟' : language === 'ru' ? '20 минут' : '20 min'}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Highlights Section */}
      <section className="py-20 md:py-28 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('premium.title')}
            </h2>
            <p className="text-stone-400 text-lg">{t('premium.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {premiumFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-slate-800/50 p-8 md:p-10 rounded-2xl border-2 border-amber-600/30 hover:border-amber-500 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-amber-600/20 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t(feature.titleKey)}</h3>
                <p className="text-stone-300 text-lg leading-relaxed">{t(feature.descKey)}</p>
              </motion.div>
            ))}
          </div>

          {/* Furnished Badge */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-gradient-to-l from-amber-600 to-amber-700 px-8 py-4 rounded-xl shadow-lg">
              <p className="text-white text-xl font-bold">
                {t('premium.furnished')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 md:py-28 transition-colors ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t('contact.title')}
            </h2>
            <p className={`text-lg mb-10 ${isDark ? 'text-stone-400' : 'text-slate-600'}`}>
              {t('contact.subtitle')}
            </p>

            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-700 hover:bg-green-800 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all duration-300 shadow-lg hover:shadow-green-700/25 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <WhatsAppIcon className="w-6 h-6" />
              <span>{t('contact.whatsapp')}</span>
            </motion.a>

            <p className={`mt-6 ${isDark ? 'text-stone-500' : 'text-slate-500'}`}>
              {t('contact.available')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-stone-400">
            {t('footer.rights')}
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا عبر واتساب"
        className="fixed bottom-8 start-4 z-50 w-14 h-14 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <WhatsAppIcon className="w-7 h-7 text-white" />
      </motion.a>
    </main>
  )
}
