import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar py-7 px-6 flex items-center justify-between">
      {/* Kiri: Logo */}
      <div className="flex items-center space-x-4">
        <img src="/assets/logo_ahmad.png" alt="logo" className="w-10 h-10" />
        <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">
          Portofolio Ahmad
        </h1>
      </div>

      {/* Kanan: Menu */}
      <ul
        className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2  -translate-x-1/2 md:translate-x-0
            md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl
            md:bg-transparent transition-all md:transition-none
            ${
              active ? "top-0 opacity-100 md:opacity-100" : "top-10 opacity-0"
            }`}
      >
        <li>
          <a href="#" className="sm:text-lg text-base font-medium">
            Beranda
          </a>
        </li>
        <li>
          <a href="#" className="sm:text-lg text-base font-medium">
            Tentang
          </a>
        </li>
        <li>
          <a href="#" className="sm:text-lg text-base font-medium">
            Proyek
          </a>
        </li>
        <li>
          <a href="#" className="sm:text-lg text-base font-medium">
            Kontak
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
