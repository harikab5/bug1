import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import nlpHeroVideo from "../assets/NLP & Language Intelligence.mp4";
import { useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import howItWorksImg from '../assets/NLP & Language Intelligence1.jpg';
import agentImg from '../assets/NLP & Language Intelligence2.jpeg.jpg';
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

if (typeof document !== 'undefined' && !document.getElementById('nlp-style')) {
  const style = document.createElement('style');
  style.id = 'nlp-style';
  style.innerHTML = styleSheet;
  document.head.appendChild(style);
}

// Animation variants
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
// 1. HERO SECTION
const HeroSection = ({ theme, language }) => {
  const t = {
    title: {
      en: "NLP & Language Intelligence",
      ar: "الذكاء اللغوي ومعالجة اللغة الطبيعية",
      he: "NLP ואינטליגנציה לשונית"
    },
    subtitle: {
      en: "Advanced natural language processing that understands context, sentiment, and intent to enable intelligent communication and automation across all languages.",
      ar: "معالجة لغوية طبيعية متقدمة تفهم السياق والمشاعر والنوايا لتمكين التواصل الذكي والأتمتة بجميع اللغات.",
      he: "עיבוד שפה טבעית מתקדם שמבין הקשר, רגש וכוונה לאפשר תקשורת חכמה ואוטומציה בכל השפות."
    },
    desc: {
      en: "From sentiment analysis and language translation to conversational AI and text generation, our NLP solutions transform how you understand and interact with language data.",
      ar: "من تحليل المشاعر والترجمة اللغوية إلى الذكاء الاصطناعي الحواري وتوليد النصوص، حلولنا تغير طريقة فهمك وتفاعلك مع البيانات اللغوية.",
      he: "מניתוח רגשות ותרגום שפה ועד AI שיחתי ויצירת טקסט, הפתרונות שלנו משנים את הדרך בה אתה מבין ומנתח נתוני שפה."
    },
    button: {
      en: "Explore NLP Solutions",
      ar: "استكشف حلول الذكاء اللغوي",
      he: "גלה פתרונות NLP"
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
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={nlpHeroVideo}
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
  const steps = [
    {
      en: "Input Text or Speech",
      ar: "إدخال نص أو كلام",
      he: "קלט טקסט או דיבור"
    },
    {
      en: "Language Processing",
      ar: "معالجة اللغة",
      he: "עיבוד שפה"
    },
    {
      en: "Intelligence Extraction",
      ar: "استخراج الذكاء",
      he: "חילוץ תובנות"
    },
    {
      en: "Analysis & Insights",
      ar: "تحليل ورؤى",
      he: "ניתוח ותובנות"
    },
    {
      en: "Generate Response",
      ar: "توليد استجابة",
      he: "יצירת תגובה"
    }
  ];
  const sectionTitle = {
    en: "How it Works",
    ar: "كيف يعمل",
    he: "איך זה עובד"
  };
  const sectionSubtitle = {
    en: "Step-by-Step: NLP Processing",
    ar: "خطوة بخطوة: معالجة اللغة الطبيعية",
    he: "שלב אחר שלב: עיבוד שפה טבעית"
  };
  const buttonText = {
    en: "Get Started with NLP",
    ar: "ابدأ مع NLP",
    he: "התחל עם NLP"
  };
  return (
    <section className={`py-20 px-4 ${theme === "dark" ? "bg-[#0a0a0a]" : "bg-gray-100"}`}> 
      <div className="max-w-6xl mx-auto">
        {/* Centered Heading */}
        <div className="text-center mb-12">
          <div className="text-[#19e6f7] text-lg font-semibold mb-2">{sectionTitle[language.code]}</div>
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-8 text-center ${theme === "dark" ? "text-white" : "text-black"}`}>{sectionSubtitle[language.code]}</h2>
        </div>
        {/* Content and Image Container */}
        <div className="flex flex-col md:flex-row items-stretch gap-12">
          {/* Left: Steps */}
          <div className="flex-1 flex flex-col justify-center items-start md:pr-12">
            <ol className="space-y-6 mb-8 pb-4">
              {steps.map((step, idx) => (
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
              className={`mt-2 px-7 py-3 rounded-lg font-semibold text-lg shadow transition-all duration-300 cursor-pointer ${theme === "dark" ? "bg-gradient-to-r from-[#19e6f7] to-[#179b8e] text-white" : "bg-black text-white"}`}>{buttonText[language.code]}</button>
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
        en: "Advanced text analysis and understanding capabilities with context-aware language processing.",
        ar: "تحليل نصوص متقدم وفهم دقيق للسياق باستخدام معالجة لغوية ذكية.",
        he: "ניתוח טקסט מתקדם והבנה עם עיבוד שפה מודע להקשר."
      },
      icon: "🧠"
    },
    {
      title: {
        en: "Voice & Speech Recognition",
        ar: "التعرف على الصوت والكلام",
        he: "זיהוי קול ודיבור"
      },
      desc: {
        en: "High-accuracy speech-to-text and voice command processing with noise cancellation.",
        ar: "تحويل الكلام إلى نص بدقة عالية ومعالجة أوامر صوتية مع إلغاء الضوضاء.",
        he: "המרת דיבור לטקסט מדויקת במיוחד ועיבוד פקודות קוליות עם סינון רעשים."
      },
      icon: "🎤"
    },
    {
      title: {
        en: "Sentiment Analysis",
        ar: "تحليل المشاعر",
        he: "ניתוח רגשות"
      },
      desc: {
        en: "Detect and analyze emotions, opinions, and sentiment in text and speech across multiple languages.",
        ar: "كشف وتحليل المشاعر والآراء في النصوص والكلام بعدة لغات.",
        he: "זיהוי וניתוח רגשות, דעות ותחושות בטקסט ודיבור במספר שפות."
      },
      icon: "😊"
    },
    {
      title: {
        en: "Language Translation",
        ar: "الترجمة اللغوية",
        he: "תרגום שפה"
      },
      desc: {
        en: "Real-time translation across 50+ languages with context preservation and cultural adaptation.",
        ar: "ترجمة فورية لأكثر من 50 لغة مع الحفاظ على السياق والتكيف الثقافي.",
        he: "תרגום בזמן אמת ל-50+ שפות עם שמירה על הקשר והתאמה תרבותית."
      },
      icon: "🌍"
    },
    {
      title: {
        en: "Text Generation",
        ar: "توليد النصوص",
        he: "יצירת טקסט"
      },
      desc: {
        en: "Create human-like text content, summaries, and responses using advanced language models.",
        ar: "إنشاء نصوص شبيهة بالبشر وملخصات وردود باستخدام نماذج لغوية متقدمة.",
        he: "יצירת טקסטים דמויי אדם, סיכומים ותשובות עם מודלים לשוניים מתקדמים."
      },
      icon: "✍"
    },
    {
      title: {
        en: "Conversational AI",
        ar: "الذكاء الاصطناعي الحواري",
        he: "בינה מלאכותית שיחתית"
      },
      desc: {
        en: "Build intelligent chatbots and virtual assistants with natural conversation capabilities.",
        ar: "بناء روبوتات دردشة ومساعدين افتراضيين بقدرات محادثة طبيعية.",
        he: "בניית צ'אטבוטים ועוזרים וירטואליים חכמים עם יכולות שיחה טבעיות."
      },
      icon: "💬"
    }
  ];
  return (
    <section id="features-section" className="w-full h-full pt-0 pb-0 px-4 relative overflow-hidden bg-[#19e6f7]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-0 items-center relative z-10 -space-x-8">
        {/* Left: Heading and Button */}
        <div className="flex-1 flex flex-col justify-center items-start mb-10 md:mb-0 md:pr-8">
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-2 mt-0 ${theme === 'dark' ? 'text-black' : 'text-white'}`}>
            {{
              en: "Features & Benefits",
              ar: "المميزات والفوائد",
              he: "תכונות ויתרונות"
            }[language.code]}
          </h2>
          <div className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-white'}`}>{{
            en: "Create Content & Code Like Never Before",
            ar: "أنشئ محتوى وكود كما لم يحدث من قبل",
            he: "צור תוכן וקוד כמו שלא היה מעולם"
          }[language.code]}</div>
          <p className={`text-xl mb-6 max-w-md ${theme === 'dark' ? 'text-white' : 'text-white'}`}>{{
            en: "Our AI-powered platform generates high-quality content and functional code, saving you hours of writing and development time while maintaining originality and creativity.",
            ar: "منصتنا المدعومة بالذكاء الاصطناعي تنشئ محتوى عالي الجودة وكود وظيفي، وتوفر عليك ساعات من الكتابة والتطوير مع الحفاظ على الأصالة والإبداع.",
            he: "הפלטפורמה שלנו מייצרת תוכן איכותי וקוד פונקציונלי, חוסכת שעות כתיבה ופיתוח תוך שמירה על מקוריות ויצירתיות."
          }[language.code]}</p>
          <ul className={`list-disc pl-5 text-lg mb-8 space-y-2 ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
            <li>{{
              en: "Generate content and code in seconds, not hours",
              ar: "أنشئ محتوى وكود في ثوانٍ وليس ساعات",
              he: "צור תוכן וקוד בשניות, לא שעות"
            }[language.code]}</li>
            <li>{{
              en: "Maintain brand voice and coding standards",
              ar: "حافظ على هوية العلامة التجارية ومعايير البرمجة",
              he: "שמור על קול המותג וסטנדרטים של קוד"
            }[language.code]}</li>
            <li>{{
              en: "24/7 content and code generation",
              ar: "توليد محتوى وكود على مدار الساعة",
              he: "יצירת תוכן וקוד 24/7"
            }[language.code]}</li>
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
    {
      en: "Automate language tasks and reduce manual work by up to 80% with advanced NLP algorithms.",
      ar: "أتمتة المهام اللغوية وتقليل العمل اليدوي بنسبة تصل إلى 80% باستخدام خوارزميات NLP متقدمة.",
      he: "אוטומציה של משימות שפה וצמצום עבודה ידנית ב-80% עם אלגוריתמים מתקדמים."
    },
    {
      en: "Enhance customer experience with real-time sentiment analysis and personalized communication.",
      ar: "تعزيز تجربة العملاء من خلال تحليل المشاعر الفوري والتواصل المخصص.",
      he: "שיפור חווית לקוח עם ניתוח רגשות בזמן אמת ותקשורת מותאמת אישית."
    },
    {
      en: "Expand global reach with instant language translation and multilingual support.",
      ar: "توسيع الوصول العالمي من خلال الترجمة الفورية ودعم متعدد اللغات.",
      he: "הרחבת נגישות גלובלית עם תרגום מיידי ותמיכה רב-לשונית."
    },
    {
      en: "Gain actionable insights from text, speech, and conversation data for better decision-making.",
      ar: "الحصول على رؤى قابلة للتنفيذ من بيانات النص والكلام والمحادثة لاتخاذ قرارات أفضل.",
      he: "קבלת תובנות מהנתונים לשיחה, טקסט ודיבור לקבלת החלטות טובות יותר."
    },
    {
      en: "Improve operational efficiency and reduce costs with automated language workflows.",
      ar: "تحسين الكفاءة التشغيلية وتقليل التكاليف من خلال سير عمل لغوي آلي.",
      he: "שיפור יעילות תפעולית והפחתת עלויות עם תהליכי שפה אוטומטיים."
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
            <img src={agentImg} loading="lazy" alt="NLP Tools" className="w-full h-full object-cover rounded-2xl shadow-xl relative z-10" style={{minHeight: '400px'}} />
            {/* Clean border only */}
            <div className="absolute inset-0 rounded-2xl border-2 border-[#19e6f7] shadow-[0_0_20px_rgba(25,230,247,0.6)]"></div>
          </div>
        </div>
        {/* Right: Benefits List */}
        <div className="flex-1 flex flex-col justify-center h-full">
          <div className="text-justify h-full flex flex-col justify-center">
            <p className={`text-lg mb-8 ${theme === "dark" ? "text-white" : "text-black"}`}>{
              {
                en: "Our NLP solutions deliver measurable business value, helping you automate language tasks, boost efficiency, and reduce costs.",
                ar: "حلول NLP الخاصة بنا تقدم قيمة أعمال قابلة للقياس، وتساعدك على أتمتة المهام اللغوية، وزيادة الكفاءة، وتقليل التكاليف.",
                he: "הפתרונות שלנו ל-NLP מספקים ערך עסקי מדיד, עוזרים לך לאוטומט משימות שפה, לשפר יעילות ולהפחית עלויות."
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
}

// 5. REAL LIFE USE CASES & APPLICATIONS SECTION
const UseCasesSection = ({ theme }) => {
  // Already uses translation logic for all titles and cards
};

// 6. PRICING SECTION
const PricingSection = ({ theme, language }) => {
  // Translation objects for key terms
  const customText = { en: "Custom", ar: "مخصص", he: "מותאם אישית" };
  const monthText = { en: "month", ar: "شهريًا", he: "לחודש" };
  const apiText = { en: "API", ar: "API", he: "API" };
  const slaText = { en: "SLA", ar: "SLA", he: "SLA" };
  const nlpText = { en: "NLP", ar: "NLP", he: "NLP" };

  const plans = [
    {
      name: {
        en: "Starter",
        ar: "مبتدئ",
        he: "מתחיל"
      },
      price: "$99",
      period: monthText[language.code] ? `/ ${monthText[language.code]}` : "",
      desc: {
        en: "Perfect for small businesses",
        ar: "مثالي للشركات الصغيرة",
        he: "מושלם לעסקים קטנים"
      },
      features: [
        {
          en: `Basic ${nlpText[language.code] || "NLP"} Processing`,
          ar: `معالجة ${nlpText[language.code] || "NLP"} أساسية`,
          he: `עיבוד ${nlpText[language.code] || "NLP"} בסיסי`
        },
        {
          en: `Up to 10,000 ${(apiText && apiText[language.code]) || "API"} calls/${monthText[language.code] || "month"}`,
          ar: `حتى 10,000 مكالمة ${(apiText && apiText[language.code]) || "API"} ${monthText[language.code] || "شهريًا"}`,
          he: `עד 10,000 קריאות ${(apiText && apiText[language.code]) || "API"} ב${monthText[language.code] || "לחודש"}`
        },
        {
          en: "Email Support",
          ar: "دعم عبر البريد الإلكتروني",
          he: "תמיכה בדוא\"ל"
        }
      ],
      popular: false
    },
    {
      name: {
        en: "Professional",
        ar: "احترافي",
        he: "מקצועי"
      },
      price: "$299",
      period: monthText[language.code] ? `/ ${monthText[language.code]}` : "",
      desc: {
        en: "For growing teams and professionals",
        ar: "للفرق المتنامية والمحترفين",
        he: "לצוותים מתפתחים ואנשי מקצוע"
      },
      features: [
        {
          en: `Advanced ${nlpText[language.code] || "NLP"} Processing`,
          ar: `معالجة ${nlpText[language.code] || "NLP"} متقدمة`,
          he: `עיבוד ${nlpText[language.code] || "NLP"} מתקדם`
        },
        {
          en: `Up to 100,000 ${(apiText && apiText[language.code]) || "API"} calls/${monthText[language.code] || "month"}`,
          ar: `حتى 100,000 مكالمة ${(apiText && apiText[language.code]) || "API"} ${monthText[language.code] || "شهريًا"}`,
          he: `עד 100,000 קריאות ${(apiText && apiText[language.code]) || "API"} ב${monthText[language.code] || "לחודש"}`
        },
        {
          en: "Priority Email Support",
          ar: "دعم عبر البريد الإلكتروني أولوية",
          he: "תמיכה בדוא\"ל עדיפות"
        },
        {
          en: "Team Collaboration Tools",
          ar: "أدوات التعاون بين الفرق",
          he: "כלי שיתוף פעולה לצוותים"
        }
      ],
      popular: true
    },
    {
      name: {
        en: "Enterprise",
        ar: "مؤسسة",
        he: "ארגון"
      },
      price: customText && customText[language.code] ? customText[language.code] : "Custom",
      period: "",
      desc: {
        en: "For large organizations",
        ar: "للمنظمات الكبيرة",
        he: "לארגונים גדולים"
      },
      features: [
        {
          en: `Custom Language Models`,
          ar: `نماذج لغوية ${(customText && customText[language.code]) || "مخصص"}`,
          he: `מודלים לשוניים ${(customText && customText[language.code]) || "מותאם אישית"}`
        },
        {
          en: "Dedicated Account Manager",
          ar: "مدير حساب مخصص",
          he: "מנהל חשבון ייעודי"
        },
        {
          en: "24/7 Phone Support",
          ar: "دعم هاتفي 24/7",
          he: "תמיכה טלפונית 24/7"
        },
        {
          en: `Custom Integrations`,
          ar: `تكاملات ${(customText && customText[language.code]) || "مخصص"}`,
          he: `אינטגרציות ${(customText && customText[language.code]) || "מותאם אישית"}`
        },
        {
          en: "Advanced Security",
          ar: "أمان متقدم",
          he: "אבטחה מתקדמת"
        },
        {
          en: `SLA Guarantee`,
          ar: `ضمان ${(slaText && slaText[language.code]) || "SLA"}`,
          he: `אחריות ${(slaText && slaText[language.code]) || "SLA"}`
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

  const mostPopularText = {
    en: "Most Popular",
    ar: "الأكثر شهرة",
    he: "הפופולרי ביותר"
  };
  const getStartedText = {
    en: "Get Started",
    ar: "ابدأ الآن",
    he: "התחל"
  };
  const contactSalesText = {
    en: "Contact Sales",
    ar: "تواصل مع المبيعات",
    he: "צור קשר עם מכירות"
  };
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
                <h3 className={`text-2xl font-bold mb-2 text-white`}>{plan.name && plan.name[language.code] ? plan.name[language.code] : ""}</h3>
                <p className="mb-4 text-white/80">{plan.desc && plan.desc[language.code] ? plan.desc[language.code] : ""}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-[#19e6f7]">{plan.price || ""}</span>
                  <span className="ml-1 text-white/80">{plan.period || ""}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features && plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#19e6f7] rounded-full"></div>
                    <span className="text-gray-300">{feature && feature[language.code] ? feature[language.code] : ""}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 mt-auto ${
                  plan.popular
                    ? 'bg-[#19e6f7] text-black hover:bg-[#179b8e]'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                {index === 1 ? contactSalesText[language.code] : getStartedText[language.code]}
              </button>
            </motion.div>
          ))}
      </div>
    </motion.div>
  </section>
);
};

// Main Component
const NLPLanguageIntelligence = () => {
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

export default NLPLanguageIntelligence;