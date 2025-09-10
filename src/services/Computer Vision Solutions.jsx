import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import heroVideo from "../assets/Computer Vision Solutions.mp4";
import { useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import howItWorksImg from '../assets/Computer Vision Solutions1.webp';
import agentImg from '../assets/Computer Vision Solutions2.jpg';
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

if (typeof document !== 'undefined' && !document.getElementById('computer-vision-style')) {
  const style = document.createElement('style');
  style.id = 'computer-vision-style';
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
      en: "Computer Vision Solutions",
      ar: "حلول الرؤية الحاسوبية",
      he: "פתרונות ראייה ממוחשבת"
    },
    subtitle: {
      en: "Advanced image and video analysis that sees, understands, and interprets visual data to automate processes and extract valuable insights in real-time.",
      ar: "تحليل متقدم للصور والفيديو يرى ويفهم ويفسر البيانات البصرية لأتمتة العمليات واستخلاص رؤى قيمة في الوقت الفعلي.",
      he: "ניתוח תמונה ווידאו מתקדם שרואה, מבין ומפרש נתונים חזותיים לאוטומציה והפקת תובנות בזמן אמת."
    },
    desc: {
      en: "From object detection and facial recognition to quality inspection and document processing, our computer vision solutions transform how you analyze and interact with visual data.",
      ar: "من اكتشاف الأجسام والتعرف على الوجوه إلى فحص الجودة ومعالجة المستندات، حلول الرؤية الحاسوبية لدينا تغير طريقة تحليلك وتفاعلك مع البيانات البصرية.",
      he: "מזיהוי אובייקטים וזיהוי פנים ועד בדיקת איכות ועיבוד מסמכים, פתרונות הראייה הממוחשבת שלנו משנים את אופן הניתוח והאינטראקציה שלך עם נתונים חזותיים."
    },
    button: {
      en: "Explore Vision Solutions",
      ar: "استكشف حلول الرؤية",
      he: "גלה פתרונות ראייה"
    }
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={fadeUp}
      className={`relative text-white py-20 text-center shadow-2xl overflow-hidden w-full px-4 md:px-8 lg:px-16 bg-black min-h-[700px]`}
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
const HowItWorksSection = ({ theme }) => {
  const { language } = useLanguage();
  const t = {
    steps: [
      {
        en: "Capture Visual Data",
        ar: "التقاط البيانات البصرية",
        he: "לכוד נתונים חזותיים"
      },
      {
        en: "Preprocess Images",
        ar: "معالجة الصور مسبقًا",
        he: "קדם עיבוד תמונות"
      },
      {
        en: "AI Analysis",
        ar: "تحليل الذكاء الاصطناعي",
        he: "ניתוח AI"
      },
      {
        en: "Extract Insights",
        ar: "استخراج الرؤى",
        he: "הפק תובנות"
      },
      {
        en: "Generate Actions",
        ar: "توليد الإجراءات",
        he: "צור פעולות"
      }
    ],
    heading: {
      en: "How it Works",
      ar: "كيف يعمل",
      he: "איך זה עובד"
    },
    subheading: {
      en: "Step-by-Step: Computer Vision Process",
      ar: "خطوة بخطوة: عملية الرؤية الحاسوبية",
      he: "שלב-אחר-שלב: תהליך ראייה ממוחשבת"
    },
    button: {
      en: "Get Started with Vision",
      ar: "ابدأ مع الرؤية",
      he: "התחל עם ראייה"
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
  const { language } = useLanguage();
  const features = [
    {
      title: {
        en: "Image Recognition",
        ar: "التعرف على الصور",
        he: "זיהוי תמונה"
      },
      desc: {
        en: "Identify objects, people, and scenes in images with high accuracy using advanced deep learning algorithms.",
        ar: "تحديد الأجسام والأشخاص والمشاهد في الصور بدقة عالية باستخدام خوارزميات تعلم عميق متقدمة.",
        he: "זהה אובייקטים, אנשים וסצנות בתמונות בדיוק גבוה עם אלגוריתמים מתקדמים."
      },
      icon: "👁"
    },
    {
      title: {
        en: "Video Analysis",
        ar: "تحليل الفيديو",
        he: "ניתוח וידאו"
      },
      desc: {
        en: "Process and analyze video content for real-time insights, object tracking, and automated monitoring.",
        ar: "معالجة وتحليل محتوى الفيديو لرؤى فورية وتتبع الأجسام والمراقبة الآلية.",
        he: "נתח תוכן וידאו לתובנות בזמן אמת, מעקב אובייקטים וניטור אוטומטי."
      },
      icon: "🎥"
    },
    {
      title: {
        en: "Object Detection",
        ar: "اكتشاف الأجسام",
        he: "זיהוי אובייקטים"
      },
      desc: {
        en: "Detect and track objects in images and videos for security, retail, and industrial applications.",
        ar: "اكتشاف وتتبع الأجسام في الصور والفيديوهات للتطبيقات الأمنية والتجارية والصناعية.",
        he: "זהה ועקוב אחרי אובייקטים בתמונות ווידאו לאבטחה, קמעונאות ותעשייה."
      },
      icon: "🎯"
    },
    {
      title: {
        en: "Facial Recognition",
        ar: "التعرف على الوجوه",
        he: "זיהוי פנים"
      },
      desc: {
        en: "Identify and verify individuals for security, access control, and personalized user experiences.",
        ar: "تحديد والتحقق من الأفراد للأمان والتحكم في الوصول وتجارب المستخدم المخصصة.",
        he: "זהה ואמת אנשים לאבטחה, בקרת גישה וחוויות משתמש מותאמות."
      },
      icon: "👤"
    },
    {
      title: {
        en: "Quality Inspection",
        ar: "فحص الجودة",
        he: "בדיקת איכות"
      },
      desc: {
        en: "Automate quality control processes in manufacturing with defect detection and measurement accuracy.",
        ar: "أتمتة عمليات مراقبة الجودة في التصنيع مع اكتشاف العيوب ودقة القياس.",
        he: "אוטומציה של בקרת איכות בייצור עם זיהוי פגמים ודיוק מדידה."
      },
      icon: "🔍"
    },
    {
      title: {
        en: "Document Processing",
        ar: "معالجة المستندات",
        he: "עיבוד מסמכים"
      },
      desc: {
        en: "Extract text and data from images and scanned documents with OCR and intelligent parsing.",
        ar: "استخراج النصوص والبيانات من الصور والمستندات الممسوحة ضوئيًا باستخدام OCR وتحليل ذكي.",
        he: "חלץ טקסט ונתונים מתמונות ומסמכים סרוקים עם OCR וניתוח חכם."
      },
      icon: "📄"
    }
  ];
  return (
    <section id="features-section" className="w-full h-full pt-0 pb-0 px-4 relative overflow-hidden bg-[#19e6f7]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-0 items-center relative z-10 -space-x-8">
        {/* Left: Heading and Button */}
        <div className="flex-1 flex flex-col justify-center items-start mb-10 md:mb-0 md:pr-8">
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-2 mt-0 ${theme === 'dark' ? 'text-black' : 'text-white'}`}>{
            {
              en: "Features & Benefits",
              ar: "المميزات والفوائد",
              he: "תכונות ויתרונות"
            }[language.code]
          }</h2>
          <div className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-white'}`}>{
            {
              en: "See the World with AI-Powered Vision",
              ar: "شاهد العالم برؤية مدعومة بالذكاء الاصطناعي",
              he: "ראה את העולם עם ראייה מבוססת AI"
            }[language.code]
          }</div>
          <p className={`text-xl mb-6 max-w-md ${theme === 'dark' ? 'text-white' : 'text-white'}`}>{
            {
              en: "Our computer vision platform analyzes images and videos, automates visual tasks, and delivers actionable insights for your business.",
              ar: "منصة الرؤية الحاسوبية لدينا تحلل الصور والفيديوهات، وتؤتمت المهام البصرية، وتقدم رؤى قابلة للتنفيذ لأعمالك.",
              he: "הפלטפורמה שלנו לראייה ממוחשבת מנתחת תמונות ווידאו, מאוטומטת משימות חזותיות ומספקת תובנות לעסק שלך."
            }[language.code]
          }</p>
          <ul className={`list-disc pl-5 text-lg mb-8 space-y-2 ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
            <li>{
              {
                en: "Automate visual tasks in seconds",
                ar: "أتمت المهام البصرية في ثوانٍ",
                he: "אוטומציה של משימות חזותיות בשניות"
              }[language.code]
            }</li>
            <li>{
              {
                en: "Integrate with your business systems",
                ar: "تكامل مع أنظمة عملك",
                he: "אינטגרציה עם מערכות העסק שלך"
              }[language.code]
            }</li>
            <li>{
              {
                en: "24/7 visual data processing",
                ar: "معالجة بيانات بصرية على مدار الساعة",
                he: "עיבוד נתונים חזותיים 24/7"
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
      en: "Automate visual processes and reduce manual work by up to 90% with intelligent computer vision algorithms.",
      ar: "أتمتة العمليات البصرية وتقليل العمل اليدوي بنسبة تصل إلى 90% باستخدام خوارزميات الرؤية الحاسوبية الذكية.",
      he: "הפוך תהליכים חזותיים לאוטומטיים וצמצם עבודה ידנית ב-90% עם אלגוריתמים חכמים."
    },
    {
      en: "Enhance security and safety through real-time visual monitoring, detection, and alert systems.",
      ar: "تعزيز الأمان والسلامة من خلال المراقبة البصرية الفورية وأنظمة الكشف والتنبيه.",
      he: "שפר אבטחה ובטיחות עם ניטור חזותי בזמן אמת, זיהוי והתראות."
    },
    {
      en: "Ensure consistent quality with automated visual inspection that catches defects humans might miss.",
      ar: "ضمان جودة متسقة من خلال الفحص البصري الآلي الذي يكتشف العيوب التي قد يغفلها البشر.",
      he: "הבטח איכות עקבית עם בדיקה חזותית אוטומטית שמאתרת פגמים שבני אדם מפספסים."
    },
    {
      en: "Extract valuable information from images and documents efficiently with OCR and data extraction.",
      ar: "استخراج معلومات قيمة من الصور والمستندات بكفاءة باستخدام OCR واستخراج البيانات.",
      he: "חלץ מידע חשוב מתמונות ומסמכים ביעילות עם OCR וחילוץ נתונים."
    },
    {
      en: "Get instant visual insights for faster decision-making and improved operational efficiency.",
      ar: "احصل على رؤى بصرية فورية لاتخاذ قرارات أسرع وتحسين الكفاءة التشغيلية.",
      he: "קבל תובנות חזותיות מיידיות להחלטות מהירות ויעילות תפעולית משופרת."
    }
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
            <img src={agentImg} loading="lazy" alt="Computer Vision Tools" className="w-full h-full object-cover rounded-2xl shadow-xl relative z-10" style={{minHeight: '400px'}} />
            {/* Clean border only */}
            <div className="absolute inset-0 rounded-2xl border-2 border-[#19e6f7] shadow-[0_0_20px_rgba(25,230,247,0.6)]"></div>
          </div>
        </div>
        {/* Right: Benefits List */}
        <div className="flex-1 flex flex-col justify-center h-full">
          <div className="text-justify h-full flex flex-col justify-center">
            <p className={`text-lg mb-8 ${theme === "dark" ? "text-white" : "text-black"}`}>{
              {
                en: "Our computer vision solutions deliver measurable business value, helping you automate visual tasks, boost efficiency, and reduce costs.",
                ar: "حلول الرؤية الحاسوبية لدينا تقدم قيمة أعمال قابلة للقياس، وتساعدك على أتمتة المهام البصرية، وزيادة الكفاءة، وتقليل التكاليف.",
                he: "הפתרונות שלנו לראייה ממוחשבת מספקים ערך עסקי מדיד, עוזרים לך לאוטומט משימות חזותיות, לשפר יעילות ולהפחית עלויות."
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
  const reasons = [
    {
      title: "Advanced AI Technology",
      desc: "Built with state-of-the-art deep learning models and computer vision algorithms for superior accuracy.",
      stat: "99.5%"
    },
    {
      title: "Real-Time Processing",
      desc: "Analyze images and videos instantly with low latency and high throughput for immediate insights.",
      stat: "<50ms"
    },
    {
      title: "Multi-Format Support",
      desc: "Process images and videos in multiple formats including JPEG, PNG, MP4, and more with high compatibility.",
      stat: "20+"
    },
    {
      title: "Scalable Architecture",
      desc: "Handle unlimited visual processing requests with enterprise-grade reliability and performance.",
      stat: "99.9%"
    }
  ];

  return (
    <section className={`${theme === "dark" ? "bg-[#0a0a0a]" : "bg-white"} py-20 px-6`}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto">
        <motion.h2 variants={fadeUp} className="text-4xl font-bold text-center mb-16">
          Why Choose <span className="text-[#19e6f7]">Our Computer Vision Platform</span>
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
        en: 'Document verification, fraud detection, and automated check processing with computer vision.',
        ar: 'التحقق من المستندات، كشف الاحتيال، ومعالجة الشيكات تلقائيًا باستخدام الرؤية الحاسوبية.',
        he: 'אימות מסמכים, זיהוי הונאות ועיבוד שיקים אוטומטי עם ראייה ממוחשבת.'
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
        en: 'Product recognition, visual search, and automated inventory management with image analysis.',
        ar: 'التعرف على المنتجات، البحث البصري، وإدارة المخزون تلقائيًا بتحليل الصور.',
        he: 'זיהוי מוצרים, חיפוש חזותי וניהול מלאי אוטומטי עם ניתוח תמונה.'
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
        en: 'Property inspection, damage assessment, and automated property valuation using visual data.',
        ar: 'فحص العقارات، تقييم الأضرار، وتقييم العقارات تلقائيًا باستخدام البيانات البصرية.',
        he: 'בדיקת נכסים, הערכת נזקים והערכת נכסים אוטומטית עם נתונים חזותיים.'
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
        en: 'Guest recognition, security monitoring, and automated check-in systems with facial recognition.',
        ar: 'التعرف على الضيوف، مراقبة الأمان، وأنظمة تسجيل الوصول التلقائية باستخدام التعرف على الوجوه.',
        he: 'זיהוי אורחים, ניטור אבטחה ומערכות צ׳ק-אין אוטומטיות עם זיהוי פנים.'
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
        en: 'Medical imaging analysis, patient monitoring, and automated diagnosis assistance.',
        ar: 'تحليل الصور الطبية، مراقبة المرضى، والمساعدة في التشخيص التلقائي.',
        he: 'ניתוח תמונות רפואיות, ניטור מטופלים וסיוע באבחון אוטומטי.'
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
        en: 'Student attendance tracking, exam monitoring, and automated grading with visual recognition.',
        ar: 'تتبع حضور الطلاب، مراقبة الامتحانات، وتصحيح تلقائي باستخدام التعرف البصري.',
        he: 'מעקב נוכחות תלמידים, ניטור מבחנים ובדיקת ציונים אוטומטית עם זיהוי חזותי.'
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
          <p className="text-lg text-black max-w-3xl mx-auto mb-12 leading-relaxed">{
            {
              en: "Discover how computer vision tools are revolutionizing businesses across industries, providing intelligent content creation, accelerated development, and enhanced productivity. Our solutions adapt to your specific industry needs, delivering measurable results and ROI.",
              ar: "اكتشف كيف تغير أدوات الرؤية الحاسوبية الأعمال عبر الصناعات، وتوفر إنشاء محتوى ذكي، وتطوير سريع، وزيادة الإنتاجية. حلولنا تتكيف مع احتياجات صناعتك وتقدم نتائج قابلة للقياس وعائد استثمار.",
              he: "גלה כיצד כלי ראייה ממוחשבת משנים עסקים בענפים שונים, מספקים יצירת תוכן חכמה, פיתוח מואץ ופרודוקטיביות מוגברת. הפתרונות שלנו מותאמים לצרכים שלך ומספקים תוצאות מדידות והחזר השקעה."
            }[language.code]
          }</p>
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
  const mostPopularText = { en: "Most Popular", ar: "الأكثر شهرة", he: "הפופולרי ביותר" };
  const getStartedText = { en: "Get Started", ar: "ابدأ الآن", he: "התחל" };
  const contactSalesText = { en: "Contact Sales", ar: "اتصل بالمبيعات", he: "צור קשר עם המכירות" };
  const plans = [
    {
      name: {
        en: "Starter",
        ar: "مبتدئ",
        he: "מתחיל"
      },
      price: "$99",
      period: `/${monthText[language.code]}`,
      desc: {
        en: "Perfect for small businesses",
        ar: "مثالي للشركات الصغيرة",
        he: "מושלם לעסקים קטנים"
      },
      features: [
        {
          en: "Basic Image Analysis",
          ar: "تحليل صور أساسي",
          he: "ניתוח תמונה בסיסי"
        },
        {
          en: `Up to 1,000 images/${monthText[language.code]}`,
          ar: `حتى 1,000 صورة/${monthText[language.code]}`,
          he: `עד 1,000 תמונות ב${monthText[language.code]}`
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
          en: "Standard Integrations",
          ar: "تكاملات قياسية",
          he: "אינטגרציות סטנדרטיות"
        }
      ],
      popular: false
    },
    {
      name: {
        en: "Professional",
        ar: "محترف",
        he: "מקצועי"
      },
      price: "$299",
      period: `/${monthText[language.code]}`,
      desc: {
        en: "Ideal for growing companies",
        ar: "مثالي للشركات المتنامية",
        he: "מושלם לחברות בצמיחה"
      },
      features: [
        {
          en: "Advanced Video Analysis",
          ar: "تحليل فيديو متقدم",
          he: "ניתוח וידאו מתקדם"
        },
        {
          en: "Unlimited image processing",
          ar: "معالجة صور غير محدودة",
          he: "עיבוד תמונות ללא הגבלה"
        },
        {
          en: "Priority Support",
          ar: "دعم أولوية",
          he: "תמיכה מועדפת"
        },
        {
          en: "Advanced Analytics Dashboard",
          ar: "لوحة تحكم تحليلات متقدمة",
          he: "לוח בקרה אנליטי מתקדם"
        },
        {
          en: "Real-time Processing",
          ar: "معالجة فورية",
          he: "עיבוד בזמן אמת"
        },
        {
          en: "Custom Models",
          ar: "نماذج مخصصة",
          he: "מודלים מותאמים"
        },
        {
          en: "API Access",
          ar: "وصول API",
          he: "גישה ל-API"
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
      price: customText[language.code],
      period: "",
      desc: {
        en: "For large organizations",
        ar: "للمنظمات الكبيرة",
        he: "לארגונים גדולים"
      },
      features: [
        {
          en: "Custom Vision Models",
          ar: "نماذج رؤية مخصصة",
          he: "מודלים מותאמים של ראייה"
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
          ar: "ضمان SLA",
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
};

// Main Component
const ComputerVisionApp = () => {
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

export default ComputerVisionApp;