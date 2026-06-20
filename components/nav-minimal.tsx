"use client";

import {
  Bot,
  ChevronDown,
  CloudUpload,
  Gem,
  Handshake,
  Menu,
  Monitor,
  Scaling,
  Shield,
  Smartphone,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, type Variants } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import useMeasure from "react-use-measure";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import BrandLogo from "@/app/components/BrandLogo";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type FeatureItem = {
  icon: React.ElementType;
  label: string;
  description: string;
  href: string;
};

type PromoCard = {
  title: string;
  description: string;
  href: string;
};

type DropdownConfig = {
  columns: { heading: string; items: FeatureItem[] }[];
  promo?: PromoCard;
};

type NavLink = {
  label: string;
  href: string;
  dropdown?: DropdownConfig;
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const NAV_LINKS: NavLink[] = [
  { label: "The Problem", href: "#problem" },
  { label: "The Science", href: "#science" },
  { label: "The Trial", href: "#trial" },
  { label: "Get in touch", href: "/contact" },
];

/* ------------------------------------------------------------------ */
/*  Shared shadow constants                                            */
/* ------------------------------------------------------------------ */

const iconShadow = cn(
  "shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_2px_-1px_rgba(0,0,0,0.05)]",
  "dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.08),0px_1px_2px_-1px_rgba(255,255,255,0.04)]"
);

/* ------------------------------------------------------------------ */
/*  Motion                                                             */
/* ------------------------------------------------------------------ */

const ease = [0.22, 1, 0.36, 1] as const;

const navVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease },
  },
};

const dropdownVariants: Variants = {
  hidden: { opacity: 0, y: 6, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease },
  },
  exit: {
    opacity: 0,
    y: 6,
    scale: 0.98,
    transition: { duration: 0.15 },
  },
};

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.04 },
  },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const mobileLinkVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.15 } },
};

/* ------------------------------------------------------------------ */
/*  Logo                                                               */
/* ------------------------------------------------------------------ */

function NavLogo() {
  return (
    <motion.a
      className="flex shrink-0 items-center gap-2.5"
      href="/"
      variants={itemVariants}
    >
      <BrandLogo size={34} tone="ink" />
      <span
        className="text-[20px]"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          letterSpacing: "0.02em",
          color: "var(--color-ink)",
        }}
      >
        Cell Context
      </span>
    </motion.a>
  );
}

/* ------------------------------------------------------------------ */
/*  Promo Card                                                         */
/* ------------------------------------------------------------------ */

function PromoCardBlock({ promo }: { promo: PromoCard }) {
  return (
    <a
      className={cn(
        "group flex w-56 shrink-0 flex-col overflow-hidden rounded-[calc(var(--radius)+2px)] transition-shadow duration-200",
        "shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_2px_-1px_rgba(0,0,0,0.06),0px_2px_4px_0px_rgba(0,0,0,0.04)]",
        "hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.08),0px_2px_4px_-1px_rgba(0,0,0,0.08),0px_4px_8px_0px_rgba(0,0,0,0.06)]",
        "dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_2px_-1px_rgba(255,255,255,0.03),0px_2px_4px_0px_rgba(0,0,0,0.2)]",
        "dark:hover:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1),0px_2px_4px_-1px_rgba(255,255,255,0.05),0px_4px_8px_0px_rgba(0,0,0,0.3)]"
      )}
      href={promo.href}
    >
      <div className="h-32 bg-gradient-to-br from-muted via-muted/60 to-accent/40 dark:from-muted/50 dark:via-muted/30 dark:to-accent/20" />
      <div className="px-4 py-3">
        <p className="font-medium text-foreground text-sm">{promo.title}</p>
        <p className="mt-0.5 line-clamp-2 text-muted-foreground text-xs leading-relaxed">{promo.description}</p>
      </div>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  Desktop Dropdown                                                   */
/* ------------------------------------------------------------------ */

function DesktopDropdown({ config }: { config: DropdownConfig }) {
  return (
    <motion.div
      animate="visible"
      className={cn(
        "-translate-x-1/2 absolute top-full left-1/2 z-50 mt-2",
        "flex gap-6 rounded-[calc(var(--radius)+8px)] bg-background p-5",
        "shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_2px_6px_rgba(0,0,0,0.06),0px_8px_24px_rgba(0,0,0,0.06)]",
        "dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.08),0px_2px_6px_rgba(0,0,0,0.15),0px_8px_24px_rgba(0,0,0,0.3)]"
      )}
      exit="exit"
      initial="hidden"
      variants={dropdownVariants}
    >
      {config.columns.map((col) => (
        <div className="flex flex-col gap-1" key={col.heading}>
          <p className="mb-1.5 px-2 font-medium text-[11px] text-muted-foreground/70 uppercase tracking-wider">
            {col.heading}
          </p>
          {col.items.map((item) => {
            const Icon = item.icon;
            return (
              <a
                className={cn(
                  "flex items-center gap-3 rounded-[var(--radius)] px-2 py-2 transition-colors duration-150",
                  "hover:bg-muted/50"
                )}
                href={item.href}
                key={item.label}
              >
                <div
                  className={cn(
                    "flex size-9 shrink-0 items-center justify-center rounded-[calc(var(--radius)-2px)] bg-background",
                    iconShadow
                  )}
                >
                  <Icon className="size-4 text-muted-foreground" strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-foreground text-sm">{item.label}</p>
                  <p className="truncate text-muted-foreground text-xs">{item.description}</p>
                </div>
              </a>
            );
          })}
        </div>
      ))}
      {config.promo && <PromoCardBlock promo={config.promo} />}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile Accordion Section                                           */
/* ------------------------------------------------------------------ */

function MobileAccordion({ link }: { link: NavLink }) {
  const [open, setOpen] = useState(false);

  if (!link.dropdown) {
    return (
      <motion.a
        className="block rounded-[var(--radius)] px-4 py-2.5 font-medium text-[15px] text-foreground transition-colors hover:bg-muted/50"
        href={link.href}
        variants={mobileLinkVariants}
      >
        {link.label}
      </motion.a>
    );
  }

  return (
    <motion.div variants={mobileLinkVariants}>
      <button
        className="flex w-full cursor-pointer items-center justify-between rounded-[var(--radius)] px-4 py-2.5 font-medium text-[15px] text-foreground transition-colors hover:bg-muted/50"
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        {link.label}
        <ChevronDown
          className={cn("size-4 text-muted-foreground transition-transform duration-200", open && "rotate-180")}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            animate={{ height: "auto", opacity: 1 }}
            className="overflow-hidden"
            exit={{ height: 0, opacity: 0 }}
            initial={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease }}
          >
            <div className="space-y-0.5 px-4 pt-1 pb-2">
              {link.dropdown.columns.flatMap((col) =>
                col.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      className="flex items-center gap-3 rounded-[var(--radius)] px-2 py-2 transition-colors hover:bg-muted/50"
                      href={item.href}
                      key={item.label}
                    >
                      <div
                        className={cn(
                          "flex size-8 shrink-0 items-center justify-center rounded-[calc(var(--radius)-2px)] bg-background",
                          iconShadow
                        )}
                      >
                        <Icon className="size-3.5 shrink-0 text-muted-foreground" strokeWidth={1.5} />
                      </div>
                      <span className="text-foreground text-sm">{item.label}</span>
                    </a>
                  );
                })
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  NavigationMinimal                                                   */
/* ------------------------------------------------------------------ */

export function NavigationMinimal() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  // Off the homepage the nav sits over split / dark backgrounds, so keep it
  // a solid frosted bar for legibility; on home it stays transparent until scroll.
  const solid = scrolled || pathname !== "/";
  // In-page hashes only smooth-scroll on the homepage; off-home, send them to
  // the homepage section ("/#problem") so the links never dead-end.
  const linkHref = (href: string) => (href.startsWith("#") && pathname !== "/" ? `/${href}` : href);
  const links = NAV_LINKS.map((l) => ({ ...l, href: linkHref(l.href) }));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const navRef = useRef<HTMLElement>(null);
  const [mobileContentRef, { height: mobileHeight }] = useMeasure();
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  // Keyboard & click-outside handlers
  useEffect(() => {
    if (!(mobileOpen || activeDropdown)) {
      return;
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMobile();
        setActiveDropdown(null);
      }
    };
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        closeMobile();
        setActiveDropdown(null);
      }
    };
    document.addEventListener("keydown", handleKey);
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("mousedown", handleClick);
    };
  }, [mobileOpen, activeDropdown, closeMobile]);

  const handleMouseEnter = (label: string) => {
    clearTimeout(hoverTimeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <motion.nav
      animate="visible"
      className="fixed top-0 right-0 left-0 z-50"
      initial="hidden"
      ref={navRef}
      variants={navVariants}
    >
      <div className="mx-auto max-w-6xl px-4 pt-3 sm:px-6">
        <motion.div
          animate={{
            backgroundColor: solid ? "rgba(244,237,223,0.82)" : "rgba(244,237,223,0)",
          }}
          className={cn(
            "rounded-2xl px-4 transition-[backdrop-filter,box-shadow] duration-300 sm:px-5",
            solid && [
              "backdrop-blur-xl",
              "shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_2px_rgba(0,0,0,0.04),0px_2px_8px_rgba(0,0,0,0.04)]",
              "dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.08),0px_1px_2px_rgba(255,255,255,0.04),0px_2px_8px_rgba(0,0,0,0.2)]",
            ]
          )}
          transition={{ duration: 0.4, ease }}
        >
          <div className="flex h-14 items-center justify-between">
            {/* Logo */}
            <NavLogo />

            {/* Desktop Links */}
            <motion.div className="hidden items-center gap-0.5 md:flex" variants={navVariants}>
              {links.map((link) => {
                const hasDropdown = !!link.dropdown;
                return (
                  <div
                    className="relative"
                    key={link.label}
                    onMouseEnter={() => hasDropdown && handleMouseEnter(link.label)}
                    onMouseLeave={() => hasDropdown && handleMouseLeave()}
                  >
                    <motion.a
                      className={cn(
                        "inline-flex cursor-pointer items-center gap-1 rounded-full px-3.5 py-1.5 text-[14px] text-muted-foreground transition-colors duration-200 hover:text-foreground",
                        activeDropdown === link.label && "text-foreground"
                      )}
                      href={hasDropdown ? undefined : link.href}
                      onClick={
                        hasDropdown
                          ? (e) => {
                              e.preventDefault();
                              setActiveDropdown(activeDropdown === link.label ? null : link.label);
                            }
                          : undefined
                      }
                      variants={itemVariants}
                    >
                      {link.label}
                      {hasDropdown && (
                        <ChevronDown
                          className={cn(
                            "size-3.5 transition-transform duration-200",
                            activeDropdown === link.label && "rotate-180"
                          )}
                        />
                      )}
                    </motion.a>

                    <AnimatePresence>
                      {hasDropdown && activeDropdown === link.label && link.dropdown && (
                        <DesktopDropdown config={link.dropdown} />
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>

            {/* Desktop Actions */}
            <motion.div className="hidden items-center gap-2 md:flex" variants={itemVariants}>
              <motion.a
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 font-medium text-[14px] transition-shadow duration-300 hover:shadow-[0_10px_30px_rgb(22,35,59,0.18)]"
                style={{ backgroundColor: "var(--color-ink)", color: "var(--color-cream)" }}
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in touch
              </motion.a>
            </motion.div>

            {/* Mobile Toggle */}
            <motion.button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="flex size-9 cursor-pointer items-center justify-center rounded-[var(--radius)] text-foreground md:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
              variants={itemVariants}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  initial={{ opacity: 0, rotate: -90 }}
                  key={mobileOpen ? "close" : "open"}
                  transition={{ duration: 0.2 }}
                >
                  {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              animate={{ height: mobileHeight, opacity: 1 }}
              className="overflow-hidden md:hidden"
              exit={{ height: 0, opacity: 0 }}
              initial={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease }}
            >
              <div ref={mobileContentRef}>
                <motion.div
                  animate="visible"
                  className={cn(
                    "mt-2 flex flex-col gap-0.5 rounded-[calc(var(--radius)+8px)] p-3",
                    "bg-background/95 backdrop-blur-xl",
                    "shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_2px_4px_-1px_rgba(0,0,0,0.08),0px_4px_16px_0px_rgba(0,0,0,0.06)]",
                    "dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.08),0px_2px_4px_-1px_rgba(255,255,255,0.04),0px_4px_16px_0px_rgba(0,0,0,0.25)]"
                  )}
                  exit="exit"
                  initial="hidden"
                  variants={mobileMenuVariants}
                >
                  {links.map((link) => (
                    <MobileAccordion key={link.label} link={link} />
                  ))}
                  <motion.div className="mt-1 border-border/40 border-t pt-3" variants={mobileLinkVariants}>
                    <a
                      className="block rounded-[var(--radius)] px-4 py-3 text-center font-medium text-[15px]"
                      style={{ backgroundColor: "var(--color-ink)", color: "var(--color-cream)" }}
                      href="/contact"
                      onClick={closeMobile}
                    >
                      Get in touch
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
