document.addEventListener('DOMContentLoaded', () => {

    // ── YEAR ──
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // ── SCROLL REVEAL ──
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 80);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.js-reveal').forEach(el => revealObserver.observe(el));

    // ── TRANSLATIONS ──
    const langToggle = document.getElementById('lang-toggle');
    let currentLang = 'es';

    const translations = {
        es: {
            'nav-about': 'SOBRE MÍ',
            'nav-services': 'SERVICIOS',
            'nav-skills': 'STACK',
            'nav-projects': 'PROYECTOS',
            'hero-available': '● DISPONIBLE PARA PROYECTOS',
            'hero-tagline': 'Ingeniería de software creativa y desarrollo móvil nativo.',
            'hero-bio': 'Fundador de T-STY Development. Construyo aplicaciones móviles, sistemas PDV y plataformas e-commerce de alto rendimiento para negocios modernos.',
            'btn-projects': 'Ver Proyectos',
            'btn-contact': 'Iniciar Proyecto',
            'section-services': 'SERVICIOS',
            'srv-1-title': 'Aplicaciones Móviles',
            'srv-1-desc': 'Apps nativas iOS y Android con Flutter. Una base de código, rendimiento nativo, interfaces listas para producción.',
            'srv-2-title': 'Sistemas PDV & Retail',
            'srv-2-desc': 'Puntos de venta robustos con integración de hardware: impresoras ESC/POS, escáneres HID y terminales de pago.',
            'srv-3-title': 'E-commerce & Delivery',
            'srv-3-desc': 'Plataformas de comercio con catálogos en tiempo real, notificaciones push segmentadas y seguimiento de entregas.',
            'srv-4-title': 'Kioscos & Autoservicio',
            'srv-4-desc': 'Terminales interactivas en modo kiosco para verificación de precios, programas de lealtad y recepción de inventario.',
            'section-skills': 'STACK TÉCNICO',
            'cat-mobile': 'MOBILE',
            'cat-web': 'WEB',
            'cat-back': 'BACKEND',
            'cat-infra': 'INFRA',
            'section-work': 'PROYECTOS',
            'proj-1-title': 'Sistema PDV',
            'proj-1-desc': 'Punto de Venta omnicanal. Inventarios masivos, sincronización en tiempo real y operaciones offline para retail moderno.',
            'proj-2-title': 'E-commerce Abarrotes',
            'proj-2-desc': 'Plataforma de comercio móvil completa con gestión de pedidos en vivo, pagos seguros y seguimiento de entregas.',
            'proj-3-title': 'Kiosco de Verificación',
            'proj-3-desc': 'Terminal de autoservicio para verificación de precios y recepción de inventario, optimizada para hardware dedicado.',
            'footer-title': 'Iniciemos\nColaboración',
            'footer-sub': 'Software de alto rendimiento\npara negocios modernos.',
            'btn-email': 'Iniciar Proyecto',

            // Subpage: PDV
            'pdv-title': 'Sistema PDV',
            'btn-launch': 'Iniciar App',
            'pdv-creds-title': 'Credenciales Demo',
            'pdv-creds-desc': 'Utilice estos datos para probar el sistema en vivo:',
            'cred-employee': 'Código Empleado',
            'pdv-overview-title': 'Arquitectura del Sistema',
            'pdv-overview-text': 'Diseñado para entornos de alto volumen, este Punto de Venta une la flexibilidad web con el rendimiento nativo. Construido con Flutter, despliega una base de código unificada para tabletas Android y escritorio Windows.',
            'pdv-feat-inventory-title': 'Inventario Avanzado',
            'pdv-feat-inventory-desc': 'Gestión de stock en tiempo real, productos a granel, variantes y alertas de stock bajo. Módulo dedicado para mermas y conciliación.',
            'pdv-feat-sales-title': 'Transacciones Ágiles',
            'pdv-feat-sales-desc': 'Pagos mixtos (Efectivo/Tarjeta/Crédito), cuentas divididas y devoluciones. UI optimizada para reducir tiempos de fila.',
            'pdv-feat-hardware-title': 'Integración Hardware',
            'pdv-feat-hardware-desc': 'Comunicación nativa con impresoras ESC/POS (Bluetooth/USB) y escáneres HID. Sin drivers externos.',
            'pdv-feat-omni-title': 'Pedidos Omnicanal',
            'pdv-feat-omni-desc': 'Recepción directa de pedidos desde la App de Clientes. Envíos con rutas optimizadas vía Google Maps SDK.',
            'pdv-tech-title': 'Especificaciones Técnicas',
            'spec-front': 'Frontend:',
            'spec-back': 'Backend:',
            'spec-maps': 'Mapas:',
            'spec-print': 'Impresión:',

            // Subpage: Grocery
            'grocery-title': 'E-commerce Abarrotes',
            'grocery-creds-title': 'Acceso Cliente Demo',
            'grocery-creds-desc': 'Explore la experiencia de usuario completa:',
            'grocery-overview-title': 'Experiencia de Compra Móvil',
            'grocery-overview-text': 'Aplicación nativa de alto rendimiento diseñada para la retención de usuarios. Catálogo sincronizado en tiempo real, búsqueda inteligente y checkout optimizado.',
            'grocery-feat-search-title': 'Búsqueda Inteligente',
            'grocery-feat-search-desc': 'Motor tolerante a errores tipográficos con filtros dinámicos por marca, categoría y precio.',
            'grocery-feat-tracking-title': 'Logística de Entrega',
            'grocery-feat-tracking-desc': 'Geocodificación precisa para localización correcta del domicilio de entrega.',
            'grocery-feat-push-title': 'Engagement',
            'grocery-feat-push-desc': 'Push notifications segmentadas para ofertas flash y actualizaciones de estado de pedidos.',
            'grocery-feat-wallet-title': 'Pago Contra Entrega',
            'grocery-feat-wallet-desc': 'Efectivo o Tarjeta vía terminal bancaria portátil al recibir el pedido.',
            'spec-payment': 'Pagos:',

            // Subpage: Kiosk
            'kiosk-title': 'Kiosco de Verificación',
            'kiosk-creds-title': 'Acceso Administrativo',
            'kiosk-creds-desc': 'La vista de cliente es pública. Para funciones de inventario:',
            'cred-email': 'Email',
            'cred-pass': 'Password',
            'cred-access-code': 'Código de Acceso',
            'kiosk-overview-title': 'Solución de Autoservicio',
            'kiosk-overview-text': 'Terminal interactiva en dos modos: "Verificador de Precios" para clientes y "Recepción de Mercancía" para empleados, protegido por PIN.',
            'kiosk-feat-scan-title': 'Escaneo Ultrarrápido',
            'kiosk-feat-scan-desc': 'Optimizado para escáneres láser (Zebra/Honeywell) y cámaras HD. Respuesta < 100ms.',
            'kiosk-feat-inventory-title': 'Entrada de Stock',
            'kiosk-feat-inventory-desc': 'Escaneo de entregas completas validando contra órdenes de compra y actualizando inventario central.',
            'kiosk-feat-rewards-title': 'Programa de Lealtad',
            'kiosk-feat-rewards-desc': 'Registro de clientes con teclado virtual numérico y creación de NIP para monederos electrónicos.',
            'kiosk-feat-security-title': 'Modo Kiosco',
            'kiosk-feat-security-desc': 'Interfaz bloqueada que impide salir de la aplicación. Uso exclusivo para su propósito.',
            'spec-hardware': 'Hardware:',
            'spec-sync': 'Sincronización:',
            'spec-loyalty': 'Lealtad:',
        },
        en: {
            'nav-about': 'ABOUT',
            'nav-services': 'SERVICES',
            'nav-skills': 'STACK',
            'nav-projects': 'WORK',
            'hero-available': '● AVAILABLE FOR PROJECTS',
            'hero-tagline': 'Creative software engineering and native mobile development.',
            'hero-bio': 'Founder of T-STY Development. I build mobile apps, POS systems, and high-performance e-commerce platforms for modern businesses.',
            'btn-projects': 'View Work',
            'btn-contact': 'Start a Project',
            'section-services': 'SERVICES',
            'srv-1-title': 'Mobile Applications',
            'srv-1-desc': 'Native iOS and Android apps with Flutter. Single codebase, native performance, production-ready interfaces.',
            'srv-2-title': 'POS & Retail Systems',
            'srv-2-desc': 'Robust point-of-sale with hardware integration: ESC/POS printers, HID scanners, and payment terminals.',
            'srv-3-title': 'E-commerce & Delivery',
            'srv-3-desc': 'Commerce platforms with real-time catalogs, segmented push notifications, and live delivery tracking.',
            'srv-4-title': 'Kiosks & Self-Service',
            'srv-4-desc': 'Locked-down interactive terminals for price checking, loyalty programs, and inventory receiving.',
            'section-skills': 'TECH STACK',
            'cat-mobile': 'MOBILE',
            'cat-web': 'WEB',
            'cat-back': 'BACKEND',
            'cat-infra': 'INFRA',
            'section-work': 'WORK',
            'proj-1-title': 'POS System',
            'proj-1-desc': 'Omnichannel Point of Sale. Massive inventories, real-time sync, and offline operations for modern retail.',
            'proj-2-title': 'Grocery E-commerce',
            'proj-2-desc': 'Full-featured mobile commerce platform with live order management, secure payments, and delivery tracking.',
            'proj-3-title': 'Verification Kiosk',
            'proj-3-desc': 'Self-service price checker and inventory receiving terminal, optimized for dedicated hardware.',
            'footer-title': "Let's Build\nTogether",
            'footer-sub': 'High-performance software\nfor modern businesses.',
            'btn-email': 'Start a Project',

            // Subpage: PDV
            'pdv-title': 'POS System',
            'btn-launch': 'Launch App',
            'pdv-creds-title': 'Demo Credentials',
            'pdv-creds-desc': 'Use these credentials to test the live system:',
            'cred-employee': 'Employee Code',
            'pdv-overview-title': 'System Architecture',
            'pdv-overview-text': 'Engineered for high-volume retail, this POS bridges web flexibility with native performance. A single Flutter codebase targets Android tablets and Windows desktops.',
            'pdv-feat-inventory-title': 'Advanced Inventory',
            'pdv-feat-inventory-desc': 'Real-time stock management, bulk items, variants, and low-stock alerts. Dedicated shrinkage and reconciliation module.',
            'pdv-feat-sales-title': 'Seamless Transactions',
            'pdv-feat-sales-desc': 'Mixed payments, split bills, and returns. UI optimized to complete transactions in seconds.',
            'pdv-feat-hardware-title': 'Hardware Integration',
            'pdv-feat-hardware-desc': 'Native ESC/POS printer and HID scanner communication. No third-party drivers required.',
            'pdv-feat-omni-title': 'Omnichannel Orders',
            'pdv-feat-omni-desc': 'Receives orders from the consumer mobile app with integrated Google Maps routing.',
            'pdv-tech-title': 'Technical Specifications',
            'spec-front': 'Frontend:',
            'spec-back': 'Backend:',
            'spec-maps': 'Maps:',
            'spec-print': 'Printing:',

            // Subpage: Grocery
            'grocery-title': 'Grocery E-commerce',
            'grocery-creds-title': 'Client Demo Access',
            'grocery-creds-desc': 'Explore the full user journey:',
            'grocery-overview-title': 'Mobile Shopping Experience',
            'grocery-overview-text': 'High-performance native app for user retention. Real-time catalog sync, smart search, and optimized checkout to minimize abandonment.',
            'grocery-feat-search-title': 'Smart Search',
            'grocery-feat-search-desc': 'Typo-tolerant engine with dynamic filters by brand, category, and price.',
            'grocery-feat-tracking-title': 'Delivery Logistics',
            'grocery-feat-tracking-desc': 'Precise geocoding for correct delivery address localization.',
            'grocery-feat-push-title': 'Engagement',
            'grocery-feat-push-desc': 'Segmented push notifications for flash sales and order status updates.',
            'grocery-feat-wallet-title': 'Payment on Delivery',
            'grocery-feat-wallet-desc': 'Cash or Card via portable bank terminal upon delivery.',
            'spec-payment': 'Payments:',

            // Subpage: Kiosk
            'kiosk-title': 'Verification Kiosk',
            'kiosk-creds-title': 'Admin Access',
            'kiosk-creds-desc': 'Customer view is public. For inventory features:',
            'cred-email': 'Email',
            'cred-pass': 'Password',
            'cred-access-code': 'Access Code',
            'kiosk-overview-title': 'Self-Service Solution',
            'kiosk-overview-text': 'Interactive terminal in two modes: "Price Checker" for customers and PIN-protected "Merchandise Receiving" for staff.',
            'kiosk-feat-scan-title': 'Ultra-Fast Scanning',
            'kiosk-feat-scan-desc': 'Optimized for industrial laser scanners (Zebra/Honeywell) and HD cameras. Response < 100ms.',
            'kiosk-feat-inventory-title': 'Stock Entry',
            'kiosk-feat-inventory-desc': 'Rapidly scan full deliveries, validating against purchase orders and updating central inventory.',
            'kiosk-feat-rewards-title': 'Loyalty Program',
            'kiosk-feat-rewards-desc': 'Customer registration with numeric keypad and secure PIN for digital wallets.',
            'kiosk-feat-security-title': 'Kiosk Mode',
            'kiosk-feat-security-desc': 'Locked interface preventing app exit. Device used exclusively for its purpose.',
            'spec-hardware': 'Hardware:',
            'spec-sync': 'Sync:',
            'spec-loyalty': 'Loyalty:',
        }
    };

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'es' ? 'en' : 'es';
            langToggle.textContent = currentLang === 'es' ? 'EN' : 'ES';
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[currentLang][key]) el.textContent = translations[currentLang][key];
            });
        });
    }

    // ── NEURAL NETWORK (dark version) ──
    const canvas = document.getElementById('network-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    let signals = [];
    let mouse = { x: null, y: null, radius: 200 };

    window.addEventListener('mousemove', e => { mouse.x = e.x; mouse.y = e.y; });

    class Neuron {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() * 0.3) - 0.15;
            this.vy = (Math.random() * 0.3) - 0.15;
            this.size = Math.random() * 1.5 + 1;
            this.armCount = Math.floor(Math.random() * 4) + 3;
            this.armLength = Math.random() * 20 + 15;
            this.angleOffset = Math.random() * Math.PI * 2;
        }
        update(t) {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x > canvas.width + 50) this.x = -50;
            if (this.x < -50) this.x = canvas.width + 50;
            if (this.y > canvas.height + 50) this.y = -50;
            if (this.y < -50) this.y = canvas.height + 50;
            if (mouse.x) {
                const dx = mouse.x - this.x, dy = mouse.y - this.y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < mouse.radius) {
                    const f = (mouse.radius - dist) / mouse.radius;
                    this.x -= (dx/dist) * f * 1.2;
                    this.y -= (dy/dist) * f * 1.2;
                }
            }
            this.draw(t);
        }
        draw(t) {
            ctx.beginPath();
            for (let i = 0; i < this.armCount; i++) {
                const angle = (Math.PI*2/this.armCount)*i + this.angleOffset;
                const wiggle = Math.sin(t*0.01 + i) * 0.6;
                const len = this.armLength + Math.sin(t*0.025 + i) * 8;
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x + Math.cos(angle+wiggle)*len, this.y + Math.sin(angle+wiggle)*len);
            }
            ctx.strokeStyle = 'rgba(232,160,32,0.08)';
            ctx.lineWidth = 0.8;
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
            ctx.fillStyle = 'rgba(232,160,32,0.35)';
            ctx.fill();
        }
    }

    class Signal {
        constructor(x, y, ex, ey) {
            this.x = x; this.y = y; this.ex = ex; this.ey = ey;
            this.p = 0; this.speed = 0.025; this.alive = true;
        }
        update() {
            this.p += this.speed;
            if (this.p >= 1) { this.alive = false; return; }
            this.x += (this.ex - this.x) * this.speed;
            this.y += (this.ey - this.y) * this.speed;
            ctx.beginPath();
            ctx.arc(this.x, this.y, 2, 0, Math.PI*2);
            ctx.fillStyle = '#e8a020';
            ctx.fill();
        }
    }

    function init() {
        particles = [];
        const n = (canvas.width * canvas.height) / 15000;
        for (let i = 0; i < n; i++) particles.push(new Neuron());
    }

    function connect() {
        const threshold = (canvas.width/9) ** 2;
        for (let a = 0; a < particles.length; a++) {
            for (let b = a+1; b < particles.length; b++) {
                const dx = particles[a].x - particles[b].x;
                const dy = particles[a].y - particles[b].y;
                const d2 = dx*dx + dy*dy;
                if (d2 < threshold) {
                    const op = (1 - d2/threshold) * 0.12;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(232,160,32,${op})`;
                    ctx.lineWidth = 0.6;
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                    if (Math.random() > 0.9997)
                        signals.push(new Signal(particles[a].x, particles[a].y, particles[b].x, particles[b].y));
                }
            }
        }
    }

    let t = 0;
    function animate() {
        requestAnimationFrame(animate);
        t++;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => p.update(t));
        connect();
        signals = signals.filter(s => { s.update(); return s.alive; });
    }

    window.addEventListener('resize', () => {
        canvas.width = innerWidth; canvas.height = innerHeight; init();
    });

    init();
    animate();
});