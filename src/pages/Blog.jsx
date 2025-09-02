import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import healthcareImg from "../assets/AI in Healthcare- Real Case Studies.webp";
import businessImg from "../assets/Building Custom AI Assistants for Business.png";
import openSourceImg from "../assets/Open Source AI Projects to Watch.webp";
import aiImg from '../assets/ai.webp';
import heroVideo from "../assets/hero.mp4";
import { useTheme } from "../context/ThemeContext";

// ============================================================================
// HERO SECTION COMPONENT
// ============================================================================

const HeroSection = ({ language }) => {
  const t = {
    title: {
      en: "AI Tools That Actually Work",
      ar: "أدوات الذكاء الاصطناعي التي تعمل فعلاً",
      he: "כלי AI שבאמת עובדים"
    },
    subtitle: {
      en: "Stop wasting time on mediocre AI tools. Discover the game-changing tools that top professionals use to 10x their productivity.",
      ar: "توقف عن إضاعة الوقت على أدوات الذكاء الاصطناعي المتوسطة. اكتشف الأدوات التي تغير قواعد اللعبة ويستخدمها المحترفون لزيادة إنتاجيتهم 10 أضعاف.",
      he: "הפסיקו לבזבז זמן על כלי AI בינוניים. גלו את הכלים שמשנים את המשחק ומכפילים פי 10 את הפרודוקטיביות."
    }
  };
  return (
    <section className="relative text-white min-h-[600px] h-96 md:h-[500px] lg:h-[600px] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 text-center w-full px-4 md:px-8 lg:px-16">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#fff] mb-4"
        >
          <span className="text-[#19e6f7]">AI</span> {t.title[language.code]}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl lg:text-2xl text-[#bfc1be] max-w-4xl mx-auto mb-8"
        >
          {t.subtitle[language.code]}
        </motion.p>
      </div>
    </section>
  );
};

// ============================================================================
// EDITOR'S PICKS COMPONENT
// ============================================================================

const editorsPicks = [
  {
    title: {
      en: "AI for Healthcare Breakthroughs",
      ar: "اختراقات الذكاء الاصطناعي في الرعاية الصحية",
      he: "פריצות דרך ב-AI לבריאות"
    },
    description: {
      en: "Exploring how AI is driving innovation in diagnostics and patient care.",
      ar: "استكشاف كيف يقود الذكاء الاصطناعي الابتكار في التشخيص ورعاية المرضى.",
      he: "חקר כיצד AI מוביל חדשנות באבחון וטיפול."
    },
    author: {
      en: "Dr. Sarah Chen",
      ar: "د. سارة تشين",
      he: "ד\"ר שרה צ'ן"
    },
    readTime: {
      en: "8 min read",
      ar: "8 دقائق قراءة",
      he: "8 דקות קריאה"
    },
    image: healthcareImg
  },
  {
    title: {
      en: "The Rise of Generative Models",
      ar: "صعود النماذج التوليدية",
      he: "עליית המודלים הגנרטיביים"
    },
    description: {
      en: "Understanding GPT, DALL·E, and the creative side of AI.",
      ar: "فهم GPT وDALL·E والجانب الإبداعي للذكاء الاصطناعي.",
      he: "הבנת GPT, DALL·E והצד היצירתי של AI."
    },
    author: {
      en: "Alex Rodriguez",
      ar: "أليكس رودريغيز",
      he: "אלכס רודריגז"
    },
    readTime: {
      en: "6 min read",
      ar: "6 دقائق قراءة",
      he: "6 דקות קריאה"
    },
    image: businessImg
  },
  {
    title: {
      en: "Smarter Marketing with AI",
      ar: "تسويق أكثر ذكاءً مع الذكاء الاصطناعي",
      he: "שיווק חכם יותר עם AI"
    },
    description: {
      en: "How brands are personalizing user experiences using machine learning.",
      ar: "كيف تخصص العلامات التجارية تجارب المستخدم باستخدام التعلم الآلي.",
      he: "איך מותגים מותאמים אישית חוויות משתמש עם למידת מכונה."
    },
    author: {
      en: "Maria Johnson",
      ar: "ماريا جونسون",
      he: "מריה ג'ונסון"
    },
    readTime: {
      en: "7 min read",
      ar: "7 دقائق قراءة",
      he: "7 דקות קריאה"
    },
    image: openSourceImg
  }
];

const EditorsPicks = ({ links, language }) => {
  const { theme } = useTheme();
  const t = {
    sectionTitle: {
      en: "Editor's Picks",
      ar: "اختيارات المحرر",
      he: "בחירות העורך"
    },
    readMore: {
      en: "Read More",
      ar: "اقرأ المزيد",
      he: "קרא עוד"
    },
    by: {
      en: "By",
      ar: "بواسطة",
      he: "מאת"
    }
  };
  return (
    <section className={`${theme === 'dark' ? 'bg-[#181818] text-white' : 'bg-white text-black'} py-16 px-4 min-h-[600px]`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#19e6f7] text-center mb-10">
          {t.sectionTitle[language.code]}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {editorsPicks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative h-80 cursor-pointer"
              style={{ perspective: '1000px' }}
            >
              <div 
                className="relative w-full h-full transition-transform duration-700"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: 'rotateY(0deg)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'rotateY(180deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'rotateY(0deg)';
                }}
              >
                {/* Front of card - Only Image */}
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <img
                    src={item.image}
                    alt={item.title[language.code]}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                {/* Back of card - Content */}
                <div 
                  className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#232323] to-[#0a2342] rounded-2xl p-6 flex flex-col justify-between"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title[language.code]}</h3>
                    <p className="text-[#bfc1be] text-sm mb-4">{item.description[language.code]}</p>
                    <div className="flex items-center gap-4 text-sm text-[#19bba6] mb-4">
                      <span>{t.by[language.code]} {item.author[language.code]}</span>
                      <span>•</span>
                      <span>{item.readTime[language.code]}</span>
                    </div>
                  </div>
                  <Link 
                    to={links[index]} 
                    className="bg-gradient-to-r from-[#19e6f7] to-[#19bba6] text-[#0a2342] font-bold py-2 px-6 rounded-lg text-sm shadow-lg hover:scale-105 transition-transform duration-200 text-center"
                  >
                    {t.readMore[language.code]}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// AI CATEGORIES / TAGS EXPLORER COMPONENT
// ============================================================================

const aiCategories = [
  {
    name: {
      en: "Machine Learning",
      ar: "تعلم الآلة",
      he: "למידת מכונה"
    },
    description: {
      en: "Supervised, unsupervised, and reinforcement learning techniques.",
      ar: "تقنيات التعلم المراقب وغير المراقب والتعلم التعزيزي.",
      he: "טכניקות למידה מונחית, לא מונחית וחיזוק."
    }
  },
  {
    name: {
      en: "Natural Language Processing",
      ar: "معالجة اللغة الطبيعية",
      he: "עיבוד שפה טבעית"
    },
    description: {
      en: "Text analysis, language models, and conversational AI.",
      ar: "تحليل النصوص، نماذج اللغة، والذكاء الاصطناعي الحواري.",
      he: "ניתוח טקסטים, מודלי שפה ו-AI שיחתי."
    }
  },
  {
    name: {
      en: "Computer Vision",
      ar: "رؤية الحاسوب",
      he: "ראיית מחשב"
    },
    description: {
      en: "Image recognition, object detection, and visual AI.",
      ar: "التعرف على الصور، اكتشاف الأجسام، والذكاء الاصطناعي البصري.",
      he: "זיהוי תמונות, גילוי אובייקטים ו-AI חזותי."
    }
  },
  {
    name: {
      en: "Robotics & Automation",
      ar: "الروبوتات والأتمتة",
      he: "רובוטיקה ואוטומציה"
    },
    description: {
      en: "Industrial automation, autonomous systems, and smart robots.",
      ar: "الأتمتة الصناعية، الأنظمة الذاتية، والروبوتات الذكية.",
      he: "אוטומציה תעשייתית, מערכות אוטונומיות ורובוטים חכמים."
    }
  },
  {
    name: {
      en: "AI Ethics & Governance",
      ar: "أخلاقيات وحوكمة الذكاء الاصطناعي",
      he: "אתיקה וממשל ב-AI"
    },
    description: {
      en: "Responsible AI, bias detection, and regulatory frameworks.",
      ar: "الذكاء الاصطناعي المسؤول، كشف التحيز، والأطر التنظيمية.",
      he: "AI אחראי, זיהוי הטיות ומסגרות רגולטוריות."
    }
  },
  {
    name: {
      en: "Edge AI & IoT",
      ar: "الذكاء الاصطناعي الطرفي وإنترنت الأشياء",
      he: "AI קצה ואינטרנט של הדברים"
    },
    description: {
      en: "On-device AI, smart sensors, and distributed intelligence.",
      ar: "الذكاء الاصطناعي على الأجهزة، المستشعرات الذكية، والذكاء الموزع.",
      he: "AI במכשירים, חיישנים חכמים ואינטליגנציה מבוזרת."
    }
  },
];

const AICategoriesExplorer = ({ language }) => {
  const { theme } = useTheme();
  const t = {
    sectionTitle: {
      en: "AI Categories Explorer",
      ar: "استكشاف فئات الذكاء الاصطناعي",
      he: "מגוון תחומי AI"
    },
    intro1: {
      en: "Dive deep into the diverse world of artificial intelligence. Each category represents a specialized domain where AI is making groundbreaking advancements and transforming industries.",
      ar: "استكشف عالم الذكاء الاصطناعي المتنوع. كل فئة تمثل مجالًا متخصصًا حيث يحقق الذكاء الاصطناعي تقدمات مذهلة ويغير الصناعات.",
      he: "היכנסו לעולם המגוון של AI. כל תחום מייצג התמחות בה AI משנה תעשיות."
    },
    intro2: {
      en: "From machine learning algorithms that power recommendation systems to natural language processing that enables human-like conversations, explore how different AI technologies are shaping our future.",
      ar: "من خوارزميات تعلم الآلة التي تدعم أنظمة التوصية إلى معالجة اللغة الطبيعية التي تمكن المحادثات البشرية، اكتشف كيف تشكل تقنيات الذكاء الاصطناعي مستقبلنا.",
      he: "מאלגוריתמים של למידת מכונה ועד עיבוד שפה טבעית, גלו כיצד טכנולוגיות AI מעצבות את עתידנו."
    },
    bullet1: {
      en: "Comprehensive coverage of AI domains",
      ar: "تغطية شاملة لمجالات الذكاء الاصطناعي",
      he: "סקירה מקיפה של תחומי AI"
    },
    bullet2: {
      en: "Latest trends and breakthroughs",
      ar: "أحدث الاتجاهات والإنجازات",
      he: "הטרנדים והפריצות האחרונות"
    },
    bullet3: {
      en: "Practical applications and use cases",
      ar: "تطبيقات عملية وحالات استخدام",
      he: "יישומים מעשיים ודוגמאות שימוש"
    }
  };
  return (
    <section
      className="text-white py-16 px-6"
      style={{ background: 'linear-gradient(90deg, #004F51 0%, #005F60 20%, #00797B 40%, #00989C 60%, #56BFC3 80%, #B2DFDF 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-[#19e6f7] mb-4">{t.sectionTitle[language.code]}</h2>
              <p className="text-[#fff] text-lg leading-relaxed mb-6">
                <div className="text-justify">
                  {t.intro1[language.code]}
                </div>
              </p>
              <p className="text-[#fff] text-base leading-relaxed mb-8">
                <div className="text-justify">
                  {t.intro2[language.code]}
                </div>
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#fff] rounded-full"></div>
                  <span className="text-[#fff]">{t.bullet1[language.code]}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#fff] rounded-full"></div>
                  <span className="text-[#fff]">{t.bullet2[language.code]}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#fff] rounded-full"></div>
                  <span className="text-[#fff]">{t.bullet3[language.code]}</span>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Right Cards */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aiCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`rounded-xl p-6 cursor-pointer group transition-all duration-500 hover:scale-105 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}
                >
                  <motion.h3 className={`text-lg font-semibold mb-2 group-hover:-translate-y-1 transition-transform duration-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`} whileHover={{ y: -8 }} transition={{ duration: 0.5 }}>{category.name[language.code]}</motion.h3>
                  <motion.p className={`text-sm group-hover:translate-y-1 transition-transform duration-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`} whileHover={{ y: 8 }} transition={{ duration: 0.5 }}>{category.description[language.code]}</motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// AI MYTHS BUSTED COMPONENT
// ============================================================================

const aiMythFactPoints = {
  myths: [
    {
      en: "AI tools are only for experts and require complex setup.",
      ar: "أدوات الذكاء الاصطناعي مخصصة فقط للخبراء وتتطلب إعدادًا معقدًا.",
      he: "כלי AI מיועדים רק למומחים ודורשים התקנה מסובכת."
    },
    {
      en: "AI tools always give unbiased results.",
      ar: "أدوات الذكاء الاصطناعي دائمًا تعطي نتائج غير متحيزة.",
      he: "כלי AI תמיד נותנים תוצאות לא מוטות."
    },
    {
      en: "AI tools are too expensive for small businesses.",
      ar: "أدوات الذكاء الاصطناعي مكلفة جدًا للشركات الصغيرة.",
      he: "כלי AI יקרים מדי לעסקים קטנים."
    }
  ],
  facts: [
    {
      en: "Many AI tools are designed for everyone, with easy interfaces and quick cloud setup—no expertise needed.",
      ar: "العديد من أدوات الذكاء الاصطناعي مصممة للجميع، بواجهات سهلة وإعداد سحابي سريع دون الحاجة للخبرة.",
      he: "רבים מכלי ה-AI מיועדים לכולם, עם ממשקים פשוטים והתקנה מהירה בענן—ללא צורך במומחיות."
    },
    {
      en: "AI tools can inherit bias from their training data. Responsible use and monitoring are essential.",
      ar: "يمكن أن ترث أدوات الذكاء الاصطناعي التحيز من بيانات التدريب الخاصة بها. الاستخدام المسؤول والمراقبة ضروريان.",
      he: "כלי AI יכולים לרשת הטיה מנתוני ההדרכה שלהם. שימוש אחראי ומעקב הם חיוניים."
    },
    {
      en: "Many AI tools are affordable, cloud-based, and designed for small businesses and individuals.",
      ar: "العديد من أدوات الذكاء الاصطناعي متاحة بأسعار معقولة، قائمة على السحابة، ومصممة للشركات الصغيرة والأفراد.",
      he: "רבים מכלי ה-AI זמינים במחיר סביר, מבוססי ענן ומיועדים לעסקים קטנים וליחידים."
    }
  ]
};

const AIMythsBusted = ({ language }) => {
  const t = {
    sectionTitle: {
      en: "Myth vs Fact",
      ar: "خرافة مقابل حقيقة",
      he: "מיתוס מול עובדה"
    },
    myths: {
      en: "MYTHS",
      ar: "الخرافات",
      he: "מיתוסים"
    },
    facts: {
      en: "FACTS",
      ar: "الحقائق",
      he: "עובדות"
    }
  };
  return (
    <section className="py-16 px-4"
    style={{ background: 'linear-gradient(90deg, #B2DFDF 0%, #56BFC3 20%, #00989C 40%, #00797B 60%, #005F60 80%, #004F51 100%)' }}>
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-8 text-[#fff]"
      >
        {t.sectionTitle[language.code]}
      </motion.h2>
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto h-full gap-20 items-center">
        {/* Left: AI Image */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0 min-h-[550px]"
        >
          <img src={aiImg} loading="lazy" alt="AI" className="w-full max-w-xl h-auto object-contain" />
        </motion.div>
        {/* Right: Myths and Facts */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex flex-col gap-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-[#19e6f7] mb-4">{t.myths[language.code]}</h3>
            <ul className="text-[#fff] text-lg font-semibold list-disc list-inside space-y-2 text-left">
              {aiMythFactPoints.myths.map((myth, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                >
                  {myth[language.code]}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-[#19e6f7] mb-4">{t.facts[language.code]}</h3>
            <ul className="text-[#fff] text-lg font-semibold list-disc list-inside space-y-2 text-left">
              {aiMythFactPoints.facts.map((fact, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                >
                  {fact[language.code]}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================================================
// TOOL COMPARISON TABLE COMPONENT
// ============================================================================

const aiTools = [
  {
    name: {
      en: "ChatGPT",
      ar: "شات جي بي تي",
      he: "צ'אט GPT"
    },
    category: {
      en: "Language Model",
      ar: "نموذج لغوي",
      he: "מודל שפה"
    },
    pricing: {
      en: "Free + Premium",
      ar: "مجاني + مدفوع",
      he: "חינם + פרימיום"
    },
    bestFor: {
      en: "Text generation, coding, analysis",
      ar: "توليد النصوص، البرمجة، التحليل",
      he: "יצירת טקסט, קידוד, ניתוח"
    },
    rating: 4.8
  },
  {
    name: {
      en: "Midjourney",
      ar: "ميدجورني",
      he: "מידג'ורני"
    },
    category: {
      en: "Image Generation",
      ar: "توليد الصور",
      he: "יצירת תמונות"
    },
    pricing: {
      en: "Paid",
      ar: "مدفوع",
      he: "בתשלום"
    },
    bestFor: {
      en: "Art, design, creative content",
      ar: "الفن، التصميم، المحتوى الإبداعي",
      he: "אמנות, עיצוב, תוכן יצירתי"
    },
    rating: 4.6
  },
  {
    name: {
      en: "GitHub Copilot",
      ar: "جيت هب كوبيلوت",
      he: "גיטהאב קופיילוט"
    },
    category: {
      en: "Code Assistant",
      ar: "مساعد برمجي",
      he: "עוזר קוד"
    },
    pricing: {
      en: "Paid",
      ar: "مدفوع",
      he: "בתשלום"
    },
    bestFor: {
      en: "Programming, code completion",
      ar: "البرمجة، إكمال الكود",
      he: "תכנות, השלמת קוד"
    },
    rating: 4.7
  },
  {
    name: {
      en: "Notion AI",
      ar: "نوشن اي آي",
      he: "נושן AI"
    },
    category: {
      en: "Productivity",
      ar: "إنتاجية",
      he: "פרודוקטיביות"
    },
    pricing: {
      en: "Paid",
      ar: "مدفوع",
      he: "בתשלום"
    },
    bestFor: {
      en: "Writing, organization, planning",
      ar: "الكتابة، التنظيم، التخطيط",
      he: "כתיבה, ארגון, תכנון"
    },
    rating: 4.5
  },
  {
    name: {
      en: "Jasper",
      ar: "جاسبر",
      he: "ג'ספר"
    },
    category: {
      en: "Content Creation",
      ar: "إنشاء المحتوى",
      he: "יצירת תוכן"
    },
    pricing: {
      en: "Paid",
      ar: "مدفوع",
      he: "בתשלום"
    },
    bestFor: {
      en: "Marketing copy, blog posts",
      ar: "كتابة التسويق، منشورات المدونة",
      he: "קופי שיווקי, פוסטים לבלוג"
    },
    rating: 4.4
  },
  {
    name: {
      en: "Claude",
      ar: "كلود",
      he: "קלוד"
    },
    category: {
      en: "Language Model",
      ar: "نموذج لغوي",
      he: "מודל שפה"
    },
    pricing: {
      en: "Free + Premium",
      ar: "مجاني + مدفوع",
      he: "חינם + פרימיום"
    },
    bestFor: {
      en: "Analysis, writing, research",
      ar: "التحليل، الكتابة، البحث",
      he: "ניתוח, כתיבה, מחקר"
    },
    rating: 4.9
  },
];

const ToolComparisonTable = ({ language }) => {
  const { theme } = useTheme();
  const t = {
    sectionTitle: {
      en: "AI Tools Comparison",
      ar: "مقارنة أدوات الذكاء الاصطناعي",
      he: "השוואת כלי AI"
    },
    subtitle: {
      en: "Compare popular AI tools and find the right one for your needs.",
      ar: "قارن بين أدوات الذكاء الاصطناعي الشهيرة وابحث عن الأنسب لك.",
      he: "השוו בין כלי AI פופולריים ומצאו את המתאים ביותר לצרכים שלכם."
    },
    tool: {
      en: "Tool",
      ar: "الأداة",
      he: "כלי"
    },
    category: {
      en: "Category",
      ar: "الفئة",
      he: "קטגוריה"
    },
    pricing: {
      en: "Pricing",
      ar: "السعر",
      he: "מחיר"
    },
    bestFor: {
      en: "Best For",
      ar: "الأفضل لـ",
      he: "הכי מתאים ל"
    },
    rating: {
      en: "Rating",
      ar: "التقييم",
      he: "דירוג"
    }
  };
  return (
    <section
      className={`${theme === 'dark' ? 'bg-[#232323] text-white' : 'bg-white text-black'} py-16 px-6`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-[#19e6f7] mb-2">{t.sectionTitle[language.code]}</h2>
        <p className={`text-lg mb-8 text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.subtitle[language.code]}</p>
      </motion.div>
      <div className="max-w-6xl mx-auto overflow-x-auto">
        <table className="w-full bg-[#232323] rounded-lg overflow-hidden">
          <thead className="bg-[#181818]">
            <tr>
              <th className="text-white px-6 py-4 text-left font-semibold">{t.tool[language.code]}</th>
              <th className="text-white px-6 py-4 text-left font-semibold">{t.category[language.code]}</th>
              <th className="text-white px-6 py-4 text-left font-semibold">{t.pricing[language.code]}</th>
              <th className="text-white px-6 py-4 text-left font-semibold">{t.bestFor[language.code]}</th>
              <th className="text-white px-6 py-4 text-left font-semibold">{t.rating[language.code]}</th>
            </tr>
          </thead>
          <tbody>
            {aiTools.map((tool, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-[#181818] hover:bg-[#0a2342] transition-colors"
              >
                <td className="text-white px-6 py-4 font-semibold">{tool.name[language.code]}</td>
                <td className="text-white px-6 py-4 text-[#bfc1be]">{tool.category[language.code]}</td>
                <td className="text-white px-6 py-4 text-[#bfc1be]">{tool.pricing[language.code]}</td>
                <td className="text-white px-6 py-4 text-[#bfc1be]">{tool.bestFor[language.code]}</td>
                <td className="text-white px-6 py-4">
                  <div className="flex items-center">
                    <span className="text-[#19e6f7] font-semibold">{tool.rating}</span>
                    <span className="text-[#19e6f7] ml-1">★</span>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

// ============================================================================
// WEEKLY POLL / DISCUSSION TOPIC COMPONENT
// ============================================================================

const WeeklyPoll = ({ language }) => {
  const { theme } = useTheme();
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [hasVoted, setHasVoted] = React.useState(false);
  const t = {
    sectionTitle: {
      en: "Weekly Discussion: AI's Future Impact",
      ar: "نقاش الأسبوع: تأثير الذكاء الاصطناعي المستقبلي",
      he: "דיון שבועי: השפעת ה-AI בעתיד"
    },
    question: {
      en: "Question:",
      ar: "سؤال:",
      he: "שאלה:"
    },
    prompt: {
      en: "What's your take on AI's role in shaping our future?",
      ar: "ما رأيك في دور الذكاء الاصطناعي في تشكيل مستقبلنا؟",
      he: "מה דעתך על תפקיד ה-AI בעיצוב עתידנו?"
    },
    submit: {
      en: "Submit",
      ar: "إرسال",
      he: "שלח"
    },
    totalVotes: {
      en: "Total votes:",
      ar: "إجمالي الأصوات:",
      he: "סך ההצבעות:"
    },
    pollCloses: {
      en: "Poll closes in 3 days",
      ar: "ينتهي التصويت خلال 3 أيام",
      he: "הסקר נסגר בעוד 3 ימים"
    }
  };
  const pollOptions = [
    { id: 1, text: {
      en: "AI will significantly improve healthcare in the next 5 years",
      ar: "سيحسن الذكاء الاصطناعي الرعاية الصحية بشكل كبير خلال 5 سنوات",
      he: "AI ישפר משמעותית את הבריאות ב-5 השנים הקרובות"
    }, votes: 45 },
    { id: 2, text: {
      en: "AI will create more jobs than it eliminates",
      ar: "سيخلق الذكاء الاصطناعي وظائف أكثر مما يلغي",
      he: "AI ייצור יותר משרות ממה שיבטל"
    }, votes: 32 },
    { id: 3, text: {
      en: "AI should be regulated more strictly",
      ar: "يجب تنظيم الذكاء الاصطناعي بشكل أكثر صرامة",
      he: "יש להסדיר את ה-AI בצורה מחמירה יותר"
    }, votes: 28 },
    { id: 4, text: {
      en: "AI will achieve human-level intelligence by 2030",
      ar: "سيصل الذكاء الاصطناعي إلى ذكاء بشري بحلول عام 2030",
      he: "AI יגיע לרמת אינטליגנציה אנושית עד 2030"
    }, votes: 15 }
  ];
  const totalVotes = pollOptions.reduce((sum, option) => sum + option.votes, 0);
  const handleVote = () => {
    if (selectedOption && !hasVoted) {
      setHasVoted(true);
    }
  };
  return (
    <section className={`${theme === 'dark' ? 'bg-[#232323] text-white' : 'bg-white text-black'} py-16 px-4`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-[#19e6f7] text-center mb-10">
          {t.sectionTitle[language.code]}
        </h2>
        <div className="mb-8 max-w-2xl mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-8 text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.question[language.code]}</h2>
          <p className={`text-xl font-semibold mb-6 text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.prompt[language.code]}</p>
        </div>
        {!hasVoted ? (
          <form
            onSubmit={e => {
              e.preventDefault();
              handleVote();
            }}
            className="space-y-4"
          >
            {pollOptions.map(option => (
              <label
                key={option.id}
                className={`block p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                  selectedOption === option.id
                    ? 'border-[#19e6f7] bg-[#19e6f7]/10'
                    : 'border-[#232323] hover:border-[#19e6f7]'
                }`}
              >
                <input
                  type="radio"
                  name="poll"
                  value={option.id}
                  checked={selectedOption === option.id}
                  onChange={() => setSelectedOption(option.id)}
                  className="mr-3 accent-[#19e6f7]"
                />
                <span className="font-medium">{option.text[language.code]}</span>
              </label>
            ))}
            <button
              type="submit"
              disabled={!selectedOption}
              className="mt-4 bg-gradient-to-r from-[#19e6f7] to-[#19bba6] text-[#0a2342] font-bold py-2 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50"
            >
              {t.submit[language.code]}
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            {pollOptions.map(option => {
              const percentage = Math.round((option.votes / totalVotes) * 100);
              const isSelected = selectedOption === option.id;
              return (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: option.id * 0.1 }}
                  className={`relative p-4 rounded-lg border-2 transition-all duration-300 ${
                    isSelected
                      ? 'border-[#19e6f7] bg-[#19e6f7]/10'
                      : 'border-[#232323] hover:border-[#19e6f7]'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{option.text[language.code]}</span>
                    <span className="text-[#19e6f7] font-semibold">{percentage}%</span>
                  </div>
                  <div className="w-full bg-[#232323] rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-[#19e6f7] to-[#19bba6] h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${percentage}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                  <div className="text-sm text-[#bfc1be] mt-1">
                    {option.votes} {t.totalVotes[language.code]}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
        <div className="text-center mt-8">
          <p className="text-[#bfc1be] text-sm">
            {t.totalVotes[language.code]} {totalVotes} • {t.pollCloses[language.code]}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

// ============================================================================
// EXPORTS
// ============================================================================

// Blog page default export
const Blog = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const links = ["/editor-pick/1", "/editor-pick/2", "/editor-pick/3"];

  return (
    <div dir={language.dir} lang={language.code}>
      <HeroSection language={language} />
      <EditorsPicks links={links} language={language} />
      <AICategoriesExplorer language={language} />
      <WeeklyPoll language={language} />
      <AIMythsBusted language={language} />
      <ToolComparisonTable language={language} />
    </div>
  );
};

export default Blog;