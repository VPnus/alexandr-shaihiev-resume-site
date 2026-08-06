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
    'nav.services': 'Услуги',
    'nav.solutions': 'Решения',
    'nav.experience': 'Опыт',
    'nav.certifications': 'Сертификаты',
    'nav.contact': 'Контакты',
    'header.contact': 'Связаться',

    'hero.eyebrow': 'ЗДРАВСТВУЙТЕ, Я',
    'hero.role': 'REMOTE IT INFRASTRUCTURE &amp; SECURITY CONSULTANT',
    'hero.desc': 'Удалённый системный администратор и консультант по информационной безопасности. Проектирую, внедряю и сопровождаю IT-инфраструктуру для бизнеса любого размера — от NGFW и VPN до аудита процессов и подбора оборудования.',
    'hero.ctaServices': 'Смотреть услуги',
    'hero.ctaContact': 'Связаться',
    'hero.metaLocation': 'Удалённо · Санкт-Петербург, UTC+3',
    'hero.metaRelocation': 'Любой регион и часовой пояс',

    'about.eyebrow': 'ОБО МНЕ',
    'about.title': 'Инфраструктура и безопасность<br>для бизнеса любого масштаба.',
    'about.text': '8+ лет практического опыта в сетевой безопасности, системном администрировании и IT-консалтинге. Работаю удалённо с бизнесом любой структуры — от небольшого офиса до распределённой сети филиалов: проектирование и внедрение сетевой инфраструктуры, hardening серверов, подбор и закупка оборудования, аудит и документирование процессов. Гибко подключаюсь к проекту — разово, по проекту или на постоянной основе.',
    'about.download': 'Обсудить проект',
    'about.factsEyebrow': 'КОРОТКО',
    'about.factExperienceLabel': 'Опыт',
    'about.factExperienceValue': '8+ лет в ИБ и IT-инфраструктуре',
    'about.factEngagementLabel': 'Формат работы',
    'about.factEngagementValue': 'Удалённо · проектно или на постоянной основе',
    'about.factRegionLabel': 'Регион',
    'about.factRegionValue': 'Без ограничений — любая страна, любой часовой пояс',
    'about.factLangLabel': 'Языки',
    'about.factLangValue': 'Русский — родной, English — B2',
    'about.factLicenseLabel': 'Права',
    'about.factLicenseValue': 'Категория B — для выездных задач при необходимости',

    'services.eyebrow': 'УСЛУГИ',
    'services.title': 'Как я могу быть полезен.',
    'services.card1Title': 'Удалённое системное администрирование',
    'services.card1Desc': 'Windows/Linux серверы и рабочие станции, мониторинг и автоматизация, поддержка инфраструктуры без выезда на площадку.',
    'services.card1B1': 'Администрирование серверов и клиентов Windows &amp; Linux',
    'services.card1B2': 'Мониторинг и автоматизация (Zabbix, Tactical RMM)',
    'services.card1B3': 'Поддержка среды Active Directory',
    'services.card1B4': 'Резервное копирование и отказоустойчивость',
    'services.card2Title': 'Консалтинг по информационной безопасности',
    'services.card2Desc': 'Аудит текущей инфраструктуры, hardening и внедрение защитных механизмов под требования бизнеса.',
    'services.card2B1': 'NGFW — развёртывание и управление политиками',
    'services.card2B2': 'VPN / крипто-шлюзы',
    'services.card2B3': 'Hardening Linux/Windows, VLAN/ACL, L2/L3',
    'services.card2B4': 'PKI и криптографическая инфраструктура',
    'services.card3Title': 'Проектирование сетевой инфраструктуры',
    'services.card3Desc': 'От офиса на 10 человек до распределённой сети филиалов: планирование, монтаж, ввод в эксплуатацию.',
    'services.card3B1': 'Проектирование сетей: LAN/WAN, VPN между офисами, OSPF',
    'services.card3B2': 'Структурированные кабельные системы, монтаж стоек',
    'services.card3B3': 'Системы хранения (DSS), виртуализация и гипервизоры',
    'services.card3B4': 'Полный цикл ввода в эксплуатацию (PnP)',
    'services.card4Title': 'Подбор оборудования и сопровождение процессов',
    'services.card4Desc': 'Закупка под задачу и бюджет, документирование процессов, поддержка соответствия регламентам.',
    'services.card4B1': 'Подбор и закупка сетевого/серверного оборудования',
    'services.card4B2': 'Документирование и аудит процессов',
    'services.card4B3': 'Поддержка compliance и регламентов',
    'services.card4B4': 'Взаимодействие с поставщиками и подрядчиками',

    'console.eyebrow': 'НА ПРАКТИКЕ',
    'console.title': 'Как это выглядит в консоли.',
    'console.intro': 'Пример типовых команд при настройке firewall, VPN и мониторинга — так проходит рабочий день удалённо.',

    'solutions.eyebrow': 'РЕШЕНИЯ',
    'solutions.title': 'Как выглядят мои решения.',
    'solutions.intro': 'Ниже — типовые архитектуры, которые я проектирую и сопровождаю удалённо: от одного офиса до сети из нескольких площадок.',
    'solutions.small.heading': 'Малый бизнес — один офис',
    'solutions.small.caption': 'Типовая схема для небольшой компании: один периметр, разделение пользователей и серверов по VLAN.',
    'solutions.small.internet': 'Интернет',
    'solutions.small.firewall': 'Firewall (NGFW)',
    'solutions.small.firewallSub': 'NAT · Default Route 0.0.0.0/0',
    'solutions.small.router': 'Маршрутизатор',
    'solutions.small.routerSub': 'L3 · Inter-VLAN Routing',
    'solutions.small.usersTitle': 'VLAN 101 — Users',
    'solutions.small.usersMeta': '10.0.101.0/24 · Gateway 10.0.101.1',
    'solutions.small.usersDesc': 'Рабочие станции сотрудников',
    'solutions.small.serversTitle': 'VLAN 502 — Servers',
    'solutions.small.serversMeta': '10.0.2.0/24 · Gateway 10.0.2.1',
    'solutions.small.serversDesc': 'Файловый / прикладной сервер',
    'solutions.medium.heading': 'Средний бизнес — несколько площадок',
    'solutions.medium.caption': 'Головной офис и филиалы объединены через site-to-site VPN с маршрутизацией OSPF.',
    'solutions.medium.root': 'Интернет + Site-to-Site VPN',
    'solutions.medium.rootSub': 'OSPF Area 0',
    'solutions.medium.hqTitle': 'HQ (головной офис)',
    'solutions.medium.hqMeta': 'Пользователи + 3 серверных VLAN',
    'solutions.medium.hqDesc': 'Основная инфраструктура компании',
    'solutions.medium.branch1Title': 'Филиал 1',
    'solutions.medium.branch1Meta': 'Пользователи + локальный сервер',
    'solutions.medium.branch1Desc': 'Часть ресурсов обрабатывается на месте',
    'solutions.medium.branch2Title': 'Филиал 2',
    'solutions.medium.branch2Meta': 'Только пользователи',
    'solutions.medium.branch2Desc': 'Использует ресурсы HQ через VPN',
    'solutions.l2.heading': 'Малый бизнес — физическое подключение (L2)',
    'solutions.l2.caption': 'Как оборудование физически соединено в стойке: от ввода интернета до розеток в офисе.',
    'solutions.l2.isp': 'Ввод интернета (ISP)',
    'solutions.l2.ispSub': 'Медиаконвертер / ONT · SFP',
    'solutions.l2.router': 'Маршрутизатор',
    'solutions.l2.routerSub': 'WAN: SFP/RJ45 · LAN: 1×RJ45 uplink',
    'solutions.l2.switchTitle': 'Коммутатор L2, 8 портов',
    'solutions.l2.switchSub': '1: Router · 2: Сервер · 3: AP · 4–8: Патч-панель',
    'solutions.l2.patchTitle': 'Патч-панель',
    'solutions.l2.patchMeta': 'Порты 4–8',
    'solutions.l2.patchDesc': 'Розетки: каб. 101, 102, ресепшн',
    'solutions.l2.serverTitle': 'Сервер',
    'solutions.l2.serverMeta': 'Порт 2 — прямое подключение',
    'solutions.l2.serverDesc': 'Файловый / прикладной сервер',
    'solutions.l2.apTitle': 'Точка доступа Wi-Fi',
    'solutions.l2.apMeta': 'Порт 3',
    'solutions.l2.apDesc': 'Гостевой и рабочий SSID',
    'solutions.l2.legendUtp': 'UTP Cat6',
    'solutions.l2.legendFiber': 'Оптика / SFP',

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

    'contact.title': 'ОБСУДИМ ВАШ ПРОЕКТ УДАЛЁННО',
    'contact.text': 'Работаю с бизнесом любого размера и региона — разовые задачи, проектная работа или постоянное сопровождение.',
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
    'nav.services': 'Services',
    'nav.solutions': 'Solutions',
    'nav.experience': 'Experience',
    'nav.certifications': 'Certifications',
    'nav.contact': 'Contact',
    'header.contact': 'Get in Touch',

    'hero.eyebrow': "HELLO, I'M",
    'hero.role': 'REMOTE IT INFRASTRUCTURE &amp; SECURITY CONSULTANT',
    'hero.desc': 'Remote systems administrator and information security consultant. I design, deploy, and support IT infrastructure for businesses of any size — from NGFW and VPN to process audits and equipment procurement.',
    'hero.ctaServices': 'View Services',
    'hero.ctaContact': 'Get in Touch',
    'hero.metaLocation': 'Remote · Saint Petersburg, UTC+3',
    'hero.metaRelocation': 'Any region, any time zone',

    'about.eyebrow': 'ABOUT ME',
    'about.title': 'Infrastructure and security<br>for businesses of any scale.',
    'about.text': '8+ years of hands-on experience in network security, systems administration, and IT consulting. I work remotely with businesses of any structure — from a small office to a distributed branch network: network infrastructure design and deployment, server hardening, equipment sourcing and procurement, process audit and documentation. Flexible engagement — one-off tasks, project-based, or ongoing support.',
    'about.download': 'Discuss a Project',
    'about.factsEyebrow': 'AT A GLANCE',
    'about.factExperienceLabel': 'Experience',
    'about.factExperienceValue': '8+ years in InfoSec & IT infrastructure',
    'about.factEngagementLabel': 'Engagement',
    'about.factEngagementValue': 'Remote · project-based or ongoing',
    'about.factRegionLabel': 'Region',
    'about.factRegionValue': 'No restrictions — any country, any time zone',
    'about.factLangLabel': 'Languages',
    'about.factLangValue': 'Russian — Native, English — B2',
    'about.factLicenseLabel': 'Driving License',
    'about.factLicenseValue': 'Category B — for on-site visits when needed',

    'services.eyebrow': 'SERVICES',
    'services.title': 'How I can help.',
    'services.card1Title': 'Remote Systems Administration',
    'services.card1Desc': 'Windows/Linux servers and workstations, monitoring and automation, infrastructure support without an on-site visit.',
    'services.card1B1': 'Windows &amp; Linux server/client administration',
    'services.card1B2': 'Monitoring & automation (Zabbix, Tactical RMM)',
    'services.card1B3': 'Active Directory support',
    'services.card1B4': 'Backup & fault tolerance',
    'services.card2Title': 'Information Security Consulting',
    'services.card2Desc': 'Audit of existing infrastructure, hardening, and deployment of protective controls tailored to business needs.',
    'services.card2B1': 'NGFW deployment & policy management',
    'services.card2B2': 'VPN / encrypted crypto gateways',
    'services.card2B3': 'Linux/Windows hardening, VLAN/ACL, L2/L3',
    'services.card2B4': 'PKI & cryptographic infrastructure',
    'services.card3Title': 'Network Infrastructure Design',
    'services.card3Desc': 'From a 10-person office to a distributed branch network: planning, installation, commissioning.',
    'services.card3B1': 'Network design: LAN/WAN, site-to-site VPN, OSPF',
    'services.card3B2': 'Structured cabling, rack installation',
    'services.card3B3': 'Storage systems (DSS), virtualization & hypervisors',
    'services.card3B4': 'Full-cycle commissioning (PnP)',
    'services.card4Title': 'Equipment Sourcing & Process Support',
    'services.card4Desc': 'Procurement matched to task and budget, process documentation, compliance support.',
    'services.card4B1': 'Network/server equipment sourcing & procurement',
    'services.card4B2': 'Process documentation & audit',
    'services.card4B3': 'Compliance support',
    'services.card4B4': 'Vendor & contractor coordination',

    'console.eyebrow': 'IN PRACTICE',
    'console.title': 'What it looks like in the console.',
    'console.intro': "Typical commands for configuring firewalls, VPNs, and monitoring — a slice of a remote workday.",

    'solutions.eyebrow': 'SOLUTIONS',
    'solutions.title': 'What my solutions look like.',
    'solutions.intro': 'Below are typical architectures I design and support remotely — from a single office to a multi-site branch network.',
    'solutions.small.heading': 'Small Business — Single Office',
    'solutions.small.caption': 'A typical setup for a small company: one perimeter, users and servers separated by VLAN.',
    'solutions.small.internet': 'Internet',
    'solutions.small.firewall': 'Firewall (NGFW)',
    'solutions.small.firewallSub': 'NAT · Default Route 0.0.0.0/0',
    'solutions.small.router': 'Router',
    'solutions.small.routerSub': 'L3 · Inter-VLAN Routing',
    'solutions.small.usersTitle': 'VLAN 101 — Users',
    'solutions.small.usersMeta': '10.0.101.0/24 · Gateway 10.0.101.1',
    'solutions.small.usersDesc': 'Employee workstations',
    'solutions.small.serversTitle': 'VLAN 502 — Servers',
    'solutions.small.serversMeta': '10.0.2.0/24 · Gateway 10.0.2.1',
    'solutions.small.serversDesc': 'File / application server',
    'solutions.medium.heading': 'Medium Business — Multi-Site',
    'solutions.medium.caption': 'HQ and branch offices connected via site-to-site VPN with OSPF routing.',
    'solutions.medium.root': 'Internet + Site-to-Site VPN',
    'solutions.medium.rootSub': 'OSPF Area 0',
    'solutions.medium.hqTitle': 'HQ (Headquarters)',
    'solutions.medium.hqMeta': 'Users + 3 server VLANs',
    'solutions.medium.hqDesc': 'Core company infrastructure',
    'solutions.medium.branch1Title': 'Branch 1',
    'solutions.medium.branch1Meta': 'Users + local server',
    'solutions.medium.branch1Desc': 'Some resources handled on-site',
    'solutions.medium.branch2Title': 'Branch 2',
    'solutions.medium.branch2Meta': 'Users only',
    'solutions.medium.branch2Desc': 'Relies on HQ resources over VPN',
    'solutions.l2.heading': 'Small Business — Physical Connectivity (L2)',
    'solutions.l2.caption': 'How the equipment is physically wired in the rack: from the ISP entry point to the office wall outlets.',
    'solutions.l2.isp': 'ISP Entry',
    'solutions.l2.ispSub': 'Media converter / ONT · SFP',
    'solutions.l2.router': 'Router',
    'solutions.l2.routerSub': 'WAN: SFP/RJ45 · LAN: 1×RJ45 uplink',
    'solutions.l2.switchTitle': 'L2 Switch, 8 ports',
    'solutions.l2.switchSub': '1: Router · 2: Server · 3: AP · 4–8: Patch Panel',
    'solutions.l2.patchTitle': 'Patch Panel',
    'solutions.l2.patchMeta': 'Ports 4–8',
    'solutions.l2.patchDesc': 'Wall outlets: Room 101, 102, Reception',
    'solutions.l2.serverTitle': 'Server',
    'solutions.l2.serverMeta': 'Port 2 — direct connection',
    'solutions.l2.serverDesc': 'File / application server',
    'solutions.l2.apTitle': 'Wi-Fi Access Point',
    'solutions.l2.apMeta': 'Port 3',
    'solutions.l2.apDesc': 'Guest and staff SSID',
    'solutions.l2.legendUtp': 'UTP Cat6',
    'solutions.l2.legendFiber': 'Fiber / SFP',

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

    'contact.title': "LET'S DISCUSS YOUR PROJECT REMOTELY",
    'contact.text': 'Working with businesses of any size and region — one-off tasks, project work, or ongoing support.',
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

const i18nEls = document.querySelectorAll('[data-i18n]');
const langButtons = document.querySelectorAll('.lang-btn');

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang;

  i18nEls.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

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
const openContactButtons = document.querySelectorAll('.js-open-contact');
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

openContactButtons.forEach(btn => btn.addEventListener('click', openModal));
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

// ---------- Terminal demo ----------
const terminalBody = document.getElementById('terminalBody');

const terminalCommands = [
  {
    cmd: 'firewall forward add rule "PC_ADMIN_TO_SERVER_DLP" src 10.0.35.10 dst 192.168.2.5 tcp dport 22 pass',
    output: ['[ok] rule added: PC_ADMIN_TO_SERVER_DLP (id: 482)']
  },
  {
    cmd: 'vpn gateway show status',
    output: ['[ok] site-to-site tunnel HQ<->Branch1: ESTABLISHED (IKEv2, AES256-GCM)']
  },
  {
    cmd: 'systemctl status sshd',
    output: ['● sshd.service - active (running)']
  },
  {
    cmd: 'zabbix_agent check disk /var',
    output: ['[ok] 62% used, 38% free']
  },
  {
    cmd: 'firewall forward add rule "OFFICE_TO_INTERNET_DNS" src 10.0.101.0/24 dst any udp dport 53 pass',
    output: ['[ok] rule added: OFFICE_TO_INTERNET_DNS (id: 483)']
  }
];

function startTerminal() {
  if (!terminalBody) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion) {
    terminalCommands.forEach(entry => {
      const line = document.createElement('div');
      line.className = 'term-line';
      line.innerHTML = `<span class="term-prompt">~$ </span><span class="term-cmd">${entry.cmd}</span>`;
      terminalBody.appendChild(line);
      entry.output.forEach(out => {
        const outLine = document.createElement('div');
        outLine.className = 'term-output ok';
        outLine.textContent = out;
        terminalBody.appendChild(outLine);
      });
    });
    return;
  }

  const cursor = document.createElement('span');
  cursor.className = 'term-cursor';

  let cmdIndex = 0;

  function trimHistory() {
    while (terminalBody.children.length > 16) {
      terminalBody.removeChild(terminalBody.firstChild);
    }
  }

  function typeCommand() {
    const entry = terminalCommands[cmdIndex % terminalCommands.length];
    const line = document.createElement('div');
    line.className = 'term-line';
    const prompt = document.createElement('span');
    prompt.className = 'term-prompt';
    prompt.textContent = '~$ ';
    const cmdSpan = document.createElement('span');
    cmdSpan.className = 'term-cmd';
    line.appendChild(prompt);
    line.appendChild(cmdSpan);
    line.appendChild(cursor);
    terminalBody.appendChild(line);
    terminalBody.scrollTop = terminalBody.scrollHeight;

    let i = 0;
    const text = entry.cmd;
    const typer = setInterval(() => {
      cmdSpan.textContent += text[i];
      i++;
      terminalBody.scrollTop = terminalBody.scrollHeight;
      if (i >= text.length) {
        clearInterval(typer);
        setTimeout(() => {
          entry.output.forEach(out => {
            const outLine = document.createElement('div');
            outLine.className = 'term-output ok';
            outLine.textContent = out;
            terminalBody.appendChild(outLine);
          });
          cmdIndex++;
          trimHistory();
          terminalBody.scrollTop = terminalBody.scrollHeight;
          setTimeout(typeCommand, 1600);
        }, 350);
      }
    }, 26);
  }

  typeCommand();
}

const terminalObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startTerminal();
      obs.disconnect();
    }
  });
}, { threshold: 0.3 });

if (terminalBody) terminalObserver.observe(terminalBody);
