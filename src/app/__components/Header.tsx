"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="group  z-[102]  h-[72px] left-[0px] top-[0px] relative -mb-2">
      <div
        className={`${
          scrolled
            ? "bg-foreground border-b-[1px] border-border_accent text-background h-[74px]"
            : "bg-background text-foreground"
        } fixed top-0 left-0 py-3 right-0 px-[109.5px] transition-all delay-50 hover:bg-foreground ease-linear  duration-[0.3s] `}
      >
        <nav className="pt-1 pb-2 gap-[30px] min-h-[65px] flex xl:min-h-[unset] navbar">
          <Link href={"/"} className="pt-1">
            <Logo scrolled={scrolled} />
          </Link>
          <div className="flex items-center justify-between pt-[9px] w-full">
            <ul
              aria-label="Navigation drawer"
              className="flex items-center  gap-7  group-hover:text-background text-[15px] delay-50 duration-[0.3s] ease-linear"
            >
              <li>
                <Link href={"/#why-hexnode"}>Why Hexnode</Link>
              </li>
              <li>
                <Link href={"/#features"}>Features</Link>
              </li>
              <li>
                <Link href="/#platforms">Platforms</Link>
              </li>
              <li><Link href={"/#customers"} >Customers</Link></li>
            </ul>
            <div>
              <Link
                className="text-foreground bg-button px-[26.5px] py-[12px] hover:bg-button_accent font-medium uppercase text-[15px] rounded-[3px]"
                href="/#"
                aria-label="14 Day Free Trial"
              >
                14 Day Free Trial
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
