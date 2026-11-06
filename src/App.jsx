import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Menu, X, Phone, MessageCircle,
  ShieldCheck, FileSearch, FileText, ClipboardCheck, Send, Globe2,
  CheckCircle2, Clock3, MapPin, Mail, ChevronRight,
  CircleHelp, CreditCard, Landmark, RefreshCw, BadgeCheck, ExternalLink
} from "lucide-react";

/*
  SWAVIN SOLUTIONS
  Single-file React + Tailwind website.
  Replace /assets/logo.jpg with your supplied company logo.
  Credit-score animation is an illustrative visual only, not a promise of score improvement.
*/

const PHONE = "7989229455";
const WHATSAPP = "https://wa.me/917989229455?text=Hello%20Swavin%20Solutions%2C%20I%20would%20like%20help%20understanding%20my%20credit%20report.";
const INSTAGRAM = "https://www.instagram.com/swavinsolutions/";
const FACEBOOK = "https://www.facebook.com/p/Swavinsolutions-61591134884864/";

const navItems = [
  ["About", "about"],
  ["Services", "services"],
  ["How it works", "process"],
  ["NRI support", "nri"],
];

const photo = {
  report: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1100&q=85",
  discussion: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85",
  documents: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1100&q=85",
  laptop: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1100&q=85",
  support: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1100&q=85",
};

function Brand({ light = false }) {
  return (
    <a href="#home" className="flex shrink-0 items-center gap-3" aria-label="Swavin Solutions home">
      <img
        src="/assets/logo.jpg"
        alt="Swavin Solutions"
        className="h-12 w-12 rounded-full border border-blue-100 bg-white object-contain p-0.5 sm:h-14 sm:w-14"
        onError={(e) => { e.currentTarget.style.display = "none"; }}
      />
      <span className="leading-none">
        <span className={`block text-[17px] font-black tracking-[0.13em] sm:text-[19px] ${light ? "text-white" : "text-[#0b3478]"}`}>SWAVIN</span>
        <span className={`mt-1.5 block text-[9px] font-semibold tracking-[0.42em] ${light ? "text-blue-100" : "text-slate-500"}`}>SOLUTIONS</span>
      </span>
    </a>
  );
}

function SocialLinks({ light = false }) {
  return (
    <div className="flex items-center gap-2">
      <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram"
        className={`grid h-10 w-10 place-items-center rounded-full border transition hover:-translate-y-0.5 ${light ? "border-white/25 text-white hover:bg-white/10" : "border-slate-200 text-[#123d80] hover:border-red-200 hover:text-red-600"}`}>
        <svg viewBox="0 0 24 24" width="17" height="17" fill="none" aria-hidden="true">
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8"/>
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8"/>
          <circle cx="17.6" cy="6.8" r="1.1" fill="currentColor"/>
        </svg>
      </a>
      <a href={FACEBOOK} target="_blank" rel="noreferrer" aria-label="Facebook"
        className={`grid h-10 w-10 place-items-center rounded-full border transition hover:-translate-y-0.5 ${light ? "border-white/25 text-white hover:bg-white/10" : "border-slate-200 text-[#123d80] hover:border-red-200 hover:text-red-600"}`}>
        <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
          <path d="M13.4 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.2V13H10v8h3.4z"/>
        </svg>
      </a>
    </div>
  );
}

function ScoreGauge() {
  const reduceMotion = useReducedMotion();
  const [score, setScore] = useState(703);

  useEffect(() => {
    if (reduceMotion) {
      setScore(777);
      return;
    }
    let frame;
    let startTime;
    const duration = 2800;
    const tick = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setScore(Math.round(703 + (777 - 703) * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    const timer = window.setTimeout(() => {
      frame = requestAnimationFrame(tick);
    }, 350);
    return () => {
      window.clearTimeout(timer);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reduceMotion]);

  // A 300–900 semicircular scale: 300 at left, 600 at top, 900 at right.
  // Needle is drawn vertically and rotated around the centre pivot.
  const needleAngle = ((score - 600) / 600) * 180;

  return (
    <div className="relative mx-auto w-full max-w-[510px]">
      <motion.div
        initial={{ opacity: 0, y: 24, rotateX: 7 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: .85, ease: [0.2, 0.7, 0.2, 1] }}
        className="relative overflow-hidden rounded-[28px] border border-white bg-white p-5 shadow-[0_30px_85px_rgba(12,43,92,0.15)] sm:rounded-[34px] sm:p-7"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-blue-100/70 blur-3xl"/>
        <div className="pointer-events-none absolute -bottom-24 -left-20 h-52 w-52 rounded-full bg-red-100/60 blur-3xl"/>

        <div className="relative flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Your credit score</p>
            <h2 className="mt-1 text-lg font-extrabold tracking-tight text-[#12366f] sm:text-xl">Know where you stand</h2>
          </div>
          <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-wider text-[#16458f]">Sample view</span>
        </div>

        <div className="relative mx-auto mt-5 max-w-[390px]">
          <svg viewBox="0 0 420 225" className="block w-full" role="img" aria-label={`Illustrative credit score gauge showing ${score}`}>
            <defs>
              <filter id="needleShadow" x="-80%" y="-80%" width="260%" height="260%">
                <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#102b53" floodOpacity=".22"/>
              </filter>
            </defs>

            {/* Single thick segmented arc. The small gaps separate the four score bands. */}
            <path d="M 45 190 A 165 165 0 0 1 83.5 88.5" fill="none" stroke="#d92332" strokeWidth="25" strokeLinecap="butt"/>
            <path d="M 87 83 A 165 165 0 0 1 210 25" fill="none" stroke="#f19a24" strokeWidth="25" strokeLinecap="butt"/>
            <path d="M 210 25 A 165 165 0 0 1 333 83" fill="none" stroke="#b9c936" strokeWidth="25" strokeLinecap="butt"/>
            <path d="M 337 88.5 A 165 165 0 0 1 375 190" fill="none" stroke="#168b4d" strokeWidth="25" strokeLinecap="butt"/>

            {/* Tick marks at the four category boundaries. */}
            <g stroke="#ffffff" strokeWidth="3">
              <path d="M 75 112 L 96 124"/>
              <path d="M 210 25 L 210 51"/>
              <path d="M 324 112 L 345 124"/>
            </g>

            {/* Band labels are kept outside the coloured arc so they remain readable. */}
            <g fill="#53657d" fontSize="10" fontWeight="800" textAnchor="middle">
              <text x="63" y="155">POOR</text>
              <text x="145" y="53">AVERAGE</text>
              <text x="275" y="53">GOOD</text>
              <text x="357" y="155">EXCELLENT</text>
            </g>
            <g fill="#8290a3" fontSize="9" fontWeight="700" textAnchor="middle">
              <text x="63" y="168">300–550</text>
              <text x="145" y="66">550–650</text>
              <text x="275" y="66">650–750</text>
              <text x="357" y="168">750–900</text>
              <text x="37" y="210">300</text>
              <text x="383" y="210">900</text>
            </g>

            {/* Needle: pivot sits at the centre of the gauge baseline. */}
            <g transform={`rotate(${needleAngle} 210 190)`} filter="url(#needleShadow)">
              <path d="M 204 194 L 210 63 L 216 194 Q 210 199 204 194 Z" fill="#102b53"/>
              <circle cx="210" cy="190" r="12" fill="#102b53" stroke="#ffffff" strokeWidth="3.5"/>
              <circle cx="210" cy="190" r="4" fill="#dce8f8"/>
            </g>
          </svg>

          <div className="-mt-1 flex flex-col items-center text-center">
            <motion.div
              key={score}
              initial={{ opacity: .7, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[52px] font-black leading-none tracking-[-0.065em] text-[#12366f] tabular-nums sm:text-[60px]"
            >
              {score}
            </motion.div>
            <span className={`mt-1 text-[10px] font-black uppercase tracking-[0.24em] ${score >= 750 ? "text-emerald-700" : "text-amber-600"}`}>
              {score >= 750 ? "Excellent" : score >= 650 ? "Good" : score >= 550 ? "Average" : "Poor"}
            </span>
          </div>
        </div>

        <div className="relative mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3.5">
            <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Starting example</p>
            <p className="mt-1 text-2xl font-black text-slate-600">703</p>
            <p className="text-[10px] font-medium text-slate-500">Good range</p>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-3.5">
            <p className="text-[9px] font-bold uppercase tracking-wider text-emerald-700">Illustrative view</p>
            <p className="mt-1 text-2xl font-black text-emerald-800">777</p>
            <p className="text-[10px] font-medium text-emerald-700">Excellent range</p>
          </div>
        </div>

        <div className="relative mt-4 flex items-start gap-2 rounded-xl bg-blue-50 px-3.5 py-3 text-[10px] leading-relaxed text-blue-900">
          <CircleHelp size={15} className="mt-0.5 shrink-0"/>
          <p>Illustration only. Actual scores depend on credit history and lender-reported information. No score increase is promised.</p>
        </div>
      </motion.div>

      <motion.div
        animate={reduceMotion ? {} : { y: [0, -7, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-5 -right-1 flex items-center gap-2 rounded-2xl border border-white bg-white px-4 py-3 shadow-xl sm:-right-5"
      >
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-red-50 text-red-600"><ShieldCheck size={19}/></span>
        <span><b className="block text-xs text-[#12366f]">Guided support</b><small className="text-[10px] text-slate-500">One step at a time</small></span>
      </motion.div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, accent, description, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-[10px] font-black uppercase tracking-[0.24em] text-red-600">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-black leading-[1.08] tracking-[-0.045em] text-[#10366f] sm:text-4xl lg:text-5xl">
        {title} <span className="text-red-600">{accent}</span>
      </h2>
      {description && <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">{description}</p>}
    </div>
  );
}

const services = [
  { icon: FileSearch, title: "Credit report review", text: "Understand the details in your report and spot items that may need attention." },
  { icon: Clock3, title: "Overdue accounts", text: "Understand overdue entries and the steps you may need to discuss with the lender." },
  { icon: Landmark, title: "Written-off or settled accounts", text: "Get help understanding how these entries appear in your report." },
  { icon: ShieldCheck, title: "Unknown accounts", text: "Review accounts or enquiries you do not recognise and understand how to raise a concern." },
  { icon: RefreshCw, title: "Report corrections", text: "Get guidance on outdated or incorrect details and the dispute process." },
  { icon: ClipboardCheck, title: "Dispute support", text: "Get help preparing documents and following up with the concerned lender or bureau." },
];

const processSteps = [
  { no: "01", icon: MessageCircle, title: "Tell us what happened", text: "Share your concern and what you want to understand.", image: photo.discussion, imageAlt: "People discussing information around a table" },
  { no: "02", icon: FileText, title: "Share your report", text: "Provide the relevant report details and available documents securely.", image: photo.report, imageAlt: "Documents being reviewed on a desk" },
  { no: "03", icon: FileSearch, title: "We review the details", text: "We help identify entries that may need clarification or a dispute.", image: photo.documents, imageAlt: "Financial documents and paperwork" },
  { no: "04", icon: Send, title: "Prepare and submit", text: "We guide you with the documents and the next steps for the concerned lender or bureau.", image: photo.laptop, imageAlt: "Person working on a laptop" },
  { no: "05", icon: CheckCircle2, title: "Follow up with you", text: "We help you track replies and understand the updates received.", image: photo.support, imageAlt: "Customer support team working together" },
];

function ProcessTimeline() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="relative mt-14">
      <div className="absolute bottom-12 left-[22px] top-10 hidden w-px bg-gradient-to-b from-blue-200 via-red-200 to-blue-200 md:block" />
      <div className="space-y-5 md:space-y-7">
        {processSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.article
              key={step.no}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: .55, delay: index * .06 }}
              className="group relative grid gap-5 rounded-[26px] border border-slate-200 bg-white p-4 shadow-[0_10px_35px_rgba(20,52,99,.045)] transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(20,52,99,.09)] sm:p-5 md:grid-cols-[54px_1fr_minmax(220px,34%)] md:items-center md:gap-6 md:rounded-[30px] md:p-6"
            >
              <div className="relative z-10 flex items-center gap-3 md:block">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#103b80] text-white shadow-lg shadow-blue-900/15 transition group-hover:bg-red-600">
                  <Icon size={19}/>
                </div>
                <span className="text-[10px] font-black tracking-[0.2em] text-red-600 md:mt-3 md:block">{step.no} / 05</span>
              </div>
              <div>
                <h3 className="text-lg font-extrabold tracking-tight text-[#12366f] sm:text-xl">{step.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">{step.text}</p>
                {index !== processSteps.length - 1 && (
                  <div className="mt-4 hidden items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 md:flex">
                    <span className="h-px w-8 bg-red-300"/>{index === 0 ? "Next: report review" : "Next step"}<ArrowDown size={13} className="text-red-500"/>
                  </div>
                )}
              </div>
              <div className="relative h-40 overflow-hidden rounded-2xl bg-blue-50 sm:h-48 md:h-36">
                <img src={step.image} alt={step.imageAlt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#092e67]/25 to-transparent"/>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}

function GlobeIllustration() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[410px] items-center justify-center">
      <div className="absolute inset-[7%] rounded-full border border-blue-100"/>
      <div className="absolute inset-[17%] rounded-full border border-dashed border-blue-200"/>
      <div className="absolute inset-[27%] rounded-full border border-blue-100"/>
      <div className="absolute h-[66%] w-[66%] overflow-hidden rounded-full bg-gradient-to-br from-[#eaf3ff] via-white to-[#fcecef] shadow-[inset_-15px_-18px_35px_rgba(16,59,128,.12),0_20px_60px_rgba(16,59,128,.12)]">
        <svg viewBox="0 0 300 300" className="h-full w-full" aria-label="Illustration of the Earth">
          <defs>
            <clipPath id="earthClip"><circle cx="150" cy="150" r="145"/></clipPath>
            <radialGradient id="earthFill" cx="35%" cy="30%"><stop offset="0%" stopColor="#ffffff"/><stop offset="100%" stopColor="#cfe2ff"/></radialGradient>
          </defs>
          <g clipPath="url(#earthClip)">
            <circle cx="150" cy="150" r="145" fill="url(#earthFill)"/>
            <g fill="#7ca8d9" opacity=".95">
              <path d="M48 54l25-14 27 8 13 19-10 18-22 7-7 22-18 7-15-18-18-7 5-25z"/>
              <path d="M105 126l27 5 17 21-8 29-15 26-7 42-18 18-15-28 6-34-13-29 7-31z"/>
              <path d="M165 43l31-14 37 9 30 26-9 18-26 1-11 20-28-5-16-18-21-7z"/>
              <path d="M184 117l28-12 33 15 15 28-12 26-24 5-8 35-20 23-17-27 4-31-18-22z"/>
              <path d="M40 218l24-13 30 12 9 24-22 21-31-5z"/>
            </g>
            <g fill="none" stroke="#ffffff" strokeWidth="2" opacity=".8">
              <ellipse cx="150" cy="150" rx="65" ry="145"/>
              <ellipse cx="150" cy="150" rx="112" ry="145"/>
              <path d="M7 150h286M20 100h260M20 200h260"/>
            </g>
          </g>
        </svg>
      </div>
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }} className="absolute inset-[3%] rounded-full border border-dashed border-red-200"/>
      <div className="absolute right-[4%] top-[18%] rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-lg">
        <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Based in</p>
        <p className="mt-1 text-sm font-extrabold text-[#103b80]">Bengaluru, India</p>
      </div>
      <div className="absolute bottom-[15%] left-[1%] rounded-2xl border border-red-100 bg-white px-4 py-3 shadow-lg">
        <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Support</p>
        <p className="mt-1 text-sm font-extrabold text-red-600">Across the world</p>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event) => { if (event.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const goTo = (event, id) => {
    event.preventDefault();
    setMenuOpen(false);
    const target = document.getElementById(id);
    if (!target) return;
    window.history.pushState(null, "", `#${id}`);
    const offset = window.matchMedia("(max-width: 767px)").matches ? 76 : 92;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  return (
    <div id="home" className="min-h-screen overflow-x-clip bg-white font-sans text-slate-800 selection:bg-red-100 selection:text-[#103b80]">
      {/* NAVBAR */}
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-slate-200 bg-white/95 shadow-[0_8px_30px_rgba(16,59,128,.07)] backdrop-blur-xl" : "border-slate-100 bg-white/90 backdrop-blur-lg"}`}>
        <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5 sm:px-8 lg:h-[88px] lg:px-10">
          <Brand/>
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={(e) => goTo(e, id)} className="text-[13px] font-semibold text-slate-600 transition hover:text-red-600">{label}</a>
            ))}
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <SocialLinks/>
            <a href="#contact" onClick={(e) => goTo(e, "contact")} className="inline-flex h-11 items-center gap-3 rounded-xl bg-[#103b80] px-5 text-xs font-extrabold text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-red-600">
              Let's talk <ArrowUpRight size={15}/>
            </a>
          </div>
          <button type="button" onClick={() => setMenuOpen(v => !v)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-nav" className="relative z-[70] grid h-12 w-12 place-items-center rounded-full border-2 border-blue-200 bg-white text-[#103b80] shadow-md transition hover:border-red-300 hover:text-red-600 active:scale-95 lg:hidden">
            {menuOpen ? <X size={23}/> : <Menu size={23}/>}
          </button>
        </div>
        {menuOpen && (
          <>
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 top-[76px] z-[49] bg-[#0b2450]/20 backdrop-blur-[2px] lg:hidden"
            />
            <nav
              id="mobile-nav"
              aria-label="Mobile navigation"
              className="absolute left-0 right-0 top-full z-[60] border-t border-blue-100 bg-white px-5 pb-6 pt-3 shadow-[0_24px_45px_rgba(16,59,128,.16)] lg:hidden"
            >
              <div className="mx-auto max-w-[1240px]">
                {navItems.map(([label, id]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => setMenuOpen(false)}
                    className="flex min-h-[62px] items-center justify-between border-b border-slate-100 text-base font-extrabold text-[#103b80] transition hover:pl-2 hover:text-red-600"
                  >
                    {label}
                    <ArrowUpRight size={19} className="text-red-600"/>
                  </a>
                ))}
                <div className="flex items-center justify-between gap-4 pt-5">
                  <SocialLinks/>
                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex min-h-12 items-center rounded-xl bg-[#103b80] px-5 text-sm font-extrabold text-white transition hover:bg-red-600"
                  >
                    Let's talk <ArrowRight size={16} className="ml-2"/>
                  </a>
                </div>
              </div>
            </nav>
          </>
        )}
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f8fbff] to-[#fff8f8] pb-20 pt-32 sm:pt-36 lg:pb-24 lg:pt-40">
          <div className="pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-blue-100/50 blur-[100px]"/>
          <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-red-100/40 blur-[100px]"/>
          <div className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-14 px-5 sm:px-8 lg:flex-row lg:items-center lg:gap-8 lg:px-10">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75 }} className="w-full max-w-[720px] lg:w-[56%] lg:shrink-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-3.5 py-2 text-[9px] font-black uppercase tracking-[0.19em] text-[#174889] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-red-600"/> Your credit report support partner
              </div>
              <h1 className="mt-7 text-[clamp(2.65rem,10.2vw,3.35rem)] font-extrabold leading-[1.04] tracking-[-0.058em] text-[#0d3475] sm:text-6xl md:text-7xl lg:text-[4.6rem] xl:text-[5.25rem]">
                <span className="block">Your credit story.</span>
                <span className="mt-1 block"><span className="text-red-600">Clearer.</span> Stronger.</span>
                <span className="mt-1 block">Better understood.</span>
              </h1>
              <p className="mt-7 max-w-[570px] text-[17px] leading-[1.8] text-slate-600 sm:text-lg sm:leading-8">
                Your credit report can affect your next financial step. We help you understand what is in it, spot details that may need attention, and know what to do next.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#contact" onClick={(e) => goTo(e, "contact")} className="inline-flex min-h-[62px] items-center justify-center gap-3 rounded-xl bg-[#103b80] px-7 text-base font-extrabold text-white shadow-[0_14px_30px_rgba(16,59,128,.2)] transition hover:-translate-y-1 hover:bg-red-600">
                  Discuss your report <ArrowUpRight size={18}/>
                </a>
                <a href="#services" onClick={(e) => goTo(e, "services")} className="inline-flex min-h-[58px] items-center justify-center gap-2 rounded-xl px-5 text-base font-bold text-[#12366f] transition hover:bg-blue-50">
                  Explore services <ArrowDown size={16} className="text-red-600"/>
                </a>
              </div>
              <div className="mt-9 flex items-center gap-3 border-t border-blue-100 pt-6">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-red-50 text-red-600"><Globe2 size={22}/></span>
                <div>
                  <p className="text-sm font-extrabold text-[#103b80]">Based in Bengaluru. Here to help worldwide.</p>
                  <p className="mt-1 text-xs text-slate-500">Remote support for customers in India and abroad.</p>
                </div>
              </div>
            </motion.div>
            <div className="relative w-full max-w-[540px] px-1 pb-5 pt-2 sm:px-5 lg:w-[44%] lg:max-w-none lg:px-0">
              <ScoreGauge/>
              <p className="mx-auto mt-9 max-w-sm text-center text-[10px] leading-5 text-slate-400">A visual example to explain score bands — not a customer result or a promise of score improvement.</p>
            </div>
          </div>
        </section>

        {/* INTRO / ABOUT */}
        <section id="about" className="scroll-mt-24 border-y border-slate-100 bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
            <div className="relative">
              <img src={photo.discussion} alt="People working together and discussing information" loading="lazy" className="h-[300px] w-full rounded-[28px] object-cover shadow-xl shadow-blue-900/10 sm:h-[420px]"/>
              <div className="absolute -bottom-5 right-4 rounded-2xl border border-white bg-white p-4 shadow-xl sm:right-8 sm:p-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">Our base</p>
                <p className="mt-1 flex items-center gap-2 text-sm font-black text-[#103b80]"><MapPin size={15} className="text-red-600"/> Bengaluru, India</p>
              </div>
            </div>
            <div className="pt-4 lg:pt-0">
              <SectionHeading eyebrow="About Swavin Solutions" title="Understand your report." accent="Know your next step." description="Swavin Solutions helps people understand credit report entries and work through concerns with the right documents and follow-up. We keep the process clear, practical and easy to follow."/>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {["Simple guidance", "Document support", "Clear next steps", "Remote assistance"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm font-bold text-slate-700"><CheckCircle2 size={17} className="shrink-0 text-red-600"/>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="scroll-mt-24 bg-[#f7faff] py-20 sm:py-24">
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <SectionHeading eyebrow="How we can help" title="Credit report support," accent="made clearer." description="We help you understand common report concerns and the steps you may take to raise them."/>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#174889]"><ShieldCheck size={14} className="text-red-600"/> Personal guidance</span>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.article key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .45, delay: index * .06 }} className="group rounded-[25px] border border-slate-200 bg-white p-6 shadow-[0_8px_28px_rgba(16,59,128,.035)] transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(16,59,128,.09)] sm:p-7">
                    <div className="flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-[#103b80] transition group-hover:bg-red-50 group-hover:text-red-600"><Icon size={22}/></span>
                      <span className="text-[10px] font-black tracking-widest text-slate-300">0{index + 1}</span>
                    </div>
                    <h3 className="mt-6 text-lg font-extrabold tracking-tight text-[#12366f]">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{service.text}</p>
                    <div className="mt-6 h-1 w-10 rounded-full bg-red-500 transition-all group-hover:w-16"/>
                  </motion.article>
                );
              })}
            </div>
            <p className="mt-7 text-xs leading-6 text-slate-500">We provide assistance and guidance. Final corrections or changes are handled by the concerned lender or credit bureau after its review.</p>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="scroll-mt-24 bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
            <SectionHeading eyebrow="Our process" title="Five simple steps." accent="No guesswork." description="You know what happens next, from the first conversation to follow-up."/>
            <ProcessTimeline/>
          </div>
        </section>

        {/* WORLDWIDE / NRI */}
        <section id="nri" className="scroll-mt-24 overflow-hidden bg-gradient-to-br from-[#0c3474] via-[#123f88] to-[#09295e] py-20 text-white sm:py-24">
          <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-red-300">India & worldwide</p>
              <h2 className="mt-4 text-4xl font-black leading-[1.05] tracking-[-0.05em] sm:text-5xl">Wherever you are,<span className="block text-red-300">we can guide you.</span></h2>
              <p className="mt-6 max-w-lg text-sm leading-8 text-blue-100 sm:text-base">Live outside India? You can still reach us for help understanding your India credit report. We can discuss your concern remotely and explain the next steps.</p>
              <ul className="mt-7 space-y-4">
                {["Remote conversations and guidance", "Help understanding report entries", "Support with document preparation and follow-up"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium text-white"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-red-300"/>{item}</li>
                ))}
              </ul>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-9 inline-flex min-h-13 items-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-extrabold text-[#103b80] transition hover:bg-red-50">Talk to our team <ArrowUpRight size={17} className="text-red-600"/></a>
            </div>
            <GlobeIllustration/>
          </div>
        </section>

        {/* TRUST / DISCLAIMER */}
        <section className="border-b border-slate-100 bg-[#f7faff] py-14 sm:py-16">
          <div className="mx-auto grid max-w-[1240px] gap-7 px-5 sm:px-8 md:grid-cols-3 lg:px-10">
            {[
              [ShieldCheck, "Clear and honest help", "We explain the process and what is within our role."],
              [FileText, "Your documents matter", "We help you understand which supporting details may be needed."],
              [CircleHelp, "No false promises", "No guaranteed score increase, deletion of accurate entries or loan approval."],
            ].map(([Icon, title, text]) => (
              <div key={title} className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-red-600 shadow-sm ring-1 ring-slate-200"><Icon size={21}/></span>
                <div><h3 className="font-extrabold text-[#103b80]">{title}</h3><p className="mt-1.5 text-xs leading-6 text-slate-600">{text}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-24 relative overflow-hidden bg-white py-20 sm:py-28">
          <div className="pointer-events-none absolute -left-28 top-0 h-80 w-80 rounded-full bg-blue-100/60 blur-[100px]"/>
          <div className="pointer-events-none absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-red-100/60 blur-[100px]"/>
          <div className="relative mx-auto max-w-[1050px] px-5 text-center sm:px-8">
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-red-600">Start with a conversation</p>
            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black leading-[1.04] tracking-[-0.06em] text-[#103b80] sm:text-6xl">Let's make your credit report <span className="text-red-600">easier to understand.</span></h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">Tell us what you are facing. Our team can help you understand the next step.</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex min-h-[62px] items-center justify-center gap-3 rounded-xl bg-[#103b80] px-7 text-base font-extrabold text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-1 hover:bg-red-600"><MessageCircle size={18}/> Chat on WhatsApp <ArrowUpRight size={16}/></a>
              <a href={`tel:+91${PHONE}`} className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-7 text-sm font-extrabold text-[#103b80] transition hover:border-red-200 hover:text-red-600"><Phone size={17}/> Call {PHONE}</a>
            </div>
            <div className="mx-auto mt-14 grid max-w-2xl gap-5 border-t border-slate-200 pt-8 text-left sm:grid-cols-2">
              <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-[#103b80]"><Phone size={17}/></span><div><p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Call us</p><a href={`tel:+91${PHONE}`} className="mt-1 block text-sm font-extrabold text-[#103b80]">{PHONE}</a></div></div>
              <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-red-50 text-red-600"><MapPin size={17}/></span><div><p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Based in</p><p className="mt-1 text-sm font-extrabold text-[#103b80]">Bengaluru, India</p></div></div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#092b64] text-white">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-5 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <Brand light/>
            <p className="mt-4 max-w-sm text-xs leading-6 text-blue-100/75">Clear guidance for understanding credit reports and taking the next step.</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-semibold text-blue-100">
            {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={(e) => goTo(e, id)} className="transition hover:text-red-300">{label}</a>)}
          </div>
          <div className="flex items-center gap-4">
            <SocialLinks light/>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded-full bg-red-600 text-white transition hover:bg-red-500"><MessageCircle size={18}/></a>
          </div>
        </div>
        <div className="border-t border-white/10 px-5 py-5 text-center text-[10px] leading-5 text-blue-100/60">
          © {new Date().getFullYear()} Swavin Solutions. All rights reserved. &nbsp;|&nbsp; Swavin Solutions is an independent assistance service and is not a credit bureau, bank or lender. Credit score changes, dispute outcomes and loan approvals are not guaranteed.
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Chat with Swavin Solutions on WhatsApp" className="fixed bottom-5 right-4 z-40 inline-flex items-center gap-2.5 rounded-full border border-white/80 bg-[#16a765] px-4 py-3.5 text-xs font-extrabold text-white shadow-[0_12px_35px_rgba(0,0,0,.2)] transition hover:-translate-y-1 hover:bg-[#128c55] sm:bottom-7 sm:right-7 sm:px-5">
        <MessageCircle size={19}/> <span className="hidden sm:inline">Let's chat</span><span className="sm:hidden">Chat</span>
      </a>
    </div>
  );
}
