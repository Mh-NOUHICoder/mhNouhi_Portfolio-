"use client";

import Link from "next/link";
import { Logo } from "~/components/ui/logo";
import { NumberTicker } from "~/components/ui/number-ticker";
import { IoLogoGithub } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { useGitHubRepoData } from "~/hooks/useGitHubRepoData";
import { useEffect, useState } from "react";
import { cn } from "~/lib/utils";
import { usePathname } from "next/navigation";

// Define your navigation links
const navLinks = [
  { href: "/", title: "Home" },
  { href: "#projects", title: "Projects" },
  { href: "#", title: "Blog" },
  { href: "#contact", title: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const repoData = useGitHubRepoData("Mh-NOUHICoder", "Mh-NOUHICoder");

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", changeBackground);
    return () => document.removeEventListener("scroll", changeBackground);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 left-[calc(100vw-100%)] top-4 z-40 mx-4 flex h-[60px] items-center justify-between rounded-3xl border border-border bg-card px-4 shadow-sm saturate-100 backdrop-blur-[4px] transition-all duration-200 md:mx-auto md:max-w-4xl md:px-6 lg:max-w-6xl",
        isScrolled && "border-transparent bg-background/80"
      )}
    >
      <div className="flex w-full items-center justify-between">
        {/* Logo */}
        <Link href="/" className="inline-block">
          <Logo className="w-28" />
        </Link>

        {/* Navigation Links - Desktop */}
        <nav className="hidden items-center space-x-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground",
                (pathname.startsWith(link.href) && link.href !== "/") || pathname === link.href
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* GitHub Star Button */}
        <Link
          className="group flex items-center gap-2 transition-all duration-300 hover:brightness-125"
          target="_blank"
          href={repoData.url}
        >
          <div className="flex items-center gap-1 rounded-lg bg-accent px-3 py-1.5">
            <IoLogoGithub size={18} />
            <span className="hidden text-sm font-medium sm:flex">
              Star on GitHub
            </span>
          </div>
          <div className="flex items-center gap-1 rounded-lg border border-border bg-background px-2 py-1.5">
            <FaStar
              className="transition-all duration-300 ease-in-out group-hover:rotate-180 group-hover:text-yellow-400"
              size={14}
            />
            <NumberTicker
              className="text-sm font-medium tracking-tight"
              value={repoData.starCount}
            />
          </div>
        </Link>

        {/* Mobile Navigation - You can add MobileNav component later */}
        <div className="md:hidden">
          {/* Add your mobile nav trigger here */}
          <button className="rounded-lg p-2 hover:bg-accent">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}