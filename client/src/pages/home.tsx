import { FC, useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X, 
  ShieldCheck, 
  FileText, 
  BarChart, 
  Calculator, 
  Users, 
  Briefcase,
  Clock,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  PieChart,
  Scale,
  Globe,
  Truck,
  Server,
  FileDigit
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Assets
import heroImg from "@assets/generated_images/professional_reviewing_documents_at_a_clean_desk_with_cool_lighting..png";
import personaManagerImg from "@assets/generated_images/hands_aligning_documents_on_a_tidy_desk..png";
import personaEntrepreneurImg from "@assets/generated_images/professional_working_on_laptop_with_dashboard..png";
import personaControllerImg from "@assets/generated_images/signing_legal_documents_with_premium_pen..png";
import processImg from "@assets/generated_images/professional_analyzing_financial_data_on_tablet..png";
import trustImg from "@assets/generated_images/modern_clean_office_space_with_navy_and_white_tones..png";

const MasterMindLanding: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="min-h-screen bg-ice-white text-navy font-sans selection:bg-trust-blue selection:text-white overflow-x-hidden">
      {/* 1. Sticky Header - Modernized */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled 
            ? "glass-navy py-4 shadow-xl border-white/5" 
            : "bg-transparent py-6 border-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div 
            className={`font-heading font-bold text-2xl tracking-tighter cursor-pointer transition-colors flex items-center gap-2 ${scrolled ? 'text-white' : 'text-navy'}`} 
            onClick={() => window.scrollTo(0,0)}
          >
            MASTERMIN<span className="text-trust-blue">d</span>
          </div>
          
          {/* Desktop Nav */}
          <nav className={`hidden md:flex items-center gap-8 text-sm font-medium ${scrolled ? 'text-gray-300' : 'text-navy/80'}`}>
            {["Usluge", "Kako radimo", "Cene", "Kontakt"].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                className={`hover:text-trust-blue transition-colors font-heading uppercase tracking-widest text-xs font-semibold ${scrolled ? 'hover:text-white' : ''}`}
              >
                {item}
              </button>
            ))}
            
            {/* Language Badge */}
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full border ${scrolled ? 'border-white/20 bg-white/10 text-white' : 'border-navy/10 bg-white text-navy'} text-xs font-bold tracking-wider`}>
              <Globe size={14} />
              <span>SRB | ENG | RUS</span>
            </div>

            <Button className="bg-trust-blue hover:bg-trust-blue-light text-white rounded-full px-8 py-2.5 shadow-lg shadow-trust-blue/25 hover:shadow-trust-blue/40 transition-all hover:-translate-y-0.5">
              Zakažite konsultacije
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden ${scrolled ? 'text-white' : 'text-navy'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Panel */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-navy absolute w-full left-0 top-full overflow-hidden shadow-2xl border-t border-white/10"
          >
            <div className="flex flex-col p-8 gap-6 text-white h-screen">
               <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 w-fit text-xs font-bold tracking-wider mb-4">
                <Globe size={14} />
                <span>SRB | ENG | RUS</span>
              </div>
              {["Usluge", "Kako radimo", "Cene", "Kontakt"].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                  className="text-left py-4 border-b border-white/10 text-2xl font-heading font-bold hover:text-trust-blue transition-colors"
                >
                  {item}
                </button>
              ))}
              <Button className="bg-trust-blue hover:bg-trust-blue-light text-white w-full mt-8 py-6 text-lg rounded-xl shadow-lg shadow-trust-blue/20">
                Zakažite konsultacije
              </Button>
            </div>
          </motion.div>
        )}
      </header>

      {/* 2. Hero Section - More Effective & Readable */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-ice-white">
        {/* Abstract Background Shapes - More Subtle */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none opacity-60" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-gray-100 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none opacity-60" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Content - Stronger Copy */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10 max-w-xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-silver shadow-sm text-navy text-xs font-bold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-trust-blue animate-pulse"/>
                Digital Accounting & Advisory
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-navy tracking-tight font-heading">
                Vaš biznis. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-trust-blue to-blue-500">Naš sistem.</span> <br/>
                Bez granica.
              </h1>
              
              <p className="text-lg md:text-xl text-graphite leading-relaxed font-light border-l-4 border-trust-blue pl-6">
                Kompletna knjigovodstvena, HR i poreska podrška na <strong>srpskom, engleskom i ruskom jeziku</strong>. Koristimo TiM ERP i SEF API za automatizovano poslovanje bez papira.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <Button className="bg-navy hover:bg-navy-light text-white text-lg px-10 py-7 rounded-2xl transition-all hover:scale-105 shadow-xl shadow-navy/20">
                  Zakažite sastanak
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white border-silver text-navy hover:bg-ice-white hover:border-trust-blue text-lg px-10 py-7 rounded-2xl transition-all hover:scale-105 shadow-sm"
                  onClick={() => scrollToSection("usluge")}
                >
                  Naše usluge
                </Button>
              </div>
            </motion.div>

            {/* Right Image - Floating Glass Effect */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-navy/10 border-8 border-white group">
                <img 
                  src={heroImg}
                  alt="Professional Accountant" 
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                />
                
                {/* Floating Elements - Updated context */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-white/50 max-w-[240px]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 rounded-full text-trust-blue">
                      <Globe size={18} />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-navy block">Međunarodna podrška</span>
                      <span className="text-[10px] uppercase font-bold text-trust-blue">SRB • ENG • RUS</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Trust Bar - Cleaner */}
      <div className="bg-white border-y border-silver/40 py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-center gap-8 md:gap-20 items-center">
             {[
               { icon: ShieldCheck, text: "ERP Integracija" },
               { icon: FileText, text: "SEF API Povezivanje" },
               { icon: Users, text: "Advokat u timu" },
               { icon: Server, text: "Digitalna Arhiva" }
             ].map((item, idx) => (
               <div key={idx} className="flex items-center gap-4 group opacity-70 hover:opacity-100 transition-opacity cursor-default">
                 <div className="p-2.5 bg-ice-white rounded-xl text-trust-blue group-hover:bg-trust-blue group-hover:text-white transition-colors">
                   <item.icon className="w-5 h-5" />
                 </div>
                 <span className="font-heading font-semibold text-navy text-sm md:text-base">{item.text}</span>
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* 4. Naše Usluge - Detailed & Updated */}
      <section id="usluge" className="py-32 bg-ice-white relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-navy">Sveobuhvatna podrška</h2>
              <p className="text-lg text-graphite">Naš tim stručnjaka pokriva sve aspekte vašeg poslovanja, od dnevnog knjiženja do kompleksnih poreskih bilansa i likvidacija.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: Calculator, 
                title: "Finansijsko Knjigovodstvo", 
                items: ["Knjiženje dokumentacije", "Obračun PDV-a", "Evidencija osnovnih sredstava", "Završni računi"]
              },
              { 
                icon: PieChart, 
                title: "Poresko Savetovanje", 
                items: ["Poreski bilans", "Transferne cene", "Optimizacija poreza", "Amortizacija"]
              },
              { 
                icon: Users, 
                title: "HR i Obračuni", 
                items: ["Obračun zarada", "Prijava i odjava radnika", "Ugovori o radu", "Kadrovska evidencija"]
              },
              { 
                icon: Server, 
                title: "TiM ERP Sistem", 
                items: ["Elektronska arhiva", "Automatski uvoz izvoda (XML)", "Sinhronizacija podataka", "Povezivanje sa SEF-om"]
              },
              { 
                icon: Scale, 
                title: "Pravna Podrška", 
                items: ["Osnivanje preduzeća", "Likvidacija firmi", "Statusne promene", "Pravni saveti"]
              },
              { 
                icon: Truck, 
                title: "Logistika", 
                items: ["Kurir za fiskalne račune", "Elektronska razmena", "Bez dolaska u agenciju", "Online uvid"]
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-3xl border border-silver/50 hover:border-trust-blue/30 bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-ice-white rounded-2xl border border-silver/50 text-navy flex items-center justify-center mb-8 group-hover:bg-trust-blue group-hover:text-white group-hover:border-trust-blue transition-all shadow-sm">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-6 font-heading text-navy">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-graphite">
                      <div className="w-1.5 h-1.5 rounded-full bg-trust-blue mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Za koga radimo (Persona Tiles) */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-navy">Prilagođeni vašem uspehu</h2>
            <p className="text-lg text-graphite">Razumemo specifične potrebe različitih profila lidera i pružamo tačno ono što vama treba.</p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Menadžer",
                subtitle: "Kome treba red",
                desc: "Preciznost i uredna dokumentacija bez haosa.",
                img: personaManagerImg,
                accent: "bg-blue-500"
              },
              {
                title: "Preduzetnik",
                subtitle: "Koji želi rast",
                desc: "Fokus na razvoj biznisa, mi brinemo o brojevima.",
                img: personaEntrepreneurImg,
                accent: "bg-indigo-500"
              },
              {
                title: "Kontrolor",
                subtitle: "Sigurnost je ključ",
                desc: "Maksimalna pravna i poreska sigurnost.",
                img: personaControllerImg,
                accent: "bg-slate-500"
              }
            ].map((persona, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-silver/50"
              >
                <div className="h-72 overflow-hidden relative">
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors duration-500 z-10" />
                  <img 
                    src={persona.img} 
                    alt={persona.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-10 relative">
                   <div className={`absolute top-0 right-10 -translate-y-1/2 w-12 h-12 ${persona.accent} text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                     <ArrowRight size={20} />
                   </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-trust-blue mb-2">{persona.title}</div>
                  <h3 className="text-2xl font-bold mb-4 text-navy font-heading">{persona.subtitle}</h3>
                  <p className="text-graphite leading-relaxed">{persona.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. Kako Radimo - Improved Layout */}
      <section id="kako-radimo" className="py-32 bg-ice-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-12">
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-navy">Vaš put do <br/>urednog poslovanja</h2>
                <p className="text-lg text-graphite">Jednostavan i transparentan proces saradnje u 4 koraka.</p>
              </div>

              <div className="space-y-6">
                {[
                  { num: "01", title: "Analiza", desc: "Skeniramo vaše trenutno stanje i identifikujemo rizike." },
                  { num: "02", title: "Postavljanje sistema", desc: "Implementiramo digitalne alate i procese." },
                  { num: "03", title: "Mesečna obrada", desc: "Redovno knjiženje i izveštavanje bez kašnjenja." },
                  { num: "04", title: "Poreska sigurnost", desc: "Kontinuirano praćenje propisa i savetovanje." }
                ].map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-8 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all cursor-default group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white text-navy font-heading font-bold text-lg border border-silver flex items-center justify-center group-hover:bg-trust-blue group-hover:text-white group-hover:border-trust-blue transition-colors">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 font-heading text-navy">{step.title}</h4>
                      <p className="text-graphite">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl"
              >
                <img 
                  src={processImg} 
                  alt="Process Analysis" 
                  className="w-full h-full object-cover relative z-10"
                />
                <div className="absolute inset-0 bg-navy/20 z-20 mix-blend-multiply" />
                <div className="absolute bottom-10 left-10 z-30 bg-white/90 backdrop-blur p-6 rounded-2xl max-w-xs shadow-lg">
                  <div className="text-4xl font-bold text-trust-blue font-heading mb-2">API</div>
                  <div className="text-sm font-bold text-navy uppercase tracking-wider">SEF & E-Banking Integracija</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Zašto nam veruju */}
      <section className="py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
           <img src={trustImg} className="w-full h-full object-cover" alt="Office Background" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Stabilnost na koju <br/>možete da računate</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "ERP i Elektronska razmena", desc: "Potpuna integracija sa vašim sistemima." },
              { title: "Advokat u timu", desc: "Interna pravna podrška za sve nedoumice." },
              { title: "Stabilni procesi", desc: "Standardizovane procedure koje ne zavise od pojedinca." },
              { title: "Transparentni rokovi", desc: "Uvek znate kada su vaše obaveze završene." }
            ].map((pillar, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors group">
                <CheckCircle2 className="w-10 h-10 text-trust-blue mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-4 font-heading">{pillar.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Cene i Paketi - Highlighted */}
      <section id="cene" className="py-32 bg-ice-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden relative border border-silver/50 hover:shadow-3xl transition-shadow duration-500">
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-trust-blue to-blue-400" />
              
              <div className="p-12 text-center border-b border-silver/30">
                <h3 className="text-3xl font-bold text-navy mb-3 font-heading">Standardni Paket</h3>
                <div className="text-graphite font-medium mb-8">Sve što je potrebno maloj firmi</div>
                <div className="text-5xl font-bold text-navy mb-2 tracking-tight font-heading">
                  200€ <span className="text-lg text-graphite font-normal align-middle">/ mesečno</span>
                </div>
                <div className="text-xs text-trust-blue font-bold uppercase tracking-wider mt-4">Početna cena</div>
              </div>
              
              <div className="p-12 bg-gray-50/50">
                <ul className="space-y-5 mb-10">
                  {[
                    "Vođenje glavne knjige",
                    "Obračun PDV-a",
                    "Obračun zarada (do 5 zaposlenih)",
                    "Završni račun",
                    "Poresko savetovanje (2h mesečno)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-navy font-medium">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={14} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-navy hover:bg-navy-light text-white py-7 rounded-xl text-lg font-bold shadow-lg shadow-navy/20 transition-all hover:scale-[1.02]">
                  Zatražite ponudu
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ - Cleaner Accordion */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <h2 className="text-4xl font-bold mb-16 text-center font-heading text-navy">Česta pitanja</h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: "Da li radite sa paušalcima?", a: "Da, imamo posebne pakete prilagođene paušalnim agencijama koji uključuju test samostalnosti." },
              { q: "Kako funkcioniše prelazak od drugog knjigovođe?", a: "Mi preuzimamo kompletnu komunikaciju i prenos dokumentacije. Vaše je samo da potpišete ovlašćenje." },
              { q: "Da li koristite online knjigovodstvo?", a: "Da, koristimo savremene cloud alate i omogućavamo vam uvid u vaše finansije u realnom vremenu." },
              { q: "Šta ako imam inspekciju?", a: "Naš tim, uključujući pravnu podršku, je uz vas tokom celog procesa kontrole." }
            ].map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-silver/50 rounded-2xl px-6 bg-gray-50/30 hover:bg-white transition-colors">
                <AccordionTrigger className="text-navy hover:text-trust-blue text-left font-bold py-6 text-lg hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-graphite leading-relaxed pb-6 text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 10. Kontakt - Modern Form */}
      <section id="kontakt" className="py-32 bg-ice-white border-t border-silver/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-bold mb-6 font-heading text-navy">Kontaktirajte nas</h2>
              <p className="text-graphite mb-12 text-lg">Zakažite sastanak ili nam pošaljite upit. Odgovaramo u roku od 24h.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy uppercase tracking-wider">Ime i Prezime</label>
                    <Input className="bg-white border-silver focus:border-trust-blue rounded-xl h-14 px-5 text-base shadow-sm" placeholder="Petar Petrović" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy uppercase tracking-wider">Email</label>
                    <Input className="bg-white border-silver focus:border-trust-blue rounded-xl h-14 px-5 text-base shadow-sm" placeholder="petar@firma.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy uppercase tracking-wider">Firma</label>
                  <Input className="bg-white border-silver focus:border-trust-blue rounded-xl h-14 px-5 text-base shadow-sm" placeholder="Naziv vaše kompanije" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy uppercase tracking-wider">Poruka</label>
                  <Textarea className="bg-white border-silver focus:border-trust-blue rounded-xl min-h-[180px] p-5 text-base shadow-sm" placeholder="Kako možemo da vam pomognemo?" />
                </div>
                <Button className="bg-trust-blue hover:bg-trust-blue-light text-white px-10 py-7 rounded-xl w-full md:w-auto text-lg font-bold shadow-lg shadow-trust-blue/20">
                  Pošaljite poruku
                </Button>
              </form>
            </div>

            <div className="bg-navy rounded-[2.5rem] text-white p-12 lg:p-20 space-y-12 shadow-2xl relative overflow-hidden">
               {/* Decorative circle */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-trust-blue rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-4 font-heading">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <MapPin className="text-trust-blue" />
                  </div>
                   Lokacije
                </h3>
                <div className="space-y-4 text-gray-300 pl-16">
                  <p>Bulevar Kralja Aleksandra 123<br/>11000 Beograd</p>
                  <p>Jurija Gagarina 45<br/>11070 Novi Beograd</p>
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-4 font-heading">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Phone className="text-trust-blue" />
                  </div>
                   Telefoni
                </h3>
                <div className="space-y-4 text-gray-300 pl-16">
                  <p>+381 11 123 4567</p>
                  <p>+381 64 123 4567</p>
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-4 font-heading">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Mail className="text-trust-blue" />
                  </div>
                   Email
                </h3>
                <div className="space-y-4 text-gray-300 pl-16">
                  <p>kontakt@mastermind.rs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Footer */}
      <footer className="bg-white border-t border-silver py-16 text-center md:text-left">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-navy font-heading font-bold text-3xl tracking-tighter">
              MASTERMIN<span className="text-trust-blue">d</span>
            </div>
            <div className="text-graphite text-sm font-medium">
              &copy; {new Date().getFullYear()} MasterMind Knjigovodstvo. Sva prava zadržana.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MasterMindLanding;
