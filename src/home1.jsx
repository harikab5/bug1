import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import homeHero from './assets/homehero2.png';
import homeHeroVideo from './assets/homepagehero.mp4';
import ctaHome from './assets/ctahome.jpeg';
import { useScrollToTop } from './hooks/useScrollToTop';
import { useTheme } from './context/ThemeContext';
import { useLanguage } from './context/LanguageContext';

export default function HomePage() {
  const { language } = useLanguage();
  const strings = {
    en: {
      discover: 'Discover AI Tools',
      title: 'The Ultimate Platform for\nAI Tools & Automation',
      explore: 'Explore, compare, and leverage the best AI tools for productivity, automation, content creation, analytics.',
      exploreNow: 'Explore Now',
      who: 'WHO WE ARE',
      trusted: 'Your Trusted AI Innovation Partner',
      about: 'We are a passionate team dedicated to making AI accessible and practical for everyone. Our platform curates, reviews, and showcases the best AI tools for productivity, automation, analytics, and creativity. Whether you are a business, developer, or enthusiast, we can help you discover and leverage the right AI solutions to transform your workflow and unlock new possibilities.',
      knowMore: 'Know More',
      services: 'OUR SERVICES',
      what: 'WHAT WE DO',
      exploreTools: 'Explore Tools',
      knowMoreArrow: 'Know More →',
    },
    ar: {
      discover: 'اكتشف أدوات الذكاء الاصطناعي',
      title: 'المنصة النهائية لأدوات الذكاء الاصطناعي والأتمتة',
      explore: 'استكشف وقارن واستخدم أفضل أدوات الذكاء الاصطناعي للإنتاجية والأتمتة وإنشاء المحتوى والتحليلات والمزيد في مكان واحد.',
      exploreNow: 'استكشف الآن',
      who: 'من نحن',
      trusted: 'شريكك الموثوق للابتكار في الذكاء الاصطناعي',
      about: 'نحن فريق شغوف مكرس لجعل الذكاء الاصطناعي متاحًا وعمليًا للجميع. منصتنا تجمع وتراجع وتعرض أفضل أدوات الذكاء الاصطناعي للإنتاجية والأتمتة والتحليلات والإبداع. سواء كنت شركة أو مطورًا أو هاويًا، نساعدك على اكتشاف واستخدام الحلول المناسبة لتحويل سير العمل وفتح إمكانيات جديدة.',
      knowMore: 'اعرف المزيد',
      services: 'خدماتنا',
      what: 'ماذا نفعل',
      exploreTools: 'استكشف الأدوات',
      knowMoreArrow: 'اعرف المزيد →',
    },
    he: {
      discover: 'גלה כלי בינה מלאכותית',
      title: 'הפלטפורמה האולטימטיבית לכלי בינה מלאכותית ואוטומציה',
      explore: 'חקור, השווה ונצל את כלי הבינה המלאכותית הטובים ביותר לפרודוקטיביות, אוטומציה, יצירת תוכן, ניתוחים ועוד במקום אחד.',
      exploreNow: 'חקור עכשיו',
      who: 'מי אנחנו',
      trusted: 'השותף המהימן שלך לחדשנות ב-AI',
      about: 'אנחנו צוות נלהב שמוקדש להפוך את הבינה המלאכותית לנגישה ומעשית לכולם. הפלטפורמה שלנו אוספת, בודקת ומציגה את כלי הבינה המלאכותית הטובים ביותר לפרודוקטיביות, אוטומציה, ניתוחים ויצירתיות. בין אם אתה עסק, מפתח או חובב, אנו עוזרים לך לגלות ולנצל את הפתרונות הנכונים לשיפור זרימת העבודה ולפתיחת אפשרויות חדשות.',
      knowMore: 'למידע נוסף',
      services: 'השירותים שלנו',
      what: 'מה אנחנו עושים',
      exploreTools: 'חקור כלים',
      knowMoreArrow: 'למידע נוסף →',
    }
  };
  const t = strings[language.code] || strings.en;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);
  const navigate = useNavigate();
  
  // Scroll to top when component mounts
  useScrollToTop();
  
  // Additional scroll to top effect
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Function to handle navigation with scroll to top
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  
  const testimonials = {
    en: [
      {
        id: 1,
        name: "Aarav",
        image: "https://randomuser.me/api/portraits/men/31.jpg",
        stars: "★★★★★",
        text: "Joining this platform was the best decision for my business. The expert AI tools and personalized support helped me automate workflows!",
        handle: "@aarav.brown"
      },
      {
        id: 2,
        name: "Hindley Ernshaw",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        stars: "★★★★★",
        text: "The AI-powered chatbots and workflow tools are a game changer. Highly recommend for any business looking to scale with AI.",
        handle: "@hindley.es"
      },
      {
        id: 3,
        name: "Victoria Weirro",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        stars: "★★★★★",
        text: "The AI analytics dashboard gave me insights I never had before. The support team is unmatched!",
        handle: "Femmetrain Oslo Co."
      },
      {
        id: 4,
        name: "Lina Gomez",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        stars: "★★★★★",
        text: "The transformation programs are amazing! I gained confidence and strength with this amazing platform.",
        handle: "Member"
      },
      {
        id: 5,
        name: "Basil Nishved",
        image: "https://randomuser.me/api/portraits/men/33.jpg",
        stars: "★★★★★",
        text: "The AI tools and expert advice keep me on track. I have never felt more supported in my business journey!",
        handle: "Co-Founder Grandcoz"
      },
      {
        id: 6,
        name: "Samuel Lee",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        stars: "★★★★★",
        text: "Exceptional platform! The range of AI tools available has helped our team innovate faster and deliver better results.",
        handle: "@samuel.lee"
      }
    ],
    ar: [
      {
        id: 1,
        name: "عارف",
        image: "https://randomuser.me/api/portraits/men/31.jpg",
        stars: "★★★★★",
        text: "الانضمام إلى هذه المنصة كان أفضل قرار لعملي. أدوات الذكاء الاصطناعي والدعم الشخصي ساعدوني في أتمتة سير العمل!",
        handle: "@aarav.brown"
      },
      {
        id: 2,
        name: "هندلي إيرنشو",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        stars: "★★★★★",
        text: "أدوات الدردشة الذكية وسير العمل غيرت قواعد اللعبة. أنصح بها لأي عمل يريد التوسع بالذكاء الاصطناعي.",
        handle: "@hindley.es"
      },
      {
        id: 3,
        name: "فيكتوريا ويرو",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        stars: "★★★★★",
        text: "لوحة تحكم التحليلات الذكية أعطتني رؤى لم أحصل عليها من قبل. فريق الدعم لا مثيل له!",
        handle: "Femmetrain Oslo Co."
      },
      {
        id: 4,
        name: "لينا غوميز",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        stars: "★★★★★",
        text: "برامج التحول رائعة! اكتسبت الثقة والقوة مع هذه المنصة المذهلة.",
        handle: "عضو"
      },
      {
        id: 5,
        name: "باسل نيشفيد",
        image: "https://randomuser.me/api/portraits/men/33.jpg",
        stars: "★★★★★",
        text: "أدوات الذكاء الاصطناعي والنصائح المهنية تبقيني على المسار الصحيح. لم أشعر بالدعم أكثر من ذلك!",
        handle: "مؤسس مشارك Grandcoz"
      },
      {
        id: 6,
        name: "صموئيل لي",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        stars: "★★★★★",
        text: "منصة استثنائية! مجموعة أدوات الذكاء الاصطناعي المتاحة ساعدت فريقنا على الابتكار بشكل أسرع وتقديم نتائج أفضل.",
        handle: "@samuel.lee"
      }
    ],
    he: [
      {
        id: 1,
        name: "אראב",
        image: "https://randomuser.me/api/portraits/men/31.jpg",
        stars: "★★★★★",
        text: "הצטרפות לפלטפורמה הזו הייתה ההחלטה הטובה ביותר לעסק שלי. כלי ה-AI והתמיכה האישית עזרו לי לאוטומציה!",
        handle: "@aarav.brown"
      },
      {
        id: 2,
        name: "הינדלי ארנשו",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        stars: "★★★★★",
        text: "הצ'אטבוטים וכלי זרימת העבודה שינו את כללי המשחק. ממליצה לכל עסק שרוצה לצמוח עם AI.",
        handle: "@hindley.es"
      },
      {
        id: 3,
        name: "ויקטוריה ויירו",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        stars: "★★★★★",
        text: "לוח הבקרה האנליטי של ה-AI נתן לי תובנות שלא היו לי קודם. צוות התמיכה מדהים!",
        handle: "Femmetrain Oslo Co."
      },
      {
        id: 4,
        name: "לינה גומז",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        stars: "★★★★★",
        text: "תוכניות השינוי מדהימות! קיבלתי ביטחון וכוח עם הפלטפורמה הזו.",
        handle: "חבר"
      },
      {
        id: 5,
        name: "באסיל נישווד",
        image: "https://randomuser.me/api/portraits/men/33.jpg",
        stars: "★★★★★",
        text: "כלי ה-AI והעצות המקצועיות שומרים אותי במסלול. לא הרגשתי נתמך יותר!",
        handle: "מייסד שותף Grandcoz"
      },
      {
        id: 6,
        name: "סמואל לי",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        stars: "★★★★★",
        text: "פלטפורמה יוצאת דופן! מגוון כלי ה-AI עזרו לצוות שלנו לחדש מהר יותר ולהשיג תוצאות טובות יותר.",
        handle: "@samuel.lee"
      }
    ]
  };

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials[language.code].length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // 5 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, language.code]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    // Pause auto-play when user manually navigates
    setIsAutoPlaying(false);
    // Resume auto-play after 3 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const { theme } = useTheme();

  return (
    <>
  <section className={`w-full min-h-[545px] flex items-center px-4 pt-16 md:pt-20 overflow-hidden relative ${theme === 'dark' ? '' : 'bg-gray-100'}`} dir={language.dir}>
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          muted
          loop
          loading="lazy"
          className="w-full h-full object-cover"
          style={{ filter: theme === 'dark' ? 'brightness(0.6)' : 'brightness(0.9)' }}
        >
          <source src={homeHeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col justify-start items-center z-10 max-w-full w-full mx-auto pl-8 md:pl-0 pt-8 mt-0">
          <div className="mb-4">
            <span className="text-[#27bdb5] bg-[#27bdb514] rounded-full px-4 py-1 text-base font-medium tracking-wide ">
              {t.discover}
            </span>
          </div>
          <h1 className="font-extrabold mb-6 text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-6xl leading-tight max-w-6xl">
            {t.title}
          </h1>
          <p className="mb-8 text-center text-white text-lg max-w-lg" style={{
            textShadow: '0 2px 8px rgba(0,0,0,0.7), 0 1px 0 #19e6f7',
            background: 'rgba(10,35,66,0.45)',
            borderRadius: '0.5rem',
            padding: '0.5rem 1rem',
            fontWeight: 'bold',
            letterSpacing: '0.02em',
          }}>
            {t.explore}
          </p>
          <div className="flex justify-center mb-8 mt-4 w-full">
            <button 
              onClick={() => handleNavigation('/services')}
              className="bg-gradient-to-r from-[#27bdb5] to-[#12716c] text-white font-bold rounded-full px-10 py-3 text-lg shadow-lg"
            >
              {t.exploreNow}
            </button>
          </div>
        </div>
      </section>
      <section className={`w-full py-16 px-4 flex flex-col md:flex-row items-center justify-center gap-4 mx-auto ${theme === 'dark' ? 'bg-[#111211]' : 'bg-white'}`} dir={language.dir}>
         {/* Left: Text Content */}
         <div className="flex-1 max-w-lg pl-4 md:pl-8">
          <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            {t.trusted}
          </h2>
          <p className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-base md:text-lg mb-6`}>
            <div className="text-justify">
              {t.about}
            </div>
          </p>
          <button 
            onClick={() => handleNavigation('/about-us')}
            className="bg-[#27bdb5] hover:bg-[#12716c] text-white font-bold rounded-full px-6 py-2 text-base shadow transition-colors border-none outline-none"
          >
            {t.knowMore}
          </button>
         </div>
         {/* Right: Service Cards */}
         <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-lg items-stretch h-full">
          {[0,1,2,3].map((i) => {
            const cardTitles = {
              en: [
                'Expert Team',
                'Trusted by Industry Leaders',
                'Community Driven',
                'Innovation & Integrity',
              ],
              ar: [
                'فريق خبراء',
                'موثوق من قادة الصناعة',
                'مدفوع بالمجتمع',
                'الابتكار والنزاهة',
              ],
              he: [
                'צוות מומחים',
                'אמון על ידי מובילי תעשייה',
                'מונע קהילה',
                'חדשנות ויושרה',
              ]
            };
            const cardDesc = {
              en: [
                'A diverse group of AI enthusiasts, engineers, and innovators committed to driving AI progress.',


                'Our platform is relied upon by top companies and professionals to discover, evaluate, and implement cutting-edge AI solutions.',
                'We foster a collaborative environment where users can share, review, and discover the best AI tools together.',
                'We value creativity, transparency, and ethical AI development in everything we do.',
              ],
              ar: [
                'مجموعة متنوعة من عشاق الذكاء الاصطناعي والمهندسين والمبتكرين ملتزمون بدفع التقدم في الذكاء الاصطناعي.',
                'تعتمد منصتنا على الشركات الكبرى والمحترفين لاكتشاف وتقييم وتنفيذ حلول الذكاء الاصطناعي المتقدمة.',
                'نحن نشجع بيئة تعاونية حيث يمكن للمستخدمين مشاركة ومراجعة واكتشاف أفضل أدوات الذكاء الاصطناعي معًا.',
                'نحن نقدر الإبداع والشفافية وتطوير الذكاء الاصطناعي الأخلاقي في كل ما نقوم به.',
              ],
              he: [
                'קבוצת מגוונת של חובבי AI, מהנדסים ומחדשים המחויבים לקידום הבינה המלאכותית.',
                'הפלטפורמה שלנו נשענת על חברות מובילות ואנשי מקצוע לגילוי, הערכה ויישום פתרונות AI מתקדמים.',
                'אנו מטפחים סביבה שיתופית שבה משתמשים יכולים לשתף, לבדוק ולגלות את כלי ה-AI הטובים ביותר יחד.',
                'אנו מעריכים יצירתיות, שקיפות ופיתוח AI אתי בכל מה שאנו עושים.',
              ]
            };
            return (
              <div
                key={i}
                className="wipe-card rounded-lg p-6 flex flex-col items-start shadow-lg h-full min-h-[180px] flex-1"
                style={{ background: 'linear-gradient(135deg, #0a2342, #1de9b6)', animationDelay: `${0.2 + i*0.2}s` }}
              >
                <div className="text-white font-bold text-lg mb-1">{cardTitles[language.code][i]}</div>
                <div className="text-white text-sm">{cardDesc[language.code][i]}</div>
              </div>
            );
          })}
         </div>
       </section>

             <section className="w-full py-20 px-4 flex flex-col items-center justify-center" style={{ background: 'linear-gradient(135deg, #0a2342 0%, #27bdb5 100%)' }}>
         <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto">
           {/* Left Circle */}
           <div className="service-circle flex-shrink-0 flex flex-col items-center justify-center mr-0 md:mr-12 mb-8 md:mb-0">
             <div className="p-1 rounded-full" style={{ background: theme === 'dark' ? 'linear-gradient(135deg, #0a2342, #1de9b6)' : 'linear-gradient(135deg, #b2dfdb, #4dd0e1)' }}>
               <div className={`rounded-full w-64 h-64 flex flex-col items-center justify-center shadow-xl ${theme === 'dark' ? 'bg-[#27bdb5]' : 'bg-[#4dd0e1]'}`}>
                 <div className="text-white text-2xl font-bold mb-2">{t.services}</div>
                 <div className="text-white text-lg font-semibold">{t.what}</div>
               </div>
             </div>
           </div>
           {/* Right: Service Cards */}
           <div className="flex-1 flex flex-col gap-6 w-full">
            {[0,1,2,3,4].map((i) => {
              const cardTitles = {
                en: [
                  'AI Chatbots & Assistants',
                  'Workflow Automation',
                  'Data Analysis & Forecasting',
                  'Creative Content Generation',
                  'Computer Vision Solutions',
                ],
                ar: [
                  'الدردشة الذكية والمساعدون',
                  'أتمتة سير العمل',
                  'تحليل البيانات والتنبؤ',
                  'إنشاء المحتوى الإبداعي',
                  'حلول الرؤية الحاسوبية',
                ],
                he: [
                  "צ'אטבוטים ועוזרי AI",
                  'אוטומציה של זרימות עבודה',
                  'ניתוח נתונים וחיזוי',
                  'יצירת תוכן יצירתי',
                  'פתרונות ראייה ממוחשבת',
                ]
              };
              const cardDesc = {
                en: [
                  'Automate customer support and engagement with intelligent chatbots and virtual assistants.',
                  'Streamline repetitive tasks and processes to save time and reduce errors.',
                  'Leverage AI to analyze data, generate insights, and predict future trends for smarter decisions.',
                  'Generate high-quality content, images, and designs with the power of creative AI tools.',
                  'Leverage AI-powered image and video analysis for automation, security, and advanced visual insights.',
                ],
                ar: [
                  'أتمتة دعم العملاء والتفاعل باستخدام الدردشة الذكية والمساعدين الافتراضيين.',
                  'تبسيط المهام والعمليات المتكررة لتوفير الوقت وتقليل الأخطاء.',
                  'استخدم الذكاء الاصطناعي لتحليل البيانات وتوليد الرؤى والتنبؤ بالاتجاهات المستقبلية لاتخاذ قرارات أكثر ذكاءً.',
                  'إنشاء محتوى عالي الجودة وصور وتصاميم باستخدام قوة أدوات الذكاء الاصطناعي الإبداعية.',
                  'استخدم تحليل الصور والفيديو المدعوم بالذكاء الاصطناعي للأتمتة والأمان والرؤى البصرية المتقدمة.',
                ],
                he: [
                  'אוטומציה של תמיכת לקוחות ומעורבות עם צ׳אטבוטים ועוזרי AI חכמים.',
                  'ייעול משימות ותהליכים חוזרים כדי לחסוך זמן ולהפחית טעויות.',
                  'נצל את הבינה המלאכותית לניתוח נתונים, הפקת תובנות וחיזוי מגמות עתידיות לקבלת החלטות חכמות יותר.',
                  'צור תוכן, תמונות ועיצובים איכותיים בעזרת כלי AI יצירתיים.',
                  'נצל ניתוח תמונה ווידאו מבוסס AI לאוטומציה, אבטחה ותובנות ויזואליות מתקדמות.',
                ]
              };
              return (
                <div
                  key={i}
                  className={`service-card flex items-center rounded-xl shadow-lg p-4 border-l-8 transition-all duration-300 ${theme === 'dark' ? 'bg-white border-black' : 'bg-white border-[#27bdb5]'} ${theme === 'dark' ? '' : 'border'}`}
                  style={{ animationDelay: `${0.2 + i*0.2}s` }}
                >
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-6 ${theme === 'dark' ? 'bg-black text-white' : 'bg-[#27bdb5] text-white'}`}>{i+1}</div>
                  <div>
                    <div className={`font-bold text-lg mb-1 ${theme === 'dark' ? 'text-[#111211]' : 'text-black'}`}>{cardTitles[language.code][i]}</div>
                    <div className={`text-sm ${theme === 'dark' ? 'text-[#204744]' : 'text-gray-700'}`}>{cardDesc[language.code][i]}</div>
                  </div>
                </div>
              );
            })}
           </div>
         </div>
       </section>
      <section className={`w-full py-20 px-4 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-[#111211]' : 'bg-white'}`} dir={language.dir}>
        <div className="w-full max-w-6xl mx-auto">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-12">
            {/* Left: Big Metric */}
            <div className="flex flex-col items-center md:items-start">
              <div className={`text-6xl md:text-7xl font-extrabold mb-2 typewriter-number ${theme === 'dark' ? 'text-white' : 'text-black'}`}>50+</div>
              <div className="text-[#27bdb5] text-lg font-semibold typewriter-text">{
                {
                  en: 'AI Solutions Delivered',
                  ar: 'حلول الذكاء الاصطناعي المقدمة',
                  he: 'פתרונות AI שסופקו'
                }[language.code]
              }</div>
            </div>
            {/* Center: Description */}
            <div className={`flex-1 text-justify text-base md:text-lg max-w-xl mx-auto md:mx-0 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{
              {
                en: 'Empowering businesses and developers with cutting-edge AI tools for automation, analytics, and innovation. Industry leaders trust it to drive digital transformation and smarter workflows. Our platform supports seamless integration, robust security, and real-time insights for every industry. Experience the future of work with scalable, reliable, and user-friendly AI solutions tailored to your needs.',
                ar: 'تمكين الشركات والمطورين بأدوات الذكاء الاصطناعي المتقدمة للأتمتة والتحليلات والابتكار. موثوق به من قبل قادة الصناعة لدفع التحول الرقمي وسير العمل الذكي. تدعم منصتنا التكامل السلس والأمان القوي والرؤى الفورية لكل صناعة. اختبر مستقبل العمل مع حلول الذكاء الاصطناعي القابلة للتطوير والموثوقة وسهلة الاستخدام المصممة خصيصًا لاحتياجاتك.',
                he: 'העצמת עסקים ומפתחים עם כלי AI מתקדמים לאוטומציה, אנליטיקה וחדשנות. אמון על ידי מובילי תעשייה להניע טרנספורמציה דיגיטלית וזרימות עבודה חכמות. הפלטפורמה שלנו תומכת באינטגרציה חלקה, אבטחה חזקה ותובנות בזמן אמת לכל תעשייה. חווה את עתיד העבודה עם פתרונות AI ניתנים להרחבה, אמינים וידידותיים למשתמש המותאמים לצרכים שלך.'
              }[language.code]
            }</div>
            {/* Right: Avatar & Name */}
            <div className="flex flex-col items-center md:items-end">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" loading="lazy" alt="Alex Carter" className="w-24 h-24 rounded-full mb-2 border-4 border-[#27bdb5] object-cover" />
              <div className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{
                {
                  en: 'Alex Carter',
                  ar: 'أليكس كارتر',
                  he: 'אלכס קרטר'
                }[language.code]
              }</div>
              <div className="text-[#bfc1be] text-sm">{
                {
                  en: 'Founder & Chief AI Officer',
                  ar: 'المؤسس والرئيس التنفيذي للذكاء الاصطناعي',
                  he: 'מייסד ומנהל AI ראשי'
                }[language.code]
              }</div>
            </div>
          </div>
          <div className={`border-t w-full mb-10 ${theme === 'dark' ? 'border-[#204744]' : 'border-gray-300'}`} />
          {/* Bottom Row: Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
            {/* Card 1 */}
            <div className="rounded-xl shadow-lg flex flex-col items-center justify-center py-8 px-4 transition-transform duration-300 hover:-translate-y-2 group" style={{ background: 'linear-gradient(135deg, #181a19 60%, #27bdb5 100%)' }}>
              <div className="text-[#27bdb5] text-3xl font-extrabold mb-2 relative">10K+
                <span className="block h-1 w-24 mx-auto mt-2 rounded-full bg-[#27bdb5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </div>
              <div className="text-base font-medium text-white">{
                {
                  en: 'Active Users',
                  ar: 'المستخدمون النشطون',
                  he: 'משתמשים פעילים'
                }[language.code]
              }</div>
            </div>
            {/* Card 2 */}
            <div className="rounded-xl shadow-lg flex flex-col items-center justify-center py-8 px-4 transition-transform duration-300 hover:-translate-y-2 group" style={{ background: 'linear-gradient(135deg, #181a19 60%, #1de9b6 100%)' }}>
              <div className="text-[#1de9b6] text-3xl font-extrabold mb-2 relative">250+
                <span className="block h-1 w-24 mx-auto mt-2 rounded-full bg-[#1de9b6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </div>
              <div className="text-base font-medium text-white">{
                {
                  en: 'Enterprise Clients',
                  ar: 'عملاء المؤسسات',
                  he: 'לקוחות ארגוניים'
                }[language.code]
              }</div>
            </div>
            {/* Card 3 */}
            <div className="rounded-xl shadow-lg flex flex-col items-center justify-center py-8 px-4 transition-transform duration-300 hover:-translate-y-2 group" style={{ background: 'linear-gradient(135deg, #181a19 60%, #27bdb5 100%)' }}>
              <div className="text-[#27bdb5] text-3xl font-extrabold mb-2">99.9%</div>
              <span className="block h-1 w-16 mx-auto mb-2 rounded-full bg-[#27bdb5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <div className="text-base font-medium text-white">{
                {
                  en: 'Uptime Guarantee',
                  ar: 'ضمان وقت التشغيل',
                  he: 'התחייבות לזמינות'
                }[language.code]
              }</div>
            </div>
            {/* Card 4 */}
            <div className="rounded-xl shadow-lg flex flex-col items-center justify-center py-8 px-4 transition-transform duration-300 hover:-translate-y-2 group" style={{ background: 'linear-gradient(135deg, #181a19 60%, #1de9b6 100%)' }}>
              <div className="text-[#1de9b6] text-3xl font-extrabold mb-2">50+</div>
              <span className="block h-1 w-16 mx-auto mb-2 rounded-full bg-[#1de9b6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <div className="text-base font-medium text-white">{
                {
                  en: 'AI Integrations',
                  ar: 'تكاملات الذكاء الاصطناعي',
                  he: 'אינטגרציות AI'
                }[language.code]
              }</div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 px-4" style={{ background: 'linear-gradient(135deg, #0a2342 0%, #27bdb5 100%)' }} dir={language.dir}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-white">{
            {
              en: 'What Our Users Say',
              ar: 'ماذا يقول مستخدمونا',
              he: 'מה המשתמשים שלנו אומרים'
            }[language.code]
          }</h2>
          {/* Carousel Container with 3-card scrolling effect */}
          <div className="relative">
            <div className="flex justify-center items-center gap-8 px-16 mb-8 overflow-hidden" style={{ minHeight: '340px' }}>
              <div className="flex gap-8 transition-all duration-700 ease-in-out" style={{ transform: 'translateX(0)' }}>
                {(() => {
                  const arr = testimonials[language.code] || testimonials.en;
                  const leftIndex = currentIndex === 0 ? arr.length - 1 : currentIndex - 1;
                  const rightIndex = currentIndex === arr.length - 1 ? 0 : currentIndex + 1;
                  const visible = [leftIndex, currentIndex, rightIndex];
                  return visible.map((idx, i) => (
                    <div
                      key={arr[idx].id}
                      className={`w-96 rounded-xl shadow-lg p-8 text-center transition-all duration-500 ease-in-out flex-shrink-0 ${
                        i === 1
                          ? `${theme === 'dark' ? 'bg-[#111211] scale-110 opacity-100 z-10 shadow-2xl shadow-[#27bdb5]' : 'bg-white scale-110 opacity-100 z-10 shadow-2xl shadow-[#27bdb5]'}`
                          : `${theme === 'dark' ? 'bg-[#111211] scale-90 opacity-60 z-0 blur-sm' : 'bg-white scale-90 opacity-60 z-0 blur-sm'}`
                      }`}
                      style={{
                        transform: i === 1 ? 'translateY(0)' : 'translateY(10px)',
                        filter: i === 1 ? 'none' : 'blur(2px)'
                      }}
                    >
                      <img
                        src={arr[idx].image}
                        alt={arr[idx].name}
                        loading="lazy"
                        className="w-16 h-16 rounded-full border-4 border-[#27bdb5] object-cover mx-auto mb-4 transition-all duration-300"
                      />
                      <div className={`font-bold text-lg mb-2 transition-all duration-300 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{arr[idx].name}</div>
                      <div className="flex justify-center mb-3">
                        <span className="text-[#27bdb5] text-xl transition-all duration-300">{arr[idx].stars}</span>
                      </div>
                      <div className={`text-sm mb-3 transition-all duration-300 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>"{arr[idx].text}"</div>
                      <div className="text-[#27bdb5] text-xs transition-all duration-300">{arr[idx].handle}</div>
                    </div>
                  ));
                })()}
              </div>
                </div>
            {/* Number Navigation */}
            <div className="flex justify-center gap-3 mt-6">
              {(testimonials[language.code] || testimonials.en).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    currentIndex === index
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
        </div>
      </section>
      {/* CTA Section */}
      <section className={`w-full py-24 px-4 ${theme === 'dark' ? 'bg-[#111211]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch">
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col items-start text-left justify-center mb-8 md:mb-0 md:pr-12 h-full">
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 leading-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{
              {
                en: 'Workflow with AI Tools',
                ar: 'سير العمل مع أدوات الذكاء الاصطناعي',
                he: 'זרימת עבודה עם כלי AI'
              }[language.code]
            }<br />
            </h2>
            <p className={`text-lg mb-10 ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-[#222]'}`}>
              <div className="text-justify">{
                {
                  en: 'Explore a curated collection of powerful AI tools designed to boost productivity, automate tasks, and unlock new possibilities for your business or personal projects. An enterprise seeking digital transformation, or a developer building the next big thing, our comprehensive suite of AI tools empowers you to work smarter, not harder. Discover machine learning models that  can predict trends. Start your AI journey today and stay ahead in the digital era with tools that adapt, learn, and grow according your needs.',
                  ar: 'استكشف مجموعة مختارة من أدوات الذكاء الاصطناعي القوية المصممة لتعزيز الإنتاجية وأتمتة المهام وفتح إمكانيات جديدة لعملك أو مشاريعك الشخصية. سواء كنت مؤسسة تسعى للتحول الرقمي أو مطورًا يبني الشيء الكبير التالي، فإن مجموعتنا الشاملة من أدوات الذكاء الاصطناعي تمكنك من العمل بذكاء أكبر، وليس بجهد أكبر. اكتشف نماذج التعلم الآلي التي تتنبأ بالاتجاهات. ابدأ رحلتك مع الذكاء الاصطناعي اليوم وابقَ في صدارة العصر الرقمي مع أدوات تتكيف وتتعلم وتنمو مع احتياجاتك.',
                  he: 'חקור אוסף מובחר של כלי AI חזקים שנועדו להעצים פרודוקטיביות, לאוטומציה משימות ולפתוח אפשרויות חדשות לעסק או לפרויקטים האישיים שלך. בין אם אתה ארגון שמחפש טרנספורמציה דיגיטלית, או מפתח שבונה את הדבר הגדול הבא, מערך כלי ה-AI המקיף שלנו מעצים אותך לעבוד חכם יותר, לא קשה יותר. גלה מודלים של למידת מכונה שמנבאים מגמות. התחל את מסע ה-AI שלך היום והישאר מוביל בעידן הדיגיטלי עם כלים שמסתגלים, לומדים וצומחים עם הצרכים שלך.'
                }[language.code]
              }</div>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => handleNavigation('/services')}
                className="bg-[#27bdb5] hover:bg-[#12716c] text-white font-bold rounded-lg px-8 py-3 text-base shadow transition-colors border-none outline-none"
              >
                {t.exploreTools}
              </button>
              <button 
                onClick={() => handleNavigation('/about-us')}
                className="bg-transparent border border-[#27bdb5] text-[#27bdb5] hover:bg-[#27bdb5] hover:text-white font-bold rounded-lg px-8 py-3 text-base shadow transition-colors"
              >
                {t.knowMoreArrow}
              </button>
            </div>
          </div>
          
          {/* Right: Image */}
          <div className="flex-1 w-full h-full">
            <img 
              loading="lazy"
              src={ctaHome} 
              alt="CTA Home" 
              className="w-full h-full object-cover rounded-lg"
              style={{ filter: 'brightness(1.3)' }}
            />
          </div>
        </div>
      </section>
             <style>
         {`
           @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600");
           
           :root {
             --bar-scale-y: 0;
             --sparkle-color: rgb(253 244 215 / 40%);
           }
           
           @keyframes pop-word {
             to {
               transform: rotateX(0);
             }
           }
           
           @keyframes show {
             to {
               opacity: 1;
             }
           }
           
           @keyframes bar-scale {
             to {
               transform: scaleY(1);
             }
           }
           
           @keyframes sparkle {
             0% {
               transform: scale(0);
             }
             60% {
               transform: scale(1) translate(4px, 1px) rotate(8deg);
             }
             100% {
               transform: scale(0) translate(4px, 1px) rotate(8deg);
             }
           }
           
           @keyframes shimmer {
             to {
               text-shadow: 0 0 8px #27bdb5;
             }
           }
           
           .animated-title {
             font-family: "Playfair Display", Vidaloka, serif;
             perspective: 500px;
             line-height: 0.85;
           }
           
           .word {
             display: block;
             animation: show 0.01s forwards, pop-word 1.5s forwards;
             animation-timing-function: cubic-bezier(0.14, 1.23, 0.33, 1.16);
             opacity: 0;
             transform: rotateX(120deg);
             transform-origin: 50% 100%;
             color: white;
           }
           
           .word:nth-of-type(3) {
             padding: 0 0.5rem;
             animation-delay: 1.5s;
             color: #1de9b6;
           }
           
           .superscript {
             position: relative;
             animation-delay: 3.6s;
             animation-duration: 0.25s;
             animation-name: shimmer;
             vertical-align: text-top;
           }
           
           /* bars */
           .superscript::before {
             --bar-width: 25%;
             position: absolute;
             top: 37%;
             left: 47%;
             width: 14%;
             height: 48%;
             animation: bar-scale 0.25s linear 3s 1 forwards;
             background: linear-gradient(
               to right,
               white var(--bar-width),
               transparent var(--bar-width) calc(100% - var(--bar-width)),
               white calc(100% - var(--bar-width))
             );
             content: "";
             transform: scaleY(var(--bar-scale-y));
           }
           
           /* sparkle */
           .superscript::after {
             --size: 10rem;
             position: absolute;
             top: -5%;
             left: -85%;
             width: var(--size);
             height: var(--size);
             animation: sparkle 0.4s linear 3.5s 1 forwards;
             background: radial-gradient(
                 circle at center,
                 rgb(252 249 241 / 94%) 0% 7%,
                 transparent 7% 100%
               ),
               conic-gradient(
                 transparent 0deg 18deg,
                 var(--sparkle-color) 18deg,
                 transparent 20deg 40deg,
                 var(--sparkle-color) 40deg,
                 transparent 43deg 87deg,
                 var(--sparkle-color) 87deg,
                 transparent 95deg 175deg,
                 var(--sparkle-color) 175deg,
                 transparent 178deg 220deg,
                 var(--sparkle-color) 220deg,
                 transparent 222deg 270deg,
                 var(--sparkle-color) 270deg,
                 transparent 275deg 300deg,
                 var(--sparkle-color) 300deg,
                 transparent 303deg 360deg
               );
             border-radius: 50%;
             clip-path: polygon(
               50% 0,
               59.13% 26.64%,
               85.13% -2.35%,
               100% 50%,
               50% 100%,
               0 50%,
               31.39% 34.86%
             );
             content: "";
             filter: blur(1px);
             transform: scale(0);
           }
           
           .group:hover .flip-inner {
             transform: rotateY(180deg) !important;
           }
           
           @keyframes wipeInFromLeft {
             from {
               clip-path: inset(0 100% 0 0);
               opacity: 0;
               transform: translateX(-20px);
             }
             to {
               clip-path: inset(0 0 0 0);
               opacity: 1;
               transform: translateX(0);
             }
           }
           
           .wipe-card {
             animation: wipeInFromLeft 1.2s ease-out forwards;
             opacity: 0;
           }
           
           .wipe-card:nth-child(1) { animation-delay: 0.2s; }
           .wipe-card:nth-child(2) { animation-delay: 0.4s; }
           .wipe-card:nth-child(3) { animation-delay: 0.6s; }
           .wipe-card:nth-child(4) { animation-delay: 0.8s; }
           
           /* Service Section Animations */
           @keyframes slideInFromLeft {
             from {
               opacity: 0;
               transform: translateX(-100px) scale(0.8);
             }
             to {
               opacity: 1;
               transform: translateX(0) scale(1);
             }
           }
           
           @keyframes slideInFromRight {
             from {
               opacity: 0;
               transform: translateX(100px) scale(0.8);
             }
             to {
               opacity: 1;
               transform: translateX(0) scale(1);
             }
           }
           
           @keyframes fadeInUp {
             from {
               opacity: 0;
               transform: translateY(30px);
             }
             to {
               opacity: 1;
               transform: translateY(0);
             }
           }
           
           .service-circle {
             animation: slideInFromLeft 1s ease-out forwards;
             opacity: 0;
           }
           
           .service-card {
             animation: fadeInUp 0.8s ease-out forwards;
             opacity: 0;
             transform: translateY(0);
           }
           
           .service-card:hover {
             transform: translateY(-12px) scale(1.05) !important;
             box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
           }
           
           /* Typewriter Effect */
           @keyframes typewriter {
             from {
               width: 0;
             }
             to {
               width: 100%;
             }
           }
           
           @keyframes blink {
             0%, 50% {
               border-color: transparent;
             }
             51%, 100% {
               border-color: #27bdb5;
             }
           }
           
           .typewriter-number {
             overflow: hidden;
             white-space: nowrap;
             animation: typewriter 2s steps(3) 0.5s forwards;
             width: 0;
           }
           
           .typewriter-text {
             overflow: hidden;
             white-space: nowrap;
             animation: typewriter 3s steps(20) 2.5s forwards;
             width: 0;
           }
           
           @media screen and (max-width: 600px) {
             .animated-title {
               font-size: 2rem;
             }
             
             /* sparkle */
             .superscript::after {
               --size: 6rem;
             }
           }
         `}
       </style>
    </>
  );
} 