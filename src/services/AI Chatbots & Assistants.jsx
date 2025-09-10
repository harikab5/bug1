import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import heroVideo from "../assets/AI Chatbots & Assistants.mp4";
import { useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import howItWorksImg from '../assets/ai chatbots & assistants1.webp';
import agentImg from '../assets/ai chatbots & assistants2.jpg';
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

if (typeof document !== 'undefined' && !document.getElementById('ai-chatbot-style')) {
  const style = document.createElement('style');
  style.id = 'ai-chatbot-style';
  style.innerHTML = styleSheet;
  document.head.appendChild(style);
}

// Animation variants
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

// 1. HERO SECTION
const HeroSection = ({ theme, language }) => {
  // language is now passed as a prop
  const t = {
    title: {
      en: "AI Chatbots & Assistants",
      ar: "شات بوتات ومساعدين الذكاء الاصطناعي",
      he: "צ'אטבוטים ועוזרי AI"
    },
    subtitle: {
      en: "Transform your customer interactions with intelligent AI chatbots that understand, learn, and provide personalized assistance 24/7.",
      ar: "حوّل تفاعلات العملاء مع شات بوتات ذكية تفهم وتتعلم وتقدم المساعدة الشخصية على مدار الساعة.",
      he: "שנה את האינטראקציות עם הלקוחות בעזרת צ'אטבוטים חכמים שמבינים, לומדים ומספקים סיוע מותאם אישית 24/7."
    },
    desc: {
      en: "Powered by advanced Natural Language Processing and Machine Learning, our AI chatbots deliver human-like conversations while handling complex queries and providing instant solutions.",
      ar: "مدعومة بمعالجة اللغة الطبيعية والتعلم الآلي المتقدم، شات بوتاتنا تقدم محادثات بشرية وتتعامل مع استفسارات معقدة وتوفر حلولًا فورية.",
      he: "בהפעלת עיבוד שפה טבעית ולמידת מכונה מתקדמת, הצ'אטבוטים שלנו מספקים שיחות אנושיות ומטפלים בשאלות מורכבות עם פתרונות מיידיים."
    },
    button: {
      en: "Explore AI Chatbots",
      ar: "استكشف شات بوتات الذكاء الاصطناعي",
      he: "גלה צ'אטבוטים של AI"
    }
  };
  // language is now passed as a prop
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
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={heroVideo}
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
const HowItWorksSection = ({ theme, language }) => {
  // language is now passed as a prop
  const steps = [
    {
      en: "Define Your Use Case",
      ar: "حدد حالتك",
      he: "הגדר את המקרה שלך"
    },
    {
      en: "Customize & Train",
      ar: "خصص ودرّب",
      he: "התאם ואמן"
    },
    {
      en: "Integrate & Deploy",
      ar: "ادمج وانشر",
      he: "שלב ופרוס"
    },
    {
      en: "Monitor & Optimize",
      ar: "راقب وحسّن",
      he: "נטר ואופטימיזציה"
    },
    {
      en: "Scale & Expand",
      ar: "وسع وطور",
      he: "הגדל והרחב"
    }
  ];
  return (
    <section className={`py-20 px-4 ${theme === "dark" ? "bg-[#0a0a0a]" : "bg-gray-100"}`}>
      <div className="max-w-6xl mx-auto">
        {/* Centered Heading */}
        <div className="text-center mb-12">
          <div className="text-[#19e6f7] text-lg font-semibold mb-2">{
            {
              en: "How it Works",
              ar: "كيف يعمل",
              he: "איך זה עובד"
            }[language.code]
          }</div>
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-8 text-center ${theme === "dark" ? "text-white" : "text-black"}`}>{
            {
              en: "Step-by-Step: AI Chatbot Process",
              ar: "خطوة بخطوة: عملية شات بوت الذكاء الاصطناعي",
              he: "שלב-אחר-שלב: תהליך צ'אטבוט AI"
            }[language.code]
          }</h2>
        </div>
        
        {/* Content and Image Container */}
        <div className="flex flex-col md:flex-row items-stretch gap-12">
          {/* Left: Steps */}
          <div className="flex-1 flex flex-col justify-center items-start md:pr-12">
          <ol className="space-y-6 mb-8 pb-4">
            {steps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-4 group cursor-pointer transition-all duration-300 hover:scale-105">
                <span className={`w-10 h-10 flex items-center justify-center rounded-full border-2 font-bold text-lg transition-all duration-300 group-hover:scale-110 ${theme === "dark" ? "bg-[#1a1a1a] text-white border-[#19e6f7]/40" : "bg-black text-white border-black"}`}>{idx+1}</span>
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
            className={`mt-2 px-7 py-3 rounded-lg font-semibold text-lg shadow transition-all duration-300 cursor-pointer ${theme === "dark" ? "bg-gradient-to-r from-[#19e6f7] to-[#179b8e] text-white" : "bg-black text-white"}`}> 
            {
              {
                en: "Get Started with AI Chatbots",
                ar: "ابدأ مع شات بوت الذكاء الاصطناعي",
                he: "התחל עם צ'אטבוטי AI"
              }[language.code]
            }
          </button>
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
const FeaturesBenefitsSection = ({ theme, language }) => {
  const features = [
    {
      title: {
        en: "Natural Language Processing",
        ar: "معالجة اللغة الطبيعية",
        he: "עיבוד שפה טבעית"
      },
      desc: {
        en: "Advanced NLP algorithms understand user intent, context, and sentiment for human-like conversations.",
        ar: "خوارزميات NLP متقدمة تفهم نية المستخدم والسياق والمشاعر لمحادثات شبيهة بالبشر.",
        he: "אלגוריתמים מתקדמים מבינים כוונה, הקשר ורגש לשיחות דמויות אדם."
      },
      icon: "💬"
    },
    {
      title: {
        en: "Multi-Platform Integration",
        ar: "تكامل متعدد المنصات",
        he: "אינטגרציה רב-פלטפורמית"
      },
      desc: {
        en: "Deploy across websites, mobile apps, WhatsApp, Facebook Messenger, and voice assistants.",
        ar: "انشر عبر المواقع والتطبيقات وواتساب وفيسبوك ماسنجر والمساعدات الصوتية.",
        he: "פרוס באתרים, אפליקציות, וואטסאפ, פייסבוק מסנג'ר ועוזרי קול."
      },
      icon: "🔗"
    },
    {
      title: {
        en: "24/7 Availability",
        ar: "توفر على مدار الساعة",
        he: "זמינות 24/7"
      },
      desc: {
        en: "Provide instant responses and support around the clock without human intervention.",
        ar: "تقديم ردود ودعم فوريين على مدار الساعة دون تدخل بشري.",
        he: "ספק תגובות ותמיכה מיידית מסביב לשעון ללא התערבות אנושית."
      },
      icon: "⏰"
    },
    {
      title: {
        en: "Contextual Memory",
        ar: "ذاكرة سياقية",
        he: "זיכרון הקשרי"
      },
      desc: {
        en: "Remember conversation history and user preferences across interactions for personalized responses.",
        ar: "تذكر تاريخ المحادثة وتفضيلات المستخدم عبر التفاعلات لردود مخصصة.",
        he: "זכור היסטוריית שיחה והעדפות משתמש לאינטראקציות מותאמות."
      },
      icon: "🧠"
    },
    {
      title: {
        en: "Smart Escalation",
        ar: "تصعيد ذكي",
        he: "הסלמה חכמה"
      },
      desc: {
        en: "Automatically detect complex queries and transfer to human agents with priority scoring.",
        ar: "كشف تلقائي للاستفسارات المعقدة وتحويلها للوكلاء البشريين مع تحديد الأولوية.",
        he: "זיהוי אוטומטי של פניות מורכבות והעברה לנציגים עם ניקוד עדיפויות."
      },
      icon: "🤝"
    },
    {
      title: {
        en: "Analytics & Insights",
        ar: "التحليلات والرؤى",
        he: "אנליטיקה ותובנות"
      },
      desc: {
        en: "Real-time dashboard with conversation performance, satisfaction metrics, and ROI tracking.",
        ar: "لوحة تحكم فورية بأداء المحادثة، مقاييس الرضا، وتتبع العائد.",
        he: "לוח מחוונים בזמן אמת עם ביצועי שיחה, מדדי שביעות רצון ומעקב ROI."
      },
      icon: "📊"
    }
  ];
  return (
    <section id="features-section" className="w-full h-full pt-0 pb-0 px-4 relative overflow-hidden bg-[#19e6f7]">
      {/* Blue gradient top half bg */}
      <div className="absolute top-0 left-0 w-full h-3/4 bg-gradient-to-br from-[#19e6f7] to-[#179b8e] z-0" style={{minHeight:'600px'}} />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-0 items-center relative z-10 -space-x-8">
        {/* Left: Heading and Button */}
        <div className="flex-1 flex flex-col justify-center items-start mb-10 md:mb-0 md:pr-8">
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-2 mt-0 ${theme === 'dark' ? 'text-black' : 'text-white'}`}>{
            {
              en: "Features & Benefits",
              ar: "الميزات والفوائد",
              he: "תכונות ויתרונות"
            }[language.code]
          }</h2>
          <div className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-white'}`}>{
            {
              en: "Create Content & Code Like Never Before",
              ar: "أنشئ محتوى وكود كما لم يحدث من قبل",
              he: "צור תוכן וקוד כמו שלא היה מעולם"
            }[language.code]
          }</div>
          <p className={`text-xl mb-6 max-w-md ${theme === 'dark' ? 'text-white' : 'text-white'}`}>{
            {
              en: "Our AI-powered platform generates high-quality content and functional code, saving you hours of writing and development time while maintaining originality and creativity.",
              ar: "منصتنا المدعومة بالذكاء الاصطناعي تنشئ محتوى عالي الجودة وكود وظيفي، وتوفر عليك ساعات من الكتابة والتطوير مع الحفاظ على الأصالة والإبداع.",
              he: "הפלטפורמה שלנו מייצרת תוכן איכותי וקוד פונקציונלי, חוסכת שעות כתיבה ופיתוח תוך שמירה על מקוריות ויצירתיות."
            }[language.code]
          }</p>
          <ul className={`list-disc pl-5 text-lg mb-8 space-y-2 ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
            <li>{
              {
                en: "Generate content and code in seconds, not hours",
                ar: "أنشئ محتوى وكود في ثوانٍ وليس ساعات",
                he: "צור תוכן וקוד בשניות, לא שעות"
              }[language.code]
            }</li>
            <li>{
              {
                en: "Maintain brand voice and coding standards",
                ar: "حافظ على هوية العلامة التجارية ومعايير البرمجة",
                he: "שמור על קול המותג וסטנדרטים של קוד"
              }[language.code]
            }</li>
            <li>{
              {
                en: "24/7 content and code generation",
                ar: "توليد محتوى وكود على مدار الساعة",
                he: "יצירת תוכן וקוד 24/7"
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
const BenefitsSection = ({ theme, language }) => {
  const benefits = [
    "Reduce support costs by up to 70% while improving response times and customer satisfaction.",
    "Handle unlimited conversations simultaneously with enterprise-grade reliability and uptime.",
    "Simple API integration with popular platforms and custom development support.",
    "Advanced AI technology with state-of-the-art NLP and machine learning models.",
    
    "Data-driven insights and analytics for continuous improvement and optimization."
  ];
  return (
    <section className={`w-full py-20 px-4 ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}>
      {/* Centered Heading */}
      <div className="text-center mb-12">
        <h2 className={`text-3xl md:text-4xl font-extrabold mb-8 ${theme === "dark" ? "text-white" : "text-black"}`}>{
          {
            en: "What kind of Benefit from this app",
            ar: "ما نوع الفائدة من هذا التطبيق",
            he: "איזה יתרון יש מהאפליקציה הזו"
          }[language.code]
        }</h2>
      </div>
      
      {/* Content and Image Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-stretch">
        {/* Left: Image/Illustration */}
        <div className="flex-1 flex items-center justify-center h-full">
          <div className="relative p-2 h-full flex items-center">
            <img src={agentImg} loading="lazy" alt="AI Assistant" className="w-full h-full object-cover rounded-2xl shadow-xl relative z-10" style={{minHeight: '400px'}} />
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#19e6f7] to-[#19e6f7] blur-sm opacity-70 animate-pulse"></div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#19e6f7] to-[#19e6f7] opacity-40"></div>
          </div>
        </div>
        {/* Right: Benefits List */}
        <div className="flex-1 flex flex-col justify-center h-full">
          <div className="text-justify h-full flex flex-col justify-center">
            <p className={`text-lg mb-8 ${theme === "dark" ? "text-white" : "text-black"}`}>{
              {
                en: "Our AI chatbots deliver measurable business value, helping you scale customer support, boost efficiency, and reduce costs.",
                ar: "شات بوتات الذكاء الاصطناعي لدينا تقدم قيمة أعمال قابلة للقياس، وتساعدك على توسيع دعم العملاء، وزيادة الكفاءة، وتقليل التكاليف.",
                he: "הצ'אטבוטים שלנו מספקים ערך עסקי מדיד, עוזרים לך להגדיל את התמיכה, לשפר יעילות ולהפחית עלויות."
              }[language.code]
            }</p>
            <ul className="space-y-4">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#19e6f7] text-2xl font-bold mr-3">•</span>
                  <span className={`text-base leading-relaxed text-justify ${theme === "dark" ? "text-white" : "text-black"}`}>{
                    [
                      {
                        en: "Reduce support costs by up to 70% while improving response times and customer satisfaction.",
                        ar: "قلل تكاليف الدعم بنسبة تصل إلى 70% مع تحسين أوقات الاستجابة ورضا العملاء.",
                        he: "הפחת עלויות תמיכה עד 70% תוך שיפור זמני תגובה ושביעות רצון לקוחות."
                      },
                      {
                        en: "Handle unlimited conversations simultaneously with enterprise-grade reliability and uptime.",
                        ar: "تعامل مع محادثات غير محدودة في نفس الوقت مع موثوقية ووقت تشغيل على مستوى المؤسسات.",
                        he: "טפל בשיחות בלתי מוגבלות בו זמנית עם אמינות וזמינות ברמה ארגונית."
                      },
                      {
                        en: "Simple API integration with popular platforms and custom development support.",
                        ar: "تكامل API بسيط مع المنصات الشهيرة ودعم التطوير المخصص.",
                        he: "אינטגרציית API פשוטה עם פלטפורמות פופולריות ותמיכה בפיתוח מותאם אישית."
                      },
                      {
                        en: "Advanced AI technology with state-of-the-art NLP and machine learning models.",
                        ar: "تقنية الذكاء الاصطناعي المتقدمة مع نماذج NLP وتعلم آلي حديثة.",
                        he: "טכנולוגיית AI מתקדמת עם מודלים מתקדמים של NLP ולמידת מכונה."
                      },
                      {
                        en: "Data-driven insights and analytics for continuous improvement and optimization.",
                        ar: "رؤى وتحليلات قائمة على البيانات للتحسين المستمر والتطوير.",
                        he: "תובנות וניתוחים מבוססי נתונים לשיפור מתמיד ואופטימיזציה."
                      }
                    ][idx][language.code]
                  }</span>
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
  const reasons = [
    {
      title: "Advanced AI Technology",
      desc: "Built with state-of-the-art machine learning models and natural language processing capabilities.",
      stat: "99.5%"
    },
    {
      title: "Cost-Effective Solution",
      desc: "Reduce customer support costs by up to 70% while improving response times and satisfaction.",
      stat: "70%"
    },
    {
      title: "Scalable & Reliable",
      desc: "Handle unlimited conversations simultaneously with enterprise-grade reliability and uptime.",
      stat: "99.9%"
    },
    {
      title: "Easy Integration",
      desc: "Simple API integration with popular platforms and custom development support.",
      stat: "24hrs"
    }
  ];

  return (
    <section className={`${theme === "dark" ? "bg-[#0a0a0a]" : "bg-white"} py-20 px-6`}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto">
        <motion.h2 variants={fadeUp} className="text-4xl font-bold text-center mb-16">
          Why Choose <span className="text-[#19e6f7]">Our AI Chatbots</span>
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
                <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed">{reason.desc}</p>
            </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// 5. REAL LIFE USE CASES & APPLICATIONS SECTION
const UseCasesSection = ({ theme, language }) => {
  const useCases = [
    {
      icon: bankingPng,
      title: {
        en: 'Banking & Finance',
        ar: 'البنوك والتمويل',
        he: 'בנקאות ופיננסים'
      },
      desc: {
        en: 'Customer support automation, fraud detection, and financial advisory chatbots.',
        ar: 'أتمتة دعم العملاء، كشف الاحتيال، وشات بوتات الاستشارات المالية.',
        he: 'אוטומציה של תמיכת לקוחות, זיהוי הונאות וצ׳אטבוטים לייעוץ פיננסי.'
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
        en: 'Personalized shopping assistance, order tracking, and customer service automation.',
        ar: 'مساعدة تسوق مخصصة، تتبع الطلبات، وأتمتة خدمة العملاء.',
        he: 'סיוע קניות מותאם אישית, מעקב הזמנות ואוטומציה של שירות לקוחות.'
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
        en: 'Property search assistance, lead qualification, and virtual tour scheduling.',
        ar: 'مساعدة في البحث عن العقارات، تأهيل العملاء، وجدولة الجولات الافتراضية.',
        he: 'סיוע בחיפוש נכסים, סינון לידים ותיאום סיורים וירטואליים.'
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
        en: 'Booking assistance, travel recommendations, and guest service automation.',
        ar: 'مساعدة في الحجز، توصيات السفر، وأتمتة خدمة الضيوف.',
        he: 'סיוע בהזמנות, המלצות נסיעה ואוטומציה של שירות אורחים.'
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
        en: 'Appointment scheduling, symptom checking, and patient support automation.',
        ar: 'جدولة المواعيد، فحص الأعراض، وأتمتة دعم المرضى.',
        he: 'תיאום תורים, בדיקת סימפטומים ואוטומציה של תמיכת מטופלים.'
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
        en: 'Student support, course guidance, and automated tutoring assistance.',
        ar: 'دعم الطلاب، إرشاد الدورات، ومساعدة تعليمية آلية.',
        he: 'תמיכה לסטודנטים, הנחיית קורסים וסיוע לימודי אוטומטי.'
      }
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#19e6f7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-extrabold text-black mb-6">{
            {
              en: "Real-Life Use Cases & Applications",
              ar: "حالات استخدام وتطبيقات واقعية",
              he: "מקרי שימוש ויישומים אמיתיים"
            }[language.code]
          }</h2>
          <p className="text-lg text-black max-w-3xl mx-auto mb-12 leading-relaxed">
            {
              {
                en: "Discover how AI chatbots are revolutionizing businesses across industries, providing intelligent content creation, accelerated development, and enhanced productivity. Our solutions adapt to your specific industry needs, delivering measurable results and ROI.",
                ar: "اكتشف كيف تغير شات بوتات الذكاء الاصطناعي الأعمال عبر الصناعات، وتوفر إنشاء محتوى ذكي، وتطوير سريع، وزيادة الإنتاجية. حلولنا تتكيف مع احتياجات صناعتك وتقدم نتائج قابلة للقياس وعائد استثمار.",
                he: "גלה כיצד צ'אטבוטי AI משנים עסקים בענפים שונים, מספקים יצירת תוכן חכמה, פיתוח מואץ ופרודוקטיביות מוגברת. הפתרונות שלנו מותאמים לצרכים שלך ומספקים תוצאות מדידות והחזר השקעה."
              }[language.code]
            }
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {useCases.map((useCase, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-4">
                <img src={useCase.icon} loading="lazy" alt={useCase.title} className="w-12 h-12 object-contain" />
              </div>
              <div className="font-bold text-base text-black mb-2">{useCase.title[language.code]} .{idx + 1}</div>
              <div className="text-sm text-black leading-relaxed">{useCase.desc[language.code]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 6. PRICING SECTION
const PricingSection = ({ theme, language }) => {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      desc: {
        en: "Perfect for small businesses",
        ar: "مثالي للشركات الصغيرة",
        he: "מושלם לעסקים קטנים"
      },
      features: [
        {
          en: "Basic AI Chatbot",
          ar: "شات بوت ذكاء اصطناعي أساسي",
          he: "צ'אטבוט AI בסיסי"
        },
        {
          en: "Up to 1,000 conversations/month",
          ar: "حتى 1000 محادثة شهريًا",
          he: "עד 1,000 שיחות בחודש"
        },
        {
          en: "Email Support",
          ar: "دعم عبر البريد الإلكتروني",
          he: "תמיכה בדוא\"ל"
        },
        {
          en: "Basic Analytics",
          ar: "تحليلات أساسية",
          he: "אנליטיקה בסיסית"
        },
        {
          en: "Website Integration",
          ar: "تكامل مع الموقع الإلكتروني",
          he: "אינטגרציה לאתר"
        }
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      desc: {
        en: "Ideal for growing companies",
        ar: "مثالي للشركات المتنامية",
        he: "אידיאלי לחברות בצמיחה"
      },
      features: [
        {
          en: "Advanced AI with NLP",
          ar: "ذكاء اصطناعي متقدم مع معالجة اللغة الطبيعية",
          he: "AI מתקדם עם NLP"
        },
        {
          en: "Unlimited conversations",
          ar: "محادثات غير محدودة",
          he: "שיחות ללא הגבלה"
        },
        {
          en: "Priority Support",
          ar: "دعم أولوية",
          he: "תמיכה בעדיפות"
        },
        {
          en: "Advanced Analytics Dashboard",
          ar: "لوحة تحكم تحليلات متقدمة",
          he: "לוח אנליטיקה מתקדם"
        },
        {
          en: "Multi-platform Integration",
          ar: "تكامل متعدد المنصات",
          he: "אינטגרציה רב-פלטפורמית"
        },
        {
          en: "Custom Branding",
          ar: "علامة تجارية مخصصة",
          he: "מיתוג מותאם אישית"
        },
        {
          en: "API Access",
          ar: "وصول إلى API",
          he: "גישה ל-API"
        }
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      desc: {
        en: "For large organizations",
        ar: "للمنظمات الكبيرة",
        he: "לארגונים גדולים"
      },
      features: [
        {
          en: "Custom AI Training",
          ar: "تدريب ذكاء اصطناعي مخصص",
          he: "הדרכת AI מותאמת אישית"
        },
        {
          en: "Dedicated Account Manager",
          ar: "مدير حساب مخصص",
          he: "מנהל חשבון ייעודי"
        },
        {
          en: "24/7 Phone Support",
          ar: "دعم هاتفي على مدار الساعة",
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
          en: "SLA Guarantee",
          ar: "ضمان اتفاقية مستوى الخدمة",
          he: "אחריות SLA"
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
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 flex flex-col h-full ${plan.popular ? `border-[#19e6f7] -mt-8 z-10 ${theme === "dark" ? "bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]" : "bg-black"}` : `${theme === "dark" ? "border-gray-700 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]" : "border-gray-300 bg-black"}`} hover:scale-110 hover:shadow-2xl hover:shadow-[#19e6f7]/40`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#19e6f7] text-black px-4 py-2 rounded-full font-semibold text-sm">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 text-white`}>{plan.name}</h3>
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
                {plan.name === "Enterprise" ? (
                  {
                    en: "Contact Sales",
                    ar: "اتصل بالمبيعات",
                    he: "צור קשר עם המכירות"
                  }[language.code]
                ) : (
                  {
                    en: "Get Started",
                    ar: "ابدأ الآن",
                    he: "התחל עכשיו"
                  }[language.code]
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// Main Component
const AIChatbotsAssistants = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  return (
    <main className={`${theme === "dark" ? "bg-[#0a0a0a] text-white" : "bg-white text-black"}`}
      dir={language.dir} lang={language.code}>
      <HeroSection theme={theme} language={language} />
      <HowItWorksSection theme={theme} language={language} />
      <FeaturesBenefitsSection theme={theme} language={language} />
      <BenefitsSection theme={theme} language={language} />
      <UseCasesSection theme={theme} language={language} />
      <PricingSection theme={theme} language={language} />
    </main>
  );
};

export default AIChatbotsAssistants;