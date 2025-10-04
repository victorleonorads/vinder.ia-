import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const WhatsAppButton = ({ 
  children, 
  variant = "primary", 
  size = "md",
  className = "" 
}: WhatsAppButtonProps) => {
  const whatsappUrl = "https://wa.me/5521975484578?text=Ol%C3%A1!%20Gostaria%20de%20saber%20sobre%20a%20plataforma%20Vinder.IA,%20por%20favor.";
  
  const baseClasses = "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg hover:shadow-xl hover:shadow-primary/30",
    secondary: "glass-card text-white border-primary/20 hover:border-primary/40 hover:bg-primary/10",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <MessageCircle className="w-5 h-5" />
      {children}
    </motion.button>
  );
};

export default WhatsAppButton;