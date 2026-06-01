import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  Flame, Star, MapPin, Phone, Mail, Clock,
  Instagram, Facebook, Utensils, Music, Wine, MessageCircle, ArrowRight, Quote,
} from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Preloader } from "@/components/Preloader";
import { Embers } from "@/components/Embers";
import { Reveal } from "@/components/Reveal";
import { GoldButton } from "@/components/GoldButton";

import hero from "@/assets/hero.jpg";
import interior from "@/assets/interior.jpg";
import ambience from "@/assets/ambience.jpg";
import reservationImg from "@/assets/reservation.jpg";
import dishRaan from "@/assets/dish-raan.jpg";
import dishBisque from "@/assets/dish-bisque.jpg";
import dishPaneer from "@/assets/dish-paneer.jpg";
import dishSorbet from "@/assets/dish-sorbet.jpg";
import chef1 from "@/assets/chef-1.jpg";
import chef2 from "@/assets/chef-2.jpg";
import chef3 from "@/assets/chef-3.jpg";
import gal1 from "@/assets/gal-1.jpg";
import gal2 from "@/assets/gal-2.jpg";
import gal3 from "@/assets/gal-3.jpg";
import gal4 from "@/assets/gal-4.jpg";
import gal5 from "@/assets/gal-5.jpg";
import gal6 from "@/assets/gal-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saffron & Smoke — Premium Indian Fusion, Connaught Place, Delhi" },
      { name: "description", content: "Where ancient spices meet modern fire. Premium Indian fusion dining in Connaught Place, New Delhi. Reserve your table at Saffron & Smoke." },
      { property: "og:title", content: "Saffron & Smoke — A Dining Experience Like No Other" },
      { property: "og:description", content: "Handcrafted flavours, rooted in tradition, reimagined for the modern palate." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Page,
});

/* ----------------------------- Page ----------------------------- */
function Page() {
  return (
    <div className="relative overflow-x-hidden">
      <Preloader />
      <Navbar />
      <Hero />
      <Story />
      <Signatures />
      <FullMenu />
      <Ambience />
      <Chefs />
      <Reserve />
      <Testimonials />
      <Gallery />
      <Press />
      <ContactSection />
      <Footer />
    </div>
  );
}

/* ----------------------------- Hero ----------------------------- */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={hero} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.09_0.01_60/0.85)_100%)]" />
      </motion.div>

      <Embers count={36} />

      <motion.div style={{ opacity }} className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 1 }}
          className="text-[11px] tracking-[0.55em] uppercase text-gold/80 mb-8"
        >
          ✦ Connaught Place · New Delhi ✦
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 2.6, duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-foreground candle-glow"
        >
          A Dining Experience
          <br />
          <em className="text-gradient-gold font-normal not-italic">Like No Other</em>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 3.4, duration: 1.4 }}
          className="gold-divider mt-10 mx-auto w-60"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.6, duration: 1.2 }}
          className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light"
        >
          Handcrafted flavours, rooted in tradition, reimagined for the modern palate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.9, duration: 1 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#menu"><GoldButton>Explore Our Menu</GoldButton></a>
          <a href="#reserve"><GoldButton variant="outline">Reserve Your Table</GoldButton></a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase text-gold/60">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}

/* ----------------------------- Story ----------------------------- */
function Story() {
  return (
    <section id="story" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden">
            <motion.img
              src={interior} alt="Restaurant interior" loading="lazy"
              initial={{ scale: 1.2 }} whileInView={{ scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 2 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-gold/30" />
            <div className="absolute -bottom-4 -right-4 w-full h-full hairline -z-10" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-[11px] tracking-[0.45em] uppercase text-gold mb-6">Our Story</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl leading-tight text-foreground">
              More Than a Meal.
              <br /><em className="text-gradient-gold not-italic">A Memory.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="gold-divider w-32 my-8" />
          </Reveal>
          <Reveal delay={0.3}>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-[15px] max-w-lg">
              <p>Born from a love affair between memory and modernity, Saffron &amp; Smoke is where the warmth of an Indian grandmother's kitchen meets the precision of a contemporary chef's flame.</p>
              <p>Every dish on our menu tells a story — of monsoon spice markets, of bone-deep grandmothers' recipes, of fire kissed slowly, patiently, until magic happens.</p>
              <p>Come hungry. Leave with a memory.</p>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-10 flex items-center gap-6">
              <span className="font-display italic text-2xl text-gold candle-glow">~ Aryan K.</span>
              <a href="#chefs" className="group inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold hover:text-gold-soft transition">
                Our Full Story
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Signatures ----------------------------- */
type Dish = { name: string; desc: string; price: string; img: string; tag: "Veg" | "Non-Veg" | "Chef's Special" };
const signatures: Dish[] = [
  { name: "Smoked Raan Platter", desc: "Slow-cooked lamb shank, charcoal smoke, saffron jus.", price: "₹ 2,450", img: dishRaan, tag: "Non-Veg" },
  { name: "Saffron Lobster Bisque", desc: "Coastal lobster, Kashmiri saffron, coconut cream.", price: "₹ 1,890", img: dishBisque, tag: "Chef's Special" },
  { name: "Charred Paneer Royale", desc: "Cottage cheese tikka, smoked yoghurt, gold leaf.", price: "₹ 1,150", img: dishPaneer, tag: "Veg" },
  { name: "Mango & Chili Sorbet", desc: "Alphonso sorbet, candied chili, edible gold.", price: "₹ 690", img: dishSorbet, tag: "Veg" },
];

function Signatures() {
  return (
    <section className="relative py-32 px-6 bg-card/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <Reveal><p className="text-[11px] tracking-[0.45em] uppercase text-gold mb-6">Iconic Creations</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-5xl md:text-7xl text-foreground">
              Chef's <em className="text-gradient-gold not-italic">Signatures</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}><div className="gold-divider w-40 mx-auto mt-8" /></Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {signatures.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.1}>
              <DishCard dish={d} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="text-center mt-16">
            <a href="#menu"><GoldButton variant="outline">View Full Menu</GoldButton></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function DishCard({ dish }: { dish: Dish }) {
  return (
    <div className="group relative overflow-hidden bg-ink hairline">
      <div className="relative aspect-[5/4] overflow-hidden">
        <img src={dish.img} alt={dish.name} loading="lazy"
             className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-700 mix-blend-overlay" />
        <span className="absolute top-5 left-5 text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 backdrop-blur-md bg-ink/60 border border-gold/40 text-gold">
          {dish.tag}
        </span>
      </div>
      <div className="p-8 flex items-start justify-between gap-6">
        <div>
          <h3 className="font-display text-3xl text-foreground mb-2 group-hover:text-gold transition-colors duration-500">{dish.name}</h3>
          <p className="text-muted-foreground italic text-sm font-light leading-relaxed">{dish.desc}</p>
        </div>
        <span className="font-display text-2xl text-gold whitespace-nowrap">{dish.price}</span>
      </div>
    </div>
  );
}

/* ----------------------------- Full Menu ----------------------------- */
type Item = { name: string; desc: string; price: string; veg: boolean };
const menu: Record<string, Item[]> = {
  Starters: [
    { name: "Galouti Kebab", desc: "Buttery minced lamb, 32 spices, mini ulte tawa paratha", price: "₹ 850", veg: false },
    { name: "Tandoori Burrata", desc: "Smoked burrata, charred tomato chutney, basil naan", price: "₹ 780", veg: true },
    { name: "Coorg Pepper Prawns", desc: "Tiger prawns, black pepper, curry leaf butter", price: "₹ 1,100", veg: false },
    { name: "Beetroot & Walnut Tikki", desc: "Crisp tikkis, hung yoghurt, pomegranate gel", price: "₹ 620", veg: true },
    { name: "Chicken 65 Sliders", desc: "Hyderabadi spice, brioche, kasundi mayo", price: "₹ 740", veg: false },
    { name: "Kerala Lotus Stem", desc: "Honey-glazed lotus, curry leaf, sesame", price: "₹ 590", veg: true },
  ],
  Mains: [
    { name: "Smoked Raan Platter", desc: "Slow-cooked lamb shank, saffron jus, naan", price: "₹ 2,450", veg: false },
    { name: "Butter Chicken Royale", desc: "Heirloom tomato, fenugreek cream, aged butter", price: "₹ 1,290", veg: false },
    { name: "Dum Biryani — Lucknowi", desc: "Aged basmati, lamb or chicken, sealed clay pot", price: "₹ 1,450", veg: false },
    { name: "Paneer Pasanda", desc: "Stuffed cottage cheese, cashew velouté, gold dust", price: "₹ 980", veg: true },
    { name: "Jackfruit Kofta Curry", desc: "Tender jackfruit dumplings, makhani gravy", price: "₹ 890", veg: true },
    { name: "Coastal Fish Moilee", desc: "Sea bass, coconut milk, green chili, curry leaf", price: "₹ 1,650", veg: false },
    { name: "Dal Saffron & Smoke", desc: "48-hour black dal, charcoal smoke, cultured cream", price: "₹ 690", veg: true },
  ],
  Desserts: [
    { name: "Mango & Chili Sorbet", desc: "Alphonso sorbet, candied chili, edible gold", price: "₹ 690", veg: true },
    { name: "Gulab Jamun Brûlée", desc: "Cardamom custard, saffron caramel, rose petal", price: "₹ 620", veg: true },
    { name: "Pistachio Kulfi Stack", desc: "House-churned kulfi, falooda pearls, rose syrup", price: "₹ 540", veg: true },
    { name: "Chocolate Paan Truffles", desc: "70% dark chocolate, betel, silver leaf", price: "₹ 580", veg: true },
    { name: "Jaggery Crème Caramel", desc: "Palm jaggery, smoked cream, sesame brittle", price: "₹ 510", veg: true },
    { name: "Saffron Rasmalai Cheesecake", desc: "Baked ricotta, saffron milk, pistachio dust", price: "₹ 690", veg: true },
  ],
  "Cocktails & Drinks": [
    { name: "Saffron Negroni", desc: "Gin, Campari, saffron-infused vermouth, orange peel", price: "₹ 850", veg: true },
    { name: "Smoke & Mirrors", desc: "Mezcal, tamarind, chili, applewood smoke", price: "₹ 920", veg: true },
    { name: "Cardamom Old Fashioned", desc: "Aged whisky, cardamom syrup, orange bitters", price: "₹ 880", veg: true },
    { name: "Rose & Lychee Spritz", desc: "Prosecco, rose, lychee, lime", price: "₹ 720", veg: true },
    { name: "Masala Chai Espresso Martini", desc: "Vodka, espresso, masala chai liqueur", price: "₹ 760", veg: true },
    { name: "House Kombucha", desc: "Tulsi, ginger, raw honey — non-alcoholic", price: "₹ 380", veg: true },
  ],
};

function FullMenu() {
  const tabs = Object.keys(menu);
  const [active, setActive] = useState(tabs[0]);

  return (
    <section id="menu" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Reveal><p className="text-[11px] tracking-[0.45em] uppercase text-gold mb-6">À La Carte</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-5xl md:text-7xl">The <em className="text-gradient-gold not-italic">Menu</em></h2>
          </Reveal>
          <Reveal delay={0.2}><div className="gold-divider w-40 mx-auto mt-8" /></Reveal>
        </div>

        <Reveal>
          <div className="flex flex-wrap justify-center gap-2 md:gap-6 mb-16 border-y border-gold/15 py-5">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`relative px-5 py-2 text-[11px] md:text-xs tracking-[0.3em] uppercase transition-colors duration-500 ${
                  active === t ? "text-gold" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
                {active === t && (
                  <motion.span layoutId="menu-underline" className="absolute -bottom-[21px] left-0 right-0 h-px bg-gradient-gold" />
                )}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid md:grid-cols-2 gap-x-16 gap-y-2"
          >
            {menu[active].map((item) => (
              <div key={item.name} className="group py-5 border-b border-gold/10">
                <div className="flex items-baseline gap-4">
                  <span className={`mt-2 h-2 w-2 rounded-full flex-shrink-0 ${item.veg ? "bg-emerald-500/80" : "bg-red-500/80"}`} />
                  <h4 className="font-display text-2xl text-foreground group-hover:text-gold transition-colors flex-1">{item.name}</h4>
                  <span className="flex-1 mx-3 border-b border-dashed border-gold/20 translate-y-[-6px]" />
                  <span className="font-display text-xl text-gold">{item.price}</span>
                </div>
                <p className="mt-1.5 ml-6 text-sm italic text-muted-foreground font-light">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ----------------------------- Ambience ----------------------------- */
function Ambience() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className="relative h-[90vh] overflow-hidden flex items-center justify-center">
      <motion.div style={{ y }} className="absolute inset-0 scale-125">
        <img src={ambience} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-ink/70" />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <Reveal>
          <Quote className="h-10 w-10 text-gold mx-auto mb-8 opacity-70" strokeWidth={1} />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-display italic text-3xl md:text-5xl lg:text-6xl leading-tight text-foreground candle-glow">
            "Every table has a story.
            <br />
            <span className="text-gradient-gold">Come write yours.</span>"
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="gold-divider w-32 mx-auto my-12" />
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-8 mt-8">
          {[
            { Icon: Flame, title: "Intimate Ambience", desc: "Candlelit corners for quiet conversation." },
            { Icon: Music, title: "Live Music Fridays", desc: "Curated acoustic sets each weekend." },
            { Icon: Wine, title: "Curated Wine List", desc: "Old world labels, sommelier pairings." },
          ].map((f, i) => (
            <Reveal key={f.title} delay={0.2 + i * 0.1}>
              <div className="text-center">
                <f.Icon className="h-7 w-7 text-gold mx-auto mb-4" strokeWidth={1.3} />
                <h4 className="font-display text-xl text-foreground mb-1.5">{f.title}</h4>
                <p className="text-xs tracking-wider text-muted-foreground">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Chefs ----------------------------- */
const chefs = [
  { name: "Aryan Kapoor", title: "Executive Chef", years: "18 years in fine dining", bio: "A former Taj Mahal Hotel sous chef, Aryan trained under Michelin-starred masters in Paris and Tokyo.", signature: "Smoked Raan Platter", img: chef1 },
  { name: "Meera Nair", title: "Pastry & Desserts", years: "12 years patisserie", bio: "Trained at Le Cordon Bleu Paris, Meera reimagines Indian sweets through a contemporary French lens.", signature: "Mango & Chili Sorbet", img: chef2 },
  { name: "Zaid Hussain", title: "Grill & Smoke Master", years: "15 years tandoor", bio: "A third-generation tandoor artist from Lucknow, Zaid's flame is the heart of our kitchen.", signature: "Charred Paneer Royale", img: chef3 },
];

function Chefs() {
  return (
    <section id="chefs" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <Reveal><p className="text-[11px] tracking-[0.45em] uppercase text-gold mb-6">Meet the Team</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-5xl md:text-7xl">
              The Artists Behind <em className="text-gradient-gold not-italic">the Plate</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}><div className="gold-divider w-40 mx-auto mt-8" /></Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {chefs.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.1}>
              <div className="group relative overflow-hidden hairline transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_oklch(0.82_0.15_80/0.25)]">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={c.img} alt={c.name} loading="lazy"
                       className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-2">{c.title} · {c.years}</p>
                  <h3 className="font-display text-3xl text-foreground mb-3">{c.name}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">{c.bio}</p>
                  <span className="inline-block text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 border border-gold/40 text-gold">
                    Signature · {c.signature}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Reserve ----------------------------- */
function Reserve() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="reserve" className="relative py-32 px-6 bg-card/40">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Reveal><p className="text-[11px] tracking-[0.45em] uppercase text-gold mb-6">Reservations</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-5xl md:text-7xl mb-4">
              Reserve <em className="text-gradient-gold not-italic">Your Evening</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}><div className="gold-divider w-32 my-8" /></Reveal>
          <Reveal delay={0.3}>
            <p className="text-muted-foreground mb-10 max-w-md font-light leading-relaxed">
              Tables are limited and book quickly. Reserve at least 24 hours in advance for the best availability.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Input label="Full Name" type="text" required />
                <Input label="Phone Number" type="tel" required />
              </div>
              <Input label="Email" type="email" required />
              <div className="grid sm:grid-cols-3 gap-5">
                <Input label="Date" type="date" required />
                <Input label="Time" type="time" required />
                <Select label="Guests">
                  {Array.from({ length: 10 }, (_, i) => <option key={i}>{i + 1}</option>)}
                  <option>10+</option>
                </Select>
              </div>
              <Select label="Special Occasion">
                <option>None</option><option>Birthday</option><option>Anniversary</option><option>Business Dinner</option>
              </Select>
              <div>
                <label className="block text-[10px] tracking-[0.3em] uppercase text-gold/80 mb-2">Special Requests</label>
                <textarea rows={3}
                  className="w-full bg-transparent border border-gold/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none transition-colors"
                  placeholder="Allergies, seating preference, surprise plans..." />
              </div>
              <GoldButton type="submit" className="w-full mt-4">
                {submitted ? "Reservation Received ✦" : "Confirm Reservation"}
              </GoldButton>
            </form>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="relative aspect-[4/5] overflow-hidden hairline order-first lg:order-last">
            <img src={reservationImg} alt="Candlelit table" loading="lazy"
                 className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Input({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.3em] uppercase text-gold/80 mb-2">{label}</label>
      <input {...props}
        className="w-full bg-transparent border border-gold/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none transition-colors" />
    </div>
  );
}
function Select({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.3em] uppercase text-gold/80 mb-2">{label}</label>
      <select className="w-full bg-transparent border border-gold/20 px-4 py-3 text-sm text-foreground focus:border-gold focus:outline-none transition-colors [&>option]:bg-ink">
        {children}
      </select>
    </div>
  );
}

/* ----------------------------- Testimonials ----------------------------- */
const testimonials = [
  { name: "Priya Sharma", city: "Mumbai", rating: 5, quote: "An absolute symphony of flavours. The smoked raan brought tears — it tasted like my grandmother's kitchen, only better." },
  { name: "Rohan Mehta", city: "Bengaluru", rating: 5, quote: "We celebrated our 10th anniversary here. The candlelight, the music, the saffron lobster bisque — pure poetry." },
  { name: "Ananya Iyer", city: "Delhi", rating: 5, quote: "Chef Aryan came out personally to explain his menu. The paneer royale is unlike anything in the city." },
  { name: "Kabir Singh", city: "Chandigarh", rating: 5, quote: "Reservations were worth the wait. Every detail — from the gold cutlery to the cardamom martini — was considered." },
];

function Testimonials() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Reveal><p className="text-[11px] tracking-[0.45em] uppercase text-gold mb-6">Reviews</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-5xl md:text-7xl">
              Voices From <em className="text-gradient-gold not-italic">Our Guests</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}><div className="gold-divider w-40 mx-auto mt-8" /></Reveal>
        </div>

        <div className="relative">
          <div className="flex gap-6 animate-marquee w-max">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="w-[360px] md:w-[440px] flex-shrink-0 p-8 backdrop-blur-md bg-card/40 border border-gold/20 hover:border-gold hover:shadow-[0_0_40px_-10px_oklch(0.82_0.15_80/0.5)] transition-all duration-700">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star key={k} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-display italic text-xl leading-relaxed text-foreground mb-6">"{t.quote}"</p>
                <div className="gold-divider w-12 mb-4" />
                <p className="text-xs tracking-[0.25em] uppercase text-gold">{t.name}</p>
                <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mt-1">{t.city}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Gallery ----------------------------- */
const marqueeImgs = [gal1, gal2, gal3, gal4, gal5, gal6, dishRaan, dishPaneer];
const masonryImgs = [
  { src: gal1, h: "h-80" },
  { src: gal2, h: "h-[420px]" },
  { src: dishBisque, h: "h-72" },
  { src: gal3, h: "h-96" },
  { src: gal4, h: "h-[360px]" },
  { src: gal5, h: "h-72" },
  { src: gal6, h: "h-[420px]" },
  { src: dishSorbet, h: "h-80" },
  { src: interior, h: "h-96" },
];

function Gallery() {
  return (
    <section id="gallery" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <Reveal><p className="text-[11px] tracking-[0.45em] uppercase text-gold mb-6">Gallery</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-5xl md:text-7xl">
            A Feast for <em className="text-gradient-gold not-italic">the Eyes</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}><div className="gold-divider w-40 mx-auto mt-8" /></Reveal>
      </div>

      <div className="relative mb-16">
        <div className="flex gap-4 animate-marquee w-max">
          {[...marqueeImgs, ...marqueeImgs].map((src, i) => (
            <div key={i} className="w-72 h-52 flex-shrink-0 overflow-hidden">
              <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {masonryImgs.map((m, i) => (
          <Reveal key={i} delay={(i % 3) * 0.08}>
            <div className={`relative overflow-hidden group break-inside-avoid ${m.h}`}>
              <img src={m.src} alt="" loading="lazy"
                   className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/20 mix-blend-overlay transition-colors duration-700" />
              <div className="absolute inset-0 ring-1 ring-gold/10 group-hover:ring-gold/40 transition" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- Press ----------------------------- */
const press = [
  "Best New Restaurant 2024 — Delhi Food Awards",
  "Top 10 Fine Dining — Times Food Guide",
  "Editor's Pick — Condé Nast Traveller India",
  "★★★★★ — The Hindu Weekend",
];

function Press() {
  return (
    <section className="relative py-24 px-6 border-y border-gold/10 bg-ink/40">
      <div className="max-w-6xl mx-auto text-center">
        <Reveal>
          <p className="text-[11px] tracking-[0.45em] uppercase text-gold mb-12">As Featured In</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 items-center">
          {press.map((p, i) => (
            <Reveal key={p} delay={i * 0.08}>
              <p className="font-display italic text-base md:text-lg text-muted-foreground/70 hover:text-gold transition-colors duration-700 leading-tight">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Contact ----------------------------- */
function ContactSection() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden hairline">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=Connaught+Place+New+Delhi&output=embed"
              className="w-full h-full grayscale contrast-110 brightness-50"
              loading="lazy"
            />
            <div className="absolute inset-0 ring-1 ring-gold/30 pointer-events-none" />
          </div>
        </Reveal>

        <div>
          <Reveal><p className="text-[11px] tracking-[0.45em] uppercase text-gold mb-6">Find Us</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-5xl md:text-6xl mb-4">
              Visit <em className="text-gradient-gold not-italic">Saffron &amp; Smoke</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}><div className="gold-divider w-32 my-8" /></Reveal>

          <div className="space-y-6">
            <ContactRow Icon={MapPin} title="Address" lines={["12 Rajiv Chowk, Block A,", "Connaught Place, New Delhi 110001"]} />
            <ContactRow Icon={Phone} title="Phone" lines={["+91 98100 55566"]} />
            <ContactRow Icon={Mail} title="Email" lines={["reservations@saffronandsmoke.com"]} />
            <ContactRow Icon={Clock} title="Open Hours" lines={["Mon – Sun · 12:00 PM – 11:30 PM"]} />
          </div>

          <Reveal delay={0.5}>
            <a
              href="https://wa.me/919810055566"
              target="_blank" rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 px-6 py-3.5 border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 transition-colors duration-500 text-xs tracking-[0.3em] uppercase"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ Icon, title, lines }: { Icon: React.ElementType; title: string; lines: string[] }) {
  return (
    <Reveal>
      <div className="flex items-start gap-5">
        <div className="h-11 w-11 flex-shrink-0 flex items-center justify-center border border-gold/30 text-gold">
          <Icon className="h-4 w-4" strokeWidth={1.4} />
        </div>
        <div>
          <p className="text-[10px] tracking-[0.35em] uppercase text-gold/70 mb-1">{title}</p>
          {lines.map((l) => <p key={l} className="text-foreground font-light">{l}</p>)}
        </div>
      </div>
    </Reveal>
  );
}

/* ----------------------------- Footer ----------------------------- */
function Footer() {
  return (
    <footer className="relative pt-20 pb-10 px-6 border-t border-gold/15 bg-ink">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Flame className="h-5 w-5 text-gold flicker" strokeWidth={1.5} />
              <span className="font-display text-base tracking-[0.3em]">SAFFRON &amp; SMOKE</span>
            </div>
            <p className="font-display italic text-gold/80 text-sm">Where ancient spices meet modern fire.</p>
          </div>

          <FooterCol title="Quick Links" items={[
            { label: "Our Story", href: "#story" },
            { label: "Menu", href: "#menu" },
            { label: "Chefs", href: "#chefs" },
            { label: "Reserve", href: "#reserve" },
          ]} />

          <FooterCol title="Opening Hours" items={[
            { label: "Mon – Thu · 12 PM – 11 PM" },
            { label: "Fri – Sat · 12 PM – 11:30 PM" },
            { label: "Sun · 12 PM – 11 PM" },
          ]} />

          <div>
            <h4 className="text-[10px] tracking-[0.35em] uppercase text-gold mb-5">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              {[Instagram, Facebook, Utensils].map((I, i) => (
                <a key={i} href="#" className="h-10 w-10 flex items-center justify-center border border-gold/30 text-gold hover:bg-gold hover:text-ink transition-colors duration-500">
                  <I className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-3">Newsletter</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input type="email" placeholder="your@email.com"
                     className="flex-1 bg-transparent border border-gold/20 px-3 py-2.5 text-xs text-foreground focus:border-gold focus:outline-none" />
              <button className="px-4 bg-gradient-gold text-ink text-[10px] tracking-[0.25em] uppercase">Join</button>
            </form>
            <p className="text-[10px] text-muted-foreground/60 mt-3">Exclusive offers &amp; event invites.</p>
          </div>
        </div>

        <div className="gold-divider mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-muted-foreground/70">
          <p>© 2025 Saffron &amp; Smoke. All Rights Reserved.</p>
          <p>Crafted with <span className="text-gold">✦</span> in New Delhi</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; href?: string }[] }) {
  return (
    <div>
      <h4 className="text-[10px] tracking-[0.35em] uppercase text-gold mb-5">{title}</h4>
      <ul className="space-y-3">
        {items.map((it) => (
          <li key={it.label}>
            {it.href ? (
              <a href={it.href} className="text-sm text-muted-foreground hover:text-gold transition-colors">{it.label}</a>
            ) : (
              <span className="text-sm text-muted-foreground">{it.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
