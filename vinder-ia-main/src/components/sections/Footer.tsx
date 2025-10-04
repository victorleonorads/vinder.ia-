import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import vinderLogo from "@/assets/vinder-logo-circle.png";
const Footer = () => {
  return <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-12">
          {/* Brand */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="space-y-4 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img src={vinderLogo} alt="Vinder.IA Logo" className="h-12 w-12" />
              <h3 className="text-3xl font-bold">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Vinder.IA</span>
              </h3>
            </div>
            <p className="text-white/70 leading-relaxed max-w-md">
              Transformamos seu WhatsApp em uma máquina de vendas inteligente que trabalha 24/7.
            </p>
            <div className="flex flex-col gap-2 text-white/60">
              <div className="flex items-center gap-2 justify-center">
                <Mail className="w-4 h-4" />
                <span>vindermidia@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Phone className="w-4 h-4" />
                <span>(21) 97548-4578</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.4,
        duration: 0.6
      }} className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/50">
            © {new Date().getFullYear()} Vinder.IA. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>;
};
export default Footer;