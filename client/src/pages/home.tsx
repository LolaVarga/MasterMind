import { FC, useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  Scale
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
      setScrolled(window.scrollY > 50);
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-ice-white text-navy font-sans selection:bg-trust-blue selection:text-white">
      {/* 1. Sticky Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-navy/95 backdrop-blur-md py-4 shadow-lg" : "bg-navy py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="text-white font-bold text-2xl tracking-tight cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            MASTERMIN<span className="text-trust-blue">d</span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            {["Usluge", "Kako radimo", "Cene", "Kontakt"].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                className="hover:text-white transition-colors uppercase tracking-wider text-xs"
              >
                {item}
              </button>
            ))}
            <Button className="bg-trust-blue hover:bg-trust-blue/90 text-white rounded-none px-6 py-2 transition-transform hover:-translate-y-0.5">
              Zakažite konsultacije
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Panel */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="md:hidden bg-navy border-t border-white/10 absolute w-full left-0 top-full overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-4 text-white">
              {["Usluge", "Kako radimo", "Cene", "Kontakt"].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                  className="text-left py-4 border-b border-white/10 text-lg font-medium"
                >
                  {item}
                </button>
              ))}
              <Button className="bg-trust-blue hover:bg-trust-blue/90 text-white w-full mt-4 py-6 text-lg rounded-none">
                Zakažite konsultacije
              </Button>
            </div>
          </motion.div>
        )}
      </header>

      {/* 2. Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-ice-white via-white to-ice-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8 max-w-xl"
            >
              <div className="inline-block px-3 py-1 bg-trust-blue/10 text-trust-blue text-xs font-bold tracking-widest uppercase mb-4 border-l-2 border-trust-blue">
                Moderno Poslovno Knjigovodstvo
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-navy tracking-tight">
                Knjigovodstvo, porezi i likvidacije <span className="text-trust-blue relative">bez stresa.</span>
              </h1>
              <p className="text-lg text-graphite leading-relaxed">
                Digitalno knjigovodstvo, potpuna pravna usklađenost, ERP integracija i SEF API povezivanje za moderne firme koje nemaju vremena za greške.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-trust-blue hover:bg-trust-blue/90 text-white text-lg px-8 py-6 rounded-none h-auto transition-transform hover:-translate-y-1 shadow-lg shadow-trust-blue/20">
                  Zakažite konsultacije
                </Button>
                <Button 
                  variant="outline" 
                  className="border-navy text-navy hover:bg-navy hover:text-white text-lg px-8 py-6 rounded-none h-auto transition-all"
                  onClick={() => scrollToSection("usluge")}
                >
                  Pogledajte usluge
                </Button>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/20 to-transparent z-10 mix-blend-multiply pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-silver/30 z-0" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-trust-blue/10 z-0" />
              <img 
                src={heroImg}
                alt="Professional Accountant" 
                className="relative z-10 w-full h-full object-cover shadow-2xl grayscale-[20%]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Trust Bar */}
      <div className="bg-white border-y border-silver/50 py-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center text-graphite/80 font-medium text-sm md:text-base">
             <div className="flex items-center gap-3 group hover:text-trust-blue transition-colors cursor-default">
               <ShieldCheck className="w-5 h-5 text-trust-blue group-hover:scale-110 transition-transform" />
               <span>ERP Integracija</span>
             </div>
             <div className="h-4 w-px bg-silver hidden md:block" />
             <div className="flex items-center gap-3 group hover:text-trust-blue transition-colors cursor-default">
               <FileText className="w-5 h-5 text-trust-blue group-hover:scale-110 transition-transform" />
               <span>SEF API Povezivanje</span>
             </div>
             <div className="h-4 w-px bg-silver hidden md:block" />
             <div className="flex items-center gap-3 group hover:text-trust-blue transition-colors cursor-default">
               <Users className="w-5 h-5 text-trust-blue group-hover:scale-110 transition-transform" />
               <span>Advokat u timu</span>
             </div>
             <div className="h-4 w-px bg-silver hidden md:block" />
             <div className="flex items-center gap-3 group hover:text-trust-blue transition-colors cursor-default">
               <MapPin className="w-5 h-5 text-trust-blue group-hover:scale-110 transition-transform" />
               <span>Dve lokacije u Beogradu</span>
             </div>
          </div>
        </div>
      </div>

      {/* 4. Za koga radimo (Persona Tiles) */}
      <section className="py-24 bg-ice-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Menadžer kome treba red",
                desc: "Za one koji cene preciznost i urednu dokumentaciju bez haosa.",
                img: personaManagerImg,
                role: "Organizacija"
              },
              {
                title: "Preduzetnik koji raste",
                desc: "Fokusirajte se na razvoj biznisa dok mi brinemo o brojevima.",
                img: personaEntrepreneurImg,
                role: "Razvoj"
              },
              {
                title: "Finansijski kontrolor",
                desc: "Maksimalna pravna i poreska sigurnost za vašu kompaniju.",
                img: personaControllerImg,
                role: "Sigurnost"
              }
            ].map((persona, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="group relative bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-silver/30"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors z-10" />
                  <img 
                    src={persona.img} 
                    alt={persona.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-widest text-navy">
                    {persona.role}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3 text-navy">{persona.title}</h3>
                  <p className="text-graphite text-sm leading-relaxed mb-6">{persona.desc}</p>
                  <div className="flex items-center text-trust-blue font-semibold text-sm group-hover:translate-x-2 transition-transform cursor-pointer">
                    Saznajte više <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Naše Usluge */}
      <section id="usluge" className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sveobuhvatna podrška</h2>
            <p className="text-graphite">Naš tim stručnjaka pokriva sve aspekte vašeg poslovanja, od dnevnog knjiženja do kompleksnih pravnih pitanja.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Calculator, title: "Knjigovodstvo", desc: "Kompletno vođenje poslovnih knjiga u skladu sa zakonom." },
              { icon: PieChart, title: "PDV i Porezi", desc: "Optimizacija poreza i pravovremene prijave." },
              { icon: Users, title: "HR i Obračuni", desc: "Obračun zarada, bolovanja i kadrovska administracija." },
              { icon: Scale, title: "Pravna Podrška", desc: "Savetovanje, osnivanje i likvidacija firmi." }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 border border-silver/50 hover:border-trust-blue/30 bg-ice-white/30 hover:bg-white transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-trust-blue/10 text-trust-blue flex items-center justify-center mb-6 group-hover:bg-trust-blue group-hover:text-white transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-graphite leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Kako Radimo (Timeline) */}
      <section id="kako-radimo" className="py-24 bg-ice-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-12">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Vaš put do urednog poslovanja</h2>
                <p className="text-graphite">Jednostavan i transparentan proces saradnje.</p>
              </div>

              <div className="space-y-8 relative">
                <div className="absolute left-6 top-4 bottom-4 w-px bg-silver/50 hidden md:block" />
                
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
                    transition={{ delay: idx * 0.2 }}
                    className="flex gap-6 relative bg-white p-6 shadow-sm border border-silver/30 md:bg-transparent md:shadow-none md:border-none md:p-0"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm shadow-lg z-10 border-4 border-ice-white">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                      <p className="text-graphite text-sm">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[600px] w-full bg-navy p-4"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-trust-blue/20 -translate-y-4 translate-x-4" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-silver/10 translate-y-4 -translate-x-4" />
                <img 
                  src={processImg} 
                  alt="Process Analysis" 
                  className="w-full h-full object-cover relative z-10 grayscale-[30%]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Zašto nam veruju */}
      <section className="py-24 bg-navy text-white relative">
        <div className="absolute inset-0 opacity-10">
           <img src={trustImg} className="w-full h-full object-cover" alt="Office Background" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stabilnost na koju možete da računate</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "ERP i Elektronska razmena", desc: "Potpuna integracija sa vašim sistemima." },
              { title: "Advokat u timu", desc: "Interna pravna podrška za sve nedoumice." },
              { title: "Stabilni procesi", desc: "Standardizovane procedure koje ne zavise od pojedinca." },
              { title: "Transparentni rokovi", desc: "Uvek znate kada su vaše obaveze završene." }
            ].map((pillar, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <CheckCircle2 className="w-8 h-8 text-trust-blue mb-6" />
                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Cene i Paketi */}
      <section id="cene" className="py-24 bg-ice-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-lg mx-auto">
            <div className="bg-white border border-silver shadow-xl overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-2 bg-trust-blue" />
              <div className="p-10 text-center border-b border-silver/50">
                <h3 className="text-2xl font-bold text-navy mb-2">Standardni Paket</h3>
                <div className="text-graphite text-sm mb-6">Sve što je potrebno maloj firmi</div>
                <div className="text-4xl font-bold text-trust-blue mb-1">
                  od 200€ <span className="text-lg text-graphite font-normal">/ mesečno</span>
                </div>
              </div>
              <div className="p-10 bg-ice-white/30">
                <ul className="space-y-4 mb-8">
                  {[
                    "Vođenje glavne knjige",
                    "Obračun PDV-a",
                    "Obračun zarada (do 5 zaposlenih)",
                    "Završni račun",
                    "Poresko savetovanje (2h mesečno)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-graphite text-sm">
                      <CheckCircle2 className="w-5 h-5 text-trust-blue flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-trust-blue hover:bg-trust-blue/90 text-white py-6 rounded-none text-lg">
                  Zatražite ponudu
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Česta pitanja</h2>
          
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "Da li radite sa paušalcima?", a: "Da, imamo posebne pakete prilagođene paušalnim agencijama koji uključuju test samostalnosti." },
              { q: "Kako funkcioniše prelazak od drugog knjigovođe?", a: "Mi preuzimamo kompletnu komunikaciju i prenos dokumentacije. Vaše je samo da potpišete ovlašćenje." },
              { q: "Da li koristite online knjigovodstvo?", a: "Da, koristimo savremene cloud alate i omogućavamo vam uvid u vaše finansije u realnom vremenu." },
              { q: "Šta ako imam inspekciju?", a: "Naš tim, uključujući pravnu podršku, je uz vas tokom celog procesa kontrole." }
            ].map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-silver">
                <AccordionTrigger className="text-navy hover:text-trust-blue text-left font-medium py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-graphite leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 10. Kontakt */}
      <section id="kontakt" className="py-24 bg-ice-white border-t border-silver">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Kontaktirajte nas</h2>
              <p className="text-graphite mb-10">Zakažite sastanak ili nam pošaljite upit. Odgovaramo u roku od 24h.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-navy">Ime i Prezime</label>
                    <Input className="bg-white border-silver focus:border-trust-blue rounded-none h-12" placeholder="Petar Petrović" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-navy">Email</label>
                    <Input className="bg-white border-silver focus:border-trust-blue rounded-none h-12" placeholder="petar@firma.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-navy">Firma</label>
                  <Input className="bg-white border-silver focus:border-trust-blue rounded-none h-12" placeholder="Naziv vaše kompanije" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-navy">Poruka</label>
                  <Textarea className="bg-white border-silver focus:border-trust-blue rounded-none min-h-[150px]" placeholder="Kako možemo da vam pomognemo?" />
                </div>
                <Button className="bg-trust-blue hover:bg-trust-blue/90 text-white px-8 py-6 rounded-none w-full md:w-auto">
                  Pošaljite poruku
                </Button>
              </form>
            </div>

            <div className="bg-navy text-white p-10 lg:p-16 space-y-12">
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <MapPin className="text-trust-blue" /> Lokacije
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p>Bulevar Kralja Aleksandra 123<br/>11000 Beograd</p>
                  <p>Jurija Gagarina 45<br/>11070 Novi Beograd</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Phone className="text-trust-blue" /> Telefoni
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p>+381 11 123 4567</p>
                  <p>+381 64 123 4567</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Mail className="text-trust-blue" /> Email
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p>kontakt@mastermind.rs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Footer */}
      <footer className="bg-navy border-t border-white/10 py-12 text-center md:text-left">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-white font-bold text-xl tracking-tight">
              MASTERMIN<span className="text-trust-blue">d</span>
            </div>
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} MasterMind Knjigovodstvo. Sva prava zadržana.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MasterMindLanding;
