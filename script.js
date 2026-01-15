document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. SETUP ---
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('show');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));

    // --- TRANSLATION LOGIC ---
    const langToggle = document.getElementById('lang-toggle');
    let currentLang = 'es';
    
    const translations = {
        es: { 
            // MAIN PAGE
            'nav-about': 'Sobre Mí', 
            'nav-skills': 'Tecnologías', 
            'nav-projects': 'Proyectos', 
            'hero-intro': 'Hola, soy', 
            'hero-tagline': 'Ingeniería de software creativa y desarrollo móvil nativo.', 
            'btn-projects': 'Ver Proyectos', 
            'btn-contact': 'Contactar', 
            'section-skills': 'Arsenal Técnico',
            'section-work': 'Proyectos Destacados',
            'footer-title': 'Iniciemos Colaboración', 
            'btn-email': 'Enviar Mensaje',

            // SKILL DESCRIPTIONS
            'skill-flutter': 'Desarrollo Multiplataforma (Android/iOS/Desktop).',
            'skill-swift': 'Desarrollo nativo iOS & iPadOS.',
            'skill-kotlin': 'Arquitectura moderna Android & integraciones nativas.',
            'skill-react': 'SPAs interactivas y gestión de estado.',
            'skill-ts': 'Lógica tipada segura y escalable.',
            'skill-node': 'APIs escalables y Microservicios.',
            'skill-python': 'Scripting de datos e integración IA.',
            'skill-db': 'PostgreSQL, Firebase & MongoDB.',
            'skill-docker': 'Contenedores y pipelines CI/CD.',

            // PROJECT SUMMARIES (Index)
            'proj-1-title': 'Sistema PDV', 
            'proj-1-desc': 'Solución integral de Punto de Venta omnicanal. Gestiona inventarios masivos, sincronización en tiempo real y operaciones offline para retail moderno.',
            'proj-2-title': 'E-commerce Abarrotes', 
            'proj-2-desc': 'Plataforma de comercio móvil completa. Incluye gestión de pedidos en vivo, pagos seguros y seguimiento de entregas.',
            'proj-3-title': 'Kiosco de Verificación', 
            'proj-3-desc': 'Herramienta de autoservicio para verificación de precios y recepción de inventario, optimizada para hardware dedicado.',
            'view-case': 'Ver Detalles \u2192',

            // --- PDV DOCUMENTATION ---
            'pdv-title': 'Sistema PDV',
            'btn-launch': 'Iniciar App',
            'pdv-creds-title': 'Credenciales Demo',
            'pdv-creds-desc': 'Utilice estos datos para probar el sistema en vivo:',
            'cred-employee': 'Código Empleado',
            'pdv-overview-title': 'Arquitectura del Sistema',
            'pdv-overview-text': 'Diseñado para entornos de alto volumen, este Punto de Venta une la flexibilidad web con el rendimiento nativo. Construido con Flutter, despliega una base de código unificada para tabletas Android (movilidad) y escritorio Windows (caja principal).',
            'pdv-feat-inventory-title': 'Inventario Avanzado',
            'pdv-feat-inventory-desc': 'Gestión de stock en tiempo real, soporte para productos a granel, variantes y alertas de stock bajo. Módulo dedicado para mermas y conciliación.',
            'pdv-feat-sales-title': 'Transacciones Ágiles',
            'pdv-feat-sales-desc': 'Soporte para pagos mixtos (Efectivo/Tarjeta/Crédito), cuentas divididas y devoluciones. UI optimizada para reducir tiempos de fila.',
            'pdv-feat-hardware-title': 'Integración Hardware',
            'pdv-feat-hardware-desc': 'Comunicación nativa con impresoras térmicas ESC/POS (Bluetooth/USB) y escáneres HID. Sin necesidad de drivers externos.',
            'pdv-feat-omni-title': 'Pedidos Omnicanal',
            'pdv-feat-omni-desc': 'Recepción directa de pedidos desde la App de Clientes. Gestión de envíos con rutas optimizadas vía Google Maps SDK.',
            'pdv-tech-title': 'Especificaciones Técnicas',
            'spec-front': 'Frontend:',
            'spec-back': 'Backend:',
            'spec-maps': 'Mapas:',
            'spec-print': 'Impresión:',
            // --- GROCERY PAGE TRANSLATIONS ---
            'grocery-title': 'E-commerce Abarrotes',
            'grocery-creds-title': 'Acceso Cliente Demo',
            'grocery-creds-desc': 'Explore la experiencia de usuario completa:',
            'grocery-overview-title': 'Experiencia de Compra Móvil',
            'grocery-overview-text': 'Una aplicación nativa de alto rendimiento diseñada para la retención de usuarios. Integra un catálogo sincronizado en tiempo real con el inventario físico, búsqueda inteligente algorítmica y un flujo de checkout optimizado para minimizar el abandono de carritos.',
            'grocery-feat-search-title': 'Búsqueda Inteligente',
            'grocery-feat-search-desc': 'Motor de búsqueda tolerante a fallos tipográficos con filtros dinámicos por marca, categoría y precio. Resultados instantáneos.',
            'grocery-feat-tracking-title': 'Logística de Entrega',
            'grocery-feat-tracking-desc': 'Geocodificación precisa para asegurar la correcta localización del domicilio de entrega.',
            'grocery-feat-push-title': 'Engagement',
            'grocery-feat-push-desc': 'Notificaciones Push segmentadas para ofertas flash y actualizaciones de estado de pedidos (En preparación, En camino).',
            'grocery-feat-wallet-title': 'Pago Contra Entrega',
            'grocery-feat-wallet-desc': 'Flexibilidad de pago al momento de recibir el pedido: Efectivo o Tarjeta vía terminal bancaria portátil.',
            'spec-payment': 'Pagos:',
            // --- KIOSK PAGE TRANSLATIONS ---
            'kiosk-title': 'Kiosco de Verificación',
            'kiosk-creds-title': 'Acceso Administrativo',
            'kiosk-creds-desc': 'La vista de cliente es pública. Para funciones de inventario:',
            'cred-pin': 'PIN Admin',
            'cred-mode': 'Modo',
            'kiosk-overview-title': 'Solución de Autoservicio',
            'kiosk-overview-text': 'Una terminal interactiva diseñada para reducir la carga operativa del personal. Funciona en dos modos: "Verificador de Precios" para clientes (siempre activo, interfaz simplificada) y "Recepción de Mercancía" para empleados (protegido por PIN, escaneo masivo).',
            'kiosk-feat-scan-title': 'Escaneo Ultrarrápido',
            'kiosk-feat-scan-desc': 'Optimizado para escáneres láser industriales (Zebra/Honeywell) y cámaras de alta definición. Respuesta en < 100ms.',
            'kiosk-feat-inventory-title': 'Entrada de Stock',
            'kiosk-feat-inventory-desc': 'Permite al staff escanear entregas completas rápidamente, validando contra órdenes de compra y actualizando el inventario central.',
            'kiosk-feat-voice-title': 'Feedback Auditivo',
            'kiosk-feat-voice-desc': 'Síntesis de voz (TTS) para anunciar precios y alertas de stock, mejorando la accesibilidad y la experiencia del usuario sin contacto.',
            'kiosk-feat-security-title': 'Modo Kiosco',
            'kiosk-feat-security-desc': 'Interfaz bloqueada (Kiosk Mode) que impide la salida de la aplicación, asegurando que el dispositivo se use exclusivamente para su propósito.',
            'spec-hardware': 'Hardware:',
            'spec-sync': 'Sincronización:',
            'spec-accessibility': 'Accesibilidad:'
        },
        en: { 
            // MAIN PAGE
            'nav-about': 'About', 
            'nav-skills': 'Stack', 
            'nav-projects': 'Work', 
            'hero-intro': 'Hello, I am', 
            'hero-tagline': 'Creative software engineering and native mobile development.', 
            'btn-projects': 'View Projects', 
            'btn-contact': 'Contact Me', 
            'section-skills': 'Technical Arsenal',
            'section-work': 'Selected Works',
            'footer-title': 'Initiate Collaboration', 
            'btn-email': 'Send Message',

            // SKILL DESCRIPTIONS
            'skill-flutter': 'Cross-Platform Development (Android/iOS/Desktop).',
            'skill-swift': 'Native iOS & iPadOS Development.',
            'skill-kotlin': 'Modern Android Architecture & Native Integrations.',
            'skill-react': 'Interactive SPAs & State Management.',
            'skill-ts': 'Type-safe, scalable logic.',
            'skill-node': 'Scalable APIs & Microservices.',
            'skill-python': 'Data Scripting & AI Integration.',
            'skill-db': 'PostgreSQL, Firebase & MongoDB.',
            'skill-docker': 'Containerization & CI/CD Pipelines.',

            // PROJECT SUMMARIES (Index)
            'proj-1-title': 'POS System', 
            'proj-1-desc': 'Comprehensive Omnichannel POS solution. Manages massive inventories, real-time synchronization, and offline operations for modern retail.',
            'proj-2-title': 'Grocery Ecommerce', 
            'proj-2-desc': 'Full-featured mobile commerce platform. Includes live order management, secure payments, and delivery tracking.',
            'proj-3-title': 'Verification Kiosk', 
            'proj-3-desc': 'Self-service price checker and inventory receiving tool, optimized for dedicated hardware integration.',
            'view-case': 'View Details \u2192',

            // --- PDV DOCUMENTATION ---
            'pdv-title': 'POS System',
            'btn-launch': 'Launch App',
            'pdv-creds-title': 'Demo Credentials',
            'pdv-creds-desc': 'Use these credentials to test the live system:',
            'cred-employee': 'Employee Code',
            'pdv-overview-title': 'System Architecture',
            'pdv-overview-text': 'Engineered for high-volume retail environments, this Point of Sale system bridges the gap between web flexibility and native performance. Built with Flutter, it deploys a unified codebase to Android tablets for mobility and Windows desktops for robust counter operations.',
            'pdv-feat-inventory-title': 'Advanced Inventory',
            'pdv-feat-inventory-desc': 'Real-time stock management supporting bulk items, variants, and low-stock alerts. Includes a dedicated module for tracking shrinkage (loss) and reconciliation.',
            'pdv-feat-sales-title': 'Seamless Transactions',
            'pdv-feat-sales-desc': 'Supports mixed payments (Cash/Card/Credit), split bills, and returns management. UI optimized to complete transactions in seconds and reduce queue times.',
            'pdv-feat-hardware-title': 'Hardware Integration',
            'pdv-feat-hardware-desc': 'Native communication with ESC/POS thermal printers via Bluetooth/USB and HID barcode scanners. No third-party drivers required for core functionality.',
            'pdv-feat-omni-title': 'Omnichannel Orders',
            'pdv-feat-omni-desc': 'Receives orders directly from the consumer mobile app. Staff can review, accept, and process delivery orders with integrated Google Maps routing.',
            'pdv-tech-title': 'Technical Specifications',
            'spec-front': 'Frontend:',
            'spec-back': 'Backend:',
            'spec-maps': 'Maps:',
            'spec-print': 'Printing:',
            'grocery-title': 'Grocery E-commerce',
            'grocery-creds-title': 'Client Demo Access',
            'grocery-creds-desc': 'Explore the full user journey:',
            'grocery-overview-title': 'Mobile Shopping Experience',
            'grocery-overview-text': 'A high-performance native application designed for user retention. Features a catalog synchronized in real-time with physical inventory, algorithmic smart search, and an optimized checkout flow to minimize cart abandonment.',
            'grocery-feat-search-title': 'Smart Search',
            'grocery-feat-search-desc': 'Typo-tolerant search engine with dynamic filters by brand, category, and price. Delivers instant results.',
            'grocery-feat-tracking-title': 'Delivery Logistics',
            'grocery-feat-tracking-desc': 'Precise geocoding to ensure correct delivery address localization.',
            'grocery-feat-push-title': 'Engagement',
            'grocery-feat-push-desc': 'Segmented Push Notifications for flash sales and order status updates (Preparing, On the way).',
            'grocery-feat-wallet-title': 'Payment on Delivery',
            'grocery-feat-wallet-desc': 'Payment flexibility upon receipt: Cash or Card via portable bank terminal.',
            'spec-payment': 'Payments:',
            'kiosk-title': 'Verification Kiosk',
            'kiosk-creds-title': 'Admin Access',
            'kiosk-creds-desc': 'Customer view is public. For inventory features:',
            'cred-pin': 'Admin PIN',
            'cred-mode': 'Mode',
            'kiosk-overview-title': 'Self-Service Solution',
            'kiosk-overview-text': 'An interactive terminal designed to reduce staff workload. Operates in two modes: "Price Checker" for customers (always on, simplified UI) and "Merchandise Receiving" for staff (PIN protected, bulk scanning).',
            'kiosk-feat-scan-title': 'Ultra-Fast Scanning',
            'kiosk-feat-scan-desc': 'Optimized for industrial laser scanners (Zebra/Honeywell) and HD cameras. Response time < 100ms.',
            'kiosk-feat-inventory-title': 'Stock Entry',
            'kiosk-feat-inventory-desc': 'Allows staff to rapidly scan full deliveries, validating against purchase orders and updating central inventory.',
            'kiosk-feat-voice-title': 'Auditory Feedback',
            'kiosk-feat-voice-desc': 'Text-to-Speech (TTS) synthesis to announce prices and stock alerts, improving accessibility and contactless user experience.',
            'kiosk-feat-security-title': 'Kiosk Mode',
            'kiosk-feat-security-desc': 'Locked interface (Kiosk Mode) preventing app exit, ensuring the device is used exclusively for its intended purpose.',
            'spec-hardware': 'Hardware:',
            'spec-sync': 'Sync:',
            'spec-accessibility': 'Accessibility:'
        }
    };

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'es' ? 'en' : 'es';
            langToggle.textContent = currentLang === 'es' ? 'English' : 'Español';
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[currentLang][key]) el.textContent = translations[currentLang][key];
            });
        });
    }

    // --- 2. BIOLOGICAL NEURAL NETWORK (Background) ---
    const canvas = document.getElementById('network-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particlesArray;
        let signalsArray = []; 
        let mouse = { x: null, y: null, radius: 250 };

        window.addEventListener('mousemove', (event) => {
            mouse.x = event.x;
            mouse.y = event.y;
        });

        class Neuron {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.directionX = (Math.random() * 0.4) - 0.2; 
                this.directionY = (Math.random() * 0.4) - 0.2;
                this.size = Math.random() * 2 + 2; 
                this.armCount = Math.floor(Math.random() * 4) + 4;
                this.armLength = Math.random() * 25 + 20; 
                this.angleOffset = Math.random() * Math.PI * 2; 
            }
            update(time) {
                if (this.x > canvas.width + 50) this.x = -50;
                if (this.x < -50) this.x = canvas.width + 50;
                if (this.y > canvas.height + 50) this.y = -50;
                if (this.y < -50) this.y = canvas.height + 50;
                this.x += this.directionX;
                this.y += this.directionY;
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx*dx + dy*dy);
                if (distance < mouse.radius) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (mouse.radius - distance) / mouse.radius;
                    this.x -= forceDirectionX * force * 1.5;
                    this.y -= forceDirectionY * force * 1.5;
                }
                this.draw(time);
            }
            draw(time) {
                ctx.beginPath();
                for (let i = 0; i < this.armCount; i++) {
                    let angle = (Math.PI * 2 / this.armCount) * i + this.angleOffset;
                    let wiggle = Math.sin(time * 0.01 + i) * 0.8; 
                    let currentAngle = angle + wiggle;
                    let pulseLength = this.armLength + (Math.sin(time * 0.03 + i) * 10);
                    let tipX = this.x + Math.cos(currentAngle) * pulseLength;
                    let tipY = this.y + Math.sin(currentAngle) * pulseLength;
                    ctx.moveTo(this.x, this.y);
                    ctx.lineTo(tipX, tipY);
                }
                ctx.strokeStyle = 'rgba(100, 100, 100, 0.2)'; 
                ctx.lineWidth = 1;
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = '#6b7280'; 
                ctx.fill();
            }
        }

        class Signal {
            constructor(startX, startY, endX, endY) {
                this.x = startX;
                this.y = startY;
                this.endX = endX;
                this.endY = endY;
                this.speed = 0.02;
                this.progress = 0;
                this.alive = true;
            }
            update() {
                this.progress += this.speed;
                if (this.progress >= 1) this.alive = false;
                this.x = this.x + (this.endX - this.x) * this.speed;
                this.y = this.y + (this.endY - this.y) * this.speed;
                this.draw();
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, 2.5, 0, Math.PI * 2, false);
                ctx.fillStyle = '#000000'; 
                ctx.fill();
            }
        }

        function init() {
            particlesArray = [];
            let numberOfParticles = (canvas.height * canvas.width) / 13000;
            for (let i = 0; i < numberOfParticles; i++) {
                particlesArray.push(new Neuron());
            }
        }

        let time = 0;
        function animate() {
            requestAnimationFrame(animate);
            time++; 
            ctx.clearRect(0, 0, innerWidth, innerHeight);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update(time);
            }
            connect();
            for (let i = 0; i < signalsArray.length; i++) {
                signalsArray[i].update();
                if (!signalsArray[i].alive) {
                    signalsArray.splice(i, 1);
                    i--;
                }
            }
        }

        function connect() {
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    let dx = particlesArray[a].x - particlesArray[b].x;
                    let dy = particlesArray[a].y - particlesArray[b].y;
                    let distance = dx * dx + dy * dy;
                    let threshold = (canvas.width / 9) * (canvas.width / 9); 
                    if (distance < threshold) {
                        let opacityValue = 1 - (distance / threshold);
                        ctx.beginPath();
                        ctx.strokeStyle = 'rgba(0, 0, 0,' + opacityValue * 0.15 + ')'; 
                        ctx.lineWidth = 1;
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                        if (Math.random() > 0.9995) { 
                            signalsArray.push(new Signal(particlesArray[a].x, particlesArray[a].y, particlesArray[b].x, particlesArray[b].y));
                        }
                    }
                }
            }
        }

        window.addEventListener('resize', () => {
            canvas.width = innerWidth;
            canvas.height = innerHeight;
            init();
        });

        init();
        animate();
    }
});