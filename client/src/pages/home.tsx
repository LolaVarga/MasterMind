import { FC, useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  ShieldCheck,
  FileText,
  Calculator,
  Users,
  MapPin,
  Phone,
  Mail,
  PieChart,
  Scale,
  Truck,
  Server
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
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

// Assets
import heroImg from "@assets/generated_images/professional_reviewing_documents_at_a_clean_desk_with_cool_lighting..png";
import personaManagerImg from "@assets/generated_images/hands_aligning_documents_on_a_tidy_desk..png";
import personaEntrepreneurImg from "@assets/generated_images/professional_working_on_laptop_with_dashboard..png";
import personaControllerImg from "@assets/generated_images/signing_legal_documents_with_premium_pen..png";
import processImg from "@assets/generated_images/professional_analyzing_financial_data_on_tablet..png";
import trustImg from "@assets/generated_images/modern_clean_office_space_with_navy_and_white_tones..png";

const MasterMindLanding: FC = () => {
  const { t } = useTranslation();
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
          className={`font-heading font-bold text-2xl tracking-tighter cursor-pointer transition-colors flex items-center ${scrolled ? 'text-white' : 'text-navy'}`} 
          onClick={() => window.scrollTo(0,0)}
        >
          MASTERMIN<span className="text-trust-blue">d</span>
        </div>
          
          {/* Desktop Nav */}
          <nav className={`hidden md:flex items-center gap-8 text-sm font-medium ${scrolled ? 'text-gray-300' : 'text-navy/80'}`}>
            {[
              { key: "services", label: t("header.services") },
              { key: "kako-radimo", label: t("header.howWeWork") },
              { key: "cene", label: t("header.pricing") },
              { key: "kontakt", label: t("header.contact") }
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className={`hover:text-trust-blue transition-colors font-heading uppercase tracking-widest text-xs font-semibold ${scrolled ? 'hover:text-white' : ''}`}
              >
                {item.label}
              </button>
            ))}

            {/* Language Selector */}
            <LanguageSwitcher scrolled={scrolled} />

            <Button
              onClick={() => scrollToSection("kontakt")}
              className="bg-trust-blue hover:bg-trust-blue-light text-white rounded-full px-8 py-2.5 shadow-md shadow-trust-blue/20 hover:shadow-lg hover:shadow-trust-blue/30 transition-all hover:-translate-y-0.5 cursor-pointer font-bold"
            >
              {t("header.bookConsultation")}
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
               <LanguageSwitcher scrolled={true} className="w-fit" />
              {[
                { key: "services", label: t("header.services") },
                { key: "kako-radimo", label: t("header.howWeWork") },
                { key: "cene", label: t("header.pricing") },
                { key: "kontakt", label: t("header.contact") }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className="text-left py-4 border-b border-white/10 text-2xl font-heading font-bold hover:text-trust-blue transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("kontakt")}
                className="bg-trust-blue hover:bg-trust-blue-light text-white w-full mt-8 py-6 text-lg rounded-xl shadow-md shadow-trust-blue/20 hover:shadow-lg hover:shadow-trust-blue/30 cursor-pointer font-bold transition-all hover:scale-[1.02]"
              >
                {t("header.bookConsultation")}
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
              <Badge variant="outline" className="border-silver bg-white text-navy text-xs font-bold tracking-widest uppercase px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-trust-blue animate-pulse mr-2"/>
                {t("hero.badge")}
              </Badge>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-navy tracking-tight font-heading">
                {t("hero.title")} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-trust-blue to-blue-500">{t("hero.titleHighlight")}</span> <br/>
                {t("hero.titleEnd")}
              </h1>

              <p className="text-lg md:text-xl text-graphite leading-relaxed font-light border-l-4 border-trust-blue pl-6">
                {t("hero.description")}
              </p>

              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <Button
                  onClick={() => scrollToSection("kontakt")}
                  className="bg-trust-blue hover:bg-trust-blue-light text-white text-lg px-10 py-7 rounded-2xl transition-all hover:scale-105 shadow-md shadow-trust-blue/20 hover:shadow-lg hover:shadow-trust-blue/30 cursor-pointer font-bold"
                  size="lg"
                >
                  {t("hero.scheduleButton")}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("services")}
                  className="bg-white text-navy hover:bg-ice-white border-silver hover:border-trust-blue text-lg px-10 py-7 rounded-2xl transition-all hover:scale-105 shadow-md shadow-black/10 font-bold"
                  size="lg"
                >
                  {t("hero.servicesButton")}
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
               { icon: ShieldCheck, text: t("trustBar.erpIntegration") },
               { icon: FileText, text: t("trustBar.sefApi") },
               { icon: Users, text: t("trustBar.lawyer") },
               { icon: Server, text: t("trustBar.digitalArchive") }
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
      <section id="services" className="py-32 bg-ice-white relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-navy">{t("services.title")}</h2>
              <p className="text-lg text-graphite">{t("services.description")}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Calculator,
                title: t("services.accounting.title"),
                items: t("services.accounting.items", { returnObjects: true })
              },
              {
                icon: PieChart,
                title: t("services.tax.title"),
                items: t("services.tax.items", { returnObjects: true })
              },
              {
                icon: Users,
                title: t("services.hr.title"),
                items: t("services.hr.items", { returnObjects: true })
              },
              {
                icon: Server,
                title: t("services.erp.title"),
                items: t("services.erp.items", { returnObjects: true })
              },
              {
                icon: Scale,
                title: t("services.legal.title"),
                items: t("services.legal.items", { returnObjects: true })
              },
              {
                icon: Truck,
                title: t("services.logistics.title"),
                items: t("services.logistics.items", { returnObjects: true })
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
                  {(Array.isArray(service.items) ? service.items : []).map((item: string, i: number) => (
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-navy">{t("personas.title")}</h2>
            <p className="text-lg text-graphite">{t("personas.description")}</p>
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
                title: t("personas.manager.title"),
                subtitle: t("personas.manager.subtitle"),
                desc: t("personas.manager.description"),
                img: personaManagerImg,
                accent: "bg-blue-500"
              },
              {
                title: t("personas.entrepreneur.title"),
                subtitle: t("personas.entrepreneur.subtitle"),
                desc: t("personas.entrepreneur.description"),
                img: personaEntrepreneurImg,
                accent: "bg-indigo-500"
              },
              {
                title: t("personas.controller.title"),
                subtitle: t("personas.controller.subtitle"),
                desc: t("personas.controller.description"),
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
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-navy">{t("process.title")}</h2>
                <p className="text-lg text-graphite">{t("process.description")}</p>
              </div>

              <div className="space-y-6">
                {[
                  { num: "01", title: t("process.step1.title"), desc: t("process.step1.description") },
                  { num: "02", title: t("process.step2.title"), desc: t("process.step2.description") },
                  { num: "03", title: t("process.step3.title"), desc: t("process.step3.description") },
                  { num: "04", title: t("process.step4.title"), desc: t("process.step4.description") }
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
                  <div className="text-4xl font-bold text-trust-blue font-heading mb-2">{t("process.apiLabel")}</div>
                  <div className="text-sm font-bold text-navy uppercase tracking-wider">{t("process.apiDescription")}</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Zašto nam veruju */}
      <section className="py-8 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
           <img src={trustImg} className="w-full h-full object-cover" alt="Office Background" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: t("trust.pillar1.title"), desc: t("trust.pillar1.description") },
              { title: t("trust.pillar2.title"), desc: t("trust.pillar2.description") },
              { title: t("trust.pillar3.title"), desc: t("trust.pillar3.description") },
              { title: t("trust.pillar4.title"), desc: t("trust.pillar4.description") }
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 border border-white/20 p-8 md:p-10 rounded-3xl backdrop-blur-md hover:bg-white/15 transition-all duration-300 group shadow-lg hover:shadow-2xl hover:shadow-trust-blue/20"
              >
                <div className="p-3 bg-trust-blue/20 rounded-2xl w-fit mb-8 group-hover:bg-trust-blue/30 transition-colors">
                  <CheckCircle2 className="w-8 h-8 text-trust-blue group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-4 font-heading text-white leading-snug">{pillar.title}</h3>
                <p className="text-gray-200 text-base leading-relaxed">{pillar.desc}</p>
              </motion.div>
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
                <h3 className="text-3xl font-bold text-navy mb-3 font-heading">{t("pricing.title")}</h3>
                <div className="text-graphite font-medium mb-8">{t("pricing.subtitle")}</div>
                <div className="text-5xl font-bold text-navy mb-2 tracking-tight font-heading">
                  {t("pricing.price")} <span className="text-lg text-graphite font-normal align-middle">{t("pricing.period")}</span>
                </div>
                <div className="text-xs text-trust-blue font-bold uppercase tracking-wider mt-4">{t("pricing.badge")}</div>
              </div>

              <div className="p-12 bg-gray-50/50">
                <ul className="space-y-5 mb-10">
                  {(t("pricing.features", { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-navy font-medium">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={14} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => scrollToSection("kontakt")}
                  className="w-full bg-trust-blue hover:bg-trust-blue-light text-white py-7 rounded-xl text-lg font-bold shadow-md shadow-trust-blue/20 hover:shadow-lg hover:shadow-trust-blue/30 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  {t("pricing.button")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ - Cleaner Accordion */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <h2 className="text-4xl font-bold mb-16 text-center font-heading text-navy">{t("faq.title")}</h2>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: t("faq.q1"), a: t("faq.a1") },
              { q: t("faq.q2"), a: t("faq.a2") },
              { q: t("faq.q3"), a: t("faq.a3") },
              { q: t("faq.q4"), a: t("faq.a4") }
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

      {/* 10. Kontakt - Modern with shadcn Components */}
      <section id="kontakt" className="py-32 bg-gradient-to-b from-ice-white via-blue-50/30 to-ice-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-bl from-trust-blue/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <Badge variant="outline" className="mb-6 border-trust-blue/30 text-trust-blue">
                <span className="w-2 h-2 rounded-full bg-trust-blue mr-2 animate-pulse"/>
                {t("contact.badge")}
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 font-heading text-navy">{t("contact.title")}</h2>
              <p className="text-lg text-graphite max-w-2xl mx-auto">{t("contact.description")}</p>
            </motion.div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { icon: MapPin, title: t("contact.location"), items: [t("contact.address1"), t("contact.address2")] },
                { icon: Phone, title: t("contact.phone"), items: [t("contact.phone1"), t("contact.phone2")] },
                { icon: Mail, title: t("contact.email"), items: [t("contact.emailAddress")] }
              ].map((contact, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="border-white/40 bg-white/40 backdrop-blur-xl hover:bg-white/50 hover:border-trust-blue/40 transition-all h-full group">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-gradient-to-br from-trust-blue/20 to-blue-400/10 rounded-2xl text-trust-blue group-hover:from-trust-blue/30 group-hover:to-blue-400/20 transition-all">
                          <contact.icon size={24} />
                        </div>
                        <CardTitle className="text-navy">{contact.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {contact.items.map((item, i) => (
                          <p key={i} className="text-graphite font-medium">{item}</p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Contact Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group"
            >
              <Card className="border border-white/80 bg-gradient-to-br from-white/70 via-white/60 to-white/40 backdrop-blur-3xl shadow-2xl shadow-trust-blue/15 hover:shadow-3xl hover:shadow-trust-blue/25 transition-all duration-500 hover:-translate-y-2 rounded-3xl overflow-hidden relative">
                {/* Shine effect on top */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="pb-8">
                  <CardTitle className="text-4xl font-bold text-navy font-heading">{t("contact.formTitle")}</CardTitle>
                  <p className="text-graphite mt-3 text-base font-medium">{t("contact.formSubtitle")}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-navy uppercase tracking-wider">{t("contact.nameLabel")}</label>
                        <Input
                          className="bg-white/70 border border-white/50 focus:border-trust-blue/80 focus:bg-white/90 rounded-xl h-12 px-4 text-base backdrop-blur-sm transition-all shadow-sm"
                          placeholder={t("contact.namePlaceholder")}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-navy uppercase tracking-wider">{t("contact.emailLabel")}</label>
                        <Input
                          className="bg-white/70 border border-white/50 focus:border-trust-blue/80 focus:bg-white/90 rounded-xl h-12 px-4 text-base backdrop-blur-sm transition-all shadow-sm"
                          placeholder={t("contact.emailPlaceholder")}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-navy uppercase tracking-wider">{t("contact.companyLabel")}</label>
                      <Input
                        className="bg-white/70 border border-white/50 focus:border-trust-blue/80 focus:bg-white/90 rounded-xl h-12 px-4 text-base backdrop-blur-sm transition-all shadow-sm"
                        placeholder={t("contact.companyPlaceholder")}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-navy uppercase tracking-wider">{t("contact.messageLabel")}</label>
                      <Textarea
                        className="bg-white/70 border border-white/50 focus:border-trust-blue/80 focus:bg-white/90 rounded-xl min-h-[140px] p-4 text-base backdrop-blur-sm transition-all resize-none shadow-sm"
                        placeholder={t("contact.messagePlaceholder")}
                      />
                    </div>
                    <div className="flex gap-4 pt-6">
                      <Button className="bg-trust-blue hover:bg-trust-blue-light text-white px-10 py-6 rounded-xl text-base font-bold shadow-md shadow-trust-blue/20 hover:shadow-lg hover:shadow-trust-blue/40 transition-all hover:scale-[1.02] cursor-pointer">
                        {t("contact.sendButton")}
                      </Button>
                      <Button
                        variant="outline"
                        className="border border-white/50 text-navy hover:bg-white/30 hover:border-trust-blue/50 px-10 py-6 rounded-xl text-base font-bold transition-all hover:scale-[1.02] bg-white/20"
                      >
                        {t("contact.cancelButton")}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
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
              {t("footer.copyright", { year: new Date().getFullYear() })}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MasterMindLanding;
