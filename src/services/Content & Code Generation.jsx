import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import contentVideo from "../assets/content.mp4";
import { useTheme } from "../context/ThemeContext";
import howItWorksImg from '../assets/Content & Code Generation1.webp';
import agentImg from '../assets/Content & Code Generation2.png';
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

if (typeof document !== 'undefined' && !document.getElementById('content-style')) {
  const style = document.createElement('style');
  style.id = 'content-style';
  style.innerHTML = styleSheet;
  document.head.appendChild(style);
}

// Animation variants
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };

// 1. HERO SECTION
const HeroSection = ({ theme }) => {
  const { language } = useLanguage();
  const t = {
    title: {
      en: "Content & Code Generation",
      ar: "توليد المحتوى والبرمجيات",
      he: "יצירת תוכן וקוד"
    },
    subtitle: {
      en: "Create high-quality content and functional code instantly with AI-powered generation tools that understand context, style, and requirements.",
      ar: "أنشئ محتوى عالي الجودة وكود وظيفي فورًا باستخدام أدوات توليد الذكاء الاصطناعي التي تفهم السياق والأسلوب والمتطلبات.",
      he: "צור תוכן איכותי וקוד פונקציונלי מיידית עם כלי AI שמבינים הקשר, סגנון ודרישות."
    },
    desc: {
      en: "From blog posts and marketing copy to production-ready code snippets and full applications, our AI generates original, engaging content and functional code that scales with your needs.",
      ar: "من منشورات المدونات ونسخ التسويق إلى مقتطفات الكود الجاهزة للإنتاج والتطبيقات الكاملة، الذكاء الاصطناعي لدينا ينشئ محتوى أصليًا وجذابًا وكودًا وظيفيًا يتناسب مع احتياجاتك.",
      he: "מבלוגים וקופי שיווקי ועד קטעי קוד מוכנים לייצור ויישומים שלמים, ה-AI שלנו יוצר תוכן וקוד מותאם לצרכים שלך."
    },
    button: {
      en: "Start Creating Content & Code",
      ar: "ابدأ بإنشاء المحتوى والبرمجيات",
      he: "התחל ליצור תוכן וקוד"
    }
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={fadeUp}
      className="relative text-white py-20 text-center shadow-2xl overflow-hidden w-full px-4 md:px-8 lg:px-16 bg-black min-h-[600px]"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={contentVideo}
      />
      <div className="bg-black bg-opacity-60 absolute inset-0"></div>
  <div className="relative z-10 pt-12">
        <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#19e6f7] to-[#179b8e] bg-clip-text text-transparent">
          {t.title[language.code]}
        </motion.h1>
         
        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
          {t.subtitle[language.code]}
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
  const steps = [
    {
      en: "Choose Content or Code Type",
      ar: "اختر نوع المحتوى أو الكود",
      he: "בחר סוג תוכן או קוד"
    },
    {
      en: "Define Your Requirements",
      ar: "حدد متطلباتك",
      he: "הגדר את הדרישות שלך"
    },
    {
      en: "Generate & Customize",
      ar: "أنشئ وخصص",
      he: "צור והתאם אישית"
    },
    {
      en: "Review & Refine",
      ar: "راجع وحسّن",
      he: "סקור ושפר"
    },
    {
      en: "Export & Deploy",
      ar: "صدر ونفذ",
      he: "ייצא ופרוס"
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
          <h2 className={`text-4xl md:text-5xl font-extrabold ${theme === "dark" ? "text-white" : "text-black"}`}>{
            {
              en: "Step-by-Step: Content & Code Creation",
              ar: "خطوة بخطوة: إنشاء المحتوى والكود",
              he: "שלב-אחר-שלב: יצירת תוכן וקוד"
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
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#19e6f7]/40 font-bold text-lg transition-all duration-300 group-hover:scale-110 ${theme === "dark" ? "bg-[#1a1a1a] text-white" : "bg-white text-black"}`}>{idx+1}</div>
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
              className="mt-2 px-7 py-3 rounded-lg bg-gradient-to-r from-[#19e6f7] to-[#179b8e] text-white font-semibold text-lg shadow hover:from-[#179b8e] hover:to-[#19e6f7] transition-all duration-300 cursor-pointer"
            >
                {
                  {
                    en: "Try Content & Code Generator",
                    ar: "جرّب منشئ المحتوى والكود",
                    he: "נסה את מחולל התוכן והקוד"
                  }[language.code]
                }
            </button>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex items-stretch justify-center">
            <div className={`relative w-full max-w-6xl rounded-2xl flex items-center justify-center ${theme === "dark" ? "bg-[#1a1a1a]" : "bg-white"}`} style={{boxShadow:'0 0 0 2px #19e6f7/20'}}>
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
        en: "AI-Powered Content Creation",
        ar: "إنشاء محتوى مدعوم بالذكاء الاصطناعي",
        he: "יצירת תוכן מבוסס AI"
      },
      desc: {
        en: "Generate blog posts, articles, marketing copy, and social media content with advanced natural language processing.",
        ar: "أنشئ منشورات مدونة ومقالات ونسخ تسويقية ومحتوى وسائل التواصل الاجتماعي بمعالجة لغوية طبيعية متقدمة.",
        he: "צור פוסטים, מאמרים, קופי שיווקי ותוכן לרשתות חברתיות עם עיבוד שפה טבעית מתקדם."
      },
      icon: "✍"
    },
    {
      title: {
        en: "Code Generation & Snippets",
        ar: "توليد الكود والمقتطفات",
        he: "יצירת קוד וקטעי קוד"
      },
      desc: {
        en: "Create functional code snippets, scripts, and full applications in multiple programming languages with AI assistance.",
        ar: "أنشئ مقتطفات كود وظيفية وبرمجيات كاملة بلغات متعددة بمساعدة الذكاء الاصطناعي.",
        he: "צור קטעי קוד, סקריפטים ויישומים מלאים בשפות תכנות שונות בעזרת AI."
      },
      icon: "💻"
    },
    {
      title: {
        en: "Multi-Language Support",
        ar: "دعم متعدد اللغات",
        he: "תמיכה רב-לשונית"
      },
      desc: {
        en: "Generate content in 25+ languages and code in Python, JavaScript, Java, C++, and more with native fluency.",
        ar: "أنشئ محتوى بأكثر من 25 لغة وكود بلغات برمجة متعددة بطلاقة أصلية.",
        he: "צור תוכן ביותר מ-25 שפות וקוד בפייתון, ג'אווהסקריפט, ג'אווה, ++C ועוד בשטף טבעי."
      },
      icon: "🌍"
    },
    {
      title: {
        en: "Style & Tone Customization",
        ar: "تخصيص الأسلوب والنبرة",
        he: "התאמת סגנון וטון"
      },
      desc: {
        en: "Adjust content tone (formal, casual, technical) and code style (clean, optimized, documented) to match your needs.",
        ar: "عدل نبرة المحتوى (رسمية، غير رسمية، تقنية) وأسلوب الكود (نظيف، محسن، موثق) ليناسب احتياجاتك.",
        he: "התאם את טון התוכן (רשמי, לא רשמי, טכני) וסגנון הקוד (נקי, אופטימלי, מתועד) לצרכים שלך."
      },
      icon: "🎨"
    },
    {
      title: {
        en: "SEO & Performance Optimization",
        ar: "تحسين الأداء وSEO",
        he: "אופטימיזציה ל-SEO וביצועים"
      },
      desc: {
        en: "Automatically optimize content for search engines and code for performance with intelligent suggestions.",
        ar: "حسّن المحتوى لمحركات البحث والكود للأداء تلقائيًا مع اقتراحات ذكية.",
        he: "בצע אופטימיזציה לתוכן עבור מנועי חיפוש ולקוד עבור ביצועים עם הצעות חכמות."
      },
      icon: "🚀"
    },
    {
      title: {
        en: "Real-Time Collaboration",
        ar: "التعاون في الوقت الحقيقي",
        he: "שיתוף פעולה בזמן אמת"
      },
      desc: {
        en: "Collaborate on content and code projects with team members, version control, and real-time editing capabilities.",
        ar: "تعاون في مشاريع المحتوى والكود مع أعضاء الفريق، وتحكم بالإصدارات، وإمكانيات تحرير فورية.",
        he: "שתף פעולה בפרויקטי תוכן וקוד עם חברי צוות, ניהול גרסאות ועריכה בזמן אמת."
      },
      icon: "👥"
    }
  ];
  const { language } = useLanguage();
  return (
    <section id="features-section" className="w-full h-full pt-0 pb-0 px-4 relative overflow-hidden bg-[#19e6f7]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-0 items-center relative z-10 -space-x-8">
        {/* Left: Heading and Button */}
        <div className="flex-1 flex flex-col justify-center items-start mb-10 md:mb-0 md:pr-8">
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-2 mt-0 ${theme === "dark" ? "text-black" : "text-white"}`}>
            {
              {
                en: "Features & Benefits",
                ar: "المميزات والفوائد",
                he: "תכונות ויתרונות"
              }[language.code]
            }
          </h2>
          <div className="text-2xl font-semibold mb-4 text-white">{
            {
              en: "Create Content & Code Like Never Before",
              ar: "أنشئ محتوى وكود كما لم يحدث من قبل",
              he: "צור תוכן וקוד כמו שלא היה מעולם"
            }[language.code]
          }</div>
          <p className="text-xl mb-6 max-w-md text-white">{
            {
              en: "Our AI-powered platform generates high-quality content and functional code, saving you hours of writing and development time while maintaining originality and creativity.",
              ar: "منصتنا المدعومة بالذكاء الاصطناعي تنشئ محتوى عالي الجودة وكود وظيفي، وتوفر عليك ساعات من الكتابة والتطوير مع الحفاظ على الأصالة والإبداع.",
              he: "הפלטפורמה שלנו מייצרת תוכן איכותי וקוד פונקציונלי, חוסכת שעות כתיבה ופיתוח תוך שמירה על מקוריות ויצירתיות."
            }[language.code]
          }</p>
          <ul className="list-disc pl-5 text-lg mb-8 space-y-2 text-white">
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
            <div key={idx} className={`rounded-2xl shadow p-6 flex flex-col items-start transition-transform duration-300 hover:scale-105 h-88 min-w-[220px] ${theme === "dark" ? "bg-black" : "bg-white"}`}>
              <div className={`font-bold text-lg mb-3 ${theme === "dark" ? "text-white" : "text-[#179b8e]"}`}>{feature.title[language.code]}</div>
              <div className={`text-sm flex-1 leading-relaxed ${theme === "dark" ? "text-white" : "text-gray-700"}`}>{feature.desc[language.code]}</div>
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
      en: "Reduce content creation time by up to 90% while maintaining high quality and originality across all generated materials.",
      ar: "قلل وقت إنشاء المحتوى بنسبة تصل إلى 90% مع الحفاظ على الجودة والأصالة في جميع المواد المُولدة.",
      he: "הפחת את זמן יצירת התוכן ב-90% תוך שמירה על איכות ומקוריות בכל החומרים שנוצרים."
    },
    {
      en: "Generate production-ready code snippets and full applications with proper syntax, documentation, and best practices.",
      ar: "أنشئ مقتطفات كود جاهزة للإنتاج وتطبيقات كاملة مع الصياغة الصحيحة والتوثيق وأفضل الممارسات.",
      he: "צור קטעי קוד מוכנים לייצור ויישומים שלמים עם תחביר נכון, תיעוד ו-best practices."
    },
    {
      en: "Scale your content production and development workflow with unlimited generation capacity and team collaboration tools.",
      ar: "وسع إنتاج المحتوى وسير عمل التطوير لديك بقدرة توليد غير محدودة وأدوات تعاون للفريق.",
      he: "הגדל את תפוקת התוכן וזרימת העבודה שלך עם יכולת יצירה בלתי מוגבלת וכלי שיתוף פעולה."
    },
    {
      en: "24/7 availability for instant content and code creation, supporting multiple languages and programming frameworks.",
      ar: "توفر على مدار الساعة لإنشاء محتوى وكود فوري، مع دعم لغات وأطر برمجة متعددة.",
      he: "זמינות 24/7 ליצירת תוכן וקוד מיידי, עם תמיכה בשפות ומסגרות תכנות רבות."
    },
    {
      en: "Built-in plagiarism detection and code validation to ensure originality and functionality of all generated output.",
      ar: "كشف الانتحال المدمج والتحقق من الكود لضمان أصالة ووظائف جميع النتائج المُولدة.",
      he: "זיהוי פלגיאט מובנה ואימות קוד להבטחת מקוריות ותפקודיות של כל התוצרים."
    }
  ];
  return (
    <section className={`w-full py-20 px-4 ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}>
      {/* Centered Heading */}
      <div className="text-center mb-12">
        <h2 className={`text-3xl md:text-4xl font-extrabold ${theme === "dark" ? "text-white" : "text-black"}`}>
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
            <img src={agentImg} loading="lazy" alt="Content & Code Tools" className="w-full h-full object-cover rounded-2xl shadow-xl relative z-10" style={{minHeight: '400px'}} />
            {/* Glowing blue-teal border effect */}
            <div className="absolute inset-0 rounded-2xl border-2 border-[#19e6f7] shadow-[0_0_20px_rgba(25,230,247,0.6)]"></div>
          </div>
        </div>
        {/* Right: Benefits List */}
        <div className="flex-1 flex flex-col justify-center h-full">
          <div className="text-justify h-full flex flex-col justify-center">
            <p className={`text-lg mb-8 ${theme === "dark" ? "text-white" : "text-black"}`}>{
              {
                en: "Our content and code generation tools deliver measurable business value, helping you create high-quality content and code efficiently.",
                ar: "أدوات توليد المحتوى والبرمجيات لدينا تقدم قيمة أعمال قابلة للقياس، وتساعدك على إنشاء محتوى وكود عالي الجودة بكفاءة.",
                he: "הכלים שלנו ליצירת תוכן וקוד מספקים ערך עסקי מדיד, ועוזרים לך ליצור תוכן וקוד איכותי ביעילות."
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
      desc: "Built with cutting-edge natural language processing and code generation models for superior content and code quality.",
      stat: "99.8%"
    },
    {
      title: "Time & Cost Savings",
      desc: "Reduce content creation and development time by up to 90% while improving quality and consistency.",
      stat: "90%"
    },
    {
      title: "Scalable & Reliable",
      desc: "Handle unlimited content and code generation simultaneously with enterprise-grade reliability and performance.",
      stat: "99.9%"
    },
    {
      title: "Multi-Format Support",
      desc: "Generate content in any format and code in any language with seamless integration and export capabilities.",
      stat: "25+"
    }
  ];

  return (
    <section className={`${theme === "dark" ? "bg-[#0a0a0a]" : "bg-white"} py-20 px-6`}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto">
        <motion.h2 variants={fadeUp} className={`text-4xl font-bold text-center mb-16 ${theme === "dark" ? "text-white" : "text-black"}`}>
          Why Choose <span className="text-[#19e6f7]">Our Content & Code Platform</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className={`flex items-start space-x-6 p-6 rounded-2xl border border-[#19e6f7]/20 ${theme === "dark" ? "bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]" : "bg-white"}`}
            >
              <div className="text-[#19e6f7] font-bold text-3xl min-w-[80px]">{reason.stat}</div>
              <div>
                <h3 className={`text-xl font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>{reason.title}</h3>
                <p className={`leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>{reason.desc}</p>
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
  const steps = [
    {
      icon: bankingPng,
      title: {
        en: 'Banking & Finance',
        ar: 'البنوك والتمويل',
        he: 'בנקאות ופיננסים'
      },
      desc: {
        en: 'Generate financial reports, compliance documentation, and automated trading algorithms with precision.',
        ar: 'أنشئ تقارير مالية، مستندات امتثال، وخوارزميات تداول آلي بدقة.',
        he: 'צור דוחות פיננסיים, מסמכי ציות ואלגוריתמים למסחר אוטומטי בדיוק.'
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
        en: 'Create product descriptions, marketing campaigns, and e-commerce platform code for seamless shopping experiences.',
        ar: 'أنشئ أوصاف منتجات، حملات تسويقية، وكود منصات تجارة إلكترونية لتجارب تسوق سلسة.',
        he: 'צור תיאורי מוצרים, קמפיינים שיווקיים וקוד לפלטפורמות מסחר אלקטרוני לחוויית קנייה חלקה.'
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
        en: 'Generate property listings, market analysis reports, and real estate management software solutions.',
        ar: 'أنشئ قوائم عقارات، تقارير تحليل سوق، وحلول برمجية لإدارة العقارات.',
        he: 'צור רישומי נכסים, דוחות ניתוח שוק ופתרונות תוכנה לניהול נדל"ן.'
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
        en: 'Create travel guides, booking system code, and hospitality management content for enhanced guest experiences.',
        ar: 'أنشئ أدلة سفر، كود أنظمة حجز، ومحتوى إدارة ضيافة لتجارب ضيوف محسنة.',
        he: 'צור מדריכי טיולים, קוד למערכות הזמנות ותוכן ניהול אירוח לחוויית אורח משופרת.'
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
        en: 'Generate medical documentation, patient education content, and healthcare management system code.',
        ar: 'أنشئ مستندات طبية، محتوى توعية للمرضى، وكود أنظمة إدارة صحية.',
        he: 'צור מסמכים רפואיים, תוכן חינוכי למטופלים וקוד למערכות ניהול בריאות.'
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
        en: 'Create educational content, learning management systems, and interactive course materials with AI assistance.',
        ar: 'أنشئ محتوى تعليمي، أنظمة إدارة تعلم، ومواد دورات تفاعلية بمساعدة الذكاء الاصطناعي.',
        he: 'צור תוכן לימודי, מערכות ניהול למידה וחומרי קורס אינטראקטיביים בעזרת AI.'
      }
    },
  ];

  return (
    <section className="py-20 px-4 md:px-6 bg-[#19e6f7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-black">
            {{
              en: "Real-Life Use Cases & Applications",
              ar: "حالات استخدام وتطبيقات واقعية",
              he: "מקרי שימוש ויישומים אמיתיים"
            }[language.code]}
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-black px-4">
            {{
              en: "Discover how content and code generation tools are revolutionizing businesses across industries, providing intelligent content creation, accelerated development, and enhanced productivity. Our solutions adapt to your specific industry needs, delivering measurable results and ROI.",
              ar: "اكتشف كيف تغير أدوات توليد المحتوى والكود الأعمال عبر الصناعات، وتوفر إنشاء محتوى ذكي، وتطوير سريع، وزيادة الإنتاجية. حلولنا تتكيف مع احتياجات صناعتك وتقدم نتائج قابلة للقياس وعائد استثمار.",
              he: "גלה כיצד כלי יצירת תוכן וקוד משנים עסקים בענפים שונים, מספקים יצירת תוכן חכמה, פיתוח מהיר, והגברת פרודוקטיביות. הפתרונות שלנו מותאמים לצרכי התעשייה שלך ומספקים תוצאות מדידות והחזר השקעה."
            }[language.code]}
          </p>
        </div>
        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - behind circles, passing through their center */}
          <div className="absolute left-0 right-0 top-12 h-0.5 bg-[#19e6f7] z-0 hidden md:block"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center transition duration-300 ease-in-out hover:shadow-lg cursor-pointer">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#19e6f7] bg-white flex items-center justify-center z-10">
                  <img src={step.icon} loading="lazy" alt={step.title[language.code]} className="w-12 h-12 md:w-14 md:h-14 object-contain" />
                </div>
                <div className="text-base md:text-lg font-bold mt-2 mb-1 text-black text-center px-2"><span>{index + 1}. </span>{step.title[language.code]}</div>
                <div className="text-xs md:text-sm text-center text-black px-4">{step.desc[language.code]}</div>
              </div>
            ))}
          </div>
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
        en: "Perfect for individuals and small teams",
        ar: "مثالي للأفراد والفرق الصغيرة",
        he: "מושלם ליחידים וצוותים קטנים"
      },
      features: [
        {
          en: "Basic Content Generation",
          ar: "توليد محتوى أساسي",
          he: "יצירת תוכן בסיסי"
        },
        {
          en: "Code Snippet Creation",
          ar: "إنشاء مقتطفات كود",
          he: "יצירת קטעי קוד"
        },
        {
          en: "Up to 1,000 content pieces/month",
          ar: `حتى 1,000 قطعة محتوى/${monthText[language.code]}`,
          he: `עד 1,000 פריטי תוכן ב${monthText[language.code]}`
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
        en: "Ideal for growing businesses",
        ar: "مثالي للأعمال المتنامية",
        he: "מושלם לעסקים בצמיחה"
      },
      features: [
        {
          en: "Advanced Content & Code Generation",
          ar: "توليد محتوى وكود متقدم",
          he: "יצירת תוכן וקוד מתקדמים"
        },
        {
          en: "Full Application Development",
          ar: "تطوير تطبيقات كاملة",
          he: "פיתוח יישומים מלאים"
        },
        {
          en: "Unlimited content generation",
          ar: "توليد محتوى غير محدود",
          he: "יצירת תוכן ללא הגבלה"
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
          en: "Custom Content & Code Solutions",
          ar: "حلول محتوى وكود مخصصة",
          he: "פתרונות תוכן וקוד מותאמים אישית"
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
        },
        {
          en: "White-label Solutions",
          ar: "حلول بعلامة بيضاء",
          he: "פתרונות White-label"
        }
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing-section" className={`${theme === "dark" ? "bg-[#0a0a0a]" : "bg-white"} py-20 px-6`}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto">
        <motion.h2 variants={fadeUp} className={`text-4xl font-bold text-center mb-16 ${theme === "dark" ? "text-white" : "text-black"}`}>
          <span className="text-[#19e6f7]">{{
            en: "Pricing",
            ar: "الأسعار",
            he: "תמחור"
          }[language.code]}</span> {{
            en: "Plans",
            ar: "خطط",
            he: "תוכניות"
          }[language.code]}
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 flex flex-col h-full ${
                plan.popular 
                  ? `border-[#19e6f7] -mt-8 z-10 ${theme === "dark" ? "bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]" : "bg-black"}`
                  : `${theme === "dark" ? "border-gray-700 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]" : "border-gray-300 bg-black"}`
              } hover:scale-110 hover:shadow-2xl hover:shadow-[#19e6f7]/40`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#19e6f7] text-black px-4 py-2 rounded-full font-semibold text-sm">
                  {{ en: "Most Popular", ar: "الأكثر شهرة", he: "הפופולרי ביותר" }[language.code]}
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-white"}`}>{plan.name[language.code]}</h3>
                <p className={`mb-4 ${theme === "dark" ? "text-gray-400" : "text-white/80"}`}>{plan.desc[language.code]}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-[#19e6f7]">{plan.price}</span>
                  <span className={`ml-1 ${theme === "dark" ? "text-gray-400" : "text-white/80"}`}>{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#19e6f7] rounded-full"></div>
                    <span className={`${theme === "dark" ? "text-gray-300" : "text-white/80"}`}>{feature[language.code]}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 mt-auto ${
                plan.popular
                  ? 'bg-[#19e6f7] text-black hover:bg-[#179b8e]'
                  : `${theme === "dark" ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white text-black hover:bg-gray-800'}`
              }`}>
                {plan.name.en === "Enterprise" ? { en: "Contact Sales", ar: "تواصل مع المبيعات", he: "צור קשר עם מכירות" }[language.code] : { en: "Get Started", ar: "ابدأ الآن", he: "התחל" }[language.code]}
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// Main Component
const ContentGenerator = () => {
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

export default ContentGenerator;