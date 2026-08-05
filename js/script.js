// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));

// ---------- Language switch (RU / EN) ----------
const translations = {
  ru: {
    'nav.about': 'Обо мне',
    'nav.skills': 'Навыки',
    'nav.experience': 'Опыт',
    'nav.certifications': 'Сертификаты',
    'nav.contact': 'Контакты',
    'header.download': 'Скачать резюме',

    'hero.eyebrow': 'ЗДРАВСТВУЙТЕ, Я',
    'hero.desc': 'Специалист по информационной безопасности и IT-инфраструктуре с опытом 8+ лет: NGFW, VPN/крипто-шлюзы, hardening Linux, сетевая безопасность корпоративного уровня. Открыт к релокации в любую страну.',
    'hero.ctaExperience': 'Посмотреть опыт',
    'hero.ctaContact': 'Связаться',
    'hero.metaLocation': 'Санкт-Петербург, Россия',
    'hero.metaRelocation': 'Открыт к релокации в любую страну',

    'about.eyebrow': 'ОБО МНЕ',
    'about.title': 'Безопасность и инфраструктура<br>— моя специализация.',
    'about.text': 'Более 8 лет практического опыта в сетевой безопасности, системном администрировании и корпоративной IT-поддержке. Сегодня фокус — развёртывание и hardening защитной инфраструктуры для корпоративных клиентов: межсетевые экраны нового поколения, зашифрованные VPN/крипто-шлюзы и защищённые Linux-серверы. Уверенная база в администрировании Windows/Linux, корпоративных сетях (VLAN/ACL, L2/L3) и полном цикле ввода инфраструктуры в эксплуатацию.',
    'about.download': 'Скачать полное резюме',
    'about.factsEyebrow': 'КОРОТКО',
    'about.factExperienceLabel': 'Опыт',
    'about.factExperienceValue': '8+ лет в ИБ и IT-инфраструктуре',
    'about.factLocationLabel': 'Локация',
    'about.factLocationValue': 'Санкт-Петербург, Россия',
    'about.factRelocationLabel': 'Релокация',
    'about.factRelocationValue': 'Готов к переезду в любую страну',
    'about.factLangLabel': 'Языки',
    'about.factLangValue': 'Русский — родной, English — B2',
    'about.factLicenseLabel': 'Права',
    'about.factLicenseValue': 'Категория B',

    'skills.eyebrow': 'НАВЫКИ',
    'skills.title': 'Ключевые компетенции.',
    'skills.col1Title': 'Сеть и безопасность',
    'skills.col1Item1': 'Развёртывание и управление политиками NGFW',
    'skills.col1Item2': 'Администрирование VPN / крипто-шлюзов',
    'skills.col1Item3': 'Hardening сетей, VLAN/ACL, L2/L3 коммутация',
    'skills.col1Item4': 'PKI и криптографическая инфраструктура',
    'skills.col1Item5': 'Incident response и root-cause troubleshooting',
    'skills.col2Title': 'Системное администрирование',
    'skills.col2Item1': 'Администрирование серверов и клиентов Windows &amp; Linux',
    'skills.col2Item2': 'Hardening Enterprise Linux и compliance',
    'skills.col2Item3': 'Системы хранения (DSS), виртуализация и гипервизоры',
    'skills.col2Item4': 'Поддержка среды Active Directory',
    'skills.col3Title': 'Сети и инфраструктура',
    'skills.col3Item1': 'Сетевое оборудование (MikroTik, L2/L3-коммутаторы)',
    'skills.col3Item2': 'Структурированные кабельные системы, монтаж стоек',
    'skills.col3Item3': 'Мониторинг и автоматизация (Zabbix, Tactical RMM)',

    'experience.eyebrow': 'ОПЫТ РАБОТЫ',
    'experience.title': 'Карьерный путь.',

    'exp.1.date': 'Июнь 2025 — настоящее время',
    'exp.1.role': 'Специалист по информационной безопасности',
    'exp.1.company': 'Gazinformservice Certification Center LLC — Санкт-Петербург',
    'exp.1.b1': 'Развёртывание и поддержка защитной сетевой инфраструктуры: NGFW, зашифрованные VPN/крипто-шлюзы для корпоративных клиентов',
    'exp.1.b2': 'Администрирование и hardening корпоративных Linux-серверов под требования compliance',
    'exp.1.b3': 'Управление системами хранения, файрволами и сетевым оборудованием клиентской инфраструктуры',
    'exp.1.b4': 'Полный цикл (PnP) ввода в эксплуатацию защитной инфраструктуры для корпоративных проектов',

    'exp.2.date': 'Авг 2024 — Июнь 2025',
    'exp.2.role': 'Системный администратор',
    'exp.2.company': 'ITart LLC — Санкт-Петербург',
    'exp.2.b1': 'Удалённая и выездная техническая поддержка в средах Windows и Linux',
    'exp.2.b2': 'Внедрение мониторинга и автоматизации (Zabbix, Tactical RMM), сокращение времени реагирования',
    'exp.2.b3': 'Администрирование корпоративных сетей, серверов и офисного IT-оборудования',
    'exp.2.b4': 'Прокладка структурированных кабельных сетей и монтаж физической инфраструктуры',

    'exp.3.date': 'Апр 2024 — Авг 2024',
    'exp.3.role': 'Инженер по техническому обслуживанию',
    'exp.3.company': 'ГБУ ДЮЦС Московского района (спортивный центр) — Санкт-Петербург',
    'exp.3.b1': 'Поддержка бесперебойной работы СКУД, IP/аналогового видеонаблюдения и AV-систем объекта',
    'exp.3.b2': 'Обслуживание 46 рабочих мест (десктопы, ноутбуки, моноблоки, мини-ПК)',
    'exp.3.b3': 'Администрирование ПО для шифрованной связи и электронной подписи для compliance-процессов',
    'exp.3.b4': 'Техническая закупка в рамках регламентов госсектора',

    'exp.4.date': 'Ноя 2021 — Фев 2024',
    'exp.4.role': 'Ведущий системный администратор поддержки',
    'exp.4.company': 'Wildberries LLC — Санкт-Петербург',
    'exp.4.b1': 'Развёртывание и настройка систем видеонаблюдения, сканеров и принтеров в мультиплощадочной розничной сети',
    'exp.4.b2': 'Администрирование Windows/Linux систем и сетевых дисков в распределённых локациях',
    'exp.4.b3': 'Настройка и поддержка сетевого оборудования на точках выдачи',
    'exp.4.b4': 'Организация сетевой инфраструктуры и обслуживание периферии для розничных операций',

    'exp.5.date': 'Авг 2019 — Ноя 2020',
    'exp.5.role': 'Тимлид отдела разработки 3D-персонажей',
    'exp.5.company': 'Magic Hazard Studio — Санкт-Петербург',
    'exp.5.b1': 'Руководство командой из 2 человек в производстве персонажей для игровых проектов студии',
    'exp.5.b2': 'Разработка дизайнов персонажей, повысивших вовлечённость и просмотры платформы',

    'exp.6.date': 'Янв 2017 — Май 2018',
    'exp.6.role': 'Наладчик станков с ЧПУ и манипуляторов',
    'exp.6.company': 'ПАО «КАМАЗ» — Набережные Челны',
    'exp.6.b1': 'Контроль работы ЧПУ-станков в полном цикле металлообработки',
    'exp.6.b2': 'Диагностика и исправление ошибок G-кода по технической документации',

    'exp.7.date': 'Ноя 2014 — Июн 2015',
    'exp.7.role': 'Наладчик ЧПУ (стажировка)',
    'exp.7.company': 'АО «ПТФК ЗТЭО» — Набережные Челны',
    'exp.7.b1': 'Участие в сборке электрооборудования и электродвигателей',

    'certifications.eyebrow': 'ОБРАЗОВАНИЕ И СЕРТИФИКАТЫ',
    'certifications.title': 'Квалификация.',
    'edu.name': 'Набережночелнинский политехнический колледж',
    'edu.desc': 'Информационные технологии и машиностроение — Диплом специалиста, 2017. Квалификация: наладчик станков с ЧПУ и манипуляторов',

    'contact.title': 'ДАВАЙТЕ ОБСУДИМ ВАШ ПРОЕКТ',
    'contact.text': 'Открыт к предложениям по релокации в любую страну и к проектам в сфере информационной безопасности.',
    'contact.btn': 'Написать мне',

    'modal.eyebrow': 'НАПИСАТЬ МНЕ',
    'modal.title': 'Свяжитесь со мной',
    'modal.desc': 'Сообщение уйдёт сразу на два адреса:',
    'modal.yourEmail': 'Ваш email для ответа',
    'modal.message': 'Сообщение',
    'modal.send': 'Отправить',
    'modal.note': 'Откроется ваше почтовое приложение с уже готовым письмом — останется нажать «Отправить».',
  },
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.certifications': 'Certifications',
    'nav.contact': 'Contact',
    'header.download': 'Download Resume',

    'hero.eyebrow': "HELLO, I'M",
    'hero.desc': 'Information Security & IT Infrastructure specialist with 8+ years of experience: NGFW, VPN/crypto gateways, Linux hardening, enterprise-grade network security. Open to relocation to any country.',
    'hero.ctaExperience': 'View Experience',
    'hero.ctaContact': 'Get in Touch',
    'hero.metaLocation': 'Saint Petersburg, Russia',
    'hero.metaRelocation': 'Open to relocation to any country',

    'about.eyebrow': 'ABOUT ME',
    'about.title': 'Security and infrastructure<br>— my specialization.',
    'about.text': '8+ years of hands-on experience in network security, systems administration, and enterprise IT support. Current focus — deploying and hardening protective infrastructure for enterprise clients: next-generation firewalls, encrypted VPN/crypto gateways, and hardened Linux servers. Strong foundation in Windows/Linux administration, enterprise networking (VLAN/ACL, L2/L3), and full-cycle infrastructure commissioning.',
    'about.download': 'Download Full Resume',
    'about.factsEyebrow': 'AT A GLANCE',
    'about.factExperienceLabel': 'Experience',
    'about.factExperienceValue': '8+ years in InfoSec & IT infrastructure',
    'about.factLocationLabel': 'Location',
    'about.factLocationValue': 'Saint Petersburg, Russia',
    'about.factRelocationLabel': 'Relocation',
    'about.factRelocationValue': 'Open to relocation to any country',
    'about.factLangLabel': 'Languages',
    'about.factLangValue': 'Russian — Native, English — B2',
    'about.factLicenseLabel': 'Driving License',
    'about.factLicenseValue': 'Category B',

    'skills.eyebrow': 'SKILLS',
    'skills.title': 'Core Competencies.',
    'skills.col1Title': 'Network & Security',
    'skills.col1Item1': 'Next-generation firewall (NGFW) deployment & policy management',
    'skills.col1Item2': 'VPN / encrypted crypto gateway administration',
    'skills.col1Item3': 'Network hardening, VLAN/ACL configuration, L2/L3 switching',
    'skills.col1Item4': 'PKI & cryptographic infrastructure',
    'skills.col1Item5': 'Incident response & root-cause troubleshooting',
    'skills.col2Title': 'Systems Administration',
    'skills.col2Item1': 'Windows & Linux server/client administration',
    'skills.col2Item2': 'Enterprise Linux hardening & security compliance',
    'skills.col2Item3': 'Storage systems (DSS) & virtualization/hypervisor commissioning',
    'skills.col2Item4': 'Active Directory environment support',
    'skills.col3Title': 'Networking & Infrastructure',
    'skills.col3Item1': 'Enterprise network equipment administration (MikroTik, L2/L3 switches)',
    'skills.col3Item2': 'Structured cabling, rack installation, physical infrastructure',
    'skills.col3Item3': 'Monitoring & automation (Zabbix, Tactical RMM)',

    'experience.eyebrow': 'WORK EXPERIENCE',
    'experience.title': 'Career Path.',

    'exp.1.date': 'Jun 2025 — Present',
    'exp.1.role': 'Information Security Specialist',
    'exp.1.company': 'Gazinformservice Certification Center LLC — Saint Petersburg',
    'exp.1.b1': 'Deploy and maintain enterprise network security infrastructure, including next-generation firewalls and encrypted VPN/crypto gateways for corporate clients',
    'exp.1.b2': 'Administer and harden enterprise Linux server environments to meet security compliance requirements',
    'exp.1.b3': 'Manage storage systems, firewalls, and network equipment across client infrastructure',
    'exp.1.b4': 'Lead full-cycle commissioning (PnP) of security infrastructure for enterprise deployments',

    'exp.2.date': 'Aug 2024 — Jun 2025',
    'exp.2.role': 'System Administrator',
    'exp.2.company': 'ITart LLC — Saint Petersburg',
    'exp.2.b1': 'Delivered remote and on-site technical support across Windows and Linux environments',
    'exp.2.b2': 'Implemented monitoring and automation tooling (Zabbix, Tactical RMM), reducing incident response time',
    'exp.2.b3': 'Administered corporate networks, servers, and office IT equipment',
    'exp.2.b4': 'Performed structured cabling and physical infrastructure installation',

    'exp.3.date': 'Apr 2024 — Aug 2024',
    'exp.3.role': 'Maintenance Technician',
    'exp.3.company': 'GBU DYUTS Moskovsky District (Sports & Fitness Center) — Saint Petersburg',
    'exp.3.b1': 'Maintained uptime of access control, IP/analog CCTV, and AV systems across the facility',
    'exp.3.b2': 'Supported 46 workstations (desktops, laptops, all-in-ones, mini-PCs)',
    'exp.3.b3': 'Administered encrypted communications and digital signature software for compliance workflows',
    'exp.3.b4': 'Managed technical procurement under public-sector regulations',

    'exp.4.date': 'Nov 2021 — Feb 2024',
    'exp.4.role': 'Lead System Administrator (Support)',
    'exp.4.company': 'Wildberries LLC — Saint Petersburg',
    'exp.4.b1': 'Deployed and configured surveillance cameras, scanners, and printers across a multi-site retail network',
    'exp.4.b2': 'Administered Windows/Linux systems and network drives across distributed locations',
    'exp.4.b3': 'Configured and maintained network equipment across pickup-point locations',
    'exp.4.b4': 'Led network installation and peripheral maintenance for retail operations',

    'exp.5.date': 'Aug 2019 — Nov 2020',
    'exp.5.role': 'Team Lead, 3D Character Development',
    'exp.5.company': 'Magic Hazard Studio — Saint Petersburg',
    'exp.5.b1': 'Led a team of 2 in character asset production for studio game titles',
    'exp.5.b2': 'Delivered character designs that increased platform engagement and viewership',

    'exp.6.date': 'Jan 2017 — May 2018',
    'exp.6.role': 'CNC Machine and Manipulator Setter',
    'exp.6.company': 'KAMAZ PJSC — Naberezhnye Chelny',
    'exp.6.b1': 'Monitored CNC machines during full metal-processing cycles',
    'exp.6.b2': 'Diagnosed and corrected G-code issues based on technical blueprints',

    'exp.7.date': 'Nov 2014 — Jun 2015',
    'exp.7.role': 'CNC Setter (Internship)',
    'exp.7.company': 'JSC "PTFK ZTEO" — Naberezhnye Chelny',
    'exp.7.b1': 'Assisted with assembly of electrical equipment and electric motors',

    'certifications.eyebrow': 'EDUCATION & CERTIFICATIONS',
    'certifications.title': 'Qualifications.',
    'edu.name': 'Naberezhnye Chelny Polytechnic College',
    'edu.desc': 'Information Technology & Mechanical Engineering — Associate Degree, 2017. Qualification: CNC Machine and Manipulator Setter',

    'contact.title': "LET'S DISCUSS YOUR PROJECT",
    'contact.text': 'Open to relocation offers to any country and to information security projects.',
    'contact.btn': 'Get in Touch',

    'modal.eyebrow': 'GET IN TOUCH',
    'modal.title': "Let's connect",
    'modal.desc': 'Your message will go to both addresses at once:',
    'modal.yourEmail': 'Your email (for a reply)',
    'modal.message': 'Message',
    'modal.send': 'Send',
    'modal.note': "This opens your email app with the message ready — just hit “Send” there.",
  }
};

const resumeFiles = {
  ru: 'assets/Alexandr_Shaihiev_Resume_RU.pdf',
  en: 'assets/Alexandr_Shaihiev_Resume_EN.pdf'
};

const i18nEls = document.querySelectorAll('[data-i18n]');
const resumeLinks = document.querySelectorAll('[data-resume-link]');
const langButtons = document.querySelectorAll('.lang-btn');

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang;

  i18nEls.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  resumeLinks.forEach(a => a.setAttribute('href', resumeFiles[lang]));

  langButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  localStorage.setItem('resumeLang', lang);
}

langButtons.forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

const savedLang = localStorage.getItem('resumeLang');
setLanguage(savedLang === 'en' ? 'en' : 'ru');

// ---------- Contact modal ----------
const contactModal = document.getElementById('contactModal');
const openContactModal = document.getElementById('openContactModal');
const modalClose = document.getElementById('modalClose');
const contactForm = document.getElementById('contactForm');
const senderEmail = document.getElementById('senderEmail');
const messageText = document.getElementById('messageText');

const CONTACT_EMAILS = ['amosemptines@gmail.com', 'amosemptines@yandex.ru'];

function openModal() {
  contactModal.classList.add('open');
  contactModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  setTimeout(() => senderEmail.focus(), 50);
}

function closeModal() {
  contactModal.classList.remove('open');
  contactModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

if (openContactModal) {
  openContactModal.addEventListener('click', openModal);
}
modalClose.addEventListener('click', closeModal);
contactModal.addEventListener('click', (e) => {
  if (e.target === contactModal) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && contactModal.classList.contains('open')) closeModal();
});

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const from = senderEmail.value.trim();
  const message = messageText.value.trim();
  if (!from || !message) return;

  const subject = encodeURIComponent(`Сообщение с сайта-резюме от ${from}`);
  const body = encodeURIComponent(`${message}\n\n---\nОт: ${from}`);
  const mailtoLink = `mailto:${CONTACT_EMAILS.join(',')}?subject=${subject}&body=${body}`;

  window.location.href = mailtoLink;
  closeModal();
  contactForm.reset();
});
