import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import logo from "./assets/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useScrollToTop } from "./hooks/useScrollToTop";
import { useLanguage } from "./context/LanguageContext";

export default function Footer({ theme }) {
  const { language } = useLanguage();
  const strings = {
    en: {
      company: 'AI Tools Company',
      leading: 'Leading the future with cutting-edge AI tools and solutions.',
      quickLinks: 'Quick Links',
      home1: 'Home 1',
      aboutUs: 'About Us',
      services: 'Services',
      blog: 'Blog',
      contact: 'Contact',
      ourServices: 'Our Services',
      getInTouch: 'Get In Touch',
      phone: '+919390594407',
  email: 'stackly.com', // Do not translate
      location: 'India',
      hours: 'Mon - Fri: 9am - 6pm',
      startJourney: 'Start Your AI Journey',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookie: 'Cookie Policy',
      copyright: `© ${new Date().getFullYear()} AI Tools Company. All rights reserved.`,
    },
    ar: {
      company: 'شركة أدوات الذكاء الاصطناعي',
      leading: 'قيادة المستقبل بأدوات وحلول الذكاء الاصطناعي المتقدمة.',
      quickLinks: 'روابط سريعة',
      home1: 'الصفحة الرئيسية 1',
      aboutUs: 'معلومات عنا',
      services: 'الخدمات',
      blog: 'مدونة',
      contact: 'اتصل',
      ourServices: 'خدماتنا',
      getInTouch: 'تواصل معنا',
      phone: '+919390594407',
  email: 'لا تترج', // لا تترجم
      location: 'الهند',
      hours: 'الإثنين - الجمعة: 9 صباحًا - 6 مساءً',
      startJourney: 'ابدأ رحلتك مع الذكاء الاصطناعي',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      cookie: 'سياسة الكوكيز',
      copyright: `© ${new Date().getFullYear()} شركة أدوات الذكاء الاصطناعي. جميع الحقوق محفوظة.`,
    },
    he: {
      company: 'חברת כלי בינה מלאכותית',
      leading: 'מובילים את העתיד עם כלי ופתרונות AI מתקדמים.',
      quickLinks: 'קישורים מהירים',
      home1: 'בית 1',
      aboutUs: 'אודות',
      services: 'שירותים',
      blog: 'בלוג',
      contact: 'צור קשר',
      ourServices: 'השירותים שלנו',
      getInTouch: 'צור קשר',
      phone: '+919390594407',
  email: 'אל תתרג', // אל תתרגם
      location: 'הודו',
      hours: 'ב׳ - ו׳: 9:00 - 18:00',
      startJourney: 'התחל את מסע ה-AI שלך',
      privacy: 'מדיניות פרטיות',
      terms: 'תנאי שירות',
      cookie: 'מדיניות עוגיות',
      copyright: `© ${new Date().getFullYear()} חברת כלי בינה מלאכותית. כל הזכויות שמורות.`,
    }
  };
  const t = strings[language.code] || strings.en;
  const navigate = useNavigate();
  
  // Function to handle navigation with scroll to top
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  
  return (
  <footer className={theme === "dark" ? "bg-[#181818] text-gray-300" : "bg-gray-100 text-gray-900"} dir={language.dir}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Company Info & Social */}
          <div className={`${theme === "dark" ? "flex flex-col items-start text-left" : "flex flex-col items-start text-left text-black"} w-full md:w-auto mb-8 md:mb-0`}>
            <img src={logo} loading="lazy" alt="Logo" className="h-16 md:h-20 w-auto mb-4 md:pr-20 md:-ml-14 md:-mt-6" />
            <h3 className="text-xl font-bold mb-6 text-[#27bdb5]" style={{
              color: '#12716c',
            }}>{t.company}</h3>
            <p className={theme === "dark" ? "text-gray-300 text-sm leading-relaxed mb-6 max-w-xs" : "text-black text-sm leading-relaxed mb-6 max-w-xs"}>
              {t.leading}
            </p>
            <div className="flex gap-4 justify-start">
              {[
                { icon: FaLinkedin, url: "https://www.linkedin.com", label: "LinkedIn" },
                { icon: FaTwitter, url: "https://twitter.com", label: "Twitter" },
                { icon: FaFacebook, url: "https://facebook.com", label: "Facebook" },
                { icon: FaInstagram, url: "https://instagram.com", label: "Instagram" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group
                    ${theme === 'dark'
                      ? 'bg-[#333] text-white hover:bg-[#19e6f7] hover:text-black'
                      : 'bg-gray-200 text-[#181818] hover:bg-[#19e6f7] hover:text-black'}
                    hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon className="text-lg transition-transform duration-300 group-hover:scale-125" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={`${theme === "dark" ? "flex flex-col items-start text-left" : "flex flex-col items-start text-left text-black"} w-full md:w-auto mb-8 md:mb-0`}>
            <h3 className="text-xl font-bold mb-6 text-[#12716c]">
              {t.quickLinks}
            </h3>
            <ul className="space-y-3">
              {[
                { label: t.home1, path: "/home1" },
                { label: t.aboutUs, path: "/about-us" },
                { label: t.services, path: "/services" },
                { label: t.blog, path: "/blog" },
                { label: t.contact, path: "/contact-us" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className={(theme === "dark" ? "text-gray-300" : "text-black") + " hover:text-blue-400 transition-colors duration-300 w-full text-left"}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={`${theme === "dark" ? "flex flex-col items-start text-left" : "flex flex-col items-start text-left text-black"} w-full md:w-auto mb-8 md:mb-0`}>
            <h3 className="text-xl font-bold mb-6 text-[#27bdb5]" style={{
              color: '#12716c',
            }}>{t.ourServices}</h3>
            <ul className="space-y-3">
              {[
                {
                  name: {
                    en: "AI Chatbots & Assistants",
                    ar: "الدردشة الذكية والمساعدون",
                    he: "צ'אטבוטים ועוזרי AI"
                  },
                  path: "/services/ai-chatbots"
                },
                {
                  name: {
                    en: "Content & Code Generation",
                    ar: "إنشاء المحتوى والبرمجة",
                    he: "יצירת תוכן וקוד"
                  },
                  path: "/services/content-generation"
                },
                {
                  name: {
                    en: "Data Analysis & Forecasting",
                    ar: "تحليل البيانات والتنبؤ",
                    he: "ניתוח נתונים וחיזוי"
                  },
                  path: "/services/data-analysis"
                },
                {
                  name: {
                    en: "NLP & Language Intelligence",
                    ar: "تحليل اللغة والذكاء اللغوي",
                    he: "עיבוד שפה וידע לשוני"
                  },
                  path: "/services/nlp-intelligence"
                },
                {
                  name: {
                    en: "Computer Vision Solutions",
                    ar: "حلول الرؤية الحاسوبية",
                    he: "פתרונות ראייה ממוחשבת"
                  },
                  path: "/services/computer-vision"
                },
                {
                  name: {
                    en: "Automation & Workflow Tools",
                    ar: "أدوات الأتمتة وسير العمل",
                    he: "כלי אוטומציה וזרימות עבודה"
                  },
                  path: "/services/automation-tools"
                }
              ].map((service) => (
                <li key={service.path}>
                  <button
                    onClick={() => handleNavigation(service.path)}
                    className={(theme === "dark" ? "text-gray-300" : "text-black") + " hover:text-blue-400 transition-colors duration-300 cursor-pointer w-full text-left"}
                  >
                    {service.name[language.code] || service.name.en}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & CTA */}
          <div className={`${theme === "dark" ? "flex flex-col items-start text-left" : "flex flex-col items-start text-left text-black"} w-full md:w-auto mb-8 md:mb-0`}>
            <h3 className="text-xl font-bold mb-6 text-[#27bdb5]" style={{
              color: '#12716c',
            }}>{t.getInTouch}</h3>
            <div className="space-y-4 mb-6 w-full max-w-xs md:max-w-xs">
              <div className={theme === "dark" ? "flex items-center text-gray-300" : "flex items-center text-black"}>
                <FaPhoneAlt className="mr-3 text-[#27bdb5]" />
                <span className="text-sm">{t.phone}</span>
              </div>
              <div className={theme === "dark" ? "flex items-center text-gray-300" : "flex items-center text-black"}>
                <FaEnvelope className="mr-3 text-[#27bdb5]" />
                <span className="text-sm">{t.email}</span>
              </div>
              <div className={theme === "dark" ? "flex items-center text-gray-300" : "flex items-center text-black"}>
                <FaMapMarkerAlt className="mr-3 text-[#27bdb5]" />
                <span className="text-sm">{t.location}</span>
              </div>
              <div className={theme === "dark" ? "flex items-center text-gray-300" : "flex items-center text-black"}>
                <FaClock className="mr-3 text-[#27bdb5]" />
                <span className="text-sm">{t.hours}</span>
              </div>
            </div>
            <button 
              onClick={() => handleNavigation('/contact-us')}
              className="w-full bg-[#27bdb5] text-white font-bold py-3 px-3 rounded-lg hover:bg-[#12716c] transition-all duration-300 hover:scale-105"
            >
              {t.startJourney}
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 py-6 mt-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className={theme === "dark" ? "text-gray-400 text-sm mb-0 md:mb-0 text-center md:text-left" : "text-black text-sm mb-0 md:mb-0 text-center md:text-left"}>
            {t.copyright}
          </p>
          <div className={theme === "dark" ? "flex gap-6 text-sm text-gray-400 justify-center md:justify-end" : "flex gap-6 text-sm text-black justify-center md:justify-end"}>
            <a href="#" className="hover:text-blue-400 transition-colors">{t.privacy}</a>
            <a href="#" className="hover:text-blue-400 transition-colors">{t.terms}</a>
            <a href="#" className="hover:text-blue-400 transition-colors">{t.cookie}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
