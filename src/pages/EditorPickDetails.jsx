import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import healthcareImg from "../assets/AI in Healthcare- Real Case Studies.webp";
import businessImg from "../assets/Building Custom AI Assistants for Business.png";
import openSourceImg from "../assets/Open Source AI Projects to Watch.webp";

const picks = {
  en: [
    {
      id: "1",
      title: "AI for Healthcare Breakthroughs",
      author: "Dr. Sarah Chen",
      readTime: "8 min read",
      image: healthcareImg,
      intro: "Artificial Intelligence (AI) is revolutionizing the healthcare industry by enabling faster, more accurate diagnoses, personalized treatment plans, and improved patient outcomes. From predictive analytics to robotic surgery, AI is transforming every aspect of healthcare delivery.",
      sections: [
        {
          heading: "Key Use Cases",
          content: [
            "Medical imaging analysis for early disease detection",
            "Predictive analytics for patient risk assessment",
            "AI-powered chatbots for patient engagement and support",
            "Personalized medicine and treatment recommendations",
            "Robotic-assisted surgeries for precision and safety"
          ]
        },
        {
          heading: "Benefits of AI in Healthcare",
          content: [
            "Faster and more accurate diagnoses",
            "Reduced human error and improved patient safety",
            "Enhanced efficiency for healthcare providers",
            "Cost savings for hospitals and patients",
            "Better patient engagement and satisfaction"
          ]
        },
        {
          heading: "Challenges & Considerations",
          content: [
            "Data privacy and security concerns",
            "Need for high-quality, unbiased data",
            "Integration with existing healthcare systems",
            "Regulatory and ethical considerations"
          ]
        }
      ],
      quote: {
        text: "AI is not here to replace doctors, but to empower them with better tools and insights.",
        author: "Dr. Sarah Chen"
      },
      conclusion: "As AI continues to evolve, its impact on healthcare will only grow. By embracing these technologies, healthcare providers can deliver better care, improve outcomes, and shape the future of medicine."
    },
    {
      id: "2",
      title: "The Rise of Generative Models",
      author: "Alex Rodriguez",
      readTime: "6 min read",
      image: businessImg,
      intro: "Generative AI models like GPT and DALL·E are transforming the way we create content, solve problems, and interact with technology. These models can generate human-like text, create stunning images, and even compose music, opening up new possibilities for creativity and innovation.",
      sections: [
        {
          heading: "Key Takeaways",
          content: [
            "Generative models can create new data, not just analyze existing data.",
            "They are used for text, images, audio, and more.",
            "Applications range from content creation to software development.",
            "Ethical use and bias are important considerations."
          ]
        },
        {
          heading: "In-Depth Analysis",
          content: [
            "Generative models are trained on massive datasets and learn to mimic the patterns in that data. For example, GPT-3 can write essays, answer questions, and even generate code, while DALL·E can create original images from text prompts. These models are pushing the boundaries of what AI can do.",
            "However, generative AI also raises questions about originality, copyright, and the potential for misuse. Ensuring transparency and fairness is crucial as these models become more widespread."
          ]
        },
        {
          heading: "Real-World Examples",
          content: [
            "OpenAI's GPT-3 powers chatbots, writing assistants, and more.",
            "DALL·E generates unique images for marketing and design.",
            "GitHub Copilot helps developers write code using AI suggestions."
          ]
        }
      ],
      quote: {
        text: "Generative AI is not just a tool for automation, but a partner in creativity.",
        author: "Alex Rodriguez"
      },
      conclusion: "As generative AI continues to advance, it will play an increasingly important role in shaping the future of creativity, business, and technology. Staying informed and responsible is key to harnessing its full potential."
    },
    {
      id: "3",
      title: "Smarter Marketing with AI",
      author: "Maria Johnson",
      readTime: "7 min read",
      image: openSourceImg,
      intro: "AI is revolutionizing marketing by enabling brands to deliver personalized experiences, optimize campaigns, and gain deeper insights into customer behavior. From predictive analytics to automated content creation, AI is helping marketers achieve better results with less effort.",
      sections: [
        {
          heading: "Key Takeaways",
          content: [
            "AI enables hyper-personalized marketing at scale.",
            "Predictive analytics drive smarter campaign decisions.",
            "AI-powered chatbots and assistants improve customer engagement.",
            "Automation reduces manual workload for marketing teams."
          ]
        },
        {
          heading: "In-Depth Analysis",
          content: [
            "AI tools can analyze vast amounts of customer data to uncover patterns and preferences, allowing marketers to deliver the right message to the right person at the right time. Automated content generation tools can create blog posts, social media updates, and even ad copy, freeing up creative teams for higher-level strategy.",
            "Real-time analytics and campaign optimization mean marketers can adjust their strategies on the fly, maximizing ROI and staying ahead of the competition."
          ]
        },
        {
          heading: "Real-World Examples",
          content: [
            "Netflix uses AI to recommend shows and movies to users.",
            "Amazon personalizes product recommendations using AI algorithms.",
            "H&M uses AI to optimize pricing and inventory management."
          ]
        }
      ],
      quote: {
        text: "AI is the marketer’s new best friend, enabling smarter, faster, and more creative campaigns.",
        author: "Maria Johnson"
      },
      conclusion: "As AI continues to evolve, marketers who embrace these technologies will be better positioned to connect with customers, drive growth, and stay ahead of the competition."
    }
  ],
  ar: [
    {
      id: "1",
      title: "اختراقات الذكاء الاصطناعي في الرعاية الصحية",
      author: "د. سارة تشين",
      readTime: "٨ دقائق قراءة",
      image: healthcareImg,
      intro: "يحدث الذكاء الاصطناعي ثورة في صناعة الرعاية الصحية من خلال تمكين التشخيصات الأسرع والأكثر دقة، وخطط العلاج الشخصية، وتحسين نتائج المرضى. من التحليلات التنبؤية إلى الجراحة الروبوتية، يغير الذكاء الاصطناعي كل جانب من جوانب تقديم الرعاية الصحية.",
      sections: [
        {
          heading: "الحالات الرئيسية للاستخدام",
          content: [
            "تحليل الصور الطبية للكشف المبكر عن الأمراض",
            "التحليلات التنبؤية لتقييم مخاطر المرضى",
            "الدردشة الذكية لدعم وتفاعل المرضى",
            "الطب الشخصي وتوصيات العلاج",
            "الجراحات الروبوتية للدقة والسلامة"
          ]
        },
        {
          heading: "فوائد الذكاء الاصطناعي في الرعاية الصحية",
          content: [
            "تشخيصات أسرع وأكثر دقة",
            "تقليل الأخطاء البشرية وتحسين سلامة المرضى",
            "زيادة الكفاءة لمقدمي الرعاية الصحية",
            "توفير التكاليف للمستشفيات والمرضى",
            "تحسين تفاعل ورضا المرضى"
          ]
        },
        {
          heading: "التحديات والاعتبارات",
          content: [
            "مخاوف الخصوصية وأمان البيانات",
            "الحاجة إلى بيانات عالية الجودة وغير متحيزة",
            "الدمج مع أنظمة الرعاية الصحية الحالية",
            "الاعتبارات التنظيمية والأخلاقية"
          ]
        }
      ],
      quote: {
        text: "الذكاء الاصطناعي ليس هنا ليحل محل الأطباء، بل لتمكينهم بأدوات ورؤى أفضل.",
        author: "د. سارة تشين"
      },
      conclusion: "مع استمرار تطور الذكاء الاصطناعي، سيزداد تأثيره على الرعاية الصحية. من خلال تبني هذه التقنيات، يمكن لمقدمي الرعاية الصحية تقديم رعاية أفضل وتحسين النتائج وتشكيل مستقبل الطب."
    },
    {
      id: "2",
      title: "صعود النماذج التوليدية",
      author: "أليكس رودريغيز",
      readTime: "٦ دقائق قراءة",
      image: businessImg,
      intro: "تغير نماذج الذكاء الاصطناعي التوليدية مثل GPT وDALL·E طريقة إنشاء المحتوى وحل المشكلات والتفاعل مع التكنولوجيا. يمكن لهذه النماذج توليد نصوص بشرية، وإنشاء صور مذهلة، وحتى تأليف الموسيقى، مما يفتح إمكانيات جديدة للإبداع والابتكار.",
      sections: [
        {
          heading: "النقاط الرئيسية",
          content: [
            "النماذج التوليدية يمكنها إنشاء بيانات جديدة، وليس فقط تحليل البيانات الموجودة.",
            "تستخدم للنصوص والصور والصوت والمزيد.",
            "تطبيقاتها تتراوح من إنشاء المحتوى إلى تطوير البرمجيات.",
            "الاستخدام الأخلاقي والتحيز اعتبارات هامة."
          ]
        },
        {
          heading: "تحليل متعمق",
          content: [
            "تدرب النماذج التوليدية على مجموعات بيانات ضخمة وتتعلم تقليد الأنماط في تلك البيانات. على سبيل المثال، يمكن لـ GPT-3 كتابة المقالات، والإجابة على الأسئلة، وحتى توليد الشيفرة، بينما يمكن لـ DALL·E إنشاء صور أصلية من التعليمات النصية. هذه النماذج تدفع حدود ما يمكن أن يفعله الذكاء الاصطناعي.",
            "ومع ذلك، تثير الذكاء الاصطناعي التوليدي أيضًا أسئلة حول الأصالة وحقوق النشر وإمكانية سوء الاستخدام. ضمان الشفافية والعدالة أمر بالغ الأهمية مع انتشار هذه النماذج."
          ]
        },
        {
          heading: "أمثلة واقعية",
          content: [
            "GPT-3 من OpenAI يدعم الدردشة الذكية ومساعدي الكتابة والمزيد.",
            "DALL·E ينشئ صورًا فريدة للتسويق والتصميم.",
            "GitHub Copilot يساعد المطورين في كتابة الشيفرة باستخدام اقتراحات الذكاء الاصطناعي."
          ]
        }
      ],
      quote: {
        text: "الذكاء الاصطناعي التوليدي ليس مجرد أداة للأتمتة، بل شريك في الإبداع.",
        author: "أليكس رودريغيز"
      },
      conclusion: "مع استمرار تقدم الذكاء الاصطناعي التوليدي، سيلعب دورًا متزايد الأهمية في تشكيل مستقبل الإبداع والأعمال والتكنولوجيا. البقاء على اطلاع واستخدامه بمسؤولية هو المفتاح للاستفادة الكاملة من إمكانياته."
    },
    {
      id: "3",
      title: "تسويق أكثر ذكاءً مع الذكاء الاصطناعي",
      author: "ماريا جونسون",
      readTime: "٧ دقائق قراءة",
      image: openSourceImg,
      intro: "يحدث الذكاء الاصطناعي ثورة في التسويق من خلال تمكين العلامات التجارية من تقديم تجارب شخصية، وتحسين الحملات، والحصول على رؤى أعمق حول سلوك العملاء. من التحليلات التنبؤية إلى إنشاء المحتوى التلقائي، يساعد الذكاء الاصطناعي المسوقين على تحقيق نتائج أفضل بجهد أقل.",
      sections: [
        {
          heading: "النقاط الرئيسية",
          content: [
            "الذكاء الاصطناعي يمكّن التسويق المخصص على نطاق واسع.",
            "التحليلات التنبؤية تدفع قرارات الحملات الذكية.",
            "الدردشة الذكية والمساعدون يحسنون تفاعل العملاء.",
            "الأتمتة تقلل من عبء العمل اليدوي على فرق التسويق."
          ]
        },
        {
          heading: "تحليل متعمق",
          content: [
            "يمكن لأدوات الذكاء الاصطناعي تحليل كميات هائلة من بيانات العملاء لاكتشاف الأنماط والتفضيلات، مما يسمح للمسوقين بتقديم الرسالة الصحيحة للشخص المناسب في الوقت المناسب. يمكن لأدوات إنشاء المحتوى التلقائي إنشاء منشورات المدونة وتحديثات وسائل التواصل الاجتماعي وحتى نصوص الإعلانات، مما يوفر الوقت للفرق الإبداعية للتركيز على الاستراتيجية.",
            "التحليلات الفورية وتحسين الحملات تعني أن المسوقين يمكنهم تعديل استراتيجياتهم بسرعة، مما يزيد من العائد على الاستثمار ويبقيهم في المقدمة."
          ]
        },
        {
          heading: "أمثلة واقعية",
          content: [
            "تستخدم Netflix الذكاء الاصطناعي لتوصية العروض والأفلام للمستخدمين.",
            "تستخدم Amazon خوارزميات الذكاء الاصطناعي لتخصيص توصيات المنتجات.",
            "تستخدم H&M الذكاء الاصطناعي لتحسين التسعير وإدارة المخزون."
          ]
        }
      ],
      quote: {
        text: "الذكاء الاصطناعي هو أفضل صديق جديد للمسوق، يمكّن الحملات الذكية والسريعة والمبدعة.",
        author: "ماريا جونسون"
      },
      conclusion: "مع استمرار تطور الذكاء الاصطناعي، سيكون المسوقون الذين يتبنون هذه التقنيات في وضع أفضل للتواصل مع العملاء، ودفع النمو، والبقاء في المقدمة."
    }
  ],
  he: [
    {
      id: "1",
      title: "פריצות דרך ב-AI לבריאות",
      author: "ר שרה צ'ן",
      readTime: "8 דקות קריאה",
    image: healthcareImg,
  intro: "בינה מלאכותית משנה את תחום הבריאות על ידי אבחונים מהירים ומדויקים יותר, תוכניות טיפול מותאמות אישית ותוצאות טובות יותר למטופלים. מאנליטיקה חזויה ועד ניתוחים רובוטיים, AI משנה כל היבט במתן שירותי הבריאות.",
      sections: [
        {
          heading: "שימושים עיקריים",
          content: [
            "ניתוח תמונות רפואיות לגילוי מוקדם של מחלות",
            "אנליטיקה חזויה להערכת סיכוני מטופלים",
            "צ'אטבוטים חכמים לתמיכה ומעורבות מטופלים",
            "רפואה מותאמת אישית והמלצות טיפול",
            "ניתוחים רובוטיים לדיוק ובטיחות"
          ]
        },
        {
          heading: "יתרונות AI בבריאות",
          content: [
            "אבחונים מהירים ומדויקים יותר",
            "הפחתת טעויות אנוש ושיפור בטיחות המטופל",
            "יעילות גבוהה יותר לצוותים רפואיים",
            "חיסכון בעלויות לבתי חולים ומטופלים",
            "מעורבות ושביעות רצון גבוהה יותר של מטופלים"
          ]
        },
        {
          heading: "אתגרים ושיקולים",
          content: [
            "חששות לפרטיות ואבטחת מידע",
            "צורך בנתונים איכותיים ולא מוטים",
            "שילוב עם מערכות בריאות קיימות",
            "שיקולים רגולטוריים ואתיים"
          ]
        }
      ],
      quote: {
        text: "AI לא בא להחליף רופאים, אלא להעצים אותם בכלים ותובנות טובים יותר.",
        author: "ר שרה צ'ן"
      },
      conclusion: "ככל ש-AI מתפתח, השפעתו על הבריאות רק תגדל. אימוץ טכנולוגיות אלו יאפשר לצוותים רפואיים להעניק טיפול טוב יותר, לשפר תוצאות ולעצב את עתיד הרפואה."
    },
    {
      id: "2",
      title: "עליית המודלים הגנרטיביים",
      author: "אלכס רודריגז",
      readTime: "6 דקות קריאה",
      image: businessImg,
      intro: "מודלים גנרטיביים כמו GPT ו-DALL·E משנים את הדרך בה אנו יוצרים תוכן, פותרים בעיות ומתקשרים עם טכנולוגיה. מודלים אלו יכולים ליצור טקסטים אנושיים, תמונות מדהימות ואפילו להלחין מוזיקה, ופותחים אפשרויות חדשות ליצירתיות וחדשנות.",
      sections: [
        {
          heading: "עיקרי הדברים",
          content: [
            "מודלים גנרטיביים יוצרים נתונים חדשים, לא רק מנתחים קיימים.",
            "משמשים לטקסט, תמונות, אודיו ועוד.",
            "יישומים מגוונים: יצירת תוכן, פיתוח תוכנה ועוד.",
            "שימוש אתי והטיות הם שיקולים חשובים."
          ]
        },
        {
          heading: "ניתוח מעמיק",
          content: [
            "מודלים גנרטיביים מאומנים על מאגרי נתונים עצומים ולומדים לחקות דפוסים. לדוגמה, GPT-3 יכול לכתוב מאמרים, לענות על שאלות ואפילו ליצור קוד, בעוד DALL·E יוצר תמונות מקוריות מהוראות טקסט. מודלים אלו דוחפים את גבולות ה-AI.",
            "עם זאת, AI גנרטיבי מעלה שאלות על מקוריות, זכויות יוצרים ושימוש לרעה. שקיפות והוגנות הן קריטיות להטמעה רחבה."
          ]
        },
        {
          heading: "דוגמאות מהשטח",
          content: [
            "GPT-3 של OpenAI מניע צ'אטבוטים, עוזרי כתיבה ועוד.",
            "DALL·E יוצר תמונות ייחודיות לשיווק ועיצוב.",
            "GitHub Copilot מסייע למפתחים לכתוב קוד עם הצעות AI."
          ]
        }
      ],
      quote: {
        text: "AI גנרטיבי הוא לא רק כלי לאוטומציה, אלא שותף ליצירתיות.",
        author: "אלכס רודריגז"
      },
      conclusion: "ככל ש-AI גנרטיבי מתקדם, תפקידו בעיצוב עתיד היצירתיות, העסקים והטכנולוגיה יגדל. שימוש אחראי ומושכל הוא המפתח למיצוי הפוטנציאל."
    },
    {
      id: "3",
      title: "שיווק חכם יותר עם AI",
      author: "מריה ג'ונסון",
      readTime: "7 דקות קריאה",
      image: openSourceImg,
      intro: "AI משנה את עולם השיווק בכך שהוא מאפשר למותגים להעניק חוויות מותאמות אישית, לייעל קמפיינים ולהבין טוב יותר את התנהגות הלקוחות. מהאנליטיקה החזויה ועד יצירת תוכן אוטומטית, AI עוזר למשווקים להשיג תוצאות טובות יותר בפחות מאמץ.",
      sections: [
        {
          heading: "עיקרי הדברים",
          content: [
            "AI מאפשר שיווק מותאם אישית בקנה מידה גדול.",
            "אנליטיקה חזויה מובילה להחלטות קמפיין חכמות יותר.",
            "צ'אטבוטים ועוזרים חכמים משפרים את מעורבות הלקוחות.",
            "אוטומציה מפחיתה את העומס הידני על צוותי השיווק."
          ]
        },
        {
          heading: "ניתוח מעמיק",
          content: [
            "כלי AI יכולים לנתח כמויות עצומות של נתוני לקוחות ולגלות דפוסים והעדפות, מה שמאפשר למשווקים להעביר את המסר הנכון לאדם הנכון בזמן הנכון. כלי יצירת תוכן אוטומטיים יכולים ליצור פוסטים לבלוג, עדכונים לרשתות חברתיות ואפילו טקסטים לפרסומות, ולפנות זמן לצוותים יצירתיים להתמקד באסטרטגיה.",
            "אנליטיקות בזמן אמת ואופטימיזציה של קמפיינים מאפשרות למשווקים לשנות אסטרטגיות במהירות, להגדיל את ה-ROI ולהישאר מובילים."
          ]
        },
        {
          heading: "דוגמאות מהשטח",
          content: [
            "נטפליקס משתמשת ב-AI להמלצות תוכן למשתמשים.",
            "אמזון מתאימה המלצות מוצרים עם אלגוריתמים של AI.",
            "H&M משתמשת ב-AI לאופטימיזציה של תמחור וניהול מלאי."
          ]
        }
      ],
      quote: {
        text: "AI הוא החבר החדש של המשווק, מאפשר קמפיינים חכמים, מהירים ויצירתיים יותר.",
        author: "מריה ג'ונסון"
      },
      conclusion: "ככל ש-AI מתפתח, משווקים שיאמצו את הטכנולוגיה יהיו בעמדה טובה יותר להתחבר ללקוחות, להוביל צמיחה ולהישאר מובילים."
    }
  ]
};


const EditorPickDetails = () => {
  const { id } = useParams();
  const { theme } = useTheme();
  const { language } = useLanguage();
  const pickList = picks[language.code] && picks[language.code].length > 0 ? picks[language.code] : picks.en;
  const pick = pickList.find((p) => p.id === id) || pickList[0];

  return (
    <section className={`w-screen min-h-screen p-0 m-0 ${theme === 'dark' ? 'bg-[#181818] text-white' : 'bg-white text-black'}`}>
      {/* Header with back button */}
      <div className="w-full py-6 px-6">
        <Link to="/blog" className={`font-bold text-lg hover:underline transition px-4 py-2 rounded-lg inline-block ${theme === 'dark' ? 'text-[#19e6f7] hover:text-[#19bba6] bg-black bg-opacity-50' : 'text-[#19e6f7] hover:text-[#19bba6] bg-gray-100'}`}>
          {/* You can translate this label as needed */}
          ← Back to Blog
        </Link>
      </div>

      {/* Centered small image */}
      <div className="w-full flex justify-center mb-8">
        <div className="w-full max-w-2xl px-4">
          <img
            src={pick.image}
            loading="lazy"
            alt={pick.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Title and author info */}
      <div className="w-full text-center mb-12 px-4">
        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{pick.title}</h1>
        <div className={`flex items-center justify-center gap-4 text-lg ${theme === 'dark' ? 'text-[#04D9FF]' : 'text-[#19e6f7]'}`}>
          <span>{/* You can translate "By" as needed */}By {pick.author}</span>
          <span>•</span>
          <span>{pick.readTime}</span>
        </div>
      </div>

      {/* Full-width content */}
      <div className="w-screen min-h-[55vh] py-12 px-4 md:px-24">
        <section className="mb-10">
          <h2 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-[#19e6f7]' : 'text-[#19e6f7]'}`}>
            {/* You can translate "Introduction" as needed */}
            Introduction
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-700'}`}>{pick.intro}</p>
        </section>
        {pick.sections.map((section, idx) => (
          <section className="mb-10" key={idx}>
            <h2 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-[#19e6f7]' : 'text-[#19e6f7]'}`}>{section.heading}</h2>
            <ul className={`list-disc pl-6 mb-4 ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-700'}`}>
              {section.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
        <section className="mb-10">
          <h2 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-[#19e6f7]' : 'text-[#19e6f7]'}`}>
            {/* You can translate "Expert Quote" as needed */}
            Expert Quote
          </h2>
          <blockquote className={`border-l-4 border-[#19e6f7] pl-4 italic ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-700'}`}>
            "{pick.quote.text}"<br />
            <span className={`font-semibold ${theme === 'dark' ? 'text-[#19bba6]' : 'text-[#19bba6]'}`}>— {pick.quote.author}</span>
          </blockquote>
        </section>
        <section>
          <h2 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-[#19e6f7]' : 'text-[#19e6f7]'}`}>
            {/* You can translate "Conclusion" as needed */}
            Conclusion
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-700'}`}>{pick.conclusion}</p>
        </section>
      </div>
    </section>
  );
};

export default EditorPickDetails;