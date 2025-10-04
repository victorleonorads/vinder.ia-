import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import vinderLogo from "@/assets/vinder-logo-new.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Início", href: "#home" },
    { label: "Solução", href: "#solution" },
    { label: "Features", href: "#features" },
    { label: "Para Quem É", href: "#target" }
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-white/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex-shrink-0 flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src={vinderLogo} 
              alt="Vinder.IA Logo" 
              className="h-10 md:h-12 w-auto"
            />
            <span className="text-xl md:text-2xl font-bold">
              <span style={{ color: 'hsl(225, 73%, 57%)' }}>Vinder</span>
              <span style={{ color: 'hsl(18, 100%, 60%)' }}>.IA</span>
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md rounded-lg mt-2 border border-white/20">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-600 hover:text-slate-900 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;