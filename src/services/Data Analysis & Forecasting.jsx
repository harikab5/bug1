import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import dataHeroVideo from "../assets/Data Analysis & Forecasting.mp4";
import { useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import howItWorksImg from '../assets/Data Analysis & Forecasting1.webp';
import agentImg from '../assets/Data Analysis & Forecasting2.jpg';
import bankingPng from '../assets/banking.jpg';
import ecomersPng from '../assets/ecomers.jpg';
import realEstatePng from '../assets/real estate.jpg';
import travelPng from '../assets/travel.jpg';
import medicalPng from '../assets/medical.jpg';
import educationPng from '../assets/education.jpg';

// Global styles for animations and effects
const styleSheet = `
  @keyframes wave {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .benefit-glow {
    box-shadow: 0 4px 24px 0 #19e6f755, 0 1.5px 8px 0 #0002;
    transition: box-shadow 0.4s, transform 0.4s;
  }
  .feature-card {
    transition: all 0.3s ease;
  }
  .feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(25, 230, 247, 0.2);
  }
`;

if (typeof document !== 'undefined' && !document.getElementById('data-analysis-style')) {
  const style = document.createElement('style');
  style.id = 'data-analysis-style';
  style.innerHTML = styleSheet;
  document.head.appendChild(style);
}

// Animation variants
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

// 1. HERO SECTION
const HeroSection = ({ theme }) => {
  const { language } = useLanguage();
  const t = {
    title: {
      en: "Data Analysis & Forecasting",
      ar: "تحليل البيانات والتنبؤ",
      he: "ניתוח נתונים וחיזוי"
    },
    subtitle: {
      en: "Transform raw data into actionable insights and accurate predictions using advanced AI algorithms and machine learning models.",
      ar: "حوّل البيانات الخام إلى رؤى قابلة للتنفيذ وتنبؤات دقيقة باستخدام خوارزميات الذكاء الاصطناعي المتقدمة ونماذج التعلم الآلي.",
      he: "הפוך נתונים גולמיים לתובנות מעשיות וחיזויים מדויקים עם אלגוריתמים מתקדמים של AI ומודלים של למידת מכונה."
    },
    desc: {
      en: "From predictive analytics and real-time dashboards to automated reporting and business intelligence, our data analysis platform helps you make informed decisions with confidence.",
      ar: "من التحليلات التنبؤية ولوحات المعلومات الفورية إلى التقارير الآلية وذكاء الأعمال، منصتنا لتحليل البيانات تساعدك على اتخاذ قرارات واثقة.",
      he: "מאנליטיקה חזויה ולוחות מחוונים בזמן אמת ועד דוחות אוטומטיים ובינה עסקית, הפלטפורמה שלנו עוזרת לך לקבל החלטות בביטחון."
    },
    button: {
      en: "Explore Data Analytics",
      ar: "استكشف تحليلات البيانات",
      he: "גלה ניתוחי נתונים"
    }
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={fadeUp}
      className="relative text-white py-20 text-center shadow-2xl overflow-hidden w-full px-4 md:px-8 lg:px-16 bg-black min-h-[700px]"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={dataHeroVideo}
      />
      <div className="bg-black bg-opacity-60 absolute inset-0"></div>
      <div className="relative z-10">
        <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#19e6f7] to-[#179b8e] bg-clip-text text-transparent">
          {t.title[language.code]}
        </motion.h1>
        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
          {t.subtitle[language.code]}
        </motion.p>
        <motion.p variants={fadeUp} className="text-lg text-white/80 max-w-3xl mx-auto mb-10">
          {t.desc[language.code]}
        </motion.p>
        <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => {
              const featuresSection = document.getElementById('features-section');
              featuresSection.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-[#19e6f7] to-[#179b8e] text-white px-8 py-4 rounded-xl font-semibold hover:from-[#179b8e] hover:to-[#19e6f7] transition-all duration-300 cursor-pointer text-lg"
          >
            {t.button[language.code]}
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

// 2. HOW IT WORKS SECTION
const HowItWorksSection = ({ theme }) => {
  const { language } = useLanguage();
  const t = {
    steps: [
      {
        en: "Collect & Integrate Data",
        ar: "جمع ودمج البيانات",
        he: "איסוף ואינטגרציית נתונים"
      },
      {
        en: "Process & Clean Data",
        ar: "معالجة وتنظيف البيانات",
        he: "עיבוד וניקוי נתונים"
      },
      {
        en: "Analyze & Model",
        ar: "تحليل ونمذجة",
        he: "ניתוח ומידול"
      },
      {
        en: "Generate Insights",
        ar: "توليد رؤى",
        he: "הפקת תובנות"
      },
      {
        en: "Deploy & Monitor",
        ar: "نشر ومراقبة",
        he: "הטמעה וניטור"
      }
    ],
    heading: {
      en: "How it Works",
      ar: "كيف يعمل",
      he: "איך זה עובד"
    },
    subheading: {
      en: "Step-by-Step: Data Analysis Process",
      ar: "خطوة بخطوة: عملية تحليل البيانات",
      he: "שלב אחר שלב: תהליך ניתוח נתונים"
    },
    button: {
      en: "Get Started with Data Analysis",
      ar: "ابدأ مع تحليل البيانات",
      he: "התחל עם ניתוח נתונים"
    }
  };
  return (
    <section className={`py-20 px-4 ${theme === "dark" ? "bg-[#0a0a0a]" : "bg-gray-100"}`}>
      <div className="max-w-6xl mx-auto">
        {/* Centered Heading */}
        <div className="text-center mb-12">
          <div className="text-[#19e6f7] text-lg font-semibold mb-2">{t.heading[language.code]}</div>
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-8 text-center ${theme === "dark" ? "text-white" : "text-black"}`}>{t.subheading[language.code]}</h2>
        </div>
        {/* Content and Image Container */}
        <div className="flex flex-col md:flex-row items-stretch gap-12">
          {/* Left: Steps */}
          <div className="flex-1 flex flex-col justify-center items-start md:pr-12">
            <ol className="space-y-6 mb-8 pb-4">
              {t.steps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-4 group cursor-pointer transition-all duration-300 hover:scale-105">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 bg-[#1a1a1a] border-[#19e6f7]/40 text-white font-bold text-lg transition-all duration-300 group-hover:scale-110">{idx+1}</div>
                  <div className="flex flex-col">
                    <span className={`text-lg font-semibold transition-all duration-300 group-hover:text-[#19e6f7] ${theme === "dark" ? "text-white/90" : "text-black"}`}>{step[language.code]}</span>
                  </div>
                </li>
              ))}
            </ol>
            <button 
              onClick={() => {
                const pricingSection = document.getElementById('pricing-section');
                pricingSection.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`mt-2 px-7 py-3 rounded-lg font-semibold text-lg shadow transition-all duration-300 cursor-pointer ${theme === "dark" ? "bg-gradient-to-r from-[#19e6f7] to-[#179b8e] text-white" : "bg-black text-white"}`}>{t.button[language.code]}</button>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex items-stretch justify-center">
            <div className="relative w-full max-w-6xl bg-[#1a1a1a] rounded-2xl flex items-center justify-center" style={{boxShadow:'0 0 0 2px #19e6f7/20'}}>
              <img src={howItWorksImg} loading="lazy" alt="How it works" className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 3. KEY FEATURES & BENEFITS SECTION (modern card layout)
const FeaturesBenefitsSection = ({ theme }) => {
  const features = [
    {
      title: {
        en: "Predictive Analytics",
        ar: "تحليلات تنبؤية",
        he: "אנליטיקה חזויה"
      },
      desc: {
        en: "Forecast future trends and outcomes with high accuracy using advanced machine learning models and algorithms.",
        ar: "توقع الاتجاهات والنتائج المستقبلية بدقة عالية باستخدام نماذج وخوارزميات تعلم آلي متقدمة.",
        he: "חזה מגמות ותוצאות עתידיות בדיוק גבוה עם מודלים ואלגוריתמים מתקדמים."
      },
      icon: "📈"
    },
    {
      title: {
        en: "Real-Time Dashboards",
        ar: "لوحات معلومات فورية",
        he: "לוחות מחוונים בזמן אמת"
      },
      desc: {
        en: "Visualize key metrics and KPIs with interactive, live-updating dashboards for instant insights.",
        ar: "عرض المقاييس الرئيسية ومؤشرات الأداء بلوحات تفاعلية محدثة لحظياً لرؤى فورية.",
        he: "הצג מדדים מרכזיים ודוחות KPI עם לוחות מחוונים אינטראקטיביים ומעודכנים."
      },
      icon: "📊"
    },
    {
      title: {
        en: "Data Mining",
        ar: "تنقيب البيانات",
        he: "כריית נתונים"
      },
      desc: {
        en: "Discover hidden patterns and correlations in large datasets using advanced data mining techniques.",
        ar: "اكتشف أنماطًا وعلاقات خفية في مجموعات بيانات ضخمة باستخدام تقنيات تنقيب متقدمة.",
        he: "גלה דפוסים וקשרים נסתרים בנתונים גדולים עם טכניקות כרייה מתקדמות."
      },
      icon: "🔍"
    },
    {
      title: {
        en: "Statistical Analysis",
        ar: "تحليل إحصائي",
        he: "ניתוח סטטיסטי"
      },
      desc: {
        en: "Advanced statistical modeling and analysis for comprehensive data insights and validation.",
        ar: "نمذجة وتحليل إحصائي متقدم لرؤى وبيانات شاملة.",
        he: "מודלים וניתוחים סטטיסטיים מתקדמים לתובנות נתונים מקיפות."
      },
      icon: "📋"
    },
    {
      title: {
        en: "Business Intelligence",
        ar: "ذكاء الأعمال",
        he: "בינה עסקית"
      },
      desc: {
        en: "Convert raw data into strategic business insights and actionable recommendations.",
        ar: "حوّل البيانات الخام إلى رؤى أعمال استراتيجية وتوصيات قابلة للتنفيذ.",
        he: "הפוך נתונים גולמיים לתובנות עסקיות והמלצות מעשיות."
      },
      icon: "💡"
    },
    {
      title: {
        en: "Automated Reporting",
        ar: "تقارير آلية",
        he: "דיווח אוטומטי"
      },
      desc: {
        en: "Generate comprehensive reports automatically with scheduled delivery and custom templates.",
        ar: "إنشاء تقارير شاملة تلقائياً مع تسليم مجدول وقوالب مخصصة.",
        he: "צור דוחות מקיפים אוטומטית עם משלוח מתוזמן ותבניות מותאמות."
      },
      icon: "📄"
    }
  ];
  const { language } = useLanguage();
  return (
    <section id="features-section" className="w-full h-full pt-0 pb-0 px-4 relative overflow-hidden bg-[#19e6f7]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-0 items-center relative z-10 -space-x-8">
        {/* Left: Heading and Button */}
        <div className="flex-1 flex flex-col justify-center items-start mb-10 md:mb-0 md:pr-8">
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-2 mt-0 ${theme === 'dark' ? 'text-black' : 'text-white'}`}>
            {
              {
                en: "Features & Benefits",
                ar: "المميزات والفوائد",
                he: "תכונות ויתרונות"
              }[language.code]
            }
          </h2>
          <div className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-white'}`}>{
            {
              en: "Advanced Data Analysis Features",
              ar: "ميزات تحليل بيانات متقدمة",
              he: "תכונות ניתוח נתונים מתקדמות"
            }[language.code]
          }</div>
          <p className={`text-xl mb-6 max-w-md ${theme === 'dark' ? 'text-white' : 'text-white'}`}>{
            {
              en: "Our platform provides a comprehensive suite of data analysis and forecasting tools, empowering you to extract actionable insights and drive business growth.",
              ar: "منصتنا توفر مجموعة شاملة من أدوات تحليل البيانات والتنبؤ، مما يمكّنك من استخراج رؤى قابلة للتنفيذ ودفع نمو الأعمال.",
              he: "הפלטפורמה שלנו מספקת כלים מקיפים לניתוח נתונים וחיזוי, ומאפשרת להפיק תובנות מעשיות ולהוביל צמיחה עסקית."
            }[language.code]
          }</p>
          <ul className={`list-disc pl-5 text-lg mb-8 space-y-2 ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
            <li>{
              {
                en: "Extract insights from complex data",
                ar: "استخرج رؤى من بيانات معقدة",
                he: "הפק תובנות מנתונים מורכבים"
              }[language.code]
            }</li>
            <li>{
              {
                en: "Automate reporting and forecasting",
                ar: "أتمتة التقارير والتنبؤات",
                he: "אוטומציה של דוחות וחיזויים"
              }[language.code]
            }</li>
            <li>{
              {
                en: "Visualize trends and KPIs instantly",
                ar: "تصور الاتجاهات ومؤشرات الأداء فورياً",
                he: "הצג מגמות ומדדי KPI מיידית"
              }[language.code]
            }</li>
          </ul>
        </div>
        {/* Right: Feature Cards Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full pt-20 pb-20 justify-items-center">
          {features.map((feature, idx) => (
            <div key={idx} className={`rounded-2xl shadow p-6 flex flex-col items-start transition-transform duration-300 hover:scale-105 h-88 min-w-[220px] ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
              <div className={`font-bold text-lg mb-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{feature.title[language.code]}</div>
              <div className={`text-sm flex-1 leading-relaxed ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{feature.desc[language.code]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4. BENEFITS SECTION (modern two-column layout)
const BenefitsSection = ({ theme }) => {
  const { language } = useLanguage();
  const benefits = [
    {
      en: "Make data-driven decisions with confidence using accurate insights and predictive analytics.",
      ar: "اتخذ قرارات قائمة على البيانات بثقة باستخدام رؤى دقيقة وتحليلات تنبؤية.",
      he: "קבל החלטות מונחות נתונים בביטחון עם תובנות מדויקות ואנליטיקה חזויה."
    },
    {
      en: "Identify potential risks and opportunities before they impact your business with advanced forecasting.",
      ar: "حدد المخاطر والفرص المحتملة قبل أن تؤثر على عملك من خلال التنبؤ المتقدم.",
      he: "זהה סיכונים והזדמנויות פוטנציאליים לפני שישפיעו על העסק שלך עם חיזוי מתקדם."
    },
    {
      en: "Optimize processes and resource allocation based on comprehensive data analysis and insights.",
      ar: "حسّن العمليات وتوزيع الموارد بناءً على تحليل بيانات شامل ورؤى معمقة.",
      he: "ייעל תהליכים והקצאת משאבים על בסיס ניתוח נתונים מקיף ותובנות."
    },
    {
      en: "Stay ahead of competitors with predictive market analysis and trend forecasting capabilities.",
      ar: "ابق متقدماً على المنافسين بتحليل سوق تنبؤي وقدرات توقع الاتجاهات.",
      he: "הישאר לפני המתחרים עם ניתוח שוק חזוי ויכולות חיזוי מגמות."
    },
    {
      en: "Develop long-term strategies based on comprehensive data analysis and business intelligence.",
      ar: "طور استراتيجيات طويلة الأمد بناءً على تحليل بيانات شامل وذكاء أعمال.",
      he: "פיתוח אסטרטגיות ארוכות טווח על בסיס ניתוח נתונים מקיף ובינה עסקית."
    }
  ];
  return (
    <section className={`w-full py-20 px-4 ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}>
      {/* Centered Heading */}
      <div className="text-center mb-12">
        <h2 className={`text-3xl md:text-4xl font-extrabold mb-8 ${theme === "dark" ? "text-white" : "text-black"}`}>
          {{
            en: "What kind of Benefit from this app",
            ar: "ما نوع الفائدة من هذا التطبيق",
            he: "איזה יתרון יש מהאפליקציה הזו"
          }[language.code]}
        </h2>
      </div>
      {/* Content and Image Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-stretch">
        {/* Left: Image/Illustration */}
        <div className="flex-1 flex items-center justify-center h-full">
          <div className="relative p-2 h-full flex items-center">
            <img src={agentImg} loading="lazy" alt="Data Analysis Tools" className="w-full h-full object-cover rounded-2xl shadow-xl relative z-10" style={{minHeight: '400px'}} />
            {/* Clean border only */}
            <div className="absolute inset-0 rounded-2xl border-2 border-[#19e6f7] shadow-[0_0_20px_rgba(25,230,247,0.6)]"></div>
          </div>
        </div>
        {/* Right: Benefits List */}
        <div className="flex-1 flex flex-col justify-center h-full">
          <div className="text-justify h-full flex flex-col justify-center">
            <p className={`text-lg mb-8 ${theme === "dark" ? "text-white" : "text-black"}`}>{
              {
                en: "Our data analysis and forecasting tools deliver measurable business value, helping you make data-driven decisions and predict future trends.",
                ar: "أدوات تحليل البيانات والتنبؤ لدينا تقدم قيمة أعمال قابلة للقياس، وتساعدك على اتخاذ قرارات قائمة على البيانات وتوقع الاتجاهات المستقبلية.",
                he: "הכלים שלנו לניתוח נתונים וחיזוי מספקים ערך עסקי מדיד, עוזרים לך לקבל החלטות מונחות נתונים ולחזות מגמות עתידיות."
              }[language.code]
            }</p>
            <ul className="space-y-4">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#19e6f7] text-2xl font-bold mr-3">•</span>
                  <span className={`text-base leading-relaxed text-justify ${theme === "dark" ? "text-white" : "text-black"}`}>{benefit[language.code]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// 5. WHY CHOOSE THIS SECTION
const WhyChooseSection = ({ theme }) => {
  const { language } = useLanguage();
  const reasons = [
    {
      title: {
        en: "Advanced AI Technology",
        ar: "تقنية ذكاء اصطناعي متقدمة",
        he: "טכנולוגיית AI מתקדמת"
      },
      desc: {
        en: "Built with state-of-the-art machine learning models and predictive analytics algorithms for superior accuracy.",
        ar: "تم بناءه باستخدام نماذج تعلم آلي متطورة وخوارزميات تحليلات تنبؤية لدقة فائقة.",
        he: "מבוסס על מודלים מתקדמים של למידת מכונה ואלגוריתמים לחיזוי מדויק."
      },
      stat: "95%"
    },
    {
      title: {
        en: "Real-Time Processing",
        ar: "معالجة فورية",
        he: "עיבוד בזמן אמת"
      },
      desc: {
        en: "Analyze data instantly with low latency and high throughput for immediate insights and decisions.",
        ar: "حلل البيانات فورياً بزمن استجابة منخفض وسرعة عالية لرؤى وقرارات فورية.",
        he: "נתח נתונים מיידית עם השהיה נמוכה ותפוקה גבוהה לתובנות והחלטות מיידיות."
      },
      stat: "<30s"
    },
    {
      title: {
        en: "Multi-Source Integration",
        ar: "تكامل مصادر متعددة",
        he: "אינטגרציה מרובת מקורות"
      },
      desc: {
        en: "Connect and analyze data from multiple sources including databases, APIs, and cloud platforms.",
        ar: "اربط وحلل بيانات من مصادر متعددة بما في ذلك قواعد البيانات وواجهات البرمجة والسحابة.",
        he: "חבר ונתח נתונים ממקורות שונים כולל מסדי נתונים, API ופלטפורמות ענן."
      },
      stat: "50+"
    },
    {
      title: {
        en: "Scalable Architecture",
        ar: "بنية قابلة للتوسع",
        he: "ארכיטקטורה ניתנת להרחבה"
      },
      desc: {
        en: "Handle unlimited data processing requests with enterprise-grade reliability and performance.",
        ar: "تعامل مع طلبات معالجة بيانات غير محدودة بموثوقية وأداء على مستوى المؤسسات.",
        he: "טפל בבקשות עיבוד נתונים בלתי מוגבלות עם אמינות וביצועים ברמה ארגונית."
      },
      stat: "99.9%"
    }
  ];
  const heading = {
    en: "Why Choose ",
    ar: "لماذا تختار ",
    he: "למה לבחור ב-"
  };
  const platform = {
    en: "Our Data Analysis Platform",
    ar: "منصة تحليل البيانات الخاصة بنا",
    he: "פלטפורמת ניתוח הנתונים שלנו"
  };
  return (
    <section className={`${theme === "dark" ? "bg-[#0a0a0a]" : "bg-white"} py-20 px-6`}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto">
        <motion.h2 variants={fadeUp} className="text-4xl font-bold text-center mb-16">
          {heading[language.code]}<span className="text-[#19e6f7]">{platform[language.code]}</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-[#19e6f7]/20"
            >
              <div className="text-[#19e6f7] font-bold text-3xl min-w-[80px]">{reason.stat}</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">{reason.title[language.code]}</h3>
                <p className="text-gray-400 leading-relaxed">{reason.desc[language.code]}</p>
            </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// 5. REAL LIFE USE CASES & APPLICATIONS SECTION
const UseCasesSection = ({ theme }) => {
  const { language } = useLanguage();
  const useCases = [
    {
      icon: bankingPng,
      title: {
        en: 'Banking & Finance',
        ar: 'البنوك والتمويل',
        he: 'בנקאות ופיננסים'
      },
      desc: {
        en: 'Risk assessment, fraud detection, and investment portfolio optimization with data analytics.',
        ar: 'تقييم المخاطر، كشف الاحتيال، وتحسين محفظة الاستثمار باستخدام تحليلات البيانات.',
        he: 'הערכת סיכונים, זיהוי הונאות ואופטימיזציה של תיקי השקעות עם ניתוח נתונים.'
      }
    },
    {
      icon: ecomersPng,
      title: {
        en: 'E-commerce',
        ar: 'التجارة الإلكترونية',
        he: 'מסחר אלקטרוני'
      },
      desc: {
        en: 'Customer behavior analysis, demand forecasting, and inventory optimization using data insights.',
        ar: 'تحليل سلوك العملاء، التنبؤ بالطلب، وتحسين المخزون باستخدام رؤى البيانات.',
        he: 'ניתוח התנהגות לקוחות, חיזוי ביקוש ואופטימיזציה של מלאי בעזרת תובנות נתונים.'
      }
    },
    {
      icon: realEstatePng,
      title: {
        en: 'Real Estate',
        ar: 'العقارات',
        he: 'נדל"ן'
      },
      desc: {
        en: 'Market trend analysis, property valuation, and investment opportunity identification.',
        ar: 'تحليل اتجاهات السوق، تقييم العقارات، وتحديد فرص الاستثمار.',
        he: 'ניתוח מגמות שוק, הערכת נכסים וזיהוי הזדמנויות השקעה.'
      }
    },
    {
      icon: travelPng,
      title: {
        en: 'Travel & Hospitality',
        ar: 'السفر والضيافة',
        he: 'תיירות ואירוח'
      },
      desc: {
        en: 'Demand forecasting, pricing optimization, and customer preference analysis.',
        ar: 'تنبؤ بالطلب، تحسين التسعير، وتحليل تفضيلات العملاء.',
        he: 'חיזוי ביקוש, אופטימיזציית מחירים וניתוח העדפות לקוח.'
      }
    },
    {
      icon: medicalPng,
      title: {
        en: 'Healthcare & Medical',
        ar: 'الرعاية الصحية والطبية',
        he: 'בריאות ורפואה'
      },
      desc: {
        en: 'Patient outcome prediction, resource optimization, and treatment effectiveness analysis.',
        ar: 'توقع نتائج المرضى، تحسين الموارد، وتحليل فعالية العلاج.',
        he: 'חיזוי תוצאות מטופלים, אופטימיזציה של משאבים וניתוח יעילות טיפול.'
      }
    },
    {
      icon: educationPng,
      title: {
        en: 'Education',
        ar: 'التعليم',
        he: 'חינוך'
      },
      desc: {
        en: 'Student performance analysis, curriculum optimization, and learning outcome prediction.',
        ar: 'تحليل أداء الطلاب، تحسين المناهج، وتوقع نتائج التعلم.',
        he: 'ניתוח ביצועי תלמידים, אופטימיזציה של תוכניות לימוד וחיזוי תוצאות למידה.'
      }
    },
  ];
  return (
    <section className="py-20 px-6 bg-[#19e6f7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-extrabold text-black mb-6">
            {{
              en: "Real-Life Use Cases & Applications",
              ar: "حالات استخدام وتطبيقات واقعية",
              he: "מקרי שימוש ויישומים אמיתיים"
            }[language.code]}
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto mb-12 leading-relaxed">
            {{
              en: "Discover how data analytics tools are revolutionizing businesses across industries, providing intelligent content creation, accelerated development, and enhanced productivity. Our solutions adapt to your specific industry needs, delivering measurable results and ROI.",
              ar: "اكتشف كيف تغير أدوات تحليل البيانات الأعمال عبر الصناعات، وتوفر إنشاء محتوى ذكي، وتطوير سريع، وزيادة الإنتاجية. حلولنا تتكيف مع احتياجات صناعتك وتقدم نتائج قابلة للقياس وعائد استثمار.",
              he: "גלה כיצד כלי ניתוח נתונים משנים עסקים בענפים שונים, מספקים יצירת תוכן חכמה, פיתוח מהיר, והגברת פרודוקטיביות. הפתרונות שלנו מותאמים לצרכי התעשייה שלך ומספקים תוצאות מדידות והחזר השקעה."
            }[language.code]}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {useCases.map((useCase, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-4">
                <img src={useCase.icon} loading="lazy" alt={useCase.title[language.code]} className="w-12 h-12 object-contain" />
              </div>
              <div className="font-bold text-base text-black mb-2">{idx + 1}. {useCase.title[language.code]}</div>
              <div className="text-sm text-black leading-relaxed">{useCase.desc[language.code]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 6. PRICING SECTION
const PricingSection = ({ theme }) => {
  const { language } = useLanguage();
  const customText = { en: "Custom", ar: "مخصص", he: "מותאם אישית" };
  const monthText = { en: "month", ar: "شهريًا", he: "לחודש" };
  const apiText = { en: "API", ar: "API", he: "API" };
  const slaText = { en: "SLA", ar: "SLA", he: "SLA" };
  const getStartedText = { en: "Get Started", ar: "ابدأ الآن", he: "התחל" };
  const contactSalesText = { en: "Contact Sales", ar: "تواصل مع المبيعات", he: "צור קשר עם מכירות" };
  const mostPopularText = { en: "Most Popular", ar: "الأكثر شهرة", he: "הפופולרי ביותר" };
  const plans = [
    {
      name: {
        en: "Starter",
        ar: "البداية",
        he: "מנוי בסיסי"
      },
      price: "$99",
      period: `/ A0${monthText[language.code]}`,
      desc: {
        en: "Perfect for small businesses",
        ar: "مثالي للشركات الصغيرة",
        he: "מושלם לעסקים קטנים"
      },
      features: [
        {
          en: "Basic Analytics",
          ar: "تحليلات أساسية",
          he: "אנליטיקה בסיסית"
        },
        {
          en: "Up to 5 data sources",
          ar: "حتى 5 مصادر بيانات",
          he: "עד 5 מקורות נתונים"
        },
        {
          en: "Email Support",
          ar: "دعم عبر البريد الإلكتروني",
          he: "תמיכה בדוא\"ל"
        },
        {
          en: "Basic Dashboards",
          ar: "لوحات معلومات أساسية",
          he: "לוחות מחוונים בסיסיים"
        },
        {
          en: "Standard Reports",
          ar: "تقارير قياسية",
          he: "דוחות סטנדרטיים"
        }
      ],
      popular: false
    },
    {
      name: {
        en: "Professional",
        ar: "المهنية",
        he: "מקצועי"
      },
      price: "$299",
      period: `/ A0${monthText[language.code]}`,
      desc: {
        en: "Ideal for growing companies",
        ar: "مثالي للشركات النامية",
        he: "אידיאלי לחברות מתפתחות"
      },
      features: [
        {
          en: "Advanced Analytics",
          ar: "تحليلات متقدمة",
          he: "אנליטיקה מתקדמת"
        },
        {
          en: "Unlimited data sources",
          ar: "مصادر بيانات غير محدودة",
          he: "מקורות נתונים ללא הגבלה"
        },
        {
          en: "Priority Support",
          ar: "دعم أولوية",
          he: "תמיכה בעדיפות"
        },
        {
          en: "Advanced Dashboards",
          ar: "لوحات معلومات متقدمة",
          he: "לוחות מחוונים מתקדמים"
        },
        {
          en: "Predictive Analytics",
          ar: "تحليلات تنبؤية",
          he: "אנליטיקה חזויה"
        },
        {
          en: "Custom Reports",
          ar: "تقارير مخصصة",
          he: "דוחות מותאמים אישית"
        },
        {
          en: `${apiText[language.code]} Access`,
          ar: `وصول إلى ${apiText[language.code]}`,
          he: `גישה ל-${apiText[language.code]}`
        }
      ],
      popular: true
    },
    {
      name: {
        en: "Enterprise",
        ar: "المؤسسة",
        he: "ארגון"
      },
      price: customText[language.code],
      period: "",
      desc: {
        en: "For large organizations",
        ar: "للمنظمات الكبيرة",
        he: "לארגונים גדולים"
      },
      features: [
        {
          en: "Custom AI Models",
          ar: "نماذج ذكاء اصطناعي مخصصة",
          he: "מודלים מותאמים של בינה מלאכותית"
        },
        {
          en: "Dedicated Data Analyst",
          ar: "محلل بيانات مخصص",
          he: "אנליסט נתונים ייעודי"
        },
        {
          en: "24/7 Phone Support",
          ar: "دعم هاتفي 24/7",
          he: "תמיכה טלפונית 24/7"
        },
        {
          en: "Custom Integrations",
          ar: "تكاملات مخصصة",
          he: "אינטגרציות מותאמות אישית"
        },
        {
          en: "Advanced Security",
          ar: "أمان متقدم",
          he: "אבטחה מתקדמת"
        },
        {
          en: `SLA Guarantee`,
          ar: `ضمان ${slaText[language.code]}`,
          he: `אחריות ${slaText[language.code]}`
        },
        {
          en: "On-premise Option",
          ar: "خيار في الموقع",
          he: "אפשרות מקומית"
        }
      ],
      popular: false
    }
  ];
  return (
    <section id="pricing-section" className={`${theme === "dark" ? "bg-[#0a0a0a]" : "bg-white"} py-20 px-6`}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto">
        <motion.h2 variants={fadeUp} className="text-4xl font-bold text-center mb-16">
          <span className="text-[#19e6f7]">{
            {
              en: "Pricing",
              ar: "الأسعار",
              he: "תמחור"
            }[language.code]
          }</span> {
            {
              en: "Plans",
              ar: "خطط",
              he: "תוכניות"
            }[language.code]
          }
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
          <motion.div
              key={index}
            variants={fadeUp}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 flex flex-col h-full ${
                plan.popular 
                  ? 'border-[#19e6f7] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] -mt-8 z-10'
                  : 'border-gray-700 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]'
              } hover:scale-110 hover:shadow-2xl hover:shadow-[#19e6f7]/40`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#19e6f7] text-black px-4 py-2 rounded-full font-semibold text-sm">
                  {mostPopularText[language.code]}
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 text-white`}>{plan.name[language.code]}</h3>
                <p className="mb-4 text-white/80">{plan.desc[language.code]}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-[#19e6f7]">{plan.price}</span>
                  <span className="ml-1 text-white/80">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#19e6f7] rounded-full"></div>
                    <span className="text-gray-300">{feature[language.code]}</span>
                  </li>
                ))}
            </ul>
              <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 mt-auto ${
                plan.popular
                  ? 'bg-[#19e6f7] text-black hover:bg-[#179b8e]'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}>
                {plan.name[language.code] === plans[2].name[language.code] ? contactSalesText[language.code] : getStartedText[language.code]}
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
  );

  return (
    <section id="pricing-section" className={`${theme === "dark" ? "bg-[#0a0a0a]" : "bg-white"} py-20 px-6`}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto">
        <motion.h2 variants={fadeUp} className="text-4xl font-bold text-center mb-16">
          <span className="text-[#19e6f7]">{
            {
              en: "Pricing",
              ar: "الأسعار",
              he: "תמחור"
            }[useLanguage().language.code]
          }</span> {
            {
              en: "Plans",
              ar: "خطط",
              he: "תוכניות"
            }[useLanguage().language.code]
          }
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
          <motion.div
              key={index}
            variants={fadeUp}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 flex flex-col h-full ${
                plan.popular 
                  ? 'border-[#19e6f7] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] -mt-8 z-10'
                  : 'border-gray-700 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]'
              } hover:scale-110 hover:shadow-2xl hover:shadow-[#19e6f7]/40`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#19e6f7] text-black px-4 py-2 rounded-full font-semibold text-sm">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 text-white`}>{plan.name}</h3>
                <p className="mb-4 text-white/80">{plan.desc}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-[#19e6f7]">{plan.price}</span>
                  <span className="ml-1 text-white/80">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#19e6f7] rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
            </ul>
              <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 mt-auto ${
                plan.popular
                  ? 'bg-[#19e6f7] text-black hover:bg-[#179b8e]'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}>
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);
};

// Main Component
const DataAnalysisInsights = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  return (
    <main className={`${theme === "dark" ? "bg-[#0a0a0a] text-white" : "bg-white text-black"}`}
      dir={language.dir} lang={language.code}>
      <HeroSection theme={theme} />
      <HowItWorksSection theme={theme} />
      <FeaturesBenefitsSection theme={theme} />
      <BenefitsSection theme={theme} />
      <UseCasesSection theme={theme} />
      <PricingSection theme={theme} />
    </main>
  );
};

export default DataAnalysisInsights;