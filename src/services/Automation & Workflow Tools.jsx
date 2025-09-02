import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import heroVideo from "../assets/Automation & Workflow Tools.mp4";
import { useTheme } from "../context/ThemeContext";
import howItWorksImg from '../assets/Automation & Workflow Tools1.webp';
import agentImg from '../assets/Automation & Workflow Tools2.jpg';
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

if (typeof document !== 'undefined' && !document.getElementById('automation-style')) {
  const style = document.createElement('style');
  style.id = 'automation-style';
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
      en: "Automation & Workflow Tools",
      ar: "أدوات الأتمتة وسير العمل",
      he: "כלי אוטומציה וזרימת עבודה"
    },
    subtitle: {
      en: "Transform your business operations with intelligent automation that eliminates repetitive tasks, reduces errors, and boosts productivity across your organization.",
      ar: "حوّل عمليات عملك مع أتمتة ذكية تلغي المهام المتكررة، تقلل الأخطاء، وتعزز الإنتاجية في جميع أنحاء مؤسستك.",
      he: "שנה את תפעול העסק שלך עם אוטומציה חכמה שמבטלת משימות חוזרות, מפחיתה טעויות ומגבירה פרודוקטיביות בכל הארגון."
    },
    desc: {
      en: "Powered by advanced workflow automation and intelligent process management, our tools deliver human-like efficiency while handling complex workflows and providing instant solutions.",
      ar: "مدعومة بأتمتة سير عمل متقدمة وإدارة عمليات ذكية، أدواتنا تقدم كفاءة بشرية أثناء التعامل مع سير عمل معقد وتوفير حلول فورية.",
      he: "מופעל על ידי אוטומציה מתקדמת וניהול תהליכים חכם, הכלים שלנו מספקים יעילות אנושית תוך טיפול בזרימות עבודה מורכבות ומתן פתרונות מיידיים."
    },
    button: {
      en: "Explore Features",
      ar: "استكشف الميزات",
      he: "גלה תכונות"
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
        en: "Request a Demo or Consultation",
        ar: "اطلب عرضًا توضيحيًا أو استشارة",
        he: "בקש הדגמה או ייעוץ"
      },
      {
        en: "Define Your Use Case",
        ar: "حدد حالة الاستخدام الخاصة بك",
        he: "הגדר את מקרי השימוש שלך"
      },
      {
        en: "Customize & Integrate",
        ar: "خصص وادمج",
        he: "התאם ואינטגר"
      },
      {
        en: "Test & Optimize",
        ar: "اختبر وحسّن",
        he: "בדוק ואופטימיזציה"
      },
      {
        en: "Go Live & Scale",
        ar: "انطلق ووسّع",
        he: "הפעל והגדל"
      }
    ],
    heading: {
      en: "How it Works",
      ar: "كيف يعمل",
      he: "איך זה עובד"
    },
    subheading: {
      en: "Step-by-Step: Automation Process",
      ar: "خطوة بخطوة: عملية الأتمتة",
      he: "שלב אחר שלב: תהליך אוטומציה"
    },
    button: {
      en: "Get Started with Automation",
      ar: "ابدأ مع الأتمتة",
      he: "התחל עם אוטומציה"
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
        en: "Process Automation",
        ar: "أتمتة العمليات",
        he: "אוטומציית תהליכים"
      },
      desc: {
        en: "Advanced automation algorithms understand business processes, workflows, and decision points for intelligent automation.",
        ar: "خوارزميات أتمتة متقدمة تفهم العمليات التجارية ونقاط القرار لأتمتة ذكية.",
        he: "אלגוריתמים מתקדמים מבינים תהליכים עסקיים ונקודות החלטה לאוטומציה חכמה."
      },
      icon: "⚙"
    },
    {
      title: {
        en: "Multi-Platform Integration",
        ar: "تكامل متعدد المنصات",
        he: "אינטגרציה רב-פלטפורמית"
      },
      desc: {
        en: "Deploy across websites, mobile apps, enterprise systems, and cloud platforms with seamless connectivity.",
        ar: "انشر عبر المواقع والتطبيقات والأنظمة المؤسسية والسحابة باتصال سلس.",
        he: "פרוס באתרים, אפליקציות, מערכות ארגוניות וענן עם קישוריות חלקה."
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
        en: "Provide instant automation and support around the clock without human intervention.",
        ar: "توفير أتمتة ودعم فوريين على مدار الساعة دون تدخل بشري.",
        he: "ספק אוטומציה ותמיכה מיידית מסביב לשעון ללא התערבות אנושית."
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
        en: "Remember workflow history and business rules across processes. AI learns to provide optimized automation.",
        ar: "تذكر تاريخ سير العمل وقواعد الأعمال عبر العمليات. يتعلم الذكاء الاصطناعي لتقديم أتمتة محسنة.",
        he: "זכור היסטוריית זרימות עבודה וחוקי עסק. ה-AI לומד לספק אוטומציה מיטבית."
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
        en: "Automatically detect complex processes and transfer to human oversight with priority scoring and smooth handoffs.",
        ar: "كشف العمليات المعقدة تلقائيًا وتحويلها للإشراف البشري مع تحديد الأولويات وانتقال سلس.",
        he: "זיהוי אוטומטי של תהליכים מורכבים והעברה לפיקוח אנושי עם ניקוד עדיפויות והעברה חלקה."
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
        en: "Real-time dashboard with automation performance, efficiency metrics, and ROI tracking for optimization.",
        ar: "لوحة تحكم فورية بأداء الأتمتة، مقاييس الكفاءة، وتتبع العائد للتحسين.",
        he: "לוח מחוונים בזמן אמת עם ביצועי אוטומציה, מדדי יעילות ומעקב ROI לאופטימיזציה."
      },
      icon: "📊"
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
              en: "Automate Your Business Like Never Before",
              ar: "أتمت عملك كما لم يحدث من قبل",
              he: "אוטומציה לעסק שלך כמו שלא היה מעולם"
            }[language.code]
          }</div>
          <p className={`text-xl mb-6 max-w-md ${theme === 'dark' ? 'text-white' : 'text-white'}`}>{
            {
              en: "Our automation platform streamlines your workflows, increases efficiency, and reduces manual effort, letting you focus on what matters most.",
              ar: "منصة الأتمتة لدينا تبسط سير العمل، تزيد الكفاءة، وتقلل الجهد اليدوي، لتتمكن من التركيز على الأهم.",
              he: "הפלטפורמה שלנו מייעלת תהליכים, מגדילה יעילות ומפחיתה עבודה ידנית כדי שתתמקד בעיקר."
            }[language.code]
          }</p>
          <ul className={`list-disc pl-5 text-lg mb-8 space-y-2 ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
            <li>{
              {
                en: "Automate repetitive tasks in seconds",
                ar: "أتمت المهام المتكررة في ثوانٍ",
                he: "אוטומציה של משימות חוזרות בשניות"
              }[language.code]
            }</li>
            <li>{
              {
                en: "Integrate with your favorite tools",
                ar: "تكامل مع أدواتك المفضلة",
                he: "אינטגרציה עם הכלים המועדפים עליך"
              }[language.code]
            }</li>
            <li>{
              {
                en: "24/7 automated operations",
                ar: "تشغيل آلي على مدار الساعة",
                he: "הפעלה אוטומטית 24/7"
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
      en: "Reduce operational costs by up to 70% while improving process accuracy and efficiency.",
      ar: "قلل التكاليف التشغيلية بنسبة تصل إلى 70% مع تحسين دقة وكفاءة العمليات.",
      he: "הפחת עלויות תפעול ב-70% תוך שיפור דיוק ויעילות התהליכים."
    },
    {
      en: "Handle unlimited workflows simultaneously with enterprise-grade reliability and scalability.",
      ar: "إدارة سير عمل غير محدود في وقت واحد مع موثوقية وقابلية توسع على مستوى المؤسسات.",
      he: "נהל זרימות עבודה בלתי מוגבלות במקביל עם אמינות וסקלאביליות ברמה ארגונית."
    },
    {
      en: "Simple integration with popular business systems and custom development support.",
      ar: "تكامل بسيط مع أنظمة الأعمال الشائعة ودعم تطوير مخصص.",
      he: "אינטגרציה פשוטה עם מערכות עסקיות פופולריות ותמיכה בפיתוח מותאם."
    },
    {
      en: "Advanced automation technology with intelligent decision-making capabilities.",
      ar: "تقنية أتمتة متقدمة مع قدرات اتخاذ قرار ذكية.",
      he: "טכנולוגיית אוטומציה מתקדמת עם יכולות קבלת החלטות חכמות."
    },
    {
      en: "24/7 automated operations for continuous business processes.",
      ar: "تشغيل آلي على مدار الساعة لعمليات أعمال مستمرة.",
      he: "הפעלה אוטומטית 24/7 לתהליכים עסקיים רציפים."
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
            <img src={agentImg} loading="lazy" alt="Automation Tools" className="w-full h-full object-cover rounded-2xl shadow-xl relative z-10" style={{minHeight: '400px'}} />
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
                en: "Our automation tools deliver measurable business value, helping you scale operations, boost efficiency, and reduce costs.",
                ar: "أدوات الأتمتة لدينا تقدم قيمة أعمال قابلة للقياس، وتساعدك على توسيع العمليات، وزيادة الكفاءة، وتقليل التكاليف.",
                he: "הכלים שלנו לאוטומציה מספקים ערך עסקי מדיד, עוזרים לך להגדיל פעילות, לשפר יעילות ולהפחית עלויות."
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
      title: "Advanced Automation Technology",
      desc: "Built with state-of-the-art workflow automation and intelligent process management capabilities.",
      stat: "99.5%"
    },
    {
      title: "Cost-Effective Solution",
      desc: "Reduce operational costs by up to 70% while improving process accuracy and efficiency.",
      stat: "70%"
    },
    {
      title: "Scalable & Reliable",
      desc: "Handle unlimited workflows simultaneously with enterprise-grade reliability and uptime.",
      stat: "99.9%"
    },
    {
      title: "Easy Integration",
      desc: "Simple integration with popular business systems and custom development support.",
      stat: "24hrs"
    }
  ];

  return (
    <section className={`${theme === "dark" ? "bg-[#0a0a0a]" : "bg-white"} py-20 px-6`}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto">
        <motion.h2 variants={fadeUp} className="text-4xl font-bold text-center mb-16">
          Why Choose <span className="text-[#19e6f7]">Our Automation Tools</span>
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
        en: 'Automated transaction processing, compliance monitoring, and risk assessment workflows.',
        ar: 'معالجة المعاملات تلقائيًا، مراقبة الامتثال، وسير عمل تقييم المخاطر.',
        he: 'עיבוד עסקאות אוטומטי, ניטור תאימות וזרימות עבודה להערכת סיכונים.'
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
        en: 'Order processing automation, inventory management, and customer service workflows.',
        ar: 'أتمتة معالجة الطلبات، إدارة المخزون، وسير عمل خدمة العملاء.',
        he: 'אוטומציה של עיבוד הזמנות, ניהול מלאי וזרימות שירות לקוחות.'
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
        en: 'Lead qualification, document processing, and property management automation.',
        ar: 'تأهيل العملاء المحتملين، معالجة المستندات، وأتمتة إدارة العقارات.',
        he: 'סינון לידים, עיבוד מסמכים ואוטומציה של ניהול נכסים.'
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
        en: 'Booking automation, guest service workflows, and operational efficiency tools.',
        ar: 'أتمتة الحجز، سير عمل خدمة الضيوف، وأدوات كفاءة التشغيل.',
        he: 'אוטומציה של הזמנות, זרימות שירות אורחים וכלי יעילות תפעולית.'
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
        en: 'Patient scheduling, medical record processing, and administrative workflow automation.',
        ar: 'جدولة المرضى، معالجة السجلات الطبية، وأتمتة سير العمل الإداري.',
        he: 'תזמון מטופלים, עיבוד רשומות רפואיות ואוטומציה של תהליכים אדמיניסטרטיביים.'
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
        en: 'Student enrollment automation, grading workflows, and administrative process optimization.',
        ar: 'أتمتة تسجيل الطلاب، سير عمل التصحيح، وتحسين العمليات الإدارية.',
        he: 'אוטומציה של רישום תלמידים, זרימות בדיקת ציונים ואופטימיזציה של תהליכים אדמיניסטרטיביים.'
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
              en: "Discover how automation and workflow tools are revolutionizing businesses across industries, providing intelligent process automation, accelerated operations, and enhanced productivity. Our solutions adapt to your specific industry needs, delivering measurable results and ROI.",
              ar: "اكتشف كيف تغير أدوات الأتمتة وسير العمل الأعمال عبر الصناعات، وتوفر أتمتة ذكية للعمليات، وتسريع العمليات، وزيادة الإنتاجية. حلولنا تتكيف مع احتياجات صناعتك وتقدم نتائج قابلة للقياس وعائد استثمار.",
              he: "גלה כיצד כלי אוטומציה וזרימת עבודה משנים עסקים בענפים שונים, מספקים אוטומציה חכמה, האצת תהליכים, והגברת פרודוקטיביות. הפתרונות שלנו מותאמים לצרכי התעשייה שלך ומספקים תוצאות מדידות והחזר השקעה."
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
          en: "Basic Workflow Automation",
          ar: "أتمتة سير عمل أساسية",
          he: "אוטומציית זרימת עבודה בסיסית"
        },
        {
          en: "Up to 1,000 workflows/month",
          ar: `حتى 1,000 سير عمل/${monthText[language.code]}`,
          he: `עד 1,000 זרימות עבודה ב${monthText[language.code]}`
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
          en: "Advanced Workflow Automation",
          ar: "أتمتة سير عمل متقدمة",
          he: "אוטומציית זרימת עבודה מתקדמת"
        },
        {
          en: "Unlimited workflows",
          ar: "سير عمل غير محدود",
          he: "זרימות עבודה ללא הגבלה"
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
          en: "Custom Automation Solutions",
          ar: "حلول أتمتة مخصصة",
          he: "פתרונות אוטומציה מותאמים אישית"
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
                  ? 'border-[#19e6f7] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] -mt-8 z-10'
                  : 'border-gray-700 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]'
              } hover:scale-110 hover:shadow-2xl hover:shadow-[#19e6f7]/40`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#19e6f7] text-black px-4 py-2 rounded-full font-semibold text-sm">
                  {{ en: "Most Popular", ar: "الأكثر شهرة", he: "הפופולרי ביותר" }[language.code]}
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
const AutomationWorkflowTools = () => {
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

export default AutomationWorkflowTools;