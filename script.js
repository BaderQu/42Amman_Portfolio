const themeBtn = document.getElementById("themeBtn");
const langBtn = document.getElementById("langBtn");
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");
const avatar = document.getElementById("avatar");
const photoBtn = document.getElementById("photoBtn");

// Translation dictionary (Bounce 02)
const translations = {
  en: {
    pageTitle: "Bader Al-Qutub | Personal Portfolio",
    logo: "Bader Al-Qutub",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navHobbies: "Hobbies",
    navContact: "Contact",
    themeDark: "Dark mode",
    themeLight: "Light mode",
    langBtn: "العربية",
    photoBtn: "Switch photo",
    photoAlt1: "Photo of Bader Al-Qutub",
    photoAlt2: "Second photo of Bader Al-Qutub",
    aboutTitle: "About Me",
    aboutText:
      "Hi, I'm Bader Al-Qutub, 24 years old. I graduated last year from Applied Science Private University with a bachelor's degree in cybersecurity and cloud computing. I'm now learning web development to build my own projects.",
    skillsTitle: "Skills",
    skill1: "Cybersecurity",
    skill2: "Cloud Computing",
    skill3: "Infrastructure",
    skill4: "Git & GitHub",
    skill5: "Organizing tournaments",
    skill6: "EH",
    projectsTitle: "Project Showcase",
    p0Title: "Project 00: Kali Linux Terminal & Git-GitHub",
    p0Desc:
      "Worked in the Kali Linux terminal to manage files and folders, then used Git and GitHub to create a repository, commit my work, and push it over SSH, with a README written in Markdown.",
    p1Title: "Project 01: HTML",
    p1Desc:
      "Built pages with HTML, covering text hierarchy, links, images, lists, tables, forms and a semantic blog layout.",
    p2Title: "Project 02: CSS",
    p2Desc:
      "Styled HTML pages with CSS to control layout, colors, typography and spacing.",
    p3Title: "Project 03: JavaScript",
    p3Desc:
      "Built an interactive web page using JavaScript, HTML and CSS, with DOM manipulation and event handling.",
    viewGithub: "View on GitHub",
    hobbiesTitle: "Hobbies",
    hobby1Title: "Cybersecurity",
    hobby1Desc: "Ethical hacking, networks, and protecting systems.",
    hobby2Title: "Learning",
    hobby2Desc: "Picking up new skills and tools every single day.",
    hobby3Title: "Technology",
    hobby3Desc: "Exploring new gadgets, cloud, and the latest tech.",
    contactTitle: "Contact Me",
    contactIntro: "Feel free to reach out by email, phone, or the form below.",
    labelName: "Name",
    labelEmail: "Email",
    labelPhone: "Phone",
    labelMessage: "Message",
    sendBtn: "Send",
    formThanks: "Thanks! Your message was received.",
    footer: "© 2026 Bader Al-Qutub. Built by hand with HTML, CSS and JavaScript."
  },
  ar: {
    pageTitle: "بدر القطب | معرض أعمالي الشخصي",
    logo: "بدر القطب",
    navAbout: "عني",
    navSkills: "المهارات",
    navProjects: "المشاريع",
    navHobbies: "الهوايات",
    navContact: "تواصل معي",
    themeDark: "الوضع الداكن",
    themeLight: "الوضع الفاتح",
    langBtn: "English",
    photoBtn: "تغيير الصورة",
    photoAlt1: "صورة بدر القطب",
    photoAlt2: "صورة ثانية لبدر القطب",
    aboutTitle: "عني",
    aboutText:
      "مرحباً، أنا بدر القطب، عمري 24 سنة. تخرجت العام الماضي من جامعة العلوم التطبيقية الخاصة بدرجة البكالوريوس في الأمن السيبراني والحوسبة السحابية. وأتعلم الآن تطوير الويب لأبني مشاريعي الخاصة.",
    skillsTitle: "المهارات",
    skill1: "الأمن السيبراني",
    skill2: "الحوسبة السحابية",
    skill3: "البنية التحتية",
    skill4: "Git وGitHub",
    skill5: "تنظيم البطولات",
    skill6: "الاختراق الأخلاقي",
    projectsTitle: "عرض المشاريع",
    p0Title: "المشروع 00: طرفية Kali Linux وGit-GitHub",
    p0Desc:
      "عملت على طرفية Kali Linux لإدارة الملفات والمجلدات، ثم استخدمت Git وGitHub لإنشاء مستودع وحفظ عملي ورفعه عبر SSH، مع ملف README مكتوب بصيغة Markdown.",
    p1Title: "المشروع 01: HTML",
    p1Desc:
      "بنيت صفحات بلغة HTML تشمل تسلسل النصوص والروابط والصور والقوائم والجداول والنماذج وتخطيط مدونة دلالي.",
    p2Title: "المشروع 02: CSS",
    p2Desc:
      "نسّقت صفحات HTML باستخدام CSS للتحكم بالتخطيط والألوان والخطوط والمسافات.",
    p3Title: "المشروع 03: JavaScript",
    p3Desc:
      "بنيت صفحة ويب تفاعلية باستخدام JavaScript وHTML وCSS، مع التعامل مع الـ DOM والأحداث.",
    viewGithub: "عرض على GitHub",
    hobbiesTitle: "الهوايات",
    hobby1Title: "الأمن السيبراني",
    hobby1Desc: "الاختراق الأخلاقي والشبكات وحماية الأنظمة.",
    hobby2Title: "التعلّم",
    hobby2Desc: "اكتساب مهارات وأدوات جديدة كل يوم.",
    hobby3Title: "التقنية",
    hobby3Desc: "استكشاف الأجهزة الجديدة والحوسبة السحابية وأحدث التقنيات.",
    contactTitle: "تواصل معي",
    contactIntro: "تواصل معي عبر البريد الإلكتروني أو الهاتف أو النموذج أدناه.",
    labelName: "الاسم",
    labelEmail: "البريد الإلكتروني",
    labelPhone: "الهاتف",
    labelMessage: "الرسالة",
    sendBtn: "إرسال",
    formThanks: "شكراً! تم استلام رسالتك.",
    footer: "© 2026 بدر القطب. بُني يدوياً بـ HTML وCSS وJavaScript."
  }
};

// State
let currentLang = "en";
let currentPhoto = 0;
let formMsgKey = "";

const photos = [
  { src: "assets/photo.jpg", altKey: "photoAlt1" },
  { src: "assets/photo2.jpg", altKey: "photoAlt2" }
];

// Theme button text depends on both the theme and the language
function updateThemeButton() {
  const dict = translations[currentLang];

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = dict.themeLight;
  } else {
    themeBtn.textContent = dict.themeDark;
  }
}

// Language switcher
function applyLanguage(lang) {
  const dict = translations[lang];

  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = dict.pageTitle;

  const items = document.querySelectorAll("[data-i18n]");
  items.forEach(function (item) {
    const key = item.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      item.textContent = dict[key];
    }
  });

  avatar.alt = dict[photos[currentPhoto].altKey];
  updateThemeButton();

  if (formMsgKey !== "") {
    formMsg.textContent = dict[formMsgKey];
  }
}

langBtn.addEventListener("click", function () {
  if (currentLang === "en") {
    applyLanguage("ar");
  } else {
    applyLanguage("en");
  }
});

// Theme switcher
themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  updateThemeButton();
});

// Contact form
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  formMsgKey = "formThanks";
  formMsg.textContent = translations[currentLang][formMsgKey];
  contactForm.reset();
});

// Profile photo switcher (Bounce 01)
photoBtn.addEventListener("click", function () {
  avatar.classList.add("fade");

  setTimeout(function () {
    currentPhoto = (currentPhoto + 1) % photos.length;
    avatar.src = photos[currentPhoto].src;
    avatar.alt = translations[currentLang][photos[currentPhoto].altKey];
    avatar.classList.remove("fade");
  }, 300);
});
