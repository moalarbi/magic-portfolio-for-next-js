import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "محمد",
  lastName: "العربي",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "مدير إبداعي ومطور براندات",
  avatar: "/images/avatar.jpg",
  email: "dr.al3rbi@gmail.com",
  location: "Asia/Riyadh",
  languages: ["العربية", "الإنجليزية"],
};

const newsletter = {
  display: false,
  title: <>اشترك في النشرة البريدية الخاصة بـ {person.firstName}</>,
  description: (
    <>
      أشارك محتوى حصري عن بناء البراندات، استراتيجيات التسويق، وتجارب من عملي كمبدع مستقل.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/moalarbi",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/moal3rbi",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/966537311886",
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "الرئيسية",
  title: `${person.name} | ${person.role}`,
  description: `موقع يعرض أعمال ${person.name} في تطوير البراندات وتصميم الهويات.`,
  headline: <>نحوّل الأفكار إلى هويات تبقى في الذاكرة</>,
  featured: {
    display: true,
    title: <>أحدث المشاريع: <strong className="ml-4">Fada Veil</strong></>,
    href: "/work/fada-veil-launch",
  },
  subline: (
    <>
      أنا محمد، أعمل كمدير إبداعي في <strong>إمدادات العطاء</strong>، وأبني أنظمة متكاملة للمتاجر الإلكترونية.
      <br /> أدمج بين التصميم، التطوير، والتسويق لخلق تجربة عميل متكاملة.
    </>
  ),
};

const about = {
  path: "/about",
  label: "من أنا",
  title: `عن ${person.name}`,
  description: `تعرف على ${person.name}، ${person.role} من ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
  },
  intro: {
    display: true,
    title: "نبذة تعريفية",
    description: (
      <>
        محمد العربي، مدير إبداعي من السعودية. ساعدت أكثر من 30 علامة تجارية على بناء وجود رقمي قوي.
        <br /> أعمل بشغف على تحويل الأفكار إلى مشاريع ناجحة تمزج بين التصميم والتقنية.
      </>
    ),
  },
  work: {
    display: true,
    title: "الخبرات العملية",
    experiences: [
      {
        company: "إمدادات العطاء",
        timeframe: "2024 - الآن",
        role: "مدير إبداعي",
        achievements: [
          <>قيادة تطوير هوية تطبيق جولدن الترا بالكامل.</>,
          <>إطلاق حملات تسويقية ساعدت في الوصول إلى 19,000 عميل خلال 4 أشهر.</>,
        ],
        images: [
          {
            src: "/images/projects/golden-ultra.jpg",
            alt: "Golden Ultra Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Freelance",
        timeframe: "2016 - 2023",
        role: "مصمم ومطور حر",
        achievements: [
          <>خدمة أكثر من 20 متجر إلكتروني في السعودية.</>,
          <>بناء هويات براند احترافية لمشاريع ناشئة وتحقيق نتائج فعلية.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "الدراسة",
    institutions: [
      {
        name: "جامعة الزقازيق",
        description: <>بكالوريوس إعلام – دفعة 2020</>,
      },
      {
        name: "شهادة المصمم العربي",
        description: <>من أكاديمية محمد رج – تصميم البراندات</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "المهارات التقنية",
    skills: [
      {
        title: "Adobe Suite",
        description: <>فوتوشوب، اليستريتور، بريمير، أفتر إفكتس – تصميم احترافي لهويات بصرية.</>,
        images: [],
      },
      {
        title: "Next.js & Webflow",
        description: <>بناء مواقع مخصصة وسريعة باستخدام Next.js وWebflow.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "المدونة",
  title: "أكتب عن التجارة الإلكترونية والتصميم",
  description: `اطلع على أفكار وتجارب ${person.name} في عالم البراندات.`,
};

const work = {
  path: "/work",
  label: "أعمالي",
  title: `مشاريعي – ${person.name}`,
  description: `أعمال تصميم وتطوير قام بها ${person.name}.`,
};

const gallery = {
  path: "/gallery",
  label: "المعرض",
  title: `معرض الصور – ${person.name}`,
  description: `مجموعة من الصور والمشاريع التي عمل عليها ${person.name}`,
  images: [
    {
      src: "/images/gallery/fada-veil.jpg",
      alt: "مشروع Fada Veil",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/golden-ultra.jpg",
      alt: "مشروع Golden Ultra",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/branding.jpg",
      alt: "تصميم هوية",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
