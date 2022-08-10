import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link as ReactLink } from "react-scroll";

const NavBar = () => {
  const { systemTheme, setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuItems = ["Skills", "Projects", "About"];

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        if (window.pageYOffset > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
    }

    setMounted(true);
  }, [systemTheme, isScrolled]);
  if (!mounted) {
    return null;
  }
  return (
    <nav
      className={`sticky top-0 z-50 ${
        isScrolled
          ? "shadow-md backdrop-blur-md border-bottom"
          : "shadow-none backdrop-blur-none"
      }`}
    >
      <div className="flex items-center justify-around py-3 mx-auto mt-5 max-w-7xl md:justify-between ">
        <Link href="/">
          <a
            className="p-2 text-2xl font-bold border-4 sm:text-4xl border-base-300 hover:underline decoration-accent"
            href=""
          >
            TL
          </a>
        </Link>
        <div className="flex items-center gap-4">
          {menuItems.map((item) => {
            return (
              <ReactLink
                to={`${item.toLowerCase()}_container`}
                key={item}
                spy={true}
                smooth={true}
                duration={500}
                className="text-sm font-semibold underline sm:text-xl hover:text-accent hover:cursor-pointer"
              >
                {item}
              </ReactLink>
            );
          })}
          {theme === "light" ? (
            <FaMoon
              onClick={() => setTheme("dark")}
              className="ml-10 text-2xl hover:cursor-pointer"
              data-tip="hi"
            />
          ) : (
            <FaSun
              onClick={() => setTheme("light")}
              className="ml-10 text-2xl hover:cursor-pointer"
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
