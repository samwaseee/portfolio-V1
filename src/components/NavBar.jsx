import React, { useState, useEffect, useMemo } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import Image from "next/image";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const [scrollDirection, setScrollDirection] = useState("up");

  const menuItems = useMemo(
    () => [
      { name: "Home", id: "#home" },
      { name: "About", id: "#about" },
      { name: "Skills", id: "#skills" },
      { name: "Projects", id: "#projects" },
      { name: "Achievements", id: "#achievements" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Adjust for navbar height or any offset
      const sections = menuItems.map((item) => document.querySelector(item.id));

      sections.forEach((section, index) => {
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveHash(menuItems[index].id);
        }
      });
    };

    const handleScrollDirection = () => {
      let lastScrollY = window.scrollY;

      return () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
          setScrollDirection("down");
        } else {
          setScrollDirection("up");
        }
        lastScrollY = currentScrollY;
      };
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollDirection());

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollDirection());
    };
  }, [menuItems]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      className={`transition-transform duration-300 ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
        <Image
              src="/images/text-1720000143038.png"
              width={100}
              height={50}
              alt="Sam"
            />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.id} isActive={activeHash === item.id}>
            <Link
              href={item.id}
              className={`${
                activeHash === item.id
                  ? "text-[#FF0000] font-bold"
                  : "text-foreground"
              }`}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        {/* Additional content if needed */}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.id}-${index}`}>
            <Link
              href={item.id}
              onClick={handleLinkClick}
              className={`${
                activeHash === item.id
                  ? "text-[#FF0000] font-bold"
                  : "text-foreground"
              } w-full text-lg`}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
