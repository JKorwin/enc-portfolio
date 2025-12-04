"use client";

import PillNav, { PillNavItem } from "./PillNav";

const navItems: PillNavItem[] = [
  { label: "Home", href: "/" },
  { label: "Instructions", href: "/instructions" },
  { label: "Resume", href: "/resume" },
  { label: "Proposal", href: "/proposal" },
  { label: "Algebro", href: "/algebro" },
];

export default function Navbar() {
  return (
    <PillNav
      items={navItems}
      className="portfolio-nav"
      ease="power2.easeOut"
      baseColor="#1d4ed8"
      pillColor="#ffffff"
      hoveredPillTextColor="#ffffff"
      pillTextColor="#1d4ed8"
      showLogo={false}
    />
  );
}
