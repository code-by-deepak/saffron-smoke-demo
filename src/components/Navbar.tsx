import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Flame, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GoldButton } from "./GoldButton";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Chefs", href: "#chefs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reserve", href: "#reserve" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.2 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-gold/15 py-3"
          : "bg-transparent py-5",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <Flame className="h-5 w-5 text-gold flicker" strokeWidth={1.5} />
          <span className="font-display text-lg tracking-[0.32em] text-foreground">
            SAFFRON <span className="text-gold">&amp;</span> SMOKE
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-[11px] tracking-[0.3em] uppercase text-muted-foreground hover:text-gold transition-colors duration-500 group"
            >
              {l.label}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#reserve">
            <GoldButton>Book a Table</GoldButton>
          </a>
        </div>

        <button
          className="lg:hidden text-gold"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-gold/15"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm tracking-[0.25em] uppercase text-muted-foreground hover:text-gold"
                >
                  {l.label}
                </a>
              ))}
              <a href="#reserve" onClick={() => setOpen(false)}>
                <GoldButton className="w-full">Book a Table</GoldButton>
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
