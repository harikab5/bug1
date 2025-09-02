import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { FaRocket, FaBrain, FaEye, FaComments, FaChartLine, FaCogs, FaLightbulb, FaShieldAlt, FaUsers, FaGlobe, FaCode, FaDatabase, FaStar, FaAward, FaBolt, FaMagic, FaArrowRight, FaArrowLeft, FaPlay, FaCheck, FaIndustry, FaHospital, FaGraduationCap, FaShoppingCart, FaBuilding, FaMobile, FaLaptop, FaServer, FaCloud, FaLock, FaSync, FaChartBar, FaRobot, FaMicrochip } from 'react-icons/fa';
import serviceHero from '../assets/servicehero.jpg';
import serviceHeroVideo from '../assets/servicehero.mp4';
import aiChatbotsImg from '../assets/AI Chatbots & Assistants.png';
import computerVisionImg from '../assets/Computer Vision Solutions.jpeg';
import dataAnalysisImg from '../assets/Data Analysis & Forecasting.jpg';
import nlpImg from '../assets/NLP & Language Intelligence.jpg';
import automationImg from '../assets/Automation & Workflow Tools.jpg';
import contentCodeImg from '../assets/Content & Code Generation.jpg';
import discoveryAnalysisImg from '../assets/Discovery & Analysis.jpg';
import strategyPlanningImg from '../assets/Strategy & Planning.jpg';
import developmentTrainingImg from '../assets/Development & Training.jpg';
import deploymentSupportImg from '../assets/Deployment & Support.jpg';
import manufacturingImg from '../assets/manufacturing.jpg';
import healthcareImg from '../assets/healthcare.jpg';
import serviceCtaImg from '../assets/servicecta.jpg';
import { useScrollToTop } from '../hooks/useScrollToTop';

export default function Services() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredService, setHoveredService] = useState(null);
  const [currentProcess, setCurrentProcess] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // Function to handle navigation with scroll to top
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  // Scroll to top when component mounts
  useScrollToTop();

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentProcess((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      id: 1,
      title: {
        en: "AI Chatbots & Assistants",
        ar: "شات بوتات ومساعدين الذكاء الاصطناعي",
        he: "צ'אטבוטים ועוזרי AI"
      },
      description: {
        en: "Our AI Chatbots & Assistants provide seamless, 24/7 customer engagement by understanding context and learning from every interaction. They automate routine queries, deliver personalized responses, and integrate effortlessly with your existing platforms. With advanced natural language processing, they ensure every conversation feels human. Empower your business to scale support and boost satisfaction effortlessly.",
        ar: "شات بوتات ومساعدين الذكاء الاصطناعي لدينا توفر تفاعلًا سلسًا مع العملاء على مدار الساعة من خلال فهم السياق والتعلم من كل تفاعل. تقوم بأتمتة الاستفسارات الروتينية، وتقدم ردودًا شخصية، وتندمج بسهولة مع منصاتك الحالية. بفضل معالجة اللغة الطبيعية المتقدمة، تضمن أن كل محادثة تبدو بشرية. عزز دعم عملك ورضا العملاء بسهولة.",
        he: "הצ'אטבוטים ועוזרי ה-AI שלנו מספקים מעורבות לקוחות חלקה 24/7 על ידי הבנת הקשר ולמידה מכל אינטראקציה. הם אוטומטיים שאילתות שגרתיות, מספקים תגובות מותאמות אישית ומשתלבים בקלות עם הפלטפורמות שלך. עם עיבוד שפה טבעית מתקדם, כל שיחה מרגישה אנושית. הגדל את התמיכה והסיפוק בעסק שלך בקלות."
      },
      icon: FaComments,
      path: "/services/ai-chatbots",
      category: "automation",
      color: "#27bdb5",
      accentColor: "#1de9b6",
      gradient: "linear-gradient(135deg, #0a2342 0%, #27bdb5 100%)",
      features: ["Natural Language Processing", "Multi-language Support", "Integration Ready", "Analytics Dashboard"]
    },
    {
      id: 2,
      title: {
        en: "Computer Vision Solutions",
        ar: "حلول الرؤية الحاسوبية",
        he: "פתרונות ראייה ממוחשבת"
      },
      description: {
        en: "Transform your visual data into actionable insights with our advanced Computer Vision Solutions. Our AI-powered systems excel at object detection, facial recognition, quality control, and automated visual inspections. From manufacturing quality assurance to security monitoring, our computer vision technology delivers real-time analysis with exceptional accuracy. Seamlessly integrate with your existing infrastructure and scale from small applications to enterprise-wide deployments.",
        ar: "حوّل بياناتك البصرية إلى رؤى قابلة للتنفيذ مع حلول الرؤية الحاسوبية المتقدمة لدينا. أنظمتنا المدعومة بالذكاء الاصطناعي تتفوق في اكتشاف الأجسام، التعرف على الوجوه، مراقبة الجودة، والفحص البصري الآلي. من ضمان الجودة في التصنيع إلى مراقبة الأمن، تقنياتنا توفر تحليلاً فورياً بدقة عالية وتتكامل بسهولة مع بنيتك التحتية الحالية.",
        he: "הפוך את הנתונים החזותיים שלך לתובנות מעשיות עם פתרונות הראייה הממוחשבת המתקדמים שלנו. המערכות שלנו מצטיינות בזיהוי אובייקטים, זיהוי פנים, בקרת איכות ובדיקות חזותיות אוטומטיות. מטכנולוגיית אבטחת איכות בייצור ועד ניטור אבטחה, הטכנולוגיה שלנו מספקת ניתוח בזמן אמת בדיוק יוצא דופן ומשתלבת בקלות עם התשתית שלך."
      },
      icon: FaEye,
      path: "/services/computer-vision",
      category: "vision",
      color: "#1de9b6",
      accentColor: "#27bdb5",
      gradient: "linear-gradient(135deg, #0a2342 0%, #1de9b6 100%)",
      features: ["Real-time Processing", "High Accuracy Models", "Custom Training", "API Integration"]
    },
    {
      id: 3,
      title: {
        en: "Data Analysis & Forecasting",
        ar: "تحليل البيانات والتنبؤ",
        he: "ניתוח נתונים וחיזוי"
      },
      description: {
        en: "Unlock the full potential of your data with our comprehensive Data Analysis & Forecasting solutions. Our predictive analytics and machine learning models transform raw data into actionable insights and accurate future predictions. From trend analysis to demand forecasting, our AI algorithms help you make informed decisions that drive business growth. Experience real-time dashboards, automated reporting, and custom analytics tailored to your specific industry needs.",
        ar: "استفد من إمكانيات بياناتك مع حلول تحليل البيانات والتنبؤ الشاملة لدينا. التحليلات التنبؤية ونماذج التعلم الآلي تحول البيانات الخام إلى رؤى قابلة للتنفيذ وتنبؤات دقيقة. من تحليل الاتجاهات إلى التنبؤ بالطلب، تساعدك خوارزميات الذكاء الاصطناعي على اتخاذ قرارات مدروسة تدفع نمو الأعمال. استمتع بلوحات معلومات فورية وتقارير آلية وتحليلات مخصصة حسب احتياجاتك.",
        he: "נצל את הפוטנציאל המלא של הנתונים שלך עם פתרונות ניתוח נתונים וחיזוי מקיפים. אנליטיקה חזויה ומודלים של למידת מכונה הופכים נתונים גולמיים לתובנות מעשיות וחיזויים מדויקים. מניתוח מגמות ועד חיזוי ביקוש, האלגוריתמים שלנו עוזרים לך לקבל החלטות מושכלות שמקדמות את העסק שלך. חווה לוחות מחוונים בזמן אמת, דוחות אוטומטיים ואנליטיקה מותאמת אישית לצרכים שלך."
      },
      icon: FaChartLine,
      path: "/services/data-analysis",
      category: "analytics",
      color: "#27bdb5",
      accentColor: "#1de9b6",
      gradient: "linear-gradient(135deg, #0a2342 0%, #27bdb5 100%)",
      features: ["Predictive Modeling", "Real-time Analytics", "Custom Dashboards", "Automated Reports"]
    },
    {
      id: 4,
      title: {
        en: "NLP & Language Intelligence",
        ar: "الذكاء اللغوي ومعالجة اللغة الطبيعية",
        he: "NLP ואינטליגנציה לשונית"
      },
      description: {
        en: "Harness the power of language with our cutting-edge NLP & Language Intelligence solutions. Our advanced natural language processing capabilities enable sophisticated text analysis, sentiment detection, language translation, and intelligent content generation. Whether you need to analyze customer feedback, automate content creation, or build multilingual applications, our NLP technology provides the foundation for intelligent language understanding. Transform how you interact with text data across all your business applications.",
        ar: "استفد من قوة اللغة مع حلول الذكاء اللغوي ومعالجة اللغة الطبيعية المتقدمة لدينا. قدراتنا المتقدمة في معالجة اللغة الطبيعية تمكنك من تحليل النصوص، اكتشاف المشاعر، الترجمة، وإنشاء المحتوى الذكي. سواء كنت بحاجة لتحليل ملاحظات العملاء، أتمتة إنشاء المحتوى، أو بناء تطبيقات متعددة اللغات، تقنياتنا توفر الأساس لفهم لغوي ذكي. غيّر طريقة تفاعلك مع البيانات النصية في جميع تطبيقات عملك.",
        he: "נצל את כוח השפה עם פתרונות NLP ואינטליגנציה לשונית מתקדמים. יכולות עיבוד השפה הטבעית שלנו מאפשרות ניתוח טקסטים, זיהוי רגשות, תרגום ויצירת תוכן חכם. בין אם אתה צריך לנתח משוב לקוחות, לאוטומט יצירת תוכן או לבנות אפליקציות רב-לשוניות, הטכנולוגיה שלנו מספקת בסיס להבנה לשונית חכמה. שנה את הדרך בה אתה מתקשר עם נתוני טקסט בכל אפליקציות העסק שלך."
      },
      icon: FaBrain,
      path: "/services/nlp-intelligence",
      category: "language",
      color: "#1de9b6",
      accentColor: "#27bdb5",
      gradient: "linear-gradient(135deg, #0a2342 0%, #1de9b6 100%)",
      features: ["Sentiment Analysis", "Text Classification", "Translation Services", "Content Generation"]
    },
    {
      id: 5,
      title: {
        en: "Automation & Workflow Tools",
        ar: "أدوات الأتمتة وسير العمل",
        he: "כלי אוטומציה וזרימת עבודה"
      },
      description: {
        en: "Streamline your business operations with our intelligent Automation & Workflow Tools designed to eliminate manual tasks and boost efficiency. Our AI-powered automation platforms seamlessly integrate with your existing systems to create intelligent workflows that adapt and learn from your business processes. From document processing to customer onboarding, our automation solutions reduce errors, accelerate delivery times, and free your team to focus on strategic initiatives. Experience the future of work with intelligent automation that scales with your business.",
        ar: "بسّط عمليات عملك مع أدوات الأتمتة الذكية المصممة لإلغاء المهام اليدوية وزيادة الكفاءة. منصات الأتمتة المدعومة بالذكاء الاصطناعي تندمج بسلاسة مع أنظمتك الحالية لإنشاء سير عمل ذكي يتكيف ويتعلم من عمليات عملك. من معالجة المستندات إلى تسجيل العملاء، حلولنا تقلل الأخطاء، تسرّع أوقات التسليم، وتحرر فريقك للتركيز على المبادرات الاستراتيجية. اختبر مستقبل العمل مع الأتمتة الذكية التي تتوسع مع عملك.",
        he: "פשט את תפעול העסק שלך עם כלי אוטומציה חכמים שמיועדים לבטל משימות ידניות ולהגביר יעילות. פלטפורמות האוטומציה שלנו משתלבות בקלות עם המערכות שלך ליצירת זרימות עבודה חכמות שמסתגלות ולומדות מתהליכי העסק שלך. מעיבוד מסמכים ועד קליטת לקוחות, הפתרונות שלנו מפחיתים טעויות, מאיצים זמני אספקה ומשחררים את הצוות שלך להתמקד ביוזמות אסטרטגיות. חווה את עתיד העבודה עם אוטומציה חכמה שגדלה עם העסק שלך."
      },
      icon: FaCogs,
      path: "/services/automation-tools",
      category: "automation",
      color: "#27bdb5",
      accentColor: "#1de9b6",
      gradient: "linear-gradient(135deg, #0a2342 0%, #27bdb5 100%)",
      features: ["Process Automation", "Workflow Design", "Integration Hub", "Performance Monitoring"]
    },
    {
      id: 6,
      title: {
        en: "Content & Code Generation",
        ar: "توليد المحتوى والبرمجيات",
        he: "יצירת תוכן וקוד"
      },
      description: {
        en: "Accelerate your development and creative processes with our AI-powered Content & Code Generation tools. Our advanced AI models help developers write cleaner, more efficient code while content creators produce engaging, high-quality material at scale. From automated code reviews to intelligent content optimization, our generation tools adapt to your style and requirements. Whether you're building applications or creating marketing content, our AI assistants work alongside your team to enhance productivity and maintain quality standards.",
        ar: "سرّع عمليات التطوير والإبداع لديك مع أدوات توليد المحتوى والبرمجيات المدعومة بالذكاء الاصطناعي. نماذج الذكاء الاصطناعي المتقدمة تساعد المطورين على كتابة كود أنظف وأكثر كفاءة بينما ينشئ صانعو المحتوى مواد جذابة وعالية الجودة على نطاق واسع. من مراجعات الكود الآلية إلى تحسين المحتوى الذكي، أدواتنا تتكيف مع أسلوبك ومتطلباتك. سواء كنت تبني تطبيقات أو تنشئ محتوى تسويقيًا، مساعدو الذكاء الاصطناعي لدينا يعملون جنبًا إلى جنب مع فريقك لتعزيز الإنتاجية والحفاظ على معايير الجودة.",
        he: "האץ את תהליכי הפיתוח והיצירה שלך עם כלי יצירת תוכן וקוד מבוססי AI. המודלים המתקדמים שלנו עוזרים למפתחים לכתוב קוד נקי ויעיל יותר, בעוד יוצרי התוכן מייצרים חומר איכותי ומרתק בקנה מידה גדול. מביקורות קוד אוטומטיות ועד אופטימיזציה חכמה של תוכן, הכלים שלנו מתאימים לסגנון ולדרישות שלך. בין אם אתה בונה אפליקציות או יוצר תוכן שיווקי, עוזרי ה-AI שלנו עובדים לצד הצוות שלך לשיפור הפרודוקטיביות ושמירה על סטנדרטים גבוהים."
      },
      icon: FaCode,
      path: "/services/content-generation",
      category: "creation",
      color: "#1de9b6",
      accentColor: "#27bdb5",
      gradient: "linear-gradient(135deg, #0a2342 0%, #1de9b6 100%)",
      features: ["Code Generation", "Content Creation", "Template Library", "Quality Assurance"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: FaRocket, color: '#27bdb5' },
    { id: 'automation', name: 'Automation', icon: FaCogs, color: '#1de9b6' },
    { id: 'vision', name: 'Computer Vision', icon: FaEye, color: '#27bdb5' },
    { id: 'analytics', name: 'Analytics', icon: FaChartLine, color: '#1de9b6' },
    { id: 'language', name: 'NLP', icon: FaBrain, color: '#27bdb5' },
    { id: 'creation', name: 'Creation', icon: FaCode, color: '#1de9b6' }
  ];

  const industries = [
    { name: "Healthcare", icon: FaHospital, color: "#27bdb5", desc: "AI-powered diagnostics and patient care" },
    { name: "Education", icon: FaGraduationCap, color: "#1de9b6", desc: "Personalized learning experiences" },
    { name: "E-commerce", icon: FaShoppingCart, color: "#27bdb5", desc: "Smart recommendations and automation" },
    { name: "Finance", icon: FaBuilding, color: "#1de9b6", desc: "Risk assessment and fraud detection" },
    { name: "Manufacturing", icon: FaIndustry, color: "#27bdb5", desc: "Predictive maintenance and quality control" },
    { name: "Technology", icon: FaMicrochip, color: "#1de9b6", desc: "Software development and testing" }
  ];

  const techStack = [
    { name: "Python", icon: FaCode, color: "#27bdb5" },
    { name: "TensorFlow", icon: FaBrain, color: "#1de9b6" },
    { name: "React", icon: FaLaptop, color: "#27bdb5" },
    { name: "AWS", icon: FaCloud, color: "#1de9b6" },
    { name: "Docker", icon: FaServer, color: "#27bdb5" },
    { name: "PostgreSQL", icon: FaDatabase, color: "#1de9b6" }
  ];

  const filteredServices = activeTab === 'all'
    ? services
    : services.filter(service => service.category === activeTab);

  // Translation dictionary
  const t = {
    discoverAi: {
      en: 'Discover AI Tools',
      ar: 'اكتشف أدوات الذكاء الاصطناعي',
      he: 'גלה כלי בינה מלאכותית'
    },
    heroTitle: {
      en: 'Discover Our AI Services',
      ar: 'اكتشف خدمات الذكاء الاصطناعي لدينا',
      he: 'גלה את שירותי הבינה המלאכותית שלנו'
    },
    heroDesc: {
      en: 'Explore a comprehensive suite of AI-powered solutions designed to automate, optimize, and transform your business.',
      ar: 'استكشف مجموعة شاملة من الحلول المدعومة بالذكاء الاصطناعي المصممة لأتمتة وتحسين وتحويل عملك.',
      he: 'גלה מערך של פתרונות בינה מלאכותית לאוטומציה, אופטימיזציה ושדרוג העסק שלך.'
    },
    viewAll: {
      en: 'View All Services',
      ar: 'عرض جميع الخدمات',
      he: 'הצג את כל השירותים'
    },
    learnMore: {
      en: 'Learn More',
      ar: 'اعرف المزيد',
      he: 'למידע נוסף'
    }
  };

  useEffect(() => {
    if (language && language.code) {
      document.documentElement.lang = language.code;
    }
  }, [language]);

  return (
    <div className={`min-h-screen relative overflow-hidden ${theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-gray-50 text-black'}`}
      dir={language.dir}>
      {/* Hero Section with Parallax Effect */}
      <section className="relative py-32 px-4 z-10 overflow-hidden min-h-[545px] flex flex-col items-center justify-center text-center">
      {/* Background Video */}
        <div className="absolute inset-0 z-0">
      <video
        autoPlay
            muted 
        loop
            className="w-full h-full object-cover"
            style={{ filter: theme === 'dark' ? 'brightness(0.5)' : 'brightness(0.7)' }}
      >
            <source src={serviceHeroVideo} type="video/mp4" />
            Your browser does not support the video tag.
      </video>
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
          <div className="mb-4">
            <span className="text-[#27bdb5] bg-[#27bdb514] rounded-full px-4 py-1 text-base font-medium tracking-wide">
              {t.discoverAi[language.code]}
            </span>
          </div>
          <h1 className="font-extrabold mb-6 text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight max-w-5xl">
            {t.heroTitle[language.code]}
          </h1>
          <p className="mb-8 text-center text-white text-lg max-w-2xl mx-auto">
            {t.heroDesc[language.code]}
          </p>
          <div className="flex justify-center w-full">
            <button 
              onClick={() => {
                const servicesSection = document.getElementById('services-section');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-[#27bdb5] hover:bg-[#12716c] text-white font-bold rounded-full px-10 py-3 text-lg shadow-lg"
            >
              {t.viewAll[language.code]}
            </button>
          </div>
      </div>
    </section>
    
      {/* Our Services Section */}
      <section id="services-section" className="w-full py-24 px-4" style={{ background: 'linear-gradient(135deg, #0a2342, #1de9b6)' }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-32">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`flex flex-col md:flex-row${idx % 2 === 1 ? '-reverse' : ''} items-center gap-12`}
            >
              <div className="md:w-1/2 w-full flex justify-center items-center">
                <div className="w-full h-80 flex items-center justify-center bg-[#bfc1be] rounded-2xl shadow-lg">
                  {service.id === 1 ? (
                    <img src={aiChatbotsImg} loading="lazy" alt={service.title} className="w-full h-full object-cover rounded-2xl" />
                  ) : service.id === 2 ? (
                    <img src={computerVisionImg} loading="lazy" alt={service.title} className="w-full h-full object-cover rounded-2xl" />
                  ) : service.id === 3 ? (
                    <img src={dataAnalysisImg} loading="lazy" alt={service.title} className="w-full h-full object-cover rounded-2xl" />
                  ) : service.id === 4 ? (
                    <img src={nlpImg} loading="lazy" alt={service.title} className="w-full h-full object-cover rounded-2xl" />
                  ) : service.id === 5 ? (
                    <img src={automationImg} loading="lazy" alt={service.title} className="w-full h-full object-cover rounded-2xl" />
                  ) : service.id === 6 ? (
                    <img src={contentCodeImg} loading="lazy" alt={service.title} className="w-full h-full object-cover rounded-2xl" />
                  ) : (
                    <service.icon className="text-[#27bdb5] text-8xl" />
                  )}
                </div>
              </div>
              <div className="md:w-1/2 w-full flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{service.title[language.code]}</h2>
                <p className="text-white text-lg mb-6 text-justify leading-relaxed">{service.description[language.code]}</p>
                <button 
                  onClick={() => handleNavigation(service.path)}
                  className="bg-black hover:bg-[#111211] text-white font-bold rounded-full px-8 py-3 text-base shadow transition-colors border-none outline-none w-max"
                >
                  {t.learnMore[language.code]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Methodology Section */}
      <section className={`w-full py-24 px-4 ${theme === 'dark' ? 'bg-[#111211]' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[#27bdb5] text-sm font-semibold mb-2 tracking-wider">{
              {
                en: "HOW IT WORKS",
                ar: "كيف يعمل",
                he: "איך זה עובד"
              }[language.code]
            }</div>
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{
              {
                en: "Get Started with 4 Easy Steps",
                ar: "ابدأ في 4 خطوات سهلة",
                he: "התחל בארבעה שלבים פשוטים"
              }[language.code]
            }</h2>
          </div>
          
          <div className="relative">
            {/* Dashed vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-[#27bdb5] transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-16">
              {[
                {
                  step: "01",
                  title: {
                    en: "Discovery & Analysis",
                    ar: "الاكتشاف والتحليل",
                    he: "גילוי וניתוח"
                  },
                  description: {
                    en: "We begin by understanding your business needs, objectives, and challenges to create a tailored AI strategy that aligns with your goals and requirements.",
                    ar: "نبدأ بفهم احتياجات عملك وأهدافك وتحدياتك لإنشاء استراتيجية ذكاء اصطناعي مخصصة تتماشى مع أهدافك ومتطلباتك.",
                    he: "אנו מתחילים בהבנת צרכי העסק שלך, מטרותיך ואתגריך כדי ליצור אסטרטגיית AI מותאמת אישית שתואמת את היעדים והדרישות שלך."
                  },
                  icon: FaLightbulb
                },
                {
                  step: "02",
                  title: {
                    en: "Strategy & Planning",
                    ar: "التخطيط والاستراتيجية",
                    he: "אסטרטגיה ותכנון"
                  },
                  description: {
                    en: "Our experts design a comprehensive AI solution architecture and roadmap, ensuring every aspect is carefully planned and optimized for your success.",
                    ar: "يقوم خبراؤنا بتصميم بنية حل ذكاء اصطناعي شاملة وخريطة طريق، مع ضمان التخطيط الدقيق والتحسين لكل جانب لنجاحك.",
                    he: "המומחים שלנו מעצבים ארכיטקטורת פתרון AI מקיפה ומפת דרכים, תוך תכנון ואופטימיזציה מדוקדקים לכל פרט להצלחתך."
                  },
                  icon: FaBrain
                },
                {
                  step: "03",
                  title: {
                    en: "Development & Training",
                    ar: "التطوير والتدريب",
                    he: "פיתוח והדרכה"
                  },
                  description: {
                    en: "We build and train AI models using your data, ensuring high accuracy and performance standards that meet your specific business requirements.",
                    ar: "نقوم ببناء وتدريب نماذج الذكاء الاصطناعي باستخدام بياناتك، مع ضمان دقة عالية ومعايير أداء تلبي متطلبات عملك المحددة.",
                    he: "אנו בונים ומאמנים מודלי AI באמצעות הנתונים שלך, תוך הבטחת דיוק גבוה וסטנדרטים של ביצועים המתאימים לדרישות העסק שלך."
                  },
                  icon: FaCode
                },
                {
                  step: "04",
                  title: {
                    en: "Deployment & Support",
                    ar: "النشر والدعم",
                    he: "הטמעה ותמיכה"
                  },
                  description: {
                    en: "We launch and monitor AI solutions in production, providing ongoing support, optimization, and continuous improvement for your business.",
                    ar: "نطلق ونراقب حلول الذكاء الاصطناعي في الإنتاج، ونوفر الدعم المستمر، والتحسين، والتطوير المستمر لعملك.",
                    he: "אנו משיקים ומנטרים פתרונות AI בסביבת ייצור, מספקים תמיכה שוטפת, אופטימיזציה ושיפור מתמיד לעסק שלך."
                  },
                  icon: FaRocket
                }
              ].map((method, idx) => (
                <div key={idx} className={`flex flex-col md:flex-row items-center gap-16 relative ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Text Column */}
                  <div className="md:w-1/2 w-full flex flex-col justify-center md:pl-8 md:pr-8">
                    <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{method.title[language.code]}</h3>
                    <p className={`text-lg leading-relaxed text-justify ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>{method.description[language.code]}</p>
                  </div>
                  
                  {/* Visual Column */}
                  <div className="md:w-1/2 w-full flex justify-center items-center relative">
                    <div className="relative">
                      {/* Icon Container - increased size */}
                                               <div className="w-64 h-40 bg-gradient-to-r from-[#0a2342] to-[#27bdb5] rounded-xl flex items-center justify-center">
                        {method.step === "01" ? (
                          <img src={discoveryAnalysisImg} loading="lazy" alt="Discovery & Analysis" className="w-full h-full object-cover rounded-lg" />
                        ) : method.step === "02" ? (
                          <img src={strategyPlanningImg} loading="lazy" alt="Strategy & Planning" className="w-full h-full object-cover rounded-lg" />
                        ) : method.step === "03" ? (
                          <img src={developmentTrainingImg} loading="lazy" alt="Development & Training" className="w-full h-full object-cover rounded-lg" />
                        ) : method.step === "04" ? (
                          <img src={deploymentSupportImg} loading="lazy" alt="Deployment & Support" className="w-full h-full object-cover rounded-lg" />
                        ) : (
                          <method.icon className="text-white text-4xl" />
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Numbered Badge positioned on the center line */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-[#27bdb5] z-10 hidden md:block" style={{ boxShadow: '0 0 20px #27bdb5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="text-white font-bold text-xl">{method.step}</span>
                  </div>
                </div>
      ))}
    </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className={`w-full pt-12 px-0 ${theme === 'dark' ? 'bg-[#111211]' : 'bg-white'}`}>
        <div className="w-full max-w-none">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#27bdb5] mb-6">{
              {
                en: "Industries We Serve",
                ar: "الصناعات التي نخدمها",
                he: "תעשיות בהן אנו פועלים"
              }[language.code]
            }</h2>
            <p className={`text-lg max-w-3xl mx-auto ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-black'}`}>{
              {
                en: "Our AI solutions empower a wide range of industries to innovate, automate, and grow. Explore the sectors we help transform with intelligent technology.",
                ar: "حلول الذكاء الاصطناعي لدينا تمكّن مجموعة واسعة من الصناعات من الابتكار والأتمتة والنمو. استكشف القطاعات التي نساعدها على التحول بالتكنولوجيا الذكية.",
                he: "הפתרונות שלנו מאפשרים לתעשיות רבות לחדש, לאוטומט ולצמוח. גלה את התחומים בהם אנו מסייעים לשינוי באמצעות טכנולוגיה חכמה."
              }[language.code]
            }</p>
          </div>
          <div className="w-full flex flex-col">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Industry 1 */}
              <div className="relative w-full h-[32rem] group overflow-hidden">
                <img src={manufacturingImg} loading="lazy" alt="Manufacturing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062731cc] to-transparent opacity-80 group-hover:opacity-90 transition duration-300"></div>
                                  <div className="absolute bottom-0 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                    <h3 className="text-2xl font-bold text-white mb-2">{
                      {
                        en: "Manufacturing",
                        ar: "التصنيع",
                        he: "ייצור"
                      }[language.code]
                    }</h3>
                    <p className="text-[#fff] text-base text-justify leading-relaxed">{
                      {
                        en: "AI-driven automation, predictive maintenance, and quality control for modern factories. Our intelligent solutions optimize production processes and enhance operational efficiency while reducing costs and improving product quality through advanced machine learning algorithms.",
                        ar: "الأتمتة المدعومة بالذكاء الاصطناعي، الصيانة التنبؤية، ومراقبة الجودة للمصانع الحديثة. حلولنا الذكية تحسن عمليات الإنتاج وتعزز الكفاءة التشغيلية مع تقليل التكاليف وتحسين جودة المنتج من خلال خوارزميات التعلم الآلي المتقدمة.",
                        he: "אוטומציה מבוססת AI, תחזוקה חזויה ובקרת איכות למפעלים מודרניים. הפתרונות שלנו משפרים תהליכי ייצור ומייעלים תפעול תוך הפחתת עלויות ושיפור איכות המוצר באמצעות אלגוריתמים מתקדמים."
                      }[language.code]
                    }</p>
                  </div>
              </div>
              {/* Industry 2 */}
              <div className="relative w-full h-[32rem] group overflow-hidden">
                <img src={healthcareImg} loading="lazy" alt="Healthcare" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-90 transition duration-300"></div>
                                  <div className="absolute bottom-0 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                    <h3 className="text-2xl font-bold text-white mb-2">{
                      {
                        en: "Healthcare",
                        ar: "الرعاية الصحية",
                        he: "בריאות"
                      }[language.code]
                    }</h3>
                    <p className="text-[#fff] text-base text-justify leading-relaxed">{
                      {
                        en: "AI for diagnostics, patient care, and operational efficiency in healthcare systems. Our advanced algorithms assist in medical imaging analysis and treatment optimization, helping healthcare providers deliver better patient outcomes through predictive analytics and personalized care recommendations.",
                        ar: "الذكاء الاصطناعي للتشخيص، رعاية المرضى، والكفاءة التشغيلية في أنظمة الرعاية الصحية. خوارزمياتنا المتقدمة تساعد في تحليل الصور الطبية وتحسين العلاج، مما يساعد مقدمي الرعاية الصحية على تحقيق نتائج أفضل للمرضى من خلال التحليلات التنبؤية والتوصيات الشخصية.",
                        he: "AI לאבחון, טיפול בחולים וייעול תפעול במערכות בריאות. האלגוריתמים שלנו מסייעים בניתוח דימות רפואי ואופטימיזציה של טיפולים, ומסייעים לספקי בריאות לשפר תוצאות חולים באמצעות אנליטיקה חזויה והמלצות מותאמות אישית."
                      }[language.code]
                    }</p>
                  </div>
              </div>
              {/* Industry 3 */}
              <div className="relative w-full h-[32rem] group overflow-hidden">
                <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80" loading="lazy" alt="Logistics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#29828ecc] to-transparent opacity-80 group-hover:opacity-90 transition duration-300"></div>
                                  <div className="absolute bottom-0 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                    <h3 className="text-2xl font-bold text-white mb-2">{
                      {
                        en: "Logistics",
                        ar: "الخدمات اللوجستية",
                        he: "לוגיסטיקה"
                      }[language.code]
                    }</h3>
                    <p className="text-[#fff] text-base text-justify leading-relaxed">{
                      {
                        en: "Smart routing, demand forecasting, and supply chain optimization with AI. Our intelligent systems streamline transportation networks and optimize inventory management, providing real-time tracking and predictive analytics to reduce delivery times and operational costs.",
                        ar: "التوجيه الذكي، التنبؤ بالطلب، وتحسين سلسلة التوريد باستخدام الذكاء الاصطناعي. أنظمتنا الذكية تبسط شبكات النقل وتحسن إدارة المخزون، وتوفر تتبعًا فوريًا وتحليلات تنبؤية لتقليل أوقات التسليم وتكاليف التشغيل.",
                        he: "ניתוב חכם, חיזוי ביקוש ואופטימיזציה של שרשרת אספקה עם AI. המערכות שלנו מייעלות רשתות תחבורה ומנהלות מלאי, מספקות מעקב בזמן אמת ואנליטיקה חזויה להפחתת זמני אספקה ועלויות תפעול."
                      }[language.code]
                    }</p>
                  </div>
              </div>
              {/* Industry 4 with overlay */}
              <div className="relative w-full h-[32rem] group overflow-hidden">
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80" loading="lazy" alt="Retail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111211cc] to-transparent opacity-80 group-hover:opacity-90 transition duration-300"></div>
                                  <div className="absolute bottom-0 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                    <h3 className="text-2xl font-bold text-white mb-2">{
                      {
                        en: "Retail & eCommerce",
                        ar: "التجزئة والتجارة الإلكترونية",
                        he: "קמעונאות ומסחר אלקטרוני"
                      }[language.code]
                    }</h3>
                    <p className="text-[#fff] text-base text-justify leading-relaxed">{
                      {
                        en: "Personalized recommendations, inventory management, and customer insights powered by AI. Our solutions enhance customer experience through intelligent product suggestions and dynamic pricing strategies, driving increased sales and customer loyalty through data-driven personalization.",
                        ar: "التوصيات الشخصية، إدارة المخزون، ورؤى العملاء المدعومة بالذكاء الاصطناعي. حلولنا تعزز تجربة العملاء من خلال اقتراحات المنتجات الذكية واستراتيجيات التسعير الديناميكية، مما يزيد من المبيعات وولاء العملاء عبر التخصيص المعتمد على البيانات.",
                        he: "המלצות מותאמות אישית, ניהול מלאי ותובנות לקוח מבוססות AI. הפתרונות שלנו משפרים את חווית הלקוח באמצעות הצעות מוצרים חכמות ואסטרטגיות תמחור דינמיות, ומגדילים מכירות ונאמנות לקוחות בהתאמה אישית מבוססת נתונים."
                      }[language.code]
                    }</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethical AI & Privacy Section */}
      <section className="w-full py-24 px-4" style={{ background: 'linear-gradient(135deg, #0a2342 0%, #27bdb5 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[#1de9b6] text-sm font-semibold mb-2 tracking-wider">OUR COMMITMENT</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">{
              {
                en: "Ethical AI & Privacy",
                ar: "الذكاء الاصطناعي الأخلاقي والخصوصية",
                he: "בינה מלאכותית אתית ופרטיות"
              }[language.code]
            }</h2>
            <p className="text-white text-lg max-w-3xl mx-auto">{
              {
                en: "We believe in responsible AI development that prioritizes transparency, fairness, and data protection. Our commitment to ethical practices ensures trust and reliability in every solution we deliver.",
                ar: "نؤمن بتطوير الذكاء الاصطناعي المسؤول الذي يعطي الأولوية للشفافية والعدالة وحماية البيانات. التزامنا بالممارسات الأخلاقية يضمن الثقة والموثوقية في كل حل نقدمه.",
                he: "אנו מאמינים בפיתוח AI אחראי שמעדיף שקיפות, הוגנות והגנה על נתונים. המחויבות שלנו לאתיקה מבטיחה אמון ואמינות בכל פתרון שאנו מספקים."
              }[language.code]
            }</p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left: Commitment Cards */}
            <div className="space-y-8">
              <div className={`${theme === 'dark' ? 'bg-[#111211]' : 'bg-white'} rounded-2xl p-8 shadow-xl border border-[#27bdb5] hover:border-[#1de9b6] transition-all duration-300 group`}>
                <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Data Privacy & Security</h3>
                <p className={`text-lg leading-relaxed mb-4 ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>
                  <div className="text-justify">
                    We implement enterprise-grade encryption, secure data handling practices, and strict access controls to protect your sensitive information. Our systems comply with GDPR, CCPA, and other global privacy regulations.
                  </div>
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#27bdb5] text-black px-3 py-1 rounded-full text-sm font-semibold">GDPR Compliant</span>
                  <span className="bg-[#1de9b6] text-black px-3 py-1 rounded-full text-sm font-semibold">End-to-End Encryption</span>
                  <span className="bg-[#27bdb5] text-black px-3 py-1 rounded-full text-sm font-semibold">SOC 2 Type II</span>
                </div>
              </div>

              <div className={`${theme === 'dark' ? 'bg-[#111211]' : 'bg-white'} rounded-2xl p-8 shadow-xl border border-[#27bdb5] hover:border-[#1de9b6] transition-all duration-300 group`}>
                <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Bias-Free AI Development</h3>
                <p className={`text-lg leading-relaxed mb-4 text-justify ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>
                  Our AI models are trained on diverse, representative datasets and undergo rigorous bias testing. We continuously monitor and audit our algorithms to ensure fair and equitable outcomes for all users.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#27bdb5] text-black px-3 py-1 rounded-full text-sm font-semibold">Diverse Training Data</span>
                  <span className="bg-[#1de9b6] text-black px-3 py-1 rounded-full text-sm font-semibold">Bias Detection</span>
                  <span className="bg-[#27bdb5] text-black px-3 py-1 rounded-full text-sm font-semibold">Regular Audits</span>
                </div>
              </div>

              <div className={`${theme === 'dark' ? 'bg-[#111211]' : 'bg-white'} rounded-2xl p-8 shadow-xl border border-[#27bdb5] hover:border-[#1de9b6] transition-all duration-300 group`}>
                <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Transparency & Explainability</h3>
                <p className={`text-lg leading-relaxed mb-4 text-justify ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>
                  We believe in transparent AI that you can understand and trust. Our models provide clear explanations for their decisions, enabling you to validate results and build confidence in AI-powered solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#27bdb5] text-black px-3 py-1 rounded-full text-sm font-semibold">Explainable AI</span>
                  <span className="bg-[#1de9b6] text-black px-3 py-1 rounded-full text-sm font-semibold">Decision Tracking</span>
                  <span className="bg-[#27bdb5] text-black px-3 py-1 rounded-full text-sm font-semibold">Audit Trails</span>
                </div>
              </div>
            </div>

            {/* Right: Certifications & Compliance */}
            <div className="space-y-8">
              <div className={`${theme === 'dark' ? 'bg-[#111211]' : 'bg-white'} rounded-2xl p-8 shadow-xl border border-[#27bdb5] hover:border-[#1de9b6] transition-all duration-300`}>
                <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>AI Ethics Framework</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-[#0a2342] to-[#27bdb5] rounded-xl">
                    <h4 className="text-white font-bold mb-2 text-base">Human-Centric Design</h4>
                    <p className="text-[#bfc1be] text-xs leading-relaxed">
                      <div className="text-justify text-white">
                        Our AI solutions prioritize human well-being and dignity, ensuring AI enhances rather than replaces human capabilities.
                      </div>
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#0a2342] to-[#1de9b6] rounded-xl">
                    <h4 className="text-white font-bold mb-2 text-base">Continuous Monitoring</h4>
                    <p className="text-[#bfc1be] text-xs leading-relaxed">
                      <div className="text-justify text-white">
                        Real-time monitoring systems track AI performance and detect potential biases throughout the AI lifecycle.
                      </div>
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#0a2342] to-[#27bdb5] rounded-xl">
                    <h4 className="text-white font-bold mb-2 text-base">Stakeholder Engagement</h4>
                    <p className="text-[#bfc1be] text-xs leading-relaxed">
                      <div className="text-justify text-white">
                        We engage diverse stakeholders including users, communities, and experts to improve ethical AI practices.
                      </div>
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#0a2342] to-[#1de9b6] rounded-xl">
                    <h4 className="text-white font-bold mb-2 text-base">Responsible Innovation</h4>
                    <p className="text-[#bfc1be] text-xs leading-relaxed">
                      <div className="text-justify text-white">
                        {({
                          en: "We balance innovation with responsibility, ensuring AI advancements benefit society while minimizing risks.",
                          ar: "نوازن بين الابتكار والمسؤولية، ونضمن أن تقدم الذكاء الاصطناعي يفيد المجتمع مع تقليل المخاطر.",
                          he: "אנו מאזנים חדשנות עם אחריות, ומבטיחים שהתקדמות ה-AI תועיל לחברה תוך מזעור סיכונים."
                        })[language.code]}
                      </div>
                    </p>
                  </div>
                </div>
              </div>

              <div className={`${theme === 'dark' ? 'bg-[#111211]' : 'bg-white'} rounded-2xl p-8 shadow-xl border border-[#27bdb5] hover:border-[#1de9b6] transition-all duration-300`}>
                <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{
                  {
                    en: "Our Privacy Promise",
                    ar: "وعدنا بالخصوصية",
                    he: "הבטחת הפרטיות שלנו"
                  }[language.code]
                }</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <p className={`${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>• {
                      {
                        en: "We never sell, rent, or share your personal data with third parties",
                        ar: "لن نبيع أو نؤجر أو نشارك بياناتك الشخصية مع أطراف ثالثة",
                        he: "אנו לעולם לא מוכרים, משכירים או משתפים את הנתונים האישיים שלך עם צדדים שלישיים"
                      }[language.code]
                    }</p>
                  </div>
                  <div className="flex items-start">
                    <p className={`${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>• {
                      {
                        en: "You have full control over your data with easy access and deletion options",
                        ar: "لديك سيطرة كاملة على بياناتك مع خيارات وصول وحذف سهلة",
                        he: "יש לך שליטה מלאה על הנתונים שלך עם אפשרויות גישה ומחיקה נוחות"
                      }[language.code]
                    }</p>
                  </div>
                  <div className="flex items-start">
                    <p className={`${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>• {
                      {
                        en: "All AI models are trained on anonymized data to protect individual privacy",
                        ar: "جميع نماذج الذكاء الاصطناعي مدربة على بيانات مجهولة لحماية الخصوصية الفردية",
                        he: "כל מודלי ה-AI מאומנים על נתונים אנונימיים להגנה על פרטיות אישית"
                      }[language.code]
                    }</p>
                  </div>
                  <div className="flex items-start">
                    <p className={`${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>• {
                      {
                        en: "Regular security audits and penetration testing ensure ongoing protection",
                        ar: "عمليات تدقيق أمنية منتظمة واختبارات اختراق تضمن الحماية المستمرة",
                        he: "בדיקות אבטחה סדירות ומבחני חדירה מבטיחים הגנה מתמשכת"
                      }[language.code]
                    }</p>
                  </div>
                  <div className="flex items-start">
                    <p className={`${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>• {
                      {
                        en: "Transparent privacy policies with clear explanations of data usage",
                        ar: "سياسات خصوصية شفافة مع تفسيرات واضحة لاستخدام البيانات",
                        he: "מדיניות פרטיות שקופה עם הסברים ברורים לשימוש בנתונים"
                      }[language.code]
                    }</p>
                  </div>
                  <div className="flex items-start">
                    <p className={`${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>• {
                      {
                        en: "End-to-end encryption protects your data in transit and at rest",
                        ar: "التشفير من طرف إلى طرف يحمي بياناتك أثناء النقل وفي التخزين",
                        he: "הצפנה מקצה לקצה מגנה על הנתונים שלך במעבר ובמנוחה"
                      }[language.code]
                    }</p>
                  </div>
                  <div className="flex items-start">
                    <p className={`${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>• {
                      {
                        en: "Compliance with GDPR, CCPA, and other global privacy regulations",
                        ar: "الامتثال لـ GDPR وCCPA وغيرها من لوائح الخصوصية العالمية",
                        he: "עמידה בתקנות פרטיות גלובליות כמו GDPR ו-CCPA"
                      }[language.code]
                    }</p>
                  </div>
                  <div className="flex items-start">
                    <p className={`${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>• {
                      {
                        en: "Regular privacy impact assessments and risk evaluations",
                        ar: "تقييمات منتظمة لتأثير الخصوصية وتقييمات المخاطر",
                        he: "הערכות השפעה על פרטיות ובדיקות סיכונים סדירות"
                      }[language.code]
                    }</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Get Started with AI Today Section */}
      <section className={`w-full py-24 px-4 ${theme === 'dark' ? 'bg-[#111211]' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-stretch gap-12">
            {/* Left: Text Content */}
            <div className="flex-1 flex flex-col items-start justify-center lg:pr-8" style={{maxHeight: '500px'}}>
              <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 leading-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                {
                  {
                    en: "Get Started with AI Today",
                    ar: "ابدأ مع الذكاء الاصطناعي اليوم",
                    he: "התחל עם AI היום"
                  }[language.code]
                }<br />
              </h2>
              <p className={`text-lg mb-6 leading-relaxed ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>
                <div className="text-justify">{
                  {
                    en: "Ready to implement AI solutions? Our expert team will guide you through a simple 3-step process to get your AI tools up and running. From chatbots to data analysis, we'll help you choose and deploy the right solutions for your needs.",
                    ar: "هل أنت جاهز لتطبيق حلول الذكاء الاصطناعي؟ سيقوم فريقنا الخبير بإرشادك خلال عملية بسيطة من 3 خطوات لتشغيل أدوات الذكاء الاصطناعي الخاصة بك. من الشات بوت إلى تحليل البيانات، سنساعدك في اختيار ونشر الحلول المناسبة لاحتياجاتك.",
                    he: "מוכן ליישם פתרונות AI? הצוות המומחה שלנו ילווה אותך בתהליך פשוט בן 3 שלבים להפעיל את כלי ה-AI שלך. מצ'אטבוטים ועד ניתוח נתונים, נעזור לך לבחור וליישם את הפתרונות הנכונים לצרכים שלך."
                  }[language.code]
                }</div>
              </p>
              <p className={`text-base mb-6 leading-relaxed ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>
                <div className="text-justify">{
                  {
                    en: "Our comprehensive AI implementation process includes thorough assessment of your current systems, customized solution design, seamless integration with existing workflows, and ongoing support to ensure optimal performance. Providing tailored recommendations that align with your business goals.",
                    ar: "تشمل عملية تنفيذ الذكاء الاصطناعي الشاملة لدينا تقييمًا دقيقًا لأنظمتك الحالية، وتصميم حلول مخصصة، ودمجًا سلسًا مع سير العمل الحالي، ودعمًا مستمرًا لضمان الأداء الأمثل. نقدم توصيات مخصصة تتماشى مع أهداف عملك.",
                    he: "תהליך יישום ה-AI המקיף שלנו כולל הערכה יסודית של המערכות שלך, עיצוב פתרון מותאם אישית, אינטגרציה חלקה עם תהליכי עבודה קיימים ותמיכה שוטפת לביצועים מיטביים. אנו מספקים המלצות מותאמות אישית בהתאם ליעדי העסק שלך."
                  }[language.code]
                }</div>
              </p>
              <p className={`text-base mb-8 leading-relaxed ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>
                <div className="text-justify">
                 </div>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <button 
                  onClick={() => {
                    const servicesSection = document.getElementById('services-section');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-[#27bdb5] hover:bg-[#12716c] text-white font-bold rounded-lg px-8 py-3 text-base shadow transition-colors border-none outline-none w-full sm:w-auto"
                >
                  {({
                    en: "Start Your AI Journey",
                    ar: "ابدأ رحلتك مع الذكاء الاصطناعي",
                    he: "התחל את מסע ה-AI שלך"
                  })[language.code]}
                </button>
                <button 
                  onClick={() => handleNavigation('/contact-us')}
                  className="bg-transparent border border-[#27bdb5] text-[#27bdb5] hover:bg-[#27bdb5] hover:text-white font-bold rounded-lg px-8 py-3 text-base shadow transition-colors w-full sm:w-auto"
                >
                  {({
                    en: "Contact Our Experts",
                    ar: "تواصل مع خبرائنا",
                    he: "צור קשר עם המומחים שלנו"
                  })[language.code]}
                </button>
              </div>
            </div>
            
            {/* Right: Image */}
            <div className="flex-1 flex justify-center items-center h-full mt-8 lg:mt-0">
              <div className="relative w-full max-w-md">
                <img 
                  src={serviceCtaImg} 
                  loading="lazy"
                  alt="AI Services CTA" 
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                  style={{maxHeight: '500px', filter: 'brightness(1.1)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  </div>
  );
}
