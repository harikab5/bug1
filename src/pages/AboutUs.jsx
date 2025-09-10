import React from "react";
import abouthero from '../assets/aboutbg.mp4';
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import ourvalues from '../assets/values.jpeg';
import empathyImg from '../assets/empathy.jpeg';
import defineImg from '../assets/define.jpeg';
import ideasImg from '../assets/ideas.jpeg';
import feedbackImg from '../assets/feedback.jpeg';
import prototypeImg from '../assets/prototype.jpeg';
import testImg from '../assets/test.jpeg';
import { useScrollToTop } from '../hooks/useScrollToTop';

const AboutUs = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  useScrollToTop();

  // Carousel logic for 'What Makes Us Unique'
  const [uniqueCurrentIndex, setUniqueCurrentIndex] = React.useState(0);

  // Translations
  const t = {
    heroTitle: {
      en: "About Us",
      ar: "معلومات عنا",
      he: "עלינו"
    },
    heroSubtitle: {
      en: "Empowering Innovation Through AI Excellence",
      ar: "تمكين الابتكار من خلال التميز في الذكاء الاصطناعي",
      he: "העצמת חדשנות באמצעות מצוינות ב-AI"
    },
    heroDesc: {
      en: "Learn about our journey, values, and the team driving innovation in AI and digital solutions.",
      ar: "تعرف على رحلتنا وقيمنا والفريق الذي يقود الابتكار في الذكاء الاصطناعي والحلول الرقمية.",
      he: "הכירו את המסע שלנו, הערכים והצוות שמוביל חדשנות ב-AI ובפתרונות דיגיטליים."
    },
    growthTitle: {
      en: "Our Growth Through Years",
      ar: "نمونا عبر السنوات",
      he: "הצמיחה שלנו לאורך השנים"
    },
    growthDesc1: {
      en: "From launching our first AI platform to becoming a global leader in AI solutions, our journey has been marked by continuous innovation and growth.",
      ar: "من إطلاق أول منصة ذكاء اصطناعي لنا إلى أن أصبحنا روادًا عالميين في حلول الذكاء الاصطناعي، تميزت رحلتنا بالابتكار والنمو المستمر.",
      he: "מהשקת פלטפורמת ה-AI הראשונה שלנו ועד להפיכה למובילים גלובליים בפתרונות AI, המסע שלנו מאופיין בחדשנות וצמיחה מתמדת."
    },
    growthDesc2: {
      en: "We started with a simple mission: to democratize AI technology and make powerful AI tools accessible to businesses of all sizes. Today, we are  proud to serve thousands of organizations worldwide, helping them leverage the power of AI to drive innovation, efficiency, and growth.",
      ar: "بدأنا بمهمة بسيطة: ديمقراطية تكنولوجيا الذكاء الاصطناعي وجعل الأدوات القوية متاحة لجميع الشركات. اليوم، نحن فخورون بخدمة آلاف المؤسسات حول العالم، ومساعدتهم على الاستفادة من قوة الذكاء الاصطناعي لتحقيق الابتكار والكفاءة والنمو.",
      he: "התחלנו במשימה פשוטה: להנגיש את טכנולוגיית ה-AI ולספק כלים עוצמתיים לכל סוגי העסקים. כיום אנו גאים לשרת אלפי ארגונים ברחבי העולם ולעזור להם למנף את כוח ה-AI לחדשנות, יעילות וצמיחה."
    },
    achievements: {
      en: "Key Achievements",
      ar: "الإنجازات الرئيسية",
      he: "הישגים מרכזיים"
    },
    achievementList: [
      {
        en: "50+ cutting-edge AI tools and solutions",
        ar: "أكثر من 50 أداة وحل ذكاء اصطناعي متقدم",
        he: "יותר מ-50 כלי ופתרונות AI מתקדמים"
      },
      {
        en: "Serving 1000+ clients across 15+ countries",
        ar: "خدمة أكثر من 1000 عميل في أكثر من 15 دولة",
        he: "משרתים מעל 1000 לקוחות ב-15+ מדינות"
      },
      {
        en: "Partnerships with Fortune 500 companies",
        ar: "شراكات مع شركات Fortune 500",
        he: "שיתופי פעולה עם חברות Fortune 500"
      },
      {
        en: "99.9% platform uptime and reliability",
        ar: "موثوقية وتوافر المنصة بنسبة 99.9%",
        he: "אמינות וזמינות פלטפורמה של 99.9%"
      }
    ],
    growthYears: [
      {
        year: "2020",
        title: { en: "PLATFORM LAUNCH", ar: "إطلاق المنصة", he: "השקת הפלטפורמה" },
      },
      {
        year: "2021",
        title: { en: "AI EXPANSION", ar: "توسيع الذكاء الاصطناعي", he: "הרחבת ה-AI" },
      },
      {
        year: "2022",
        title: { en: "GLOBAL REACH", ar: "الوصول العالمي", he: "הגעה גלובלית" },
      },
      {
        year: "2023",
        title: { en: "INNOVATION HUB", ar: "مركز الابتكار", he: "מרכז החדשנות" },
      },
      {
        year: "2024",
        title: { en: "ENTERPRISE FOCUS", ar: "تركيز على المؤسسات", he: "התמקדות בארגונים" },
      },
      {
        year: "2025",
        title: { en: "QUANTUM AI", ar: "الذكاء الاصطناعي الكمي", he: "AI קוונטי" },
      }
    ],
    mission: {
      en: "Our Mission",
      ar: "مهمتنا",
      he: "המשימה שלנו"
    },
    missionDesc: {
      en: "To provide comprehensive, reliable, and innovative AI solutions that transform how businesses operate and compete in today's rapidly evolving technological landscape.",
      ar: "تقديم حلول ذكاء اصطناعي شاملة وموثوقة ومبتكرة تحول طريقة عمل الشركات وتنافسها في عالم التكنولوجيا المتطور بسرعة.",
      he: "להציע פתרונות AI מקיפים, אמינים וחדשניים שמשנים את אופן הפעולה והתחרות של עסקים בעולם הטכנולוגי המתפתח."
    },
    missionList: [
      {
        en: "Delivering cutting-edge AI tools and solutions",
        ar: "تقديم أدوات وحلول ذكاء اصطناعي متقدمة",
        he: "להציע כלים ופתרונות AI מתקדמים"
      },
      {
        en: "Ensure accessibility and affordability for all businesses",
        ar: "ضمان سهولة الوصول والأسعار المناسبة لجميع الشركات",
        he: "להבטיח נגישות ומחיר לכל סוגי העסקים"
      },
      {
        en: "Maintaining cutting-edge AI tools and solutions",
        ar: "الحفاظ على أعلى معايير الجودة والموثوقية",
        he: "לשמור על סטנדרטים גבוהים של איכות ואמינות"
      },
      {
        en: "Fostering cutting-edge AI tools and solutions",
        ar: "تعزيز الابتكار والتحسين المستمر",
        he: "לקדם חדשנות ושיפור מתמיד"
      }
    ],
    vision: {
      en: "Our Vision",
      ar: "رؤيتنا",
      he: "החזון שלנו"
    },
    visionDesc: {
      en: "To democratize artificial intelligence and make cutting-edge AI tools accessible to businesses of all sizes, empowering them to innovate, grow, and succeed in the digital age.",
      ar: "ديمقراطية الذكاء الاصطناعي وجعل الأدوات المتقدمة متاحة لجميع الشركات، لتمكينهم من الابتكار والنمو والنجاح في العصر الرقمي.",
      he: "להנגיש את ה-AI ולספק כלים מתקדמים לכל סוגי העסקים, כדי לאפשר להם לחדש, לצמוח ולהצליח בעידן הדיגיטלי."
    },
    visionList: [
      {
        en: "A future where every organization can harness the power of AI",
        ar: "مستقبل حيث يمكن لكل منظمة الاستفادة من قوة الذكاء الاصطناعي",
        he: "עתיד שבו כל ארגון יכול לנצל את כוח ה-AI"
      },
      {
        en: "Solving complex challenges and unlocking new opportunities",
        ar: "حل التحديات المعقدة وفتح فرص جديدة",
        he: "פתרון אתגרים מורכבים ופתיחת הזדמנויות חדשות"
      },
      {
        en: "Empowering innovation, automation, and growth for all",
        ar: "تمكين الابتكار والأتمتة والنمو للجميع",
        he: "העצמת חדשנות, אוטומציה וצמיחה לכולם"
      }
    ],
    values: {
      en: "Our Values",
      ar: "قيمنا",
      he: "הערכים שלנו"
    },
    valueCards: [
      {
        title: { en: "Innovation", ar: "الابتكار", he: "חדשנות" },
        desc: {
          en: "We embrace creativity and new ideas, always seeking better ways to deliver value through technology.",
          ar: "نحتضن الإبداع والأفكار الجديدة، ونسعى دائمًا لتقديم قيمة أفضل من خلال التكنولوجيا.",
          he: "אנו מאמצים יצירתיות ורעיונות חדשים, תמיד מחפשים דרכים טובות יותר לספק ערך באמצעות טכנולוגיה."
        },
        style: 'gradient'
      },
      {
        title: { en: "Integrity", ar: "النزاهة", he: "יושרה" },
        desc: {
          en: "We act with honesty, transparency, and the highest ethical standards in all our work and relationships.",
          ar: "نتصرف بصدق وشفافية وبأعلى المعايير الأخلاقية في جميع أعمالنا وعلاقاتنا.",
          he: "אנו פועלים ביושר, בשקיפות ובסטנדרטים אתיים גבוהים בכל עבודתנו ומערכות היחסים שלנו."
        },
        style: 'plain'
      },
      {
        title: { en: "Flexibility", ar: "المرونة", he: "גמישות" },
        desc: {
          en: "We adapt quickly to change, staying agile to meet evolving client needs and industry trends.",
          ar: "نتكيف بسرعة مع التغيير، ونبقى مرنين لتلبية احتياجات العملاء المتغيرة واتجاهات الصناعة.",
          he: "אנו מסתגלים במהירות לשינויים, נשארים גמישים כדי לענות על צרכי הלקוחות והטרנדים המשתנים."
        },
        style: 'plain'
      },
      {
        title: { en: "Excellence", ar: "التميز", he: "מצוינות" },
        desc: {
          en: "We strive for the highest quality in everything we do, delivering outstanding results for our clients.",
          ar: "نسعى لتحقيق أعلى جودة في كل ما نقوم به، ونقدم نتائج متميزة لعملائنا.",
          he: "אנו שואפים לאיכות הגבוהה ביותר בכל מה שאנו עושים, ומספקים תוצאות יוצאות דופן ללקוחותינו."
        },
        style: 'gradient'
      }
    ],
    whatThink: {
      en: "What We Think",
      ar: "ما الذي نفكر فيه",
      he: "מה אנחנו חושבים"
    },
    whatThinkDesc: {
      en: "Our process is rooted in empathy, creativity, and continuous improvement. Here's how we approach every challenge, step by step:",
      ar: "عمليتنا متجذرة في التعاطف والإبداع والتحسين المستمر. إليك كيف نواجه كل تحدي خطوة بخطوة:",
      he: "התהליך שלנו מושתת על אמפתיה, יצירתיות ושיפור מתמיד. כך אנו ניגשים לכל אתגר, שלב אחר שלב:"
    },
    whatThinkSteps: [
      {
        label: { en: "Empathy", ar: "التعاطف", he: "אמפתיה" },
        desc: {
          en: "We put ourselves in others' shoes to understand their perspectives.",
          ar: "نضع أنفسنا مكان الآخرين لفهم وجهات نظرهم.",
          he: "אנו שמים את עצמנו בנעלי האחר כדי להבין את נקודת מבטו."
        }
      },
      {
        label: { en: "Define", ar: "التحديد", he: "הגדרה" },
        desc: {
          en: "We clearly articulate problems to find the best solutions.",
          ar: "نوضح المشكلات بوضوح للعثور على أفضل الحلول.",
          he: "אנו מגדירים בעיות בצורה ברורה כדי למצוא את הפתרונות הטובים ביותר."
        }
      },
      {
        label: { en: "Ideas", ar: "الأفكار", he: "רעיונות" },
        desc: {
          en: "We generate creative ideas to drive innovation and progress.",
          ar: "نولد أفكارًا إبداعية لدفع الابتكار والتقدم.",
          he: "אנו מייצרים רעיונות יצירתיים לקידום חדשנות והתקדמות."
        }
      },
      {
        label: { en: "Feedback", ar: "الملاحظات", he: "משוב" },
        desc: {
          en: "We value feedback and use it to improve our solutions continuously.",
          ar: "نقدر الملاحظات ونستخدمها لتحسين حلولنا باستمرار.",
          he: "אנו מעריכים משוב ומשתמשים בו לשיפור מתמיד של הפתרונות שלנו."
        }
      },
      {
        label: { en: "Prototype", ar: "النموذج الأولي", he: "אב טיפוס" },
        desc: {
          en: "We build and test prototypes to turn ideas into reality.",
          ar: "نبني ونختبر نماذج أولية لتحويل الأفكار إلى واقع.",
          he: "אנו בונים ובודקים אב טיפוס כדי להפוך רעיונות למציאות."
        }
      },
      {
        label: { en: "Test", ar: "الاختبار", he: "בדיקה" },
        desc: {
          en: "We rigorously test our solutions to ensure quality and effectiveness.",
          ar: "نختبر حلولنا بدقة لضمان الجودة والفعالية.",
          he: "אנו בודקים בקפידה את הפתרונות שלנו כדי להבטיח איכות ויעילות."
        }
      }
    ],
    uniqueTitle: {
      en: "What Makes Us Unique",
      ar: "ما الذي يجعلنا فريدين",
      he: "מה מייחד אותנו"
    },
    uniqueDesc: {
      en: "We stand out through our commitment to innovation, transparency, and a human-centered approach. Here's what sets us apart from the rest.",
      ar: "نتميز من خلال التزامنا بالابتكار والشفافية ونهج يركز على الإنسان. إليك ما يميزنا عن الآخرين.",
      he: "אנחנו בולטים בזכות המחויבות שלנו לחדשנות, שקיפות וגישה ממוקדת אדם. זה מה שמייחד אותנו מהשאר."
    },
    uniqueCards: [
      {
        title: { en: "Human-Centered Design", ar: "تصميم يركز على الإنسان", he: "עיצוב ממוקד אדם" },
        desc: {
          en: "We put people first, ensuring our solutions are intuitive, accessible, and impactful for real users.",
          ar: "نضع الناس أولاً، ونضمن أن حلولنا بديهية وسهلة الوصول وفعالة للمستخدمين الحقيقيين.",
          he: "אנו שמים את האנשים במרכז, ומבטיחים שהפתרונות שלנו יהיו אינטואיטיביים, נגישים ובעלי השפעה למשתמשים אמיתיים."
        },
        border: '#1de9b6'
      },
      {
        title: { en: "Cutting-Edge AI", ar: "ذكاء اصطناعي متقدم", he: "AI מתקדם" },
        desc: {
          en: "We leverage the latest advancements in artificial intelligence to deliver powerful, future-ready solutions.",
          ar: "نستفيد من أحدث التطورات في الذكاء الاصطناعي لتقديم حلول قوية وجاهزة للمستقبل.",
          he: "אנו מנצלים את ההתקדמות האחרונה ב-AI כדי לספק פתרונות חזקים ומוכנים לעתיד."
        },
        border: '#56BFC3'
      },
      {
        title: { en: "Transparent Process", ar: "عملية شفافة", he: "תהליך שקוף" },
        desc: {
          en: "We believe in open communication and full transparency at every stage of our projects.",
          ar: "نؤمن بالتواصل المفتوح والشفافية الكاملة في كل مرحلة من مراحل مشاريعنا.",
          he: "אנו מאמינים בתקשורת פתוחה ובשקיפות מלאה בכל שלב של הפרויקטים שלנו."
        },
        border: '#00989C'
      },
      {
        title: { en: "Collaborative Spirit", ar: "روح التعاون", he: "רוח שיתופית" },
        desc: {
          en: "We work closely with our clients and partners, co-creating solutions that drive real impact.",
          ar: "نعمل عن كثب مع عملائنا وشركائنا، ونبتكر حلولاً تحدث تأثيرًا حقيقيًا.",
          he: "אנו עובדים בשיתוף פעולה הדוק עם לקוחותינו ושותפינו, ויוצרים יחד פתרונות שמביאים לתוצאות אמיתיות."
        },
        border: '#005F60'
      },
      {
        title: { en: "Continuous Improvement", ar: "التحسين المستمر", he: "שיפור מתמיד" },
        desc: {
          en: "We constantly learn, adapt, and refine our approach to deliver the best possible results.",
          ar: "نتعلم باستمرار ونتكيف ونحسن نهجنا لتقديم أفضل النتائج الممكنة.",
          he: "אנו לומדים, מסתגלים ומשפרים את הגישה שלנו כדי לספק את התוצאות הטובות ביותר."
        },
        border: '#004F51'
      }
    ]
  };

  return (
    <div className={theme === "dark" ? "bg-[#121212] text-white" : "bg-gray-50 text-black"}>
      {/* Hero Section */}
      <section className="relative h-[545px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={abouthero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black bg-opacity-30' : ''} z-10`}></div>
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight tracking-tight">
              <span className="text-black">{t.heroTitle[language.code]}</span>
          </h1>
           
            <p className="text-lg font-medium mb-4" style={{ color: 'black' }}>
              {t.heroSubtitle[language.code]}
            </p>
          <p className={`text-2xl md:text-3xl mb-6 font-medium max-w-xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-black'}`}>{t.heroDesc[language.code]}</p>
        </div>
      </section>

      {/* Our Growth Through Years Section - Hexagonal Layout */}
      <section className={theme === "dark" ? "py-20 px-4 bg-[#181818] relative overflow-x-hidden" : "py-20 px-4 bg-gray-100 relative overflow-x-hidden"}>
        <div className="w-full max-w-6xl mx-auto relative z-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Side - Information */}
            <div className="lg:w-1/2 w-full">
              <h2 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.growthTitle[language.code]}</h2>
              <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                <div className="text-justify">
                  {t.growthDesc1[language.code]}
                </div>
              </p>
              <p className={`text-base mb-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                <div className="text-justify">
                  {t.growthDesc2[language.code]}
                </div>
              </p>
              {/* Key Achievements */}
              <div className="mb-8">
                <h3 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.achievements[language.code]}</h3>
                <div className="space-y-4">
                  {t.achievementList.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-[#27bdb5] rounded-full"></div>
                      <span className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>{item[language.code]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Right Side - Hexagonal Cards */}
            <div className="lg:w-1/2 w-full">
              <div className="flex flex-col items-center">
                {/* Top Row - 3 Hexagons */}
                <div className="flex justify-center items-center mb-8">
                  {t.growthYears.slice(0, 3).map((item, index) => (
                    <div key={index} className="mx-2">
                      <div className="hexagon text-white flex flex-col items-center justify-center cursor-pointer" style={{ background: 'linear-gradient(135deg, #0a2342, #1de9b6)' }}>
                        <div className="text-sm font-semibold mb-2 text-center">{item.title[language.code]}</div>
                        <div className="flex items-center justify-center mb-2">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-6 h-px bg-white mx-2"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                        <div className="text-xl font-bold">{item.year}</div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Bottom Row - 3 Hexagons (offset) */}
                <div className="flex justify-center items-center">
                  {t.growthYears.slice(3, 6).map((item, index) => (
                    <div key={index + 3} className="mx-2">
                      <div className="hexagon text-white flex flex-col items-center justify-center cursor-pointer" style={{ background: 'linear-gradient(135deg, #0a2342, #1de9b6)' }}>
                        <div className="text-sm font-semibold mb-2 text-center">{item.title[language.code]}</div>
                        <div className="flex items-center justify-center mb-2">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-6 h-px bg-white mx-2"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                        <div className="text-xl font-bold">{item.year}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision & Mission Section */}
      <section className="py-0 px-0 w-full">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 rounded-none overflow-hidden">
          {/* Left Side - Mission (colored background) */}
          <div className="bg-gradient-to-br from-[#0a2342] to-[#1de9b6] p-10 flex flex-col justify-center min-h-[400px]">
            <h2 className="text-4xl font-bold mb-6 text-white">{t.mission[language.code]}</h2>
            <p className="text-lg text-white mb-6">
              <div className="text-justify">
                {t.missionDesc[language.code]}
              </div>
            </p>
            <ul className="space-y-4">
              {t.missionList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-3 h-3 mt-2 bg-white rounded-full inline-block"></span>
                  <span className="text-white">{item[language.code]}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Right Side - Vision (white background) */}
          <div className="bg-white p-10 flex flex-col justify-center min-h-[400px]">
            <h2 className="text-4xl font-bold mb-6 text-[#0a2342]">{t.vision[language.code]}</h2>
            <div className="text-lg text-[#0a2342] mb-6 text-justify">
              {t.visionDesc[language.code]}
            </div>
            <ul className="space-y-4">
              {t.visionList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-3 h-3 mt-2 bg-[#0a2342] rounded-full inline-block"></span>
                  <span className="text-[#0a2342]">{item[language.code]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className={`py-20 px-4 w-full ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <h2 className={`text-4xl font-bold mb-12 text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.values[language.code]}</h2>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-12">
          {/* Left Side: Only Image */}
          <div className="lg:w-2/5 w-full mb-8 lg:mb-0 flex items-center justify-center">
            <img src={ourvalues} loading="lazy" alt="Our Values" className="w-full min-h-[500px] h-[500px] rounded-xl shadow-lg object-cover" />
          </div>
          {/* Right Side: Value Cards Grid */}
          <div className="lg:w-3/5 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.valueCards.map((card, idx) => (
              <div
                key={idx}
                className={
                  card.style === 'gradient'
                    ? "text-white shadow-lg p-8 flex flex-col items-start h-[220px] w-full aos-init aos-animate"
                    : `${theme === 'dark' ? 'bg-white text-[#0a2342]' : 'bg-black text-white'} shadow-lg p-8 flex flex-col items-start h-[220px] w-full aos-init aos-animate`
                }
                data-aos="fade-up"
                style={
                  card.style === 'gradient'
                    ? { borderRadius: '80px 0 80px 0', background: 'linear-gradient(135deg, #0a2342 0%, #1de9b6 100%)', boxShadow: '0 8px 32px rgba(0, 123, 255, 0.3)' }
                    : { borderRadius: '80px 0 80px 0', boxShadow: '0 8px 32px rgba(0, 123, 255, 0.3)' }
                }
              >
                <div className="font-bold text-xl mb-2">{card.title[language.code]}</div>
                <div className="text-base opacity-90">{card.desc[language.code]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Think Section */}
      <section className="py-20 px-4 w-full" style={{background: 'linear-gradient(90deg, #004F51 0%, #005F60 20%, #00797B 40%, #00989C 60%, #56BFC3 80%, #B2DFDF 100%)'}}>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side: Content */}
          <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold mb-4 text-white">{t.whatThink[language.code]}</h2>
            <p className="text-lg text-white mb-8 max-w-xl">
              <div className="text-justify">
                {t.whatThinkDesc[language.code]}
              </div>
            </p>
            <ol className="space-y-6 list-decimal list-inside text-white">
              {t.whatThinkSteps.map((step, idx) => (
                <li key={idx} className="text-justify">
                  <span className="font-bold">{step.label[language.code]}:</span> {step.desc[language.code]}
                </li>
              ))}
            </ol>
          </div>
          {/* Right Side: Image */}
          <div className="lg:w-1/2 w-full flex items-center justify-center">
            <img src={ideasImg} loading="lazy" alt="What We Think" className="w-full max-w-2xl h-[500px] rounded-2xl shadow-lg object-cover" />
          </div>
        </div>
      </section>

      {/* What Makes Us Unique Section */}
      <section className={`py-20 px-4 w-full ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <h2 className={`text-4xl font-bold mb-4 text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.uniqueTitle[language.code]}</h2>
        <p className={`text-lg text-center mb-12 max-w-2xl mx-auto ${theme === 'dark' ? 'text-white/90' : 'text-black'}`}>{t.uniqueDesc[language.code]}</p>
        {/* Carousel Container with 3-card scrolling effect, same as home1.jsx */}
        <div className="relative">
          <div className="flex justify-center items-center gap-8 px-16 mb-8 overflow-hidden" style={{ minHeight: '240px' }}>
            <div className="flex gap-8 transition-all duration-700 ease-in-out" style={{ transform: 'translateX(0)' }}>
              {(() => {
                const arr = t.uniqueCards;
                const leftIndex = uniqueCurrentIndex === 0 ? arr.length - 1 : uniqueCurrentIndex - 1;
                const rightIndex = uniqueCurrentIndex === arr.length - 1 ? 0 : uniqueCurrentIndex + 1;
                const visible = [leftIndex, uniqueCurrentIndex, rightIndex];
                return visible.map((idx, i) => (
                  <div
                    key={idx}
                    className={`w-96 rounded-xl shadow-lg p-8 text-center transition-all duration-500 ease-in-out flex-shrink-0 ${
                      i === 1
                        ? 'scale-110 opacity-100 z-10 shadow-2xl'
                        : 'scale-90 opacity-60 z-0 blur-sm'
                    }`}
                    style={{
                      background: 'linear-gradient(90deg, #004F51 0%, #005F60 20%, #00797B 40%, #00989C 60%, #56BFC3 80%, #B2DFDF 100%)',
                      transform: i === 1 ? 'translateY(0)' : 'translateY(10px)',
                      filter: i === 1 ? 'none' : 'blur(2px)'
                    }}
                  >
                    <div className={`font-bold text-lg mb-2 transition-all duration-300 text-white`}>{arr[idx].title[language.code]}</div>
                    <div className={`text-sm mb-3 transition-all duration-300 text-white`}>{arr[idx].desc[language.code]}</div>
                  </div>
                ));
              })()}
            </div>
          </div>
          {/* Number Navigation */}
          <div className="flex justify-center gap-3 mt-6">
            {t.uniqueCards.map((_, index) => (
              <button
                key={index}
                onClick={() => setUniqueCurrentIndex(index)}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  uniqueCurrentIndex === index
                    ? 'bg-gradient-to-r from-[#27bdb5] to-[#1de9b6] text-white shadow-lg'
                    : theme === 'dark'
                      ? 'bg-gradient-to-r from-black to-[#0a2342] text-[#27bdb5] hover:bg-[#27bdb5] hover:text-white'
                      : 'bg-gradient-to-r from-gray-200 to-[#b2dfdb] text-[#27bdb5] hover:bg-[#27bdb5] hover:text-white'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Hexagon CSS for What We Think */}
      <style jsx>{`
        .hexagon-creative {
          clip-path: polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%);
          border-radius: 32px;
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .motion-card-creative {
          transition: transform 0.3s cubic-bezier(.4,2,.3,.7), box-shadow 0.3s;
        }
        .motion-card-creative:hover {
          transform: scale(1.07) translateY(-10px) rotate(-2deg);
          box-shadow: 0 16px 40px 0 rgba(0,0,0,0.18);
        }
        .snap-x {
          scroll-snap-type: x mandatory;
        }
        .snap-center {
          scroll-snap-align: center;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;