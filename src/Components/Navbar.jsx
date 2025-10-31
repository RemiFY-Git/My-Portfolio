import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export const Navbar = () => {
  const [scrolling, setScrolling] = useState(false)
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-background/80 backdrop-blur-md",
        scrolling ? "shadow-sm" : ""
      )}
      /* className={cn(
        "fixed w-full z-40 transition-all duration-300",
        scrolling ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5"
      )} */
    >
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between py-4">
        <a href="#" className="text-xl font-bold flex items-center">
          Personal <span className="text-glow text-primary ml-1">Portfolio</span>
        </a>
      {/* <div className="container flex items-center justify-between">
        <a href="#" className="text-xl font-bold flex items-center">Personal
          <span className="relative z-10 text-glow text-primary ml-1"> Portfolio</span>
        </a> */}

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        <button
          onClick={() => setIsOpenMenu((prev) => !prev)}
          className="md:hidden p-2 z-50 text-foreground"
          aria-label={isOpenMenu ? "Close Menu" : "Open Menu"}
        >
          {isOpenMenu ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 h-screen overflow-y-auto bg-background/95 backdrop-blur-md z-50 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
            isOpenMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpenMenu(false)}
              className="text-xl mb-4 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
