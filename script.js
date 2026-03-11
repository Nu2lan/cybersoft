/* ===================================================================
   Cybersoft – Landing Page Script
   Particles · Scroll animations · Header glass · Network canvas · Stats
   Language switcher with EN / AZ / TR translations
   =================================================================== */

// ===== TRANSLATIONS =====
const translations = {
    en: {
        nav_home: "Home",
        nav_projects: "Projects",
        nav_services: "Our Services",
        nav_contact: "Contact Us",
        hero_badge: "Next-Generation Technology Partner",
        hero_title: "Innovative IT Solutions",
        hero_subtitle: "We architect the future of digital transformation. From enterprise software to cloud-native platforms, our solutions are designed to accelerate your business in the age of AI and beyond.",
        hero_btn_services: "Discover Services",
        hero_btn_contact: "Contact Us",
        stat_projects: "Projects Delivered",
        stat_engineers: "Expert Engineers",
        stat_satisfaction: "Client Satisfaction",
        scroll: "Scroll",
        services_tag: "What We Do",
        services_title_1: "Our",
        services_title_2: "Services",
        services_subtitle: "End-to-end technology solutions crafted to solve complex challenges and drive measurable growth.",
        service_1_title: "Software Development",
        service_1_desc: "Scalable, robust custom software built with modern architectures — from microservices to monoliths, designed for your unique workflow.",
        service_2_title: "Mobile App Development",
        service_2_desc: "Native and cross-platform mobile applications with buttery-smooth UX, real-time capabilities, and pixel-perfect interfaces.",
        service_3_title: "Cloud & DevOps",
        service_3_desc: "Seamless cloud migration, CI/CD pipelines, container orchestration, and infrastructure-as-code for maximum uptime and agility.",
        service_4_title: "Cybersecurity Solutions",
        service_4_desc: "Comprehensive threat detection, penetration testing, zero-trust architecture, and compliance frameworks to protect your digital assets.",
        service_5_title: "IT Consulting",
        service_5_desc: "Strategic technology road-mapping, digital transformation advisory, and system audits from seasoned architects and consultants.",
        projects_tag: "Our Work",
        projects_title_1: "Featured",
        projects_title_2: "Projects",
        projects_subtitle: "A glimpse into the transformative solutions we've delivered for industry leaders worldwide.",
        project_1_title: "NeoBank Digital Platform",
        project_1_desc: "Full-stack banking platform with real-time transactions, AI fraud detection, and multi-currency support.",
        project_2_title: "MedFlow AI Diagnostics",
        project_2_desc: "AI-powered diagnostic platform processing 10M+ medical images with 98.7% accuracy.",
        project_3_title: "UrbanPulse IoT Network",
        project_3_desc: "City-wide IoT mesh network managing 50K+ sensors for traffic, energy, and environmental monitoring.",
        project_4_title: "Luxe Marketplace",
        project_4_desc: "High-performance e-commerce engine handling 100K concurrent users with sub-200ms response times.",
        project_5_title: "Eventa",
        project_5_desc: "Professional Event Transportation Management Platform.",
        project_6_title: "Servio",
        project_6_desc: "Modern, real-time ordering management platform that connects every part of your restaurant.",
        project_link: "Visit Site →",
        contact_tag: "Get In Touch",
        contact_title_1: "Let's Build",
        contact_title_2: "Something Great",
        contact_desc: "Have a project in mind? We'd love to hear about it. Reach out and let's explore how we can transform your vision into reality.",
        contact_phone: "Phone",
        contact_email: "Email",
        contact_location: "Location",
        contact_location_val: "Baku, Azerbaijan",
        form_name: "Full Name",
        form_email: "Email Address",
        form_subject: "Subject",
        form_message: "Your Message",
        form_submit: "Send Message",
        footer_desc: "Pioneering the future of digital innovation with cutting-edge IT solutions.",
        footer_quick: "Quick Links",
        footer_contact: "Contact",
        footer_mobile: "Mobile Apps",
        footer_cyber: "Cybersecurity",
        footer_connect: "Connect",
        footer_rights: "All rights reserved. Built with precision."
    },
    az: {
        nav_home: "Ana Səhifə",
        nav_projects: "Layihələr",
        nav_services: "Xidmətlərimiz",
        nav_contact: "Əlaqə",
        hero_badge: "Yeni Nəsil Texnologiya Tərəfdaşı",
        hero_title: "İnnovativ IT Həlləri",
        hero_subtitle: "Biz rəqəmsal transformasiyanın gələcəyini qururuq. Müəssisə proqram təminatından bulud-əsaslı platformalara qədər, həllərimiz süni intellekt dövründə biznesinizi sürətləndirmək üçün hazırlanıb.",
        hero_btn_services: "Xidmətlərimiz",
        hero_btn_contact: "Əlaqə",
        stat_projects: "Tamamlanmış Layihə",
        stat_engineers: "Peşəkar Mühəndis",
        stat_satisfaction: "Müştəri Məmnuniyyəti",
        scroll: "Aşağı",
        services_tag: "Nə Edirik",
        services_title_1: "Bizim",
        services_title_2: "Xidmətlər",
        services_subtitle: "Mürəkkəb problemləri həll etmək və ölçülə bilən böyüməni təmin etmək üçün hazırlanmış kompleks texnoloji həllər.",
        service_1_title: "Proqram Təminatı",
        service_1_desc: "Müasir arxitekturalarla qurulmuş miqyaslana bilən, etibarlı xüsusi proqram — mikroservislərdən monolitlərə qədər, sizin unikal iş axınınız üçün hazırlanıb.",
        service_2_title: "Mobil Tətbiq",
        service_2_desc: "Buttery-smooth UX, real-vaxt imkanları və piksel-mükəmməl interfeysləri olan native və cross-platform mobil tətbiqlər.",
        service_3_title: "Bulud & DevOps",
        service_3_desc: "Bulud miqrasiyası, CI/CD pipeline, konteyner orkestrasiyası və maksimum uptime və çeviklik üçün infrastruktur-kod kimi.",
        service_4_title: "Kibertəhlükəsizlik",
        service_4_desc: "Hərtərəfli təhlükə aşkarlanması, nüfuzetmə testi, sıfır güvən arxitekturası və rəqəmsal aktivlərinizi qorumaq üçün uyğunluq çərçivələri.",
        service_5_title: "IT Konsaltinq",
        service_5_desc: "Strateji texnologiya yol xəritəsi, rəqəmsal transformasiya məsləhəti və təcrübəli arxitektlər və məsləhətçilər tərəfindən sistem auditləri.",
        projects_tag: "İşlərimiz",
        projects_title_1: "Seçilmiş",
        projects_title_2: "Layihələr",
        projects_subtitle: "Dünya üzrə sənaye liderlərinnə təqdim etdiyimiz transformativ həllərə bir nəzər.",
        project_1_title: "NeoBank Rəqəmsal Platforma",
        project_1_desc: "Real-vaxt əməliyyatlar, AI dələduzluq aşkarlanması və çox valyutalı dəstək ilə tam yığın bank platforması.",
        project_2_title: "MedFlow Süni İntellekt Diaqnostikası",
        project_2_desc: "98.7% dəqiqliklə 10M+ tibbi şəkili emal edən süni intellekt əsaslı diaqnostik platforma.",
        project_3_title: "UrbanPulse IoT Şəbəkəsi",
        project_3_desc: "Trafik, enerji və ətraf mühit monitorinqi üçün 50K+ sensoru idarə edən şəhər miqyasında IoT mesh şəbəkəsi.",
        project_4_title: "Luxe Bazar",
        project_4_desc: "200ms-dən az cavab müddəti ilə 100K eyni vaxtda istifadəçini idarə edən yüksək performanslı e-ticarət mühərriki.",
        project_5_title: "Eventa",
        project_5_desc: "Tədbir Nəqliyyatının Peşəkar İdarəetmə Platforması.",
        project_6_title: "Servio",
        project_6_desc: "Restoranınızın hər hissəsini birləşdirən müasir, real-vaxt sifariş idarəetmə platforması.",
        project_link: "Sayta Keç →",
        contact_tag: "Əlaqə",
        contact_title_1: "Gəlin Birlikdə",
        contact_title_2: "Böyük İşlər Görək",
        contact_desc: "Layihəniz varmı? Eşitməkdən məmnun olarıq. Əlaqə saxlayın və vizyonunuzu necə reallığa çevirə biləcəyimizi araşdıraq.",
        contact_phone: "Telefon",
        contact_email: "E-poçt",
        contact_location: "Ünvan",
        contact_location_val: "Bakı, Azərbaycan",
        form_name: "Tam Ad",
        form_email: "E-poçt Ünvanı",
        form_subject: "Mövzu",
        form_message: "Mesajınız",
        form_submit: "Mesaj Göndər",
        footer_desc: "Ən müasir IT həlləri ilə rəqəmsal innovasiyanın gələcəyinə öncülük edirik.",
        footer_quick: "Sürətli Keçidlər",
        footer_contact: "Əlaqə",
        footer_mobile: "Mobil Tətbiqlər",
        footer_cyber: "Kibertəhlükəsizlik",
        footer_connect: "Bağlantı",
        footer_rights: "Bütün hüquqlar qorunur."
    },
    tr: {
        nav_home: "Ana Sayfa",
        nav_projects: "Projeler",
        nav_services: "Hizmetlerimiz",
        nav_contact: "İletişim",
        hero_badge: "Yeni Nesil Teknoloji Ortağınız",
        hero_title: "Yenilikçi IT Çözümleri",
        hero_subtitle: "Dijital dönüşümün geleceğini tasarlıyoruz. Kurumsal yazılımlardan bulut tabanlı platformlara kadar, çözümlerimiz yapay zeka çağında işinizi hızlandırmak için tasarlandı.",
        hero_btn_services: "Hizmetlerimiz",
        hero_btn_contact: "İletişim",
        stat_projects: "Tamamlanan Proje",
        stat_engineers: "Uzman Mühendis",
        stat_satisfaction: "Müşteri Memnuniyeti",
        scroll: "Kaydır",
        services_tag: "Ne Yapıyoruz",
        services_title_1: "Bizim",
        services_title_2: "Hizmetler",
        services_subtitle: "Karmaşık sorunları çözmek ve ölçülebilir büyümeyi sağlamak için tasarlanmış uçtan uca teknoloji çözümleri.",
        service_1_title: "Yazılım Geliştirme",
        service_1_desc: "Modern mimarilerle oluşturulmuş ölçeklenebilir, sağlam özel yazılım — mikro hizmetlerden monolitlere, benzersiz iş akışınız için tasarlandı.",
        service_2_title: "Mobil Uygulama",
        service_2_desc: "Akıcı UX, gerçek zamanlı yetenekler ve piksel mükemmelliğinde arayüzlere sahip native ve cross-platform mobil uygulamalar.",
        service_3_title: "Bulut & DevOps",
        service_3_desc: "Sorunsuz bulut geçişi, CI/CD ardışık düzenleri, konteyner orkestrasyonu ve maksimum çalışma süresi ve çeviklik için kod olarak altyapı.",
        service_4_title: "Siber Güvenlik",
        service_4_desc: "Kapsamlı tehdit tespiti, sızma testi, sıfır güven mimarisi ve dijital varlıklarınızı korumak için uyumluluk çerçeveleri.",
        service_5_title: "IT Danışmanlık",
        service_5_desc: "Stratejik teknoloji yol haritası, dijital dönüşüm danışmanlığı ve deneyimli mimar ve danışmanlardan sistem denetimleri.",
        projects_tag: "Çalışmalarımız",
        projects_title_1: "Öne Çıkan",
        projects_title_2: "Projeler",
        projects_subtitle: "Dünya çapındaki sektör liderlerine sunduğumuz dönüştürücü çözümlere bir bakış.",
        project_1_title: "NeoBank Dijital Platform",
        project_1_desc: "Gerçek zamanlı işlemler, AI dolandırıcılık algılama ve çoklu para birimi desteğine sahip tam yığın bankacılık platformu.",
        project_2_title: "MedFlow Yapay Zeka Tanı",
        project_2_desc: "%98.7 doğrulukla 10M+ tıbbi görüntüyü işleyen yapay zeka destekli tanı platformu.",
        project_3_title: "UrbanPulse IoT Ağı",
        project_3_desc: "Trafik, enerji ve çevre izleme için 50K+ sensörü yöneten şehir çapında IoT mesh ağı.",
        project_4_title: "Luxe Pazar Yeri",
        project_4_desc: "200ms altı yanıt süreleriyle 100K eşzamanlı kullanıcıyı yöneten yüksek performanslı e-ticaret motoru.",
        project_5_title: "Eventa",
        project_5_desc: "Profesyonel Etkinlik Ulaşım Yönetim Platformu.",
        project_6_title: "Servio",
        project_6_desc: "Restoranınızın her bölümünü birbirine bağlayan modern, gerçek zamanlı sipariş yönetim platformu.",
        project_link: "Siteyi Ziyaret Et →",
        contact_tag: "İletişime Geçin",
        contact_title_1: "Birlikte Harika",
        contact_title_2: "Şeyler Yaratalım",
        contact_desc: "Aklınızda bir proje mi var? Duymayı çok isteriz. Bize ulaşın ve vizyonunuzu nasıl gerçeğe dönüştürebileceğimizi keşfedelim.",
        contact_phone: "Telefon",
        contact_email: "E-posta",
        contact_location: "Konum",
        contact_location_val: "Bakü, Azerbaycan",
        form_name: "Ad Soyad",
        form_email: "E-posta Adresi",
        form_subject: "Konu",
        form_message: "Mesajınız",
        form_submit: "Mesaj Gönder",
        footer_desc: "En ileri IT çözümleri ile dijital inovasyonun geleceğine öncülük ediyoruz.",
        footer_quick: "Hızlı Bağlantılar",
        footer_contact: "İletişim",
        footer_mobile: "Mobil Uygulamalar",
        footer_cyber: "Siber Güvenlik",
        footer_connect: "Bağlantı",
        footer_rights: "Tüm hakları saklıdır."
    }
};

const langLabels = { en: "EN", az: "AZ", tr: "TR" };
const langFlags = { en: "gb", az: "az", tr: "tr" };

let currentLang = "en";

function setLanguage(lang) {
    currentLang = lang;
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key] !== undefined) {
            el.textContent = dict[key];
        }
    });

    // Update current lang display and flag
    document.getElementById("current-lang").textContent = langLabels[lang];
    const flagImg = document.getElementById("current-flag");
    if (flagImg) {
        flagImg.src = `https://flagcdn.com/w40/${langFlags[lang]}.png`;
        flagImg.alt = langLabels[lang];
    }

    // Update active state on options
    document.querySelectorAll(".lang-option").forEach(opt => {
        opt.classList.toggle("active", opt.dataset.lang === lang);
    });

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Store preference
    localStorage.setItem("cybersoft-lang", lang);
}


document.addEventListener('DOMContentLoaded', () => {

    // ===== LANGUAGE SWITCHER =====
    const langSwitcher = document.getElementById('lang-switcher');
    const langBtn = document.getElementById('lang-btn');

    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langSwitcher.classList.toggle('open');
    });

    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', () => {
            setLanguage(opt.dataset.lang);
            langSwitcher.classList.remove('open');
        });
    });

    // Close dropdown on outside click
    document.addEventListener('click', () => {
        langSwitcher.classList.remove('open');
    });

    // Load saved language
    const saved = localStorage.getItem("cybersoft-lang");
    if (saved && translations[saved]) {
        setLanguage(saved);
    }

    // ===== DYNAMIC FOOTER YEAR =====
    const footerYear = document.getElementById('footer-year');
    if (footerYear) footerYear.textContent = new Date().getFullYear();


    // ===== PARTICLE BACKGROUND =====
    const particleCanvas = document.getElementById('particle-canvas');
    const pCtx = particleCanvas.getContext('2d');
    let particles = [];
    const PARTICLE_COUNT = 80;
    const CONNECTION_DIST = 140;

    function resizeParticleCanvas() {
        particleCanvas.width = window.innerWidth;
        particleCanvas.height = window.innerHeight;
    }
    resizeParticleCanvas();
    window.addEventListener('resize', resizeParticleCanvas);

    class Particle {
        constructor() {
            this.x = Math.random() * particleCanvas.width;
            this.y = Math.random() * particleCanvas.height;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.radius = Math.random() * 1.5 + 0.5;
            this.opacity = Math.random() * 0.4 + 0.1;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > particleCanvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > particleCanvas.height) this.vy *= -1;
        }
        draw() {
            pCtx.beginPath();
            pCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            pCtx.fillStyle = `rgba(0, 180, 255, ${this.opacity})`;
            pCtx.fill();
        }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

    function animateParticles() {
        pCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
        particles.forEach(p => { p.update(); p.draw(); });

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < CONNECTION_DIST) {
                    const opacity = (1 - dist / CONNECTION_DIST) * 0.12;
                    pCtx.beginPath();
                    pCtx.moveTo(particles[i].x, particles[i].y);
                    pCtx.lineTo(particles[j].x, particles[j].y);
                    pCtx.strokeStyle = `rgba(0, 180, 255, ${opacity})`;
                    pCtx.lineWidth = 0.5;
                    pCtx.stroke();
                }
            }
        }
        requestAnimationFrame(animateParticles);
    }
    animateParticles();


    // ===== NETWORK CANVAS (Contact Section) =====
    const networkCanvas = document.getElementById('network-canvas');
    if (networkCanvas) {
        const nCtx = networkCanvas.getContext('2d');
        let nodes = [];
        const NODE_COUNT = 40;

        function resizeNetworkCanvas() {
            const rect = networkCanvas.parentElement.getBoundingClientRect();
            networkCanvas.width = rect.width;
            networkCanvas.height = rect.height;
        }
        resizeNetworkCanvas();
        window.addEventListener('resize', resizeNetworkCanvas);

        class Node {
            constructor() {
                this.x = Math.random() * networkCanvas.width;
                this.y = Math.random() * networkCanvas.height;
                this.vx = (Math.random() - 0.5) * 0.3;
                this.vy = (Math.random() - 0.5) * 0.3;
                this.radius = Math.random() * 2 + 1;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > networkCanvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > networkCanvas.height) this.vy *= -1;
            }
            draw() {
                nCtx.beginPath();
                nCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                nCtx.fillStyle = 'rgba(168, 85, 247, 0.25)';
                nCtx.fill();
            }
        }

        for (let i = 0; i < NODE_COUNT; i++) nodes.push(new Node());

        function animateNetwork() {
            nCtx.clearRect(0, 0, networkCanvas.width, networkCanvas.height);
            nodes.forEach(n => { n.update(); n.draw(); });
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 160) {
                        const opacity = (1 - dist / 160) * 0.1;
                        nCtx.beginPath();
                        nCtx.moveTo(nodes[i].x, nodes[i].y);
                        nCtx.lineTo(nodes[j].x, nodes[j].y);
                        nCtx.strokeStyle = `rgba(168, 85, 247, ${opacity})`;
                        nCtx.lineWidth = 0.5;
                        nCtx.stroke();
                    }
                }
            }
            requestAnimationFrame(animateNetwork);
        }
        animateNetwork();
    }


    // ===== HEADER SCROLL EFFECT =====
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;
        if (scroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        lastScroll = scroll;
    });


    // ===== MOBILE NAVIGATION =====
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');

    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navLinks.classList.toggle('open');
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });


    // ===== ACTIVE NAV LINK ON SCROLL =====
    const sections = document.querySelectorAll('section[id]');
    const allNavLinks = document.querySelectorAll('.nav-link');

    function updateActiveNav() {
        const scrollY = window.scrollY + 200;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollY >= top && scrollY < top + height) {
                allNavLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    window.addEventListener('scroll', updateActiveNav);


    // ===== SCROLL ANIMATIONS (Intersection Observer) =====
    const animElements = document.querySelectorAll('.anim-fade-up');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    animElements.forEach(el => observer.observe(el));


    // ===== COUNTER ANIMATION =====
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    let countersAnimated = false;

    function animateCounters() {
        statNumbers.forEach(el => {
            const target = parseInt(el.dataset.count);
            const duration = 2000;
            const startTime = performance.now();

            function step(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // Ease out cubic
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.floor(eased * target);
                if (progress < 1) {
                    requestAnimationFrame(step);
                } else {
                    el.textContent = target;
                }
            }
            requestAnimationFrame(step);
        });
    }

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersAnimated) {
                countersAnimated = true;
                animateCounters();
            }
        });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) statsObserver.observe(heroStats);


    // ===== PARALLAX ON PROJECT CARDS =====
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            card.style.transition = 'transform 0.5s ease';
        });

        card.addEventListener('mouseenter', () => {
            card.style.transition = 'none';
        });
    });


    // ===== CONTACT FORM =====
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalHTML = btn.innerHTML;
            const sentLabels = { en: "Sent ✓", az: "Göndərildi ✓", tr: "Gönderildi ✓" };
            btn.innerHTML = `<span>${sentLabels[currentLang] || sentLabels.en}</span>`;
            btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.style.background = '';
                btn.disabled = false;
                form.reset();
                // Re-apply current lang to the button text
                setLanguage(currentLang);
            }, 3000);
        });
    }


    // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });


    // ===== BACK TO TOP =====
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

});
